// Journal entries — MOCKED sample content for the blog template.
export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "marylebone-on-foot",
    title: "A Marylebone morning, on foot",
    category: "Neighbourhood",
    date: "2026-10-02",
    readTime: "4 min",
    excerpt:
      "Bookshops, a Sunday market and the best cheese counter in London — our head concierge on the walk he gives every first-time guest.",
    image:
      "https://images.unsplash.com/photo-1517394834181-95ed159986c7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    imageAlt: "Georgian sash windows and a red telephone box on a rainy London morning",
    body: [
      "James Okonkwo has been our head concierge for eleven years, and he still begins every first-time guest's stay the same way: a hand-drawn map, and a suggestion to leave the phone in the room.",
      "The walk starts at our front door and turns left onto Marylebone High Street. First stop is Daunt Books, with its long oak gallery and skylights, where James insists you buy one book about the place you are going next. Then coffee, standing up, at whichever café has the shortest queue.",
      "From there it is five minutes to the Wallace Collection on Manchester Square — free to enter, quietly extraordinary, and almost never crowded before eleven. On Sundays the route bends past the farmers' market on Cramer Street, where the kitchen at Hollis does some of its own shopping.",
      "The walk ends in Regent's Park, because James believes every London morning should. Guests usually come back with bags of cheese and a slightly different idea of the city — which, he says, is the whole point.",
    ],
  },
  {
    slug: "autumn-menu-hollis",
    title: "Inside the autumn menu at Hollis",
    category: "Dining",
    date: "2026-09-18",
    readTime: "6 min",
    excerpt:
      "Day-boat turbot, Hereford beef and a treacle tart that is older than the restaurant — how a seven-course menu is built around the British seasons.",
    image:
      "https://images.unsplash.com/photo-1676471926534-d5c9771909fa?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    imageAlt: "A plated fillet of fish with seasonal vegetables",
    body: [
      "The menu at Hollis is decided on the phone at six in the morning, between the kitchen and a handful of farmers and fishermen we have known for years. There is a printed menu, of course, but it is written in pencil.",
      "This autumn's opening course is a Maldon rock oyster with frozen cucumber and buttermilk — a cold, bright start before the menu turns warmer. Hand-dived scallops follow from the west coast of Scotland, then turbot from Cornish day boats, cooked on the bone with mussels and cider.",
      "The beef is Hereford, aged for forty days in the cellar below the bar. It arrives with smoked shallot, bone marrow and a tangle of watercress from a Hampshire farm that has grown it since the 1800s.",
      "Dessert is the one thing that never changes: Annie Hollis's treacle tart, from the house's first cook, served with clotted cream. Seven courses, roughly two and a half hours, and a cellar that leans toward producers small enough to know by name.",
    ],
  },
  {
    slug: "art-of-doing-nothing",
    title: "The art of doing nothing, properly",
    category: "Wellness",
    date: "2026-08-21",
    readTime: "5 min",
    excerpt:
      "Our spa director argues that rest is a skill — and shares the three rituals she teaches every arriving guest.",
    image:
      "https://images.unsplash.com/photo-1720118509152-2df877673bee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    imageAlt: "A candlelit bath drawn in the spa",
    body: [
      "Most guests arrive in London, our spa director likes to say, with their shoulders somewhere near their ears. Her job is not massage, she insists — it is subtraction. Removing urgency until what remains is a person lying still, listening to water.",
      "Her first ritual is the simplest: twenty minutes in the thermal circuit down in the vaults with no telephone, no book, no conversation. Guests resist it and then, on day three, defend it fiercely.",
      "The second is the twilight bath. A treatment suite is drawn with candles and house oils as the streetlights come on above, timed so that the city is fully dark when the soak ends. It sounds precious. It works.",
      "The third ritual is not in the spa at all: breakfast in the Drawing Room with nothing to read. Watching Ashcombe Place wake up counts, she says, as a complete morning's activity. A century of guest books suggests she is right.",
    ],
  },
];
