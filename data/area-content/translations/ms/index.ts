import type { AreaRegionTranslations, AreaTranslations } from "../types";
import { translations as kualaLumpur } from "./kuala-lumpur";
import { translations as kualaLumpurC } from "./kuala-lumpur-c";
import { translations as regions } from "./regions";
import { translations as selangor } from "./selangor";
import { translations as selangorC } from "./selangor-c";

export const msAreaTranslations: AreaTranslations = {
  ...kualaLumpur,
  ...kualaLumpurC,
  ...selangor,
  ...selangorC,
};

export const msAreaRegionTranslations: AreaRegionTranslations =
  regions;
