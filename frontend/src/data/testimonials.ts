// Guest testimonials — MOCKED sample data.
export interface Testimonial {
  quote: string;
  name: string;
  origin: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We came for two nights of meetings and stayed for six. Nobody at The Ashcombe ever said no — they simply found a quieter way to say yes.",
    name: "Charlotte & Marc Deveraux",
    origin: "Paris, France",
    context: "Stayed in The Ashcombe Suite",
  },
  {
    quote:
      "The kind of hotel that ruins other hotels for you. Dinner at Hollis was the single best meal of our honeymoon.",
    name: "Amara Okafor",
    origin: "Lagos, Nigeria",
    context: "Honeymoon, June",
  },
  {
    quote:
      "I have photographed hotels for twenty years. This is the only one in London I return to as a guest.",
    name: "Jonas Lindqvist",
    origin: "Stockholm, Sweden",
    context: "Travel photographer",
  },
  {
    quote:
      "My children still talk about afternoon tea. My husband still talks about the pool in the vaults. I still talk about both.",
    name: "Isabella Romano",
    origin: "Milan, Italy",
    context: "Family stay, The Mews Residence",
  },
];
