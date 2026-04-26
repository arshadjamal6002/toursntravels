import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPinned } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/components/ui/cn";

const featured = [
  {
    slug: "ladakh-cinematic-circuit",
    title: "Leh Ladakh Bike Trip (5N/6D) · Flights",
    region: "Ladakh",
    signature: "Ex Delhi · Flights included · Premium adventure",
    meta: "6 days · Ride Khardung La & Chang La",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "spiti-slow-road",
    title: "Spiti — The Slow Road",
    region: "Spiti",
    signature: "Villages · Gompas · Stark valleys",
    meta: "7 days · From ₹38,000",
    image:
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=2400&q=80",
  },
  {
    slug: "kashmir-private-meadows",
    title: "Kashmir Private Meadows",
    region: "Kashmir",
    signature: "Meadows · Lakes · Soft days",
    meta: "6 days · From ₹34,000",
    image:
      "/images/tours/kashmir-private-meadows/622b39e01db188001cb19add.jpg",
  },
] as const;

export function FeaturedTrips() {
  return (
    <section className="section section-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-sand/60">Featured escapes</div>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-sand sm:text-4xl">
                Start with three journeys we love.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-sand/70">
                Editorial routes that balance iconic landscapes with quiet
                moments—crafted for people arriving from Instagram and staying
                for the trust.
              </p>
            </div>
            <Link
              href="/tours"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-sand/80 hover:text-sand"
            >
              View all tours <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((trip, idx) => (
            <SectionReveal key={trip.slug} delay={0.05 * idx}>
              <Link
                href={`/tours/${trip.slug}`}
                className={cn(
                  "group relative block overflow-hidden rounded-2xl border border-sand/10",
                  "bg-ink/25 shadow-[0_26px_70px_rgba(0,0,0,0.40)]"
                )}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-sand/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-sand/85 backdrop-blur-sm">
                    <MapPinned className="h-3.5 w-3.5" />
                    {trip.region}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-display text-2xl tracking-tight text-sand">
                        {trip.title}
                      </div>
                      <div className="mt-2 text-sm text-sand/70">
                        {trip.signature}
                      </div>
                      <div className="mt-3 text-sm font-semibold text-sand/85">
                        {trip.meta}
                      </div>
                    </div>
                    <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sand transition group-hover:bg-white/15 group-hover:-translate-y-[1px]">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sand/80 hover:text-sand"
          >
            View all tours <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

