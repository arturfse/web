export const PRODUCT = {
  status: "Just shipped",
  name: "How to Ship",
  tld: ".dev",
  italic: "the website",
  tagline: "A home for what I learn while building",
  blurb: "The notes I keep while building real things. No titles, just the lessons written down as I hit them",
  url: "https://howtoship.dev/",
  stack: ["Writing", "Shipping", "In the open"],
  meta: [
    { k: "Status", v: "Foundation laid" },
    { k: "Posts", v: "1 and counting" },
  ],
  posts: [
    {
      num: "N°01",
      topic: "AI product",
      title: "A lot of AI bugs are",
      italic: " state bugs.",
      blurb: "The prompt is usually fine. What breaks is the state around the model - the data you send in, where you keep it, and what you do with the answer when it comes back",
      read: "4 min read",
      href: "https://howtoship.dev/posts/01_AI_bugs_are_state_bugs/",
    },
  ],
} as const;
