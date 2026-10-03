/**
 * SOURDEN — SOURCING INQUIRY: TYPES, VALIDATION, SUBMIT, ANALYTICS
 * ---------------------------------------------------------------------------
 * The whole form's logic, with ZERO DOM access. Everything here is a pure
 * function or a typed service call, so the same code can later run on the
 * server (spec §36: server-side validation must duplicate the client's).
 * The page's <script> owns the DOM and nothing else.
 *
 * The simplified form collects only what is needed to reply: who the visitor
 * is, how to reach them, and a free-text description of what they want. There
 * is no file upload and no long questionnaire, so the only service here is the
 * single inquiry endpoint.
 *
 * WHAT THIS FILE WILL NOT DO
 *   · Never reports success unless the network call actually succeeded.
 *     There is no fake "thanks, we got it" state (spec §21, §23).
 *   · Never sends a name, email address, phone number or free text to
 *     analytics — `track()` whitelists its metadata keys (spec §33).
 * ---------------------------------------------------------------------------
 */

/* ===========================================================================
   TYPES
   =========================================================================== */

/** The form's values exactly as read off the DOM. All strings — an empty
 *  string means "left blank", which is different from "invalid". */
export interface InquiryValues {
  name: string;
  email: string;
  phone: string;
  country: string;
  companyType: string;
  stage: string;
  message: string;
}

/** Keys of `InquiryValues` that can carry a validation error. */
export type InquiryField = keyof InquiryValues;

export type FieldErrors = Partial<Record<InquiryField, string>>;

/** Wire format. Optional members are omitted, never sent as "". */
export interface SourcingRequestPayload {
  contact: {
    name: string;
    email: string;
    phone: string;
    country: string;
  };
  business?: {
    type?: string;
    stage?: string;
  };
  message: string;
  turnstileToken?: string;
}

/* ===========================================================================
   ENDPOINT
   =========================================================================== */

export const INQUIRY_ENDPOINT = '/api/inquiry';

/* ===========================================================================
   VALIDATION
   =========================================================================== */

/**
 * A pragmatic email check, not an RFC 5322 parser. The rule it follows: reject
 * what is obviously not an address, accept everything a real customer might
 * plausibly type. Anything stricter starts rejecting valid addresses, and the
 * server validates again anyway.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Messages are injected so this module holds no user-facing copy (it lives in
 *  `src/data/sourcing-request.js`). */
export interface ValidationMessages {
  name: string;
  emailInvalid: string;
  phone: string;
  country: string;
  message: string;
}

/**
 * Validates the five required fields. Optional fields (company type, stage)
 * are never a barrier, so a blank optional field is always valid.
 */
export function validate(values: InquiryValues, messages: ValidationMessages): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = messages.name;

  const email = values.email.trim();
  if (!EMAIL_PATTERN.test(email)) errors.email = messages.emailInvalid;

  if (!values.phone.trim()) errors.phone = messages.phone;
  if (!values.country.trim()) errors.country = messages.country;

  if (!values.message.trim()) errors.message = messages.message;

  return errors;
}

/* ===========================================================================
   PAYLOAD
   =========================================================================== */

const trimmed = (value: string | undefined): string => (value ?? '').trim();

/** Include a key only when it has a value — an empty string is not data. */
function optional(key: string, value: string | undefined): Record<string, string> {
  const text = trimmed(value);
  return text ? { [key]: text } : {};
}

export function buildPayload(
  values: InquiryValues,
  turnstileToken = ''
): SourcingRequestPayload {
  const business: Record<string, string> = {};
  if (trimmed(values.companyType)) business.type = trimmed(values.companyType);
  if (trimmed(values.stage)) business.stage = trimmed(values.stage);

  return {
    contact: {
      name: trimmed(values.name),
      email: trimmed(values.email),
      phone: trimmed(values.phone),
      country: trimmed(values.country),
    },
    ...(Object.keys(business).length ? { business } : {}),
    message: trimmed(values.message),
    turnstileToken,
  };
}

/* ===========================================================================
   SUBMIT
   =========================================================================== */

export interface SubmitSuccess {
  ok: true;
  status: number;
}

export interface SubmitFailure {
  ok: false;
  /** `network` never reached a server; `rejected` got a 4xx; `server` got a 5xx. */
  reason: 'network' | 'rejected' | 'server';
  status?: number;
}

export type SubmitOutcome = SubmitSuccess | SubmitFailure;

/**
 * POST the brief to the Worker. A 2xx is the ONLY path that reports success —
 * there is no optimistic UI here, because a visitor who is told their request
 * arrived when it did not will simply never hear back from us.
 */
export async function submitInquiry(payload: SourcingRequestPayload): Promise<SubmitOutcome> {
  try {
    const response = await fetch(INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) return { ok: true, status: response.status };

    return {
      ok: false,
      reason: response.status >= 500 ? 'server' : 'rejected',
      status: response.status,
    };
  } catch {
    // fetch rejects on network failure, DNS failure and CORS rejection alike.
    return { ok: false, reason: 'network' };
  }
}

/* ===========================================================================
   ANALYTICS
   =========================================================================== */

export type TrackEvent =
  | 'view_sourcing_request'
  | 'start_sourcing_request'
  | 'submit_sourcing_request'
  | 'sourcing_request_success'
  | 'sourcing_request_error';

/**
 * Metadata keys allowed through to the analytics provider.
 *
 * This is a whitelist, not a blacklist: spec §33 forbids sending names, email
 * addresses, phone numbers or free-text requirements. A value is only ever
 * sent if its KEY is in this set.
 */
const ALLOWED_META = new Set(['errorFields', 'reason', 'status', 'durationMs']);

/**
 * No analytics provider is installed yet. The seam exists so that wiring one up
 * later is a change in this function only, and so that the events themselves
 * are already named consistently.
 */
export function track(event: TrackEvent, meta: Record<string, string | number | boolean> = {}): void {
  const safeMeta: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(meta)) {
    if (ALLOWED_META.has(key)) safeMeta[key] = value;
  }

  const w = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };

  const payload = { event, ...safeMeta };

  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  if (typeof w.gtag === 'function') w.gtag('event', event, safeMeta);
}

/* ===========================================================================
   FALLBACK SUMMARY — used only when a submission fails
   =========================================================================== */

/**
 * A plain-text version of the brief, so a failed submission is never a dead
 * end: the visitor can send exactly what they typed to the address in the
 * footer, without retyping it.
 *
 * Deliberately not part of the happy path — the API is.
 */
export function buildRequestSummary(values: InquiryValues): string {
  const line = (label: string, value: string): string | null => {
    const text = trimmed(value);
    if (!text) return null;
    return `${label}: ${text}`;
  };

  const blocks: Array<Array<string | null>> = [
    [
      line('Name', values.name),
      line('Email', values.email),
      line('Phone', values.phone),
      line('Country', values.country),
      line('Company type', values.companyType),
      line('Stage', values.stage),
    ],
    [line('Request', values.message)],
  ];

  return blocks
    .map((block) => block.filter(Boolean).join('\n'))
    .filter(Boolean)
    .join('\n\n');
}
