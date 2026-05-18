export type TourItineraryDay = {
  day: number;
  title: string;
  details: string;
};

export type TourQuickFacts = {
  duration: string;
  route: string;
  flightsIncluded: boolean;
  bikeType?: string;
  stayType?: string;
  mealPlan?: string;
};

export type TourOffer = {
  badge?: string;
  headline?: string;
  earlyBird?: string;
  filling?: string;
  custom?: string;
};

export type TourFaqItem = { q: string; a: string };

export type TourWhyStandsOut = { title: string; desc: string };

export type TourAccordionSection = {
  title: string;
  points: string[];
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
  subtitle?: string;
  hookLine?: string;
  /** Hero trust line chips, e.g. Ex Delhi, Flights Included, 5N/6D */
  trustChips?: string[];
  quickFacts?: TourQuickFacts;
  offer?: TourOffer;
  faq?: TourFaqItem[];
  whyStandsOut?: TourWhyStandsOut[];
  itinerary: TourItineraryDay[];
  included: string[];
  excluded: string[];
  highlights?: string[];
  importantNotes?: string[];
  policies?: TourAccordionSection[];
  thingsToKeepInMind?: TourAccordionSection[];
  /** Optional social proof for conversion-first hero */
  rating?: number;
  reviewCount?: number;
  nextBatchDate?: string;
  spotsLeft?: number;
  /** Strikethrough list price — only when genuinely discounted */
  listPrice?: number;
  /** Prominent hero price; falls back to priceFrom */
  salePrice?: number;
  /** e.g. "Save ₹6,000 · Limited May slots" */
  priceUrgency?: string;
  /** Max 3 short badges for first fold */
  foldBadges?: string[];
  ridersCount?: number;
  verifiedLabel?: string;
};

