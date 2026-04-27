import {
  BedDouble,
  Bike,
  Clock,
  MapPinned,
  Plane,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function QuickFacts({ tour }: { tour: Tour }) {
  const q = tour.quickFacts;
  if (!q) return null;

  const facts: {
    icon: typeof Clock;
    label: string;
    value: string;
    image: string;
  }[] = [
    {
      icon: Clock,
      label: "Duration",
      value: q.duration,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    },
    {
      icon: MapPinned,
      label: "Route",
      value: q.route,
      image:
        "https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&w=1600&q=80",
    },
    {
      icon: Plane,
      label: "Flights",
      value: q.flightsIncluded ? "Delhi–Leh–Delhi included" : "Not included",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
    },
    {
      icon: Bike,
      label: "Bike",
      value: q.bikeType ?? "—",
      image:
        "https://images.unsplash.com/photo-1558980664-10ea1b3c4b03?auto=format&fit=crop&w=1600&q=80",
    },
    {
      icon: BedDouble,
      label: "Stay",
      value: q.stayType ?? "—",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    },
    {
      icon: UtensilsCrossed,
      label: "Meals",
      value: q.mealPlan ?? "—",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
    },
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
              <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-cream/90 p-5 shadow-[0_12px_30px_rgba(18,20,15,0.10)] transition hover:-translate-y-[2px]">
                <div className="absolute inset-0">
                  <Image
                    src={f.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-[0.90] transition-opacity duration-500 group-hover:opacity-[0.62]"
                  />
                  {/* Keep image visible while preserving readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cream/65 via-transparent to-cream/85" />
                  <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_25%_20%,rgba(250,246,239,0.40),transparent_60%)]" />
                </div>

                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-cream/90 text-ink/80 backdrop-blur-sm">
                    <f.icon className="h-5 w-5 text-copper" />
                  </div>
                  <div className="mt-4 text-xs font-semibold tracking-[0.18em] uppercase text-muted">
                    {f.label}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-ink">
                    {f.value}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
