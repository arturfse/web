export const CURRENT = {
  status: "Live now",
  role: "Founding Engineer",
  company: "SalaryGuide",
  italic: "current",
  period: "2025 to present",
  blurb: "Took SalaryGuide from a static salary lookup to a full job-search product in a year. 500K jobs ingested, a paid tier launched, an entire AI-assisted apply flow shipped. The kind of work where nothing is the visible part until everything is",
  stack: ["TypeScript", "Next.js", "Node", "PostgreSQL", "Stripe", "AI / LLM"],
  shipped: [
    {
      k: "Job matching",
      v: "75K+ matches · 8K+ runs",
      desc: "A resume and goals, ranked into recommendations. The engine that turns intent into the right shortlist.",
    },
    {
      k: "Apply kit",
      v: "1K+ resume sessions",
      desc: "Upload a resume, pick a job, get a tailored resume, outreach copy, and concrete next steps.",
    },
    {
      k: "Company data layer",
      v: "100K+ enrichments · 58K+ insights",
      desc: "Hiring signals, people data, and company context. The backing layer behind every job page.",
    },
    {
      k: "Paid Edge layer",
      v: "Stripe · paywalls · KPI",
      desc: "Pricing, checkout, paywalls, coupons, dashboards, and KPI reports.",
    },
  ],
  meta: [
    { k: "Scale", v: "500K+ jobs" },
    { k: "Role", v: "Fullstack" },
  ],
} as const;
