/**
 * SOURDEN — SOURCING INQUIRY: TYPES, VALIDATION, SUBMIT, UPLOAD, ANALYTICS
 * ---------------------------------------------------------------------------
 * The whole form's logic, with ZERO DOM access. Everything here is a pure
 * function or a typed service call, so the same code can later run on the
 * server (spec §36: server-side validation must duplicate the client's).
 * The page's <script> owns the DOM and nothing else.
 *
 * The four services are deliberately thin wrappers over a single endpoint:
 *
 *   submitInquiry()  → POST /api/inquiry   (spec §21)
 *   uploadFiles()    → POST /api/upload    (spec §22, R2 later)
 *   track()          → no provider yet; the seam exists (spec §33)
 *   buildRequestSummary() → plain-text fallback for a failed submission
 *
 * WHAT THIS FILE WILL NOT DO
 *   · Never reports success unless the network call actually succeeded.
 *     There is no fake "thanks, we got it" state (spec §21, §23).
 *   · Never base64-embeds files into the inquiry payload (spec §22).
 *   · Never sends a name, email address, phone number or free text to
 *     analytics — `track()` whitelists its metadata keys (spec §33).
 * ---------------------------------------------------------------------------
 */

/* ===========================================================================
   TYPES — spec §21 payload shape, §35 data model
   =========================================================================== */

export type CurrencyCode = 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'OTHER';

/** A file the visitor picked, held in memory only. No localStorage (spec §47). */
export interface SelectedFile {
  /** Stable id so one file can be removed without disturbing the others. */
  id: string;
  name: string;
  size: number;
  type: string;
  /**
   * The actual File object, kept so the upload can send it and so removing one
   * entry does not require re-reading the input. Never persisted anywhere.
   */
  file: File;
  /**
   * Storage key returned by /api/upload. Absent until the file has really been
   * uploaded — never invented, so "has a key" is a truthful upload signal.
   */
  key?: string;
}

/** One row of the destination country <select>. */
export interface CountryOption {
  value: string;
  label: string;
}

/** The form's values exactly as read off the DOM. All strings — an empty
 *  string means "left blank", which is different from "invalid". */
export interface InquiryValues {
  productName: string;
  specifications: string;
  customization: string;
  currency: string;
  targetPrice: string;
  quantity: string;
  frequency: string;
  stage: string;
  country: string;
  cityPostcode: string;
  businessType: string;
  website: string;
  name: string;
  email: string;
  whatsapp: string;
  preferredMethod: string;
  additionalInformation: string;
}

/** Keys of `InquiryValues` that can carry a validation error. */
export type InquiryField = keyof InquiryValues;

export type FieldErrors = Partial<Record<InquiryField, string>>;

/** Spec §21 wire format. Optional members are omitted, never sent as "". */
export interface SourcingRequestPayload {
  product: {
    name: string;
    specifications?: string;
    customization?: string;
    targetPrice?: { amount?: number; currency?: string };
  };
  /** Metadata for every selected file, plus `key` once it is stored. */
  files: Array<{ name: string; size: number; type: string; key?: string }>;
  order: {
    quantity?: string;
    frequency?: string;
    stage?: string;
  };
  /**
   * Spec §21 splits this into `city` and `postalCode`, but the form collects a
   * single "City / postal code" field (spec §14). The typed text therefore goes
   * into `city` as-is; `postalCode` stays part of the schema for the day the
   * field is split in two. Sending the same string twice would be worse.
   */
  destination: {
    country: string;
    city?: string;
    postalCode?: string;
  };
  business: {
    type?: string;
    website?: string;
  };
  contact: {
    name: string;
    email: string;
    whatsapp?: string;
    preferredMethod?: string;
  };
  additionalInformation?: string;
  turnstileToken?: string;
}

/* ===========================================================================
   ENDPOINTS + FILE RULES
   =========================================================================== */

export const INQUIRY_ENDPOINT = '/api/inquiry';
export const UPLOAD_ENDPOINT = '/api/upload';

/** Spec §11 limits. Enforced on the client here and again on the server. */
export const FILE_RULES = {
  /** Extensions the picker advertises... */
  extensions: ['.jpg', '.jpeg', '.png', '.webp', '.pdf'],
  /** ...and the MIME list the picker accepts. Both are needed: Safari ignores
   *  a bare extension list, and some desktop pickers ignore MIME types. */
  mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  maxFiles: 10,
  maxBytes: 10 * 1024 * 1024,
} as const;

