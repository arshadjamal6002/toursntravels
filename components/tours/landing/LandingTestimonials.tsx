/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Star, X } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/components/ui/cn";

// TODO: replace with real guest reviews, photos, and verifiable trip details when available
const PLACEHOLDER_QUOTES = [
  {
    quote:
      "The Nubra approach felt huge and cinematic, but the pacing never felt rushed. I loved how clear the inclusions were before we even paid.",
    name: "Aanya S.",
    trip: "Nubra & desert stretch · 2024",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    moments: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  {
    quote:
      "Pangong at night is unreal. The cottage stay + star gazing was the emotional peak — not just another photo stop on the list.",
    name: "Rohit K.",
    trip: "Pangong · summer batch",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    moments: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  {
    quote:
      "Khardung La in good weather is a life moment. The captain kept everyone calm, and the group energy stayed respectful the whole time.",
    name: "Meera T.",
    trip: "Himalayan passes · 2024",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    moments: [
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=80",
    ],
  },
] as const;

export function LandingTestimonials() {
  const [open, setOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [activeMoment, setActiveMoment] = useState<number>(0);

  const active = PLACEHOLDER_QUOTES[activeTestimonial];
  const moments = active?.moments ?? [];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") {
        setActiveMoment((cur) => (moments.length ? (cur + 1) % moments.length : 0));
      }
      if (e.key === "ArrowLeft") {
        setActiveMoment((cur) =>
          moments.length ? (cur - 1 + moments.length) % moments.length : 0
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, moments.length]);

  const onOpen = (tIdx: number) => {
    setActiveTestimonial(tIdx);
    setActiveMoment(0);
    setOpen(true);
  };

  const stackSize = 3;
  const stack = useMemo(() => {
    return PLACEHOLDER_QUOTES.map((q) => q.moments.slice(0, stackSize));
  }, []);

  return (
    <section className="section section-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow text-sand/60">Proof & trust</div>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-sand sm:text-4xl">
            The kind of notes we get on WhatsApp.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-sand/65">
            Placeholder copy for layout — we’ll drop in your real Google /
            Instagram / DM screenshots here.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLACEHOLDER_QUOTES.map((q, idx) => (
            <SectionReveal key={q.name} delay={0.04 * idx}>
              <div className="group relative h-full rounded-2xl border border-sand/10 bg-ink/40 p-6 backdrop-blur-sm">
                <div className="flex gap-0.5 text-copper">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-copper/90 text-copper"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-sand/85">
                  “{q.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-sand/15 bg-sand/10">
                    {q.avatar ? (
                      <Image
                        src={q.avatar}
                        alt={q.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-sand">
                      {q.name}
                    </div>
                    <div className="text-xs text-sand/55">{q.trip}</div>
                  </div>
                </div>

                {/* Mini moments stack (click/tap) */}
                {q.moments?.length ? (
                  <button
                    type="button"
                    onClick={() => onOpen(idx)}
                    className={cn(
                      "absolute bottom-5 right-5 inline-flex items-center -space-x-2 rounded-full",
                      "border border-sand/15 bg-ink/35 px-2.5 py-2 backdrop-blur-md transition",
                      "hover:bg-ink/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                    )}
                    aria-label={`View ${q.name}'s trip moments`}
                  >
                    {stack[idx].map((src, i) => (
                      <span
                        key={`${q.name}-m-${i}`}
                        className="relative h-8 w-8 overflow-hidden rounded-lg border border-sand/15 bg-sand/10 shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                        style={{ transform: `translateX(${i * 0}px)` }}
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </span>
                    ))}
                    {q.moments.length > stackSize ? (
                      <span className="ml-2 text-xs font-semibold text-sand/70">
                        +{q.moments.length - stackSize}
                      </span>
                    ) : null}
                  </button>
                ) : null}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {open && active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/75 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Trip moments"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-sand/10 bg-ink/55 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-sand/10 px-5 py-4">
              <div>
                <div className="text-sm font-semibold text-sand">
                  {active.name}
                </div>
                <div className="text-xs text-sand/60">{active.trip}</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/15 bg-white/5 text-sand/80 transition hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 sm:p-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-sand/10 bg-ink/40">
                {moments[activeMoment] ? (
                  <Image
                    src={moments[activeMoment]}
                    alt={`${active.name} moment`}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              </div>

              {moments.length > 1 ? (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                  {moments.map((src, i) => (
                    <button
                      key={`${active.name}-thumb-${i}`}
                      type="button"
                      onClick={() => setActiveMoment(i)}
                      className={cn(
                        "relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border transition",
                        i === activeMoment
                          ? "border-copper"
                          : "border-sand/10 hover:border-sand/20"
                      )}
                      aria-label={`Open photo ${i + 1}`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
