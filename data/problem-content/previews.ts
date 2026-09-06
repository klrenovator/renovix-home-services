import type { ServiceIcon } from "@/components/icons";
import type { ProblemCategoryId } from "./types";

/**
 * Homepage problem-preview data — part of the authoritative problem-content
 * registry (moved out of the retired legacy `data/problems.ts` in the
 * 2026-09-05 audit, I-08).
 *
 * Like the whole Phase-18 slimming of the legacy file, this module holds the
 * curated order of the homepage preview tiles plus the icon each category
 * renders with — and nothing else. Every user-visible label, slug and URL is
 * derived from `data/problem-content` itself via `getProblemPreviews()` in
 * `data/i18n`, so there is exactly one problem taxonomy in the codebase.
 */
export type ProblemPreview = {
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
