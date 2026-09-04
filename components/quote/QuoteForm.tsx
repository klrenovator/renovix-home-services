"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  IconAlertTriangle,
  IconCheck,
  IconCamera,
  IconClipboard,
  IconWhatsApp,
} from "@/components/icons";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { Dictionary } from "@/i18n";
import type { QuoteOption } from "@/data/i18n";
import type { LanguageCode } from "@/data/languages";
import { trackConversionEvent } from "@/lib/analytics";
import {
  QUOTE_ENDPOINT,
  QUOTE_HONEYPOT_FIELD,
  QUOTE_LIMITS,
  QUOTE_PROPERTY_TYPE_IDS,
  type PreferredContactMethod,
} from "@/lib/quote/constants";
import { isValidEmail, isValidPhone } from "@/lib/quote/validators";

type QuoteFormProps = {
  serviceOptions: QuoteOption[];
  /** Localized property-type labels keyed by the stable IDs. */
  propertyTypes: Record<string, string>;
  /** `wa.me` base URL from the single site WhatsApp configuration. */
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
  | "preferredContact"
  | "service"
  | "subService"
  | "propertyType"
  | "location"
  | "description";

type FieldErrors = Partial<Record<FieldName, string>>;

type QuoteApiResponse =
  | { ok: true }
  | { ok: false; error: string; fields?: string[] };

/** Tab order of the fields, used to focus the first invalid control. */
const FIELD_ORDER: FieldName[] = [
  "name",
  "phone",
  "email",
  "preferredContact",
  "service",
  "subService",
  "propertyType",
  "location",
  "description",
];

/**
 * Stable control IDs (the form is rendered once per page, so these are unique)
 * used to focus the first invalid control after validation.
 */
const FIELD_ELEMENT_IDS: Record<FieldName, string> = {
  name: "quote-name",
  phone: "quote-whatsapp",
  email: "quote-email",
  preferredContact: "quote-contact-whatsapp",
  service: "quote-service",
  subService: "quote-sub-service",
  propertyType: "quote-property-type",
  location: "quote-location",
  description: "quote-description",
};

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

/** Required-field marker: visible asterisk plus a spoken "(required)" suffix. */
function Required({ label }: { label: string }) {
  return (
    <>
      {label}{" "}
      <span aria-hidden="true">*</span>
    </>
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
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const inFlight = useRef(false);
  const started = useRef(false);
  const statusRef = useRef<HTMLDivElement | null>(null);
  const preferredDateRef = useRef<HTMLInputElement | null>(null);

  const service = serviceOptions.find((option) => option.value === selectedService);
  const subServiceOptions = service?.subServices ?? [];
  /**
   * Sub-service is progressively disclosed: it only appears once a concrete
   * service is chosen, because every registry sub-service belongs to a real
   * service and "Not sure / multiple services" offers none.
   */
  const showSubService = Boolean(service) && (subServiceOptions.length > 0);

  const busy = status === "submitting";
  const locked = status === "submitting" || status === "success";

  /** `wa.me` links with a localized pre-filled first message. */
  const whatsappLink = useMemo(
    () => (message: string) => {
      const separator = whatsappHref.includes("?") ? "&" : "?";
      return `${whatsappHref}${separator}text=${encodeURIComponent(message)}`;
    },
    [whatsappHref],
  );

  // Set the date floor after mount so server and client markup always match.
  useEffect(() => {
    const input = preferredDateRef.current;
    if (input) {
      input.min = new Date().toISOString().slice(0, 10);
    }
  }, []);

  // Move focus to the success/error panel when the outcome changes.
  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  function describedBy(fieldId: string, error?: string, extraId?: string) {
    const parts = [error ? `${fieldId}-error` : null, extraId ?? null].filter(Boolean);
    return parts.length > 0 ? parts.join(" ") : undefined;
  }

  function markStarted() {
    if (!started.current) {
      started.current = true;
      trackConversionEvent("quote_form_start", { lang });
    }
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

  function validateForm(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const next: FieldErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("whatsappNumber") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const contact = String(data.get("preferredContact") ?? "").trim();
    const serviceValue = String(data.get("serviceRequired") ?? "").trim();
    const subServiceValue = String(data.get("subService") ?? "").trim();
    const propertyType = String(data.get("propertyType") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();

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

    if (contact !== "whatsapp" && contact !== "phone" && contact !== "email") {
      next.preferredContact = t.validation.preferredContact;
    }

    if (!serviceValue) {
      next.service = t.validation.service;
    }

    // Mirror of the server rule: a sub-service must belong to the service.
    if (subServiceValue.length > 0) {
      if (!service || !subServiceOptions.some((option) => option.value === subServiceValue)) {
        next.subService = t.validation.subService;
      }
    }

    if (!propertyType) {
      next.propertyType = t.validation.propertyType;
    }

    if (location.length < QUOTE_LIMITS.location.min) {
      next.location = t.validation.location;
    }

    if (!description) {
      next.description = t.validation.description;
    } else if (description.length > QUOTE_LIMITS.description.max) {
      next.description = t.validation.descriptionTooLong;
    }

    return next;
  }

  function focusFirstError(nextErrors: FieldErrors) {
    const first = FIELD_ORDER.find((field) => nextErrors[field]);

    if (!first) {
      return;
    }

    const target = document.getElementById(FIELD_ELEMENT_IDS[first]);

    if (target instanceof HTMLElement) {
      target.focus();
    }
  }

  function handleServiceChange(event: ChangeEvent<HTMLSelectElement>) {
    markStarted();
    setSelectedService(event.target.value);
    setSelectedSubService("");
    clearFieldError("service");
    clearFieldError("subService");
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
      trackConversionEvent("quote_form_error", { lang, reason: "validation" });
      return;
    }

    inFlight.current = true;
    setErrors({});
    setStatus("submitting");

    const data = new FormData(form);
    const serviceValue = String(data.get("serviceRequired") ?? "");

    trackConversionEvent("quote_form_submit", { lang, service: serviceValue });

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
        trackConversionEvent("quote_form_success", { lang, service: serviceValue });
        return;
      }

      let failureReason = "unavailable";

      if (!result.ok) {
        if (result.error === "rate_limited") {
          failureReason = "rate_limited";
        }

        if (result.error === "validation" && result.fields && result.fields.length > 0) {
          const mapped: FieldErrors = {};
          const fieldMap: Record<string, FieldName> = {
            name: "name",
            phone: "phone",
            email: "email",
            preferredContact: "preferredContact",
            service: "service",
            subService: "subService",
            propertyType: "propertyType",
            location: "location",
            description: "description",
          };

          for (const field of result.fields) {
            const key = fieldMap[field];
            if (key && !mapped[key]) {
              mapped[key] = t.validation[key];
            }
          }

          if (Object.keys(mapped).length > 0) {
            setErrors(mapped);
            setStatus("idle");
            focusFirstError(mapped);
            trackConversionEvent("quote_form_error", { lang, reason: "validation" });
            return;
          }
        }
      }

      setStatus("error");
      trackConversionEvent("quote_form_error", { lang, reason: failureReason });
    } catch {
      setStatus("error");
      trackConversionEvent("quote_form_error", { lang, reason: "network" });
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

  const submittedServiceLabel = service?.label ?? "";
  const successPhotosHref = whatsappLink(
    t.successPhotosMessage.replace("{service}", submittedServiceLabel),
  );
  const fallbackHref = whatsappLink(t.whatsappFallbackMessage);

  const contactHeadingId = `quote-section-contact-${formInstanceId}`;
  const jobHeadingId = `quote-section-job-${formInstanceId}`;

  function sectionHeading(id: string, title: string): ReactNode {
    return (
      <h3 id={id} className="text-sm font-bold tracking-wide text-navy uppercase">
        {title}
      </h3>
    );
  }

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
          <IconClipboard className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-navy">{t.formTitle}</h2>
          <p className="mt-1 text-sm leading-6 text-secondary">{t.formLead}</p>
        </div>
      </div>

      {status === "success" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="mt-6 rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm leading-6 text-navy"
          role="status"
          aria-live="polite"
        >
          <div className="flex gap-3">
            <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <p className="font-semibold">{t.successTitle}</p>
              <p className="mt-1">{t.successBody}</p>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <IconCamera className="h-4 w-4 text-brand" aria-hidden="true" />
              <p className="text-sm font-semibold text-navy">{t.successPhotosTitle}</p>
            </div>
            <p className="mt-1.5 text-secondary">{t.successPhotosBody}</p>
            <TrackedLink
              href={successPhotosHref}
              event="whatsapp_click"
              context={{ surface: "quote_success", lang }}
              className="btn btn-whatsapp mt-4 w-full sm:w-auto"
            >
              <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.successPhotosCta}</span>
            </TrackedLink>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-navy"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex gap-3">
            <IconAlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
            <div>
              <p className="font-semibold">{t.errorTitle}</p>
              <p className="mt-1">{t.errorBody}</p>
              <p className="mt-2 text-secondary">{t.whatsappFallback}</p>
              <TrackedLink
                href={fallbackHref}
                event="whatsapp_click"
                context={{ surface: "quote_error", lang }}
                className="btn btn-whatsapp mt-4 w-full sm:w-auto"
              >
                <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.whatsappFallbackCta}</span>
              </TrackedLink>
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

        <div className="mt-6 space-y-7">
          {/* --- Section 1: contact details --------------------------------- */}
          <section aria-labelledby={contactHeadingId}>
            {sectionHeading(contactHeadingId, t.sections.contact)}
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="form-label" htmlFor="quote-name">
                  <Required label={t.labels.name} />
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
                  onChange={() => {
                    markStarted();
                    clearFieldError("name");
                  }}
                />
                <FieldError id="quote-name-error" message={errors.name} />
              </div>

              <div>
                <label className="form-label" htmlFor="quote-whatsapp">
                  <Required label={t.labels.whatsapp} />
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
                  aria-describedby={describedBy("quote-whatsapp", errors.phone, "quote-whatsapp-help")}
                  onChange={() => {
                    markStarted();
                    clearFieldError("phone");
                  }}
                />
                <p className="form-help" id="quote-whatsapp-help">
                  {t.help.phone}
                </p>
                <FieldError id="quote-whatsapp-error" message={errors.phone} />
              </div>

              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="quote-email">
                  {t.labels.email}
                </label>
                <input
                  className="form-control"
                  id="quote-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t.placeholders.email}
                  maxLength={QUOTE_LIMITS.email.max}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={describedBy("quote-email", errors.email, "quote-email-help")}
                  onChange={() => {
                    markStarted();
                    clearFieldError("email");
                  }}
                />
                <p className="form-help" id="quote-email-help">
                  {t.help.email}
                </p>
                <FieldError id="quote-email-error" message={errors.email} />
              </div>

              <div className="sm:col-span-2">
                <fieldset
                  className="min-w-0"
                  aria-invalid={errors.preferredContact ? true : undefined}
                  aria-describedby={describedBy("quote-contact", errors.preferredContact, "quote-contact-help")}
                  tabIndex={-1}
                >
                  <legend className="form-label">
                    <Required label={t.labels.preferredContact} />
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
                              markStarted();
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
            </div>
          </section>

          {/* --- Section 2: the work ---------------------------------------- */}
          <section aria-labelledby={jobHeadingId}>
            {sectionHeading(jobHeadingId, t.sections.job)}
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="form-label" htmlFor="quote-property-type">
                  <Required label={t.labels.propertyType} />
                  <span className="sr-only">{t.labels.requiredText}</span>
                </label>
                <select
                  className="form-control"
                  id="quote-property-type"
                  name="propertyType"
                  required
                  defaultValue=""
                  aria-required="true"
                  aria-invalid={errors.propertyType ? true : undefined}
                  aria-describedby={describedBy("quote-property-type", errors.propertyType)}
                  onChange={() => {
                    markStarted();
                    clearFieldError("propertyType");
                  }}
                >
                  <option value="" disabled>
                    {t.placeholders.propertyType}
                  </option>
                  {QUOTE_PROPERTY_TYPE_IDS.map((id) => (
                    <option key={id} value={id}>
                      {propertyTypes[id] ?? id}
                    </option>
                  ))}
                </select>
                <FieldError id="quote-property-type-error" message={errors.propertyType} />
              </div>

              <div>
                <label className="form-label" htmlFor="quote-service">
                  <Required label={t.labels.service} />
                  <span className="sr-only">{t.labels.requiredText}</span>
                </label>
                <select
                  className="form-control"
                  id="quote-service"
                  name="serviceRequired"
                  required
                  value={selectedService}
                  onChange={handleServiceChange}
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
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="quote-sub-service">
                    {t.labels.subService}
                  </label>
                  <select
                    className="form-control"
                    id="quote-sub-service"
                    name="subService"
                    value={selectedSubService}
                    onChange={(event) => {
                      markStarted();
                      setSelectedSubService(event.target.value);
                      clearFieldError("subService");
                    }}
                    aria-describedby={describedBy(
                      "quote-sub-service",
                      errors.subService,
                      "quote-sub-service-help",
                    )}
                  >
                    <option value="">{t.placeholders.subService}</option>
                    {subServiceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p className="form-help" id="quote-sub-service-help">
                    {t.help.subService}
                  </p>
                  <FieldError id="quote-sub-service-error" message={errors.subService} />
                </div>
              ) : null}

              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="quote-location">
                  <Required label={t.labels.location} />
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
                  onChange={() => {
                    markStarted();
                    clearFieldError("location");
                  }}
                />
                <p className="form-help" id="quote-location-help">
                  {t.help.location}
                </p>
                <FieldError id="quote-location-error" message={errors.location} />
              </div>

              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="quote-description">
                  <Required label={t.labels.description} />
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
                  onChange={() => {
                    markStarted();
                    clearFieldError("description");
                  }}
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
                  ref={preferredDateRef}
                  aria-describedby="quote-preferred-date-help"
                />
                <p className="form-help" id="quote-preferred-date-help">
                  {t.help.preferredDate}
                </p>
              </div>
            </div>
          </section>
        </div>
      </fieldset>

      <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-navy">{t.deliveryTitle}</p>
        <p className="mt-1 text-sm leading-6 text-secondary">{t.deliveryBody}</p>
      </div>

      <p className="mt-5 text-xs leading-5 text-secondary">{t.privacyNote}</p>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-secondary">{t.help.requiredNote}</p>
        <button
          className="btn btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={locked}
          aria-disabled={locked}
        >
          {busy ? (
            <>
              <span
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                aria-hidden="true"
              />
              <span>{t.submitting}</span>
            </>
          ) : (
            t.submit
          )}
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
