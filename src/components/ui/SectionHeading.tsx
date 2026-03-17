"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  chapter?: string;
  color?: "pink" | "coral" | "mint" | "yellow" | "sky" | "lavender" | "peach";
}

const COLOR_MAP: Record<string, { bg: string; accent: string; diamond: string }> = {
  pink: { bg: "bg-wes-pink/20 dark:bg-wes-pink/10", accent: "bg-wes-pink/40", diamond: "bg-wes-pink/50" },
  coral: { bg: "bg-wes-coral/20 dark:bg-wes-coral/10", accent: "bg-wes-coral/40", diamond: "bg-wes-coral/50" },
  mint: { bg: "bg-wes-mint/25 dark:bg-wes-mint/10", accent: "bg-wes-mint/40", diamond: "bg-wes-mint/50" },
  yellow: { bg: "bg-wes-yellow/25 dark:bg-wes-yellow/10", accent: "bg-wes-yellow/40", diamond: "bg-wes-yellow/50" },
  sky: { bg: "bg-wes-sky/20 dark:bg-wes-sky/10", accent: "bg-wes-sky/40", diamond: "bg-wes-sky/50" },
  lavender: { bg: "bg-wes-lavender/25 dark:bg-wes-lavender/10", accent: "bg-wes-lavender/40", diamond: "bg-wes-lavender/50" },
  peach: { bg: "bg-wes-peach/25 dark:bg-wes-peach/10", accent: "bg-wes-peach/40", diamond: "bg-wes-peach/50" },
};

export function SectionHeading({
  title,
  subtitle,
  chapter,
  color = "pink",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const show = prefersReduced || isInView;
  const colors = COLOR_MAP[color];

  return (
    <div ref={ref} className="mb-16 text-center">
      {chapter && (
        <>
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-light dark:text-stone-400"
            initial={prefersReduced ? false : { opacity: 0, y: -8 }}
            animate={show ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Chapter {chapter}
          </motion.p>

          {/* Geometric ornament row */}
          <motion.div
            className="mx-auto mt-3 flex items-center justify-center gap-2"
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={show ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="h-1.5 w-1.5 rotate-45 bg-wes-pink/40" />
            <div className="h-px w-8 bg-wes-coral/30" />
            <div className="h-2 w-2 rounded-full border border-wes-sky/40" />
            <div className="h-px w-8 bg-wes-coral/30" />
            <div className="h-1.5 w-1.5 rotate-45 bg-wes-pink/40" />
          </motion.div>
        </>
      )}

      {/* Title with pastel color block behind */}
      <motion.div
        className={`mt-4 inline-block ${chapter ? "" : "mt-0"}`}
        initial={prefersReduced ? false : { opacity: 0, y: 16 }}
        animate={show ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.8,
          delay: chapter ? 0.3 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2 className="font-display relative inline-block px-6 py-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-stone-100">
          <span className={`absolute inset-0 -z-10 rounded-sm ${colors.bg}`} />
          {title}
        </h2>
      </motion.div>

      {subtitle && (
        <motion.p
          className="mt-4 text-lg text-ink-light dark:text-stone-400"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6, delay: chapter ? 0.45 : 0.15 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Bottom geometric accent */}
      {!chapter && (
        <motion.div
          className="mx-auto mt-4 flex items-center justify-center gap-2"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={show ? { opacity: 1 } : undefined}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className={`h-1 w-6 rounded-full ${colors.accent}`} />
          <div className={`h-2 w-2 rotate-45 ${colors.diamond}`} />
          <div className={`h-1 w-6 rounded-full ${colors.accent}`} />
        </motion.div>
      )}
    </div>
  );
}
