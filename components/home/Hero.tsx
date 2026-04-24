import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { Compass, Sparkles, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80"
          src="https://videos.pexels.com/video-files/1298855/1298855-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink/95" />
        <div className="absolute inset-0 [background:radial-gradient(1200px_600px_at_25%_25%,rgba(244,238,228,0.10),transparent_55%)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(18,20,15,0.75))]" />
      </div>

      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="pt-28 pb-14 sm:pb-18">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-sand/75 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-sand/70" />
                {site.tagline}
              </div>

              <h1 className="mt-6 text-balance font-display text-4xl leading-[1.02] tracking-tight text-sand sm:text-6xl">
                <span className="block">Curated Himalayan escapes,</span>
                <span className="block text-sand/90">shot like cinema.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-sand/80 sm:text-lg sm:leading-8">
                Premium journeys for couples, friends, and small groups—local-led,
                emotionally rich, and paced for golden hours, slow mornings, and
                quiet roads.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/tours" variant="primary">
                  Explore curated tours
                </Button>
                <Button href="/contact" variant="ghost">
                  Get a custom plan
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="soft-panel border-sand/10 bg-ink/40 p-4 text-sand">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Users className="h-4 w-4 text-sand/80" />
                    Small groups
                  </div>
                  <div className="mt-1 text-xs leading-5 text-sand/70">
                    Intimate departures that feel personal.
                  </div>
                </div>
                <div className="soft-panel border-sand/10 bg-ink/40 p-4 text-sand">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Compass className="h-4 w-4 text-sand/80" />
                    Curated routes
                  </div>
                  <div className="mt-1 text-xs leading-5 text-sand/70">
                    Fewer stops. Better moments.
                  </div>
                </div>
                <div className="soft-panel border-sand/10 bg-ink/40 p-4 text-sand">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4 text-sand/80" />
                    Premium stays
                  </div>
                  <div className="mt-1 text-xs leading-5 text-sand/70">
                    Comfort without the package vibe.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sand/10 bg-ink/35 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="py-5 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs text-sand/70">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                Clear inclusions, honest guidance
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                Boutique stays & calm pacing
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                Photo-first moments built in
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

