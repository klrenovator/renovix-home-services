import { absoluteUrl } from "@/i18n/seo";
import { JsonLd } from "./JsonLd";
import {
  breadcrumbNode,
  schemaGraph,
  webPageNode,
  type BreadcrumbEntry,
} from "./schema";

type PageSchemaProps = {
  lang: string;
  /** Language-agnostic path with trailing slash, e.g. `/services/tiling/`. */
  path: string;
  /** Display name of the page (its H1, not the SEO title). */
  name: string;
  /** Same copy as the meta description. */
  description: string;
  /** Visible breadcrumb, in order; the last entry is the current page. */
  breadcrumbs?: BreadcrumbEntry[];
  /** Entity the page is about; defaults to the business. */
  about?: Record<string, unknown>;
  /** Page-specific nodes (Service, FAQPage, Article, ItemList, …). */
  extra?: object[];
};

/**
 * Per-page structured data: a WebPage node linked into the site entity graph,
 * a BreadcrumbList matching the visible breadcrumb, and any content-specific
 * nodes for the page (Service, FAQPage, Article, ItemList, …).
 */
export function PageSchema({
  lang,
  path,
  name,
  description,
  breadcrumbs,
  about,
  extra = [],
}: PageSchemaProps) {
  const canonical = absoluteUrl(lang, path);
  const hasBreadcrumb = Boolean(breadcrumbs && breadcrumbs.length > 0);

  const nodes: object[] = [
    webPageNode({ lang, path, name, description, about, hasBreadcrumb }),
  ];

  if (hasBreadcrumb && breadcrumbs) {
    nodes.push(breadcrumbNode(canonical, breadcrumbs));
  }

  nodes.push(...extra);

  return <JsonLd data={schemaGraph(nodes)} />;
}
