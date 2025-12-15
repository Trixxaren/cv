type SectionTitleProps = {
  children: string;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
      {children}
    </h2>
  );
}
