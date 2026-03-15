import { siteConfig } from "@/lib/constants";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-cream dark:border-stone-800 dark:bg-warm-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
