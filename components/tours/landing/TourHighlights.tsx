import Image from "next/image";
import {
  Compass,
  Mountain,
  Moon,
  Palmtree,
  Star,
} from "lucide-react";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/components/ui/cn";

const highlightIcons = [Mountain, Compass, Star, Palmtree, Moon] as const;

export function TourHighlights({ tour }: { tour: Tour }) {
  const items = tour.highlights;
  if (!items?.length) return null;

  const hero = tour.heroImage;
  return (
    <section className="section bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionReveal>
              <div className="eyebrow">The ride</div>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                Signature moments. High-altitude drama.
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/70">
                A circuit designed for the Himalayas—not a copy-paste
                checklist. Each line below is a real beat on the route.
              </p>
            </SectionReveal>
            <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 shadow-[0_26px_70px_rgba(18,20,15,0.12)] lg:block">
              <Image
                src={hero}
                alt={tour.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((text, idx) => {
                const Icon = highlightIcons[idx % highlightIcons.length];
                return (
                  <SectionReveal key={text} delay={0.04 * idx}>
                    <div
                      className={cn(
                        "group relative h-full overflow-hidden rounded-2xl border border-black/10",
                        "bg-sand/80 p-5 shadow-[0_16px_40px_rgba(18,20,15,0.08)]"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-copper/25 bg-copper/10 text-copper">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="h-px w-8 bg-copper/60" />
                          <p className="mt-3 text-sm font-medium leading-6 text-ink">
                            {text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 shadow-[0_20px_50px_rgba(18,20,15,0.1)] lg:hidden">
              <Image
                src={hero}
                alt={tour.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
