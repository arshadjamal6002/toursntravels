import { Sparkle } from "lucide-react";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function WhyStandsOut({ tour }: { tour: Tour }) {
  const items = tour.whyStandsOut;
  if (!items?.length) return null;

  return (
    <section className="section section-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow text-sand/60">Why this one</div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-sand sm:text-4xl">
            Not a generic Ladakh run—here’s the premium difference.
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <SectionReveal key={item.title} delay={0.04 * idx}>
              <div className="h-full rounded-2xl border border-sand/10 bg-ink/35 p-6 backdrop-blur-sm">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-copper/30 bg-copper/15 text-cream">
                  <Sparkle className="h-4 w-4" />
                </div>
                <div className="mt-4 font-display text-xl tracking-tight text-sand">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-sand/70">
                  {item.desc}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
