import Link from "next/link";
import { serviceIcons, IconArrowRight } from "@/components/icons";
import type { ServiceCategory } from "@/data/services";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";

type ServiceCardProps = {
  service: ServiceCategory;
  lang: string;
};

/**
 * A service category card. When the service page has no complete translation in
 * the current language the card renders without a link, so the page never links
 * to a route that would 404 or serve English copy.
 */
export function ServiceCard({ service, lang }: ServiceCardProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const Icon = serviceIcons[service.icon];
  const href = contentHref("service", service.slug, code);

  const classes =
    "card card-hover group flex h-full flex-col p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-6";

  const content = (
    <>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="h3-card mt-4">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
        {service.shortDescription}
      </p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          {t.cta.viewService}
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      ) : null}
    </>
  );

  if (!href) {
    return <article className={classes}>{content}</article>;
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
