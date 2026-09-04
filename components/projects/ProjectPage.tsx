import { ProjectHero } from "./ProjectHero";
import { ProjectOverviewSection } from "./ProjectOverviewSection";
import { ProjectDetailsSection } from "./ProjectDetailsSection";
import { ProjectGallerySection } from "./ProjectGallerySection";
import { ProjectServicesSection } from "./ProjectServicesSection";
import { ProjectSubServicesSection } from "./ProjectSubServicesSection";
import { ProjectProblemsSection } from "./ProjectProblemsSection";
import { ProjectLocationSection } from "./ProjectLocationSection";
import { ProjectRelatedSection } from "./ProjectRelatedSection";
import { ProjectCtaSection } from "./ProjectCtaSection";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectPageProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Project detail template.
 *
 * Every section is data-driven: the overview always renders (the summary is
 * required copy), while scope, details, gallery and before/after appear only
 * when the underlying information exists. Sections that would otherwise be
 * empty are skipped rather than filled with placeholders.
 */
export function ProjectPage({ project, lang }: ProjectPageProps) {
  return (
    <>
      <ProjectHero project={project} lang={lang} />
      <ProjectOverviewSection project={project} lang={lang} />
      <ProjectDetailsSection project={project} lang={lang} />
      <ProjectGallerySection project={project} lang={lang} />
      <ProjectServicesSection project={project} lang={lang} />
      <ProjectSubServicesSection project={project} lang={lang} />
      <ProjectProblemsSection project={project} lang={lang} />
      <ProjectLocationSection project={project} lang={lang} />
      <ProjectRelatedSection project={project} lang={lang} />
      <ProjectCtaSection lang={lang} />
    </>
  );
}
