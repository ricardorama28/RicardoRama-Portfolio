"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  chapter?: string; // Roman numeral — "I", "II", etc.
}

export function SectionHeading({
  title,
  subtitle,
  chapter,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const show = prefersReduced || isInView;

  return (
    <div ref={ref} className="mb-16 text-center">
      {chapter && (
        <>
          {/* Chapter label */}
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400"
            initial={prefersReduced ? false : { opacity: 0, y: -8 }}
            animate={show ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Chapter {chapter}
          </motion.p>

          {/* Ornamental rule — draws from center outward */}
          <div className="mx-auto mt-3 flex items-center justify-center gap-3">
            <motion.div
              className="h-px w-10 origin-right bg-stone-300 dark:bg-stone-600"
              initial={prefersReduced ? false : { scaleX: 0 }}
              animate={show ? { scaleX: 1 } : undefined}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.span
              className="text-[10px] text-stone-400 dark:text-stone-600"
              initial={prefersReduced ? false : { opacity: 0, scale: 0.5 }}
              animate={show ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              ✦
            </motion.span>
            <motion.div
              className="h-px w-10 origin-left bg-stone-300 dark:bg-stone-600"
              initial={prefersReduced ? false : { scaleX: 0 }}
              animate={show ? { scaleX: 1 } : undefined}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </>
      )}

      {/* Title */}
      <motion.h2
        className={`font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100 ${chapter ? "mt-4" : ""}`}
        initial={prefersReduced ? false : { opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.8,
          delay: chapter ? 0.4 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mt-4 text-lg text-stone-500 dark:text-stone-400"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, delay: chapter ? 0.55 : 0.15 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Bottom accent — only when no chapter (simple sections) */}
      {!chapter && (
        <motion.div
          className="mx-auto mt-4 h-px w-16 bg-amber-600/50 dark:bg-amber-400/40"
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )}
    </div>
  );
}
