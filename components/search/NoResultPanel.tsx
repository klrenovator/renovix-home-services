/**
 * Smart Service Finder — NoResultPanel.
 *
 * Server component. Renders the "no results" / "weak results" fallback
 * when the matcher returns fewer than 3 strong hits. The panel:
 *   - states honestly that no match was found for the query
 *   - offers 3 popular services
 *   - offers "Browse all services" / "Browse all problems"
 *   - offers a pre-filled WhatsApp message
 *   - offers a "Get a free quote" CTA
 *   - shows the audit-disclosure line
 */

import Link from "next/link";
import { IconArrowRight, IconWhatsApp } from "@/components/icons";
import type { EmptyState } from "@/lib/search/empty-state";

export function NoResultPanel({ state }: { state: EmptyState }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-navy sm:text-2xl">{state.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{state.body}</p>

      {state.popularServices.length > 0 ? (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {state.popularServicesTitle}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {state.popularServices.map((svc) => (
              <li key={svc.href}>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand/30 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {svc.label}
                  <IconArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link
          href={state.browseServicesHref}
          className="btn btn-outline h-11 min-h-11 px-5 text-sm font-semibold"
        >
          {state.browseAllServices}
          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href={state.browseProblemsHref}
          className="btn btn-outline h-11 min-h-11 px-5 text-sm font-semibold"
        >
          {state.browseAllProblems}
          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
        <p className="text-sm font-semibold text-emerald-900">{state.describeMoreLabel}</p>
        <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">{state.describeMoreBody}</p>
        <a
          href={state.describeMoreHref}
          target="_blank"
          rel="noreferrer"
          className="btn btn-whatsapp mt-3 h-11 min-h-11 px-5 text-sm font-semibold"
        >
          <IconWhatsApp className="h-4 w-4" aria-hidden="true" />
          {state.describeMoreCta}
        </a>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Link
          href={state.quoteHref}
          className="btn btn-primary h-11 min-h-11 px-5 text-sm font-semibold"
        >
          {state.quoteLabel}
          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-slate-500">{state.auditDisclosure}</p>
    </section>
  );
}
