import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "AutoFiltro",
    subtitle: "Chrome Extension for MercadoLibre",
    problem:
      "MercadoLibre car searches are flooded with misleading listings: wrong prices, irrelevant categories, and fake publications that waste buyers\u2019 time.",
    decision:
      "Built a Chrome Extension that intercepts search results client-side and filters out deceptive posts using pattern matching, without depending on MercadoLibre\u2019s API or backend access.",
    impact:
      "Turns a frustrating 30-minute search into a clean, trustworthy experience. Users see only real listings that match their criteria.",
    tags: ["Chrome Extension APIs", "TypeScript", "DOM Manipulation"],
    github: "https://github.com/ricardorama28/AutoFiltro-Extension",
  },
  {
    title: "QuiroLog",
    subtitle: "Surgery registry for medical professionals",
    problem:
      "Surgeons need to log every procedure for certification and professional tracking, but existing tools are either paper-based or require constant connectivity.",
    decision:
      "Designed a local-first architecture with IndexedDB so data stays on the device. No server, no accounts, no privacy concerns. Works fully offline.",
    impact:
      "A surgeon can open the app between procedures and log a surgery in under 30 seconds, with all data available offline and exportable.",
    tags: ["React", "TypeScript", "IndexedDB", "Dexie", "Vite"],
    github: "https://github.com/ricardorama28/QuiroLog",
  },
  {
    title: "Explorador de Playas UY",
    subtitle: "Interactive beach guide for Uruguay",
    problem:
      "There was no centralized way to explore, compare, and filter Uruguay\u2019s beaches by features like infrastructure, surf conditions, or accessibility.",
    decision:
      "Built a map-first interface with layered geographic data and multi-criteria filters, prioritizing fast visual exploration over traditional list views.",
    impact:
      "Users can find the right beach in seconds instead of searching across scattered blog posts and outdated government pages.",
    tags: ["React", "TypeScript", "Maps", "Geolocation", "Tailwind CSS"],
    github: "https://github.com/ricardorama28/explorador-playas-uy",
    demo: "#",
  },
];
