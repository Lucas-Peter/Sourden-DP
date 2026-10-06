/**
 * SOURDEN — inquiry API worker (V1)
 * ---------------------------------------------------------------------------
 * Serves ONLY `/api/inquiry` (POST). All other requests are served as static
 * assets — wrangler.toml routes `/api/*` to this Worker via
 * `assets.run_worker_first = ["/api/*"]`, so the static site is untouched and
 * the Worker is billed only for API hits.
 *
 * Contract (the current frontend is the source of truth — src/lib/inquiry.ts):
 *   {
 *     contact: { name, email, phone, country },   // all required
 *     business?: { type?, stage? },               // optional
 *     message: string,                             // required
 *     turnstileToken?: string                      // "" when Turnstile unset
 *   }
 *
 * Behaviour:
 *   · Validates server-side (mirrors the client rules).
 *   · Verifies Cloudflare Turnstile only when TURNSTILE_SECRET_KEY is set.
 *   · Sends a notification to service@sourden.com (Reply-To = customer) and a
 *     confirmation to the customer, via Resend.
 *   · Returns 2xx ONLY when the inquiry was actually delivered.
 *   · Never returns secrets or internal error details to the browser.
 *
 * No database, no CRM, no file upload — by design (V1 scope).
 * ---------------------------------------------------------------------------
 */

const RESEND_API = 'https://api.resend.com/emails';
const NOTIFY_TO = 'service@sourden.com';
const FROM = 'SOURDEN <service@sourden.com>';

const MAX_BODY_BYTES = 64 * 1024;

// Pragmatic email check — matches src/lib/inquiry.ts; server is the authority.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ===========================================================================
   RESPONSES
   =========================================================================== */

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

/**
 * Client-facing messages are generic and safe. `reason: 'validation'` → 400
 * (ask the visitor to retry); everything else → 500 (temporary server fault).
 */
function fail(reason) {
  const message =
    reason === 'validation'
      ? 'Please check your information and try again.'
      : "We couldn't submit your request. Please try again later.";
  return json(reason === 'validation' ? 400 : 500, { success: false, error: message });
}

/* ===========================================================================
   INPUT NORMALISATION
   =========================================================================== */

function str(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/* ===========================================================================
   TURNSTILE
   =========================================================================== */

/**
 * Verify the Turnstile token server-side. If no secret is configured the site
 * is unprotected but submissions still flow — that is the intended
 * configuration-ready state (set TURNSTILE_SECRET_KEY together with
 * PUBLIC_TURNSTILE_SITE_KEY to switch protection on, no code change).
 *
 * A transport failure to the verification endpoint fails CLOSED (server error),
 * so we never silently accept a bot when verification is supposed to run.
 */
async function verifyTurnstile(token, secret, request) {
  if (!secret) {
    console.warn(
      '[inquiry] Turnstile not configured (TURNSTILE_SECRET_KEY absent); skipping verification.'
    );
    return { ok: true, skipped: true };
  }
  if (!token) {
    return { ok: false, reason: 'missing-token' };
  }

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  const ip = request.headers.get('cf-connecting-ip');
  if (ip) body.set('remoteip', ip);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    const data = await res.json();
    if (data.success === true) return { ok: true };
    console.warn('[inquiry] Turnstile verify failed:', JSON.stringify(data));
    return { ok: false, reason: 'verify-failed' };
  } catch (err) {
    console.error('[inquiry] Turnstile verify transport error:', err?.message ?? String(err));
    return { ok: false, reason: 'verify-error' };
  }
}

/* ===========================================================================
   EMAIL
   =========================================================================== */

function buildNotificationText(payload, receivedAt) {
  const c = payload.contact;
  const b = payload.business ?? {};
  const blocks = [
    'SOURDEN — New Sourcing Inquiry',
    '',
    `Received: ${receivedAt} (UTC)`,
    '',
    'CUSTOMER',
    `  Name:    ${c.name}`,
    `  Email:   ${c.email}`,
    `  Phone:   ${c.phone}`,
    `  Country: ${c.country}`,
  ];
  if (b.type) blocks.push(`  Company type: ${b.type}`);
  if (b.stage) blocks.push(`  Stage:   ${b.stage}`);
  blocks.push('');
  blocks.push('REQUEST');
  blocks.push(payload.message);
  blocks.push('');
  blocks.push("Reply-To is set to the customer's email — reply to this message to reach them directly.");
  return blocks.join('\n');
}

