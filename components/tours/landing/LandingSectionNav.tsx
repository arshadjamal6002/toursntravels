"use client";

import type { Tour } from "@/data/tours";
import { cn } from "@/components/ui/cn";

const BASE_LINKS = [
  { href: "#itinerary", label: "Itinerary" },
  { href: "#inclusions", label: "Included" },
  { href: "#faq", label: "FAQ" },
  { href: "#lead-form", label: "Book" },
] as const;

export function LandingSectionNav({ tour }: { tour: Tour }) {
  const links = tour.highlights?.length
    ? [{ href: "#highlights", label: "Highlights" as const }, ...BASE_LINKS]
    : [...BASE_LINKS];

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-[68px] z-30 border-b border-black/10 bg-sand/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] md:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition",
              "text-ink/65 hover:bg-cream hover:text-ink",
              link.href === "#lead-form" &&
                "bg-copper/10 text-copper hover:bg-copper/15 hover:text-copper"
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
