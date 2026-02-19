interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-sky-500 dark:bg-sky-400" />
    </div>
  );
}
