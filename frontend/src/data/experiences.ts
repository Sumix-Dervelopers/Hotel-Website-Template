// Experiences & events packages — data-driven.
export interface Experience {
  slug: string;
  title: string;
  category: "In London" | "In the house" | "Celebrations";
  duration: string;
  priceNote: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const experiences: Experience[] = [
  {
    slug: "thames-after-dark",
    title: "The Thames after dark",
    category: "In London",
    duration: "3 hours",
    priceNote: "From £420 for two",
    description:
      "A private river launch from Westminster Pier to Tower Bridge as the city lights come on, with English sparkling wine and a hamper from our kitchen.",
    image:
      "https://images.unsplash.com/photo-1543832923-44667a44c804?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "Tower Bridge and the Shard lit up against an orange dusk sky",
  },
  {
    slug: "west-end-night",
    title: "A night in the West End",
    category: "In London",
    duration: "Evening",
    priceNote: "From £380 for two",
    description:
      "A pre-theatre supper at Hollis, the best seats our concierge can find for the night, and a car waiting at the stage door to bring you home.",
    image:
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "A red double-decker bus passing the Elizabeth Tower at dusk",
  },
  {
    slug: "marylebone-on-foot",
    title: "Marylebone, on foot",
    category: "In London",
    duration: "2 hours",
    priceNote: "Complimentary for residents",
    description:
      "Saturday mornings with our head concierge: Daunt Books, the Wallace Collection, the Sunday farmers' market and the cheesemongers only locals know.",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "Union flags above a London street with a black cab and red bus",
  },
  {
    slug: "afternoon-tea",
    title: "Afternoon tea in the Drawing Room",
    category: "In the house",
    duration: "2 hours",
    priceNote: "From £85 per guest",
    description:
      "Finger sandwiches, warm scones with Cornish clotted cream and a pastry trolley, served on the Hartley family's own porcelain by the fire.",
    image:
      "https://images.unsplash.com/photo-1646473224733-780716f42c80?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "A tray of pastries and coffee served in the Drawing Room",
  },
  {
    slug: "weddings",
    title: "Weddings in the Ballroom",
    category: "Celebrations",
    duration: "Bespoke",
    priceNote: "Up to 120 guests",
    description:
      "Vows in the Drawing Room, dinner under the Ballroom chandeliers and dancing until late — a dedicated celebrations team handles everything.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "A long celebration table set with flowers and glassware",
  },
  {
    slug: "private-events",
    title: "Private occasions",
    category: "Celebrations",
    duration: "Bespoke",
    priceNote: "By proposal",
    description:
      "Anniversaries, board dinners, launches. Exclusive use of the whole house is available in August and between Christmas and New Year.",
    image:
      "https://images.unsplash.com/photo-1561593367-66c79c2294e6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "An elegant dining table set for a private occasion",
  },
];
