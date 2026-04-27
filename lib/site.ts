export const site = {
  name: "MiraGo",
  tagline: "Mera Go-To Travel Partner",
  description:
    "Premium, intimate Himalayan journeys—curated routes, local-led experiences, and cinematic mountain stays.",
  contact: {
    email: "bookings@mirago.fun",
    phone: "+91 9596213610",
    whatsappE164: "+919596213610",
    whatsappDefaultText:
      "Hi MiraGo — I’m interested in a curated trip. Can you share availability and pricing?",
  },
  social: {
    instagram: "https://instagram.com/mirago.trips",
  },
} as const;

export function waLink(text?: string) {
  const number = site.contact.whatsappE164.replace(/[^\d]/g, "");
  const msg = encodeURIComponent(text ?? site.contact.whatsappDefaultText);
  return `https://wa.me/${number}?text=${msg}`;
}

