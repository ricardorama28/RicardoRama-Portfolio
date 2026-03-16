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
      "bg-gbh-rose text-white hover:bg-gbh-rose/90 dark:bg-gbh-rose-light dark:text-[#2a1f2e] dark:hover:bg-gbh-rose-light/90",
    secondary:
      "border border-gbh-rose/30 bg-transparent text-gbh-plum hover:bg-gbh-rose/10 dark:border-gbh-rose-light/30 dark:text-stone-300 dark:hover:bg-gbh-rose-light/10",
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
