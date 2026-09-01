import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconMapPin, IconPhone } from "@/components/icons";
import { getPhoneHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { getProblemCategories } from "@/data/i18n";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemHeroProps = {
  problem: ProblemDetail;
  lang: string;
};

export function ProblemHero({ problem, lang }: ProblemHeroProps) {
  const t = getDictionary(lang);
  const category = getProblemCategories(lang).find(
    (item) => item.id === problem.category,
  );

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/10"
      />

      <div className="container-app relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs
          inverse
          items={[
            { label: t.common.home, href: "/" },
            { label: t.problemPage.breadcrumbProblems, href: "/problems" },
            { label: problem.name },
          ]}
          lang={lang}
        />

        <p className="eyebrow-light">
          {category?.label ?? t.problemPage.heroCategoryFallback}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {problem.h1}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/80">
          {problem.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href={localizedHref("/quote", lang)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            {t.cta.getFreeQuote}
          </Button>
          <WhatsAppButton href={getWhatsAppHref()} variant="secondary" label={t.cta.whatsappUs} />
          <Button
            href={getPhoneHref()}
            variant="outline"
            external
            className="border-white/40 text-white hover:bg-white/10"
            icon={<IconPhone className="h-4 w-4" />}
          >
            {t.cta.callNow}
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          <li className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            <IconMapPin className="h-3.5 w-3.5 text-accent" />
            {t.common.klSelangor}
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            {problem.name}
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            {t.common.freeQuotation}
          </li>
        </ul>
      </div>
    </section>
  );
}
