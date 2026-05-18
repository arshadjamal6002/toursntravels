import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Tour } from "@/data/tours";

export function TourBreadcrumbs({ tour }: { tour: Tour }) {
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours" },
    { href: "/tours", label: tour.region },
    { href: null, label: tour.title },
  ] as const;

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-black/8 bg-sand/95 px-4 py-2.5 text-[11px] font-medium text-ink/55 md:px-6 lg:px-8"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1">
        {crumbs.map((c, i) => (
          <li key={`${c.label}-${i}`} className="inline-flex min-w-0 items-center gap-1">
            {i > 0 ? (
              <ChevronRight className="h-3 w-3 shrink-0 text-ink/30" aria-hidden />
            ) : null}
            {c.href ? (
              <Link href={c.href} className="truncate transition hover:text-ink">
                {c.label}
              </Link>
            ) : (
              <span className="truncate text-ink/75" aria-current="page">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
