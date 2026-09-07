import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getDictionary, format } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import {
  formatPricingAmount,
  getPricingDisclaimer,
  getServicePricingHeadline,
  getStartingPriceForService,
} from "@/data/pricing";
import type { ServiceDetail } from "@/data/service-content/types";

type StartingPricesSectionProps = {
  detail: ServiceDetail;
  related: ServiceDetail[];
  lang: string;
};

/**
 * Top-of-page price answer: the current service's starting price in a bold
 * summary card, followed by compact starting-price cards for related
 * services. Every number comes from the pricing catalogue — nothing is
 * invented here. Services without catalogue data show an "on quotation"
 * label instead of a figure.
 */
export function StartingPricesSection({
  detail,
  related,
  lang,
}: StartingPricesSectionProps) {
  const t = getDictionary(lang);

  const headline = getServicePricingHeadline(detail.slug, lang);
  const startingPrice = getStartingPriceForService(detail.slug);
  const disclaimer = getPricingDisclaimer(lang);
  const pricingHref = contentHref("service", detail.slug, lang);

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.startingPricesEyebrow}
          title={format(t.servicePage.startingPricesTitle, { name: detail.name })}
          description={t.servicePage.startingPricesDescription}
        />

        {/* Current service — bold starting-price answer */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-surface">
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-sm font-medium text-secondary">
                {format(t.servicePage.startingPricesThisService, { name: detail.name })}
              </p>
              {startingPrice !== undefined ? (
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                  {t.servicePage.startingFrom} RM{formatPricingAmount(startingPrice)}
                </p>
              ) : (
                <p className="mt-2 text-2xl font-bold tracking-tight text-navy">
                  {t.servicePage.startingPricesOnQuotation}
                </p>
              )}
              {headline ? (
                <p className="mt-2 text-sm text-secondary">{headline}</p>
              ) : null}
            </div>
            {pricingHref ? (
              <Link
                href={`${pricingHref}#pricing`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
              >
                {t.servicePage.startingPricesViewDetails}
                <IconArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
          <p className="border-t border-slate-200 bg-white px-6 py-4 text-xs leading-5 text-secondary sm:px-8">
            {disclaimer}
          </p>
        </div>

        {/* Related services — starting prices */}
        {related.length > 0 ? (
          <div className="mt-10">
            <h3 className="text-base font-semibold text-navy">
              {t.servicePage.startingPricesRelatedTitle}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((service) => {
                const price = getStartingPriceForService(service.slug);
                const href = contentHref("service", service.slug, lang);

                const inner = (
                  <>
                    <h4 className="text-sm font-semibold leading-6 text-navy">
                      {service.name}
                    </h4>
                    {price !== undefined ? (
                      <p className="mt-3 text-lg font-extrabold text-brand">
                        {t.servicePage.startingFrom}{" "}
                        RM{formatPricingAmount(price)}
                      </p>
                    ) : (
                      <p className="mt-3 text-sm font-semibold text-secondary">
                        {t.servicePage.startingPricesOnQuotation}
                      </p>
                    )}
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      {t.cta.viewService}
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </>
                );

                const classes =
                  "card card-hover group flex h-full flex-col p-5";

                return href ? (
                  <Link key={service.slug} href={href} className={classes}>
                    {inner}
                  </Link>
                ) : (
                  <div key={service.slug} className={classes}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
