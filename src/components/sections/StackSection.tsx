import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { TechBadge } from "@/components/ui/TechBadge";
import { techStack } from "@/data/stack";

export function StackSection() {
  return (
    <section id="stack" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInOnScroll>
          <SectionHeading
            title="Tech Stack"
            subtitle="What I actually use to build"
          />
        </FadeInOnScroll>

        <div className="grid gap-12 md:grid-cols-3">
          {techStack.map((category, catIndex) => (
            <FadeInOnScroll key={category.title} delay={catIndex * 0.15}>
              <div>
                <h3 className="mb-4 font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
                <div className="grid gap-3">
                  {category.items.map((item) => (
                    <TechBadge key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
