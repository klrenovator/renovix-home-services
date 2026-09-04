import Link from "next/link";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AreasSection } from "@/components/service/AreasSection";
import { IconArrowRight, IconCheck, IconClose, IconPhone } from "@/components/icons";
import { getPhoneHref, getWhatsAppHref } from "@/data/site";
import { getDictionary, format } from "@/i18n";
import { localizedHref, contentHref } from "@/i18n/hrefs";
import { getPricingDisclaimer } from "@/data/pricing";
import { getProblemsBySlugs } from "@/data/problem-content";
import type { ProblemDetail } from "@/data/problem-content/types";
import { getSubServicesByService, formatSubServicePrice, type ResolvedSubService } from "@/data/sub-services";
import { getPublishedProjects, getProjectContent } from "@/data/project-content";
import { projectCategories } from "@/data/projects";
import { GuideLinksSection } from "@/components/blog/GuideLinksSection";
import { getArticlesForSubService } from "@/data/blog";

type SubServicePageProps = {
  detail: ResolvedSubService;
  lang: string;
};

function relatedProblemsFor(detail: ResolvedSubService, lang: string): ProblemDetail[] {
  return getProblemsBySlugs(detail.relatedProblems, lang);
}

/** Project category ids that map to a service slug, e.g. tiling -> tiling. */
function serviceProjectCategoryIds(serviceSlug: string): string[] {
  return projectCategories
    .filter((category) => category.servicePath === `/services/${serviceSlug}`)
    .map((category) => category.id);
}

