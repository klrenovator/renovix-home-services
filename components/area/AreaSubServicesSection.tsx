import { SubServiceLinksBlock } from "@/components/service/SubServiceLinksSection";
import { getSubServicesForLocation } from "@/data/sub-services";
import type { AreaDetail } from "@/data/area-content/types";

type AreaSubServicesBlockProps = {
  area: AreaDetail;
  lang: string;
};

/**
 * Phase 29 — the location half of the sub-service link graph.
 *
 * Area guides were the one page type that never linked to a sub-service page:
 * a visitor (and a crawler) could see the services available in an area, the
 * problems common there and the neighbouring areas, but not the specific
 * scopes of work carried out in that location — even though every one of them
 * has its own page.
 *
 * The list is derived, never authored twice, in `getSubServicesForLocation()`
 * (`data/sub-services`): first the published entries of the location × service
 * × sub-service × problem search-intent matrix for this area, then the inverse
 * of each sub-service's own `relatedProblems` walked in the order of the
 * problems the area guide itself lists as locally common. Rendering reuses the
 * shared Phase 28 block, so the card markup, the localized names and the
 * per-language availability filter (`subServiceLanguages`) stay in one place —
 * a sub-service with no page in this language is omitted, never linked.
 *
 * It renders inside the existing "Services Available in {area}" section, the
 * same way the service pillar renders its scopes inside its own sub-service
 * section: an additive block, no new section, no new background, no redesign.
 */
export function AreaSubServicesBlock({ area, lang }: AreaSubServicesBlockProps) {
  const subServices = getSubServicesForLocation(area.slug, area.relatedProblems);

  if (subServices.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-t border-slate-200/80 pt-10">
      <SubServiceLinksBlock
        subServices={subServices}
        scope="area"
        name={area.name}
        lang={lang}
        headingLevel={3}
        inline={false}
      />
    </div>
  );
}
