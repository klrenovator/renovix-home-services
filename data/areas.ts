import { areaRegions, getAreaHref } from "./area-content";

export type AreaPlace = {
  name: string;
  href: string;
};

export type AreaGroup = {
  id: string;
  label: string;
  description: string;
  href: string;
  places: AreaPlace[];
};

/**
 * Derived from the area-content registry so the homepage, service pages,
 * problem pages and footer always link to the live location pages.
 */
export const areas: AreaGroup[] = areaRegions.map((region) => ({
  id: region.id,
  label: region.name,
  description: region.summary,
  href: `/areas/${region.id}`,
  places: region.areas.map((area) => ({
    name: area.name,
    href: getAreaHref(area),
  })),
}));

export const areasIndexHref = "/areas";
