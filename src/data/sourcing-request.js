/**
 * SOURDEN — /sourcing-request COPY + FIELD DEFINITIONS
 * ---------------------------------------------------------------------------
 * Every word on this page lives here (project rule: copy is data). Components
 * read from this file; none of them hard-code a label.
 *
 * TWO THINGS TO KNOW BEFORE EDITING
 *
 * 1. This file is new. The reservation-page copy this route used to render lives
 *    in `src/data/routes.js` → `reservedTopLevel` and is removed in the same
 *    change that builds this page: a route cannot be both "reserved" and real,
 *    and `astro.config.mjs` derives the noindex/sitemap split from that list.
 *
 * 2. This page is a professional sourcing BRIEF, not a contact form. The
 *    optional/required split is deliberate and is the single most important
 *    detail on the page: only four fields are required (product, destination
 *    country, name, email) so a visitor who has not figured everything out yet
 *    can still start. Do not promote optional fields to required.
 *
 * Apostrophes are the typographic ’ (U+2019), matching the rest of the site.
 * ---------------------------------------------------------------------------
 */

/** <head> metadata — spec §5. */
export const sourcingRequestMeta = {
  title: 'Start a Sourcing Request | Sourden',
  description:
    'Tell Sourden what you’re looking for and we’ll help you source suitable products and suppliers from China.',
};

/** Section 1 — restrained editorial hero (spec §8). */
export const hero = {
  eyebrow: 'START A SOURCING REQUEST',
  title: 'Tell us what you’re looking for.',
  supporting:
    'Share your product requirements, quantity, target market and any other details you have. We’ll review your request and help you determine the next step.',
  /** Spec §8 optional secondary line. Reinforces "you can start now". */
  secondary: 'You don’t need to have every detail figured out before you start.',
  imageCaption: 'SOURCING IN CHINA',
};

/** Sits directly above the form (spec §9). */
export const formIntro = {
  eyebrow: 'YOUR SOURCING BRIEF',
  title: 'What are you looking to source?',
  supporting:
    'The more detail you can provide, the more effectively we can research suitable sourcing options. If you’re still exploring, that’s fine too.',
  /** Shown once, next to the required-field key. */
  requiredNote: 'Only four fields are required. Everything else helps, but is optional.',
};

/**
 * The eight numbered blocks of the brief (spec §10, §32).
 * `number` is displayed as a brass label ("01"), `label` as the uppercase
 * section name ("PRODUCT"), so the eyebrow reads "01 — PRODUCT".
 */
export const formSections = [
  { id: 'product', number: '01', label: 'PRODUCT', title: 'What are you looking for?' },
  { id: 'requirements', number: '02', label: 'REQUIREMENTS', title: 'Tell us about the product.' },
  { id: 'order', number: '03', label: 'ORDER', title: 'What quantity are you considering?' },
  { id: 'destination', number: '04', label: 'DESTINATION', title: 'Where will the products be shipped?' },
  { id: 'business', number: '05', label: 'YOUR BUSINESS', title: 'Tell us a little about your business.' },
  { id: 'contact', number: '06', label: 'CONTACT', title: 'How should we contact you?' },
  { id: 'additional', number: '07', label: 'ADDITIONAL INFORMATION', title: 'Anything else we should know?' },
];

/**
 * `formSections` keyed by id, so each section component can name its own
 * heading without seven props being threaded through the form.
 */
export const formSectionsById = Object.fromEntries(formSections.map((section) => [section.id, section]));

