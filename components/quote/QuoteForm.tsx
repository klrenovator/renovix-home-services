"use client";

import { useId, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { IconAlertTriangle, IconCamera, IconCheck, IconClipboard, IconWhatsApp } from "@/components/icons";
import type { Dictionary } from "@/i18n";
import type { QuoteOption } from "@/data/i18n";
import type { LanguageCode } from "@/data/languages";
import {
  QUOTE_ENDPOINT,
  QUOTE_HONEYPOT_FIELD,
  QUOTE_LIMITS,
  type PreferredContactMethod,
} from "@/lib/quote/constants";
import { isValidEmail, isValidPhone } from "@/lib/quote/validation";

type QuoteFormProps = {
  serviceOptions: QuoteOption[];
  propertyTypes: readonly string[];
  whatsappHref: string;
  lang: LanguageCode;
  /** Localized quote copy, passed from the server component. */
  t: Dictionary["quote"];
};

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldName =
  | "name"
  | "phone"
  | "email"
  | "propertyType"
  | "service"
  | "location"
  | "description"
  | "preferredContact";

type FieldErrors = Partial<Record<FieldName, string>>;

type QuoteApiResponse =
  | { ok: true }
  | { ok: false; error: string; fields?: string[] };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="form-error" role="alert">
      {message}
    </p>
  );
}

