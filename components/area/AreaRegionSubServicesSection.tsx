import { SubServiceLinksBlock } from "@/components/service/SubServiceLinksSection";
import { getSubServicesForRegion } from "@/data/area-content";
import type { AreaRegion } from "@/data/area-content/types";

/** Region hubs cap the scope list; their 53 child guides carry every scope. */
const REGION_SCOPE_LIMIT = 12;

type AreaRegionSubServicesBlockProps = {
  region: AreaRegion;
  lang: string;
};

/**
 * Phase 35 — the scope half of the region-hub link graph.
 *
 * The two region hubs listed the services most requested across the region but
 * never a single sub-service page, while every one of the 53 area guides
 * beneath them rendered the scopes carried out in that location (Phase 29). The
 * hub therefore sat above a content layer it did not join, and the 51
 * sub-service pages lost their two broadest entry points.
 *
 * The list is `getSubServicesForRegion()`: the union of what the region's own
 * guides already render, widest coverage first, so the hub only ever links a
 * scope its child guides genuinely carry. Rendering reuses the shared Phase 28
 * block — same card markup, same localized names, same per-language
 * availability filter. It sits inside the existing "Services Most Requested"
 * section the way the area guide's block sits inside its own services section:
 * an additive block, no new section, no new background, no redesign.
 */
export function AreaRegionSubServicesBlock({
  region,
  lang,
}: AreaRegionSubServicesBlockProps) {
  const subServices = getSubServicesForRegion(region, REGION_SCOPE_LIMIT);

  if (subServices.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-t border-slate-200/80 pt-10">
      <SubServiceLinksBlock
        subServices={subServices}
        scope="region"
        name={region.name}
        lang={lang}
        headingLevel={3}
        inline={false}
      />
    </div>
  );
}
