import type { TechCategory } from "@/lib/types";

export const techStack: TechCategory[] = [
  {
    title: "Core",
    items: [
      { name: "React", icon: "\u269b\ufe0f" },
      { name: "TypeScript", icon: "\ud83d\udd37" },
      { name: "JavaScript", icon: "\ud83d\udfe1" },
      { name: "Tailwind CSS", icon: "\ud83c\udfa8" },
      { name: "Next.js", icon: "\u25b2" },
      { name: "Vite", icon: "\u26a1" },
    ],
  },
  {
    title: "Data & APIs",
    items: [
      { name: "Node.js", icon: "\ud83d\udfe2" },
      { name: "IndexedDB / Dexie", icon: "\ud83d\udcbe" },
      { name: "Chrome Extension APIs", icon: "\ud83e\udde9" },
      { name: "API Integration", icon: "\ud83d\udd17" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git / GitHub", icon: "\ud83d\udce6" },
      { name: "Vercel", icon: "\ud83d\ude80" },
      { name: "Framer Motion", icon: "\ud83c\udfac" },
    ],
  },
];
