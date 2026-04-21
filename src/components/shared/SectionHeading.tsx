import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  icon,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`border-b border-dark/10 pb-10 md:pb-12 ${className}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
        {icon}
        {label}
      </span>
      <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-end">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-dark md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-md text-sm leading-relaxed text-dark/75 md:ml-auto md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}

