"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Tour, TourAccordionSection } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/components/ui/cn";

function AccordionGroup({
  title,
  sections,
}: {
  title: string;
  sections: TourAccordionSection[];
}) {
  const [open, setOpen] = useState<string>(sections[0]?.title ?? "");

  return (
    <div>
      <div className="inline-flex items-center gap-3">
        <div className="text-xs font-semibold tracking-[0.22em] uppercase text-sand/70">
          {title}
        </div>
        <div className="h-px w-12 bg-copper/70" />
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-sand/10 bg-ink/35 backdrop-blur-sm">
        {sections.map((s) => {
          const isOpen = open === s.title;
          return (
            <div key={s.title} className="border-b border-sand/10 last:border-b-0">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/5"
                onClick={() => setOpen((cur) => (cur === s.title ? "" : s.title))}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-sand sm:text-base">
                  {s.title}
                </span>
                <ChevronDown
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0 text-sand/65 transition-transform",
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
                    transition={{ duration: 0.25 }}
                  >
                    <div className="border-t border-sand/10 px-5 pb-5 pt-4">
                      <ul className="space-y-2 text-sm leading-7 text-sand/75">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper/80" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompactPolicies({ tour }: { tour: Tour }) {
  const sections = useMemo(() => {
    return [...(tour.policies ?? []), ...(tour.thingsToKeepInMind ?? [])];
  }, [tour.policies, tour.thingsToKeepInMind]);

  const [panelOpen, setPanelOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string>("");

  if (!sections.length) return null;

  return (
    <section className="border-t border-black/10 bg-sand py-6">
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-16">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 rounded-xl border border-black/10 bg-cream/80 px-4 py-3.5 text-left transition hover:bg-cream"
          onClick={() => setPanelOpen((v) => !v)}
          aria-expanded={panelOpen}
        >
          <span className="text-sm font-semibold text-ink">
            Policies, cancellation & trip notes
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-ink/50 transition-transform",
              panelOpen && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {panelOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-2">
                {sections.map((s) => {
                  const isOpen = openSection === s.title;
                  return (
                    <div
                      key={s.title}
                      className="overflow-hidden rounded-xl border border-black/8 bg-cream/90"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                        onClick={() =>
                          setOpenSection((cur) =>
                            cur === s.title ? "" : s.title
                          )
                        }
                        aria-expanded={isOpen}
                      >
                        <span className="text-xs font-semibold text-ink/85">
                          {s.title}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-ink/45 transition",
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
                            transition={{ duration: 0.2 }}
                          >
                            <ul className="space-y-2 border-t border-black/6 px-4 pb-3 pt-2 text-xs leading-6 text-ink/65">
                              {s.points.map((p) => (
                                <li key={p} className="flex gap-2">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper/70" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

export function PoliciesAndKeepInMind({
  tour,
  compact = false,
}: {
  tour: Tour;
  compact?: boolean;
}) {
  if (compact) {
    return <CompactPolicies tour={tour} />;
  }

  const policies = tour.policies;
  const keep = tour.thingsToKeepInMind;
  if (!policies?.length && !keep?.length) return null;

  return (
    <section className="section section-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow text-sand/60">Policies</div>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-sand sm:text-4xl">
            Policies & things to keep in mind
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-sand/65">
            Clear expectations make premium trips smoother—especially at
            altitude. Skim this once, then focus on the ride.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {policies?.length ? (
            <SectionReveal>
              <AccordionGroup title="Tour policies" sections={policies} />
            </SectionReveal>
          ) : null}
          {keep?.length ? (
            <SectionReveal delay={0.05}>
              <AccordionGroup title="Things to keep in mind" sections={keep} />
            </SectionReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
