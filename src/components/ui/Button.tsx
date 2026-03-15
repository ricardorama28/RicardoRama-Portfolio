"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors";

  const variants = {
    primary:
      "bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-400 dark:text-[#1a1714] dark:hover:bg-amber-300",
    secondary:
      "border border-stone-300 bg-transparent text-stone-700 hover:bg-[#ede8df] dark:border-stone-700 dark:text-stone-300 dark:hover:bg-[#2a2520]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
