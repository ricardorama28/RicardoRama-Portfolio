import { siteConfig } from "@/lib/constants";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t-2 border-wes-pink/20 bg-cream dark:border-wes-pink/10 dark:bg-warm-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        {/* Color bar accent */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-wes-pink/40" />
            <div className="h-2 w-2 rounded-full bg-wes-sky/40" />
            <div className="h-2 w-2 rounded-full bg-wes-yellow/40" />
          </div>
          <p className="text-sm text-ink-light dark:text-stone-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
