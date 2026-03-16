"use client";

import { motion } from "framer-motion";
import type { TechItem } from "@/lib/types";

interface TechBadgeProps {
  item: TechItem;
}

export function TechBadge({ item }: TechBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-3 rounded-xl border border-gbh-rose/20 bg-cream px-4 py-3 dark:border-gbh-rose-light/20 dark:bg-warm-dark-alt"
      whileHover={{
        scale: 1.03,
        borderColor: "rgb(196 86 122 / 0.4)",
        transition: { duration: 0.25 },
      }}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-sm font-medium text-gbh-plum dark:text-stone-300">
        {item.name}
      </span>
    </motion.div>
  );
}
