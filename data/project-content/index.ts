import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import { projectCategories, type ProjectCategory, type ProjectCategoryId } from "@/data/projects";
import { projectContent, projects } from "./projects";
import { getProjectTranslation, translatedProjectSlugs } from "./translations";
import type { Project, ProjectContent, ResolvedProject } from "./types";

export type {
  Project,
  ProjectBeforeAfter,
  ProjectContent,
  ProjectDetail,
  ProjectDetailKey,
  ProjectImage,
  ProjectLocation,
  ProjectStatus,
  ResolvedProject,
} from "./types";
export { projects, projectContent };
export { translatedProjectSlugs, getProjectTranslation };

/**
 * Only published projects leave the data layer. Every public surface — the
 * index, the detail route's `generateStaticParams`, the sitemap and the
 * language switcher — reads through this list, so a draft can never acquire a
 * URL by accident.
 */
export function getPublishedProjects(): Project[] {
  return projects.filter((project) => project.status === "published");
}

export function getPublishedProject(slug: string): Project | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}

export function isPublishedProject(slug: string): boolean {
  return getPublishedProject(slug) !== undefined;
}

/**
 * Localized copy for a project.
 *
 * `i18n/coverage.ts` decides which language versions are generated, so a
 * published project always has an entry in the requested language; the English
 * fallback below is a safety net that the coverage guard makes unreachable.
 */
export function getProjectContent(
  slug: string,
  lang: LanguageCode | string,
): ProjectContent {
  const code = getLanguageCode(lang);
  return getProjectTranslation(slug, code) ?? projectContent[slug];
}

/** A published project with its copy resolved for one language. */
export function getResolvedProject(
  slug: string,
  lang: LanguageCode | string,
): ResolvedProject | undefined {
  const project = getPublishedProject(slug);

  if (!project) {
    return undefined;
  }

  return { ...project, content: getProjectContent(slug, lang) };
}

export function getResolvedProjects(
  lang: LanguageCode | string,
): ResolvedProject[] {
  return getPublishedProjects().map((project) => ({
    ...project,
    content: getProjectContent(project.slug, lang),
  }));
}

export function getPublishedProjectsByCategory(
  category: ProjectCategoryId,
): Project[] {
  return getPublishedProjects().filter((project) => project.category === category);
}

/**
 * Sibling projects in the same service category — the internal links shown as
 * "More work like this". Real relationships only: same category, same
 * published portfolio.
 */
export function getRelatedPublishedProjects(
  project: Project,
  limit = 3,
): Project[] {
  return getPublishedProjectsByCategory(project.category)
    .filter((item) => item.slug !== project.slug)
    .slice(0, limit);
}

/** Category ids that actually have published work behind them. */
export function getProjectCategoriesWithProjects(): ProjectCategoryId[] {
  const ids = new Set(getPublishedProjects().map((project) => project.category));
  return projectCategories
    .map((category) => category.id)
    .filter((id): id is ProjectCategoryId => ids.has(id));
}

/** Category ids used by a project, primary first (for "Services used"). */
export function getProjectServiceCategories(project: Project): ProjectCategoryId[] {
  const ids = [project.category, ...(project.relatedCategories ?? [])];
  return ids.filter((id, index) => ids.indexOf(id) === index);
}

export function getProjectCategory(
  id: ProjectCategoryId,
): ProjectCategory | undefined {
  return projectCategories.find((category) => category.id === id);
}

/** Service page path (`/services/{slug}`) for a project category. */
export function getProjectCategoryServicePath(
  id: ProjectCategoryId,
): string | undefined {
  return getProjectCategory(id)?.servicePath;
}
