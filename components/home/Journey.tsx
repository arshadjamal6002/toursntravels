import { SectionReveal } from "@/components/ui/SectionReveal";

const pillars = [
  {
    title: "Small groups, big space",
    desc: "Intimate departures that let the mountains breathe—more silence, fewer queues, better photos.",
  },
  {
    title: "Curated routes",
    desc: "We choose fewer locations and spend longer where it matters, with time for sunsets and slow mornings.",
  },
  {
    title: "Local-led",
    desc: "Ground teams who know the terrain and the culture—so you feel held, not herded.",
  },
] as const;

export function Journey() {
  return (
    <section className="section bg-sand text-ink">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionReveal className="lg:col-span-6">
            <div className="eyebrow">The MiraGo approach</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              A journey that feels intimate, not itinerant.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">
              Designed for travelers who want a premium mountain escape without
              the package-tour vibe. Clean plans, elegant pacing, and a look
              that’s social-media friendly—because your memories deserve better
              framing.
            </p>
          </SectionReveal>

          <SectionReveal className="lg:col-span-6">
            <div className="rounded-2xl border border-black/10 bg-cream p-6 shadow-[0_14px_34px_rgba(18,20,15,0.10)]">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-2xl font-display tracking-tight">4.8★</div>
                  <div className="mt-1 text-sm text-ink/70">
                    Guest satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display tracking-tight">
                    6–10
                  </div>
                  <div className="mt-1 text-sm text-ink/70">
                    Typical group size
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display tracking-tight">
                    100%
                  </div>
                  <div className="mt-1 text-sm text-ink/70">
                    Curated departures
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, idx) => (
            <SectionReveal key={p.title} delay={0.05 * idx}>
              <div className="card p-6">
                <div className="font-display text-xl tracking-tight text-ink">
                  {p.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-ink/70">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

