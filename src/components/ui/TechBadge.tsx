"use client";

import { motion } from "framer-motion";
import type { TechItem } from "@/lib/types";

interface TechBadgeProps {
  item: TechItem;
}

export function TechBadge({ item }: TechBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-3 rounded-lg border border-wes-sky/20 bg-white/60 px-4 py-3 dark:border-wes-sky/10 dark:bg-warm-dark/60"
      whileHover={{
        scale: 1.04,
        y: -2,
        borderColor: "rgb(240 139 179 / 0.5)",
        transition: { duration: 0.2 },
      }}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-sm font-medium text-ink dark:text-stone-300">
        {item.name}
      </span>
    </motion.div>
  );
}
