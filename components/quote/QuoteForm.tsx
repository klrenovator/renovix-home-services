"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { IconCamera, IconCheck, IconClipboard } from "@/components/icons";
import type { Dictionary } from "@/i18n";
import type { QuoteOption } from "@/data/i18n";

type QuoteFormProps = {
  serviceOptions: QuoteOption[];
  propertyTypes: readonly string[];
  contactHref: string;
  /** Localized quote copy, passed from the server component. */
  t: Dictionary["quote"];
};

export function QuoteForm({
  serviceOptions,
  propertyTypes,
  contactHref,
  t,
}: QuoteFormProps) {
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const service = serviceOptions.find((option) => option.value === selectedService);
  const subServices = service?.subServices ?? [];
  /**
   * The sub-service field is shown only in languages that have translated
   * sub-service names. English keeps the original behaviour — visible but
   * disabled until a service is chosen.
   */
  const showSubService = serviceOptions.some(
    (option) => option.subServices.length > 0,
  );

  function handleServiceChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedService(event.target.value);
    setSelectedSubService("");
    setSubmitted(false);
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedFiles(Array.from(event.target.files ?? []).map((file) => file.name));
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
          <h2 className="text-xl font-bold tracking-tight text-navy">{t.formTitle}</h2>
          <p className="mt-1 text-sm leading-6 text-secondary">{t.formLead}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="form-label" htmlFor="quote-name">
            {t.labels.name} <span aria-hidden="true">*</span>
          </label>
          <input
            className="form-control"
            id="quote-name"
            name="name"
            autoComplete="name"
            placeholder={t.placeholders.name}
            required
          />
        </div>

        <div>
          <label className="form-label" htmlFor="quote-whatsapp">
            {t.labels.whatsapp} <span aria-hidden="true">*</span>
          </label>
          <input
            className="form-control"
            id="quote-whatsapp"
            name="whatsappNumber"
            type="tel"
            autoComplete="tel"
            placeholder={t.placeholders.whatsapp}
            required
          />
        </div>

        <div>
          <label className="form-label" htmlFor="quote-email">
            {t.labels.email}
          </label>
          <input
            className="form-control"
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.placeholders.email}
          />
          <p className="form-help">{t.help.email}</p>
        </div>

        <div>
          <label className="form-label" htmlFor="quote-property-type">
            {t.labels.propertyType} <span aria-hidden="true">*</span>
          </label>
          <select
            className="form-control"
            id="quote-property-type"
            name="propertyType"
            defaultValue=""
            required
          >
            <option value="" disabled>
              {t.placeholders.propertyType}
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
            {t.labels.service} <span aria-hidden="true">*</span>
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
              {t.placeholders.service}
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {showSubService ? (
          <div>
            <label className="form-label" htmlFor="quote-sub-service">
              {t.labels.subService}
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
                {selectedService
                  ? t.placeholders.subService
                  : t.placeholders.subServiceDisabled}
              </option>
              {subServices.map((subService) => (
                <option key={subService} value={subService}>
                  {subService}
                </option>
              ))}
            </select>
            <p className="form-help">{t.help.subService}</p>
          </div>
        ) : null}

        <div className="sm:col-span-2">
          <label className="form-label" htmlFor="quote-location">
            {t.labels.location} <span aria-hidden="true">*</span>
          </label>
          <input
            className="form-control"
            id="quote-location"
            name="location"
            autoComplete="street-address"
            placeholder={t.placeholders.location}
            required
          />
          <p className="form-help">{t.help.location}</p>
        </div>

        <div className="sm:col-span-2">
          <label className="form-label" htmlFor="quote-description">
            {t.labels.description} <span aria-hidden="true">*</span>
          </label>
          <textarea
            className="form-control min-h-32 resize-y"
            id="quote-description"
            name="description"
            placeholder={t.placeholders.description}
            required
          />
        </div>

        <div>
          <label className="form-label" htmlFor="quote-preferred-date">
            {t.labels.preferredDate}
          </label>
          <input
            className="form-control"
            id="quote-preferred-date"
            name="preferredDate"
            type="date"
          />
          <p className="form-help">{t.help.preferredDate}</p>
        </div>

        <div>
          <label className="form-label" htmlFor="quote-photos">
            {t.labels.photos}
          </label>
          <div className="rounded-lg border border-dashed border-slate-300 bg-surface p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-navy">
              <IconCamera className="h-4 w-4 text-brand" />
              <span>{t.help.photosChosen}</span>
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
            {t.help.photos}
          </p>
          {selectedFiles.length > 0 ? (
            <p className="mt-2 text-xs font-medium text-navy" aria-live="polite">
              {selectedFiles.length}{" "}
              {selectedFiles.length === 1
                ? t.photosSelectedSuffix
                : t.photosSelectedSuffixPlural}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-navy">{t.deliveryTitle}</p>
        <p className="mt-1 text-sm leading-6 text-secondary">{t.deliveryBody}</p>
      </div>

      {submitted ? (
        <div
          className="mt-5 flex gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm leading-6 text-navy"
          role="status"
          aria-live="polite"
        >
          <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <p>
            {t.submittedBodyPrefix}{" "}
            <Link
              href={contactHref}
              className="font-semibold text-brand underline underline-offset-2"
            >
              {t.submittedLink}
            </Link>{" "}
            {t.submittedBodySuffix}
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-secondary">{t.help.requiredNote}</p>
        <button className="btn btn-primary w-full sm:w-auto" type="submit">
          {t.submit}
        </button>
      </div>
    </form>
  );
}
