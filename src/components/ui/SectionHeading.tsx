interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-stone-500 dark:text-stone-400">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-px w-16 bg-amber-600/50 dark:bg-amber-400/40" />
    </div>
  );
}
