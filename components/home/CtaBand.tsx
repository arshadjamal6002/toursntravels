import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function CtaBand() {
  return (
    <section className="relative section section-dark overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2600&q=80"
          alt="Mountain ridge at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/90" />
        <div className="absolute inset-0 [background:radial-gradient(1000px_500px_at_30%_25%,rgba(244,238,228,0.09),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="max-w-2xl">
            <div className="eyebrow text-sand/60">Ready when you are</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-sand sm:text-4xl">
              Share your dates. We’ll craft the quiet version of the Himalayas.
            </h2>
            <p className="mt-4 text-base leading-7 text-sand/75">
              Tell us your travel style, comfort level, and must-see region.
              We’ll respond with best-season guidance, a curated route, and
              transparent inclusions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">
                Get my custom plan
              </Button>
              <Button href="/tours" variant="ghost">
                Browse tours
              </Button>
            </div>

            <div className="mt-6 text-xs text-sand/60">
              Typical reply time: under 2 hours (WhatsApp), same day (email).
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

