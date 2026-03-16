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

const NAV_COLORS = ["#f08bb3", "#79c7ff", "#a8e6cf", "#ffe66d"];

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
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-sm backdrop-blur-md dark:bg-warm-dark/85"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="font-display text-lg font-bold text-ink dark:text-stone-100"
          >
            {siteConfig.name}
          </a>
          <span
            className={`ml-2 font-mono text-xs transition-opacity duration-300 ${
              scrolled
                ? "text-wes-pink opacity-100 dark:text-wes-pink/70"
                : "opacity-0"
            }`}
          >
            ({String(frame).padStart(2, "0")})
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="group relative text-sm font-medium text-ink-light transition-colors hover:text-ink dark:text-stone-400 dark:hover:text-stone-100"
            >
              {item.label}
              <span
                className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: NAV_COLORS[i % NAV_COLORS.length] }}
              />
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-wes-pink/15 dark:bg-wes-pink/10"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Rainbow scroll progress */}
      <motion.div
        className="h-0.5 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, #f08bb3, #ff6b6b, #ffe66d, #a8e6cf, #79c7ff, #cdb4db)",
        }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-wes-pink/20 bg-cream/95 backdrop-blur-md md:hidden dark:border-wes-pink/10 dark:bg-warm-dark/95"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-ink-light transition-colors hover:text-ink dark:text-stone-400 dark:hover:text-stone-100"
                  style={{
                    borderLeft: `3px solid ${NAV_COLORS[i % NAV_COLORS.length]}`,
                  }}
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
