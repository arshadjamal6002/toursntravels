import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPinned } from "lucide-react";
import type { Tour } from "@/data/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/10 bg-cream/90 shadow-[0_18px_40px_rgba(18,20,15,0.08)] transition hover:-translate-y-[2px]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-sand/90 backdrop-blur-sm">
          <MapPinned className="h-3.5 w-3.5" />
          {tour.region}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-display text-xl tracking-tight text-ink">
              {tour.title}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/70">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-ink/55" />
                {tour.days} days
              </span>
              <span className="text-ink/35">•</span>
              <span className="font-semibold text-ink/80">
                From ₹{tour.priceFrom.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-ink/70 transition group-hover:bg-black/10 group-hover:text-ink">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-ink/70">
            {tour.difficulty}
          </span>
          <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-ink/70">
            Best: {tour.bestSeason}
          </span>
        </div>
      </div>
    </Link>
  );
}

