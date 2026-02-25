import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeInOnScroll>
          <SectionHeading title="How I Work" />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              I start from the problem, not the technology. Before writing a
              single line of code, I need to understand who has the problem, why
              current solutions fail, and what the simplest path to a working
              product looks like.
            </p>
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
