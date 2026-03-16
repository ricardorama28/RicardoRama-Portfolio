"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

/**
 * Projects section with checkerboard reveal animation.
 * Cards appear through a grid-based stagger pattern.
 */
export function ProjectsSection() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative bg-wes-peach/15 px-6 py-32 dark:bg-warm-dark checkerboard-bg"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What I've Built"
          subtitle="Real problems I spotted, and the tools I built to solve them"
          chapter="II"
          color="coral"
        />

        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={
                prefersReduced
                  ? false
                  : { opacity: 0, scale: 0.85, rotateY: -15 }
              }
              animate={
                gridInView
                  ? { opacity: 1, scale: 1, rotateY: 0 }
                  : undefined
              }
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
