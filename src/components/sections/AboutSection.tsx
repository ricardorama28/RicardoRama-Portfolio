import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeInOnScroll>
          <SectionHeading title="About Me" />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              I&apos;m a Full Stack Developer passionate about building elegant,
              performant web applications. With experience across the entire
              development stack, I specialize in creating seamless user
              experiences powered by robust backend systems.
            </p>
            <p>
              I enjoy turning complex problems into simple, beautiful, and
              intuitive solutions. When I&apos;m not coding, you&apos;ll find me
              exploring new technologies and contributing to open source
              projects.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
