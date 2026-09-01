import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrowRight,
  IconCalendar,
  IconChat,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/icons";
import { PageSchema } from "@/components/seo/PageSchema";
import { PageHero } from "@/components/support/PageHero";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import {
  getEmailHref,
  getPhoneHref,
  getQuoteHref,
  getWhatsAppHref,
  siteConfig,
} from "@/data/site";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

type ContactPageProps = {
  params: Promise<{ lang: string }>;
};

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
  helper: string;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/contact/",
    title: t.contact.metaTitle,
    description: t.contact.metaDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);
  const channels = t.contact.channels;

  const contactDetails: ContactDetail[] = [
    {
      label: channels.phone,
      value: siteConfig.phone,
      href: getPhoneHref(),
      icon: <IconPhone className="h-5 w-5" />,
      helper: channels.phoneHelper,
    },
    {
      label: channels.whatsapp,
      value: siteConfig.whatsapp,
      href: getWhatsAppHref(),
      icon: <IconWhatsApp className="h-5 w-5" />,
      helper: channels.whatsappHelper,
    },
    {
      label: channels.email,
      value: siteConfig.email,
      href: getEmailHref(),
      icon: <IconMail className="h-5 w-5" />,
      helper: channels.emailHelper,
    },
    {
      label: channels.address,
      value: siteConfig.address.full,
      icon: <IconMapPin className="h-5 w-5" />,
      helper: channels.addressHelper,
    },
    {
      label: channels.hours,
      value: t.common.businessHours,
      icon: <IconCalendar className="h-5 w-5" />,
      helper: channels.hoursHelper,
    },
  ];

  return (
    <>
      <PageSchema
        lang={code}
        path="/contact/"
        name={t.contact.title}
        description={t.contact.metaDescription}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.contact.breadcrumb },
        ]}
      />
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
        currentLabel={t.contact.breadcrumb}
        lang={code}
        primaryLabel={t.contact.heroPrimary}
      />

      <section id="contact" className="section section-surface scroll-mt-24">
        <div className="container-app">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.contact.detailsEyebrow}</p>
            <h2 className="h2-section mt-3 text-navy">{t.contact.detailsTitle}</h2>
            <p className="lead mt-4">{t.contact.detailsLead}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactDetails.map((detail) => (
              <ContactDetailCard key={detail.label} detail={detail} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-app grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-surface p-6 sm:p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <IconChat className="h-5 w-5" />
            </span>
            <p className="eyebrow mt-6">{t.contact.ctaEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
              {t.contact.ctaTitle}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-secondary">
              {t.contact.ctaBody}
            </p>
            <div className="mt-6">
              <Button
                href={getQuoteHref(code)}
                variant="primary"
                icon={<IconArrowRight className="h-4 w-4" />}
              >
                {t.cta.getQuote}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-navy p-6 text-white shadow-card sm:p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
              <IconWhatsApp className="h-5 w-5" />
            </span>
            <p className="eyebrow-light mt-6">{t.contact.whatsappEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
              {t.contact.whatsappTitle}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
              {t.contact.whatsappBody}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton
                href={getWhatsAppHref()}
                variant="primary"
                label={t.cta.whatsappUs}
              />
              <Button
                href={getPhoneHref()}
                variant="outline"
                external
                className="border-white/40 text-white hover:bg-white/10"
                icon={<IconPhone className="h-4 w-4" />}
              >
                {t.cta.callNow}
              </Button>
              <Button
                href={getEmailHref()}
                variant="outline"
                external
                className="border-white/40 text-white hover:bg-white/10"
                icon={<IconMail className="h-4 w-4" />}
              >
                {t.cta.emailUs}
              </Button>
            </div>
            <p className="mt-4 text-xs font-medium text-white/60">
              {t.contact.whatsappNote} {siteConfig.whatsapp}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">{t.contact.areasEyebrow}</p>
            <h2 className="h2-section mt-3 text-navy">{t.contact.areasTitle}</h2>
            <p className="lead mt-4">{t.contact.areasLead}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <AreaLink
              href={contentHref("areaRegion", "kuala-lumpur", code)}
              label={t.common.kualaLumpur}
              description={t.contact.kualaLumpurDescription}
              cta={t.cta.viewAreas}
            />
            <AreaLink
              href={contentHref("areaRegion", "selangor", code)}
              label={t.common.selangor}
              description={t.contact.selangorDescription}
              cta={t.cta.viewAreas}
            />
            <AreaLink
              href={localizedHref("/areas", code)}
              label={t.common.klangValley}
              description={t.contact.klangValleyDescription}
              cta={t.cta.viewAreas}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactDetailCard({ detail }: { detail: ContactDetail }) {
  return (
    <article className="card flex h-full flex-col p-5 sm:p-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
        {detail.icon}
      </span>
      <h3 className="mt-4 text-base font-semibold text-navy">{detail.label}</h3>
      {detail.href ? (
        <a
          href={detail.href}
          className="mt-2 break-all text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {detail.value}
        </a>
      ) : (
        <p className="mt-2 break-all text-sm font-semibold text-navy">{detail.value}</p>
      )}
      <p className="mt-3 text-sm leading-6 text-secondary">{detail.helper}</p>
    </article>
  );
}

function AreaLink({
  href,
  label,
  description,
  cta,
}: {
  href: string | null;
  label: string;
  description: string;
  cta: string;
}) {
  const inner = (
    <>
      <IconMapPin className="h-5 w-5 text-brand" />
      <h3 className="mt-4 text-base font-semibold text-navy">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-secondary">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        {cta}
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );

  const classes =
    "group rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  if (!href) {
    return <div className={classes}>{inner}</div>;
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
