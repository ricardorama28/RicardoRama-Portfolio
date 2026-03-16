"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  chapter?: string;
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
            className="text-xs font-medium uppercase tracking-[0.3em] text-gbh-rose dark:text-gbh-rose-light"
            initial={prefersReduced ? false : { opacity: 0, y: -8 }}
            animate={show ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Chapter {chapter}
          </motion.p>

          {/* Art deco ornamental rule */}
          <div className="mx-auto mt-3 flex items-center justify-center gap-3">
            <motion.div
              className="h-px w-10 origin-right bg-gbh-gold/40 dark:bg-gbh-gold-light/30"
              initial={prefersReduced ? false : { scaleX: 0 }}
              animate={show ? { scaleX: 1 } : undefined}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.span
              className="text-[10px] text-gbh-gold dark:text-gbh-gold-light"
              initial={prefersReduced ? false : { opacity: 0, scale: 0.5 }}
              animate={show ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              &#9830;
            </motion.span>
            <motion.div
              className="h-px w-10 origin-left bg-gbh-gold/40 dark:bg-gbh-gold-light/30"
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
        className={`font-display text-3xl font-bold tracking-tight text-gbh-plum sm:text-4xl dark:text-stone-100 ${chapter ? "mt-4" : ""}`}
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
          className="mt-4 text-lg text-gbh-plum-light dark:text-stone-400"
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
          className="mx-auto mt-4 h-px w-16 bg-gbh-rose/50 dark:bg-gbh-rose-light/40"
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )}
    </div>
  );
}
