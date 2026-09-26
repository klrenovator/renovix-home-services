import { TrackedLink } from "@/components/analytics/TrackedLink";
import { IconWhatsApp } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { format, getDictionary, type Dictionary } from "@/i18n";
import { buildWhatsAppHref } from "@/lib/whatsapp";

/**
 * Lead-generation Task 1.1 — floating WhatsApp CTA.
 *
 * A persistent, fixed-position WhatsApp action in the bottom-right corner of
 * every commercial page (services, sub-services, problems, areas, region hubs,
 * the Knowledge Hub, the home page and the index/support pages). In Malaysia
 * most contractor enquiries start as a WhatsApp message, so the action must
 * never require scrolling back to the header; the button is deliberately
 * compact (44 px tall, the WCAG 2.5.5 target minimum) so it sits in the corner
 * without covering the content a visitor is reading.
 *
 * Design rules this component keeps:
 *
 * - **No client-side state.** The button is server-rendered; only the shared
 *   `TrackedLink` leaf hydrates, so the CTA adds no layout JavaScript and no
 *   hydration work of its own.
 * - **One contact system.** The number comes from `data/site.ts` through
 *   `buildWhatsAppHref`, exactly like every other WhatsApp CTA on the site.
 * - **Localized, context-aware pre-fill.** The first message is composed from
 *   the page's own registry name in the page's own language (a service, a
 *   sub-service, a problem, an area, a guide or a project) using dictionary
 *   templates — never a slug, and never English copy on a `/ms/` or `/zh/`
 *   page.
 * - **Accessible.** The control is a real link with a visible localized label
 *   (so its accessible name matches the visible text, WCAG 2.5.3), a visible
 *   focus ring, and a decorative icon that is hidden from assistive tech.
 * - **Non-intrusive.** It is positioned above page content but below the
 *   sticky header (`z-40`) and the mobile menu / search overlays (`z-50`), it
 *   never blocks the header, and it is hidden from print.
 * - **Counted.** Every click fires the `whatsapp_click` conversion event with
 *   a coarse page-family surface (`floating_whatsapp_*`) and, where the page
 *   has them, the registry slugs of the service and sub-service — no customer
 *   data (see `lib/analytics.ts`).
 *
 * The quote page renders its own dedicated WhatsApp quick path (and, from
 * Task 1.2, the form-aware direct route), so it does not render this button —
 * one conversion path per page, not two competing ones. Legal pages
 * (privacy/terms) do not render it either.
 */

/** Page families the pre-filled message is written for. */
export type WhatsAppSubjectKind =
  | "service"
  | "subservice"
  | "problem"
  | "area"
  | "guide"
  | "project";

/**
 * The page's own entity, already localized by the caller. `label` is always a
 * registry name (never a slug); a sub-service also carries its parent service
 * so the message can say which service the scope belongs to.
 */
export type WhatsAppSubject =
  | { kind: "service"; label: string }
  | { kind: "subservice"; label: string; parent: string }
  | { kind: "problem"; label: string }
  | { kind: "area"; label: string }
  | { kind: "guide"; label: string }
  | { kind: "project"; label: string };

type FloatingWhatsAppProps = {
  lang: string;
  /** Omit on index/support pages: the generic message is used. */
  subject?: WhatsAppSubject;
  /** Registry slug of the page's service, for the conversion event only. */
  service?: string;
  /** Registry slug of the page's sub-service, for the conversion event only. */
  subservice?: string;
};

/**
 * Picks the pre-fill template for the page family. Every template is a plain
 * dictionary string with `{name}` (and, for sub-services, `{service}`) slots so
 * each language keeps its own word order.
 */
function prefillMessage(
  copy: Dictionary["whatsapp"],
  subject: WhatsAppSubject | undefined,
): string {
  if (!subject) {
    return copy.prefillGeneral;
  }

  switch (subject.kind) {
    case "service":
      return format(copy.prefillService, { name: subject.label });
    case "subservice":
      return format(copy.prefillSubService, {
        name: subject.label,
        service: subject.parent,
      });
    case "problem":
      return format(copy.prefillProblem, { name: subject.label });
    case "area":
      return format(copy.prefillArea, { name: subject.label });
    case "guide":
      return format(copy.prefillGuide, { name: subject.label });
    case "project":
      return format(copy.prefillProject, { name: subject.label });
  }
}

export function FloatingWhatsApp({
  lang,
  subject,
  service,
  subservice,
}: FloatingWhatsAppProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const message = prefillMessage(t.whatsapp, subject);

  return (
    <div className="floating-whatsapp print:hidden">
      <TrackedLink
        href={buildWhatsAppHref(message)}
        event="whatsapp_click"
        context={{
          surface: `floating_whatsapp_${subject?.kind ?? "general"}`,
          lang: code,
          service,
          subservice,
        }}
        className="btn btn-whatsapp shadow-card"
      >
        <IconWhatsApp className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{t.cta.whatsappUs}</span>
      </TrackedLink>
    </div>
  );
}
