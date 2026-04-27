"use client";

import { useCallback, type FormEvent } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { waLink } from "@/lib/site";
import type { Tour } from "@/data/tours";
import { buildLeadWhatsAppMessage } from "./landing-helpers";
import { SectionReveal } from "@/components/ui/SectionReveal";

const MONTHS = [
  "June",
  "July",
  "August",
  "September",
  "October",
] as const;

export function LeadForm({ tour }: { tour: Tour }) {
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const name = String(fd.get("name") ?? "").trim();
      const whatsapp = String(fd.get("whatsapp") ?? "").trim();
      const month = String(fd.get("month") ?? "");
      const travelers = String(fd.get("travelers") ?? "").trim();
      const city = String(fd.get("city") ?? "").trim();
      const message = String(fd.get("message") ?? "");
      if (!name || !whatsapp) {
        return;
      }
      const text = buildLeadWhatsAppMessage(tour, {
        name,
        whatsapp,
        month,
        travelers,
        city,
        message,
      });
      const url = waLink(text);
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [tour]
  );

  return (
    <section id="lead-form" className="section bg-sand scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="eyebrow">Reserve a conversation</div>
          <h2 className="mt-4 text-center font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Get the full itinerary on WhatsApp
          </h2>
          <p className="mt-3 text-center text-sm leading-6 text-ink/70">
            We respond with day-by-day detail, inclusions, and the next step to
            hold your slot — no spam, no group forwards.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-black/10 bg-cream/95 p-6 shadow-[0_20px_50px_rgba(18,20,15,0.1)]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-ink/70">
                    Name *
                  </span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                    placeholder="Your full name"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-ink/70">
                    WhatsApp number *
                  </span>
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                    placeholder="+91 or 10-digit number"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-ink/70">
                    Travel month
                  </span>
                  <select
                    name="month"
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:border-copper"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select month
                    </option>
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-ink/70">
                    Number of travelers
                  </span>
                  <input
                    name="travelers"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                    placeholder="2"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-ink/70">City</span>
                  <input
                    name="city"
                    autoComplete="address-level2"
                    className="mt-1.5 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                    placeholder="Where you’re traveling from"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-ink/70">
                    Message / preferences
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    className="mt-1.5 w-full resize-y rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
                    placeholder="Pillion vs rider, month flexibility, or questions about altitude / bikes"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="cta-primary min-h-11 w-full justify-center sm:w-auto sm:px-10"
                >
                  Send me {tour.region} details
                </button>
                <a
                  href={waLink(
                    `Hi MiraGo — quick question about “${tour.title}” before I book.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-black/5 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp directly
                </a>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-black/10 bg-cream/80 p-6 shadow-[0_18px_45px_rgba(18,20,15,0.10)] backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-semibold text-ink/80">
                <Sparkles className="h-4 w-4 text-copper" />
                Custom itineraries
              </div>
              <div className="mt-4 font-display text-2xl tracking-tight text-ink">
                Want a private version of Ladakh?
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Tell us your month, rider/pillion mix, and comfort level. We’ll
                suggest the best pacing, stay upgrades (if you want), and a
                clean quote on WhatsApp.
              </p>
              <div className="mt-5 grid gap-2 text-xs text-ink/60">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  Private dates or small groups
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  Extra rest days / slower pace
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  Upgrade stays & room privacy
                </div>
              </div>
              <a
                href={waLink(
                  `Hi MiraGo — I want a custom itinerary for “${tour.title}”. Can we plan private dates, pacing, and upgrades?`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-black/5"
              >
                Ask for a custom plan
              </a>
              <div className="mt-3 text-xs text-ink/55">
                Typical reply: under 2 hours on WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