/** Field labels, placeholders and helper text (spec §11–§17). */
export const fields = {
  /**
   * First option of every optional <select>. Without it the browser would
   * preselect the first real option and the payload would carry an answer the
   * visitor never gave.
   */
  selectPlaceholder: 'Select…',
  productName: {
    label: 'Product name or description',
    placeholder: 'e.g. custom packaging boxes, LED Christmas tree, sports jerseys',
    required: true,
  },
  files: {
    label: 'Reference images or files',
    hint: 'Upload product photos, screenshots, specifications, drawings or other reference materials.',
    /** Limits are interpolated from FILE_RULES so the text can never drift
     *  away from what the field actually enforces. */
    limits: 'JPG, PNG, WEBP or PDF · up to {files} files · {size} each',
    empty: 'No files selected.',
    listLabel: 'Reference files you have added',
    listCount: '{count} of {max} files',
    choose: 'Choose files',
    addMore: 'Add more files',
    chooseAgain: 'Choose files',
    remove: 'Remove {name}',
    /** Shown in the error state when the files could not be sent. */
    uploadFailed:
      'Your reference files could not be uploaded, so your request was not sent. You can remove the files and submit again, or email them to us directly.',
  },
  specifications: {
    label: 'Product specifications',
    placeholder: 'Material, size, color, finish, packaging, technical requirements, etc.',
  },
  customization: {
    label: 'Customization',
    placeholder: 'Logo, packaging, branding, private label, special dimensions, etc.',
  },
  targetPrice: {
    label: 'Target price',
    currencyLabel: 'Currency',
    amountLabel: 'Amount',
    amountPlaceholder: 'e.g. 5.00',
    hint: 'If you have a target price, it helps us evaluate suitable sourcing options.',
    /** Spec §12: never imply the target price is guaranteed. */
    caution: 'A target price is a starting point for evaluation, not a quotation.',
    otherCurrency: 'Other currency',
  },
  quantity: {
    label: 'Estimated quantity',
    placeholder: 'e.g. 500',
    hint: 'A rough figure is enough — you can write a range if that is easier.',
  },
  orderFrequency: {
    label: 'Order frequency',
  },
  stage: {
    label: 'Where are you in the process?',
  },
  country: {
    label: 'Destination country',
    placeholder: 'Select a country',
    required: true,
  },
  cityPostcode: {
    label: 'City / postal code',
    placeholder: 'e.g. Toronto, M5V 2T6',
    hint: 'This helps us understand the appropriate shipping options.',
  },
  businessType: {
    label: 'Business type',
  },
  website: {
    label: 'Website or social media',
    placeholder: 'https://',
    hint:
      'Optional — share your website, store or social profile if you’d like us to understand your business better.',
  },
  name: {
    label: 'Your name',
    required: true,
  },
  email: {
    label: 'Email address',
    placeholder: 'you@company.com',
    required: true,
  },
  whatsapp: {
    label: 'WhatsApp number',
    placeholder: '+1 555 123 4567',
  },
  preferredMethod: {
    label: 'Preferred contact method',
  },
  additionalInformation: {
    label: 'Additional details',
    placeholder:
      'Tell us about your requirements, concerns, timeline, previous sourcing experience, or anything else that may help us understand your request.',
  },
};

/**
 * Microcopy shown once (spec §42). Deliberately not repeated per section —
 * reassurance repeated becomes noise.
 */
export const specificationMicrocopy =
  'Not sure about the exact specification? Tell us what you know and we’ll work through the details with you.';

/** Option sets. `value` is what the backend receives; `label` is what is shown. */
export const currencies = [
  { value: 'USD', label: 'USD' },
  { value: 'CAD', label: 'CAD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'AUD', label: 'AUD' },
  { value: 'OTHER', label: 'Other' },
];

export const orderFrequencyOptions = [
  { value: 'one-time', label: 'One-time order' },
  { value: 'occasional', label: 'Occasional orders' },
  { value: 'regular', label: 'Regular / repeat orders' },
  { value: 'not-sure', label: 'Not sure yet' },
];

export const stageOptions = [
  { value: 'exploring', label: 'Just exploring' },
  { value: 'looking-for-suppliers', label: 'Looking for suppliers' },
  { value: 'comparing-quotations', label: 'Comparing quotations' },
  { value: 'ready-to-order', label: 'Ready to place an order' },
  { value: 'already-sourcing', label: 'Already sourcing from China' },
  { value: 'new-supplier', label: 'Looking for a new supplier' },
];

export const businessTypeOptions = [
  { value: 'wholesaler', label: 'Wholesaler' },
  { value: 'retailer', label: 'Retailer' },
  { value: 'local-shop', label: 'Local shop' },
  { value: 'ecommerce', label: 'E-commerce business' },
  { value: 'brand', label: 'Brand' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'other', label: 'Other' },
];

/** Spec §16 — defaults to Email. */
export const preferredMethodOptions = [
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'either', label: 'Either' },
];