export const acceptAttribute = [...FILE_RULES.extensions, ...FILE_RULES.mimeTypes].join(',');

/** Human-readable size, used in the file list and in error messages. */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/* ===========================================================================
   VALIDATION — spec §19
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
  productName: string;
  country: string;
  name: string;
  emailInvalid: string;
  targetPriceInvalid: string;
  websiteInvalid: string;
}

/**
 * Validates ONLY the four required fields plus format checks on two optional
 * ones. Spec §24 and §38 are explicit that optional fields must not become
 * barriers, so a blank optional field is always valid.
 */
export function validate(values: InquiryValues, messages: ValidationMessages): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.productName.trim()) errors.productName = messages.productName;
  if (!values.country.trim()) errors.country = messages.country;
  if (!values.name.trim()) errors.name = messages.name;

  const email = values.email.trim();
  // One message for both cases — blank and malformed. "Please enter a valid
  // email address" is correct either way, and a second message would only be
  // reachable when the field is empty, where it says nothing extra.
  if (!EMAIL_PATTERN.test(email)) errors.email = messages.emailInvalid;

  // Optional, but if something was typed it has to be usable.
  const price = values.targetPrice.trim();
  if (price && parseAmount(price) === undefined) errors.targetPrice = messages.targetPriceInvalid;

  const website = values.website.trim();
  if (website && !/^(https?:\/\/|www\.)|\.[a-z]{2,}(\/|$)/i.test(website)) {
    errors.website = messages.websiteInvalid;
  }

  return errors;
}

/**
 * Parse a typed price into a number.
 * Accepts "5", "5.00", "1,200.50", "$5.00", "5,00" is ambiguous and rejected.
 * Returns undefined when the text is not a usable number, which is the signal
 * the validator and the payload builder both key off.
 */
export function parseAmount(raw: string): number | undefined {
  const cleaned = raw.replace(/[^\d.,]/g, '');
  if (!cleaned) return undefined;

  // Treat a lone comma as a decimal separator only when there is no dot.
  const normalised = cleaned.includes('.') ? cleaned.replace(/,/g, '') : cleaned.replace(/,/g, '.');
  const value = Number.parseFloat(normalised);

  return Number.isFinite(value) && value >= 0 ? value : undefined;
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
  files: SelectedFile[] = [],
  turnstileToken = ''
): SourcingRequestPayload {
  const amount = parseAmount(values.targetPrice);
  const currency = trimmed(values.currency);
  const hasTarget = amount !== undefined || Boolean(currency);

  return {
    product: {
      name: trimmed(values.productName),
      ...optional('specifications', values.specifications),
      ...optional('customization', values.customization),
      ...(hasTarget
        ? { targetPrice: { ...(amount !== undefined ? { amount } : {}), ...(currency ? { currency } : {}) } }
        : {}),
    },
    files: files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      ...(file.key ? { key: file.key } : {}),
    })),
    order: {
      ...optional('quantity', values.quantity),
      ...optional('frequency', values.frequency),
      ...optional('stage', values.stage),
    },
    destination: {
      country: trimmed(values.country),
      ...optional('city', values.cityPostcode),
    },
    business: {
      ...optional('type', values.businessType),
      ...optional('website', values.website),
    },
    contact: {
      name: trimmed(values.name),
      email: trimmed(values.email),
      ...optional('whatsapp', values.whatsapp),
      ...optional('preferredMethod', values.preferredMethod),
    },
    ...optional('additionalInformation', values.additionalInformation),
    turnstileToken,
  };
}

/* ===========================================================================
   SUBMIT — spec §21, §23
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
   UPLOAD — spec §22
   =========================================================================== */

export interface UploadSuccess {
  ok: true;
  /** Same order as the input, so callers can zip keys back onto files. */
  keys: string[];
}

export interface UploadFailure {
  ok: false;
  /** The file that failed, so the UI can name it instead of "an error occurred". */
  fileName: string;
  reason: 'network' | 'rejected' | 'server';
  status?: number;
}

