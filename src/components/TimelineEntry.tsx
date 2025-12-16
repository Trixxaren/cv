// src/components/TimelineEntry.tsx

type EntryProps = {
  title: string;
  subtitle: string;
  dates: string;
  bullets: string[];
  isLast?: boolean;
};

export function Entry({ title, subtitle, dates, bullets, isLast }: EntryProps) {
  return (
    <article
      className={[
        "relative pl-10",
        // Linjen: görs med border (print-säkert)
        "before:absolute before:left-3 before:top-0 before:bottom-0 before:border-l before:border-slate-200",
        // Sista entryn: ingen linje som fortsätter ner
        isLast ? "before:hidden" : "",
      ].join(" ")}
    >
      {/* Punkt (print-säker: border istället för ring/box-shadow) */}
      <span
        className="
          absolute left-3 top-1
          -translate-x-1/2
          h-3 w-3
          rounded-full
          bg-white
          border-2 border-slate-300
        "
        aria-hidden="true"
      />

      {/* Innehåll */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
        <p className="text-sm text-slate-500 sm:text-right">{dates}</p>
      </div>

      <ul className="mt-2 list-disc pl-5 text-sm text-slate-800">
        {bullets.map((b, i) => (
          <li key={`${title}-${i}`}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
