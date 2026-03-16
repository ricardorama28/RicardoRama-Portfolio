"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Art Deco Divider — Grand Budapest Hotel style
 * Replaces film perforations with a symmetrical ornamental separator.
 */
export function FilmPerforation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const show = prefersReduced || isInView;

  return (
    <div ref={ref} className="relative py-8">
      <div className="mx-auto flex max-w-sm items-center justify-center gap-3">
        {/* Left rule */}
        <motion.div
          className="h-px flex-1 origin-right bg-gbh-gold/30 dark:bg-gbh-gold-light/20"
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Art deco diamond ornaments */}
        <motion.span
          className="text-[10px] text-gbh-gold/50 dark:text-gbh-gold-light/40"
          initial={prefersReduced ? false : { opacity: 0, scale: 0 }}
          animate={show ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          &#9830;
        </motion.span>
        <motion.span
          className="text-xs text-gbh-rose/40 dark:text-gbh-rose-light/30"
          initial={prefersReduced ? false : { opacity: 0, scale: 0 }}
          animate={show ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          &#9830;
        </motion.span>
        <motion.span
          className="text-sm text-gbh-gold/60 dark:text-gbh-gold-light/40"
          initial={prefersReduced ? false : { opacity: 0, scale: 0 }}
          animate={show ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          &#9830;
        </motion.span>
        <motion.span
          className="text-xs text-gbh-rose/40 dark:text-gbh-rose-light/30"
          initial={prefersReduced ? false : { opacity: 0, scale: 0 }}
          animate={show ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.25, duration: 0.3 }}
        >
          &#9830;
        </motion.span>
        <motion.span
          className="text-[10px] text-gbh-gold/50 dark:text-gbh-gold-light/40"
          initial={prefersReduced ? false : { opacity: 0, scale: 0 }}
          animate={show ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          &#9830;
        </motion.span>

        {/* Right rule */}
        <motion.div
          className="h-px flex-1 origin-left bg-gbh-gold/30 dark:bg-gbh-gold-light/20"
          initial={prefersReduced ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
