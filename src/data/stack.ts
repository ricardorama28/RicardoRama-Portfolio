import type { TechCategory } from "@/lib/types";

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎭" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Python", icon: "🐍" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🖌️" },
      { name: "Vercel", icon: "🚀" },
      { name: "GitHub Actions", icon: "⚡" },
    ],
  },
];
