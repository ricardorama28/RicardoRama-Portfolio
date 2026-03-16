"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { siteConfig, navItems } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [frame, setFrame] = useState(0);

  /* ── Scroll progress → film reel counter ── */
  const { scrollYProgress } = useScroll();
  const frameNumber = useTransform(scrollYProgress, [0, 1], [0, 99]);
  useMotionValueEvent(frameNumber, "change", (v) =>
    setFrame(Math.round(v)),
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 shadow-sm backdrop-blur-md dark:bg-warm-dark/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name + Frame counter */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="font-display text-lg font-bold text-stone-900 dark:text-stone-100"
          >
            {siteConfig.name}
          </a>
          <span
            className={`ml-2 font-mono text-xs transition-opacity duration-300 ${
              scrolled
                ? "text-stone-400 opacity-100 dark:text-stone-600"
                : "opacity-0"
            }`}
          >
            ({String(frame).padStart(2, "0")})
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="group relative text-sm font-medium text-stone-600 transition-colors hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400"
            >
              {item.label}
              {/* Animated underline — draws left-to-right */}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-amber-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-amber-400" />
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ede8df] dark:bg-[#2a2520]"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="h-px origin-left bg-amber-600/30 dark:bg-amber-400/20"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-stone-200 bg-cream/95 backdrop-blur-md md:hidden dark:border-stone-800 dark:bg-warm-dark/95"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-stone-600 transition-colors hover:bg-[#ede8df] hover:text-amber-600 dark:text-stone-400 dark:hover:bg-[#2a2520] dark:hover:text-amber-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