export function SubServicePage({ detail, lang }: SubServicePageProps) {
  const t = getDictionary(lang);
  const text = detail.text;
  const name = text.name;
  const serviceSlug = detail.serviceSlug;
  const service = detail.service;

  const siblingSubs = getSubServicesByService(serviceSlug).filter(
    (item) => item.slug !== detail.slug,
  );
  const relatedProblems = relatedProblemsFor(detail, lang);
  const priceLabel = formatSubServicePrice(detail.definition, lang);

  const projectCategoryIds = new Set(serviceProjectCategoryIds(serviceSlug));
  const serviceProjects = getPublishedProjects().filter((project) =>
    projectCategoryIds.has(project.category),
  );

  const serviceHref = localizedHref(`/services/${serviceSlug}`, lang);
  const heroIntro = text.lead;
  const includes = text.includes;
  const excludes = text.excludes;
  const costFactors = text.costFactors;
  const materials = text.materials;
  const process = text.process;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/10" />
        <div className="container-app relative py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            inverse
            items={[
              { label: t.common.home, href: "/" },
              { label: t.servicePage.breadcrumbServices, href: "/services" },
              { label: service?.name ?? serviceSlug, href: `/services/${serviceSlug}` },
              { label: name },
            ]}
            lang={lang}
          />
          <p className="eyebrow-light mt-6">{service?.name ?? name}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {text.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">{heroIntro}</p>
          {priceLabel ? (
            <p className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              {priceLabel}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={localizedHref("/quote", lang)} variant="primary" icon={<IconArrowRight className="h-4 w-4" />}>
              {t.cta.getFreeQuote}
            </Button>
            <WhatsAppButton href={getWhatsAppHref()} variant="secondary" label={t.cta.whatsappUs} />
            <Button href={getPhoneHref()} variant="outline" external className="border-white/40 text-white hover:bg-white/10" icon={<IconPhone className="h-4 w-4" />}>
              {t.cta.callNow}
            </Button>
          </div>
        </div>
      </section>

      {/* When it is suitable */}
      <section className="section section-surface">
        <div className="container-app">
          <SectionHeading
            eyebrow={t.subServicePage.suitableEyebrow}
            title={format(t.subServicePage.suitableTitle, { name })}
            description=""
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {text.suitableFor.map((item) => (
              <li key={item} className="card flex gap-3 p-6">
                <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm leading-6 text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Includes / excludes */}
      {(includes.length > 0 || excludes.length > 0) && (
        <section className="section bg-white">
          <div className="container-app grid gap-6 lg:grid-cols-2">
            {includes.length > 0 && (
              <article className="card p-6 sm:p-7">
                <SectionHeading eyebrow={t.subServicePage.includedEyebrow} title={format(t.subServicePage.includedTitle, { name })} description="" />
                <ul className="mt-6 space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-secondary">
                      <IconCheck className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
            {excludes.length > 0 && (
              <article className="card p-6 sm:p-7">
                <SectionHeading eyebrow={t.subServicePage.includedEyebrow} title={format(t.subServicePage.excludedTitle, { name })} description="" />
                <ul className="mt-6 space-y-3">
                  {excludes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-secondary">
                      <IconClose className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        </section>
      )}

      {/* Pricing */}
      {detail.pricing ? (
        <section className="section section-surface">
          <div className="container-app">
            <SectionHeading eyebrow={t.servicePage.pricingEyebrow} title={format(t.servicePage.pricingTitle, { name })} description={t.servicePage.pricingDescription} />
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-navy">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">{detail.pricing.scope}</p>
                  {detail.pricing.duration ? (
                    <p className="mt-3 text-sm text-secondary">
                      <span className="font-semibold text-navy">{t.servicePage.durationEyebrow}: </span>
                      {detail.pricing.duration}
                    </p>
                  ) : null}
                </div>
                {priceLabel ? (
                  <div className="shrink-0 rounded-xl bg-brand/10 px-4 py-3 text-brand">
                    <p className="text-sm font-semibold">{priceLabel}</p>
                  </div>
                ) : null}
              </div>
              <p className="mt-5 text-xs leading-5 text-secondary">{getPricingDisclaimer(lang)}</p>
            </div>
          </div>
        </section>
      ) : null}

      {/* Cost factors */}
      {costFactors && costFactors.length > 0 && (
        <section className="section section-surface">
          <div className="container-app">
            <SectionHeading eyebrow={t.servicePage.costFactorsEyebrow} title={format(t.servicePage.costFactorsTitle, { name })} description={t.servicePage.costFactorsDescription} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {costFactors.map((factor) => (
                <article key={factor.title} className="card p-6">
                  <h3 className="h3-card">{factor.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">{factor.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materials */}
      {materials && materials.length > 0 && (
        <section className="section bg-white">
          <div className="container-app">
            <SectionHeading eyebrow={t.servicePage.materialsEyebrow} title={format(t.servicePage.materialsTitle, { name })} description={t.servicePage.materialsDescription} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {materials.map((material) => (
                <article key={material.title} className="card p-6">
                  <h3 className="h3-card">{material.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">{material.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {process && process.length > 0 && (
        <section className="section section-surface">
          <div className="container-app">
            <SectionHeading eyebrow={t.servicePage.processEyebrow} title={format(t.subServicePage.processTitle, { name })} description="" />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {process.map((step, index) => (
                <article key={step.title} className="card p-6">
                  <span className="text-2xl font-extrabold text-brand/30">0{index + 1}</span>
                  <h3 className="mt-3 h3-card">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {text.faqs.length > 0 && (
        <section className="section bg-white">
          <div className="container-app grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow={t.servicePage.faqsEyebrow} title={format(t.servicePage.faqsTitle, { name })} description={t.servicePage.faqsDescription} />
            </div>
            <div className="space-y-3">
              {text.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-base">
                    {faq.question}
                    <span className="text-brand">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-secondary">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related problems */}
      {relatedProblems.length > 0 && (
        <section className="section section-surface">
          <div className="container-app">
            <SectionHeading eyebrow={t.servicePage.problemsEyebrow} title={t.servicePage.relatedProblemsTitle} description="" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProblems.map((problem) => {
                const href = contentHref("problem", problem.slug, lang);
                return (
                  <Link key={problem.slug} href={href ?? "#"} className="card card-hover group flex h-full flex-col p-6" aria-disabled={!href}>
                    <h3 className="text-base font-semibold tracking-tight text-navy">{problem.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-secondary">{problem.subtitle}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      {t.cta.viewProblem}
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {serviceProjects.length > 0 && (
        <section className="section bg-white">
          <div className="container-app">
            <SectionHeading eyebrow={t.subServicePage.projectEyebrow} title={format(t.subServicePage.projectTitle, { service: service?.name ?? name })} description={format(t.subServicePage.projectDescription, { service: service?.name ?? name })} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceProjects.map((project) => {
                const href = contentHref("project", project.slug, lang);
                return (
                  <Link key={project.slug} href={href ?? "#"} className="card card-hover group flex h-full flex-col p-6" aria-disabled={!href}>
                    <h3 className="text-base font-semibold tracking-tight text-navy">{getProjectContent(project.slug, lang).title}</h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      {t.projects.viewProject}
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Sibling sub-services + back to service */}
      <section className="section section-surface">
        <div className="container-app">
          <SectionHeading eyebrow={t.servicePage.subServicesEyebrow} title={format(t.subServicePage.relatedSubTitle, { service: service?.name ?? name })} description="" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblingSubs.map((sub) => {
              const code = lang === "ms" || lang === "zh" ? lang : "en";
              const subText = sub[code];
              const href = localizedHref(`/services/${serviceSlug}/${sub.slug}`, lang);
              return (
                <Link key={sub.slug} href={href} className="card card-hover group flex h-full flex-col p-6">
                  <h3 className="text-base font-semibold tracking-tight text-navy">{subText.name ?? sub.slug}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    {t.cta.viewService}
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
          {serviceHref ? (
            <p className="mt-8">
              <Link href={serviceHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                <IconArrowRight className="h-4 w-4" />
                {format(t.subServicePage.backToService, { service: service?.name ?? name })}
              </Link>
            </p>
          ) : null}
        </div>
      </section>

      <GuideLinksSection
        articles={getArticlesForSubService(detail.slug)}
        scope="subService"
        name={name}
        lang={lang}
      />

      <AreasSection areasNote={service?.areasNote ?? text.lead} lang={lang} />

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20" />
            <div aria-hidden className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20" />
            <div className="relative max-w-2xl">
              <p className="eyebrow-light">{t.common.freeQuoteEyebrow}</p>
              <h2 className="h2-section mt-3 text-white">{format(t.subServicePage.ctaHeading, { name })}</h2>
              <p className="mt-4 text-base leading-7 text-white/75">{t.servicePage.ctaDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={localizedHref("/quote", lang)} variant="primary" icon={<IconArrowRight className="h-4 w-4" />}>
                  {t.cta.requestQuote}
                </Button>
                <WhatsAppButton href={getWhatsAppHref()} variant="secondary" label={t.cta.whatsappUs} />
                <Button href={getPhoneHref()} variant="outline" external className="border-white/40 text-white hover:bg-white/10" icon={<IconPhone className="h-4 w-4" />}>
                  {t.cta.callNow}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
