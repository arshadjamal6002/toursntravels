"use client";

import { MessageCircle, Phone } from "lucide-react";
import { waLink, site } from "@/lib/site";
import type { Tour } from "@/data/tours";
import { useMemo } from "react";
import { cn } from "@/components/ui/cn";

export function FloatingContactRail({ tour }: { tour: Tour }) {
  const wa = useMemo(
    () =>
      waLink(
        `Hi MiraGo — I’m interested in “${tour.title}”. Can we chat on WhatsApp?`
      ),
    [tour.title]
  );

  return (
    <div
      className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col overflow-hidden rounded-l-xl shadow-[0_12px_32px_rgba(18,20,15,0.18)]"
      aria-label="Quick contact"
    >
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "flex min-h-[88px] w-12 flex-col items-center justify-center gap-2 px-1 py-3 sm:min-h-[96px] sm:w-[52px]",
          "bg-[#25D366] text-white transition hover:brightness-105"
        )}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
        <span className="text-[10px] font-bold uppercase leading-tight tracking-wide [writing-mode:vertical-rl]">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${site.contact.phone}`}
        className={cn(
          "flex min-h-[72px] w-12 flex-col items-center justify-center gap-2 px-1 py-3 sm:min-h-[80px] sm:w-[52px]",
          "bg-copper text-cream transition hover:bg-copper-hover"
        )}
        aria-label="Call MiraGo"
      >
        <Phone className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
        <span className="text-[10px] font-bold uppercase leading-tight tracking-wide [writing-mode:vertical-rl]">
          Call
        </span>
      </a>
    </div>
  );
}
