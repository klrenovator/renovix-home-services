import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { getWhatsAppHref } from "@/data/site";
import { localizeHref } from "@/data/navigation";
import { getProblemCategory } from "@/data/problem-content";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemHeroProps = {
  problem: ProblemDetail;
  lang: string;
};

export function ProblemHero({ problem, lang }: ProblemHeroProps) {
  const category = getProblemCategory(problem.category);

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
            { label: "Home", href: "/" },
            { label: "Problems", href: "/problems" },
            { label: problem.name },
          ]}
          lang={lang}
        />

        <p className="eyebrow-light">{category?.label ?? "Home Problem"}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {problem.h1}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-white/80">
          {problem.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={localizeHref("/#contact", lang)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            Get a Free Quote
          </Button>
          <WhatsAppButton href={getWhatsAppHref(lang)} variant="secondary" />
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          <li className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            <IconMapPin className="h-3.5 w-3.5 text-accent" />
            Kuala Lumpur &amp; Selangor
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            {problem.name}
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            Free Quotation
          </li>
        </ul>
      </div>
    </section>
  );
}
