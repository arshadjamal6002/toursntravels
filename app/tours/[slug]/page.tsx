import Image from "next/image";
import { notFound } from "next/navigation";
import { getTourBySlug, tours } from "@/data/tours";
import { TourHero } from "@/components/tours/TourHero";
import { Itinerary } from "@/components/tours/Itinerary";
import { InquirySidebar } from "@/components/tours/InquirySidebar";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return notFound();

  return (
    <div className="pt-16">
      <TourHero tour={tour} />

      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionReveal>
                <div className="eyebrow">Overview</div>
                <p className="mt-4 text-base leading-7 text-ink/70">
                  {tour.overview}
                </p>
              </SectionReveal>

              <div className="mt-12">
                <SectionReveal>
                  <div className="eyebrow">Itinerary</div>
                  <h2 className="mt-4 font-display text-2xl tracking-tight text-ink">
                    Day-by-day, with space to breathe.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">
                    Designed for comfort and light—so you’re not rushing from checkbox to checkbox.
                  </p>
                </SectionReveal>
                <div className="mt-6">
                  <Itinerary days={tour.itinerary} />
                </div>
              </div>

              <div className="mt-14">
                <SectionReveal>
                  <div className="eyebrow">Gallery</div>
                  <h2 className="mt-4 font-display text-2xl tracking-tight text-ink">
                    A few frames from the route.
                  </h2>
                </SectionReveal>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {tour.gallery.map((src) => (
                    <div
                      key={src}
                      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-cream/90 shadow-[0_18px_40px_rgba(18,20,15,0.06)]"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={src}
                          alt={`${tour.title} gallery`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14 grid gap-6 lg:grid-cols-2">
                <SectionReveal>
                  <div className="rounded-2xl border border-black/10 bg-cream/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                    <div className="font-display text-xl tracking-tight text-ink">
                      Included
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-ink/70">
                      {tour.included.map((x) => (
                        <li key={x} className="leading-6">
                          <span className="mr-2 text-copper">•</span>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
                <SectionReveal delay={0.05}>
                  <div className="rounded-2xl border border-black/10 bg-cream/90 p-6 shadow-[0_18px_40px_rgba(18,20,15,0.08)]">
                    <div className="font-display text-xl tracking-tight text-ink">
                      Excluded
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-ink/70">
                      {tour.excluded.map((x) => (
                        <li key={x} className="leading-6">
                          <span className="mr-2 text-ink/30">•</span>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              </div>
            </div>

            <div className="lg:col-span-4">
              <InquirySidebar tour={tour} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

