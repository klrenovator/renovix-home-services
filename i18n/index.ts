import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import type { Dictionary } from "./types";
import { en } from "./en";
import { ms } from "./ms";
import { zh } from "./zh";

const dictionaries: Record<LanguageCode, Dictionary> = { en, ms, zh };

export type { Dictionary } from "./types";

/**
 * Returns the UI dictionary for a language. `en` is the fallback for an unknown
 * code so a bad URL segment can never render a page with missing strings.
 */
export function getDictionary(lang: string | undefined | null): Dictionary {
  return dictionaries[getLanguageCode(lang)];
}

export { en, ms, zh };
