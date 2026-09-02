import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import { getProjectCategories } from "@/data/i18n";
import { format, getDictionary } from "@/i18n";
import type { ResolvedProject } from "./types";

export type ProjectSeo = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

/**
 * The single source of truth for a project page's `<title>`, meta description
 * and Open Graph text.
 *
 * A project may carry a bespoke `seoTitle` / `seoDescription`; when it does
 * not, the title is composed from the project name, its service category and
 * the full brand, and the description is the factual one-to-two-sentence
 * summary that already appears on the page. Both metadata and JSON-LD read
 * from here so the two can never disagree.
 */
export function getProjectSeo(
  project: ResolvedProject,
  lang: LanguageCode | string,
): ProjectSeo {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const categoryLabel =
    getProjectCategories(code).find((item) => item.id === project.category)
      ?.label ?? t.projects.fallbackCategory;

  const title =
    project.content.seoTitle ??
    format(t.projectPage.metaTitleTemplate, {
      title: project.content.title,
      category: categoryLabel,
    });

  const description =
    project.content.seoDescription ?? project.content.shortDescription;

  return {
    title,
    description,
    ogTitle: project.content.ogTitle ?? title,
    ogDescription: project.content.ogDescription ?? description,
  };
}
