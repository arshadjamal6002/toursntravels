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
