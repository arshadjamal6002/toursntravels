import { Minus, Plus } from "lucide-react";
import type { Tour } from "@/data/tours";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function InclusionsExclusions({ tour }: { tour: Tour }) {
  return (
    <section className="section bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow">Inclusions</div>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            What you’re booking — in plain language.
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SectionReveal>
            <div className="h-full rounded-2xl border border-black/10 bg-sand/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
              <div className="flex items-center gap-2 font-display text-xl tracking-tight text-ink">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-copper/12 text-copper">
                  <Plus className="h-4 w-4" />
                </span>
                Included
              </div>
              <ul className="mt-5 space-y-3 text-sm text-ink/80">
                {tour.included.map((x) => (
                  <li key={x} className="flex gap-3 leading-6">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <div className="h-full rounded-2xl border border-dashed border-black/15 bg-cream p-6 shadow-[0_12px_30px_rgba(18,20,15,0.06)]">
              <div className="flex items-center gap-2 font-display text-xl tracking-tight text-ink/90">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 bg-ink/5 text-ink/60">
                  <Minus className="h-4 w-4" />
                </span>
                Not included
              </div>
              <p className="mt-2 text-xs text-ink/55">
                So you can budget calmly — no surprise asterisks.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-ink/70">
                {tour.excluded.map((x) => (
                  <li key={x} className="flex gap-3 leading-6">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/20" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
