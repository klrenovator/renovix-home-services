import { PageSchema } from "@/components/seo/PageSchema";
import { getLanguageCode } from "@/data/languages";
import { getProjectCategories } from "@/data/i18n";
import { getProjectCategory } from "@/data/project-content";
import { getProjectSeo } from "@/data/project-content/seo";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { hasTranslation } from "@/i18n/coverage";
import { absoluteUrl } from "@/i18n/seo";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectJsonLdProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Structured data for a project page: the page as a `WebPage`, a
 * `BreadcrumbList` matching the visible breadcrumb, and an `ImageObject` for
 * the main photograph.
 *
 * Deliberately absent: `Review`, `aggregateRating`, `Product`, `Offer`,
 * prices and completion dates. A project page describes a photograph of work
 * that was carried out — it is not a review, a product or a testimonial, and
 * no rating or price has been supplied, so none is published.
 */
export function ProjectJsonLd({ project, lang }: ProjectJsonLdProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const path = `/projects/${project.slug}/`;
  const canonical = absoluteUrl(code, path);
  const seo = getProjectSeo(project, code);
  const category = getProjectCategory(project.category);
  const categoryLabel =
    getProjectCategories(code).find((item) => item.id === project.category)
      ?.label ?? t.projects.fallbackCategory;

  const serviceSlug = category?.servicePath.replace("/services/", "") ?? "";
  const serviceUrl = hasTranslation("service", serviceSlug, code)
    ? absoluteUrl(code, `/services/${serviceSlug}/`)
    : absoluteUrl("en", `/services/${serviceSlug}/`);

  return (
    <PageSchema
      lang={code}
      path={path}
      name={project.content.title}
      description={seo.description}
      breadcrumbs={[
        { name: t.common.home, url: absoluteUrl(code, "/") },
        { name: t.projects.breadcrumb, url: absoluteUrl(code, "/projects/") },
        { name: project.content.title },
      ]}
      about={{
        "@type": "Service",
        name: categoryLabel,
        serviceType: categoryLabel,
        url: serviceUrl,
      }}
      extra={[
        {
          "@type": "ImageObject",
          "@id": `${canonical}#image`,
          url: `${siteConfig.url}${project.image.src}`,
          contentUrl: `${siteConfig.url}${project.image.src}`,
          width: project.image.width,
          height: project.image.height,
          caption: project.content.alt,
        },
      ]}
    />
  );
}
