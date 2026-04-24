import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import type { Tour } from "@/data/tours";

export function TourHero({ tour }: { tour: Tour }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/85" />
      </div>

      <div className="relative pt-28 pb-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <div className="eyebrow text-sand/60">{tour.region}</div>
            <h1 className="mt-5 font-display text-4xl tracking-tight text-sand sm:text-5xl">
              {tour.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-sand/75">
              {tour.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-sm text-sand/85 backdrop-blur-sm">
                {tour.days} days
              </span>
              <span className="rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-sm text-sand/85 backdrop-blur-sm">
                {tour.difficulty}
              </span>
              <span className="rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-sm text-sand/85 backdrop-blur-sm">
                Best season: {tour.bestSeason}
              </span>
              <span className="rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-sm text-sand/85 backdrop-blur-sm">
                From ₹{tour.priceFrom.toLocaleString("en-IN")}
              </span>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

