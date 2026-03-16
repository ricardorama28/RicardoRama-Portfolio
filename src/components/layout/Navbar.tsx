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
        {/* Logo / Name + Floor counter */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="font-display text-lg font-bold text-gbh-plum dark:text-stone-100"
          >
            {siteConfig.name}
          </a>
          <span
            className={`ml-2 font-mono text-xs transition-opacity duration-300 ${
              scrolled
                ? "text-gbh-rose/60 opacity-100 dark:text-gbh-rose-light/60"
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
              className="group relative text-sm font-medium text-gbh-plum-light transition-colors hover:text-gbh-rose dark:text-stone-400 dark:hover:text-gbh-rose-light"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gbh-rose transition-transform duration-300 group-hover:scale-x-100 dark:bg-gbh-rose-light" />
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gbh-rose/10 dark:bg-gbh-rose-light/10"
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

      {/* Scroll progress bar — rose accent */}
      <motion.div
        className="h-px origin-left bg-gbh-rose/30 dark:bg-gbh-rose-light/20"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gbh-rose/20 bg-cream/95 backdrop-blur-md md:hidden dark:border-gbh-rose-light/20 dark:bg-warm-dark/95"
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
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gbh-plum-light transition-colors hover:bg-gbh-rose/10 hover:text-gbh-rose dark:text-stone-400 dark:hover:bg-gbh-rose-light/10 dark:hover:text-gbh-rose-light"
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
