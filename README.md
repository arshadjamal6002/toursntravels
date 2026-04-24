## Altura — Curated Himalayan Escapes

Premium, cinematic tours & travel website built with **Next.js (App Router)** and **Tailwind CSS**. Designed to feel like a curated mountain travel brand (not a generic booking portal), with restrained motion and mobile-first conversion.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Brand configuration

Update name/tagline/contact/WhatsApp in:

- `lib/site.ts`

## Tours data

Sample tours are in:

- `data/tours.ts`

The tours listing lives at `/tours` and tour detail pages are `/tours/[slug]`.

## Media assets

This build uses **remote placeholder media** from Unsplash/Pexels (swappable later). Remote image domains are configured in `next.config.ts`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