export const tours: Tour[] = [
  {
    slug: "ladakh-cinematic-circuit",
    title: "Leh Ladakh Bike Trip with Flights (5N/6D)",
    region: "Ladakh",
    days: 6,
    priceFrom: 42000,
    difficulty: "Moderate",
    bestSeason: "Jun–Sep",
    rating: 4.9,
    reviewCount: 120,
    ridersCount: 500,
    verifiedLabel: "Verified Operator",
    nextBatchDate: "15 Jun",
    spotsLeft: 5,
    listPrice: 42000,
    salePrice: 36000,
    priceUrgency: "Save ₹6,000 · Limited May slots",
    foldBadges: ["Flights Included", "Royal Enfield", "24/7 Support"],
    trustChips: ["Ex Delhi", "Flights Included", "5N/6D", "600+ KM Circuit"],
    quickFacts: {
      duration: "5 Nights / 6 Days",
      route: "Delhi → Leh → Nubra → Pangong → Leh → Delhi",
      flightsIncluded: true,
      bikeType: "Royal Enfield Himalayan 411cc (2 riders per bike)",
      stayType: "Hotels + Pangong lake-view cottages (double sharing)",
      mealPlan: "5 Breakfast + 5 Dinner",
    },
    offer: {
      badge: "Founder's offer",
      headline: "Limited June–September departures",
      earlyBird: "Early-bird: save up to ₹3,000 on select months",
      filling: "Small batches — seats move quickly for peak season",
      custom: "Custom itineraries available",
    },
    whyStandsOut: [
      {
        title: "Flights included, Delhi to Delhi",
        desc: "Arrive in Leh with energy saved for the ride—round-trip flights are bundled into one clear plan.",
      },
      {
        title: "Premium bike experience",
        desc: "Royal Enfield Himalayan 411cc, fuel for the full circuit, and a sensible 2-riders-per-bike setup with support.",
      },
      {
        title: "Scenic high-altitude route",
        desc: "Khardung La, Chang La, and the Shyok approach—epic road feel without the “checklist tour” energy.",
      },
      {
        title: "Pangong cottage stay",
        desc: "Lake-view cottages and time by the water—so the highlight isn’t a rushed photo stop.",
      },
      {
        title: "Star gazing at altitude",
        desc: "Clear-sky nights at Pangong for stargazing—weather permitting, it’s a quiet premium moment.",
      },
      {
        title: "Trip captain on the road",
        desc: "Experienced captain, permits handled, and first-aid backup—adventure with adult supervision.",
      },
    ],
    faq: [
      {
        q: "Is this suitable for first-time Ladakh travelers?",
        a: "Yes—Day 1 is designed for acclimatization in Leh, and the route is paced for comfort. We still recommend a basic fitness level and following captain guidance for altitude care.",
      },
      {
        q: "Is basic bike riding experience enough?",
        a: "Basic riding experience is recommended. You’ll be on Himalayan roads with some off-road on the Shyok stretch—confidence with clutch, balance, and slow-speed control matters. If you’re unsure, message us and we’ll assess honestly.",
      },
      {
        q: "What is included in Delhi to Delhi?",
        a: "Flights between Delhi and Leh, your bike and fuel, stays on twin sharing, inner line permits, 5 breakfast + 5 dinner, trip captain, and first aid support for the complete circuit.",
      },
      {
        q: "Can girls join the trip?",
        a: "Absolutely—Ladakh is for everyone, and we welcome women travelers. We keep groups respectful and well-supported; reach out for any private-room add-ons or questions.",
      },
      {
        q: "How many people are on one bike?",
        a: "Two riders per bike (pillion or shared riding as per the group plan). Bikes are Royal Enfield Himalayan 411cc.",
      },
      {
        q: "How do I reserve my slot?",
        a: "Share your preferred month, city, and traveler count via the form on this page, or message us on WhatsApp. We’ll confirm availability, inclusions, and the next step to hold your seat.",
      },
    ],
    heroImage:
      "/images/tours/ladakh-cinematic-circuit/photography.jpg",
    gallery: [
      "/images/tours/ladakh-cinematic-circuit/shutter.jpeg",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=80",
    ],
    overview:
      "Ex Delhi. Flights included. A premium Ladakh bike adventure with Leh acclimatization, Khardung La, Nubra dunes, Pangong Lake cottages, and the Chang La high road.",
    subtitle: "Ex Delhi | Flights Included | Premium Adventure Experience",
    hookLine: "Fly to Leh. Ride the Himalayas. Experience the adventure of a lifetime.",
    itinerary: [
      {
        day: 1,
        title: "Delhi → Leh | Arrival & Acclimatization",
        details:
          "Flight transfer Delhi to Leh (included). Arrive in Leh (11,500 ft), hotel check-in (double sharing), welcome and rest day for acclimatization. Evening: Hall of Fame; optional local market walk. Meals: Dinner.",
      },
      {
        day: 2,
        title: "Leh Local Sightseeing + Bike Allocation",
        details:
          "Breakfast. Bike allotment (Royal Enfield Himalayan 411cc — 2 riders per bike). Sightseeing: Magnetic Hill, Sangam (Indus & Zanskar confluence), Alchi Monastery, Rancho School (Druk White Lotus School), Thiksey Monastery. Evening: Shanti Stupa (sunset + night view). Meals: Breakfast + Dinner.",
      },
      {
        day: 3,
        title: "Leh → Nubra Valley (via Khardung La)",
        details:
          "Distance ~160 KM (5–6 hrs). Ride via Khardung La (~18,000 ft), one of the world’s highest motorable roads. Enroute: scenic villages and mountain views. Nubra: Diskit Monastery (giant Buddha), Hunder Sand Dunes, optional double-hump Bactrian camel ride. Stay: Hunder/Diskit. Meals: Breakfast + Dinner.",
      },
      {
        day: 4,
        title: "Nubra → Pangong Lake (via Shyok Route)",
        details:
          "Distance ~160 KM (6–7 hrs). Adventure ride via Shyok route (off-road ~20–25 KM). Cross Durbuk (Army base area). Arrive Pangong Lake (14,000 ft), world-famous high-altitude saltwater lake. Experience: lake-view cottages and star gazing (clear sky). Stay: Pangong Lake cottage. Meals: Breakfast + Dinner.",
      },
      {
        day: 5,
        title: "Pangong → Leh (via Chang La Pass)",
        details:
          "Distance ~150 KM (5–6 hrs). Early morning Pangong sunrise. Ride back to Leh via Chang La (~17,000 ft). Evening free time / shopping in Leh market. Stay: Hotel in Leh. Meals: Breakfast + Dinner.",
      },
      {
        day: 6,
        title: "Leh → Delhi Departure",
        details:
          "Breakfast at hotel. Airport drop. Flight back to Delhi. Meals: Breakfast.",
      },
    ],
    included: [
      "Delhi–Leh–Delhi flights",
      "Royal Enfield Himalayan 411cc (2 riders per bike)",
      "Fuel for complete trip",
      "All accommodation (double sharing)",
      "5 breakfast + 5 dinner",
      "Inner line permits",
      "Experienced trip captain",
      "First aid support",
    ],
    excluded: [
      "Lunch",
      "Personal expenses",
      "Camel ride / entry tickets (if applicable)",
      "Travel insurance",
    ],
    highlights: [
      "Ride across 600+ KM Ladakh circuit",
      "Cross Khardung La & Chang La passes",
      "Stay at Pangong Lake cottages",
      "Explore Nubra desert & double-hump camels",
      "Experience star gazing",
    ],
    importantNotes: [
      "High altitude destination (acclimatization mandatory)",
      "Valid ID proof required",
      "Basic riding experience recommended",
      "Weather conditions may affect itinerary",
    ],
    policies: [
      {
        title: "Booking & payments",
        points: [
          "A booking is confirmed once your advance is received and the details (names, IDs, travel month) are shared.",
          "Balance is typically due before the trip start—exact timelines will be shared at the time of confirmation.",
          "Keep a soft buffer for optional add-ons (camel ride, entry tickets) and personal expenses.",
        ],
      },
      {
        title: "Cancellation",
        points: [
          "Cancellation charges vary by how close you are to the departure date (closer departures usually mean higher charges).",
          "If we have to adjust dates/route due to weather or road closures, we’ll prioritize safety and practical alternatives.",
        ],
      },
      {
        title: "Other terms & policies",
        points: [
          "This is a high-altitude adventure—trip captain decisions on-road are final for safety.",
          "Any damage to the bike due to negligence may be chargeable as per the vendor terms.",
          "Travel insurance is recommended (and not included unless explicitly stated).",
        ],
      },
      {
        title: "Please note",
        points: [
          "Weather and road conditions can impact the exact order of sightseeing.",
          "Acclimatization is mandatory—avoid overexertion and follow captain guidance.",
          "Carry a valid government ID (and keep a digital copy).",
        ],
      },
    ],
    thingsToKeepInMind: [
      {
        title: "Pre-tour preparation",
        points: [
          "Pack layers: warm innerwear, windproof outer, gloves, and rain protection.",
          "Carry basic meds (as advised by your doctor) and stay well hydrated.",
          "Basic riding confidence is recommended—especially for slow-speed control and off-road patches.",
        ],
      },
      {
        title: "Group riding guidelines",
        points: [
          "Maintain safe distance, follow formation, and avoid risky overtakes.",
          "Stop only at designated points; inform the captain if you need a break.",
        ],
      },
      {
        title: "On the road",
        points: [
          "Start early on long ride days; keep snacks and water accessible.",
          "Phone network can be limited—plan to be offline and enjoy it.",
        ],
      },
      {
        title: "Altitude & health",
        points: [
          "If you feel headache, nausea, dizziness, or breathlessness—tell the captain immediately.",
          "Avoid alcohol and smoking during the first days; prioritize rest and hydration.",
        ],
      },
      {
        title: "Responsibility towards the environment",
        points: [
          "Carry your waste back; avoid plastic where possible.",
          "Respect local culture, monasteries, and photography rules.",
        ],
      },
      {
        title: "Emergency protocols",
        points: [
          "Stay with the group and follow the captain’s instructions in case of weather changes or delays.",
          "First aid support is available; serious cases may require evacuation depending on location and conditions.",
        ],
      },
      {
        title: "General etiquette",
        points: [
          "Keep noise low at stays; respect local communities and other travelers.",
          "Be punctual for briefings so the group can ride in better light and safer conditions.",
        ],
      },
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

