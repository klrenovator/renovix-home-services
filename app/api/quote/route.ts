import { getClientIp, rateLimit } from "@/lib/quote/rate-limit";
import { isAllowedOrigin } from "@/lib/quote/origin";
import { getEmailConfig, sendQuoteNotification } from "@/lib/quote/email";
import { parseQuotePayload } from "@/lib/quote/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type QuoteResponseBody =
  | { ok: true }
  | { ok: false; error: "validation"; fields: string[] }
  | { ok: false; error: "unavailable" | "rate_limited" | "forbidden" | "invalid_payload" };

function json(body: QuoteResponseBody, status: number, extraHeaders?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request.headers.get("origin"), request.url)) {
      return json({ ok: false, error: "forbidden" }, 403);
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: "invalid_payload" }, 400);
    }

    const parsed = parseQuotePayload(body);

    if (!parsed.ok) {
      if (parsed.reason === "spam") {
        // Ignore the submission without revealing that it was flagged.
        // No email is sent.
        return json({ ok: true }, 200);
      }

      return json(
        { ok: false, error: "validation", fields: Object.keys(parsed.fields) },
        400,
      );
    }

    const limited = rateLimit(`quote:${getClientIp(request)}`);

    if (!limited.ok) {
      return json({ ok: false, error: "rate_limited" }, 429, {
        "Retry-After": String(limited.retryAfterSec),
      });
    }

    const config = getEmailConfig();

    if (!config) {
      console.error("[quote] email provider is not configured");
      return json({ ok: false, error: "unavailable" }, 503);
    }

    const sent = await sendQuoteNotification(parsed.data, config);

    if (!sent.ok) {
      console.error("[quote] email delivery failed", sent.code);
      return json({ ok: false, error: "unavailable" }, 503);
    }

    return json({ ok: true }, 200);
  } catch {
    console.error("[quote] unexpected server error");
    return json({ ok: false, error: "unavailable" }, 500);
  }
}
