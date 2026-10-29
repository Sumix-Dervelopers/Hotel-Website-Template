// Rooms data — swap entries to rebrand. Images: Unsplash placeholders.
export interface Room {
  slug: string;
  name: string;
  type: "Suite" | "Room" | "Residence" | "Penthouse";
  price: number; // per night, GBP
  capacity: number;
  size: number; // m²
  bed: string;
  view: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  description: string;
  amenities: string[];
  tag?: string;
}

const bath = {
  src: "https://images.unsplash.com/photo-1780846652435-ad0f9b550801?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  alt: "Bathroom details on a wooden stool",
};
const breakfast = {
  src: "https://images.unsplash.com/photo-1646473224733-780716f42c80?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  alt: "Breakfast tray with pastries and coffee served in bed",
};
const detail = {
  src: "https://images.unsplash.com/photo-1674042385136-28d23ca038ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  alt: "Morning tray resting on crisp white bedding",
};

export const rooms: Room[] = [
  {
    slug: "ashcombe-suite",
    name: "The Ashcombe Suite",
    type: "Suite",
    price: 1150,
    capacity: 2,
    size: 62,
    bed: "Super king",
    view: "Ashcombe Place",
    image:
      "https://images.unsplash.com/photo-1744000311897-510b64f9a2e2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    imageAlt: "Lavish ivory-dressed bed beneath warm brass lamps",
    gallery: [
      { src: "https://images.unsplash.com/photo-1744000311897-510b64f9a2e2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400", alt: "Lavish ivory-dressed bed beneath warm brass lamps" },
      bath,
      breakfast,
    ],
    description:
      "The first-floor drawing room of the original house: 3.6-metre ceilings, working shutters, a carved marble fireplace and three tall sash windows over the plane trees of Ashcombe Place. The bathroom is Carrara marble, the minibar is London-made, and the silence is absolute.",
    amenities: ["Marble fireplace", "Super king bed", "Freestanding bath", "Butler service", "Daily pressing", "London minibar"],
    tag: "Most loved",
  },
  {
    slug: "deluxe-king",
    name: "Deluxe King",
    type: "Room",
    price: 595,
    capacity: 2,
    size: 34,
    bed: "King",
    view: "Garden courtyard",
    image:
      "https://images.unsplash.com/photo-1776763018972-588e27bf6511?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    imageAlt: "King-size bed with a private seating area in soft lamplight",
    gallery: [
      { src: "https://images.unsplash.com/photo-1776763018972-588e27bf6511?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400", alt: "King-size bed with a private seating area in soft lamplight" },
      detail,
      bath,
    ],
    description:
      "Our classic London room: deep armchairs, a writing desk by the sash window, and blackout drapes for long mornings. It looks over the walled garden courtyard, so the only sound is the occasional blackbird.",
    amenities: ["Courtyard view", "King bed", "Rain shower", "Espresso machine", "Writing desk"],
  },
  {
    slug: "studio-loft",
    name: "The Studio Loft",
    type: "Suite",
    price: 780,
    capacity: 3,
    size: 48,
    bed: "King + day bed",
    view: "Marylebone rooftops",
    image:
      "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    imageAlt: "Loft bedroom with floor-to-ceiling windows and modern decor",
    gallery: [
      { src: "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400", alt: "Loft bedroom with floor-to-ceiling windows and modern decor" },
      breakfast,
      detail,
    ],
    description:
      "Up under the eaves of the old servants' floor: a double-height studio with a north-light window over the chimney pots, a writer's desk, and a palette of bone, oak and bronze.",
    amenities: ["Rooftop windows", "Day bed", "Writing desk", "Record player", "Rain shower"],
  },
  {
    slug: "mews-residence",
    name: "The Mews Residence",
    type: "Residence",
    price: 1650,
    capacity: 4,
    size: 110,
    bed: "Two kings",
    view: "Private mews courtyard",
    image:
      "https://images.unsplash.com/photo-1788217023349-ad7763845844?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    imageAlt: "Wooden-framed bed opening onto a glass-walled garden bath",
    gallery: [
      { src: "https://images.unsplash.com/photo-1788217023349-ad7763845844?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400", alt: "Wooden-framed bed opening onto a glass-walled garden bath" },
      bath,
      breakfast,
    ],
    description:
      "The restored coach house behind the main building, with its own front door onto a cobbled mews. Two bedrooms around a planted courtyard, and a kitchen our chefs will happily cook in for you.",
    amenities: ["Private entrance", "Two bedrooms", "Chef's kitchen", "Courtyard garden", "Lounge"],
    tag: "Families",
  },
  {
    slug: "terrace-suite",
    name: "The Terrace Suite",
    type: "Suite",
    price: 1350,
    capacity: 2,
    size: 70,
    bed: "Super king",
    view: "Private roof terrace",
    image:
      "https://images.unsplash.com/photo-1674042385136-28d23ca038ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    imageAlt: "Morning tray resting on crisp white bedding",
    gallery: [
      { src: "https://images.unsplash.com/photo-1674042385136-28d23ca038ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400", alt: "Morning tray resting on crisp white bedding" },
      breakfast,
      bath,
    ],
    description:
      "A fourth-floor suite that opens onto its own planted terrace above the square. Breakfast is served outside from April to October, and on a clear evening you can pick out the BT Tower and the London Eye.",
    amenities: ["Private terrace", "Terrace breakfast", "Super king bed", "Walk-in dressing room", "Outdoor heaters"],
  },
  {
    slug: "hartley-penthouse",
    name: "The Hartley Penthouse",
    type: "Penthouse",
    price: 4800,
    capacity: 6,
    size: 230,
    bed: "Three bedrooms",
    view: "Wraparound roof terrace",
    image:
      "https://images.unsplash.com/photo-1655516433028-9e0e1599cf8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    imageAlt: "Grand salon with a crystal chandelier and gilded ceiling",
    gallery: [
      { src: "https://images.unsplash.com/photo-1655516433028-9e0e1599cf8b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400", alt: "Grand salon with a crystal chandelier and gilded ceiling" },
      detail,
      breakfast,
    ],
    description:
      "The entire top floor, named for the sisters who founded the house: a grand salon, three bedrooms, a private bar and a wraparound terrace over the rooftops of Marylebone. A dedicated host lives one floor below.",
    amenities: ["Wraparound terrace", "Private bar", "Three bedrooms", "Dedicated host", "Grand piano"],
    tag: "Signature",
  },
];

export const roomTypes = ["All", "Room", "Suite", "Residence", "Penthouse"] as const;
export const capacities = ["Any", "2", "3", "4", "6"] as const;
export const priceBands = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under £800", min: 0, max: 800 },
  { label: "£800 – £1,500", min: 800, max: 1500 },
  { label: "£1,500+", min: 1500, max: Infinity },
] as const;
