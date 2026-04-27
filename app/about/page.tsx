import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { site } from "@/lib/site";
import { HeartHandshake, Map, Sparkles } from "lucide-react";

const founders = [
  {
    name: "Ritesh",
    src: "/images/about/founders/20240609225650804.jpeg",
  },
  {
    name: "Arshad",
    src: "/images/about/founders/877abf8f-a0d7-4bd8-aa90-7df73c9cc0fa.jpg",
  },
  {
    name: "Meiraj",
    src: "/images/about/founders/f8f57d4a-e0d6-403c-9884-4dfb28dd0f1e.jpg",
  },
] as const;

const team = [
  { name: "Aarav", role: "Route design", note: "Pacing, viewpoints, stays" },
  { name: "Noor", role: "Guest experience", note: "Details that feel human" },
  { name: "Kabir", role: "Local partnerships", note: "On-ground trust" },
  { name: "Isha", role: "Operations", note: "Smooth journeys, calm days" },
];

const gallery = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80",
] as const;

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <div className="eyebrow">About</div>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
              A premium mountain brand with an intimate soul.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70">
              We design Himalayan journeys the way a magazine designs a story—strong opening frames, quiet middle chapters, and endings that feel earned.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <SectionReveal className="lg:col-span-6">
              <div className="grid gap-6">
                <p className="text-base leading-7 text-ink/70">
                  {site.name} began with a simple frustration: most mountain itineraries are either rushed or overly “package-y”.
                  We wanted the intimate version—premium stays, calm pacing, and routes that feel intentionally composed.
                </p>
                <p className="text-base leading-7 text-ink/70">
                  Our philosophy is quiet confidence: less noise, more meaning.
                  We build in golden-hour time, select stays for comfort and view, and keep inclusions transparent so you can trust the plan.
                </p>
                <div className="rounded-2xl border border-black/10 bg-cream/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <HeartHandshake className="h-4 w-4 text-forest" />
                    Our promise
                  </div>
                  <p className="mt-3 text-sm leading-7 text-ink/70">
                    If something feels like a template, we rework it. Every route is curated for pacing, light, comfort, and the kind of moments you’ll actually remember.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-cream shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/about/IMG_20240122_122543.jpg"
                    alt="Founder in the mountains"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink/80">
                    <Sparkles className="h-4 w-4 text-copper" />
                    Founder-led curation
                  </div>
                  <p className="mt-3 text-sm leading-7 text-ink/70">
                    Route choices designed with a filmmaker’s eye and an operator’s honesty—so the trip feels cinematic, but grounded.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {founders.map((f, idx) => (
              <SectionReveal key={f.name} delay={0.05 * idx}>
                <div className="card group overflow-hidden p-0">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={f.src}
                      alt={f.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute bottom-4 right-4 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="inline-flex items-center rounded-full bg-ink/70 px-3 py-1 text-sm font-semibold text-sand shadow-sm backdrop-blur">
                        {f.name}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <div className="eyebrow text-sand/60">Team</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-sand sm:text-4xl">
              Small team. High taste.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-sand/70">
              A focused crew that cares about pacing, comfort, and the quiet moments that make the Himalayas feel personal.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, idx) => {
              const initials = m.name
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <SectionReveal key={m.name} delay={0.04 * idx}>
                  <div className="rounded-2xl border border-sand/10 bg-white/5 p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full border border-sand/15 bg-white/5 flex items-center justify-center text-xs font-semibold tracking-[0.14em] text-sand/80">
                        {initials}
                      </div>
                      <div>
                        <div className="font-display text-lg tracking-tight text-sand">
                          {m.name}
                        </div>
                        <div className="mt-1 text-sm text-sand/75">{m.role}</div>
                        <div className="mt-2 text-xs leading-5 text-sand/60">
                          {m.note}
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {gallery.map((src, idx) => (
              <SectionReveal
                key={src}
                delay={0.03 * idx}
                className={idx === 2 ? "md:col-span-7" : "md:col-span-5"}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-sand/10 bg-ink/30">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={src}
                      alt="Behind the scenes"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-sand/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="eyebrow text-sand/60">How we plan</div>
                <div className="mt-3 font-display text-2xl tracking-tight text-sand">
                  Editorial routes, operational honesty.
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-sand/70">
                  We care about light, viewpoint timing, road conditions, and comfort—because those are the details that separate a premium escape from a standard itinerary.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-xs font-semibold text-sand/80">
                  <Map className="h-4 w-4" />
                  Route-first
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-xs font-semibold text-sand/80">
                  <HeartHandshake className="h-4 w-4" />
                  Trust-first
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

