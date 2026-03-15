import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <FadeInOnScroll>
          <SectionHeading title="How I Work" />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="mb-8 border-l-2 border-stone-300 pl-6 font-display text-xl italic leading-relaxed text-stone-700 dark:border-stone-600 dark:text-stone-300">
            I start from the problem, not the technology. Before writing a
            single line of code, I need to understand who has the problem, why
            current solutions fail, and what the simplest path to a working
            product looks like.
          </p>

          <div className="space-y-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            <p>
              I build with React and TypeScript because they let me move fast
              without sacrificing reliability. I care about the details that
              users notice: loading states, edge cases, and interfaces that feel
              intuitive without needing a manual.
            </p>
            <p>
              My projects come from real friction I&apos;ve observed. A search
              system full of misleading listings. Surgeons logging procedures on
              paper. Tourists with no good way to compare beaches. I spot these
              gaps and build the tool that should exist.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