export function QuoteForm({
  serviceOptions,
  propertyTypes,
  whatsappHref,
  lang,
  t,
}: QuoteFormProps) {
  const formInstanceId = useId();
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [preferredContact, setPreferredContact] = useState<PreferredContactMethod>("whatsapp");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const inFlight = useRef(false);

  const service = serviceOptions.find((option) => option.value === selectedService);
  const subServices = service?.subServices ?? [];
  /**
   * The sub-service field is shown only in languages that have translated
   * sub-service names. English keeps the original behaviour — visible but
   * disabled until a service is chosen.
   */
  const showSubService = serviceOptions.some((option) => option.subServices.length > 0);

  const busy = status === "submitting";
  const locked = status === "submitting" || status === "success";

  const fallbackHref = useMemo(() => {
    const separator = whatsappHref.includes("?") ? "&" : "?";
    return `${whatsappHref}${separator}text=${encodeURIComponent(t.whatsappFallbackMessage)}`;
  }, [t.whatsappFallbackMessage, whatsappHref]);

  function describedBy(fieldId: string, error?: string, extraId?: string) {
    const parts = [error ? `${fieldId}-error` : null, extraId ?? null].filter(Boolean);
    return parts.length > 0 ? parts.join(" ") : undefined;
  }

  function validateForm(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const next: FieldErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("whatsappNumber") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const propertyType = String(data.get("propertyType") ?? "").trim();
    const serviceValue = String(data.get("serviceRequired") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const contact = String(data.get("preferredContact") ?? "").trim();

    if (name.length < QUOTE_LIMITS.name.min) {
      next.name = t.validation.name;
    }

    if (!isValidPhone(phone)) {
      next.phone = t.validation.phone;
    }

    if (email.length > 0 && !isValidEmail(email)) {
      next.email = t.validation.email;
    }

    if (contact === "email" && email.length === 0) {
      next.email = t.validation.emailRequired;
    }

    if (!propertyType) {
      next.propertyType = t.validation.propertyType;
    }

    if (!serviceValue) {
      next.service = t.validation.service;
    }

    if (location.length < QUOTE_LIMITS.location.min) {
      next.location = t.validation.location;
    }

    if (!description) {
      next.description = t.validation.description;
    } else if (description.length > QUOTE_LIMITS.description.max) {
      next.description = t.validation.descriptionTooLong;
    }

    if (contact !== "whatsapp" && contact !== "phone" && contact !== "email") {
      next.preferredContact = t.validation.preferredContact;
    }

    return next;
  }

  function focusFirstError(nextErrors: FieldErrors) {
    const order: FieldName[] = [
      "name",
      "phone",
      "email",
      "propertyType",
      "service",
      "location",
      "description",
      "preferredContact",
    ];
    const first = order.find((field) => nextErrors[field]);

    if (!first) {
      return;
    }

    const target = document.getElementById(
      first === "preferredContact" ? "quote-contact-whatsapp" : `quote-${first === "phone" ? "whatsapp" : first === "service" ? "service" : first === "propertyType" ? "property-type" : first}`,
    );

    if (target instanceof HTMLElement) {
      target.focus();
    }
  }

  function handleServiceChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedService(event.target.value);
    setSelectedSubService("");
    setErrors((current) => {
      if (!current.service) {
        return current;
      }

      const next = { ...current };
      delete next.service;
      return next;
    });
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedFiles(Array.from(event.target.files ?? []).map((file) => file.name));
  }

  function clearFieldError(field: FieldName) {
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (locked || inFlight.current) {
      return;
    }

    const form = event.currentTarget;
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      setErrors(nextErrors);
      focusFirstError(nextErrors);
      return;
    }

    inFlight.current = true;
    setErrors({});
    setStatus("submitting");

    const data = new FormData(form);
    const serviceValue = String(data.get("serviceRequired") ?? "");

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("whatsappNumber") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      propertyType: String(data.get("propertyType") ?? "").trim(),
      service: serviceValue,
      subService: String(data.get("subService") ?? "").trim(),
      location: String(data.get("location") ?? "").trim(),
      description: String(data.get("description") ?? "").trim(),
      preferredDate: String(data.get("preferredDate") ?? "").trim(),
      preferredContact,
      locale: lang,
      photoCount: Math.min(selectedFiles.length, QUOTE_LIMITS.photoCount.max),
      [QUOTE_HONEYPOT_FIELD]: String(data.get(QUOTE_HONEYPOT_FIELD) ?? ""),
    };

    try {
      const response = await fetch(QUOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      let result: QuoteApiResponse = { ok: false, error: "unavailable" };

      try {
        result = (await response.json()) as QuoteApiResponse;
      } catch {
        result = { ok: false, error: "unavailable" };
      }

      if (response.ok && result.ok) {
        setStatus("success");
        return;
      }

      if (!result.ok && result.error === "validation" && result.fields && result.fields.length > 0) {
        const mapped: FieldErrors = {};
        const fieldMap: Record<string, FieldName> = {
          name: "name",
          phone: "phone",
          email: "email",
          propertyType: "propertyType",
          service: "service",
          location: "location",
          description: "description",
          preferredContact: "preferredContact",
        };

        for (const field of result.fields) {
          const key = fieldMap[field];
          if (key) {
            mapped[key] = t.validation[key === "phone" ? "phone" : key === "email" ? "email" : key === "name" ? "name" : key === "propertyType" ? "propertyType" : key === "service" ? "service" : key === "location" ? "location" : key === "description" ? "description" : "preferredContact"];
          }
        }

        if (Object.keys(mapped).length > 0) {
          setErrors(mapped);
          setStatus("idle");
          focusFirstError(mapped);
          return;
        }
      }

      setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      // A failed request must remain retryable. The success state is locked,
      // but every validation, rate-limit, provider and network failure clears
      // the in-flight guard here.
      inFlight.current = false;
    }
  }

  const contactOptions: { value: PreferredContactMethod; label: string }[] = [
    { value: "whatsapp", label: t.contactMethods.whatsapp },
    { value: "phone", label: t.contactMethods.phone },
    { value: "email", label: t.contactMethods.email },
  ];

  return (
    <form
      id="quote-form"
      className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-7"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={busy}
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

      {status === "success" ? (
        <div
          className="mt-6 flex gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm leading-6 text-navy"
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <div>
            <p className="font-semibold">{t.successTitle}</p>
            <p className="mt-1">{t.successBody}</p>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-navy"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex gap-3">
            <IconAlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
            <div>
              <p className="font-semibold">{t.errorTitle}</p>
              <p className="mt-1">{t.errorBody}</p>
              <p className="mt-2 text-secondary">{t.whatsappFallback}</p>
              <a
                href={fallbackHref}
                className="btn btn-whatsapp mt-4 w-full sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.whatsappFallbackCta}</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <fieldset disabled={locked} className="min-w-0">
        <legend className="sr-only">{t.formTitle}</legend>

        <div
          className="absolute -left-[10000px] h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <input
            id={`${formInstanceId}-website`}
            name={QUOTE_HONEYPOT_FIELD}
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="form-label" htmlFor="quote-name">
              {t.labels.name}{" "}
              <span aria-hidden="true">*</span>
              <span className="sr-only">{t.labels.requiredText}</span>
            </label>
            <input
              className="form-control"
              id="quote-name"
              name="name"
              autoComplete="name"
              placeholder={t.placeholders.name}
              required
              aria-required="true"
              maxLength={QUOTE_LIMITS.name.max}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={describedBy("quote-name", errors.name)}
              onChange={() => clearFieldError("name")}
            />
            <FieldError id="quote-name-error" message={errors.name} />
          </div>

          <div>
            <label className="form-label" htmlFor="quote-whatsapp">
              {t.labels.whatsapp}{" "}
              <span aria-hidden="true">*</span>
              <span className="sr-only">{t.labels.requiredText}</span>
            </label>
            <input
              className="form-control"
              id="quote-whatsapp"
              name="whatsappNumber"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={t.placeholders.whatsapp}
              required
              aria-required="true"
              maxLength={QUOTE_LIMITS.phone.max}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={describedBy("quote-whatsapp", errors.phone)}
              onChange={() => clearFieldError("phone")}
            />
            <FieldError id="quote-whatsapp-error" message={errors.phone} />
          </div>

          <div>
            <label className="form-label" htmlFor="quote-email">
              {t.labels.email}
              {preferredContact === "email" ? (
                <>
                  {" "}
                  <span aria-hidden="true">*</span>
                  <span className="sr-only">{t.labels.requiredText}</span>
                </>
              ) : null}
            </label>
            <input
              className="form-control"
              id="quote-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t.placeholders.email}
              maxLength={QUOTE_LIMITS.email.max}
              required={preferredContact === "email"}
              aria-required={preferredContact === "email" ? true : undefined}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={describedBy("quote-email", errors.email, "quote-email-help")}
              onChange={() => clearFieldError("email")}
            />
            <p className="form-help" id="quote-email-help">
              {t.help.email}
            </p>
            <FieldError id="quote-email-error" message={errors.email} />
          </div>

          <div>
            <label className="form-label" htmlFor="quote-property-type">
              {t.labels.propertyType}{" "}
              <span aria-hidden="true">*</span>
              <span className="sr-only">{t.labels.requiredText}</span>
            </label>
            <select
              className="form-control"
              id="quote-property-type"
              name="propertyType"
              defaultValue=""
              required
              aria-required="true"
              aria-invalid={errors.propertyType ? true : undefined}
              aria-describedby={describedBy("quote-property-type", errors.propertyType)}
              onChange={() => clearFieldError("propertyType")}
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
            <FieldError id="quote-property-type-error" message={errors.propertyType} />
          </div>

          <div>
            <label className="form-label" htmlFor="quote-service">
              {t.labels.service}{" "}
              <span aria-hidden="true">*</span>
              <span className="sr-only">{t.labels.requiredText}</span>
            </label>
            <select
              className="form-control"
              id="quote-service"
              name="serviceRequired"
              value={selectedService}
              onChange={handleServiceChange}
              required
              aria-required="true"
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={describedBy("quote-service", errors.service)}
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
            <FieldError id="quote-service-error" message={errors.service} />
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
                onChange={(event) => setSelectedSubService(event.target.value)}
                disabled={!selectedService}
                aria-describedby="quote-sub-service-help"
              >
                <option value="">
                  {selectedService ? t.placeholders.subService : t.placeholders.subServiceDisabled}
                </option>
                {subServices.map((subService) => (
                  <option key={subService} value={subService}>
                    {subService}
                  </option>
                ))}
              </select>
              <p className="form-help" id="quote-sub-service-help">
                {t.help.subService}
              </p>
            </div>
          ) : null}

          <div className="sm:col-span-2">
            <label className="form-label" htmlFor="quote-location">
              {t.labels.location}{" "}
              <span aria-hidden="true">*</span>
              <span className="sr-only">{t.labels.requiredText}</span>
            </label>
            <input
              className="form-control"
              id="quote-location"
              name="location"
              autoComplete="address-level2"
              placeholder={t.placeholders.location}
              required
              aria-required="true"
              maxLength={QUOTE_LIMITS.location.max}
              aria-invalid={errors.location ? true : undefined}
              aria-describedby={describedBy("quote-location", errors.location, "quote-location-help")}
              onChange={() => clearFieldError("location")}
            />
            <p className="form-help" id="quote-location-help">
              {t.help.location}
            </p>
            <FieldError id="quote-location-error" message={errors.location} />
          </div>

          <div className="sm:col-span-2">
            <fieldset
              className="min-w-0"
              aria-invalid={errors.preferredContact ? true : undefined}
              aria-describedby={describedBy("quote-contact", errors.preferredContact, "quote-contact-help")}
            >
              <legend className="form-label">
                {t.labels.preferredContact}{" "}
                <span aria-hidden="true">*</span>
                <span className="sr-only">{t.labels.requiredText}</span>
              </legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {contactOptions.map((option) => {
                  const inputId = `quote-contact-${option.value}`;

                  return (
                    <label
                      key={option.value}
                      htmlFor={inputId}
                      className="flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-navy has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/10 has-[:checked]:border-brand has-[:checked]:bg-brand/5"
                    >
                      <input
                        id={inputId}
                        className="h-4 w-4 accent-brand"
                        type="radio"
                        name="preferredContact"
                        value={option.value}
                        checked={preferredContact === option.value}
                        onChange={() => {
                          setPreferredContact(option.value);
                          clearFieldError("preferredContact");
                          if (option.value !== "email") {
                            clearFieldError("email");
                          }
                        }}
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
              <p className="form-help" id="quote-contact-help">
                {t.help.preferredContact}
              </p>
              <FieldError id="quote-contact-error" message={errors.preferredContact} />
            </fieldset>
          </div>

          <div className="sm:col-span-2">
            <label className="form-label" htmlFor="quote-description">
              {t.labels.description}{" "}
              <span aria-hidden="true">*</span>
              <span className="sr-only">{t.labels.requiredText}</span>
            </label>
            <textarea
              className="form-control min-h-32 resize-y"
              id="quote-description"
              name="description"
              placeholder={t.placeholders.description}
              required
              aria-required="true"
              maxLength={QUOTE_LIMITS.description.max}
              aria-invalid={errors.description ? true : undefined}
              aria-describedby={describedBy("quote-description", errors.description)}
              onChange={() => clearFieldError("description")}
            />
            <FieldError id="quote-description-error" message={errors.description} />
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
              aria-describedby="quote-preferred-date-help"
            />
            <p className="form-help" id="quote-preferred-date-help">
              {t.help.preferredDate}
            </p>
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
                {selectedFiles.length === 1 ? t.photosSelectedSuffix : t.photosSelectedSuffixPlural}
              </p>
            ) : null}
          </div>
        </div>
      </fieldset>

      <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-navy">{t.deliveryTitle}</p>
        <p className="mt-1 text-sm leading-6 text-secondary">{t.deliveryBody}</p>
      </div>

      <p className="mt-5 text-xs leading-5 text-secondary">{t.privacyNote}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-secondary">{t.help.requiredNote}</p>
        <button
          className="btn btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={locked}
          aria-disabled={locked}
        >
          {busy ? t.submitting : t.submit}
        </button>
      </div>

      {busy ? (
        <p className="sr-only" role="status" aria-live="polite">
          {t.submitting}
        </p>
      ) : null}
    </form>
  );
}
