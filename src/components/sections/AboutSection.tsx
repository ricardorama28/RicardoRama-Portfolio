"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function AboutSection() {
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const showQuote = prefersReduced || quoteInView;

  const quoteLines = [
    "I start from the problem, not the technology.",
    "Before writing a single line of code, I need to understand",
    "who has the problem, why current solutions fail, and what",
    "the simplest path to a working product looks like.",
  ];

  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="How I Work" chapter="I" />

        {/* Editorial pull-quote — line-by-line fade-up reveal */}
        <div ref={quoteRef} className="relative mb-8 pl-6">
          {/* Animated border — rose accent */}
          <motion.div
            className="absolute top-0 left-0 w-0.5 origin-top bg-gbh-rose/40 dark:bg-gbh-rose-light/40"
            initial={prefersReduced ? { height: "100%" } : { height: 0 }}
            animate={showQuote ? { height: "100%" } : undefined}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />

          {quoteLines.map((line, i) => (
            <motion.span
              key={i}
              className="font-display block text-xl italic leading-relaxed text-gbh-plum-light dark:text-stone-300"
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={showQuote ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
              {i < quoteLines.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </div>

        <FadeInOnScroll delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed text-gbh-plum-light dark:text-stone-400">
            <p>
              I build with React and TypeScript because they let me move fast
              without sacrificing reliability. I care about the details that
              users notice: loading states, edge cases, and interfaces that feel
              intuitive without needing a manual.
            </p>
            <p>
              My projects come from real friction I&apos;ve observed. A search
              system full of misleading listings. Surgeons logging procedures on
              paper. Tourists with no good way to compare beaches. I spot these
              gaps and build the tool that should exist.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
