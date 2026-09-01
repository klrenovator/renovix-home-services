import { getPhoneHref, siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";

/**
 * The one-line "Call or WhatsApp: +601159259521" note under a CTA block.
 * The number is a live `tel:` link so a phone user can dial from any page.
 */
export function ContactCtaLine({
  lang,
  inverse = false,
}: {
  lang: string;
  inverse?: boolean;
}) {
  const t = getDictionary(lang);

  return (
    <p className={`mt-5 text-xs ${inverse ? "text-white/60" : "text-secondary"}`}>
      {t.common.callOrWhatsApp}:{" "}
      <a
        href={getPhoneHref()}
        className={`font-semibold underline underline-offset-2 ${
          inverse ? "text-white/85 hover:text-white" : "text-brand hover:text-navy"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
      >
        {siteConfig.phone}
      </a>
    </p>
  );
}
