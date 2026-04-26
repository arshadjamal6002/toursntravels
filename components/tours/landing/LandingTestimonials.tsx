import { Star } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

// TODO: replace with real guest reviews, photos, and verifiable trip details when available
const PLACEHOLDER_QUOTES = [
  {
    quote:
      "The Nubra approach felt huge and cinematic, but the pacing never felt rushed. I loved how clear the inclusions were before we even paid.",
    name: "Aanya S.",
    trip: "Nubra & desert stretch · 2024",
  },
  {
    quote:
      "Pangong at night is unreal. The cottage stay + star gazing was the emotional peak — not just another photo stop on the list.",
    name: "Rohit K.",
    trip: "Pangong · summer batch",
  },
  {
    quote:
      "Khardung La in good weather is a life moment. The captain kept everyone calm, and the group energy stayed respectful the whole time.",
    name: "Meera T.",
    trip: "Himalayan passes · 2024",
  },
] as const;

export function LandingTestimonials() {
  return (
    <section className="section section-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow text-sand/60">Proof & trust</div>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-sand sm:text-4xl">
            The kind of notes we get on WhatsApp.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-sand/65">
            Placeholder copy for layout — we’ll drop in your real Google /
            Instagram / DM screenshots here.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLACEHOLDER_QUOTES.map((q, idx) => (
            <SectionReveal key={q.name} delay={0.04 * idx}>
              <div className="h-full rounded-2xl border border-sand/10 bg-ink/40 p-6 backdrop-blur-sm">
                <div className="flex gap-0.5 text-copper">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-copper/90 text-copper"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-sand/85">
                  “{q.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full border border-sand/15 bg-sand/10 text-sand" />
                  <div>
                    <div className="text-sm font-semibold text-sand">
                      {q.name}
                    </div>
                    <div className="text-xs text-sand/55">{q.trip}</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
