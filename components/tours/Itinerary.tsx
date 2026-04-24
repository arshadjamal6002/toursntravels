"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TourItineraryDay } from "@/data/tours";
import { cn } from "@/components/ui/cn";

export function Itinerary({ days }: { days: TourItineraryDay[] }) {
  const [open, setOpen] = useState<number>(1);

  return (
    <div className="rounded-2xl border border-black/10 bg-cream/90 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
      {days.map((d) => {
        const isOpen = open === d.day;
        return (
          <div key={d.day} className="border-b border-black/10 last:border-b-0">
            <button
              type="button"
              className={cn(
                "flex w-full items-start justify-between gap-4 p-5 text-left transition",
                isOpen ? "bg-white/40" : "hover:bg-white/35"
              )}
              onClick={() => setOpen((cur) => (cur === d.day ? 0 : d.day))}
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-sand text-xs font-semibold tracking-[0.14em] text-ink/80">
                  {String(d.day).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted">
                    Day {d.day}
                  </div>
                  <div className="mt-2 font-display text-lg tracking-tight text-ink">
                    {d.title}
                  </div>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-ink/70 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div className={cn("px-5 pb-6", isOpen ? "block" : "hidden")}>
              <div className="pl-[52px]">
                <p className="text-sm leading-7 text-ink/70">{d.details}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

