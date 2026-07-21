export const PRODUCT = {
  status: "Just shipped",
  name: "howtoship",
  tld: ".dev",
  headline: "Notes I wish I'd read earlier.",
  blurb: "Notes I take while building, one lesson per post.",
  url: "https://howtoship.dev/",
  posts: [
    {
      topic: "AI product",
      title: "A lot of AI bugs are state bugs.",
      blurb: "The prompt is usually fine. What breaks is the state around the model: the data you send in, where you keep it, and what you do with the answer when it comes back.",
      read: "4 min read",
      href: "https://howtoship.dev/posts/01_AI_bugs_are_state_bugs/",
    },
  ],
} as const;
