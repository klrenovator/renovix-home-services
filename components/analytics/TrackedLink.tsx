"use client";

import type { ReactNode } from "react";
import type { ConversionContext, ConversionEvent } from "@/lib/analytics";
import { trackConversionEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  event: ConversionEvent;
  context?: ConversionContext;
  className?: string;
  /** Opens in a new tab for external http(s) links, like `Button external`. */
  external?: boolean;
  ariaLabel?: string;
  children: ReactNode;
};

/**
 * An anchor that emits a conversion event on click. The event fires before the
 * navigation happens (the queue is synchronous, so nothing is lost when the
 * page unloads) and contains no personally identifiable data.
 *
 * Phase 24 will connect `window.__renovixAnalytics` to the real provider; this
 * component is the single click-tracking interface the quote flow needs today.
 */
export function TrackedLink({
  href,
  event,
  context,
  className,
  external = false,
  ariaLabel,
  children,
}: TrackedLinkProps) {
  const isExternalHttp = external || href.startsWith("http");

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(isExternalHttp ? { target: "_blank", rel: "noreferrer" } : {})}
      onClick={() => trackConversionEvent(event, context)}
    >
      {children}
    </a>
  );
}
