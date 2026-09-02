import type { LanguageCode } from "@/data/languages";
import type { ProjectContent } from "../types";
import { projectContent, projects } from "../projects";
import type { ProjectTranslations } from "./types";
import { msProjectTranslations } from "./ms";
import { zhProjectTranslations } from "./zh";

const translations: Record<LanguageCode, ProjectTranslations> = {
  en: projectContent,
  ms: msProjectTranslations,
  zh: zhProjectTranslations,
};

export type { ProjectTranslation, ProjectTranslations } from "./types";
export { msProjectTranslations, zhProjectTranslations };

/** Slugs of published projects that have a complete translation. */
export function translatedProjectSlugs(lang: "ms" | "zh"): string[] {
  const map = translations[lang];
  return projects
    .filter((project) => project.status === "published" && map[project.slug])
    .map((project) => project.slug);
}

/**
 * Copy for one project in one language. Returns `undefined` when the language
 * has no entry, so a caller can fall back deliberately instead of silently
 * publishing English copy under a `/ms/` or `/zh/` URL.
 */
export function getProjectTranslation(
  slug: string,
  lang: LanguageCode,
): ProjectContent | undefined {
  return translations[lang][slug];
}
