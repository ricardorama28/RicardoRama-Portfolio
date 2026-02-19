export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}
