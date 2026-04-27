import { CalendarRange, Sparkles, SlidersHorizontal, TrendingUp } from "lucide-react";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function OfferStrip({ tour }: { tour: Tour }) {
  const o = tour.offer;
  if (!o) {
    return null;
  }

  const items = [
    {
      icon: CalendarRange,
      label: o.headline ?? "Curated departures",
      sub: "Seasonal windows — we’ll match your month",
    },
    {
      icon: Sparkles,
      label: o.earlyBird ?? "Early-bird when available",
      sub: "Ask for what applies to your travel dates",
    },
    {
      icon: TrendingUp,
      label: o.filling ?? "Intimate group size",
      sub: "No oversized convoys on the high road",
    },
    {
      icon: SlidersHorizontal,
      label: o.custom ?? "Custom itineraries available",
      sub: "Private dates, pacing & comfort tailored to you",
    },
  ] as const;

  return (
    <div className="border-b border-black/10 bg-forest/95 text-sand">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-5 lg:px-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <SectionReveal key={it.label} delay={0.04 * idx}>
              <div className="flex gap-3 rounded-xl border border-sand/10 bg-ink/20 px-4 py-3 backdrop-blur-sm">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper/35 bg-copper/15 text-cream">
                  <it.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-snug text-sand">
                    {it.label}
                  </div>
                  <div className="mt-0.5 text-xs leading-5 text-sand/65">
                    {it.sub}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
