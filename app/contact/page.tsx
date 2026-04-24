import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { site, waLink } from "@/lib/site";
import { Clock, HeartHandshake, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <div className="eyebrow">Contact</div>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
              Plan a premium Himalayan escape.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70">
              Tell us your dates and travel style. We’ll reply with a curated
              route, best-season guidance, and transparent inclusions.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <SectionReveal className="lg:col-span-7">
              <div className="rounded-2xl border border-black/10 bg-cream/90 p-7 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                <div className="font-display text-xl tracking-tight text-ink">
                  Inquiry form
                </div>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Share as much as you know. We’ll respond with a clean, premium plan—not a generic package.
                </p>
                <form
                  className="mt-6 grid gap-4"
                  action="#"
                  method="post"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                      placeholder="Name"
                    />
                    <input
                      className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                      placeholder="Email"
                      type="email"
                      inputMode="email"
                    />
                  </div>
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                    placeholder="Trip interest (e.g., Spiti, Ladakh, Kashmir)"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                      placeholder="Preferred month"
                    />
                    <input
                      className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                      placeholder="Group size"
                      inputMode="numeric"
                    />
                  </div>
                  <textarea
                    className="min-h-32 w-full resize-y rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                    placeholder="Message (dates, group size, comfort level, anything important)"
                  />
                  <button type="submit" className="cta-primary">
                    Send inquiry
                  </button>
                </form>

                <div className="mt-5 text-sm text-ink/70">
                  Prefer WhatsApp?{" "}
                  <a
                    className="font-semibold text-ink hover:underline"
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message us here
                  </a>
                  .
                </div>
              </div>
            </SectionReveal>

            <SectionReveal className="lg:col-span-5">
              <div className="grid gap-6">
                <div className="rounded-2xl border border-black/10 bg-cream/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-display text-xl tracking-tight text-ink">
                        WhatsApp
                      </div>
                      <p className="mt-2 text-sm leading-6 text-ink/70">
                        Fastest route to pricing, dates, and availability.
                      </p>
                    </div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-ink/70">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-primary mt-4 w-full"
                  >
                    Chat on WhatsApp
                  </a>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs text-ink/60">
                    <Clock className="h-4 w-4" />
                    Typical reply: under 2 hours
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-cream/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                  <div className="font-display text-xl tracking-tight text-ink">
                    Support
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    Prefer email or a quick call? We’ll keep it clear and low-friction.
                  </p>
                  <div className="mt-4 grid gap-2 text-sm text-ink/70">
                    <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${site.contact.email}`}>
                      <HeartHandshake className="h-4 w-4 text-ink/55" />
                      {site.contact.email}
                    </a>
                    <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${site.contact.phone}`}>
                      <Phone className="h-4 w-4 text-ink/55" />
                      {site.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-black/10 bg-cream shadow-[0_14px_34px_rgba(18,20,15,0.10)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&w=2000&q=80"
                      alt="Mountain map"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-ink">
                      Based in India. Traveling across the Himalayas.
                    </div>
                    <div className="mt-2 text-sm text-ink/70">
                      We’ll confirm pickup points and route details once dates
                      are locked.
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

