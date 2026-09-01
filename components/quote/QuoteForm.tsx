"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import type { QuoteServiceOption } from "@/data/quote";
import { IconCamera, IconCheck, IconClipboard } from "@/components/icons";

type QuoteFormProps = {
  serviceOptions: QuoteServiceOption[];
  propertyTypes: readonly string[];
  contactHref: string;
};

export function QuoteForm({
  serviceOptions,
  propertyTypes,
  contactHref,
}: QuoteFormProps) {
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const service = serviceOptions.find(
    (option) => option.value === selectedService,
  );
  const subServices = service?.subServices ?? [];

  function handleServiceChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedService(event.target.value);
    setSelectedSubService("");
    setSubmitted(false);
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedFiles(
      Array.from(event.target.files ?? []).map((file) => file.name),
    );
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      id="quote-form"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-7"
      onSubmit={handleSubmit}
    >
      <div className="flex items-start gap-3 border-b border-slate-200 pb-5">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <IconClipboard className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-navy">
            Tell us about the work
          </h2>
          <p className="mt-1 text-sm leading-6 text-secondary">
            The more useful detail you share, the easier it is to understand what
            may be needed for an assessment.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="quote-name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            className="form-control"
            id="quote-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="form-label" htmlFor="quote-whatsapp">
            WhatsApp Number <span aria-hidden="true">*</span>
          </label>
          <input
            className="form-control"
            id="quote-whatsapp"
            name="whatsappNumber"
            type="tel"
            autoComplete="tel"
            placeholder="Your WhatsApp number"
            required
          />
        </div>

        <div>
          <label className="form-label" htmlFor="quote-email">
            Email
          </label>
          <input
            className="form-control"
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
          <p className="form-help">Optional, if you would like an email reply.</p>
        </div>

        <div>
          <label className="form-label" htmlFor="quote-property-type">
            Property Type <span aria-hidden="true">*</span>
          </label>
          <select
            className="form-control"
            id="quote-property-type"
            name="propertyType"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select property type
            </option>
            {propertyTypes.map((propertyType) => (
              <option key={propertyType} value={propertyType}>
                {propertyType}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label" htmlFor="quote-service">
            Service Required <span aria-hidden="true">*</span>
          </label>
          <select
            className="form-control"
            id="quote-service"
            name="serviceRequired"
            value={selectedService}
            onChange={handleServiceChange}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label" htmlFor="quote-sub-service">
            Sub-service
          </label>
          <select
            className="form-control"
            id="quote-sub-service"
            name="subService"
            value={selectedSubService}
            onChange={(event) => {
              setSelectedSubService(event.target.value);
              setSubmitted(false);
            }}
            disabled={!selectedService}
          >
            <option value="">
              {selectedService ? "Select a sub-service (optional)" : "Choose a service first"}
            </option>
            {subServices.map((subService) => (
              <option key={subService} value={subService}>
                {subService}
              </option>
            ))}
          </select>
          <p className="form-help">Choose the closest option, or leave this blank.</p>
        </div>

        <div className="sm:col-span-2">
          <label className="form-label" htmlFor="quote-location">
            Location <span aria-hidden="true">*</span>
          </label>
          <input
            className="form-control"
            id="quote-location"
            name="location"
            autoComplete="street-address"
            placeholder="Area, city or neighbourhood"
            required
          />
          <p className="form-help">
            Include the area in Kuala Lumpur, Selangor or the Klang Valley where
            the work is needed.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="form-label" htmlFor="quote-description">
            Description <span aria-hidden="true">*</span>
          </label>
          <textarea
            className="form-control min-h-32 resize-y"
            id="quote-description"
            name="description"
            placeholder="Describe the issue or work you have in mind, including any useful measurements, access details or timing considerations."
            required
          />
        </div>

        <div>
          <label className="form-label" htmlFor="quote-preferred-date">
            Preferred Date
          </label>
          <input
            className="form-control"
            id="quote-preferred-date"
            name="preferredDate"
            type="date"
          />
          <p className="form-help">Optional. A date is a preference, not a booking.</p>
        </div>

        <div>
          <label className="form-label" htmlFor="quote-photos">
            Upload Photos
          </label>
          <div className="rounded-lg border border-dashed border-slate-300 bg-surface p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-navy">
              <IconCamera className="h-4 w-4 text-brand" />
              <span>Choose photos of the area</span>
            </div>
            <input
              className="mt-3 block w-full text-xs text-secondary file:mr-3 file:rounded-md file:border-0 file:bg-brand/10 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-brand hover:file:bg-brand/15 focus-visible:outline-none"
              id="quote-photos"
              name="photos"
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              aria-describedby="quote-photos-help"
            />
          </div>
          <p className="form-help" id="quote-photos-help">
            Photos can help with assessment. They are not uploaded or sent until
            secure quote delivery is configured.
          </p>
          {selectedFiles.length > 0 ? (
            <p className="mt-2 text-xs font-medium text-navy" aria-live="polite">
              {selectedFiles.length} {selectedFiles.length === 1 ? "photo" : "photos"}{" "}
              selected for a future submission.
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-navy">Quote delivery placeholder</p>
        <p className="mt-1 text-sm leading-6 text-secondary">
          This form is ready to connect to a secure quote-request endpoint, but
          delivery is not configured yet. Submitting this form does not send your
          information or photos, and it does not create an instant quote.
        </p>
      </div>

      {submitted ? (
        <div
          className="mt-5 flex gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm leading-6 text-navy"
          role="status"
          aria-live="polite"
        >
          <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <p>
            Your fields have been checked in this front-end preview. Because quote
            delivery is not configured, no details were sent. Please use the{" "}
            <Link href={contactHref} className="font-semibold text-brand underline underline-offset-2">
              contact page
            </Link>{" "}
            while the quote inbox is being connected.
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-secondary">
          Fields marked <span aria-hidden="true">*</span> are needed to prepare a
          future quote request.
        </p>
        <button className="btn btn-primary w-full sm:w-auto" type="submit">
          Submit Quote Request
        </button>
      </div>

    </form>
  );
}