function buildConfirmationText(payload) {
  const c = payload.contact;
  return [
    `Hi ${c.name},`,
    '',
    'Thank you for contacting SOURDEN. We have received your sourcing request and our team will review it and follow up with you.',
    '',
    'Here is a copy of what you sent us:',
    `  Country: ${c.country}`,
    `  Request: ${payload.message}`,
    '',
    'If you would like to share reference images, product links or specifications, you can simply reply to this email or reach us on WhatsApp.',
    '',
    'Best regards,',
    'SOURDEN',
    'service@sourden.com',
    'https://sourden.com',
  ].join('\n');
}

/**
 * Send one email through Resend. Returns the Response so the caller decides
 * success/failure. Logs only the status code — never the response body, which
 * may contain provider details.
 */
async function sendEmail(apiKey, message) {
  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  if (!res.ok) {
    console.error(`[inquiry] Resend responded ${res.status}`);
  }
  return res;
}

/* ===========================================================================
   HANDLER
   =========================================================================== */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== '/api/inquiry') {
      return json(404, { success: false, error: 'Not found.' });
    }
    if (request.method !== 'POST') {
      return json(405, { success: false, error: 'Method not allowed.' });
    }

    // Cheap pre-read guard; re-checked after reading in case the header lies.
    const declared = Number(request.headers.get('content-length') ?? 0);
    if (declared > MAX_BODY_BYTES) return fail('validation');

    let raw;
    try {
      raw = await request.text();
    } catch {
      return fail('validation');
    }
    if (raw.length > MAX_BODY_BYTES) return fail('validation');

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return fail('validation');
    }

    /* ---- validate shape (mirror of src/lib/inquiry.ts) ---- */
    const contact = parsed?.contact ?? {};
    const name = str(contact.name);
    const email = str(contact.email);
    const phone = str(contact.phone);
    const country = str(contact.country);
    const message = str(parsed?.message);

    const missing = [];
    if (!name) missing.push('name');
    if (!EMAIL_PATTERN.test(email)) missing.push('email');
    if (!phone) missing.push('phone');
    if (!country) missing.push('country');
    if (!message) missing.push('message');
    if (missing.length) {
      console.warn('[inquiry] validation failed:', missing.join(','));
      return fail('validation');
    }

    const payload = {
      contact: { name, email, phone, country },
      business: parsed?.business ?? {},
      message,
      turnstileToken: str(parsed?.turnstileToken),
    };

    /* ---- Turnstile ---- */
    const ts = await verifyTurnstile(payload.turnstileToken, env.TURNSTILE_SECRET_KEY, request);
    if (!ts.ok) {
      // verify-error = transport failure → fail closed (500).
      // missing-token / verify-failed → ask the visitor to retry (400).
      return ts.reason === 'verify-error' ? fail('server') : fail('validation');
    }

    /* ---- Email (notification must succeed or we report failure) ---- */
    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[inquiry] RESEND_API_KEY not configured; cannot deliver inquiry.');
      return fail('server');
    }

    const receivedAt = new Date().toISOString();
    try {
      const notifyRes = await sendEmail(apiKey, {
        from: FROM,
        to: [NOTIFY_TO],
        reply_to: [email],
        subject: `New sourcing inquiry — ${name}`,
        text: buildNotificationText(payload, receivedAt),
      });
      if (!notifyRes.ok) return fail('server');

      // Confirmation is best-effort: the inquiry itself was delivered.
      try {
        await sendEmail(apiKey, {
          from: FROM,
          to: [email],
          subject: 'We have received your SOURDEN sourcing request',
          text: buildConfirmationText(payload),
        });
      } catch (err) {
        console.error('[inquiry] confirmation email failed:', err?.message ?? String(err));
      }
    } catch (err) {
      console.error('[inquiry] notification email failed:', err?.message ?? String(err));
      return fail('server');
    }

    return json(200, { success: true });
  },
};
