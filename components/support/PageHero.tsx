import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getQuoteHref, getWhatsAppHref } from "@/data/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  currentLabel: string;
  lang: string;
  primaryLabel?: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  currentLabel,
  lang,
  primaryLabel = "Get a Quote",
  primaryHref,
  showWhatsApp = true,
}: PageHeroProps) {
  const quoteHref = primaryHref ?? getQuoteHref(lang);

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-accent/10"
      />
      <div className="container-app relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs
          inverse
          items={[{ label: "Home", href: "/" }, { label: currentLabel }]}
          lang={lang}
        />
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={quoteHref}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            {primaryLabel}
          </Button>
          {showWhatsApp ? (
            <WhatsAppButton href={getWhatsAppHref(lang)} variant="secondary" />
          ) : null}
        </div>
      </div>
    </section>
  );
}
