import type { Tour } from "@/data/tours";

export function TourHighlightsCompact({ tour }: { tour: Tour }) {
  const items = tour.highlights;
  if (!items?.length) return null;

  return (
    <section
      id="highlights"
      className="scroll-mt-28 border-b border-black/10 bg-cream py-6"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
          Tour highlights
        </h2>
        <ul className="mt-3 space-y-2">
          {items.slice(0, 5).map((text) => (
            <li
              key={text}
              className="flex gap-2.5 text-sm font-medium leading-snug text-ink/85"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
