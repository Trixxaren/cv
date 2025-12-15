type EntryProps = {
  title: string;
  subtitle: string;
  dates: string;
  bullets: string[];
};

export function Entry({ title, subtitle, dates, bullets }: EntryProps) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
      <p className="text-sm text-slate-500">{dates}</p>

      <ul className="mt-2 list-dissc pl-5 text-sm text-slate-800">
        {bullets.map((b, i) => (
          <li key={`${title}-${i}`}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
