import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Bike,
  Bus,
  Car,
  Headphones,
  Plane,
  Ticket,
  UserCheck,
  UtensilsCrossed,
} from "lucide-react";
import type { Tour } from "@/data/tours";

export function getHeroTrustChips(tour: Tour): string[] {
  if (tour.trustChips?.length) {
    return tour.trustChips.slice(0, 4);
  }
  return [
    tour.region,
    `${tour.days} day journey`,
    `From ₹${tour.priceFrom.toLocaleString("en-IN")}`,
    tour.difficulty,
  ];
}

export function getQuickFactChips(tour: Tour): string[] {
  if (tour.trustChips?.length) {
    return tour.trustChips.slice(0, 4);
  }
  const chips: string[] = [];
  if (tour.quickFacts?.duration) chips.push(tour.quickFacts.duration);
  if (tour.region) chips.push(tour.region);
  return chips.length ? chips : getHeroTrustChips(tour);
}

export function getUrgencyLine(tour: Tour): string | null {
  if (tour.spotsLeft != null && tour.spotsLeft > 0) {
    return `Only ${tour.spotsLeft} spot${tour.spotsLeft === 1 ? "" : "s"} left`;
  }
  if (tour.nextBatchDate) {
    return `Next batch · ${tour.nextBatchDate}`;
  }
  if (tour.offer?.filling) {
    return tour.offer.filling;
  }
  return null;
}

export type PricingDisplay = {
  listPrice?: number;
  salePrice: number;
  savingsAmount?: number;
  urgencyLine?: string;
  hasDiscount: boolean;
};

export function getPricingDisplay(tour: Tour): PricingDisplay {
  const salePrice = tour.salePrice ?? tour.priceFrom;
  const listPrice = tour.listPrice;
  const hasDiscount =
    listPrice != null && listPrice > salePrice;
  const savingsAmount = hasDiscount ? listPrice - salePrice : undefined;

  let urgencyLine = tour.priceUrgency;
  if (!urgencyLine && savingsAmount) {
    urgencyLine = `Save ₹${savingsAmount.toLocaleString("en-IN")}`;
    const extra = getUrgencyLine(tour);
    if (extra) urgencyLine += ` · ${extra}`;
  } else if (!urgencyLine) {
    urgencyLine = getUrgencyLine(tour) ?? undefined;
  }

  return {
    listPrice: hasDiscount ? listPrice : undefined,
    salePrice,
    savingsAmount,
    urgencyLine,
    hasDiscount,
  };
}

export function getDurationBadge(tour: Tour): string {
  const fromChips = tour.trustChips?.find((c) => /\d+\s*N\s*\/\s*\d+\s*D/i.test(c));
  if (fromChips) return fromChips;
  if (tour.days >= 2) return `${tour.days - 1}N/${tour.days}D`;
  return `${tour.days} day${tour.days === 1 ? "" : "s"}`;
}

export function getRouteSummary(tour: Tour): string | null {
  return tour.quickFacts?.route ?? null;
}

export function getHeroSlides(tour: Tour): string[] {
  const slides: string[] = [tour.heroImage];
  for (const src of tour.gallery ?? []) {
    if (slides.length >= 3) break;
    if (!slides.includes(src)) slides.push(src);
  }
  return slides;
}

export function getFoldBadges(tour: Tour): string[] {
  const duration = getDurationBadge(tour);
  const extras: string[] = [];

  if (tour.foldBadges?.length) {
    for (const b of tour.foldBadges) {
      if (/24\s*\/\s*7/i.test(b)) continue;
      extras.push(b);
      if (extras.length >= 2) break;
    }
  } else {
    if (tour.quickFacts?.flightsIncluded) extras.push("Flights Included");
    if (tour.quickFacts?.bikeType) {
      extras.push(
        tour.quickFacts.bikeType.includes("Royal Enfield")
          ? "Royal Enfield"
          : "Bike Included"
      );
    }
  }

  return [duration, ...extras].slice(0, 3);
}

