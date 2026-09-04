import type { AreaRegionTranslations, AreaTranslations } from "../types";
import { translations as kualaLumpur } from "./kuala-lumpur";
import { translations as kualaLumpurC } from "./kuala-lumpur-c";
import { translations as kualaLumpurD } from "./kuala-lumpur-d";
import { translations as regions } from "./regions";
import { translations as selangor } from "./selangor";
import { translations as selangorC } from "./selangor-c";
import { translations as selangorD } from "./selangor-d";

export const msAreaTranslations: AreaTranslations = {
  ...kualaLumpur,
  ...kualaLumpurC,
  ...kualaLumpurD,
  ...selangor,
  ...selangorC,
  ...selangorD,
};

export const msAreaRegionTranslations: AreaRegionTranslations =
  regions;
