import { PageSchema } from "@/components/seo/PageSchema";
import {
  getHtmlLang,
  ORGANIZATION_ID,
} from "@/components/seo/schema";
import { getLanguageCode } from "@/data/languages";
import { getProjectCategories } from "@/data/i18n";
import {
  getProjectCategory,
  getProjectSubServices,
} from "@/data/project-content";
import { getProjectSeo } from "@/data/project-content/seo";
import { subServiceLanguages } from "@/data/sub-services";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { hasTranslation } from "@/i18n/coverage";
import { absoluteUrl } from "@/i18n/seo";
import type { ProjectImage, ResolvedProject } from "@/data/project-content/types";

type ProjectJsonLdProps = {
  project: ResolvedProject;
  lang: string;
};

type ImageObjectNode = {
  "@type": "ImageObject";
  "@id": string;
  url: string;
  contentUrl: string;
  width: number;
  height: number;
  caption?: string;
  name?: string;
};

function imageObjectNode(
  canonical: string,
  index: number,
  image: ProjectImage,
  caption?: string,
  name?: string,
): ImageObjectNode {
  return {
    "@type": "ImageObject",
    "@id": `${canonical}#image-${index}`,
    url: `${siteConfig.url}${image.src}`,
    contentUrl: `${siteConfig.url}${image.src}`,
    width: image.width,
    height: image.height,
    ...(caption ? { caption } : {}),
    ...(name ? { name } : {}),
  };
}

/**
 * Structured data for a project page: the page as a `WebPage`, a
 * `BreadcrumbList` matching the visible breadcrumb, a `CreativeWork` node for
 * the project itself, and an `ImageObject` for every photograph actually
 * attached to the project (hero, gallery, before/after). The CreativeWork
 * links `about` to the service(s) genuinely involved — the primary service
 * plus any Phase 19 sub-service the registry maps to this project.
 *
 * Deliberately absent: `Review`, `aggregateRating`, `Product`, `Offer`,
 * prices, completion dates and location claims. A project page describes a
 * photograph of work that was carried out — it is not a review, a product or
 * a testimonial, and none of that information has been supplied, so none is
 * published.
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

  /** Primary service involved in the work (WebPage.about points at the project). */
  const primaryServiceNode = {
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: categoryLabel,
    serviceType: categoryLabel,
    url: serviceUrl,
  };

  /** Sub-services the registry genuinely maps to this project. */
  const subServiceNodes = getProjectSubServices(project)
    .filter((sub) => subServiceLanguages(sub.slug).includes(code))
    .map((sub) => {
      const url = absoluteUrl(
        code,
        `/services/${sub.serviceSlug}/${sub.slug}/`,
      );

      return {
        "@type": "Service",
        "@id": `${url}#service`,
        name: sub[code].name,
        serviceType: sub[code].name,
        url,
        provider: { "@id": ORGANIZATION_ID },
      };
    });

  /** Every real photograph attached to the project, in page order. */
  const imageObjects: ImageObjectNode[] = [];
  imageObjects.push(
    imageObjectNode(canonical, 0, project.image, project.content.alt),
  );

  project.gallery?.forEach((image, index) => {
    imageObjects.push(
      imageObjectNode(
        canonical,
        imageObjects.length,
        image,
        project.content.galleryAlt?.[index],
      ),
    );
  });

  if (project.beforeAfter) {
    imageObjects.push(
      imageObjectNode(
        canonical,
        imageObjects.length,
        project.beforeAfter.before,
        project.content.beforeAlt,
        t.projectPage.beforeLabel,
      ),
      imageObjectNode(
        canonical,
        imageObjects.length,
        project.beforeAfter.after,
        project.content.afterAlt,
        t.projectPage.afterLabel,
      ),
    );
  }

  /** The project as a CreativeWork — a factual record of work carried out. */
  const projectNode = {
    "@type": "CreativeWork",
    "@id": `${canonical}#project`,
    name: project.content.title,
    description: project.content.shortDescription,
    url: canonical,
    inLanguage: getHtmlLang(code),
    image: imageObjects.map((image) => ({ "@id": image["@id"] })),
    about: [primaryServiceNode, ...subServiceNodes],
    provider: { "@id": ORGANIZATION_ID },
  };

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
      about={{ "@id": `${canonical}#project` }}
      extra={[projectNode, ...imageObjects]}
    />
  );
}
