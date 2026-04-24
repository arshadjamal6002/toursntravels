export type TourItineraryDay = {
  day: number;
  title: string;
  details: string;
};

export type Tour = {
  slug: string;
  title: string;
  region: "Ladakh" | "Spiti" | "Kashmir" | "Himachal" | "Uttarakhand";
  days: number;
  priceFrom: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  bestSeason: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  itinerary: TourItineraryDay[];
  included: string[];
  excluded: string[];
};

export const tours: Tour[] = [
  {
    slug: "ladakh-cinematic-circuit",
    title: "Ladakh Cinematic Circuit",
    region: "Ladakh",
    days: 8,
    priceFrom: 42000,
    difficulty: "Moderate",
    bestSeason: "Jun–Sep",
    heroImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1500043357865-c6b8827edf32?auto=format&fit=crop&w=2000&q=80",
    ],
    overview:
      "A premium Ladakh circuit with elegant pacing—Leh acclimatization, high-altitude lakes, quiet monasteries, and cinematic roads.",
    itinerary: [
      { day: 1, title: "Arrive in Leh", details: "Gentle arrival, tea, rest, and a short sunset walk." },
      { day: 2, title: "Acclimatize + Old Town", details: "Soft exploration: markets, heritage lanes, and a monastery visit." },
      { day: 3, title: "Nubra Valley", details: "Cross Khardung La, dunes at Hunder, and a calm night under stars." },
      { day: 4, title: "Nubra — Slow day", details: "Monastery, hidden viewpoints, and unhurried photo time." },
      { day: 5, title: "Pangong Lake", details: "Cinematic drive and a golden-hour lakeside evening." },
      { day: 6, title: "Pangong to Leh", details: "Return via scenic stops and a relaxed dinner in Leh." },
      { day: 7, title: "Monasteries + farewell", details: "A final curated loop: culture, quiet, and gifting time." },
      { day: 8, title: "Depart", details: "Airport transfer and warm send-off." },
    ],
    included: [
      "Boutique stays (double occupancy)",
      "Local-led experiences and permits",
      "All in-trip transfers",
      "Daily breakfast + select dinners",
    ],
    excluded: [
      "Flights to/from Leh",
      "Personal expenses",
      "Travel insurance",
      "Anything not explicitly listed as included",
    ],
  },
  {
    slug: "spiti-slow-road",
    title: "Spiti — The Slow Road",
    region: "Spiti",
    days: 7,
    priceFrom: 38000,
    difficulty: "Challenging",
    bestSeason: "May–Oct",
    heroImage:
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80",
    ],
    overview:
      "A slow, premium route through Spiti’s stark beauty—villages, monasteries, and quiet skies. Built for travelers who want space.",
    itinerary: [
      { day: 1, title: "Arrive in Shimla/Manali", details: "Evening briefing and rest." },
      { day: 2, title: "Into the valleys", details: "Scenic drive, calm stops, and a boutique stay." },
      { day: 3, title: "Monasteries + viewpoints", details: "Key gompas, soft hikes, and editorial compositions." },
      { day: 4, title: "Village slow day", details: "Local lunch, cultural moments, and photo time." },
      { day: 5, title: "High-altitude lake", details: "A signature Spiti landscape with golden-hour pacing." },
      { day: 6, title: "Return journey", details: "Unhurried return with curated cafés and stops." },
      { day: 7, title: "Depart", details: "Transfers and send-off." },
    ],
    included: ["Premium stays", "All transfers", "Daily breakfast", "Local-led support"],
    excluded: ["Flights/train", "Personal expenses", "Insurance"],
  },
  {
    slug: "kashmir-private-meadows",
    title: "Kashmir Private Meadows",
    region: "Kashmir",
    days: 6,
    priceFrom: 34000,
    difficulty: "Easy",
    bestSeason: "Apr–Oct",
    heroImage:
      "/images/tours/kashmir-private-meadows/622b39e01db188001cb19add.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1500043357865-c6b8827edf32?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2000&q=80",
    ],
    overview:
      "A calm Kashmir itinerary with premium stays—meadows, lakes, and elegant pacing built for couples and small groups.",
    itinerary: [
      { day: 1, title: "Arrive Srinagar", details: "Dal Lake sunset and a gentle first evening." },
      { day: 2, title: "Gulmarg", details: "Meadows and views with time to breathe." },
      { day: 3, title: "Pahalgam", details: "River walks, cafés, and a curated local experience." },
      { day: 4, title: "Slow day", details: "Choose: short trek, picnic, or a photo-focused route." },
      { day: 5, title: "Return to Srinagar", details: "Shopping, houseboat dinner, and farewell mood." },
      { day: 6, title: "Depart", details: "Transfers and send-off." },
    ],
    included: ["Premium stays", "All transfers", "Daily breakfast", "Local guidance"],
    excluded: ["Flights", "Personal expenses", "Insurance"],
  },
  {
    slug: "manali-to-leh-road",
    title: "Manali to Leh — The High Road",
    region: "Himachal",
    days: 9,
    priceFrom: 47000,
    difficulty: "Challenging",
    bestSeason: "Jun–Sep",
    heroImage:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80",
    ],
    overview:
      "For adventurous travelers: the legendary Manali–Leh road with premium stopovers, better pacing, and curated viewpoints.",
    itinerary: [
      { day: 1, title: "Arrive Manali", details: "Briefing and rest." },
      { day: 2, title: "Manali to Jispa", details: "Scenic drive and soft acclimatization." },
      { day: 3, title: "Jispa to Sarchu", details: "High-road landscapes and cinematic skies." },
      { day: 4, title: "Sarchu to Leh", details: "Arrive and unwind." },
      { day: 5, title: "Leh acclimatize", details: "Old town, cafés, and calm viewpoints." },
      { day: 6, title: "Nubra Valley", details: "Signature circuit with premium stays." },
      { day: 7, title: "Pangong Lake", details: "Golden-hour pacing, stargazing." },
      { day: 8, title: "Back to Leh", details: "Farewell dinner." },
      { day: 9, title: "Depart", details: "Transfers." },
    ],
    included: ["Stays", "Transfers", "Breakfast", "Permits where needed"],
    excluded: ["Flights", "Personal expenses", "Insurance"],
  },
  {
    slug: "kedarkantha-winter-trek",
    title: "Kedarkantha — Winter Trek",
    region: "Uttarakhand",
    days: 5,
    priceFrom: 16000,
    difficulty: "Moderate",
    bestSeason: "Dec–Mar",
    heroImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1500043357865-c6b8827edf32?auto=format&fit=crop&w=2000&q=80",
    ],
    overview:
      "A premium, beginner-friendly winter trek with cozy camps, strong support, and cinematic summit views.",
    itinerary: [
      { day: 1, title: "Arrive base village", details: "Gear check and warm dinner." },
      { day: 2, title: "Trek to camp", details: "Forest trails and snow if lucky." },
      { day: 3, title: "Summit day", details: "Early start, sunrise summit, back to camp." },
      { day: 4, title: "Descend", details: "Slow descent and farewell." },
      { day: 5, title: "Depart", details: "Transfers." },
    ],
    included: ["Guides", "Meals on trek", "Permits", "Camping equipment"],
    excluded: ["Personal gear purchases", "Insurance", "Transport to base (optional add-on)"],
  },
  {
    slug: "valley-of-flowers-escape",
    title: "Valley of Flowers Escape",
    region: "Uttarakhand",
    days: 6,
    priceFrom: 22000,
    difficulty: "Moderate",
    bestSeason: "Jul–Sep",
    heroImage:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520962922320-2038eebab146?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=2000&q=80",
    ],
    overview:
      "A calm monsoon-season escape to the Valley of Flowers, with premium stays and an unhurried trek pace.",
    itinerary: [
      { day: 1, title: "Arrive Joshimath", details: "Rest and briefing." },
      { day: 2, title: "To Govindghat + short trek", details: "Gentle start." },
      { day: 3, title: "Valley walk", details: "Early morning blooms and photo time." },
      { day: 4, title: "Hemkund option", details: "Optional early start; return calm." },
      { day: 5, title: "Back to Joshimath", details: "Unwind and farewell dinner." },
      { day: 6, title: "Depart", details: "Transfers." },
    ],
    included: ["Stays", "Breakfast", "Local support", "Permits"],
    excluded: ["Personal expenses", "Insurance", "Porter add-ons (optional)"],
  },
];

export const regions = Array.from(new Set(tours.map((t) => t.region)));

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}

