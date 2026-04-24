import { SectionReveal } from "@/components/ui/SectionReveal";

const quotes = [
  {
    quote:
      "Every detail felt intentional. It didn’t feel like a tour—it felt like we had someone quietly taking care of the hard parts.",
    name: "Aanya",
    trip: "Spiti · October",
  },
  {
    quote:
      "The pacing was perfect. We had space for photos, cafés, and slow mornings without feeling rushed or boxed into a template.",
    name: "Rohit",
    trip: "Kashmir · April",
  },
  {
    quote:
      "Premium, but not pretentious. Great stays, great guides, and the route choices were genuinely different from the usual circuits.",
    name: "Meera",
    trip: "Ladakh · August",
  },
] as const;

export function Testimonials() {
  return (
    <section className="section bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow">Guest notes</div>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Trusted by travelers who want the intimate version.
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {quotes.map((q, idx) => {
            const initials = q.name
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <SectionReveal key={q.trip} delay={0.05 * idx}>
                <div className="rounded-2xl border border-black/10 bg-cream/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                  <p className="text-sm leading-7 text-ink/75">“{q.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-black/10 bg-sand text-ink flex items-center justify-center text-xs font-semibold tracking-[0.14em]">
                      {initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {q.name}
                      </div>
                      <div className="text-xs text-ink/60">{q.trip}</div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

