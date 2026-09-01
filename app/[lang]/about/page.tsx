import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrowRight,
  IconChat,
  IconCheck,
  IconCompass,
  IconLayers,
  IconMapPin,
  IconShieldCheck,
  serviceIcons,
} from "@/components/icons";
import { PageHero } from "@/components/support/PageHero";
import { PageBreadcrumbJsonLd } from "@/components/support/PageBreadcrumbJsonLd";
import { Button } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { getServiceCategories } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { buildPageMetadata } from "@/i18n/seo";

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

const principleIcons = [
  IconShieldCheck,
  IconCheck,
  IconChat,
  IconCompass,
  IconLayers,
];

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/about/",
    title: t.about.metaTitle,
    description: t.about.metaDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);
  const services = getServiceCategories(code);

  return (
    <>
      <PageBreadcrumbJsonLd lang={code} label={t.about.breadcrumb} path="/about/" />
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
        currentLabel={t.about.breadcrumb}
        lang={code}
      />

      <section className="section bg-white">
        <div className="container-app grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">{t.about.approachEyebrow}</p>
            <h2 className="h2-section mt-3 text-navy">{t.about.approachTitle}</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-secondary">
            {t.about.approachParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <Link
              href={localizedHref("/quote", code)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t.about.approachLink}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.about.standardsEyebrow}</p>
            <h2 className="h2-section mt-3 text-navy">{t.about.standardsTitle}</h2>
            <p className="lead mt-4">{t.about.standardsLead}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.principles.map((principle, index) => {
              const Icon = principleIcons[index % principleIcons.length];

              return (
                <article key={principle.title} className="card h-full p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="h3-card mt-4">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">{t.about.servicesEyebrow}</p>
            <h2 className="h2-section mt-3 text-navy">{t.about.servicesTitle}</h2>
            <p className="lead mt-4 max-w-2xl">{t.about.servicesLead}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon];
                const href = contentHref("service", service.slug, code);

                const inner = (
                  <>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-soft">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-navy">
                      {service.name}
                    </span>
                    {href ? (
                      <IconArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                    ) : null}
                  </>
                );

                const classes =
                  "group flex items-center gap-3 rounded-xl border border-slate-200 bg-surface p-3.5 transition-colors hover:border-brand/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

                return href ? (
                  <Link key={service.slug} href={href} className={classes}>
                    {inner}
                  </Link>
                ) : (
                  <span key={service.slug} className={classes}>
                    {inner}
                  </span>
                );
              })}
            </div>
          </div>

          <aside className="rounded-2xl bg-navy p-6 text-white shadow-card sm:p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
              <IconMapPin className="h-5 w-5" />
            </span>
            <p className="eyebrow-light mt-6">{t.about.coverageEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
              {t.about.coverageTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/75">{t.about.coverageBody}</p>
            <div className="mt-6 space-y-3">
              <RegionLink
                href={contentHref("areaRegion", "kuala-lumpur", code)}
                label={t.about.kualaLumpurLink}
              />
              <RegionLink
                href={contentHref("areaRegion", "selangor", code)}
                label={t.about.selangorLink}
              />
              <RegionLink
                href={localizedHref("/areas", code)}
                label={t.about.allAreasLink}
              />
            </div>
          </aside>
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
              <p className="eyebrow-light">{t.about.ctaEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.about.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                {t.about.ctaDescription}
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
                  href={localizedHref("/contact", code)}
                  className="btn btn-secondary"
                >
                  {t.about.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RegionLink({ href, label }: { href: string | null; label: string }) {
  if (!href) {
    return (
      <p className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
        {label}
      </p>
    );
  }

  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {label}
      <IconArrowRight className="h-4 w-4 text-accent" />
    </Link>
  );
}
