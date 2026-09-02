import type { ProjectContent } from "../types";

/**
 * A translated project entry. The structural facts (slug, category, images,
 * status) come from the English source in `../projects`; only the copy is
 * translated, and the shape is checked against `ProjectContent` so a missing
 * string is a TypeScript error rather than English leaking onto a `/ms/` or
 * `/zh/` page.
 */
export type ProjectTranslation = ProjectContent;

export type ProjectTranslations = Record<string, ProjectTranslation>;
