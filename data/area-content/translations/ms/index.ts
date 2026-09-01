import type { AreaRegionTranslations, AreaTranslations } from "../types";
import { translations as kualaLumpur } from "./kuala-lumpur";
import { translations as regions } from "./regions";
import { translations as selangor } from "./selangor";

export const msAreaTranslations: AreaTranslations = {
  ...kualaLumpur,
  ...selangor,
};

export const msAreaRegionTranslations: AreaRegionTranslations =
  regions;
