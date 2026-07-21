export const CURRENT = {
  status: "Live now",
  company: "SalaryGuide",
  period: "2025 to present",
  blurb: "Took SalaryGuide from a static salary lookup to a full job-search product in a year: 500K jobs ingested, a paid tier, an AI-assisted apply flow.",
  stack: ["TypeScript", "Next.js", "Node", "PostgreSQL", "Stripe", "AI / LLM"],
  shipped: [
    {
      k: "Job matching",
      v: "75K+ matches · 8K+ runs",
      desc: "Ranks the 500K-job index against a resume and stated goals, and returns a shortlist.",
    },
    {
      k: "Apply kit",
      v: "1K+ resume sessions",
      desc: "Upload a resume, pick a job, get a tailored resume with outreach copy and next steps.",
    },
    {
      k: "Company data layer",
      v: "100K+ enrichments · 58K+ insights",
      desc: "Hiring signals, people data, and company context. The backing layer behind every job page.",
    },
    {
      k: "Paid Edge layer",
      v: "Stripe · full paid tier",
      desc: "Pricing, checkout, paywalls, coupons, and the KPI dashboards.",
    },
  ],
  meta: [
    { k: "Scale", v: "500K+ jobs" },
    { k: "Role", v: "Founding Engineer" },
  ],
} as const;
