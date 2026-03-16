"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

/**
 * Wes Anderson Pastel Hero
 *
 * Entrance: Pastel-colored curtain panels part to reveal a bright,
 * symmetrical composition. Floating geometric shapes drift behind content.
 * Cursor spawns small pastel color blocks on desktop.
 */

const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const CURTAIN_DURATION = 1.2;
const CONTENT_BASE_DELAY = 0.6;

const PASTEL_COLORS = [
  "#f08bb3",
  "#ff6b6b",
  "#a8e6cf",
  "#ffe66d",
  "#79c7ff",
  "#cdb4db",
  "#ffb7a5",
];

interface FloatingBlock {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [curtainDone, setCurtainDone] = useState(false);
  const [blocks, setBlocks] = useState<FloatingBlock[]>([]);
  const blockId = useRef(0);
  const prefersReduced = useReducedMotion();

  /* ── Cursor color blocks (desktop) ── */
  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (prefersReduced) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      // Throttle: only spawn every ~120ms based on movement
      if (Math.random() > 0.15) return;
      const color =
        PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
      const id = ++blockId.current;
      const newBlock: FloatingBlock = {
        id,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        color,
        size: 12 + Math.random() * 24,
      };
      setBlocks((prev) => [...prev.slice(-12), newBlock]);
      setTimeout(() => {
        setBlocks((prev) => prev.filter((b) => b.id !== id));
      }, 1200);
    },
    [prefersReduced],
  );

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("pointermove", onPointerMove);
    return () => el.removeEventListener("pointermove", onPointerMove);
  }, [onPointerMove]);

  const d = prefersReduced ? 0 : CONTENT_BASE_DELAY;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-wes-pink/10 dark:bg-warm-dark"
    >
      {/* ── Floating geometric shapes ── */}
      {!prefersReduced && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* Circle */}
          <motion.div
            className="absolute top-[15%] left-[10%] h-20 w-20 rounded-full border-2 border-wes-pink/20 dark:border-wes-pink/10"
            animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Rectangle */}
          <motion.div
            className="absolute top-[20%] right-[12%] h-16 w-10 border-2 border-wes-sky/25 dark:border-wes-sky/10"
            animate={{ y: [0, 15, 0], rotate: [0, -45, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Diamond */}
          <motion.div
            className="absolute bottom-[25%] left-[18%] h-12 w-12 rotate-45 border-2 border-wes-yellow/25 dark:border-wes-yellow/10"
            animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Small circle */}
          <motion.div
            className="absolute right-[20%] bottom-[30%] h-8 w-8 rounded-full bg-wes-mint/15 dark:bg-wes-mint/5"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Stripe accent */}
          <motion.div
            className="absolute top-[60%] left-[5%] h-1 w-24 bg-wes-coral/15 dark:bg-wes-coral/5"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[40%] right-[8%] h-24 w-1 bg-wes-lavender/15 dark:bg-wes-lavender/5"
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* ── Cursor color blocks ── */}
      <AnimatePresence>
        {blocks.map((block) => (
          <motion.div
            key={block.id}
            className="pointer-events-none absolute z-5 rounded-sm"
            style={{
              left: block.x - block.size / 2,
              top: block.y - block.size / 2,
              width: block.size,
              height: block.size,
              backgroundColor: block.color,
            }}
            initial={{ opacity: 0.5, scale: 0, rotate: 0 }}
            animate={{ opacity: 0, scale: 1.5, rotate: 45, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* ── Ghost text ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-display select-none text-center text-[18vw] font-black uppercase leading-[0.85] tracking-tighter text-wes-pink/5 dark:text-wes-pink/3">
          RICARDO
          <br />
          RAMA
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          {/* Name label with pastel block behind */}
          <motion.div
            className="inline-block"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: d, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative inline-block px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-ink dark:text-stone-100">
              <span className="absolute inset-0 -z-10 rounded-sm bg-wes-yellow/40 dark:bg-wes-yellow/20" />
              {siteConfig.name}
            </span>
          </motion.div>

          {/* Geometric ornament */}
          <motion.div
            className="mx-auto mt-5 flex items-center justify-center gap-2"
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: d + 0.15 }}
          >
            <div className="h-2 w-2 rotate-45 bg-wes-pink/40 dark:bg-wes-pink/25" />
            <div className="h-px w-10 bg-wes-coral/40 dark:bg-wes-coral/25" />
            <div className="h-3 w-3 rounded-full border-2 border-wes-sky/40 dark:border-wes-sky/25" />
            <div className="h-px w-10 bg-wes-coral/40 dark:bg-wes-coral/25" />
            <div className="h-2 w-2 rotate-45 bg-wes-pink/40 dark:bg-wes-pink/25" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl dark:text-stone-100"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: d + 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {siteConfig.role}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-lg leading-relaxed text-ink-light sm:text-xl dark:text-stone-400"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: d + 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            React + TypeScript developer focused on product logic, UX decisions,
            and shipping tools that people actually use.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: d + 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button href="#projects" variant="primary">
              See what I&apos;ve built
            </Button>
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      {/* ── Curtain reveal — pastel panels ── */}
      <AnimatePresence>
        {!curtainDone && !prefersReduced && (
          <>
            <motion.div
              className="absolute inset-0 z-40 bg-wes-pink"
              style={{ clipPath: "inset(0 50% 0 0)" }}
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              exit={{ opacity: 0 }}
              transition={{
                x: { duration: CURTAIN_DURATION, ease: CURTAIN_EASE, delay: 0.3 },
              }}
            />
            <motion.div
              className="absolute inset-0 z-40 bg-wes-sky"
              style={{ clipPath: "inset(0 0 0 50%)" }}
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{
                x: { duration: CURTAIN_DURATION, ease: CURTAIN_EASE, delay: 0.3 },
              }}
              onAnimationComplete={() => setCurtainDone(true)}
            />
            <motion.div
              className="absolute top-0 bottom-0 left-1/2 z-40 w-0.5 -translate-x-1/2 bg-white/50"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReduced ? 0 : d + 1.0, duration: 1 }}
      >
        <motion.div
          className="h-10 w-6 rounded-full border-2 border-wes-pink/40 p-1 dark:border-wes-pink/25"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-2 w-full rounded-full bg-wes-pink/60 dark:bg-wes-pink/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
