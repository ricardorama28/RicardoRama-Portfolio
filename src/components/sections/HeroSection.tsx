"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { FloatingAnimation } from "@/components/motion/FloatingAnimation";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <GradientMesh />

      <div className="relative z-10 text-center">
        {/* Name with floating animation */}
        <FloatingAnimation>
          <motion.h1
            className="font-display cursor-default text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl md:text-8xl lg:text-9xl dark:text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            {siteConfig.name}
          </motion.h1>
        </FloatingAnimation>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-xl font-medium text-slate-500 sm:text-2xl dark:text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {siteConfig.role}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button href="/ricardo-rama-cv.pdf" variant="primary" download>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
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
