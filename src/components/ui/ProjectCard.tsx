"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CARD_COLORS = [
  { border: "#f08bb3", bg: "rgba(240,139,179,0.08)", tile: "#f08bb3" },
  { border: "#79c7ff", bg: "rgba(121,199,255,0.08)", tile: "#79c7ff" },
  { border: "#a8e6cf", bg: "rgba(168,230,207,0.08)", tile: "#a8e6cf" },
];

const TILE_COLORS = ["#f08bb3", "#ff6b6b", "#a8e6cf", "#ffe66d", "#79c7ff", "#cdb4db", "#ffb7a5"];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const colorSet = CARD_COLORS[index % CARD_COLORS.length];
  const sceneNumber = String(index + 1).padStart(2, "0");

  // Generate mosaic tile positions for hover effect
  const tiles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i % 4) * 25,
    y: Math.floor(i / 4) * 33.33,
    color: TILE_COLORS[i % TILE_COLORS.length],
    delay: i * 0.03,
  }));

  return (
    <motion.div
      ref={cardRef}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-cream p-8 dark:bg-warm-dark-alt"
      style={{
        border: `2px solid ${colorSet.border}40`,
        backgroundColor: colorSet.bg,
      }}
      whileHover={isDesktop ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      onHoverStart={() => isDesktop && setHovered(true)}
      onHoverEnd={() => isDesktop && setHovered(false)}
    >
      {/* Scene number — top right */}
      <span
        className="absolute top-4 right-4 font-display text-xs font-bold"
        style={{ color: `${colorSet.border}50` }}
      >
        {sceneNumber}
      </span>

      {/* ── Normal card content ── */}
      <motion.div
        className="flex flex-1 flex-col"
        animate={hovered ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="mb-6">
          <div
            className="mb-2 h-1 w-12 rounded-full"
            style={{ backgroundColor: `${colorSet.border}60` }}
          />
          <h3 className="font-display text-xl font-bold text-ink dark:text-stone-100">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-ink-light dark:text-stone-400">
            {project.subtitle}
          </p>
        </div>

        <div className="flex-1 space-y-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-wes-coral/70 dark:text-wes-coral/50">
              Problem
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-light dark:text-stone-400">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-wes-sky/70 dark:text-wes-sky/50">
              Key decision
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-light dark:text-stone-400">
              {project.decision}
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-wes-mint/80 dark:text-wes-mint/50">
              Impact
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-light dark:text-stone-400">
              {project.impact}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-medium text-ink-light dark:text-stone-400"
              style={{
                backgroundColor: `${TILE_COLORS[tagIdx % TILE_COLORS.length]}20`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-wes-coral transition-colors hover:text-wes-pink dark:text-wes-coral/80"
            >
              GitHub &rarr;
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-wes-sky transition-colors hover:text-wes-pink dark:text-wes-sky/80"
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      </motion.div>

      {/* ── Mosaic tile hover overlay ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated pastel tiles */}
            {tiles.map((tile) => (
              <motion.div
                key={tile.id}
                className="absolute"
                style={{
                  left: `${tile.x}%`,
                  top: `${tile.y}%`,
                  width: "25%",
                  height: "33.33%",
                  backgroundColor: tile.color,
                }}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 10 }}
                transition={{
                  duration: 0.3,
                  delay: tile.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {/* Content on top of tiles */}
            <motion.div
              className="relative z-20 flex h-full flex-col items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              {/* Framed title card */}
              <div className="rounded-sm border-2 border-white/40 bg-white/90 px-8 py-6 text-center shadow-lg dark:border-ink/20 dark:bg-ink/90">
                <div className="mx-auto mb-2 flex items-center justify-center gap-2">
                  <div className="h-px w-6 bg-ink/20" />
                  <div className="h-1.5 w-1.5 rotate-45 bg-wes-coral/60" />
                  <div className="h-px w-6 bg-ink/20" />
                </div>

                <h3 className="font-display text-2xl font-bold text-ink dark:text-cream">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink-light dark:text-stone-400">
                  {project.subtitle}
                </p>

                <div className="mx-auto mt-2 flex items-center justify-center gap-2">
                  <div className="h-px w-6 bg-ink/20" />
                  <div className="h-1.5 w-1.5 rotate-45 bg-wes-coral/60" />
                  <div className="h-px w-6 bg-ink/20" />
                </div>

                <div className="mt-4 flex justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-wes-coral transition-colors hover:text-wes-pink"
                    >
                      GitHub &rarr;
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-wes-sky transition-colors hover:text-wes-pink"
                    >
                      Demo &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
