import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { IconArrowRight, IconAlertTriangle } from "@/components/icons";
import { getLanguage, languages } from "@/data/languages";
import { getProblemCategories, getServiceName } from "@/data/i18n";
import { getProblemsByCategory } from "@/data/problem-content";
import { getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { buildPageMetadata } from "@/i18n/seo";

type ProblemsPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: ProblemsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/problems/",
    title: t.problemsIndex.metaTitle,
    description: t.problemsIndex.metaDescription,
    ogDescription: t.problemsIndex.ogDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function ProblemsPage({ params }: ProblemsPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);
  const categories = getProblemCategories(code);

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
        />
        <div className="container-app relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            inverse
            items={[
              { label: t.common.home, href: "/" },
              { label: t.problemsIndex.breadcrumb },
            ]}
            lang={code}
          />
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {t.problemsIndex.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
            {t.problemsIndex.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizedHref("/quote", code)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              {t.cta.getFreeQuote}
            </Button>
            <WhatsAppButton
              href={getWhatsAppHref(code)}
              variant="secondary"
              label={t.cta.whatsappUs}
            />
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          {categories.map((category) => {
            const problems = getProblemsByCategory(category.id);

            return (
              <div key={category.id} className="mb-16 last:mb-0">
                <div className="mb-6 max-w-2xl">
                  <p className="eyebrow">{category.label}</p>
                  <h2 className="h2-section mt-2 text-navy">
                    {getServiceName(category.serviceSlug, code)}
                  </h2>
                  <p className="lead mt-3">{category.intro}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {problems.map((problem) => {
                    const href = contentHref("problem", problem.slug, code);
                    const classes =
                      "card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

                    const body = (
                      <>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                          <IconAlertTriangle className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                          {problem.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                          {problem.subtitle}
                        </p>
                        {href ? (
                          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                            {t.cta.viewProblem}
                            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        ) : null}
                      </>
                    );

                    return href ? (
                      <Link key={problem.slug} href={href} className={classes}>
                        {body}
                      </Link>
                    ) : (
                      <article key={problem.slug} className={classes}>
                        {body}
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
