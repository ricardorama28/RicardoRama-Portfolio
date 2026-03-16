"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Geometric Pastel Divider — Wes Anderson style
 * Symmetrical color blocks and shapes that animate on scroll.
 */

const BLOCK_COLORS = [
  "bg-wes-pink/30",
  "bg-wes-sky/30",
  "bg-wes-yellow/30",
  "bg-wes-mint/30",
  "bg-wes-coral/30",
  "bg-wes-lavender/30",
  "bg-wes-peach/30",
];

const DARK_BLOCK_COLORS = [
  "dark:bg-wes-pink/15",
  "dark:bg-wes-sky/15",
  "dark:bg-wes-yellow/15",
  "dark:bg-wes-mint/15",
  "dark:bg-wes-coral/15",
  "dark:bg-wes-lavender/15",
  "dark:bg-wes-peach/15",
];

export function FilmPerforation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const show = prefersReduced || isInView;

  return (
    <div ref={ref} className="relative py-6">
      <div className="mx-auto flex max-w-md items-center justify-center gap-1.5">
        {/* Animated color blocks */}
        {BLOCK_COLORS.map((color, i) => (
          <motion.div
            key={i}
            className={`h-2 rounded-sm ${color} ${DARK_BLOCK_COLORS[i]}`}
            style={{ flex: i === 3 ? 2 : 1 }}
            initial={prefersReduced ? false : { scaleX: 0 }}
            animate={show ? { scaleX: 1 } : undefined}
            transition={{
              duration: 0.4,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      {/* Center geometric accent */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <motion.div
          className="h-1.5 w-1.5 rotate-45 bg-wes-coral/30 dark:bg-wes-coral/15"
          initial={prefersReduced ? false : { scale: 0 }}
          animate={show ? { scale: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.3 }}
        />
        <motion.div
          className="h-1 w-1 rounded-full bg-wes-sky/30 dark:bg-wes-sky/15"
          initial={prefersReduced ? false : { scale: 0 }}
          animate={show ? { scale: 1 } : undefined}
          transition={{ delay: 0.35, duration: 0.3 }}
        />
        <motion.div
          className="h-1.5 w-1.5 rotate-45 bg-wes-coral/30 dark:bg-wes-coral/15"
          initial={prefersReduced ? false : { scale: 0 }}
          animate={show ? { scale: 1 } : undefined}
          transition={{ delay: 0.4, duration: 0.3 }}
        />
      </div>
    </div>
  );
}
