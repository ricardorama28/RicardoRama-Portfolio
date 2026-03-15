"use client";

import { motion } from "framer-motion";
import type { TechItem } from "@/lib/types";

interface TechBadgeProps {
  item: TechItem;
}

export function TechBadge({ item }: TechBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-3 rounded-xl border border-stone-200 bg-cream px-4 py-3 dark:border-stone-800 dark:bg-warm-dark-alt"
      whileHover={{
        scale: 1.05,
        borderColor: "rgb(168 162 158)",
        transition: { duration: 0.2 },
      }}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
        {item.name}
      </span>
    </motion.div>
  );
}
