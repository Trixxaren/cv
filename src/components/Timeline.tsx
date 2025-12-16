// src/components/Timeline.tsx
import { Entry } from "./TimelineEntry";

type TimelineItem = {
  title: string;
  subtitle: string;
  dates: string;
  bullets: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="mt-3 space-y-4">
      {items.map((item, index) => (
        <Entry
          key={`${item.title}-${item.subtitle}-${item.dates}-${index}`}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
