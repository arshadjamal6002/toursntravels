"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import type { Tour, TourItineraryDay } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/components/ui/cn";

export function LandingItinerary({ tour }: { tour: Tour }) {
  const days = tour.itinerary;
  const [open, setOpen] = useState<number>(1);

  return (
    <section className="section bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow">The flow</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            A premium pace — not a wall of text.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">
            Tap a day to open details. We keep the route readable, then go deep
            when you need it.
          </p>
        </SectionReveal>

        <div className="relative mt-10 pl-0 md:pl-2">
          <div
            className="pointer-events-none absolute left-[17px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-copper/60 via-copper/20 to-copper/50 md:block"
            aria-hidden
          />
          <div className="space-y-3">
            {days.map((d, idx) => (
              <ItineraryDayRow
                key={d.day}
                day={d}
                isOpen={open === d.day}
                onToggle={() => setOpen((cur) => (cur === d.day ? 0 : d.day))}
                isLast={idx === days.length - 1}
                revealDelay={0.02 * idx}
                gallery={tour.gallery}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ItineraryDayRow({
  day: d,
  isOpen,
  onToggle,
  isLast,
  revealDelay,
  gallery,
}: {
  day: TourItineraryDay;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
  revealDelay: number;
  gallery: string[];
}) {
  const start = Math.max(0, (d.day - 1) % Math.max(1, gallery.length));
  const dayGallery = gallery.length
    ? Array.from({ length: Math.min(3, gallery.length) }, (_, i) => gallery[(start + i) % gallery.length])
    : [];

  return (
    <SectionReveal delay={revealDelay}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-black/10 bg-cream/90",
          "shadow-[0_14px_34px_rgba(18,20,15,0.08)]"
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-start gap-3 p-4 text-left transition sm:gap-5 sm:p-5 md:pl-6"
        >
          <div className="relative z-10 flex shrink-0 items-center gap-2 md:gap-0">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-copper/35 bg-copper/12 text-sm font-bold text-ink sm:h-10 sm:w-10">
              {d.day}
            </div>
            {!isLast ? (
              <div
                className="absolute left-[17px] top-full mt-0 h-3 w-px bg-copper/25 md:hidden"
                aria-hidden
              />
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted">
              Day {d.day}
            </div>
            <div className="mt-1 font-display text-lg leading-snug tracking-tight text-ink sm:text-xl">
              {d.title}
            </div>
          </div>
          <ChevronDown
            className={cn(
              "mt-1 h-5 w-5 shrink-0 text-ink/60 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-t border-black/8 px-4 pb-5 pt-0 sm:px-6 sm:pb-6">
                <p className="pl-0 text-sm leading-7 text-ink/75 md:pl-14">
                  {d.details}
                </p>

                {dayGallery.length ? (
                  <div className="mt-5 md:pl-14">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {dayGallery.map((src) => (
                        <div
                          key={`${d.day}-${src}`}
                          className="group relative overflow-hidden rounded-2xl border border-black/10 bg-sand shadow-[0_14px_34px_rgba(18,20,15,0.08)]"
                        >
                          <div className="relative aspect-[16/11]">
                            <Image
                              src={src}
                              alt={`${d.title} photo`}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </SectionReveal>
  );
}
