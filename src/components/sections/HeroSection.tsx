"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

/**
 * Spotlight Hero — lerp + breathing + intensity fade
 *
 * Layers (bottom → top):
 *   z-0   Ghost text    "RICARDO RAMA" at 5 % opacity, always faintly visible
 *   z-10  Main content  name · headline · subtitle · CTA (clickable)
 *   z-20  Blend layer   white + mix-blend-mode: difference (inverts colors)
 *   z-30  Text layer    "RICARDO RAMA" at 15 % opacity (revealed inside spotlight)
 *
 * The spotlight follows the cursor with a smooth trail (lerp), oscillates its
 * radius (breathing), and fades in/out gradually via an intensity multiplier.
 * The animation loop self-starts on pointerenter and self-terminates once
 * intensity reaches ≈ 0 after pointerleave — no wasted frames when idle.
 */

/* ── Tuning constants ── */
const BASE_RADIUS = 200;
const LERP_SPEED = 0.08; // position smoothing  (lower = more trail)
const INTENSITY_SPEED = 0.06; // fade-in / fade-out speed
const BREATH_AMP = 12; // ±px radius oscillation
const BREATH_PERIOD = 1000; // ms per sine cycle

function mask(x: number, y: number, r: number) {
  return `radial-gradient(circle ${r}px at ${x}px ${y}px, black 0%, black 40%, transparent 100%)`;
}

const INITIAL_MASK = mask(0, 0, 0);

export function HeroSection() {
  const blendRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* Animation state — all in refs to avoid re-renders */
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const intensityTarget = useRef(0);
  const intensity = useRef(0);
  const loopId = useRef(0);

  const [isDesktop, setIsDesktop] = useState(false);

  /* ── Detect desktop + fine pointer + no reduced-motion ── */
  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* ── Core animation loop ── */
  const tick = useCallback(() => {
    // Lerp position toward target
    current.current.x += (target.current.x - current.current.x) * LERP_SPEED;
    current.current.y += (target.current.y - current.current.y) * LERP_SPEED;

    // Lerp intensity toward its target
    intensity.current +=
      (intensityTarget.current - intensity.current) * INTENSITY_SPEED;

    // Breathing: subtle radius oscillation
    const breath =
      Math.sin(performance.now() / BREATH_PERIOD) * BREATH_AMP;

    // Final radius
    const r = Math.max(0, (BASE_RADIUS + breath) * intensity.current);

    // Apply mask to both layers
    const m = mask(current.current.x, current.current.y, r);
    const blend = blendRef.current;
    const text = textRef.current;
    if (blend) {
      blend.style.maskImage = m;
      blend.style.webkitMaskImage = m;
    }
    if (text) {
      text.style.maskImage = m;
      text.style.webkitMaskImage = m;
    }

    // Self-terminate when fully faded out
    if (intensityTarget.current === 0 && intensity.current < 0.001) {
      intensity.current = 0;
      loopId.current = 0;
      return;
    }

    loopId.current = requestAnimationFrame(tick);
  }, []);

  /* ── Pointer handlers ── */
  const onPointerEnter = useCallback(
    (e: PointerEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Snap both current and target so the spotlight appears at entry point
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.current = { x, y };
      current.current = { x, y };

      intensityTarget.current = 1;

      // Start loop if not already running
      if (!loopId.current) {
        loopId.current = requestAnimationFrame(tick);
      }
    },
    [tick],
  );

  const onPointerMove = useCallback((e: PointerEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const onPointerLeave = useCallback(() => {
    // Don't kill the loop — let it fade out gracefully
    intensityTarget.current = 0;
  }, []);

  /* ── Bind / unbind events ── */
  useEffect(() => {
    if (!isDesktop) return;
    const el = sectionRef.current;
    if (!el) return;

    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
      if (loopId.current) {
        cancelAnimationFrame(loopId.current);
        loopId.current = 0;
      }
    };
  }, [isDesktop, onPointerEnter, onPointerMove, onPointerLeave]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-cream dark:bg-warm-dark"
    >
      {/* Ghost text — barely visible outside the spotlight */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-display select-none text-center text-[18vw] font-black uppercase leading-[0.85] tracking-tighter text-stone-900/5 dark:text-white/5">
          RICARDO
          <br />
          RAMA
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <motion.p
            className="text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl md:text-6xl dark:text-stone-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteConfig.role}
          </motion.h1>

          <motion.p
            className="mt-8 text-lg leading-relaxed text-stone-500 sm:text-xl dark:text-stone-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            React + TypeScript developer focused on product logic, UX decisions,
            and shipping tools that people actually use.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="#projects" variant="primary">
              See what I&apos;ve built
            </Button>
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      {/* ── Spotlight layers (desktop only) ── */}
      {isDesktop && (
        <>
          {/* Color inversion — mix-blend-mode: difference */}
          <div
            ref={blendRef}
            className="pointer-events-none absolute inset-0 z-20 bg-white"
            style={{
              mixBlendMode: "difference",
              willChange: "mask-image",
              maskImage: INITIAL_MASK,
              WebkitMaskImage: INITIAL_MASK,
            }}
          />

          {/* Giant name revealed inside the spotlight */}
          <div
            ref={textRef}
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
            style={{
              willChange: "mask-image",
              maskImage: INITIAL_MASK,
              WebkitMaskImage: INITIAL_MASK,
            }}
            aria-hidden="true"
          >
            <span className="font-display select-none text-center text-[18vw] font-black uppercase leading-[0.85] tracking-tighter text-white/15 dark:text-stone-950/15">
              RICARDO
              <br />
              RAMA
            </span>
          </div>
        </>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          className="h-10 w-6 rounded-full border-2 border-stone-300 p-1 dark:border-stone-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-2 w-full rounded-full bg-stone-400 dark:bg-stone-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
