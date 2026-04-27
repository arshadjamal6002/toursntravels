"use client";

import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";
import type { Tour } from "@/data/tours";
import { getHeroTrustChips } from "./landing-helpers";
import { useMemo } from "react";
import { cn } from "@/components/ui/cn";

export function LandingHero({ tour }: { tour: Tour }) {
  const chips = useMemo(() => getHeroTrustChips(tour), [tour]);
  const wa = useMemo(
    () =>
      waLink(
        `Hi MiraGo — I’m interested in “${tour.title}” (from your landing page). Can you share the full itinerary, dates, and pricing?`
      ),
    [tour.title]
  );
  const headline = tour.hookLine ?? tour.title;
  const sub =
    tour.subtitle ??
    tour.overview?.slice(0, 180) + (tour.overview && tour.overview.length > 180 ? "…" : "");

  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          className="object-cover scale-[1.02]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/50 to-ink/92" />
        <div className="absolute inset-0 [background:radial-gradient(900px_500px_at_20%_20%,rgba(244,238,228,0.12),transparent_55%)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(18,20,15,0.7))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-10 md:pt-28 lg:px-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-sand/75 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-copper" />
              {tour.region} · {tour.bestSeason} season
            </div>

            <h1 className="mt-6 text-balance font-display text-3xl leading-[1.05] tracking-tight text-sand sm:text-5xl lg:text-6xl">
              {headline}
            </h1>

            {sub ? (
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-sand/80 sm:text-lg sm:leading-8">
                {sub}
              </p>
            ) : null}

            <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-sand/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-sand/90 backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#lead-form"
                className="cta-primary min-h-11 w-full justify-center sm:w-auto"
              >
                Get full itinerary
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-sand/25",
                  "bg-white/5 px-6 py-3 text-sm font-semibold text-sand backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-[1px] sm:w-auto"
                )}
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="soft-panel border-sand/15 bg-ink/45 p-6 text-sand shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-sand/60">
                Investment from
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl tracking-tight">
                  ₹{tour.priceFrom.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-sand/60">per person</span>
              </div>
              {tour.offer?.badge ? (
                <div className="mt-3 inline-flex rounded-full border border-copper/40 bg-copper/15 px-3 py-1 text-xs font-semibold text-cream">
                  {tour.offer.badge}
                </div>
              ) : (
                <p className="mt-3 text-xs leading-5 text-sand/60">
                  Final offer &amp; inclusions on WhatsApp — we’ll match your
                  month &amp; group size.
                </p>
              )}
              <p className="mt-4 text-sm leading-6 text-sand/70">
                {tour.title}. Premium pacing, acclimatization built in, and a
                crew that’s done this before.
              </p>
              <a
                href="#lead-form"
                className="mt-6 block w-full rounded-full border border-sand/20 bg-white/10 py-3 text-center text-sm font-semibold text-sand transition hover:bg-white/15"
              >
                Get full itinerary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
