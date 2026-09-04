import type { ServiceIcon } from "@/components/icons";
import type { ProblemCategoryId } from "@/data/problem-content/types";

/**
 * Homepage problem preview SELECTION ONLY.
 *
 * Phase 18 tech-debt fix: this module no longer duplicates problem labels or
 * hrefs. It holds the curated order of the homepage preview tiles plus the
 * icon each category renders with. Every user-visible label and URL is derived
 * from the authoritative problem-content registry (`data/problem-content`) via
 * `getProblemPreviews()` in `data/i18n`.
 */
export type ProblemCategory = {
  id: string;
  label: string;
  icon: ServiceIcon;
  href?: string;
};

/** Icon per authoritative problem-content category. */
export const problemCategoryIcons: Record<ProblemCategoryId, ServiceIcon> = {
  tiling: "tile",
  electrical: "electrical",
  painting: "painting",
  ceiling: "ceiling",
  plumbing: "plumbing",
  waterproofing: "waterproofing",
  handyman: "handyman",
  welding: "welding",
  flooring: "flooring",
  "general-renovation": "renovation",
};

/** Curated homepage preview order — every slug must exist in problem-content. */
export const problemPreviewSlugs: string[] = [
  "broken-tile-repair",
  "water-leakage",
  "cracked-walls",
  "peeling-paint",
  "mouldy-walls",
  "power-tripping",
  "faulty-socket",
  "water-damaged-ceiling",
  "bathroom-leakage",
  "blocked-drain",
  "loose-tile-repair",
  "roof-leakage",
  "door-problems",
  "minor-home-repairs",
];
