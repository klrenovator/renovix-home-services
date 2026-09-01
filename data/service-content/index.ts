import type { ServiceDetail } from "./types";
import { tiling } from "./tiling";
import { weldingMetalWorks } from "./welding-metal-works";
import { electrical } from "./electrical";
import { painting } from "./painting";
import { ceilingPartition } from "./ceiling-partition";
import { generalRenovation } from "./general-renovation";
import { plumbing } from "./plumbing";
import { waterproofing } from "./waterproofing";
import { flooring } from "./flooring";
import { handyman } from "./handyman";

export const serviceDetails: ServiceDetail[] = [
  tiling,
  weldingMetalWorks,
  electrical,
  painting,
  ceilingPartition,
  generalRenovation,
  plumbing,
  waterproofing,
  flooring,
  handyman,
];

export function getServiceDetail(
  slug: string | undefined | null,
): ServiceDetail | undefined {
  if (!slug) {
    return undefined;
  }

  return serviceDetails.find((detail) => detail.slug === slug);
}

export function getRelatedServiceDetails(detail: ServiceDetail): ServiceDetail[] {
  return detail.relatedServices
    .map((slug) => serviceDetails.find((item) => item.slug === slug))
    .filter((item): item is ServiceDetail => Boolean(item));
}
