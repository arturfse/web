export const NAV = [
  { id: "how-i-work", num: "01", label: "How" },
  { id: "now", num: "02", label: "Now" },
  { id: "work", num: "03", label: "Past" },
  { id: "writing", num: "04", label: "Notes" },
  { id: "product", num: "05", label: "Ship" },
  { id: "projects", num: "06", label: "Projects" },
  { id: "contact", num: "07", label: "Contact" },
] as const;

export const EXPERIMENT_NAV = [
  { id: "how-i-work", num: "01", label: "How" },
  { id: "now", num: "02", label: "Now" },
  { id: "engagements", num: "03", label: "Work" },
  { id: "work", num: "04", label: "Past" },
  { id: "writing", num: "05", label: "Notes" },
  { id: "product", num: "06", label: "Ship" },
  { id: "projects", num: "07", label: "Projects" },
  { id: "contact", num: "08", label: "Contact" },
] as const;

export const SECTION_IDS = ["hero", ...NAV.map((item) => item.id)] as const;
export const EXPERIMENT_SECTION_IDS = ["hero", ...EXPERIMENT_NAV.map((item) => item.id)] as const;
