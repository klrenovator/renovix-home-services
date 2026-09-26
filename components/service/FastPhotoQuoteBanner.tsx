import { TrackedLink } from "@/components/analytics/TrackedLink";
import { IconCamera, IconWhatsApp } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { format, getDictionary, type Dictionary } from "@/i18n";
import { buildWhatsAppHref } from "@/lib/whatsapp";

/**
 * Lead-generation Task 1.3 — "Fast Photo Quote" banner.
 *
 * Sits directly under the pricing table of every service pillar page and under
 * the price block of every sub-service page — the moment a customer has read
 * the price list and is deciding whether to ask. The banner invites them to
 * send photographs of the actual site on WhatsApp, because photographs let the
 * team confirm the scope before a quotation is prepared.
 *
 * Design rules this component keeps:
 *
 * - **No client-side state.** The banner is server-rendered; only the shared
 *   `TrackedLink` leaf hydrates, so the CTA adds no layout JavaScript and no
 *   hydration work of its own.
 * - **One contact system.** The link is composed by `buildWhatsAppHref` from
 *   the single number in `data/site.ts`, exactly like every other WhatsApp CTA
 *   on the site — never a hardcoded `wa.me` URL.
 * - **Localized, page-aware pre-fill.** The first message is written from the
 *   page's own registry name (the service or the sub-service plus its parent
 *   service) using the dictionary's `photoQuote` templates, so a `/ms/` or
 *   `/zh/` page never sends an English sentence. Labels are never slugs and
 *   never free text.
 * - **Honest copy.** Photographs are described as what they are — a way to
 *   assess the work — with no promised response time, no "instant" delivery
 *   claim and no invented scarcity.
 * - **Accessible.** A real link with a visible localized label, a visible focus
 *   ring through the shared `.btn` classes (44 px minimum target), and
 *   decorative icons hidden from assistive tech.
 * - **Counted.** Every click fires the `whatsapp_click` conversion event
 *   through `TrackedLink` with a coarse `photo_quote_banner_*` surface plus the
 *   page's registry slugs — no customer data, and the delegated listener cannot
 *   double-count it.
 */

/** The pricing page's own entity, already localized by the caller. */
export type PhotoQuoteSubject =
  | { kind: "service"; label: string }
  | { kind: "subservice"; label: string; parent: string };

type FastPhotoQuoteBannerProps = {
  lang: string;
  subject: PhotoQuoteSubject;
  /** Registry slug of the page's service, for the conversion event only. */
  service: string;
  /** Registry slug of the page's sub-service, for the conversion event only. */
  subservice?: string;
};

/**
 * Picks the pre-fill template for the page family. Both templates are plain
 * dictionary strings with `{name}` (and, for a sub-service, `{service}`) slots
 * so each language keeps its own word order.
 */
function photoQuoteMessage(
  copy: Dictionary["photoQuote"],
  subject: PhotoQuoteSubject,
): string {
  return subject.kind === "service"
    ? format(copy.prefillService, { name: subject.label })
    : format(copy.prefillSubService, {
        name: subject.label,
        service: subject.parent,
      });
}

export function FastPhotoQuoteBanner({
  lang,
  subject,
  service,
  subservice,
}: FastPhotoQuoteBannerProps) {
  const code = getLanguageCode(lang);
  const copy = getDictionary(code).photoQuote;
  const message = photoQuoteMessage(copy, subject);

  return (
    <div className="fast-photo-quote mt-10 rounded-2xl border border-brand/20 p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-soft"
            aria-hidden="true"
          >
            <IconCamera className="h-6 w-6" />
          </span>
          <div className="max-w-2xl">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h3 className="h3-card mt-2">{copy.title}</h3>
            <p className="mt-2 text-sm leading-6 text-secondary">
              {format(copy.body, { name: subject.label })}
            </p>
            <p className="mt-2 text-xs leading-5 text-secondary">{copy.hint}</p>
          </div>
        </div>
        <div className="shrink-0">
          <TrackedLink
            href={buildWhatsAppHref(message)}
            event="whatsapp_click"
            context={{
              surface: `photo_quote_banner_${subject.kind}`,
              lang: code,
              service,
              subservice,
            }}
            className="btn btn-whatsapp w-full shadow-soft sm:w-auto"
          >
            <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{copy.cta}</span>
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
