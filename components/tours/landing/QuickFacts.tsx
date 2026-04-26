import {
  BedDouble,
  Bike,
  Clock,
  MapPinned,
  Plane,
  UtensilsCrossed,
} from "lucide-react";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function QuickFacts({ tour }: { tour: Tour }) {
  const q = tour.quickFacts;
  if (!q) return null;

  const facts: {
    icon: typeof Clock;
    label: string;
    value: string;
  }[] = [
    { icon: Clock, label: "Duration", value: q.duration },
    { icon: MapPinned, label: "Route", value: q.route },
    {
      icon: Plane,
      label: "Flights",
      value: q.flightsIncluded ? "Delhi–Leh–Delhi included" : "Not included",
    },
    { icon: Bike, label: "Bike", value: q.bikeType ?? "—" },
    { icon: BedDouble, label: "Stay", value: q.stayType ?? "—" },
    { icon: UtensilsCrossed, label: "Meals", value: q.mealPlan ?? "—" },
  ];

  return (
    <section className="section bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow">At a glance</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Quick facts — built for scan-first reading.
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, idx) => (
            <SectionReveal key={f.label} delay={0.04 * idx}>
              <div className="card h-full p-5 transition hover:-translate-y-[2px]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-cream text-ink/80">
                  <f.icon className="h-5 w-5 text-copper" />
                </div>
                <div className="mt-4 text-xs font-semibold tracking-[0.18em] uppercase text-muted">
                  {f.label}
                </div>
                <div className="mt-2 text-sm font-medium leading-6 text-ink">
                  {f.value}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
