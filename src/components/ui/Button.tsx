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
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

  const variants = {
    primary:
      "bg-sky-500 text-white hover:bg-sky-600 dark:bg-sky-400 dark:text-gray-950 dark:hover:bg-sky-300",
    secondary:
      "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        download={download}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
