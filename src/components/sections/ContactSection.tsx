import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInOnScroll } from "@/components/motion/FadeInOnScroll";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-2xl text-center">
        <FadeInOnScroll>
          <SectionHeading title="Get In Touch" />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to connect, feel free to reach out.
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
              Say Hello
            </Button>
            <SocialLinks />
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
