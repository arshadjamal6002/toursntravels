import { tours, regions } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ToursListing } from "@/components/tours/ToursListing";

export default function ToursPage() {
  return (
    <div className="pt-16">
      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <div className="eyebrow">Tours</div>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
              Curated Himalayan journeys.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70">
              Premium pacing, intimate groups, and routes designed for quiet
              moments and cinematic frames.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <ToursListing tours={tours} regions={regions} />
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