/** Submission area copy (spec §18). The button label is forbidden from being
 *  "Get Instant Quote" / "Get Best Price" / "Order Now" — see spec §18. */
export const submitSection = {
  eyebrow: 'READY WHEN YOU ARE',
  title: 'Send your sourcing request.',
  supporting: 'We’ll review the information you provide and get back to you with the next steps.',
  button: 'Submit Sourcing Request',
  submitting: 'Submitting…',
  /** Spec §20 — shown only when Turnstile is configured. */
  turnstileNote: 'This form is protected against automated submissions.',
};

/** Spec §19 — human, concise, no technical wording.
 *
 *  The four required fields use the spec's four example messages verbatim.
 *  Email gets ONE message rather than separate "missing" and "malformed"
 *  wording: the spec names a single message for the field, and "Please enter a
 *  valid email address" reads correctly whether the visitor left it blank or
 *  mistyped it. */
export const validationMessages = {
  summaryTitle: 'Please check the highlighted fields.',
  productName: 'Product name is required.',
  country: 'Please select a destination country.',
  name: 'Please enter your name.',
  emailInvalid: 'Please enter a valid email address.',
  /** Format checks on optional fields: only shown once something has been typed. */
  targetPriceInvalid: 'Please enter the target price as a number, or leave it blank.',
  websiteInvalid: 'Please enter a website address, or leave it blank.',
  fileCount: 'You can upload up to {max} files. Extra files were not added.',
  fileSize: '“{name}” is larger than {max} MB and was not added.',
  fileType: '“{name}” is not a supported file type (JPG, PNG, WEBP or PDF).',
  /** Only reachable once a Turnstile site key has been configured (spec §20). */
  turnstileRequired: 'Please complete the verification above before submitting.',
};

/** Spec §23 — the three terminal states, plus the submitting state. */
export const states = {
  success: {
    eyebrow: 'REQUEST RECEIVED',
    title: 'Thank you. We’ve received your sourcing request.',
    body: 'We’ll review the information you provided and get back to you with the next steps.',
    secondary:
      'If you included reference files or product details, we’ll review those as part of your request.',
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

/** Spec §25 — what happens after a request is received. */
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
  /** Spec §25: a request is not an order. */
  footnote:
    'Not every request moves straight to an order — if the sourcing direction does not fit, we will tell you.',
};

/** Spec §26 — one restrained editorial statement, not a second homepage. */
export const supportingStatement = {
  eyebrow: 'START WHERE YOU ARE',
  title: 'You don’t need to have everything figured out before you start.',
  body:
    'Whether you’re testing a new product, looking for a better supplier or building a longer-term sourcing relationship, start with what you know. We’ll work through the details with you.',
};

/** Spec §27 — navigation only. No second marketing block below the form. */
export const finalNav = {
  services: { label: 'Back to Services', href: '/services' },
  howItWorks: { label: 'Explore How It Works', href: '/how-it-works' },
};

/**
 * Breadcrumb trail BELOW Home — `Breadcrumbs.astro` prepends Home itself.
 *
 * This array used to declare Home as well, so the page rendered
 * "Home / Home / Start a Sourcing Request" while the BreadcrumbList in the
 * JSON-LD (which read this array directly) had the correct two levels. The
 * visible trail and the structured data are now derived from the same source —
 * see `breadcrumbItems()` in `src/data/schema.js`.
 */
export const breadcrumbs = [{ label: 'Start a Sourcing Request' }];
