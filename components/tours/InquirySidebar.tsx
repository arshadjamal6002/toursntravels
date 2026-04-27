"use client";

import { useMemo } from "react";
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/site";
import type { Tour } from "@/data/tours";

export function InquirySidebar({ tour }: { tour: Tour }) {
  const link = useMemo(
    () =>
      waLink(
        `Hi MiraGo — I’m interested in “${tour.title}”. Can you share availability, inclusions, and pricing for my dates?`
      ),
    [tour.title]
  );

  return (
    <>
      <aside className="hidden lg:block lg:sticky lg:top-24 h-fit">
        <div className="rounded-2xl border border-black/10 bg-cream/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
          <div className="font-display text-xl tracking-tight text-ink">
            Inquire for dates & pricing
          </div>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            Tell us your dates and comfort level. We’ll reply with a curated
            plan and clear inclusions.
          </p>

          <div className="mt-4 grid gap-2 text-xs text-ink/60">
            <div className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-ink/50" />
              Typical reply time: under 2 hours (WhatsApp)
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-ink/50" />
              Transparent inclusions, no template packages
            </div>
          </div>

          <form className="mt-5 grid gap-3" action="#" method="post">
            <input
              className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
              placeholder="Name"
            />
            <input
              className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
              placeholder="WhatsApp / Phone"
              inputMode="tel"
            />
            <input
              className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-copper"
              placeholder="Preferred month"
            />
            <button className="cta-primary mt-1" type="submit">
              Request availability
            </button>
          </form>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-black/5 hover:-translate-y-[1px]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp for quick reply
          </a>
        </div>
      </aside>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-sand/90 backdrop-blur-md border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <a href={link} target="_blank" rel="noreferrer" className="cta-primary flex-1">
            WhatsApp
          </a>
          <a
            href="/contact"
            className="flex-1 inline-flex items-center justify-center rounded-full border border-black/10 bg-cream px-6 py-3 text-sm font-semibold text-ink transition hover:bg-black/5"
          >
            Inquire
          </a>
        </div>
      </div>
      <div className="lg:hidden h-20" />
    </>
  );
}

