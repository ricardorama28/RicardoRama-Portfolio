"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors dark:border-slate-800 dark:bg-gray-900"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Decorative gradient bar */}
      <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />

      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
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
      <div className="mt-5 flex gap-3">
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
