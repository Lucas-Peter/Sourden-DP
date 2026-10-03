/**
 * SOURDEN — /sourcing-request COPY + FIELD DEFINITIONS
 * ---------------------------------------------------------------------------
 * Every word on this page lives here (project rule: copy is data). Components
 * read from this file; none of them hard-code a label.
 *
 * The page is intentionally light: visitors describe what they need in their
 * own words, and the real conversation continues on WhatsApp or by email. Only
 * five fields are required — name, email, phone, country and a short
 * description — so a visitor can start before they have every detail worked out.
 *
 * Apostrophes are the typographic ’ (U+2019).
 * ---------------------------------------------------------------------------
 */

/** <head> metadata. */
export const sourcingRequestMeta = {
  title: 'Start a Sourcing Request | SOURDEN',
  description:
    'Tell SOURDEN what you’re looking for and we’ll help you source suitable products and suppliers from China.',
};

/** Section 1 — restrained editorial hero. */
export const hero = {
  eyebrow: 'START A SOURCING REQUEST',
  title: 'Tell us what you’re looking for.',
  supporting:
    'Send a short description of what you need and how to reach you. We’ll review it and reply with the next step — no long form required.',
  secondary: 'You don’t need to have every detail figured out before you start.',
  imageCaption: 'SOURCING IN CHINA',
};

/** Sits directly above the form. */
export const formIntro = {
  eyebrow: 'YOUR SOURCING REQUEST',
  title: 'What would you like to source?',
  supporting:
    'A sentence or two is enough to get started. We’ll go through the details together on WhatsApp or by email.',
  /** Shown once, next to the required-field key. */
  requiredNote: 'Only your name, email, phone, country and a short description are needed. Everything else is optional.',
};

/** Field labels and placeholders. */
export const fields = {
  name: {
    label: 'Your name',
    required: true,
  },
  email: {
    label: 'Email address',
    placeholder: 'you@company.com',
    required: true,
  },
  phone: {
    label: 'Phone number',
    placeholder: '+1 555 123 4567',
    required: true,
  },
  country: {
    label: 'Country',
    placeholder: 'e.g. United States',
    required: true,
  },
  message: {
    label: 'What are you looking to source?',
    placeholder:
      'e.g. the product, approximate quantity, material, or just a link to something similar — anything you already know.',
    required: true,
  },
  companyType: {
    label: 'Company type',
    placeholder: 'e.g. Retailer, Wholesaler, Salon, Individual',
  },
  stage: {
    label: 'Stage of your business',
    placeholder: 'e.g. Exploring an idea, Comparing suppliers, Ready to order',
  },
};

/** Submission area copy. The button label is forbidden from being
 *  "Get Instant Quote" / "Get Best Price" / "Order Now". */
export const submitSection = {
  eyebrow: 'READY WHEN YOU ARE',
  title: 'Send your sourcing request.',
  supporting: 'We’ll review what you send and get back to you with the next steps.',
  button: 'Submit Sourcing Request',
  submitting: 'Submitting…',
  /** Shown only when Turnstile is configured. */
  turnstileNote: 'This form is protected against automated submissions.',
};

/** Human, concise, no technical wording. */
export const validationMessages = {
  summaryTitle: 'Please check the highlighted fields.',
  name: 'Please enter your name.',
  emailInvalid: 'Please enter a valid email address.',
  phone: 'Please enter your phone number.',
  country: 'Please enter your country.',
  message: 'Please tell us what you’re looking for.',
  /** Only reachable once a Turnstile site key has been configured. */
  turnstileRequired: 'Please complete the verification above before submitting.',
};

/** The three terminal states, plus the submitting state. */
export const states = {
  success: {
    eyebrow: 'REQUEST RECEIVED',
    title: 'Thank you. We’ve received your sourcing request.',
    body: 'We’ll review the information you provided and get back to you with the next steps.',
    secondary: 'We’ll be in touch by email or WhatsApp — whichever works best for you.',
    home: 'Back to Home',
    services: 'Explore Our Services',
  },
  error: {
    eyebrow: 'SOMETHING WENT WRONG',
    title: 'We couldn’t submit your request.',
    body:
      'Please check your information and try again. If the problem continues, you can contact us directly.',
    retry: 'Try Again',
    /** Direct fallback so a failed submission is never a dead end. */
    directTitle: 'You can also reach us directly:',
  },
};

/** What happens after a request is received. */
export const whatHappensNext = {
  eyebrow: 'WHAT HAPPENS NEXT',
  title: 'A simple process from request to sourcing.',
  steps: [
    {
      number: '01',
      title: 'We Review',
      description: 'We review your requirements, specifications and sourcing goals.',
    },
    {
      number: '02',
      title: 'We Research',
      description:
        'We identify and evaluate suitable sourcing options based on your requirements.',
    },
    {
      number: '03',
      title: 'We Come Back to You',
      description: 'We share relevant findings, questions and next steps.',
    },
    {
      number: '04',
      title: 'We Move Forward',
      description:
        'If the sourcing direction works for you, we can move into quotation, purchasing and the rest of the process.',
    },
  ],
  /** A request is not an order. */
  footnote:
    'Not every request moves straight to an order — if the sourcing direction does not fit, we will tell you.',
};

/** One restrained editorial statement, not a second homepage. */
export const supportingStatement = {
  eyebrow: 'START WHERE YOU ARE',
  title: 'You don’t need to have everything figured out before you start.',
  body:
    'Whether you’re testing a new product, looking for a better supplier or building a longer-term sourcing relationship, start with what you know. We’ll work through the details with you.',
};

/** Navigation only. No second marketing block below the form. */
export const finalNav = {
  services: { label: 'Back to Services', href: '/services' },
  howItWorks: { label: 'Explore How It Works', href: '/how-it-works' },
};

/** Breadcrumb trail BELOW Home — `Breadcrumbs.astro` prepends Home itself. */
export const breadcrumbs = [{ label: 'Start a Sourcing Request' }];
