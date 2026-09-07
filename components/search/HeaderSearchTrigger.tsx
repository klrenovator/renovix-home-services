/**
 * Smart Service Finder — HeaderSearchTrigger.
 *
 * Client component. A small button that opens the `SearchOverlay`.
 * Used in the header's mobile cluster. The desktop header instead
 * renders the persistent `SmartSearchBar` form.
 *
 * Bundle size: < 1 KB gzip.
 */

"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { IconSearch } from "@/components/icons";
import { SearchOverlay } from "./SearchOverlay";

type HeaderSearchTriggerProps = {
  labels: {
    inputLabel: string;
    placeholder: string;
    submit: string;
    overlayTitle: string;
    closeOverlay: string;
    typeaheadHint: string;
  };
  exampleQueries: string[];
  action: string;
};

export function HeaderSearchTrigger({
  labels,
  exampleQueries,
  action,
}: HeaderSearchTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={labels.inputLabel}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-brand/30 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <IconSearch className="h-5 w-5" aria-hidden="true" />
      </button>
      {open
        ? typeof document !== "undefined"
          ? createPortal(
              <SearchOverlay
                labels={labels}
                exampleQueries={exampleQueries}
                action={action}
                onClose={() => setOpen(false)}
              />,
              document.body,
            )
          : null
        : null}
    </>
  );
}
