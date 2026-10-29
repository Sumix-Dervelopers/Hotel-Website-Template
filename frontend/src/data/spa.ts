// Spa & wellness content.
export interface Treatment {
  name: string;
  duration: string;
  price: string;
  description: string;
}

export const treatments: Treatment[] = [
  {
    name: "The Ashcombe ritual",
    duration: "90 min",
    price: "£225",
    description: "English lavender and rosemary oils, warm stones, and a finish of Cornish sea salt scrub.",
  },
  {
    name: "Deep tissue, slow",
    duration: "75 min",
    price: "£190",
    description: "Unhurried therapeutic work with warm oils — the antidote to long-haul flights and screens.",
  },
  {
    name: "Thermal circuit",
    duration: "2 hours",
    price: "£85",
    description: "Sauna, steam, cold plunge and the candlelit Vaults pool, with herbal infusions throughout.",
  },
  {
    name: "Couples' twilight ritual",
    duration: "120 min",
    price: "£450",
    description: "A private vault suite after dark: side-by-side massages, a drawn bath, and a bottle of English sparkling.",
  },
  {
    name: "Morning yoga",
    duration: "60 min",
    price: "£40",
    description: "In the Garden Room as the square wakes up. Mats, blankets and silence provided.",
  },
];

export const wellness = {
  poolsImage:
    "https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  poolsAlt: "The blue stillness of the Vaults pool",
  ritualImage:
    "https://images.unsplash.com/photo-1706795033849-7ca391f007c5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  ritualAlt: "Candles, towels and honey arranged for a treatment",
};
