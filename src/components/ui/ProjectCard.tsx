"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group flex flex-col rounded-xl border border-stone-200 bg-cream p-8 transition-colors dark:border-stone-800 dark:bg-warm-dark-alt"
      whileHover={{ y: -3, transition: { duration: 0.3 } }}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="mb-2 h-px w-12 bg-amber-600/40 dark:bg-amber-400/30" />
        <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-stone-500 dark:text-stone-400">
          {project.subtitle}
        </p>
      </div>

      {/* Problem / Decision / Impact */}
      <div className="flex-1 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
            Problem
          </p>
          <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {project.problem}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
            Key decision
          </p>
          <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {project.decision}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
            Impact
          </p>
          <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {project.impact}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#ede8df] px-3 py-1 text-xs font-medium text-stone-600 dark:bg-[#2a2520] dark:text-stone-400"
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
            className="text-sm font-medium text-stone-500 transition-colors hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400"
          >
            GitHub &rarr;
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-stone-500 transition-colors hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400"
          >
            Live Demo &rarr;
          </a>
        )}
      </div>
    </motion.div>
  );
}
