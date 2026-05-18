import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTourBySlug, tours } from "@/data/tours";
import { TourJsonLd } from "@/components/tours/landing/TourJsonLd";
import { TourBreadcrumbs } from "@/components/tours/landing/TourBreadcrumbs";
import { LandingHero } from "@/components/tours/landing/LandingHero";
import { TourHighlightsCompact } from "@/components/tours/landing/TourHighlightsCompact";
import { LandingSectionNav } from "@/components/tours/landing/LandingSectionNav";
import { LandingItinerary } from "@/components/tours/landing/LandingItinerary";
import { InclusionsExclusions } from "@/components/tours/landing/InclusionsExclusions";
import { LandingFAQ } from "@/components/tours/landing/LandingFAQ";
import { LeadForm } from "@/components/tours/landing/LeadForm";
import { PoliciesAndKeepInMind } from "@/components/tours/landing/PoliciesAndKeepInMind";
import { FloatingContactRail } from "@/components/tours/landing/FloatingContactRail";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour" };
  return {
    title: `${tour.title} | MiraGo`,
    description: tour.overview,
  };
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
      <TourJsonLd tour={tour} />
      <TourBreadcrumbs tour={tour} />
      <LandingHero tour={tour} />
      <TourHighlightsCompact tour={tour} />
      <LandingSectionNav tour={tour} />
      <LandingItinerary tour={tour} />
      <InclusionsExclusions tour={tour} />
      <LandingFAQ tour={tour} maxItems={6} />
      <LeadForm tour={tour} />
      <PoliciesAndKeepInMind tour={tour} compact />
      <FloatingContactRail tour={tour} />
    </div>
  );
}
