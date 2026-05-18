"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/components/ui/cn";

export function LandingFAQ({
  tour,
  maxItems,
}: {
  tour: Tour;
  maxItems?: number;
}) {
  const items = useMemo(() => {
    const faq = tour.faq;
    if (!faq?.length) return [];
    return maxItems ? faq.slice(0, maxItems) : faq;
  }, [tour.faq, maxItems]);
  const [open, setOpen] = useState(0);
  if (!items.length) return null;

  return (
    <section id="faq" className="section scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Answers before you ask on WhatsApp.
          </h2>
        </SectionReveal>

        <div className="mt-8 space-y-2">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-black/10 bg-sand/90"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-3 p-4 text-left sm:p-5"
                  onClick={() => setOpen((v) => (v === idx ? -1 : idx))}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-0.5 h-5 w-5 shrink-0 text-ink/60 transition",
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
                      <div className="border-t border-black/8 px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
                        <p className="text-sm leading-7 text-ink/75">{item.a}</p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
