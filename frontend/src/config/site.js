/**
 * ─────────────────────────────────────────────────────────────
 *  THE ASHCOMBE — CENTRAL SITE CONFIG
 *  Rebrand the entire template from this ONE file:
 *  name, logo, colors, fonts, contact details, nav, copy.
 *  Components never hard-code the hotel name — they read from here.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Brand ────────────────────────────────────────────────
  name: "The Ashcombe",
  legalName: "The Ashcombe Hotel (Marylebone) Ltd",
  monogram: "TA", // used in logo mark + preloader
  tagline: "A quiet house in the heart of London",
  description:
    "The Ashcombe is a 64-room townhouse hotel set across five Grade II-listed Georgian houses in Marylebone — quiet luxury, a seasonal British dining room and a candlelit pool in the old coal vaults.",
  established: 1924,
  starRating: 5,

  // ── Visual identity (mirrored in src/index.css as CSS variables) ──
  colors: {
    ivory: "#FAF7F2", // page background
    charcoal: "#121212", // dark sections
    ink: "#1A1A1A", // primary text
    cream: "#F5F1EA", // light text on dark
    gold: "#C9A96E", // champagne accent
    sand: "#8A8478", // muted
  },
  fonts: {
    heading: "Playfair Display Variable",
    body: "Manrope Variable",
  },

  // ── Contact & location ───────────────────────────────────
  // Phone numbers use Ofcom's reserved drama ranges (020 7946 0xxx,
  // 07700 900xxx) so they look real but never reach anyone.
  contact: {
    phone: "+44 20 7946 0418",
    phoneHref: "+442079460418",
    whatsapp: "447700900418", // wa.me number, digits only
    email: "reservations@theashcombe.co.uk",
    address: {
      street: "18–26 Ashcombe Place",
      city: "London",
      region: "Marylebone",
      zip: "W1G 8QE",
      country: "United Kingdom",
    },
    coordinates: { lat: 51.5196, lng: -0.1512 },
    mapEmbed:
      "https://www.google.com/maps?q=51.5196,-0.1512&z=15&output=embed",
  },

  hours: {
    reception: "24 hours, every day",
    restaurant: "18:00 — 22:30 · Tue to Sat",
    spa: "07:00 — 21:00 daily",
    pool: "06:30 — 22:00 daily",
  },

  social: {
    instagram: "https://www.instagram.com/theashcombe",
    pinterest: "https://www.pinterest.com/theashcombe",
    vimeo: "https://vimeo.com/theashcombe",
  },

  // ── Navigation ───────────────────────────────────────────
  nav: [
    { label: "Rooms & Suites", to: "/rooms" },
    { label: "Dining", to: "/dining" },
    { label: "Spa & Wellness", to: "/spa" },
    { label: "Experiences", to: "/experiences" },
    { label: "Gallery", to: "/gallery" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  footerNav: [
    { label: "Offers & Packages", to: "/offers" },
    { label: "Journal", to: "/journal" },
    { label: "Weddings & Events", to: "/experiences" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Stay", to: "/terms" },
  ],
  languages: ["EN", "FR", "DE"],
  currencies: ["GBP", "EUR", "USD", "INR", "NPR"],

  // ── Home page copy ───────────────────────────────────────
  hero: {
    eyebrow: "Marylebone, London · Est. 1924",
    titleLines: ["A quiet house", "in the heart of London"],
    subcopy:
      "Sixty-four rooms across five Georgian townhouses, a dining room that answers to the British seasons, and a pool hidden in the old coal vaults.",
    slides: [
      {
        src: "https://images.unsplash.com/photo-1766164185798-d6e7eb23a131?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
        alt: "The illuminated facade of The Ashcombe at night",
      },
      {
        src: "https://images.unsplash.com/photo-1742844552193-2fd3425cd26d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
        alt: "Sunlight washing through the entrance hall",
      },
      {
        src: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
        alt: "Union flags strung above Regent Street, a short walk from the house",
      },
      {
        src: "https://images.unsplash.com/photo-1744000311897-510b64f9a2e2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
        alt: "The Ashcombe Suite dressed for the evening beneath brass lamps",
      },
    ],
  },

  intro: {
    eyebrow: "The House",
    titleLines: ["Five Georgian houses,", "one front door"],
    paragraphs: [
      "In 1924 the Hartley sisters joined five Georgian townhouses on Ashcombe Place behind a single black front door, and opened twenty-two rooms to travellers with one promise — that London should feel like exhaling.",
      "A century later the house holds sixty-four rooms and suites with original sash windows and marble fireplaces, a candlelit pool in the old coal vaults, and a kitchen that answers only to the British seasons.",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1735045634800-957fd0dad45e?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
        alt: "Chequered marble hall with glowing lanterns",
      },
      {
        src: "https://images.unsplash.com/photo-1517394834181-95ed159986c7?crop=entropy&cs=srgb&fm=jpg&q=85&w=700",
        alt: "Georgian sash windows and a red telephone box on a rainy London morning",
      },
    ],
    stats: [
      { value: 102, suffix: "", label: "Years of welcome" },
      { value: 64, suffix: "", label: "Rooms & suites" },
      { value: 23, suffix: "", label: "International awards" },
      { value: 72, suffix: "%", label: "Guests who return" },
    ],
  },

  quote: {
    text: "London is wonderfully loud. A good hotel should be the one place in it that isn't.",
    attribution: "Margaret Hartley, Founder, 1924",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
    imageAlt: "Westminster and the Elizabeth Tower beneath a stormy dusk sky",
  },

  marquee: [
    "The Ashcombe",
    "Marylebone",
    "Est. 1924",
    "A quiet house in London",
    "Sixty-four rooms",
    "London W1",
  ],

  location: {
    eyebrow: "Finding Us",
    titleLines: ["Marylebone,", "on foot"],
    body: "A block from Marylebone High Street, between Regent's Park and Oxford Street — close enough to everything, far enough from the noise.",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    imageAlt: "Westminster Bridge and the Elizabeth Tower on a soft grey afternoon",
    transfers: [
      { label: "Heathrow Airport", value: "45 min by car" },
      { label: "Bond Street (Elizabeth line)", value: "8 min walk" },
      { label: "St Pancras International", value: "15 min by car" },
    ],
  },

  newsletter: {
    title: "Letters from Marylebone",
    body: "One unhurried letter each month — seasonal menus, quiet openings in the neighbourhood, and first access to suite releases. No noise, ever.",
  },

  // ── Site credit (footer bottom bar) — leave url empty for plain text ──
  credit: {
    label: "Designed & built by",
    name: "Sumix Developers",
    url: "",
  },

  seo: {
    title: "The Ashcombe — Luxury Townhouse Hotel in Marylebone, London",
    ogImage:
      "https://images.unsplash.com/photo-1766164185798-d6e7eb23a131?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
};

export default site;
