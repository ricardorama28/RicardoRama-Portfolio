import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-wes-lavender/15 px-6 py-32 dark:bg-warm-dark checkerboard-bg"
    >
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading title="Let's Talk" color="lavender" />

        <FadeInOnScroll delay={0.2}>
          {/* Framed panel */}
          <div className="relative mx-auto max-w-lg rounded-sm border-2 border-wes-lavender/30 bg-cream/80 p-8 dark:border-wes-lavender/15 dark:bg-warm-dark-alt/80">
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-wes-pink/50" />
            <div className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-wes-pink/50" />
            <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-wes-pink/50" />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-wes-pink/50" />

            <p className="text-lg leading-relaxed text-ink-light dark:text-stone-400">
              I&apos;m looking for my next role in a product-driven team. If
              you&apos;re building something meaningful and need a developer who
              thinks beyond the code, I&apos;d like to hear about it.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6">
              <Button href={`mailto:${siteConfig.email}`} variant="primary">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Get in touch
              </Button>
              <SocialLinks />
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
