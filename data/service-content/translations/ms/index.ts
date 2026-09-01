import type { ServiceTranslations } from "../types";
import { translation as ceilingPartition } from "./ceiling-partition";
import { translation as electrical } from "./electrical";
import { translation as flooring } from "./flooring";
import { translation as generalRenovation } from "./general-renovation";
import { translation as handyman } from "./handyman";
import { translation as painting } from "./painting";
import { translation as plumbing } from "./plumbing";
import { translation as tiling } from "./tiling";
import { translation as waterproofing } from "./waterproofing";
import { translation as weldingMetalWorks } from "./welding-metal-works";

export const msServiceTranslations: ServiceTranslations = {
  "ceiling-partition": ceilingPartition,
  "electrical": electrical,
  "flooring": flooring,
  "general-renovation": generalRenovation,
  "handyman": handyman,
  "painting": painting,
  "plumbing": plumbing,
  "tiling": tiling,
  "waterproofing": waterproofing,
  "welding-metal-works": weldingMetalWorks,
};
