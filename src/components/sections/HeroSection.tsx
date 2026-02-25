"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <GradientMesh />

      <div className="relative z-10 max-w-3xl text-center">
        {/* Name */}
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-sky-500 dark:text-sky-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {siteConfig.name}
        </motion.p>

        {/* Main statement */}
        <motion.h1
          className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          {siteConfig.role}
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl dark:text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          React + TypeScript developer focused on product logic, UX decisions,
          and shipping tools that people actually use.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <Button href="#projects" variant="primary">
            See what I&apos;ve built
          </Button>
          <SocialLinks />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            className="mx-auto h-10 w-6 rounded-full border-2 border-slate-300 p-1 dark:border-slate-600"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-2 w-full rounded-full bg-slate-400 dark:bg-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
