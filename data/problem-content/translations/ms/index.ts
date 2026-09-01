import type { ProblemTranslations } from "../types";
import { translations as ceiling } from "./ceiling";
import { translations as electrical } from "./electrical";
import { translations as handyman } from "./handyman";
import { translations as painting } from "./painting";
import { translations as plumbing } from "./plumbing";
import { translations as tiling } from "./tiling";
import { translations as waterproofing } from "./waterproofing";

export const msProblemTranslations: ProblemTranslations = {
  ...ceiling,
  ...electrical,
  ...handyman,
  ...painting,
  ...plumbing,
  ...tiling,
  ...waterproofing,
};
