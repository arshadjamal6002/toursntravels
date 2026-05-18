"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import { cn } from "@/components/ui/cn";

export function HeroCarousel({
  slides,
  alt,
  className,
  sizes = "100vw",
  priority = true,
}: {
  slides: string[];
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const hasMultiple = count > 1;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  if (!count) return null;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={priority && i === 0}
          sizes={sizes}
          className={cn(
            "object-cover transition-opacity duration-500",
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/50" />

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/40 text-sand backdrop-blur-sm transition hover:bg-ink/55"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/40 text-sand backdrop-blur-sm transition hover:bg-ink/55"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-5 bg-cream" : "w-1.5 bg-cream/50"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
