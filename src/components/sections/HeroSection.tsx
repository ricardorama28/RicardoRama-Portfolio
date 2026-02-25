"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

/**
 * Spotlight Hero
 *
 * Two layers sit on top of the base content:
 *
 * 1. Blend layer (z-20) — a solid-white div with `mix-blend-mode: difference`.
 *    Inside a radial mask that follows the cursor, white ⊕ difference inverts
 *    every color below it: white bg → black, dark text → white.
 *
 * 2. Text layer (z-30) — the giant "RICARDO RAMA" watermark, also masked to
 *    the same spotlight circle.  Because it sits *above* the blend layer it
 *    is not inverted by it; its own low-opacity white (or dark in dark-mode)
 *    is rendered directly on top of the already-inverted area.
 *
 * Both masks are updated via a single `requestAnimationFrame` callback so
 * the DOM is touched at most once per frame.  On mobile / non-pointer
 * devices the two layers are not rendered at all.
 */

const RADIUS = 200;

function mask(x: number, y: number) {
  return `radial-gradient(circle ${RADIUS}px at ${x}px ${y}px, black 0%, black 40%, transparent 100%)`;
}

const OFF = mask(-1000, -1000);

export function HeroSection() {
  const blendRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const pos = useRef({ x: -1000, y: -1000 });
  const raf = useRef(0);
  const [isDesktop, setIsDesktop] = useState(false);

  /* ── Detect desktop with fine pointer ── */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* ── Paint both masks in one rAF ── */
  const paint = useCallback(() => {
    const m = mask(pos.current.x, pos.current.y);
    [blendRef.current, textRef.current].forEach((el) => {
      if (!el) return;
      el.style.maskImage = m;
      el.style.webkitMaskImage = m;
    });
    raf.current = 0;
  }, []);

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      pos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!raf.current) raf.current = requestAnimationFrame(paint);
    },
    [paint],
  );

  const onPointerLeave = useCallback(() => {
    pos.current = { x: -1000, y: -1000 };
    paint();
  }, [paint]);

  useEffect(() => {
    if (!isDesktop) return;
    const el = sectionRef.current;
    if (!el) return;

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [isDesktop, onPointerMove, onPointerLeave]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Ghost text — barely visible outside the spotlight */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-display select-none text-center text-[18vw] font-black uppercase leading-[0.85] tracking-tighter text-slate-900/5 dark:text-white/5">
          RICARDO
          <br />
          RAMA
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <motion.p
            className="text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            {siteConfig.role}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            React + TypeScript developer focused on product logic, UX decisions,
            and shipping tools that people actually use.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
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
              maskImage: OFF,
              WebkitMaskImage: OFF,
            }}
          />

          {/* Giant name revealed inside the spotlight */}
          <div
            ref={textRef}
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
            style={{
              willChange: "mask-image",
              maskImage: OFF,
              WebkitMaskImage: OFF,
            }}
            aria-hidden="true"
          >
            <span className="font-display select-none text-center text-[18vw] font-black uppercase leading-[0.85] tracking-tighter text-white/15 dark:text-gray-950/15">
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
          className="h-10 w-6 rounded-full border-2 border-slate-300 p-1 dark:border-slate-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-2 w-full rounded-full bg-slate-400 dark:bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
