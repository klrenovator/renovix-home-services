import { siteConfig } from "@/data/site";
import { isValidEmail, escapeHtml, localeLabel, type QuotePayload } from "./validation";
import type { PreferredContactMethod, QuoteLocale } from "./constants";

export type EmailConfig = {
  apiKey: string;
  to: string;
  from: string;
};

const CONTACT_METHOD_LABEL: Record<PreferredContactMethod, string> = {
  whatsapp: "WhatsApp",
  phone: "Phone",
  email: "Email",
};

function looksLikeFromAddress(value: string): boolean {
  const angled = value.match(/^(.+)<([^>]+)>$/);
  const email = (angled ? angled[2] : value).trim();
  return isValidEmail(email);
}

/**
 * Reads email-provider settings from the environment. Returns `null` when
 * live delivery cannot be attempted — the website itself still runs.
 *
 * Required:
 * - `RESEND_API_KEY`
 * - `QUOTE_FROM_EMAIL` (must be a domain verified in Resend)
 *
 * Optional:
 * - `QUOTE_NOTIFICATION_EMAIL` (defaults to the public business email)
 */
export function getEmailConfig(): EmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.QUOTE_FROM_EMAIL?.trim();

  if (!apiKey || !from || !looksLikeFromAddress(from)) {
    return null;
  }

  const configuredTo = process.env.QUOTE_NOTIFICATION_EMAIL?.trim();
  const to =
    configuredTo && isValidEmail(configuredTo) ? configuredTo : siteConfig.email;

  return { apiKey, to, from };
}

function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat("en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function dash(value: string): string {
  return value.trim().length > 0 ? value : "—";
}

function buildRows(payload: QuotePayload, submittedAt: string): { label: string; value: string }[] {
  return [
    { label: "Customer name", value: payload.name },
    { label: "Phone", value: payload.phone },
    { label: "Email", value: dash(payload.email) },
    { label: "Requested service", value: payload.serviceLabel },
    { label: "Sub-service", value: dash(payload.subServiceLabel) },
    { label: "Property type", value: payload.propertyTypeLabel },
    { label: "Location", value: payload.location },
    { label: "Preferred contact method", value: CONTACT_METHOD_LABEL[payload.preferredContact] },
    { label: "Preferred date", value: dash(payload.preferredDate) },
    { label: "Project details", value: payload.description },
    { label: "Website language", value: localeLabel(payload.locale as QuoteLocale) },
    { label: "Submitted", value: `${submittedAt} (Malaysia time)` },
  ];
}

export function buildQuoteEmail(payload: QuotePayload): { subject: string; text: string; html: string } {
  const submittedAt = formatSubmittedAt(new Date());
  const rows = buildRows(payload, submittedAt);
  const subject = `New Quote Request — ${payload.name} — ${payload.serviceLabel}`;

  const text = [
    "New Quote Request",
    "",
    `A customer submitted a quote request on ${siteConfig.url}.`,
    "",
    ...rows.map((row) => `${row.label}: ${row.value}`),
  ].join("\n");

  const htmlRows = rows
    .map((row) => {
      const value = escapeHtml(row.value).replace(/\n/g, "<br />");

      return `<tr>
  <th align="left" valign="top" style="padding:8px 12px 8px 0;color:#5b6573;font-weight:600;white-space:nowrap;">${escapeHtml(row.label)}</th>
  <td valign="top" style="padding:8px 0;color:#17212b;">${value}</td>
</tr>`;
    })
    .join("\n");

  const html = `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background:#f7f9fc;color:#17212b;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e8edf4;border-radius:12px;">
      <tr>
        <td style="padding:24px 28px 8px 28px;">
          <p style="margin:0 0 4px 0;color:#1769aa;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">Renovix Home Services</p>
          <h1 style="margin:0 0 12px 0;color:#0b1f33;font-size:22px;">New Quote Request</h1>
          <p style="margin:0 0 20px 0;color:#5b6573;">A customer submitted a quote request on ${escapeHtml(siteConfig.url)}.</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            ${htmlRows}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, text, html };
}

export type SendEmailResult = { ok: true } | { ok: false; code: string };

/**
 * Delivers the lead notification through Resend's HTTP API. Uses `fetch` so
 * the project does not need an extra runtime dependency.
 */
export async function sendQuoteNotification(
  payload: QuotePayload,
  config: EmailConfig,
): Promise<SendEmailResult> {
  const email = buildQuoteEmail(payload);
  const replyTo = payload.email && isValidEmail(payload.email) ? payload.email : undefined;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject: email.subject,
        html: email.html,
        text: email.text,
      }),
      signal: AbortSignal.timeout(12_000),
    });

    if (!response.ok) {
      return { ok: false, code: `resend_${response.status}` };
    }

    return { ok: true };
  } catch {
    return { ok: false, code: "network" };
  }
}
