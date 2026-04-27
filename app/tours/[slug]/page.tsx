import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTourBySlug, tours } from "@/data/tours";
import { TourJsonLd } from "@/components/tours/landing/TourJsonLd";
import { LandingHero } from "@/components/tours/landing/LandingHero";
import { OfferStrip } from "@/components/tours/landing/OfferStrip";
import { QuickFacts } from "@/components/tours/landing/QuickFacts";
import { TourHighlights } from "@/components/tours/landing/TourHighlights";
import { LandingCtaBand } from "@/components/tours/landing/LandingCtaBand";
import { WhyStandsOut } from "@/components/tours/landing/WhyStandsOut";
import { LandingItinerary } from "@/components/tours/landing/LandingItinerary";
import { InclusionsExclusions } from "@/components/tours/landing/InclusionsExclusions";
import { PoliciesAndKeepInMind } from "@/components/tours/landing/PoliciesAndKeepInMind";
import { FloatingBadgeRail } from "@/components/tours/landing/FloatingBadgeRail";
import { LandingTestimonials } from "@/components/tours/landing/LandingTestimonials";
import { LandingFAQ } from "@/components/tours/landing/LandingFAQ";
import { LeadForm } from "@/components/tours/landing/LeadForm";
import { StickyMobileCTA } from "@/components/tours/landing/StickyMobileCTA";

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
      <FloatingBadgeRail tour={tour} />
      <LandingHero tour={tour} />
      <OfferStrip tour={tour} />
      <QuickFacts tour={tour} />
      <TourHighlights tour={tour} />
      <LandingCtaBand
        tour={tour}
        variant="full"
        heading="Want every day in writing?"
        sub="Get the full breakdown — where we stop, what’s included, and what to expect on the passes."
      />
      <WhyStandsOut tour={tour} />
      <LandingItinerary tour={tour} />
      <LandingCtaBand
        tour={tour}
        variant="whatsappOnly"
        heading="Prefer to talk it through on WhatsApp?"
        sub="We’ll answer altitude, pillion, packing, and honest pros/cons for your month."
      />
      <InclusionsExclusions tour={tour} />
      <PoliciesAndKeepInMind tour={tour} />
      <LandingTestimonials />
      <LandingFAQ tour={tour} />
      <LeadForm tour={tour} />
      <StickyMobileCTA tour={tour} />
    </div>
  );
}
