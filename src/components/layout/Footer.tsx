import { siteConfig } from "@/lib/constants";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-gbh-rose/20 bg-cream dark:border-gbh-rose-light/20 dark:bg-warm-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-gbh-plum-light dark:text-stone-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
