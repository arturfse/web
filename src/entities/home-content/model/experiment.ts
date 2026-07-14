export function isWorkWithMeExperiment(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("experiment") === "1";
}
