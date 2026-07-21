export const NAV = [
  { id: "how-i-work", label: "How" },
  { id: "now", label: "Now" },
  { id: "work", label: "Past" },
  { id: "writing", label: "Notes" },
  { id: "product", label: "Ship" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const EXPERIMENT_NAV = [
  { id: "how-i-work", label: "How" },
  { id: "now", label: "Now" },
  { id: "engagements", label: "Work" },
  { id: "work", label: "Past" },
  { id: "writing", label: "Notes" },
  { id: "product", label: "Ship" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTION_IDS = ["hero", ...NAV.map((item) => item.id)] as const;
export const EXPERIMENT_SECTION_IDS = ["hero", ...EXPERIMENT_NAV.map((item) => item.id)] as const;