export type UploadOutcome = UploadSuccess | UploadFailure;

/**
 * Upload selected files one at a time to /api/upload (Cloudflare R2 later).
 *
 * Sequential on purpose: a partial success is easy to report when each request
 * is its own result, and ten parallel uploads of 10 MB each is not something a
 * phone on mobile data should be asked to do.
 *
 * Callers must treat a failure as a failure. Nothing here fabricates a key.
 */
export async function uploadFiles(
  files: SelectedFile[],
  onProgress?: (done: number, total: number) => void
): Promise<UploadOutcome> {
  const keys: string[] = [];

  for (const [index, file] of files.entries()) {
    const body = new FormData();
    body.append('file', file.file, file.name);
    body.append('name', file.name);

    let response: Response;
    try {
      response = await fetch(UPLOAD_ENDPOINT, { method: 'POST', body });
    } catch {
      return { ok: false, fileName: file.name, reason: 'network' };
    }

    if (!response.ok) {
      return {
        ok: false,
        fileName: file.name,
        reason: response.status >= 500 ? 'server' : 'rejected',
        status: response.status,
      };
    }

    const key = await readKey(response);
    if (!key) {
      // A 200 with no key is not a usable upload — saying otherwise would put a
      // file in the payload that does not exist in storage.
      return { ok: false, fileName: file.name, reason: 'server', status: response.status };
    }

    keys.push(key);
    onProgress?.(index + 1, files.length);
  }

  return { ok: true, keys };
}

async function readKey(response: Response): Promise<string | null> {
  try {
    const data: unknown = await response.json();
    if (data && typeof data === 'object' && 'key' in data) {
      const key = (data as { key: unknown }).key;
      return typeof key === 'string' && key ? key : null;
    }
  } catch {
    /* not JSON — treated as a failed upload below */
  }
  return null;
}

/* ===========================================================================
   ANALYTICS — spec §33
   =========================================================================== */

export type TrackEvent =
  | 'view_sourcing_request'
  | 'start_sourcing_request'
  | 'upload_sourcing_file'
  | 'submit_sourcing_request'
  | 'sourcing_request_success'
  | 'sourcing_request_error';

/**
 * Metadata keys allowed through to the analytics provider.
 *
 * This is a whitelist, not a blacklist, and that is the whole point: spec §33
 * forbids sending names, email addresses, WhatsApp numbers, free-text
 * requirements or file contents. A blacklist would leak the first field someone
 * adds later. A value is only ever sent if its KEY is in this set.
 */
const ALLOWED_META = new Set(['fileCount', 'hasFiles', 'errorFields', 'reason', 'status', 'durationMs']);

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
export function buildRequestSummary(
  values: InquiryValues,
  files: SelectedFile[] = [],
  labels: Record<string, string> = {}
): string {
  const line = (label: string, value: string): string | null => {
    const text = trimmed(value);
    if (!text) return null;
    return `${label}: ${text}`;
  };

  const blocks: Array<Array<string | null>> = [
    [
      line('Product', values.productName),
      line('Specifications', values.specifications),
      line('Customization', values.customization),
      line(
        'Target price',
        [values.targetPrice.trim(), values.currency.trim()].filter(Boolean).join(' ')
      ),
    ],
    [
      line('Quantity', values.quantity),
      line('Frequency', labels[values.frequency] ?? values.frequency),
      line('Stage', labels[values.stage] ?? values.stage),
    ],
    [line('Destination country', values.country), line('City / postal code', values.cityPostcode)],
    [
      line('Business type', labels[values.businessType] ?? values.businessType),
      line('Website', values.website),
    ],
    [
      line('Name', values.name),
      line('Email', values.email),
      line('WhatsApp', values.whatsapp),
      line('Preferred contact', labels[values.preferredMethod] ?? values.preferredMethod),
    ],
    [line('Additional information', values.additionalInformation)],
  ];

  const body = blocks
    .map((block) => block.filter(Boolean).join('\n'))
    .filter(Boolean)
    .join('\n\n');

  const fileNote =
    files.length > 0
      ? `\n\nReference files selected (${files.length}) — attached separately:\n` +
        files.map((file) => `- ${file.name} (${formatFileSize(file.size)})`).join('\n')
      : '';

  return `${body}${fileNote}`;
}
