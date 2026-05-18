import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Bike,
  Bus,
  Car,
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

export type InclusionIconItem = {
  icon: LucideIcon;
  label: string;
};

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
