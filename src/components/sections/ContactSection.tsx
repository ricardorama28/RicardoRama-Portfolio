import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-cream-dark px-6 py-32 dark:bg-warm-dark-alt"
    >
      <div className="mx-auto max-w-2xl text-center">
        <FadeInOnScroll>
          <SectionHeading title="Let's Talk" />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
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
        </FadeInOnScroll>
      </div>
    </section>
  );
}
