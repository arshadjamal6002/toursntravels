import type { Tour } from "@/data/tours";

export function TourJsonLd({ tour }: { tour: Tour }) {
  const trip = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: tour.title,
    description: tour.overview,
    touristType: "Adventure / premium small groups",
  };

  const faq =
    tour.faq && tour.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tour.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }}
      />
      {faq ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      ) : null}
    </>
  );
}
