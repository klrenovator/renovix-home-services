import {
  ALL_AREAS,
  ALL_AREA_REGIONS,
  ALL_PROBLEMS,
  ALL_SERVICES,
} from "./coverage";
import { serviceDetails } from "@/data/service-content";
import { problemDetails } from "@/data/problem-content";
import { areaRegions } from "@/data/area-content";

function diff(kind: string, listName: string, expected: string[], actual: string[]) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);

  const wrong = expected.filter((slug) => !actualSet.has(slug));
  const missing = actual.filter((slug) => !expectedSet.has(slug));

  if (wrong.length > 0 || missing.length > 0) {
    const parts: string[] = [];
    if (wrong.length > 0) {
      parts.push(`in ${listName} but not in the registry: ${wrong.join(", ")}`);
    }
    if (missing.length > 0) {
      parts.push(`in the registry but missing from ${listName}: ${missing.join(", ")}`);
    }

    throw new Error(`[i18n/verify] ${kind} slug inventory drifted — ${parts.join("; ")}`);
  }
}

/**
 * Build-time guard against slug drift between `i18n/coverage.ts` (the lists
 * that drive sitemaps, hreflang sets and static param generation) and the
 * actual content registries. A stale slug here means a sitemap entry for a
 * URL that 404s — so the mismatch is a build failure, not a warning.
 *
 * Imported from `app/sitemap.ts`, which runs for every locale at build time.
 */
export function assertCoverageInSync() {
  diff(
    "service",
    "ALL_SERVICES",
    [...ALL_SERVICES],
    serviceDetails.map((detail) => detail.slug),
  );

  diff(
    "problem",
    "ALL_PROBLEMS",
    [...ALL_PROBLEMS],
    problemDetails.map((detail) => detail.slug),
  );

  diff(
    "area region",
    "ALL_AREA_REGIONS",
    [...ALL_AREA_REGIONS],
    areaRegions.map((region) => region.id),
  );

  diff(
    "area",
    "ALL_AREAS",
    [...ALL_AREAS],
    areaRegions.flatMap((region) =>
      region.areas.map((area) => `${region.id}/${area.slug}`),
    ),
  );
}
