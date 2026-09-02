import type { AreaRegionId } from "@/data/area-content/types";
import type { ProjectCategoryId } from "@/data/projects";

/**
 * Publication state of a project.
 *
 * Only `published` projects are statically generated, linked from the index,
 * listed in the sitemap or indexable. A `draft` is kept in the repository so
 * work in progress can be prepared, but it has no public URL: the detail route
 * answers `notFound()` for it and it is never emitted into
 * `generateStaticParams`, the sitemap or an hreflang set.
 */
export type ProjectStatus = "published" | "draft";

/**
 * A photograph of real work.
 *
 * `width` / `height` are the intrinsic pixel dimensions of the optimized file
 * so `next/image` can reserve the exact box and the page never shifts while
 * the image decodes.
 */
export type ProjectImage = {
  /** Path under `public/`. */
  src: string;
  width: number;
  height: number;
};

/**
 * Before / after frames of the same job.
 *
 * Modelled as a pair on purpose: the component only renders a comparison when
 * both frames exist, so a single photo can never be presented as a
 * before/after transformation.
 */
export type ProjectBeforeAfter = {
  before: ProjectImage;
  after: ProjectImage;
};

/**
 * A location that has actually been confirmed by the business.
 *
 * The field is optional and is currently unset for every project, because no
 * site address or area was supplied with the work photographs. When a location
 * is confirmed it links through to the matching page in the existing area
 * architecture (`/areas/{region}/` or `/areas/{region}/{area}/`).
 */
export type ProjectLocation = {
  /** Region hub id from the area architecture. */
  region: AreaRegionId;
  /** Area slug within the region; omit for a region-wide location. */
  area?: string;
};

/**
 * Keys for the "Project details" list.
 *
 * The label of each row comes from the UI dictionary (`projectPage.detailLabels`)
 * so it is localized; only the value is stored per project. A key with no value
 * is never rendered — the section only lists information the business has
 * actually supplied.
 */
export type ProjectDetailKey =
  | "propertyType"
  | "workType"
  | "completed"
  | "duration"
  | "materials";

export type ProjectDetail = {
  key: ProjectDetailKey;
  /** Localized value, e.g. "Condominium" / "Kondominium" / "公寓". */
  value: string;
};

/**
 * Language-independent facts about a project.
 *
 * Every optional field is absent unless the business has supplied it. The
 * project page renders a section only when its data exists, so nothing is
 * invented to fill a template.
 */
export type Project = {
  /** URL slug, e.g. `marble-look-floor-tiling`. Unique across all projects. */
  slug: string;
  /** The main service the work belongs to (one of the 10 main services). */
  category: ProjectCategoryId;
  /**
   * Further services genuinely carried out on the same job. Only set when the
   * work is visible/confirmed — never inferred.
   */
  relatedCategories?: ProjectCategoryId[];
  status: ProjectStatus;
  /** Completion year, only when supplied. */
  year?: number;
  /** Hero / main image. Required for a published project. */
  image: ProjectImage;
  /** Additional photographs of the same job. */
  gallery?: ProjectImage[];
  /** Before / after frames of the same job, when both exist. */
  beforeAfter?: ProjectBeforeAfter;
  /** Confirmed location; omitted when none has been supplied. */
  location?: ProjectLocation;
};

/**
 * The localized copy for one project. English is the source language; `ms` and
 * `zh` are held in `data/project-content/translations/` and are checked against
 * this shape, so a missing string is a TypeScript error rather than an English
 * sentence leaking onto a `/ms/` or `/zh/` page.
 */
export type ProjectContent = {
  /** Page H1 and card heading. */
  title: string;
  /** One to two factual sentences. Used on the card and as the summary. */
  shortDescription: string;
  /** Longer overview paragraphs, when a fuller description has been supplied. */
  fullDescription?: string[];
  /** Scope of work bullets, when the scope has been supplied. */
  scopeOfWork?: string[];
  /** Verified details rows. */
  details?: ProjectDetail[];
  /** Alt text for the main image. */
  alt: string;
  /** Alt text for each gallery image, in the same order as `project.gallery`. */
  galleryAlt?: string[];
  /** Alt text for the before / after frames. */
  beforeAlt?: string;
  afterAlt?: string;
  /** Overrides the composed `<title>` when a bespoke one is preferred. */
  seoTitle?: string;
  /** Overrides the short description as the meta description. */
  seoDescription?: string;
  /** Open Graph overrides. */
  ogTitle?: string;
  ogDescription?: string;
};

/** A project with its copy already resolved for one language. */
export type ResolvedProject = Project & { content: ProjectContent };
