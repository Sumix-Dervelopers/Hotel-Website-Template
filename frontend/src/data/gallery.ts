// Gallery — categories drive the filter tabs on the Gallery page.
export interface GalleryItem {
  src: string;
  alt: string;
  category: "The House" | "Suites" | "Dining" | "Wellness" | "Celebrations";
  ratio: "tall" | "wide" | "square";
}

export const gallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "Historic London rooftops and streets",
    category: "The House",
    ratio: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1744000311897-510b64f9a2e2?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "Ivory suite dressed for the evening",
    category: "Suites",
    ratio: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "The chef finishing a seasonal plate in the dining room",
    category: "Dining",
    ratio: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1776763018829-ad685e621871?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "Lounge chairs beside the indoor thermal pool",
    category: "Wellness",
    ratio: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "A martini resting on the dark bar",
    category: "Dining",
    ratio: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1735045634800-957fd0dad45e?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "A restored townhouse hall with warm lighting",
    category: "The House",
    ratio: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1710587385270-08f30d66bf31?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "A place setting with garden flowers",
    category: "Celebrations",
    ratio: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    alt: "The blue stillness of the indoor pool",
    category: "Wellness",
    ratio: "tall",
  },
];
