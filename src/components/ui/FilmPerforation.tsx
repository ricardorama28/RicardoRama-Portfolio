"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function FilmPerforation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const show = prefersReduced || isInView;

  const perforations = Array.from({ length: 5 });

  return (
    <div ref={ref} className="relative py-8">
      <div className="mx-auto flex max-w-sm items-center justify-center gap-3">
        {/* Left rule */}
        <motion.div
          className="h-px flex-1 origin-right bg-stone-300/50 dark:bg-stone-700/50"
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Sprocket holes */}
        {perforations.map((_, i) => (
          <motion.div
            key={i}
            className="h-3 w-2 rounded-sm bg-stone-300/40 dark:bg-stone-700/40"
            initial={
              prefersReduced ? false : { opacity: 0, scale: 0 }
            }
            animate={show ? { opacity: 1, scale: 1 } : undefined}
            transition={{
              delay: 0.1 + i * 0.04,
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Right rule */}
        <motion.div
          className="h-px flex-1 origin-left bg-stone-300/50 dark:bg-stone-700/50"
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
