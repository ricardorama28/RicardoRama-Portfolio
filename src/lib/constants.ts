import type { NavItem } from "./types";

export const siteConfig = {
  name: "Ricardo Rama",
  role: "I find real problems and build the solution.",
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
