import type { NavItem } from "./types";

export const siteConfig = {
  name: "Ricardo Rama",
  role: "Full Stack Developer",
  email: "placeholder@email.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
