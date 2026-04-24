import Link from "next/link";
import { Camera } from "lucide-react";
import { site, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-forest-deep text-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="py-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-2xl tracking-tight">
              {site.name}
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-sand/80">
              {site.tagline}. Intimate, local-led journeys designed for people
              who want mountains with meaning—not mass-market itineraries.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand/15 bg-white/5 transition hover:bg-white/10"
                aria-label="Instagram"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-copper px-4 py-2 text-sm font-semibold text-cream transition hover:bg-copper-hover hover:-translate-y-[1px]"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-xs font-medium tracking-[0.22em] uppercase text-sand/60">
                Explore
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link className="text-sand/80 hover:text-sand" href="/tours">
                  Tours
                </Link>
                <Link className="text-sand/80 hover:text-sand" href="/about">
                  About
                </Link>
                <Link className="text-sand/80 hover:text-sand" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.22em] uppercase text-sand/60">
                Contact
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm text-sand/80">
                <a className="hover:text-sand" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
                <a className="hover:text-sand" href={`tel:${site.contact.phone}`}>
                  {site.contact.phone}
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.22em] uppercase text-sand/60">
                Newsletter
              </div>
              <p className="mt-4 text-sm text-sand/80 leading-6">
                One short note when a new Himalayan escape drops.
              </p>
              <form
                className="mt-4 flex gap-2"
                action="#"
              >
                <input
                  className="w-full rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-sm text-sand placeholder:text-sand/40 outline-none focus:border-copper"
                  placeholder="Email"
                  type="email"
                  inputMode="email"
                />
                <button className="cta-primary shrink-0" type="submit">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-sand/10 py-6 text-xs text-sand/60 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="text-sand/50">
            Crafted for a premium mountain travel brand.
          </div>
        </div>
      </div>
    </footer>
  );
}

