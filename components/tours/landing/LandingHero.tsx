"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Clock,
  CreditCard,
  Flame,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { waLink } from "@/lib/site";
import type { Tour } from "@/data/tours";
import {
  getHeaderTrustItems,
  getHeroTrustChips,
  getInclusionIcons,
  getQuickFactChips,
  getUrgencyLine,
} from "./landing-helpers";
import { useMemo } from "react";
import { cn } from "@/components/ui/cn";

function InclusionIconRow({
  tour,
  variant = "light",
}: {
  tour: Tour;
  variant?: "light" | "dark";
}) {
  const inclusions = useMemo(() => getInclusionIcons(tour), [tour]);
  if (!inclusions.length) return null;

  const isDark = variant === "dark";

  return (
    <div
      className="-mx-1 flex gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {inclusions.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className={cn(
            "flex min-w-[4.25rem] shrink-0 flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5",
            isDark ? "border-sand/15 bg-white/5" : "border-black/10 bg-cream"
          )}
        >
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full",
              isDark
                ? "border border-copper/35 bg-copper/15 text-cream"
                : "border border-black/10 bg-sand text-ink/80"
            )}
          >
            <Icon className="h-4 w-4 text-copper" />
          </div>
          <span
            className={cn(
              "text-center text-[10px] font-semibold leading-tight",
              isDark ? "text-sand/85" : "text-ink/75"
            )}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function LandingHero({ tour }: { tour: Tour }) {
  const chips = useMemo(() => getHeroTrustChips(tour), [tour]);
  const quickChips = useMemo(() => getQuickFactChips(tour), [tour]);
  const trustHeader = useMemo(() => getHeaderTrustItems(tour), [tour]);
  const urgency = useMemo(() => getUrgencyLine(tour), [tour]);
  const inclusions = useMemo(() => getInclusionIcons(tour), [tour]);
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
    tour.overview?.slice(0, 180) +
      (tour.overview && tour.overview.length > 180 ? "…" : "");
  const routeSummary = tour.quickFacts?.route;
  const heroChip =
    tour.highlights?.[2] ?? tour.highlights?.[0] ?? "Premium Himalayan circuit";

  return (
    <>
      {/* Mobile: conversion-first card */}
      <section className="bg-sand lg:hidden">
        <div className="mx-auto max-w-7xl px-4 pt-3 pb-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold text-ink/65">
            {trustHeader.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-1">
                {i > 0 ? (
                  <span className="text-ink/25" aria-hidden>
                    ·
                  </span>
                ) : null}
                {item.includes("★") ? (
                  <>
                    <Star className="h-3 w-3 fill-copper text-copper" />
                    {item.replace(/\s*★\s*/, "")}
                  </>
                ) : (
                  item
                )}
              </span>
            ))}
          </div>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-cream px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase text-ink/70">
            <Sparkles className="h-3.5 w-3.5 text-copper" />
            {tour.region} · {tour.bestSeason} season
          </div>

          <h1 className="mt-3 line-clamp-3 font-display text-2xl leading-[1.15] tracking-tight text-ink">
            {headline}
          </h1>

          {routeSummary ? (
            <p className="mt-2 text-xs font-medium leading-5 text-muted">
              {routeSummary}
            </p>
          ) : sub ? (
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">
              {sub}
            </p>
          ) : null}

          <div className="mt-3 flex flex-wrap gap-1.5">
            {quickChips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-black/10 bg-cream px-2.5 py-1 text-[11px] font-semibold text-ink/80"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="soft-panel mt-3 flex flex-col gap-2 p-3.5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted">
                Investment from
              </p>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <span className="font-display text-3xl tracking-tight text-ink">
                  ₹{tour.priceFrom.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-muted">per person</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1.5 sm:items-end sm:text-right">
              {tour.offer?.badge ? (
                <span className="inline-flex rounded-full border border-copper/30 bg-copper/10 px-2.5 py-0.5 text-[11px] font-semibold text-copper">
                  {tour.offer.badge}
                </span>
              ) : null}
              {urgency ? (
                <p className="inline-flex items-center gap-1 text-[11px] font-medium leading-snug text-ink/70">
                  {tour.spotsLeft != null ? (
                    <Flame className="h-3.5 w-3.5 shrink-0 text-copper" />
                  ) : (
                    <Clock className="h-3.5 w-3.5 shrink-0 text-copper" />
                  )}
                  {urgency}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-3">
            <InclusionIconRow tour={tour} variant="light" />
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <a
              href="#lead-form"
              className="cta-primary min-h-11 w-full justify-center"
            >
              Get full itinerary
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-black/15",
                "bg-cream px-6 py-3 text-sm font-semibold text-ink transition hover:bg-black/5"
              )}
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="relative mt-3 h-[38vh] max-h-[300px] min-h-[180px] overflow-hidden rounded-2xl border border-black/10 shadow-[0_16px_40px_rgba(18,20,15,0.12)]">
            <Image
              src={tour.heroImage}
              alt={tour.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
            <span className="absolute bottom-3 left-3 right-3 rounded-full border border-sand/20 bg-ink/50 px-3 py-1.5 text-center text-[11px] font-semibold text-sand/90 backdrop-blur-sm">
              {heroChip}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {(
              [
                { icon: ShieldCheck, label: "Secure booking" },
                { icon: Headphones, label: "24/7 support" },
                { icon: CreditCard, label: "Refundable advance" },
              ] as { icon: LucideIcon; label: string }[]
            ).map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 rounded-full border border-black/8 bg-cream/80 px-2.5 py-1 text-[10px] font-semibold text-ink/65"
              >
                <Icon className="h-3 w-3 text-copper" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop: premium cinematic hero (tightened) */}
      <section className="relative hidden min-h-[78vh] overflow-hidden lg:block">
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

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10 lg:px-16 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-sand/75 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-copper" />
                {tour.region} · {tour.bestSeason} season
              </div>

              <h1 className="mt-6 text-balance font-display text-5xl leading-[1.05] tracking-tight text-sand lg:text-6xl">
                {headline}
              </h1>

              {sub ? (
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-sand/80">
                  {sub}
                </p>
              ) : null}

              <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-sm font-semibold text-sand/90 backdrop-blur-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-row items-center gap-3">
                <a href="#lead-form" className="cta-primary min-h-11">
                  Get full itinerary
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sand/25",
                    "bg-white/5 px-6 py-3 text-sm font-semibold text-sand backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-[1px]"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="soft-panel border-sand/15 bg-ink/45 p-6 text-sand shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sand/60">
                  Investment from
                </p>
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
                {urgency ? (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-sand/75">
                    {tour.spotsLeft != null ? (
                      <Flame className="h-3.5 w-3.5 text-copper" />
                    ) : (
                      <Clock className="h-3.5 w-3.5 text-copper" />
                    )}
                    {urgency}
                  </p>
                ) : null}
                {inclusions.length > 0 ? (
                  <div className="mt-4">
                    <InclusionIconRow tour={tour} variant="dark" />
                  </div>
                ) : null}
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
    </>
  );
}
