"use client";

import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import type { Tour } from "@/data/tours";
import { useMemo } from "react";

type Variant = "full" | "whatsappOnly";

export function LandingCtaBand({
  tour,
  variant = "full",
  heading,
  sub,
}: {
  tour: Tour;
  variant?: Variant;
  heading?: string;
  sub?: string;
}) {
  const wa = useMemo(
    () =>
      waLink(
        `Hi Altura — I’m on the “${tour.title}” page. Can you share availability, pricing, and the full day-by-day plan?`
      ),
    [tour.title]
  );

  return (
    <div className="border-y border-black/10 bg-sand">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
              {heading ?? "Ready for the full picture?"}
            </h3>
            {sub ? (
              <p className="mt-1 max-w-xl text-sm leading-6 text-ink/70">
                {sub}
              </p>
            ) : null}
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            {variant === "full" ? (
              <a
                href="#lead-form"
                className="cta-primary min-h-11 w-full justify-center sm:w-auto"
              >
                Get full itinerary
              </a>
            ) : null}
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-cream px-6 py-3 text-sm font-semibold text-ink transition hover:bg-black/5 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
