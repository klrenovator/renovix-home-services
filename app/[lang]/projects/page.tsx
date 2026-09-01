import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowRight, IconCamera, IconCheck, IconLayers } from "@/components/icons";
import { ProjectsPortfolio } from "@/components/projects/ProjectsPortfolio";
import { PageSchema } from "@/components/seo/PageSchema";
import { PageHero } from "@/components/support/PageHero";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { getProjectCategories } from "@/data/i18n";
import { projectCategories } from "@/data/projects";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

type ProjectsPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/projects/",
    title: t.projects.metaTitle,
    description: t.projects.metaDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);
  const categories = getProjectCategories(code);

  return (
    <>
      <PageSchema
        lang={code}
        path="/projects/"
        name={t.projects.title}
        description={t.projects.metaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.projects.breadcrumb },
        ]}
      />
      <PageHero
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
        currentLabel={t.projects.breadcrumb}
        lang={code}
      />

      <section className="section section-surface">
        <div className="container-app">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[auto_1fr] lg:items-start">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-navy">
              <IconCamera className="h-6 w-6" />
            </span>
            <div>
              <p className="eyebrow">{t.projects.statusEyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
                {t.projects.statusTitle}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-secondary">
                {t.projects.statusBody}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="max-w-2xl">
              <p className="eyebrow">{t.projects.browseEyebrow}</p>
              <h2 className="h2-section mt-3 text-navy">{t.projects.browseTitle}</h2>
              <p className="lead mt-4">{t.projects.browseLead}</p>
            </div>
            <div className="mt-8">
              <ProjectsPortfolio
                categories={categories.map((category) => ({
                  id: category.id,
                  label: category.label,
                  icon: category.icon,
                  href: contentHref(
                    "service",
                    projectCategories.find((item) => item.id === category.id)
                      ?.servicePath.replace("/services/", "") ?? "",
                    code,
                  ),
                }))}
                items={categories.map((category) => ({
                  id: `placeholder-${category.id}`,
                  category: category.id,
                }))}
                labels={{
                  allCategories: t.projects.allCategories,
                  filterAria: t.a11y.filterProjects,
                  showingPrefix: t.projects.showingPrefix,
                  showingSuffixOne: t.projects.showingSuffixOne,
                  showingSuffixMany: t.projects.showingSuffixMany,
                  showingNote: t.projects.showingNote,
                  imagePlaceholder: t.projects.imagePlaceholder,
                  statusLabel: t.projects.statusLabel,
                  fallbackCategory: t.projects.fallbackCategory,
                  exploreServicePrefix: t.projects.exploreServicePrefix,
                  titleSuffix: t.projects.placeholderTitleSuffix,
                  description: t.projects.placeholderDescription,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">{t.projects.futureEyebrow}</p>
            <h2 className="h2-section mt-3 text-navy">{t.projects.futureTitle}</h2>
            <p className="lead mt-4">{t.projects.futureLead}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {t.projects.futureItems.map((item, index) => {
              const Icon = [IconCamera, IconLayers, IconCheck][index % 3];

              return (
                <li key={item.title} className="card p-5">
                  <Icon className="h-5 w-5 text-brand" />
                  <h3 className="mt-4 text-sm font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-11 text-white sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-brand/25"
            />
            <div className="relative max-w-2xl">
              <p className="eyebrow-light">{t.projects.ctaEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.projects.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                {t.projects.ctaDescription}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={localizedHref("/quote", code)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  {t.cta.getQuote}
                </Button>
                <Link
                  href={localizedHref("/services", code)}
                  className="btn btn-secondary"
                >
                  {t.projects.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
