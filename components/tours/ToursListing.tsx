"use client";

import { useMemo, useState } from "react";
import type { Tour } from "@/data/tours";
import { TourCard } from "./TourCard";
import { cn } from "@/components/ui/cn";

export function ToursListing({ tours, regions }: { tours: Tour[]; regions: string[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return tours;
    return tours.filter((t) => t.region === active);
  }, [active, tours]);

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {["All", ...regions].map((r) => {
          const isActive = active === r;
          return (
            <button
              key={r}
              type="button"
              onClick={() => setActive(r)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition shadow-[0_10px_22px_rgba(18,20,15,0.06)]",
                isActive
                  ? "border-copper bg-copper text-cream"
                  : "border-black/10 bg-cream/90 text-ink/80 hover:bg-black/5"
              )}
            >
              {r}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TourCard key={t.slug} tour={t} />
        ))}
      </div>
    </>
  );
}

