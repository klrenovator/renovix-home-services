import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowRight, IconCamera, IconCheck, IconLayers } from "@/components/icons";
import { ProjectsPortfolio } from "@/components/projects/ProjectsPortfolio";
import { PageBreadcrumbJsonLd } from "@/components/support/PageBreadcrumbJsonLd";
import { PageHero } from "@/components/support/PageHero";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { localizeHref } from "@/data/navigation";
import { projectCategories, projectPlaceholders } from "@/data/projects";
import { getQuoteHref, siteConfig } from "@/data/site";

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

  const canonicalUrl = `${siteConfig.url}/${lang}/projects/`;
  const title = "Projects Portfolio Structure | Renovix Home Services";
  const description =
    "Explore Renovix Home Services’ portfolio structure for tiling, welding, electrical, painting, ceiling, partition, renovation, plumbing, waterproofing, flooring and handyman work in KL and Selangor.";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <>
      <PageBreadcrumbJsonLd lang={lang} label="Projects" path="/projects/" />
      <PageHero
        eyebrow="Projects"
        title="A portfolio framework ready for verified project details"
        description="Browse the service categories planned for the Renovix portfolio. Actual project photographs, scope and location information will only be published when they are supplied and verified."
        currentLabel="Projects"
        lang={lang}
      />

      <section className="section section-surface">
        <div className="container-app">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[auto_1fr] lg:items-start">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-navy">
              <IconCamera className="h-6 w-6" />
            </span>
            <div>
              <p className="eyebrow">Portfolio status</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
                Project placeholders are intentional
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-secondary">
                No completed Renovix projects, before-and-after images, locations,
                dates or results have been fabricated for this page. Each card below
                is explicitly marked as a placeholder and reserves a structured place
                for genuine portfolio material when it becomes available.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="max-w-2xl">
              <p className="eyebrow">Browse by service category</p>
              <h2 className="h2-section mt-3 text-navy">
                Portfolio categories for home improvement work
              </h2>
              <p className="lead mt-4">
                Filter the framework by the kind of work you are interested in. The
                category links lead to the relevant service information while the
                portfolio awaits real project content.
              </p>
            </div>
            <div className="mt-8">
              <ProjectsPortfolio
                categories={projectCategories}
                placeholders={projectPlaceholders}
                lang={lang}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">Future project entries</p>
            <h2 className="h2-section mt-3 text-navy">
              What verified portfolio information should include
            </h2>
            <p className="lead mt-4">
              When real materials are supplied, each entry can be made useful without
              over-claiming: genuine images, the service scope, property type and
              general area can be added only where they are confirmed.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            <li className="card p-5">
              <IconCamera className="h-5 w-5 text-brand" />
              <h3 className="mt-4 text-sm font-semibold text-navy">Verified photos</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                Images supplied for publication, with accurate context.
              </p>
            </li>
            <li className="card p-5">
              <IconLayers className="h-5 w-5 text-brand" />
              <h3 className="mt-4 text-sm font-semibold text-navy">Clear scope</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                A factual description of the work rather than invented outcomes.
              </p>
            </li>
            <li className="card p-5">
              <IconCheck className="h-5 w-5 text-brand" />
              <h3 className="mt-4 text-sm font-semibold text-navy">Confirmed details</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                Property and area information only when it can be shared accurately.
              </p>
            </li>
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
              <p className="eyebrow-light">Plan your own work</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Looking for a service rather than a portfolio example?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                Explore the service categories or share your own repair, upgrade or
                renovation details to begin a considered quote request.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={getQuoteHref(lang)}
                  variant="primary"
                  icon={<IconArrowRight className="h-4 w-4" />}
                >
                  Get a Quote
                </Button>
                <Link
                  href={localizeHref("/services", lang)}
                  className="btn btn-secondary"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
