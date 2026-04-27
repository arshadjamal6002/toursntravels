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

  const youtubeId = "3lmGfN-8C6I";
  const youtubeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&playsinline=1&loop=1&playlist=${youtubeId}&rel=0`;
  const ladakhImage = tour.gallery?.[0] ?? tour.heroImage;
  return (
    <section className="relative section overflow-hidden bg-cream">
      {/* Full-section background video */}
      <div className="pointer-events-none absolute inset-0">
        <iframe
          className="absolute inset-0 h-full w-full [transform:scale(1.55)]"
          src={youtubeSrc}
          title={`${tour.title} background`}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {/* Keep full video color; add subtle vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/15" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_25%_20%,rgba(18,20,15,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
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
            <div className="group relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-cream/55 shadow-[0_26px_70px_rgba(18,20,15,0.12)] backdrop-blur-md lg:block">
              <Image
                src={ladakhImage}
                alt={`${tour.title} highlight`}
                fill
                sizes="(max-width: 1024px) 0vw, 40vw"
                className="object-cover opacity-[0.92] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/10" />
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
                        "bg-sand/82 p-5 shadow-[0_16px_40px_rgba(18,20,15,0.08)] backdrop-blur-md"
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
            <div className="group relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-cream/60 shadow-[0_20px_50px_rgba(18,20,15,0.1)] backdrop-blur-sm lg:hidden">
              <Image
                src={ladakhImage}
                alt={`${tour.title} highlight`}
                fill
                sizes="100vw"
                className="object-cover opacity-[0.9] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
