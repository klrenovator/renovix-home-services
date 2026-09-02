import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectJsonLd } from "@/components/projects/ProjectJsonLd";
import { ProjectPage } from "@/components/projects/ProjectPage";
import { getLanguage, languages } from "@/data/languages";
import { getPublishedProjects, getResolvedProject } from "@/data/project-content";
import { getProjectSeo } from "@/data/project-content/seo";
import { hasTranslation, languagesWithTranslation } from "@/i18n/coverage";
import { buildPageMetadata } from "@/i18n/seo";

type ProjectDetailPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

/**
 * Only *published* projects with a complete translation in the language are
 * generated. A draft therefore has no prerendered URL at all, and the guard in
 * the page below answers `notFound()` for any slug that is not published — so
 * an unpublished project is never reachable and never indexable.
 */
export function generateStaticParams() {
  return languages.flatMap((language) =>
    getPublishedProjects()
      .filter((project) => hasTranslation("project", project.slug, language.code))
      .map((project) => ({
        lang: language.code,
        slug: project.slug,
      })),
  );
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  const project = getResolvedProject(slug, lang);

  if (!language || !project) {
    return { robots: { index: false, follow: false } };
  }

  const seo = getProjectSeo(project, language.code);

  return buildPageMetadata({
    lang: language.code,
    path: `/projects/${project.slug}/`,
    title: seo.title,
    description: seo.description,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
    availableLanguages: languagesWithTranslation("project", project.slug),
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  const project = getResolvedProject(slug, lang);

  if (
    !language ||
    !project ||
    !hasTranslation("project", project.slug, language.code)
  ) {
    notFound();
  }

  return (
    <>
      <ProjectJsonLd project={project} lang={language.code} />
      <ProjectPage project={project} lang={language.code} />
    </>
  );
}
