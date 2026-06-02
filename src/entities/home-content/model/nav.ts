export const NAV = [
  { id: "now", num: "01", label: "Now" },
  { id: "work", num: "02", label: "Past" },
  { id: "product", num: "03", label: "Product" },
  { id: "projects", num: "04", label: "Shipped" },
  { id: "writing", num: "05", label: "Notes" },
  { id: "contact", num: "06", label: "Contact" },
] as const;

export const SECTION_IDS = ["hero", ...NAV.map((item) => item.id)] as const;
