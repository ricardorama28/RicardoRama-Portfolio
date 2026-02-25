export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  subtitle: string;
  problem: string;
  decision: string;
  impact: string;
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
