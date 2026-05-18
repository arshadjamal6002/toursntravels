"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import type { Tour } from "@/data/tours";
import type { PricingDisplay } from "./landing-helpers";
import {
  getFoldBadges,
  getFoldInclusions,
  getFoldTrustLine,
  getHeroSlides,
  getHeroTrustChips,
  getPricingDisplay,
  getRouteSummary,
} from "./landing-helpers";
import { HeroCarousel } from "./HeroCarousel";
import { useMemo } from "react";
import { cn } from "@/components/ui/cn";

function FoldInclusionRow({
  tour,
  variant = "light",
}: {
  tour: Tour;
  variant?: "light" | "dark";
}) {
  const items = useMemo(() => getFoldInclusions(tour), [tour]);
  const isDark = variant === "dark";

  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-1.5">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              isDark
                ? "border border-copper/35 bg-copper/15"
                : "border border-black/10 bg-cream"
            )}
          >
            <Icon className="h-4 w-4 text-copper" />
          </div>
          <span
            className={cn(
              "text-center text-[10px] font-semibold leading-tight",
              isDark ? "text-sand/85" : "text-ink/70"
            )}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function PriceBlock({
  pricing,
  nextBatchDate,
  variant = "light",
}: {
  pricing: PricingDisplay;
  nextBatchDate?: string | null;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "text-sand" : "text-ink"}>
      {pricing.hasDiscount && pricing.listPrice != null ? (
        <p
          className={cn(
            "text-base font-medium line-through",
            isDark ? "text-sand/50" : "text-muted"
          )}
        >
          ₹{pricing.listPrice.toLocaleString("en-IN")}
        </p>
      ) : null}
      <div className="flex items-baseline gap-2">
        <span
          className={cn(
            "font-display tracking-tight",
            isDark ? "text-5xl" : "text-4xl",
            pricing.hasDiscount && "text-copper"
          )}
        >
          ₹{pricing.salePrice.toLocaleString("en-IN")}
        </span>
        <span
          className={cn("text-sm", isDark ? "text-sand/60" : "text-muted")}
        >
          /person
        </span>
      </div>
      {nextBatchDate ? (
        <p
          className={cn(
            "mt-1 text-xs font-medium",
            isDark ? "text-sand/70" : "text-ink/60"
          )}
        >
          Next departure · {nextBatchDate}
        </p>
      ) : null}
      {pricing.urgencyLine ? (
        <p
          className={cn(
            "mt-1.5 text-sm font-semibold",
            isDark ? "text-cream" : "text-forest"
          )}
        >
          {pricing.urgencyLine}
        </p>
      ) : null}
    </div>
  );
}

export function LandingHero({ tour }: { tour: Tour }) {
  const badges = useMemo(() => getFoldBadges(tour), [tour]);
  const pricing = useMemo(() => getPricingDisplay(tour), [tour]);
  const trustLine = useMemo(() => getFoldTrustLine(tour), [tour]);
  const chips = useMemo(() => getHeroTrustChips(tour), [tour]);
  const route = useMemo(() => getRouteSummary(tour), [tour]);
  const slides = useMemo(() => getHeroSlides(tour), [tour]);
  const sub = tour.subtitle;

  return (
    <>
      {/* Mobile */}
      <section className="bg-sand lg:hidden">
        <div className="relative h-[38vh] min-h-[200px] max-h-[280px] w-full">
          <HeroCarousel slides={slides} alt={tour.title} />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-5 pt-4">
          <h1 className="font-display text-xl leading-snug tracking-tight text-ink sm:text-2xl">
            {tour.title}
          </h1>

          {route ? (
            <p className="mt-1.5 text-xs font-medium leading-5 text-muted">
              {route}
            </p>
          ) : null}

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-black/10 bg-cream px-2.5 py-1 text-[11px] font-semibold text-ink/75"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <PriceBlock
              pricing={pricing}
              nextBatchDate={tour.nextBatchDate}
              variant="light"
            />
          </div>

          <div className="mt-4">
            <FoldInclusionRow tour={tour} variant="light" />
          </div>

          <p className="mt-3 text-center text-[11px] font-medium text-ink/55">
            {trustLine}
          </p>

          <a
            href="#lead-form"
            className="cta-primary mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 text-base font-semibold"
          >
            Check availability
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Desktop */}
      <section className="relative hidden min-h-[78vh] overflow-hidden lg:block">
        <div className="absolute inset-0">
          <HeroCarousel slides={slides} alt={tour.title} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/50 to-ink/92" />
          <div className="absolute inset-0 [background:radial-gradient(900px_500px_at_20%_20%,rgba(244,238,228,0.12),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-16 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-sand/75 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-copper" />
                {tour.region} · {tour.bestSeason} season
              </div>

              <h1 className="mt-6 text-balance font-display text-5xl leading-[1.05] tracking-tight text-sand lg:text-6xl">
                {tour.title}
              </h1>

              {route ? (
                <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-sand/75">
                  {route}
                </p>
              ) : null}

              {sub ? (
                <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-sand/80">
                  {sub}
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-sand/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-sand/90 backdrop-blur-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-sand/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-sand/75 backdrop-blur-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="soft-panel border-sand/15 bg-ink/45 p-6 text-sand shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <PriceBlock
                  pricing={pricing}
                  nextBatchDate={tour.nextBatchDate}
                  variant="dark"
                />
                <div className="mt-5">
                  <FoldInclusionRow tour={tour} variant="dark" />
                </div>
                <p className="mt-4 text-center text-xs text-sand/60">
                  {trustLine}
                </p>
                <a
                  href="#lead-form"
                  className="cta-primary mt-5 flex min-h-11 w-full items-center justify-center gap-2"
                >
                  Check availability
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
