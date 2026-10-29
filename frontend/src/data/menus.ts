// Dining menus — drive the animated tabs on the Dining page.
export interface MenuItem {
  name: string;
  description: string;
  price: string;
}
export interface MenuTab {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
}

export const menus: MenuTab[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    note: "In the Drawing Room, 7:00 — 11:00",
    items: [
      { name: "The Ashcombe basket", description: "Warm croissants, sourdough, Seville orange marmalade, Regent's Park honey", price: "18" },
      { name: "Eggs Benedict", description: "Wiltshire ham, hollandaise, toasted English muffin", price: "19" },
      { name: "Kippers & brown butter", description: "Craster kippers, lemon, soda bread", price: "18" },
      { name: "Bircher & berries", description: "Oats, Kentish apple, yogurt, hedgerow berries", price: "14" },
      { name: "Smoked salmon & eggs", description: "London-cured salmon, soft scrambled eggs, chives, sourdough", price: "22" },
      { name: "Buttermilk pancakes", description: "Streaky bacon, maple syrup, whipped butter", price: "17" },
      { name: "The full Ashcombe", description: "Eggs any way, Cumberland sausage, black pudding, mushrooms, tomato, toast", price: "28" },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    note: "In the Garden Room, 12:00 — 15:00",
    items: [
      { name: "Cornish crab on toast", description: "White and brown crab, pickled cucumber, sourdough", price: "22" },
      { name: "Heritage tomatoes", description: "Isle of Wight tomatoes, burrata, lovage oil", price: "18" },
      { name: "Fish pie", description: "Smoked haddock, prawns, mustard mash, a crisp cheddar crust", price: "29" },
      { name: "Dorset lamb chops", description: "Minted peas, anchovy butter, jersey royals", price: "36" },
      { name: "Lobster roll", description: "Buttered brioche, lemon mayonnaise, sea herbs", price: "38" },
      { name: "Garden salad", description: "Kentish leaves, spelt, aged Montgomery cheddar, cider vinaigrette", price: "16" },
    ],
  },
  {
    id: "tasting",
    label: "Tasting Menu",
    note: "Seven courses · Hollis, evenings only",
    items: [
      { name: "Oyster, cucumber, dill", description: "Maldon rock oyster, frozen cucumber, buttermilk", price: "—" },
      { name: "English asparagus", description: "Hen's egg yolk, wild garlic, toasted hazelnut", price: "—" },
      { name: "Cornish crab tart", description: "Brown crab custard, apple, sea purslane", price: "—" },
      { name: "Hand-dived scallop", description: "Cauliflower, golden raisin, curry butter", price: "—" },
      { name: "Turbot on the bone", description: "Mussels, cider, sea vegetables", price: "—" },
      { name: "Aged Hereford beef", description: "Smoked shallot, bone marrow, watercress", price: "—" },
      { name: "Annie Hollis's treacle tart", description: "Clotted cream, lemon", price: "—" },
      { name: "The whole menu", description: "Seven courses, wine pairing available", price: "165" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "Until midnight, at Hollis or the bar",
    items: [
      { name: "Sticky toffee pudding", description: "Medjool dates, salted toffee sauce, clotted cream", price: "13" },
      { name: "Dark chocolate & stout", description: "70% ganache, London stout caramel, cocoa nib tuile", price: "14" },
      { name: "Eton mess, at the table", description: "Kent strawberries, torn meringue, assembled beside you", price: "13" },
      { name: "Yorkshire rhubarb", description: "Poached rhubarb, vanilla custard, ginger crumble", price: "12" },
      { name: "British cheeses", description: "Three farmhouse cheeses, Stilton, oatcakes, quince", price: "18" },
    ],
  },
  {
    id: "bar",
    label: "The Gilt Bar",
    note: "Until the last guest goes upstairs",
    items: [
      { name: "Ashcombe martini", description: "Trolley service, lemon twist, frozen glass", price: "22" },
      { name: "Marylebone spritz", description: "English aperitivo, elderflower, English sparkling, grapefruit", price: "18" },
      { name: "Smoked old fashioned", description: "Bourbon, demerara, oak smoke, orange", price: "21" },
      { name: "Gilt negroni", description: "London dry gin, bitter aperitivo, barrel-rested vermouth", price: "19" },
      { name: "The quiet hour", description: "Zero-proof — cucumber, garden herbs, cold-pressed apple", price: "12" },
      { name: "Bar plates", description: "Sausage rolls, Scotch egg, crisps, aged cheddar", price: "9—22" },
    ],
  },
  {
    id: "cellar",
    label: "Wine Cellar",
    note: "Small producers, pours chosen nightly",
    items: [
      { name: "English sparkling, Kent", description: "Classic cuvée — chalk, green apple, our house pour", price: "16" },
      { name: "Bacchus, Sussex", description: "Elderflower and gooseberry, drunk cold in the garden", price: "14" },
      { name: "Pinot noir, Burgundy", description: "2019 — for the beef course, decanted an hour", price: "24" },
      { name: "Champagne 'Ashcombe cuvée'", description: "Grower champagne bottled for the house", price: "26" },
      { name: "Vintage port & Stilton", description: "To finish — a 2007 vintage, with a wedge of blue", price: "15" },
      { name: "Sommelier's flight", description: "Five pours matched to your table, narrated or silent", price: "85" },
    ],
  },
];

export const venues = [
  {
    name: "Hollis",
    kind: "Fine dining",
    description:
      "One long candlelit room, fourteen tables, a kitchen that answers to British farms and day boats. Seven courses, or four if you ask nicely.",
    hours: "18:00 — 22:30 · Tue to Sat",
    image:
      "https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    alt: "The chef pouring sauce over a plated dish at Hollis",
  },
  {
    name: "The Gilt Bar",
    kind: "Cocktails & cellar",
    description:
      "Low light, deep chairs, a martini trolley that comes to you. The cellar has a soft spot for English sparkling and old Madeira.",
    hours: "16:00 — late, daily",
    image:
      "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    alt: "A martini resting on the dark bar in low light",
  },
  {
    name: "The Drawing Room",
    kind: "Breakfast & afternoon tea",
    description:
      "Coffee by the fire, the morning papers pressed flat, and afternoon tea served on the Hartley family's own porcelain.",
    hours: "7:00 — 18:00, daily",
    image:
      "https://images.unsplash.com/photo-1646473224733-780716f42c80?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    alt: "A breakfast tray with pastries and coffee",
  },
  {
    name: "The Chef's Counter",
    kind: "Six seats · one seating",
    description:
      "A marble counter inside the kitchen itself. The chefs narrate or stay silent — your call — through ten unlisted courses.",
    hours: "One seating, 19:30 · Wed to Sat",
    image:
      "https://images.unsplash.com/photo-1642354571956-d77dfd9596bb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    alt: "Hands feeding dough through a pasta machine in the kitchen",
  },
];
