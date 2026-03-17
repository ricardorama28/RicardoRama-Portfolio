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
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

  const variants = {
    primary:
      "bg-wes-coral text-white hover:bg-wes-coral/85 dark:bg-wes-pink dark:text-white dark:hover:bg-wes-pink/85",
    secondary:
      "border-2 border-wes-pink/30 bg-transparent text-ink hover:bg-wes-pink/10 dark:border-wes-pink/20 dark:text-stone-300 dark:hover:bg-wes-pink/10",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        download={download}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
