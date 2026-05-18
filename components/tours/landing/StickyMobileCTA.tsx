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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-sand/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-cream text-sm font-semibold text-ink transition hover:bg-black/5"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-copper" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="h-[72px] lg:hidden" aria-hidden />
    </>
  );
}
