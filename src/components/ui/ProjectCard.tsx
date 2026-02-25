"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors dark:border-slate-800 dark:bg-gray-900"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="mb-2 h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-sky-500 dark:text-sky-400">
          {project.subtitle}
        </p>
      </div>

      {/* Problem / Decision / Impact */}
      <div className="flex-1 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Problem
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.problem}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Key decision
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.decision}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Impact
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.impact}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
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
            className="text-sm font-medium text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
          >
            GitHub &rarr;
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
          >
            Live Demo &rarr;
          </a>
        )}
      </div>
    </motion.div>
  );
}
