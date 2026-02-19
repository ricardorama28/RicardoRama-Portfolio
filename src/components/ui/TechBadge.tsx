"use client";

import { motion } from "framer-motion";
import type { TechItem } from "@/lib/types";

interface TechBadgeProps {
  item: TechItem;
}

export function TechBadge({ item }: TechBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-gray-900"
      whileHover={{
        scale: 1.05,
        borderColor: "rgb(14 165 233)",
        transition: { duration: 0.2 },
      }}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {item.name}
      </span>
    </motion.div>
  );
}
