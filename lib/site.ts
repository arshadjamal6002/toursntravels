export const site = {
  name: "Altura",
  tagline: "Curated Himalayan Escapes",
  description:
    "Premium, intimate Himalayan journeys—curated routes, local-led experiences, and cinematic mountain stays.",
  contact: {
    email: "hello@altura.travel",
    phone: "+91 90000 00000",
    whatsappE164: "+919000000000",
    whatsappDefaultText:
      "Hi Altura — I’m interested in a curated Himalayan trip. Can you share availability and pricing?",
  },
  social: {
    instagram: "https://instagram.com/",
  },
} as const;

export function waLink(text?: string) {
  const number = site.contact.whatsappE164.replace(/[^\d]/g, "");
  const msg = encodeURIComponent(text ?? site.contact.whatsappDefaultText);
  return `https://wa.me/${number}?text=${msg}`;
}