export type InclusionIconItem = {
  icon: LucideIcon;
  label: string;
};

/** Exactly 4 icons for the simplified first fold */
export function getFoldInclusions(tour: Tour): InclusionIconItem[] {
  const q = tour.quickFacts;
  const items: InclusionIconItem[] = [];

  if (q?.flightsIncluded) {
    items.push({ icon: Plane, label: "Return Flights" });
  } else {
    items.push({ icon: Bus, label: "Transport" });
  }

  if (q?.bikeType) {
    items.push({
      icon: Bike,
      label: q.bikeType.includes("Royal Enfield")
        ? "Royal Enfield"
        : "Bike",
    });
  }

  if (q?.stayType) {
    const nights = tour.days > 1 ? `${tour.days - 1}N` : `${tour.days}D`;
    items.push({ icon: BedDouble, label: `Hotels (${nights})` });
  }

  items.push({ icon: Headphones, label: "24/7 Support" });

  return items.slice(0, 4);
}

export function getInclusionIcons(tour: Tour): InclusionIconItem[] {
  const q = tour.quickFacts;
  const includedLower = tour.included.map((s) => s.toLowerCase()).join(" ");
  const items: InclusionIconItem[] = [];

  if (q?.flightsIncluded) {
    items.push({ icon: Plane, label: "Flights" });
  } else if (
    includedLower.includes("volvo") ||
    includedLower.includes("transport")
  ) {
    items.push({ icon: Bus, label: "Transport" });
  }

  if (q?.stayType) {
    items.push({ icon: BedDouble, label: "Hotels" });
  }

  if (q?.mealPlan) {
    items.push({ icon: UtensilsCrossed, label: "Meals" });
  }

  if (q?.bikeType) {
    items.push({ icon: Bike, label: "Bike" });
  } else if (
    includedLower.includes("transport") &&
    !items.some((i) => i.label === "Transport")
  ) {
    items.push({ icon: Car, label: "Transport" });
  }

  if (includedLower.includes("permit")) {
    items.push({ icon: Ticket, label: "Permits" });
  }

  if (includedLower.includes("captain")) {
    items.push({ icon: UserCheck, label: "Captain" });
  }

  return items.slice(0, 6);
}

export function getFoldTrustLine(tour: Tour): string {
  const parts: string[] = [];
  if (tour.ridersCount != null && tour.ridersCount > 0) {
    parts.push(`${tour.ridersCount}+ Happy Riders`);
  } else if (tour.reviewCount != null && tour.reviewCount > 0) {
    parts.push(`${tour.reviewCount}+ travelers`);
  }
  if (tour.rating != null) {
    const reviewPart =
      tour.reviewCount != null && tour.reviewCount > 0
        ? ` (${tour.reviewCount} reviews)`
        : "";
    parts.push(`${tour.rating}★${reviewPart}`);
  }
  parts.push(tour.verifiedLabel ?? "Verified Operator");
  return parts.join(" • ");
}

export function getHeaderTrustItems(tour: Tour): string[] {
  const items: string[] = [];
  if (tour.rating != null) {
    items.push(`${tour.rating} ★`);
  }
  if (tour.reviewCount != null && tour.reviewCount > 0) {
    items.push(`${tour.reviewCount}+ travelers`);
  }
  items.push("24/7 support");
  return items;
}

export function buildLeadWhatsAppMessage(
  tour: Tour,
  data: {
    name: string;
    whatsapp: string;
    month: string;
    travelers: string;
    city: string;
    message: string;
  }
) {
  const lines = [
    `Hi MiraGo — I want details for “${tour.title}”.`,
    "",
    `Name: ${data.name}`,
    `WhatsApp: ${data.whatsapp}`,
    `Travel month: ${data.month}`,
    `Travelers: ${data.travelers}`,
    `City: ${data.city}`,
  ];
  if (data.message.trim()) {
    lines.push(`Notes: ${data.message.trim()}`);
  }
  return lines.join("\n");
}
