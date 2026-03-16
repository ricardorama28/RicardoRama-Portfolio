"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const sceneNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gbh-rose/20 bg-cream p-8 dark:border-gbh-rose-light/20 dark:bg-warm-dark-alt"
      whileHover={isDesktop ? { y: -6 } : undefined}
      transition={{ duration: 0.3 }}
      onHoverStart={() => isDesktop && setHovered(true)}
      onHoverEnd={() => isDesktop && setHovered(false)}
      style={
        isDesktop
          ? {
              boxShadow: hovered
                ? "0 20px 40px -12px rgba(196,86,122,0.15)"
                : "0 0 0 0 transparent",
              transition: "box-shadow 0.4s ease",
            }
          : undefined
      }
    >
      {/* Room number — top right */}
      <span className="absolute top-4 right-4 font-display text-xs text-gbh-rose/30 dark:text-gbh-rose-light/30">
        {sceneNumber}
      </span>

      {/* ── Normal card content ── */}
      <motion.div
        className="flex flex-1 flex-col"
        animate={hovered ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="mb-2 h-px w-12 bg-gbh-rose/40 dark:bg-gbh-rose-light/30" />
          <h3 className="font-display text-xl font-bold text-gbh-plum dark:text-stone-100">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gbh-plum-light dark:text-stone-400">
            {project.subtitle}
          </p>
        </div>

        {/* Problem / Decision / Impact */}
        <div className="flex-1 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gbh-rose/60 dark:text-gbh-rose-light/60">
              Problem
            </p>
            <p className="mt-1 text-sm leading-relaxed text-gbh-plum-light dark:text-stone-400">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gbh-rose/60 dark:text-gbh-rose-light/60">
              Key decision
            </p>
            <p className="mt-1 text-sm leading-relaxed text-gbh-plum-light dark:text-stone-400">
              {project.decision}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gbh-rose/60 dark:text-gbh-rose-light/60">
              Impact
            </p>
            <p className="mt-1 text-sm leading-relaxed text-gbh-plum-light dark:text-stone-400">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gbh-rose/10 px-3 py-1 text-xs font-medium text-gbh-plum-light dark:bg-gbh-rose-light/10 dark:text-stone-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gbh-plum-light transition-colors hover:text-gbh-rose dark:text-stone-400 dark:hover:text-gbh-rose-light"
            >
              GitHub &rarr;
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gbh-plum-light transition-colors hover:text-gbh-rose dark:text-stone-400 dark:hover:text-gbh-rose-light"
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      </motion.div>

      {/* ── Grand Budapest title card overlay (desktop hover only) ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gbh-plum/90 p-6 dark:bg-cream/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Wes Anderson frame-within-frame border */}
            <div className="absolute inset-3 rounded-lg border border-gbh-gold/30 dark:border-gbh-gold/20" />

            {/* Art deco ornaments — top */}
            <div className="absolute top-0 right-0 left-0 flex justify-center gap-2 py-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="text-[8px] text-gbh-gold/30 dark:text-gbh-gold/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.02, duration: 0.2 }}
                >
                  &#9830;
                </motion.span>
              ))}
            </div>

            {/* Title card content */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="h-px w-6 bg-gbh-gold/60" />
              <span className="text-[10px] text-gbh-gold/50">&#9830;</span>
              <div className="h-px w-6 bg-gbh-gold/60" />
            </motion.div>

            <motion.h3
              className="font-display mt-3 text-center text-2xl font-bold text-cream dark:text-gbh-plum"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="mt-2 text-xs font-medium uppercase tracking-widest text-gbh-rose-light/80 dark:text-gbh-plum-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              className="mt-3 flex items-center gap-3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="h-px w-6 bg-gbh-gold/60" />
              <span className="text-[10px] text-gbh-gold/50">&#9830;</span>
              <div className="h-px w-6 bg-gbh-gold/60" />
            </motion.div>

            {/* Overlay links */}
            <motion.div
              className="mt-5 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gbh-rose-light/80 transition-colors hover:text-gbh-gold dark:text-gbh-plum-light dark:hover:text-gbh-rose"
                >
                  GitHub &rarr;
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gbh-rose-light/80 transition-colors hover:text-gbh-gold dark:text-gbh-plum-light dark:hover:text-gbh-rose"
                >
                  Live Demo &rarr;
                </a>
              )}
            </motion.div>

            {/* Art deco ornaments — bottom */}
            <div className="absolute right-0 bottom-0 left-0 flex justify-center gap-2 py-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="text-[8px] text-gbh-gold/30 dark:text-gbh-gold/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.02, duration: 0.2 }}
                >
                  &#9830;
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
