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
import { PageHero } from "@/components/support/PageHero";
import { PageBreadcrumbJsonLd } from "@/components/support/PageBreadcrumbJsonLd";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { getLanguage, languages } from "@/data/languages";
import { localizeHref } from "@/data/navigation";
import {
  getEmailHref,
  getPhoneHref,
  getQuoteHref,
  getWhatsAppHref,
  isPlaceholder,
  siteConfig,
} from "@/data/site";

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

  const canonicalUrl = `${siteConfig.url}/${lang}/contact/`;
  const title = "Contact Renovix Home Services | KL & Selangor";
  const description =
    "Contact Renovix Home Services about renovation, repairs and home improvement work in Kuala Lumpur, Selangor and the Klang Valley, or start a quote request.";

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

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  const contactDetails: ContactDetail[] = [
    {
      label: "Phone Number",
      value: siteConfig.phone,
      href: getPhoneHref(lang),
      icon: <IconPhone className="h-5 w-5" />,
      helper: "Call details will be added when the phone number is confirmed.",
    },
    {
      label: "WhatsApp Number",
      value: siteConfig.whatsapp,
      href: getWhatsAppHref(lang),
      icon: <IconWhatsApp className="h-5 w-5" />,
      helper: "WhatsApp details will be added when the number is confirmed.",
    },
    {
      label: "Email",
      value: siteConfig.email,
      href: getEmailHref(lang),
      icon: <IconMail className="h-5 w-5" />,
      helper: "Email details will be added when the address is confirmed.",
    },
    {
      label: "Address",
      value: siteConfig.address,
      icon: <IconMapPin className="h-5 w-5" />,
      helper: "Service coverage is listed below; a physical address has not been supplied.",
    },
    {
      label: "Business Hours",
      value: siteConfig.businessHours,
      icon: <IconCalendar className="h-5 w-5" />,
      helper: "Business hours will be added when they are confirmed.",
    },
  ];

  return (
    <>
      <PageBreadcrumbJsonLd lang={lang} label="Contact" path="/contact/" />
      <PageHero
        eyebrow="Contact Renovix"
        title="Let’s start with your home service question"
        description="Use the contact details below, send a WhatsApp once the number is available, or share the scope through a quote request for work in Kuala Lumpur, Selangor and the Klang Valley."
        currentLabel="Contact"
        lang={lang}
        primaryLabel="Start a Quote Request"
      />

      <section id="contact" className="section section-surface scroll-mt-24">
        <div className="container-app">
          <div className="max-w-2xl">
            <p className="eyebrow">Contact details</p>
            <h2 className="h2-section mt-3 text-navy">Ways to get in touch</h2>
            <p className="lead mt-4">
              Contact information has intentionally been left as placeholders until
              the official details are supplied. No phone number, email, address or
              operating hours have been assumed.
            </p>
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
            <p className="eyebrow mt-6">Contact CTA</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
              Share the work you need
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-secondary">
              A quote request is the clearest place to share the service, property,
              location and a short description. Photos can help with the assessment.
            </p>
            <div className="mt-6">
              <Button
                href={getQuoteHref(lang)}
                variant="primary"
                icon={<IconArrowRight className="h-4 w-4" />}
              >
                Get a Quote
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-navy p-6 text-white shadow-card sm:p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent">
              <IconWhatsApp className="h-5 w-5" />
            </span>
            <p className="eyebrow-light mt-6">WhatsApp CTA</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Prefer to use WhatsApp?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
              The WhatsApp contact route will activate when an official number is
              supplied. Until then, the button leads back to this contact page rather
              than attempting to open an unverified number.
            </p>
            <div className="mt-6">
              <WhatsAppButton href={getWhatsAppHref(lang)} variant="primary" />
            </div>
            <p className="mt-4 text-xs font-medium text-white/60">
              WhatsApp placeholder: {siteConfig.whatsapp}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">Service area information</p>
            <h2 className="h2-section mt-3 text-navy">
              Kuala Lumpur, Selangor &amp; the Klang Valley
            </h2>
            <p className="lead mt-4">
              Renovix&apos;s stated coverage includes Kuala Lumpur, Selangor and the wider
              Klang Valley. Please include your area or neighbourhood in the enquiry
              so the work can be considered in context.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <AreaLink
              href={localizeHref("/areas/kuala-lumpur", lang)}
              label="Kuala Lumpur"
              description="City and neighbourhood guidance"
            />
            <AreaLink
              href={localizeHref("/areas/selangor", lang)}
              label="Selangor"
              description="State and town guidance"
            />
            <AreaLink
              href={localizeHref("/areas", lang)}
              label="Klang Valley"
              description="Explore all service areas"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactDetailCard({ detail }: { detail: ContactDetail }) {
  const hasConfirmedValue = !isPlaceholder(detail.value);

  return (
    <article className="card flex h-full flex-col p-5 sm:p-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
        {detail.icon}
      </span>
      <h3 className="mt-4 text-base font-semibold text-navy">{detail.label}</h3>
      {hasConfirmedValue && detail.href ? (
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
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <IconMapPin className="h-5 w-5 text-brand" />
      <h3 className="mt-4 text-base font-semibold text-navy">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-secondary">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        View areas
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
