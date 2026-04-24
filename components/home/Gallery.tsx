import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/components/ui/cn";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=80",
    caption: "Morning light, Uttarakhand",
  },
  {
    src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2200&q=80",
    caption: "Quiet roads, Himachal",
  },
  {
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2200&q=80",
    caption: "High-altitude textures, Ladakh",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=80",
    caption: "Stark valleys, Spiti",
  },
  {
    src: "https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&w=2200&q=80",
    caption: "Lakeside calm, Kashmir",
  },
  {
    src: "/images/tours/kashmir-private-meadows/622b39e01db188001cb19add.jpg",
    caption: "Golden hour, ridge lines",
  },
] as const;

export function Gallery() {
  return (
    <section className="section section-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-sand/60">Gallery</div>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-sand sm:text-4xl">
                Built for the camera. Better in person.
              </h2>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          {images.map((img, idx) => (
            <SectionReveal
              key={img.src}
              delay={0.03 * idx}
              className={cn(
                idx === 0
                  ? "md:col-span-7"
                  : idx === 1
                    ? "md:col-span-5"
                    : idx === 2
                      ? "md:col-span-5"
                      : idx === 3
                        ? "md:col-span-7"
                        : idx === 4
                          ? "md:col-span-4"
                          : "md:col-span-8"
              )}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-sand/10 bg-ink/30">
                <div
                  className={cn(
                    "relative",
                    idx === 0 || idx === 3 ? "aspect-[16/10]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-xs text-sand/70">
                      <span className="inline-flex items-center rounded-full border border-sand/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                        {img.caption}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

