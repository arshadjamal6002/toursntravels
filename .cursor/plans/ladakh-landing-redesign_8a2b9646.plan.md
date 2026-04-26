---
name: ladakh-landing-redesign
overview: Redesign the tour detail page into a premium, conversion-focused Meta-ads landing experience. Every section is data-driven so it ships fully populated for Ladakh today and gracefully scales as other tours add content. Lead form hands off to WhatsApp with pre-filled context.
todos:
  - id: extend-tour-type
    content: Extend Tour type in data/tours.ts with optional quickFacts, offer, faq, whyStandsOut fields and populate the Ladakh entry per the brief
    status: completed
  - id: landing-hero
    content: Build LandingHero with hook line, four trust chips, dual CTAs, and price/offer card
    status: completed
  - id: offer-strip
    content: Build OfferStrip premium urgency bar (limited departures / early-bird / filling)
    status: completed
  - id: quick-facts
    content: Build QuickFacts 6-card grid (duration, route, flights, bike, stay, meals)
    status: completed
  - id: highlights
    content: Build Highlights visually rich grid sourced from tour.highlights
    status: completed
  - id: why-stands-out
    content: Build WhyStandsOut value-prop cards
    status: completed
  - id: landing-itinerary
    content: Build LandingItinerary timeline with motion-driven day cards
    status: completed
  - id: inclusions-exclusions
    content: Build InclusionsExclusions two-card layout
    status: completed
  - id: important-notes
    content: Build ImportantNotes icon cards
    status: completed
  - id: testimonials
    content: Build LandingTestimonials with three premium placeholder quotes
    status: completed
  - id: faq
    content: Build LandingFAQ accordion with the seven brief-specified questions plus FAQPage JSON-LD
    status: completed
  - id: lead-form
    content: Build LeadForm with WhatsApp handoff (templated message via waLink)
    status: completed
  - id: sticky-cta
    content: Build StickyMobileCTA bottom bar
    status: completed
  - id: page-compose
    content: Recompose app/tours/[slug]/page.tsx into the vertical landing flow with mid-page CTA bands
    status: completed
  - id: hide-floating-wa
    content: Hide global FloatingWhatsApp on /tours/[slug]/* routes to avoid stacking with sticky CTA
    status: completed
  - id: lints-and-summary
    content: Run lint check on edited files, then deliver the post-implementation summary (sections updated, CTA repetition map, founder-input TODOs)
    status: completed
isProject: false
---

## Approach

Replace the body of [app/tours/[slug]/page.tsx](app/tours/%5Bslug%5D/page.tsx) with a new landing-style composition. Build a small set of focused components under `components/tours/landing/` that each consume the existing `Tour` type plus a few new optional fields. Sections gracefully omit when data is absent, so the Ladakh trip is fully featured today and other tours fill in over time.

Brand stays consistent with the rest of the site: `sand` / `cream` / `ink` / `copper` palette, `Fraunces` display headings, `rounded-2xl` premium cards, `SectionReveal` motion, and existing `cta-primary` / `cta-ghost` / `soft-panel` utilities. No new design system primitives required.

## Data layer changes — [data/tours.ts](data/tours.ts)

Extend the `Tour` type with optional fields used by the new sections:

```ts
quickFacts?: {
  duration: string;       // "5 Nights / 6 Days"
  route: string;          // "Delhi -> Leh -> Nubra -> Pangong -> Leh -> Delhi"
  flightsIncluded: boolean;
  bikeType?: string;      // "Royal Enfield Himalayan 411cc (2 riders/bike)"
  stayType?: string;      // "Hotels + Pangong lake-view cottages"
  mealPlan?: string;      // "5 Breakfast + 5 Dinner"
};
offer?: {
  badge?: string;         // "Founder's launch offer"
  headline?: string;      // "Limited monsoon & Sep departures"
  earlyBird?: string;     // "Early-bird save up to ₹3,000"
  filling?: string;       // "Few seats left for Aug-Sep batches"
};
faq?: { q: string; a: string }[];
whyStandsOut?: { title: string; desc: string }[];
```

Populate the Ladakh entry with the brief's content. Leave `undefined` on other tours — every landing section guards on presence.

## New components — `components/tours/landing/`

1. **LandingHero.tsx** (client) — full-bleed hero image, eyebrow region tag, h1 from `tour.hookLine` (fallback to `tour.title`), subhead from `tour.subtitle`/`tour.overview`, four trust chips (Ex Delhi · Flights Included · `5N/6D` · `600+ KM Circuit`) sourced from inclusions/highlights, dual CTAs (`#lead-form` "Get Full Itinerary" + WhatsApp), and a side price card showing `From ₹{priceFrom}` plus a "Founder's offer" placeholder slot. Reuses the `Image` + gradient pattern from [TourHero.tsx](components/tours/TourHero.tsx).

2. **OfferStrip.tsx** — slim premium bar between hero and content with three pill stats from `tour.offer` (limited departures / early-bird / filling fast). Classy iconography (`CalendarRange`, `Sparkles`, `TrendingUp`), copper accent dots, NOT a screaming red banner.

3. **QuickFacts.tsx** — 6-card grid: duration, route, flights, bike, stay, meals. Icon + label + value. Uses `lucide-react` (`Plane`, `MapPinned`, `Bike`, `BedDouble`, `UtensilsCrossed`, `Clock`).

4. **Highlights.tsx** — turns `tour.highlights` into a visually rich 2x3 grid of premium cards on desktop, single column with sticky imagery on mobile. Each card has an icon, copper underline, and a one-line punch.

5. **WhyStandsOut.tsx** — 6 value-prop cards (flights included, premium bike, scenic high-altitude route, Pangong cottage stay, star gazing, trip captain support). Reads from `tour.whyStandsOut` with sensible fallbacks derived from `included`/`highlights`.

6. **LandingItinerary.tsx** (client) — replaces the current `Itinerary` accordion for landing. Mobile-first vertical timeline with day-numbered medallions, a copper connecting rail, and click-to-expand details. Uses `framer-motion` for reveal/expand. Works off the existing `tour.itinerary` array.

7. **InclusionsExclusions.tsx** — two side-by-side cards (stack on mobile). Includes uses copper check icons (`Check`), Excludes uses muted dashes — same data as today, premium presentation.

8. **ImportantNotes.tsx** — 4 icon-cards (`Mountain`, `IdCard`, `Bike`, `CloudSun`) reading from `tour.importantNotes`. Tone: informative and reassuring.

9. **LandingTestimonials.tsx** — 3 premium quote cards with avatar slot, star row, name, and trip line. Marked with a `// TODO: replace with real reviews` comment. Realistic but clearly placeholder content (e.g., Aanya/Nubra, Rohit/Pangong, Meera/Khardung La).

10. **LandingFAQ.tsx** (client) — accordion with the seven brief-specified questions. Uses `tour.faq` for the data. Schema.org `FAQPage` JSON-LD injected for SEO bonus.

11. **LeadForm.tsx** (client) — anchored at `id="lead-form"`. Fields: Name, WhatsApp Number, Travel Month (select Jun-Oct), Number of Travelers, City, Message/Preferences. On submit, builds a templated WhatsApp message and opens `waLink(message)` (per existing [lib/site.ts](lib/site.ts) pattern) — no backend needed. Primary CTA "Send Me Ladakh Details", secondary ghost "WhatsApp Directly".

12. **StickyMobileCTA.tsx** (client) — fixed bottom bar visible only on `lg:hidden`, with two buttons: WhatsApp (copper) + Get Itinerary (scrolls to `#lead-form`). Replaces the mobile half of the current [InquirySidebar.tsx](components/tours/InquirySidebar.tsx). 24px bottom safe-area padding.

## Page composition — [app/tours/[slug]/page.tsx](app/tours/%5Bslug%5D/page.tsx)

Replace the current grid layout with a vertical landing flow:

```
LandingHero
OfferStrip
QuickFacts
Highlights
[Mid-page CTA band — WhatsApp + Get Itinerary]
WhyStandsOut
LandingItinerary
[Mid-page CTA — WhatsApp]
InclusionsExclusions
ImportantNotes
LandingTestimonials
LandingFAQ
LeadForm  (#lead-form)
StickyMobileCTA
```

Existing [TourHero.tsx](components/tours/TourHero.tsx), [Itinerary.tsx](components/tours/Itinerary.tsx), and [InquirySidebar.tsx](components/tours/InquirySidebar.tsx) are no longer imported by the slug page, but stay in the repo for now (no deletions) in case they're reused elsewhere.

## Cross-cutting tweaks

- **Hide the global FloatingWhatsApp on `/tours/[slug]/*`** in [components/layout/FloatingWhatsApp.tsx](components/layout/FloatingWhatsApp.tsx) (pathname check via `usePathname`) so it does not stack with the new sticky mobile bar.
- **Smooth-scroll** is already enabled (`scroll-behavior: smooth` in [app/globals.css](app/globals.css)) — `#lead-form` anchors will work out of the box.
- **JSON-LD** for `Trip` and `FAQPage` injected on the slug page for richer ad-landing snippets.

## CTA repetition map

| Touchpoint | WhatsApp | Get Itinerary |
| --- | --- | --- |
| Hero | yes | yes |
| Mid-page band (after Highlights) | yes | yes |
| Mid-page band (after Itinerary) | yes | — |
| Lead form | yes (secondary ghost) | yes (primary) |
| Sticky mobile bar | yes | yes |

Five distinct CTA moments + one persistent sticky bar — strong without feeling spammy.

## Mobile-first commitments

- Hero stacks vertically on mobile, headline drops to ~3xl, trust chips wrap to 2 rows max.
- Itinerary timeline is single-column with collapsed-by-default cards; first card opens.
- Sticky bottom bar always visible on mobile, never on `lg+`.
- Tap targets ≥ 44px, form inputs use `inputMode` hints (`tel`, `numeric`).
- Hero image uses `sizes="100vw"` with `priority` for LCP.

## What still needs real founder input (called out post-implementation)

- Real price + offer copy (placeholder shows `From ₹42,000` + "Founder's offer" badge slot).
- Confirmed departure dates / batch calendar (urgency strip is generic until then).
- Real testimonials with photos (3 placeholder cards marked with TODO).
- Hero/highlight imagery that's owned (currently using existing Unsplash hero).
- Final FAQ wording sign-off.
