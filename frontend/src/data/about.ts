// About page content — timeline, values, team, awards.
export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
}
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}
export interface Award {
  year: string;
  title: string;
  org: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "1791",
    title: "Five houses",
    text: "A terrace of five brick townhouses is completed on Ashcombe Place, at the edge of Marylebone's new Georgian streets.",
  },
  {
    year: "1924",
    title: "Doors open",
    text: "Sisters Margaret and Eleanor Hartley join the five houses behind one front door and open twenty-two rooms. The rule Margaret wrote in the first guest book still stands: nothing hurried.",
  },
  {
    year: "1958",
    title: "The Gilt Bar",
    text: "The old library becomes the Gilt Bar. Its martini trolley has not missed an evening since.",
  },
  {
    year: "2019",
    title: "Restored, room by room",
    text: "A four-year restoration of the Grade II-listed houses uncovers the original coal vaults beneath the street — today, the spa and pool.",
  },
  {
    year: "2023",
    title: "Hollis opens",
    text: "The kitchen reopens as Hollis, named after Annie Hollis, the house's first cook. Her recipe for treacle tart is still on the menu.",
  },
];

export const values = [
  {
    title: "Quiet over loud",
    text: "No music in the corridors, no announcements, no queues. Luxury that whispers.",
  },
  {
    title: "British by instinct",
    text: "Most of what we serve is grown, reared, caught or made within a hundred miles of London.",
  },
  {
    title: "Care that anticipates",
    text: "The best service is the kind you never had to ask for. We train for it daily.",
  },
  {
    title: "Time as an amenity",
    text: "Late breakfasts, slow check-outs, and no schedule you did not choose yourself.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Clara Hartley-Ward",
    role: "Owner & custodian",
    image:
      "https://images.unsplash.com/photo-1651084296297-2c66780dc322?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    imageAlt: "A member of the house team in the signature red coat",
  },
  {
    name: "James Okonkwo",
    role: "Head concierge",
    image:
      "https://images.unsplash.com/photo-1651084310370-3620a5ac94fc?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    imageAlt: "The head concierge in the house red coat",
  },
  {
    name: "Sofia Marchetti",
    role: "Guest experience",
    image:
      "https://images.unsplash.com/photo-1734604859174-e5976744485b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    imageAlt: "Two members of the guest experience team",
  },
];

export const awards: Award[] = [
  { year: "2025", title: "Two Keys", org: "MICHELIN Guide" },
  { year: "2025", title: "Gold List", org: "Condé Nast Traveller" },
  { year: "2024", title: "Best Townhouse Hotel, London", org: "Tatler Travel Guide" },
  { year: "2024", title: "One Star — Hollis", org: "MICHELIN Guide" },
  { year: "2023", title: "London Hotel of the Year", org: "AA Hospitality Awards" },
];
