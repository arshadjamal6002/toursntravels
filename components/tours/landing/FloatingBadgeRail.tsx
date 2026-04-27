"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { Tour } from "@/data/tours";

export function FloatingBadgeRail({ tour }: { tour: Tour }) {
  const chips = [
    ...(tour.trustChips?.slice(0, 3) ?? []),
    tour.offer?.custom ?? "Custom itineraries",
  ].filter(Boolean);

  return (
    <div className="hidden lg:block">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="fixed right-6 top-1/2 z-40 -translate-y-1/2"
      >
        <div className="flex flex-col gap-2 rounded-2xl border border-black/10 bg-sand/85 p-3 shadow-[0_18px_45px_rgba(18,20,15,0.12)] backdrop-blur-md">
          {chips.map((c) => (
            <div
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-cream/80 px-3 py-2 text-xs font-semibold text-ink/80"
            >
              <Sparkles className="h-3.5 w-3.5 text-copper" />
              {c}
            </div>
          ))}
          <div className="px-1 pt-1 text-[11px] leading-4 text-ink/55">
            Tap WhatsApp for dates &amp; quote.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

