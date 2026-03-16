"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStack } from "@/data/stack";

const CATEGORY_COLORS = ["wes-sky", "wes-lavender", "wes-yellow"] as const;

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
            const color = CATEGORY_COLORS[catIndex % CATEGORY_COLORS.length];
            return (
              <FadeInOnScroll key={category.title} delay={catIndex * 0.15}>
                <div className={`relative rounded-sm border-2 border-${color}/25 bg-cream/70 p-6 dark:border-${color}/10 dark:bg-warm-dark/70`}>
                  {/* Category heading with color block */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`h-3 w-3 rotate-45 bg-${color}/50`} />
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
