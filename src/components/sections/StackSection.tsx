"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStack } from "@/data/stack";

const CATEGORY_STYLES = [
  {
    border: "border-wes-sky/25 dark:border-wes-sky/10",
    diamond: "bg-wes-sky/50",
  },
  {
    border: "border-wes-lavender/25 dark:border-wes-lavender/10",
    diamond: "bg-wes-lavender/50",
  },
  {
    border: "border-wes-yellow/25 dark:border-wes-yellow/10",
    diamond: "bg-wes-yellow/50",
  },
];

export function StackSection() {
  return (
    <section id="stack" className="relative bg-wes-sky/10 px-6 py-32 dark:bg-warm-dark-alt stripes-bg">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Tech Stack"
          subtitle="What I actually use to build"
          color="sky"
        />

        <div className="grid gap-12 md:grid-cols-3">
          {techStack.map((category, catIndex) => {
            const style = CATEGORY_STYLES[catIndex % CATEGORY_STYLES.length];
            return (
              <FadeInOnScroll key={category.title} delay={catIndex * 0.15}>
                <div className={`relative rounded-sm border-2 ${style.border} bg-cream/70 p-6 dark:bg-warm-dark/70`}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`h-3 w-3 rotate-45 ${style.diamond}`} />
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink dark:text-stone-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid gap-3">
                    {category.items.map((item) => (
                      <TechBadge key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
