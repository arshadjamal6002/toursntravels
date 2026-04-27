"use client";

import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import type { Tour } from "@/data/tours";
import { useMemo } from "react";

export function StickyMobileCTA({ tour }: { tour: Tour }) {
  const wa = useMemo(
    () =>
      waLink(
        `Hi MiraGo — I’m interested in “${tour.title}”. Can we chat on WhatsApp?`
      ),
    [tour.title]
  );

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-sand/95 pb-[env(safe-area-inset-bottom,0px)] pt-0 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-7xl items-stretch gap-2 px-4 py-3">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="cta-primary flex-1 min-h-11 items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            WhatsApp
          </a>
          <a
            href="#lead-form"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-black/10 bg-cream px-4 text-sm font-semibold text-ink"
          >
            Get itinerary
          </a>
        </div>
      </div>
      <div className="h-[88px] lg:hidden" aria-hidden />
    </>
  );
}
