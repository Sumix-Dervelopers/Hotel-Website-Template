// Special offers & packages — data-driven, swap freely.
export interface Offer {
  slug: string;
  title: string;
  eyebrow: string;
  priceNote: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const offers: Offer[] = [
  {
    slug: "marylebone-weekend",
    title: "The Marylebone Weekend",
    eyebrow: "Two nights · Dinner at Hollis",
    priceNote: "From £1,650 for two",
    description:
      "Two nights in a Deluxe King, a seven-course dinner at Hollis, a late 2pm check-out and a Saturday morning walk through the village with our head concierge.",
    image:
      "https://images.unsplash.com/photo-1689672235501-6dc1e56d454c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "A composed plate beside a glass of white wine",
  },
  {
    slug: "vaults-retreat",
    title: "The Vaults Retreat",
    eyebrow: "Three nights · Daily rituals",
    priceNote: "From £2,950 for two",
    description:
      "Three nights with a daily treatment in the Vaults spa, morning yoga in the Garden Room and a personalised menu from the kitchen.",
    image:
      "https://images.unsplash.com/photo-1720118509152-2df877673bee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "Candles and a drawn bath in the candlelit spa",
  },
  {
    slug: "celebrations",
    title: "Celebrations & Vows",
    eyebrow: "Bespoke · Up to 120 guests",
    priceNote: "By private proposal",
    description:
      "The Ballroom, the Drawing Room and the walled garden, dressed for your day — with a dedicated celebrations team and a licence for civil ceremonies.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
    imageAlt: "A long celebration table set with flowers and glassware",
  },
];
