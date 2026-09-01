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

/**
 * Fills `{placeholder}` slots in a dictionary string, e.g.
 * `format(t.areaPage.servicesTitle, { name: "Cheras" })`.
 *
 * Templates keep the whole sentence inside the dictionary, so each language can
 * put the value where its grammar needs it instead of forcing English word
 * order through string concatenation.
 */
export function format(
  template: string,
  values: Record<string, string | undefined>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
