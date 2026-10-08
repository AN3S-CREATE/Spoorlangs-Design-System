import type * as React from 'react';

// ---- Base ----
// Base — Spoorlangs global rules (group: Typography). No components are exported from this part;
// its contribution is Base.css only (resets, html/body, .site-shell, .section, h1/h2/h3, .lead colour group,
// .wide-visual, .legacy-anchor, :focus-visible, ::selection, reduced motion). Intentionally empty of declarations.

// ---- Button ----
// Button — Spoorlangs (group: Actions). Declarations as documentation; mirrors Button.js.

/** The five lucide icons the site renders inside buttons (project/assets/Icons/<name>.svg). */
export type ButtonIconName = 'message-circle' | 'arrow-right' | 'mail' | 'calendar-check' | 'wand-sparkles';

export interface ButtonIconProps {
  /** Which icon: message-circle (leading, every WhatsApp CTA), arrow-right (trailing), mail, calendar-check, wand-sparkles (leading). */
  name: ButtonIconName;
  /** Extra class names appended after the site's "lucide lucide-<name>". */
  className?: string;
}

/** Inline lucide <svg> exactly as the site renders it: 24×24, fill none, stroke currentColor, stroke-width 2, aria-hidden. Sized to 1.15rem by `.button-primary svg,.button-secondary svg`. */
export declare function ButtonIcon(props: ButtonIconProps): React.ReactElement;

export interface ButtonProps extends Record<string, unknown> {
  /** "primary" → `.button-primary` (Ignition Orange, Asphalt label); "secondary" → `.button-secondary` (Titanium outline). Default "primary". */
  variant?: 'primary' | 'secondary';
  /** Adds `.button-compact` (min-height 2.75rem, .78rem → .84rem at ≥640px); the header's "Get a quote". */
  compact?: boolean;
  /** Renders an `<a href>` instead of a `<button>`; use "/quote?service=&pickup=", "mailto:drive@spoorlangs.online", a wa.me link … */
  href?: string;
  /** `<button>` only: "button" | "submit" | "reset". Default "button". The quote / book submits are "submit". */
  type?: 'button' | 'submit' | 'reset';
  /** Leading icon node, normally `ButtonIcon` — message-circle, mail, calendar-check or wand-sparkles on the site. */
  icon?: React.ReactNode;
  /** Trailing icon node — `ButtonIcon({ name: 'arrow-right' })` on the site. */
  trailingIcon?: React.ReactNode;
  /** Wrap the label in a `<span>`. Default: true when `icon` is given (site pattern); set true for the header "Get a quote" / "See guide rates", false for the home mail link. */
  wrapLabel?: boolean;
  /** Extra class names appended verbatim (site: "nav-quote", "coverage-booking-link"). */
  className?: string;
  /** The label — sentence case, verbatim site copy: "Get a quote", "Fill in the quote form", "Send on WhatsApp" … */
  children?: React.ReactNode;
  /** Accessible name; the site sets "WhatsApp +27 66 271 5887" on every wa.me link. */
  'aria-label'?: string;
  /** External links: the site uses target="_blank" with rel="noreferrer". */
  target?: string;
  /** Pairs with target: "noreferrer" on the site. */
  rel?: string;
  /** Click handler (passes through to the element). */
  onClick?: (event: unknown) => void;
  /** `<button>` only; the custom classes have no disabled style in the site's CSS (gap). */
  disabled?: boolean;
}

/** Pill CTA: `<a class="button-primary|button-secondary[ button-compact]">` or `<button type …>`, children in site order: icon, label, trailing icon. Any other prop passes through to the element. */
export declare function Button(props: ButtonProps): React.ReactElement;

export interface WhatsAppButtonProps {
  /** The label inside the `<span>`: "WhatsApp us", "Ask on WhatsApp" on the site. */
  label: React.ReactNode;
  /** `.button-primary.button-compact` and no trailing arrow (the site component's `compact` flag). Default false. */
  compact?: boolean;
  /** Override the prefilled wa.me link. Default: "https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request" (the site's). */
  href?: string;
  /** Extra class names appended after the site's classes. */
  className?: string;
}

/** The site's shared WhatsApp CTA (whatsapp-widget-8F4ds14e.js): `.button-primary` link, target="_blank" rel="noreferrer", aria-label="WhatsApp +27 66 271 5887", message-circle + label + arrow-right. */
export declare function WhatsAppButton(props: WhatsAppButtonProps): React.ReactElement;

// ---- FloatingActions ----
/** a.floating-quote — the mobile-only quote pill (CSS shows it at width<=639px, hides it above). */
export interface FloatingQuoteProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link target; default the site's `/quote?service=&pickup=`. */
  href?: string;
  /** Current-route state as TanStack Router sets it on /quote: adds class `active`, `data-status="active"` and `aria-current="page"` (unstyled in source). */
  active?: boolean;
  /** Label; default the site copy "Get a quote" (CSS uppercases it). */
  children?: React.ReactNode;
  /** Extra class names appended after `floating-quote`. */
  className?: string;
  /** Click handler on the anchor. */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare function FloatingQuote(props: FloatingQuoteProps): React.ReactElement;

/** a.whatsapp-widget — the orange uppercase WhatsApp pill with the inline lucide message-circle icon. */
export interface WhatsAppWidgetProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Full link; default `https://wa.me/27662715887?text=…` built from `message`. Overrides `message` when given. */
  href?: string;
  /** Prefilled WhatsApp text, URL-encoded as the site's `w()` does; default "Hi Spoorlangs — quote request". */
  message?: string;
  /** Label inside the `<span>`; default "WhatsApp us". `children` wins when both are given. */
  label?: React.ReactNode;
  /** Label inside the `<span>` (takes precedence over `label`). */
  children?: React.ReactNode;
  /** Leading icon node; default the site's inline `message-circle` SVG (stroke currentColor). Pass `null` to render none. */
  icon?: React.ReactNode | null;
  /** Accessible name; default the site's "WhatsApp +27 66 271 5887". */
  ariaLabel?: string;
  /** Anchor target; default `_blank` as on the site. */
  target?: string;
  /** Anchor rel; default `noreferrer` as on the site. */
  rel?: string;
  /** Extra class names appended after `whatsapp-widget`. */
  className?: string;
  /** Click handler on the anchor. */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare function WhatsAppWidget(props: WhatsAppWidgetProps): React.ReactElement;

/** div.floating-actions — the fixed bottom-right cluster rendered once per page: quote pill + WhatsApp pill. */
export interface FloatingActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Extra class names appended after `floating-actions`. */
  className?: string;
  /** Replaces the default pair entirely (a FloatingQuote and/or WhatsAppWidget of your own). */
  children?: React.ReactNode;
  /** Render the quote pill (default true, as the site always does; CSS hides it from 640px). */
  showQuote?: boolean;
  /** Quote pill href; default `/quote?service=&pickup=`. */
  quoteHref?: string;
  /** Quote pill label; default "Get a quote". */
  quoteLabel?: React.ReactNode;
  /** Mark the quote pill as the current route (/quote): class `active`, `data-status`, `aria-current`. */
  quoteActive?: boolean;
  /** Click handler for the quote pill. */
  onQuoteClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /** WhatsApp pill href; default the wa.me link with the prefilled message. */
  whatsappHref?: string;
  /** Prefilled WhatsApp text when `whatsappHref` is not given; default "Hi Spoorlangs — quote request". */
  whatsappMessage?: string;
  /** WhatsApp pill label; default "WhatsApp us". */
  whatsappLabel?: React.ReactNode;
  /** WhatsApp pill accessible name; default "WhatsApp +27 66 271 5887". */
  whatsappAriaLabel?: string;
  /** Icon node for the WhatsApp pill; default the inline lucide message-circle SVG; `null` for none. */
  icon?: React.ReactNode | null;
  /** Click handler for the WhatsApp pill. */
  onWhatsAppClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare function FloatingActions(props: FloatingActionsProps): React.ReactElement;

// ---- Eyebrow ----
/** Props of the Spoorlangs Eyebrow: the uppercase label paragraph set immediately before a heading. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Which site class to render: 'eyebrow' (default — orange, .72rem/900/.15em, 27 uses) or 'hero-kicker' (titanium, .68rem/700/.18em, the one hero line). */
  variant?: 'eyebrow' | 'hero-kicker';
  /** Extra class names appended after the variant class; the site itself adds none. */
  className?: string;
  /** The label text, Spoorlangs copy in sentence case — CSS uppercases it (e.g. "Gauteng on-wheels", "Driver-powered vehicle relocation"). */
  children?: React.ReactNode;
}

/** Renders <p class="eyebrow">…</p> (or <p class="hero-kicker">…</p>) with the 2.5rem × 1px orange rule drawn by CSS ::before. */
export declare function Eyebrow(props: EyebrowProps): React.ReactElement;

// ---- SectionHeading ----
/** SectionHeading — Oswald 700 uppercase headings (h1/h2/h3) with eyebrow and lead; `.section-heading` and `.split-heading`. */

export interface HeadingProps {
  /** Heading level: 1, 2 or 3 (the site styles only these; default 2). Renders `<h1>`/`<h2>`/`<h3>`. */
  level?: 1 | 2 | 3;
  /** `id` on the heading — the section's `aria-labelledby` points at it (site: "services-title", "process-title", "coverage-title"). */
  id?: string;
  /** Adds the site's `.quote-title` class: sub-page h1 at `clamp(2.7rem,10vw,4.5rem)`, `max-width:none` (pricing, faq, coverage, quote, book, privacy). */
  quoteTitle?: boolean;
  /** Extra class names appended to the heading element. */
  className?: string;
  /** Heading text — write it in sentence case; the CSS uppercases it (`text-transform:uppercase`). */
  children?: React.ReactNode;
}

export interface LeadProps {
  /** Extra class names appended to `lead`. */
  className?: string;
  /** The lead paragraph text (muted-foreground, line-height 1.7). */
  children?: React.ReactNode;
}

export interface SectionHeadingProps {
  /** Eyebrow label rendered as `<p class="eyebrow">` before the heading (site: "Gauteng on-wheels", "Guide rates" …). Omit to render none. */
  eyebrow?: React.ReactNode;
  /** The heading text (required). */
  title: React.ReactNode;
  /** Heading level 1, 2 or 3 (default 2 — the home-page sections; 1 on the pricing/faq/coverage/contact title blocks). */
  level?: 1 | 2 | 3;
  /** `id` on the heading for the enclosing section's `aria-labelledby`. */
  id?: string;
  /** Adds `.quote-title` to the heading (site: every sub-page h1 in a `.section-heading` except `/contact`). */
  quoteTitle?: boolean;
  /** Paragraph after the heading. Rendered as a bare `<p>` (coloured by `.section-heading>p:last-child`) or as `<p class="lead">` — see `leadVariant`. */
  lead?: React.ReactNode;
  /** `'plain'` = bare `<p>` (site: home h2 blocks, contact h1); `'lead'` = `<p class="lead">` (site: h1.quote-title blocks). Default: `'lead'` when `quoteTitle`, else `'plain'`. */
  leadVariant?: 'plain' | 'lead';
  /** Extra class names appended to `section-heading`. */
  className?: string;
  /** Anything rendered after the lead inside the block. Note: a `plain` lead then loses the `>p:last-child` muted colour (source behaviour). */
  children?: React.ReactNode;
}

export interface SplitHeadingProps {
  /** Eyebrow label rendered as `<p class="eyebrow">` in the left cell (site: "Simple by design"). */
  eyebrow?: React.ReactNode;
  /** The heading text (required; site: "Collect. Drive. Hand over."). */
  title: React.ReactNode;
  /** Heading level 1, 2 or 3 (default 2 — the only level the site uses here). */
  level?: 1 | 2 | 3;
  /** `id` on the heading for the section's `aria-labelledby` (site: "process-title"). */
  id?: string;
  /** Paragraph in the right column at ≥900px, rendered as a bare `<p>` (`.split-heading>p`: muted, max-width 30rem). */
  lead?: React.ReactNode;
  /** Extra class names appended to `split-heading`. The site instance passes `site-shell` here. */
  className?: string;
}

/** Bare `<h1>`/`<h2>`/`<h3>` in the site's global heading style. */
export declare function Heading(props: HeadingProps): React.ReactElement;
/** `<p class="lead">` — the muted lead paragraph. */
export declare function Lead(props: LeadProps): React.ReactElement;
/** `<div class="section-heading">` — eyebrow + heading + paragraph, stacked. */
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;
/** `<div class="split-heading">` — eyebrow + heading left, paragraph right (≥900px). */
export declare function SplitHeading(props: SplitHeadingProps): React.ReactElement;

// ---- BackLink ----
/** The "Back to home" link that opens every Spoorlangs sub-page shell (quote, book, coverage, pricing, faq, contact, privacy). */
export interface BackLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'> {
  /** Destination of the link. The site always points it at "/" (home); default "/". */
  href?: string;
  /** The label, wrapped in <span>. Typed in sentence case — the CSS uppercases it. The site's only label is "Back to home" (default). */
  children?: React.ReactNode;
  /** Extra class names appended after the site's "back-link". */
  className?: string;
  /** Replaces the default lucide arrow-left (1rem box, currentColor stroke). Pass null to render no icon; omit to keep the site's arrow. */
  icon?: React.ReactNode;
  /** Click handler, e.g. for a router's client-side navigation; passed straight to the <a>. */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export declare function BackLink(props: BackLinkProps): React.ReactElement;

// ---- SiteHeader ----
/** One entry of the header's "Page sections" row (site order: Services, Coverage, Why us, Pricing, FAQ, Book, Contact). */
export interface SiteHeaderNavItem {
  /** Link label, verbatim site copy ("Services", "Coverage", "Why us", "Pricing", "FAQ", "Book", "Contact"). */
  label: string;
  /** Link target as the site writes it ("/services", "/coverage?service=&pickup=", "/#why", "/pricing", "/faq", "/book", "/contact"). */
  href: string;
  /** Current route: adds class "active", data-status="active" and aria-current="page" (unstyled in source; set by the router on the site). */
  active?: boolean;
}

export interface NavLinkProps {
  /** The link target. */
  href: string;
  /** Text label used when no children are given. */
  label?: string;
  /** Marks the current route: class "active" + data-status="active" + aria-current="page". */
  active?: boolean;
  /** Class names placed before "active" (the site uses "logo-link" and "button-primary button-compact nav-quote"). */
  className?: string;
  /** Accessible name, e.g. "Spoorlangs home" on the logo link. */
  'aria-label'?: string;
  /** Link target attribute (not used by the header on the site). */
  target?: string;
  /** Link rel attribute (not used by the header on the site). */
  rel?: string;
  /** Click handler (the site lets its router handle navigation). */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Rendered instead of `label` (the logo <img>, or the <span> inside the quote button). */
  children?: React.ReactNode;
}
export declare function NavLink(props: NavLinkProps): React.ReactElement;

export interface NavLinksProps {
  /** Links rendered in order; default none. Hidden below 900 px, a titanium uppercase flex row at 900 px and up. */
  items?: SiteHeaderNavItem[];
  /** aria-label of the row; site value "Page sections" (default). */
  label?: string;
  /** Extra class names appended after "nav-links". */
  className?: string;
  /** Called with the clicked item and the event; navigation itself is left to the consumer's router. */
  onNavigate?: (item: SiteHeaderNavItem, event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Extra NavLink nodes rendered after `items`. */
  children?: React.ReactNode;
}
export declare function NavLinks(props: NavLinksProps): React.ReactElement;

export interface SiteHeaderProps {
  /** Extra class names appended after "site-header". */
  className?: string;
  /** Logo image URL; default the artifact upload of Main Full · Dark (/_blob/192c5a535993ae37d9e1294d83934d5f = assets/Logos/main-full-dark.png, the site's header file). */
  logoSrc?: string;
  /** Logo alt text; site value "Spoorlangs" (default). */
  logoAlt?: string;
  /** Logo link target; site value "/" (default). */
  homeHref?: string;
  /** Logo link aria-label; site value "Spoorlangs home" (default). */
  homeLabel?: string;
  /** True on the home route: the logo link gets the active markers (as on index.html). */
  homeActive?: boolean;
  /** aria-label of the <nav>; site value "Primary navigation" (default). */
  navLabel?: string;
  /** Nav links in order; default the site's seven (Services … Contact). */
  items?: SiteHeaderNavItem[];
  /** aria-label of the links row; site value "Page sections" (default). */
  sectionsLabel?: string;
  /** Quote button target; site value "/quote?service=&pickup=" (default). */
  quoteHref?: string;
  /** Quote button label; site value "Get a quote" (default). */
  quoteLabel?: string;
  /** True on the /quote route: the quote button gets the active markers instead of a nav link. */
  quoteActive?: boolean;
  /** Called for every link in the header (logo, nav items, quote) with {label, href} and the event. */
  onNavigate?: (item: SiteHeaderNavItem, event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Replaces the default NavLinks + quote link inside the nav row (the logo stays first); compose with NavLinks / NavLink. */
  children?: React.ReactNode;
}
export declare function SiteHeader(props: SiteHeaderProps): React.ReactElement;

// ---- SiteFooter ----
/** One link in the footer's meta column (`.footer-meta`). */
export interface SiteFooterLink {
  /** Link text — the site's: "Contact details", "Privacy policy". */
  label: string;
  /** Destination — the site's: "/contact", "/privacy". */
  href: string;
  /** Force the active marking (`class="active" data-status="active" aria-current="page"`); normally derived from `currentPath`. */
  active?: boolean;
}

export interface SiteFooterProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** Extra class names appended after `site-footer`. */
  className?: string;
  /** `src` of the `.footer-logo` image; default: this system's upload of `assets/Logos/monochrome-white.png` (`/_blob/694452e8b7ac21fa9d74d9e25d09ff34`). Pass `''` to omit the image. */
  logoSrc?: string;
  /** Alt text of the logo; default the site's "Spoorlangs · drive@spoorlangs.online · +27 66 271 5887". */
  logoAlt?: string;
  /** The `<p>` under the logo; default "Driven By People. Further Together." (Brand Book p08 primary tagline). */
  tagline?: React.ReactNode;
  /** `.footer-location`, set uppercase in `--font-display`; default "Kempton Park" (city only, Brand Book p25). */
  location?: string;
  /** `href` of the WhatsApp link; default the site's `https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request`. */
  whatsappHref?: string;
  /** Visible text of the WhatsApp link; default "+27 66 271 5887". */
  whatsappNumber?: string;
  /** `aria-label` of the WhatsApp link; default "WhatsApp " + whatsappNumber. */
  whatsappAriaLabel?: string;
  /** Email address; rendered as the link text and as `mailto:` + email; default "drive@spoorlangs.online". */
  email?: string;
  /** `.footer-hours` line; default "Message any time · Nico replies from 07:30 · we confirm your window." */
  hours?: React.ReactNode;
  /** First line of `.footer-meta`; default "SOUTH AFRICA KEEPS MOVING" (caps in the source). */
  mantra?: string;
  /** Meta links between the mantra and the copyright; default Contact details → /contact, Privacy policy → /privacy. */
  links?: SiteFooterLink[];
  /** Current route; the link whose `href` equals it is marked active, as the site's router marks /contact and /privacy. */
  currentPath?: string;
  /** Last line of `.footer-meta`; default "© 2026 Spoorlangs (Pty) Ltd". */
  copyright?: string;
}

/** The site footer: 1px `--orange` top rule on `--background`, three-column `.footer-grid` from 900px. No children slot — every line is a prop. */
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;

// ---- Hero ----
// Hero — Spoorlangs (group: Sections). Declarations as documentation; mirrors Hero.js.

/** The parity strip under the lead: `<div class="hero-parity-strip" aria-label><strong>…</strong><span>…</span></div>`. */
export interface HeroParity {
  /** The uppercase line in `<strong>` — the site sets the tagline "Driven By People. Further Together." */
  title: React.ReactNode;
  /** The Titanium line in `<span>` — the site sets "Kempton Park · Johannesburg / Greater Gauteng on-wheels · +27 66 271 5887 · drive@spoorlangs.online". */
  details: React.ReactNode;
  /** The strip's aria-label. Default: the site's "Spoorlangs service and contact details". */
  label?: string;
}

export interface HeroProps extends Record<string, unknown> {
  /** The full-bleed photograph (`<img class="hero-image" fetchpriority="high">`): the site's 1280×720 poster hero-locked-M-poster.png (assets/Imagery, upload /_blob/6e5e5695c1f64bf9dbb2d3a6b4b14243). */
  imageSrc: string;
  /** Alt text — "Alt text on every image and logo" (Brand Book p26); the site: "Spoorlangs driver with a vehicle on wet asphalt". */
  imageAlt: string;
  /** `<p class="hero-kicker">` above the h1 — the site: "Driver-powered vehicle relocation". Omitted when absent. */
  kicker?: React.ReactNode;
  /** First h1 line, the white `<span>` — the site: "Vehicle delivery." (uppercased by CSS). */
  title: React.ReactNode;
  /** Second h1 line, the Ignition Orange `<strong>` — the site: "Done right.". Omitted when absent. */
  titleAccent?: React.ReactNode;
  /** The h1's id, also written to the section's aria-labelledby. Default "hero-title" (the site's). */
  titleId?: string;
  /** `<p class="hero-secondary">` (Oswald 500 uppercase) — the site: "Same-day. On wheels.". */
  secondary?: React.ReactNode;
  /** `<p class="hero-lead">`; an array of lines is joined with `<br/>` — the site: ["Car delivery in Johannesburg & Gauteng · from Kempton Park", "Runners only — the car must start and drive."]. */
  lead?: React.ReactNode | React.ReactNode[];
  /** The parity strip (tagline + contact line); omitted when absent. */
  parity?: HeroParity;
  /** Contents of `<div class="hero-actions">` — `HeroAction` links (or the Actions family's Button / WhatsAppButton). The site renders two: "Get a quote" then "WhatsApp us" (the second renders as the ghost). */
  actions?: React.ReactNode;
  /** Used for `.hero-actions` when `actions` is not given. */
  children?: React.ReactNode;
  /** Extra class names appended after "hero". */
  className?: string;
  /** Any other prop (id, data-*, …) passes through to the `<section>`. */
}

/** The site's full-viewport home hero: `<section class="hero" aria-labelledby>` with the poster image, the gradient `.hero-shade`, and `.site-shell.hero-content` holding kicker, two-line h1, secondary, lead, parity strip and actions. 100svh tall; centred from 640px, bottom-aligned below. */
export declare function Hero(props: HeroProps): React.ReactElement;

/** The two lucide icons the hero's action row renders (project/assets/Icons/<name>.svg). */
export type HeroActionIconName = 'message-circle' | 'arrow-right';

export interface HeroActionProps extends Record<string, unknown> {
  /** Link target: "/quote?service=&pickup=" or the WhatsApp link "https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request" (site). */
  href: string;
  /** The label, sentence case, verbatim: "Get a quote", "WhatsApp us". */
  children?: React.ReactNode;
  /** Leading icon: an icon name ("message-circle" on the WhatsApp link) or any node. */
  icon?: HeroActionIconName | React.ReactNode;
  /** Trailing icon: an icon name ("arrow-right" on the WhatsApp link) or any node. */
  trailingIcon?: HeroActionIconName | React.ReactNode;
  /** Wrap the label in a `<span>`. Default: true when a leading icon is given (site pattern), else bare text ("Get a quote"). */
  wrapLabel?: boolean;
  /** Extra class names appended after "button-primary". */
  className?: string;
  /** External links: the site uses target="_blank". */
  target?: string;
  /** Pairs with target: "noreferrer" on the site. */
  rel?: string;
  /** Accessible name; the site sets "WhatsApp +27 66 271 5887" on the wa.me link. */
  'aria-label'?: string;
  /** Click handler (passes through to the `<a>`). */
  onClick?: (event: unknown) => void;
}

/** One `<a class="button-primary">` of the hero's action row, children in site order: icon, label, trailing icon. Inside `.hero-actions` a second one renders as the ghost (Titanium border, no shadow) by the Button family's sibling rule. */
export declare function HeroAction(props: HeroActionProps): React.ReactElement;

// ---- ServiceGrid ----
// ServiceGrid — Spoorlangs (group: Content). Declarations as documentation; mirrors ServiceGrid.js.

/** One service card's data (the site's six: Same-day · Auction · After-hours · Fleet · Live pin · POD). */
export interface ServiceItem {
  /** Card title → `<h3>`; write it in sentence case, the CSS uppercases it (site: "Same-day", "Auction", "After-hours", "Fleet", "Live pin", "POD"). Also spliced into the link label. */
  title: React.ReactNode;
  /** One-line description → `<p>` in muted-foreground (site: "Book before 10am for same-day Gauteng runners"). */
  copy: React.ReactNode;
  /** Service slug for the quote link: `href` becomes `/quote?service=<service>&pickup=` (site: same-day | auction | after-hours | fleet | live-pin | pod). Also the default React key. */
  service?: string;
  /** Explicit link `href`; overrides the one built from `service`. */
  href?: string;
  /** Replaces the site's link formula "Get a " + title + " quote" (three text nodes) with your own node. */
  linkLabel?: React.ReactNode;
  /** Replaces the site's index formula (a literal "0" followed by the 1-based position → "01" … "06"). */
  indexLabel?: React.ReactNode;
  /** Extra class names appended to this card's `service-card`. */
  className?: string;
  /** React key; defaults to `service`, else the array position. */
  key?: string | number;
}

export interface ServiceCardProps {
  /** 1-based position in the grid; rendered in `.service-index` exactly as the site does — a literal "0" then the number ("01" … "06"). */
  index?: number;
  /** Replaces the index formula with your own node (e.g. a two-digit string). */
  indexLabel?: React.ReactNode;
  /** Card title → `<h3>` (uppercased by CSS; Oswald 700 at 1.75rem → 1.8rem from 900px). */
  title: React.ReactNode;
  /** One-line description → `<p>` (muted-foreground, .85rem/1.55 → .78rem/1.4 from 900px). */
  copy: React.ReactNode;
  /** Service slug: `href` defaults to `/quote?service=<service>&pickup=`. */
  service?: string;
  /** Explicit link `href`; overrides the one built from `service`. */
  href?: string;
  /** Replaces the link formula "Get a " + title + " quote". */
  linkLabel?: React.ReactNode;
  /** Extra class names appended to `service-card`. */
  className?: string;
}

export interface ServiceGridProps {
  /** The cards, in order; numbered 01, 02 … by array position. The site renders exactly six. */
  items: ServiceItem[];
  /** Extra class names appended to `service-grid`. */
  className?: string;
  /** Appended after the items as further direct children (hand-built `ServiceCard`s) — the nth-child ruling counts them. */
  children?: React.ReactNode;
}

export interface ServicesSectionProps {
  /** `id` on the `<section>` (site: "services" — the header's "Services" link targets `/#services`). Default "services". */
  id?: string;
  /** `id` on the `<h2>`, referenced by the section's `aria-labelledby` (site: "services-title"). Default "services-title". */
  headingId?: string;
  /** `<p class="eyebrow">` before the heading (site: "Gauteng on-wheels"). Omit to render none. */
  eyebrow?: React.ReactNode;
  /** The `<h2>` text (site: "Six ways to keep moving."); sentence case, uppercased by CSS. */
  title: React.ReactNode;
  /** Bare `<p>` after the heading, muted by `.section-heading>p:last-child` (site: "Professional vehicle relocation for runners — powered by people, not trucks or trailers."). */
  lead?: React.ReactNode;
  /** Replaces the whole built-in `.section-heading` block with your own node (e.g. a `SectionHeading` element); `null` renders no heading. */
  heading?: React.ReactNode;
  /** The cards — see `ServiceItem`. */
  items: ServiceItem[];
  /** Extra class names appended to the inner `service-grid`. */
  gridClassName?: string;
  /** The `<figure class="wide-visual">` image after the grid (site: assets/Imagery/04-delivery-LAUNCH.png, `/_blob/59bd9abb8241448aa7fa154999aece52`, alt "Spoorlangs same-day on-wheels delivery services"). Hidden from 900px by the site's CSS. Omit or `null` for none. Alt text is required (Brand Book p26). */
  visual?: { src: string; alt: string } | null;
  /** Extra class names appended to `section section-services`. */
  className?: string;
  /** Rendered inside `.site-shell` after the figure. */
  children?: React.ReactNode;
}

/** One `<article class="service-card">`: steel index, h3, copy and the orange "Get a … quote" link. */
export declare function ServiceCard(props: ServiceCardProps): React.ReactElement;
/** `<div class="service-grid">` — hairline-ruled 1 / 2 / 3-column grid of `ServiceCard`s (breakpoints 640px and 900px). */
export declare function ServiceGrid(props: ServiceGridProps): React.ReactElement;
/** `<section id="services" class="section section-services">` — site-shell, section-heading, the grid and the mobile-only wide visual, as on the home page. */
export declare function ServicesSection(props: ServicesSectionProps): React.ReactElement;

// ---- ServiceDetail ----
// ServiceDetail — Spoorlangs (group: Sections, page showcase). Declarations as documentation; mirrors ServiceDetail.js.
// Source: https://spoorlangs.online/services (page-services.html, fetched 2026-10-08) and custom.css L1483–L1641, L2025–L2026, L2158–L2172.

/** The nine lucide icons the services page renders (path data as the site's markup; project/assets/Icons/<name>.svg). */
export type ServiceDetailIconName =
  | 'clock-3'
  | 'gavel'
  | 'moon'
  | 'car-front'
  | 'map-pin'
  | 'file-check-corner'
  | 'circle-check'
  | 'arrow-right'
  | 'message-circle';

export interface ServiceDetailIconProps {
  /** Which icon: clock-3 (Same-day), gavel (Auction), moon (After-hours), car-front (Fleet), map-pin (Live pin), file-check-corner (POD), circle-check (notes), arrow-right (trailing), message-circle (WhatsApp). */
  name: ServiceDetailIconName;
  /** Extra class names appended after the site's "lucide lucide-<name>" (the clock's is "lucide lucide-clock3 lucide-clock-3"). */
  className?: string;
}

/** Inline lucide <svg> exactly as the site renders it: 24×24, fill none, stroke currentColor, stroke-width 2, round caps and joins, aria-hidden. Sized by the parent rule (2rem title, 1rem link, 1.2rem note, 1.15rem button). */
export declare function ServiceDetailIcon(props: ServiceDetailIconProps): React.ReactElement;

export interface ServicesIntroProps extends Record<string, unknown> {
  /** `<p class="eyebrow">` above the h1 — site: "Gauteng vehicle delivery". */
  eyebrow?: React.ReactNode;
  /** The `<h1>` (Oswald 700, uppercase by CSS, max-width 9ch) — site: "Driven for the job at hand.". */
  title: React.ReactNode;
  /** `<p class="lead">` (muted-foreground, max-width 44rem) — site: "Six focused services for roadworthy runner vehicles, handled on their own wheels with a named person from collection to handover.". */
  lead?: React.ReactNode;
  /** href of the `.button-primary` "Get a quote" link — site: "/quote?service=&pickup=". Omit to drop the button. */
  quoteHref?: string;
  /** Label of the primary link, bare text followed by the arrow-right icon — site: "Get a quote". */
  quoteLabel?: React.ReactNode;
  /** href of the `.button-secondary` WhatsApp link (target="_blank" rel="noreferrer") — site: "https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20I%20need%20help%20choosing%20a%20vehicle%20delivery%20service.". Omit to drop it. */
  whatsappHref?: string;
  /** Label after the message-circle icon — site: "WhatsApp us". */
  whatsappLabel?: React.ReactNode;
  /** Extra class names appended after "services-intro site-shell". */
  className?: string;
  /** Replaces the default action pair inside `.services-intro-actions`. */
  children?: React.ReactNode;
}

/** `<header class="services-intro site-shell">`: eyebrow, h1, lead and the `.services-intro-actions` row (column below 640px). Other props pass through to the header. */
export declare function ServicesIntro(props: ServicesIntroProps): React.ReactElement;

export interface ServiceDetailArticleProps extends Record<string, unknown> {
  /** `<img src>` of the spotlight photograph — the upload of assets/Imagery/service-spotlight-1.png … -6.png (2048×2048; shown 16/10, 4/3 from 900px, object-fit cover). */
  image: string;
  /** Alt text, site pattern "<Service> vehicle delivery by Spoorlangs" (e.g. "Same-day vehicle delivery by Spoorlangs"). */
  alt: string;
  /** `loading` attribute — site: "eager" on the first article, "lazy" on the rest. Default "lazy". */
  loading?: 'eager' | 'lazy';
  /** The zero-padded numeral in the `<span>` over the photo (3rem Oswald, orange, bottom-right) — site: "01" … "06". */
  index?: React.ReactNode;
  /** Title icon node (2rem, orange) — normally `ServiceDetailIcon`; takes precedence over `iconName`. */
  icon?: React.ReactNode;
  /** Title icon by name — site: clock-3, gavel, moon, car-front, map-pin, file-check-corner in service order. */
  iconName?: ServiceDetailIconName;
  /** `<p class="eyebrow">` inside the title block — site: "Time-sensitive Gauteng moves", "Collection after vehicle release", "Planned outside business hours", "Coordinated car movements", "Private journey visibility", "Proof at handover". */
  eyebrow?: React.ReactNode;
  /** The `<h2>` — site: "Same-day", "Auction", "After-hours", "Fleet", "Live pin", "POD". */
  title: React.ReactNode;
  /** Body paragraphs in order (site: two per service — the description, then the instruction line starting "Send …" / "Share …" / "Provide …" / "Ask …"). */
  paragraphs?: React.ReactNode[];
  /** href of the `.service-detail-link` — site: "/quote?service=<slug>&pickup=" with slugs same-day, auction, after-hours, fleet, pod; the Live pin link is "/quote?service=&pickup=" (source quirk). Omit to drop the link. */
  href?: string;
  /** Link label, bare text followed by the 1rem arrow-right icon — site: "Request this service" (×6). */
  linkLabel?: React.ReactNode;
  /** Extra class names appended after "service-detail". */
  className?: string;
  /** Extra nodes rendered inside `.service-detail-copy` after the link. */
  children?: React.ReactNode;
}

/** One `<article class="service-detail">`: figure (photo + numeral) and copy (icon + eyebrow + h2, paragraphs, link). Image side alternates by `:nth-child(2n)` among the list's children at ≥900px. Other props pass through to the article. */
export declare function ServiceDetailArticle(props: ServiceDetailArticleProps): React.ReactElement;

export interface ServicesMidCtaProps extends Record<string, unknown> {
  /** The Oswald uppercase line — site: "Not sure which fits? Tell us the move.". */
  text: React.ReactNode;
  /** `aria-label` of the `<aside>` — default (site): "Get a quote or WhatsApp Spoorlangs". */
  ariaLabel?: string;
  /** href of the `.button-primary` link — site: "/quote?service=&pickup=". */
  quoteHref?: string;
  /** Primary label — site: "Get a quote". */
  quoteLabel?: React.ReactNode;
  /** href of the `.button-secondary` WhatsApp link — site: the same wa.me URL as the intro. */
  whatsappHref?: string;
  /** Secondary label — site: "WhatsApp us". */
  whatsappLabel?: React.ReactNode;
  /** Extra class names appended after "services-mid-cta". */
  className?: string;
  /** Replaces the default action pair inside `.services-mid-cta-actions`. */
  children?: React.ReactNode;
}

/** `<aside class="services-mid-cta">`: orange-edged strip (1px orange 55%, 4px left edge, orange 8% ground) with the line and the action pair; one column below 640px. */
export declare function ServicesMidCta(props: ServicesMidCtaProps): React.ReactElement;

export interface ServicesDetailSectionProps extends Record<string, unknown> {
  /** `aria-label` of the `<section>` — default (site): "Spoorlangs services". */
  ariaLabel?: string;
  /** The articles in site order (Same-day · Auction · After-hours · Fleet · Live pin · POD), each a ServiceDetailArticleProps. */
  items?: ServiceDetailArticleProps[];
  /** The mid CTA as ServicesMidCtaProps or a ready element; omitted when absent. */
  midCta?: ServicesMidCtaProps | React.ReactElement;
  /** Insert the mid CTA after this many articles — site: 3 (default). It then counts as a list child, so articles 04–06 are children 5–7 for the alternation. */
  midCtaAfter?: number;
  /** Extra class names appended after "services-detail". */
  className?: string;
  /** Extra nodes appended inside `.services-detail-list` after the items. */
  children?: React.ReactNode;
}

/** `<section class="services-detail">` on the `--card` ground with the `.site-shell.services-detail-list` grid of articles and the mid CTA. */
export declare function ServicesDetailSection(props: ServicesDetailSectionProps): React.ReactElement;

export interface ServicesNotesProps extends Record<string, unknown> {
  /** `<p class="eyebrow">` — site: "Before you book". */
  eyebrow?: React.ReactNode;
  /** The `<h2>` (max-width 12ch) — site: "Clear terms before the wheels turn.". */
  title: React.ReactNode;
  /** id of the h2, referenced by the section's aria-labelledby — default (site): "services-notes-title". */
  id?: string;
  /** One `<li>` per note (circle-check icon + `<span>`), titanium, hairline-separated — site: the four "Before you book" terms. */
  items?: React.ReactNode[];
  /** Extra class names appended after "services-notes". */
  className?: string;
  /** Extra `<li>` nodes appended inside the `<ul>`. */
  children?: React.ReactNode;
}

/** `<section class="services-notes" aria-labelledby>`: eyebrow + h2 beside the checked list (two columns from 900px). */
export declare function ServicesNotes(props: ServicesNotesProps): React.ReactElement;

export interface ServicesCtaProps extends Record<string, unknown> {
  /** `<p class="eyebrow">` (black on the orange band) — site: "Not sure which service fits?". */
  eyebrow?: React.ReactNode;
  /** The `<h2>` (max-width 13ch) — site: "Tell us where the vehicle needs to go.". */
  title: React.ReactNode;
  /** id of the h2, referenced by aria-labelledby — default (site): "services-cta-title". */
  id?: string;
  /** The 600-weight paragraph (max-width 40rem) — site: "We will confirm the right service, availability and practical timing for your Gauteng run.". */
  text?: React.ReactNode;
  /** href of the inverted `.button-primary` (black pill, white label) — site: "/quote?service=&pickup=". Omit to drop it. */
  href?: string;
  /** Button label, bare text followed by arrow-right — site: "Describe your move". */
  ctaLabel?: React.ReactNode;
  /** Extra class names appended after "services-cta". */
  className?: string;
  /** Replaces the default anchor. */
  children?: React.ReactNode;
}

/** `<section class="services-cta" aria-labelledby>`: the full Ignition Orange closing band with Asphalt ink (Brand Book p15 forbids a full orange field — flagged). */
export declare function ServicesCta(props: ServicesCtaProps): React.ReactElement;

export interface ServiceDetailProps extends Record<string, unknown> {
  /** Props for ServicesIntro; omit to drop the header. */
  intro?: ServicesIntroProps;
  /** The six ServiceDetailArticleProps in site order; omit to drop the detail section. */
  services?: ServiceDetailArticleProps[];
  /** `aria-label` of the detail section — default (site): "Spoorlangs services". */
  sectionLabel?: string;
  /** Props (or element) for ServicesMidCta, inserted after `midCtaAfter` articles. */
  midCta?: ServicesMidCtaProps | React.ReactElement;
  /** Articles before the mid CTA — site: 3 (default). */
  midCtaAfter?: number;
  /** Props for ServicesNotes; omit to drop the notes. */
  notes?: ServicesNotesProps;
  /** Props for ServicesCta; omit to drop the closing band. */
  cta?: ServicesCtaProps;
  /** Extra class names appended after "services-page". */
  className?: string;
  /** Extra nodes rendered at the end of `<main>`. */
  children?: React.ReactNode;
}

/** The whole Services page: `<main class="services-page">` (4.5rem top padding clears the fixed SiteHeader) composing ServicesIntro, ServicesDetailSection, ServicesNotes and ServicesCta. Other props pass through to main. */
export declare function ServiceDetail(props: ServiceDetailProps): React.ReactElement;

// ---- ProcessSteps ----
/** ProcessSteps — split heading, bordered process image and a hairline-ruled 3-step list with orange Oswald numerals (`#process` on the home page). */

export interface ProcessStepItem {
  /** React key for the item; defaults to its index. */
  key?: string | number;
  /** The numeral as literal text (site: "01", "02", "03") — rendered in `<span>`, not a CSS counter. */
  number: React.ReactNode;
  /** Step title, rendered as `<h3>` (site: "Collect", "Drive", "Hand over"); write it in sentence case — the CSS uppercases it. */
  title: React.ReactNode;
  /** One line of copy under the title, rendered as `<p>` in `muted-foreground` (site: "Proof of Delivery records the handover and closes the job."). */
  body?: React.ReactNode;
}

export interface ProcessStepProps {
  /** The numeral as literal text (site: "01"). */
  number: React.ReactNode;
  /** Step title, rendered as `<h3>` at 1.35rem. */
  title: React.ReactNode;
  /** Copy under the title, rendered as `<p>`. Omit to render no paragraph. */
  body?: React.ReactNode;
  /** Extra class names on the `<li>` (the site adds none). */
  className?: string;
  /** Anything rendered inside the text cell after the paragraph. */
  children?: React.ReactNode;
}

export interface ProcessStepsProps {
  /** The steps, in order — each becomes a `ProcessStep`. The site has exactly three; the ≥900px grid is `repeat(3, …)`. */
  steps?: ProcessStepItem[];
  /** Extra class names appended to `process-steps`. */
  className?: string;
  /** `ProcessStep` elements rendered after `steps` (use either or both). */
  children?: React.ReactNode;
}

export interface ProcessVisualProps {
  /** Image URL (site: `assets/Imagery/how-it-works.png`, 2752×1536; cropped to `max-height:31rem` with `object-fit:cover` at ≥900px). */
  src: string;
  /** Alt text — required by Brand Book p26 ("Alt text on every image and logo"); site: "Collect, drive, then hand over with Proof of Delivery". */
  alt: string;
  /** The `<img loading>` attribute; the site writes `lazy` (default). */
  loading?: 'lazy' | 'eager';
  /** Extra class names appended to `wide-visual process-visual`. */
  className?: string;
}

export interface ProcessSectionProps {
  /** Section `id` (default "process"); the heading `id` is `<id>-title` and the section's `aria-labelledby` points at it. */
  id?: string;
  /** Overrides the heading `id` used for `aria-labelledby` (default `<id>-title`, site: "process-title"). */
  titleId?: string;
  /** Eyebrow label rendered as `<p class="eyebrow">` above the heading (site: "Simple by design"). Omit to render none. */
  eyebrow?: React.ReactNode;
  /** The `<h2>` text (required; site: "Collect. Drive. Hand over."). */
  title: React.ReactNode;
  /** Paragraph in the right column of the split heading at ≥900px (site: "Your vehicle stays on its own wheels from collection to a documented handover."). */
  lead?: React.ReactNode;
  /** The framed image, rendered as `ProcessVisual` between the heading and the list. Omit to render no figure. */
  image?: { src: string; alt: string; loading?: 'lazy' | 'eager' };
  /** The steps passed to `ProcessSteps` (site: three). */
  steps?: ProcessStepItem[];
  /** Extra class names appended to `section process-section`. */
  className?: string;
  /** `ProcessStep` elements rendered inside the list after `steps`. */
  children?: React.ReactNode;
}

/** `<li>` — one numbered step: `<span>` numeral, `<h3>` title, `<p>` copy. */
export declare function ProcessStep(props: ProcessStepProps): React.ReactElement;
/** `<ol class="process-steps">` — the hairline-ruled list; three columns at ≥900px. */
export declare function ProcessSteps(props: ProcessStepsProps): React.ReactElement;
/** `<figure class="wide-visual process-visual">` — the bordered process image. */
export declare function ProcessVisual(props: ProcessVisualProps): React.ReactElement;
/** `<section class="section process-section">` — split heading, image and steps, as on the home page. */
export declare function ProcessSection(props: ProcessSectionProps): React.ReactElement;

// ---- BenefitList ----
// BenefitList — Spoorlangs (group: Content). Declarations as documentation; mirrors BenefitList.js.

/** The four lucide icons the site renders inside `.benefit-list`, in site order (project/assets/Icons/<name>.svg). */
export type BenefitIconName = 'users' | 'clock-3' | 'map-pin' | 'car-front';

export interface BenefitIconProps {
  /** Which icon: users ("Owner-driven first"), clock-3 ("Clock as the product"), map-pin ("Live pin + POD"), car-front ("Honest scope"). */
  name: BenefitIconName;
  /** Extra class names appended after the site's "lucide lucide-<name>" (clock-3: "lucide lucide-clock3 lucide-clock-3"). */
  className?: string;
}

/** Inline lucide <svg> exactly as the site renders it: 24×24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2, round caps/joins, aria-hidden. Painted `--orange` by `.benefit-list svg`; no size rule, so it stays 24×24. */
export declare function BenefitIcon(props: BenefitIconProps): React.ReactElement;

export interface BenefitItemProps extends Record<string, unknown> {
  /** The icon before the text: a `BenefitIconName` string (renders `BenefitIcon`) or your own inline <svg> node (stroke currentColor so it takes the orange). */
  icon?: BenefitIconName | React.ReactNode;
  /** The bold first line, rendered as `<strong>` (display:block, `--foreground`): "Owner-driven first", "Clock as the product" … */
  title?: React.ReactNode;
  /** The description after the title inside the same `<span>` (`--muted-foreground`): "Tight loop, not a dispatch queue." — the site writes no space between `</strong>` and the text. */
  children?: React.ReactNode;
  /** Extra class names on the `<li>`; the site's items carry none. */
  className?: string;
}

/** One tile: `<li><svg/><span><strong>title</strong>children</span></li>` — 1px `--border`, `--radius-rule` corners, background `--background` mixed 72% over the section gradient. Any other prop passes through to the `<li>`. */
export declare function BenefitItem(props: BenefitItemProps): React.ReactElement;

export interface BenefitListItem {
  /** Icon name or node, as `BenefitItemProps.icon`. */
  icon?: BenefitIconName | React.ReactNode;
  /** The `<strong>` title. */
  title?: React.ReactNode;
  /** The description text after the title. */
  text?: React.ReactNode;
  /** React key; defaults to the item index. */
  key?: string | number;
}

export interface BenefitListProps extends Record<string, unknown> {
  /** The tiles, in order. The site's list: users / "Owner-driven first" / "Tight loop, not a dispatch queue." · clock-3 / "Clock as the product" / "Written window before wheels turn." · map-pin / "Live pin + POD" / "Track on request; job closed when you have proof." · car-front / "Honest scope" / "Gauteng runners only; no non-runners or long-haul truck lanes." Omit to compose `BenefitItem` children yourself. */
  items?: BenefitListItem[];
  /** Adds the site's `.benefit-grid` modifier: two columns (`repeat(2,minmax(0,1fr))`), one column at ≤639px. Default true (the site's only instance). `false` = `.benefit-list` alone, one column at every width. */
  grid?: boolean;
  /** Extra class names appended after `benefit-list[ benefit-grid]`. */
  className?: string;
  /** `BenefitItem` nodes when `items` is not given. */
  children?: React.ReactNode;
}

/** `<ul class="benefit-list benefit-grid">` — the bordered benefit tiles (gap 1rem → .7rem at ≥900px, margin-top 2rem → 1.25rem). Any other prop passes through to the `<ul>`. */
export declare function BenefitList(props: BenefitListProps): React.ReactElement;

export interface WhyVisualProps extends Record<string, unknown> {
  /** Image source; the site's is `assets/Imagery/why-choose-us.png` (2752×1536) — in a preview `/_blob/27a1525e24393667005a851f11ccb3c8`. */
  src?: string;
  /** Alt text (Brand Book p26: "Alt text on every image and logo"). Site: "Professional Gauteng vehicle delivery with journey updates and Proof of Delivery". */
  alt?: string;
  /** `loading` attribute on the `<img>`; the site uses "lazy" (default). */
  loading?: 'lazy' | 'eager';
  /** Extra class names appended after `why-visual`. */
  className?: string;
  /** Replaces the default `<img>` inside the `<figure>` (e.g. a `<picture>`). */
  children?: React.ReactNode;
}

/** `<figure class="why-visual"><img … loading="lazy"/></figure>` — 1px `--border`, `--radius-md` corners, overflow hidden; height `clamp(13rem,24vh,16rem)` with `object-fit:cover` at ≥900px. */
export declare function WhyVisual(props: WhyVisualProps): React.ReactElement;

export interface WhySectionProps {
  /** Section `id` (the "Why us" nav anchor `/#why`). Default "why". */
  id?: string;
  /** `id` of the `<h2>`, referenced by the section's `aria-labelledby`. Default `<id>-title` ("why-title"). */
  titleId?: string;
  /** The `<p class="eyebrow">` label before the heading. Site: "Why Spoorlangs". Omit to render none. */
  eyebrow?: React.ReactNode;
  /** The `<h2 id=…>` text (required). Site: "Premium service. Human accountability." — sentence case, CSS uppercases it. */
  title: React.ReactNode;
  /** The `<p class="lead">` after the heading. Site: "Every movement is handled as a professional journey, with direct communication and a clear handover." Omit to render none. */
  lead?: React.ReactNode;
  /** Renders a `BenefitList` with these items inside `.why-copy`. */
  items?: BenefitListItem[];
  /** Passed to the inner `BenefitList` (`.benefit-grid` modifier; default true). */
  grid?: boolean;
  /** Replaces the generated list with your own node (or `null` for none). */
  list?: React.ReactNode;
  /** Renders a `WhyVisual` figure after `.why-copy` inside `.why-layout`. */
  image?: { src: string; alt: string; loading?: 'lazy' | 'eager' };
  /** Replaces the generated figure with your own node (or `null` for none). */
  visual?: React.ReactNode;
  /** Extra class names appended after `section why-section`. */
  className?: string;
  /** Rendered after `.why-layout`, still inside the section — on the site the `.pod-layout` (TrustRitual) and `.about-layout` (AboutLayout) blocks follow here. */
  children?: React.ReactNode;
}

/** `<section id="why" class="section why-section" aria-labelledby="why-title">` → `.site-shell.why-layout` → `.why-copy` (eyebrow, h2, lead, list) + `figure.why-visual`; card-to-background gradient with 1px `--border` top and bottom. Stacks copy over image at every width (the site has no two-column desktop layout). */
export declare function WhySection(props: WhySectionProps): React.ReactElement;

// ---- TrustRitual ----
/** One step of the ritual: `<li><span>01</span>Collect pin confirmed</li>`. */
export interface TrustRitualItemProps {
  /** The numeral in the leading `<span>` (orange, `--font-display`), as the site writes it: "01", "02", "03". */
  number: React.ReactNode;
  /** Extra class names on the `<li>`; the site adds none. */
  className?: string;
  /** The step text, a bare text node after the numeral (site: "Collect pin confirmed", "Live pin on request while we drive", "POD closes the job."). */
  children?: React.ReactNode;
}

/** A ritual entry: a plain string is auto-numbered "01"…; an object sets its own numeral. */
export interface TrustRitualEntry {
  /** The numeral; omitted ⇒ zero-padded position ("01"). */
  number?: React.ReactNode;
  /** The step text. */
  label: React.ReactNode;
}

/** The ordered list alone: `<ol class="trust-ritual" aria-label="…">`. */
export interface TrustRitualListProps {
  /** The steps, in order (strings or `{ number, label }`); ignored when `children` is given. The site has exactly three. */
  items?: Array<string | TrustRitualEntry>;
  /** `aria-label` on the `<ol>`; default is the site's "Spoorlangs collection and delivery proof process". */
  ariaLabel?: string;
  /** Extra class names appended after `trust-ritual`. */
  className?: string;
  /** `TrustRitualItem` elements, rendered instead of `items`. */
  children?: React.ReactNode;
}

/** The whole POD block: `<div class="pod-layout">` — bordered photo beside eyebrow, h3, muted paragraph and the ritual list. */
export interface TrustRitualProps {
  /** `src` of the `<img>` in the `<figure>` — the site uses pod-moment.png (assets/Imagery, 2752×1536). */
  imageSrc?: string;
  /** `alt` of the image — Brand Book p26: alt text on every image (site: "Driver recording a vehicle handover for Proof of Delivery"). */
  imageAlt?: string;
  /** `loading` attribute of the `<img>`; the site sets "lazy" (default). */
  loading?: 'lazy' | 'eager';
  /** Custom `<figure>` contents, rendered instead of `imageSrc`/`imageAlt`. */
  figure?: React.ReactNode;
  /** Label rendered as `<p class="eyebrow">` above the heading (site: "Proof at handover"). Note: inside `.pod-layout` the site's `.pod-layout p` rule colours it `--muted-foreground`. */
  eyebrow?: React.ReactNode;
  /** The `<h3>` text, sentence case — CSS uppercases it (site: "POD means Proof of Delivery."). */
  title?: React.ReactNode;
  /** `id` on the `<h3>` for an enclosing `aria-labelledby`; the site sets none here. */
  id?: string;
  /** The muted paragraph after the heading (site: "The job is closed when you have proof of delivery, not when we say so."). */
  lead?: React.ReactNode;
  /** The ritual steps, passed to `TrustRitualList` (strings auto-number "01"…). */
  items?: Array<string | TrustRitualEntry>;
  /** `aria-label` of the `<ol>`; default the site's "Spoorlangs collection and delivery proof process". */
  ariaLabel?: string;
  /** `TrustRitualItem` elements for the list, used instead of `items`. */
  listChildren?: React.ReactNode;
  /** Extra class names placed BEFORE `pod-layout`; the site instance passes `site-shell` (`class="site-shell pod-layout"`). */
  className?: string;
  /** Anything rendered after the list inside the copy column; the site adds nothing. Any `<p>` here is coloured by `.pod-layout p`. */
  children?: React.ReactNode;
}

/** `<li><span>number</span>children</li>` — one orange-numbered step. */
export declare function TrustRitualItem(props: TrustRitualItemProps): React.ReactElement;
/** `<ol class="trust-ritual">` — the hairline-ruled, titanium, `.78rem` 700 step list. */
export declare function TrustRitualList(props: TrustRitualListProps): React.ReactElement;
/** `<div class="pod-layout">` — figure + (eyebrow, h3, paragraph, `TrustRitualList`); two columns at ≥900px. */
export declare function TrustRitual(props: TrustRitualProps): React.ReactElement;

// ---- AboutLayout ----
/** Props of the Spoorlangs AboutLayout: the hairline-topped two-column about block (eyebrow + h3 in the left cell, one muted paragraph on the right from 900px; stacked below). */
export interface AboutLayoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id' | 'title' | 'className' | 'children'> {
  /** id of the block; the site's is "about" (default). Pass null to render no id. */
  id?: string | null;
  /** id of the hidden `<span class="legacy-anchor" aria-hidden="true">` rendered first; the site's is "nico" (default) — a hash-link target sitting 5rem above the block so it clears the fixed header. Pass null to omit the span. */
  anchorId?: string | null;
  /** Prepend the site's `site-shell` container class (default true — the home instance is `class="site-shell about-layout"`). */
  shell?: boolean;
  /** Eyebrow text rendered as `<p class="eyebrow">` before the h3 (site: "About Spoorlangs"); omit to render no eyebrow. */
  eyebrow?: React.ReactNode;
  /** The h3 text (site: "Who we are"); the global heading rule sets Oswald 700 uppercase, clamp(1.5rem,5vw,2.2rem). */
  title: React.ReactNode;
  /** Optional id on the h3 (for `aria-labelledby` on a wrapping section). Not set on the site. */
  headingId?: string;
  /** The paragraph, rendered as a direct-child `<p>` (`.about-layout>p`: muted-foreground, line-height 1.7, max-width 50rem). */
  body?: React.ReactNode;
  /** Further direct children after the paragraph, e.g. extra `<p>` elements (they take `.about-layout>p` too). The site has none. */
  children?: React.ReactNode;
  /** Extra class names appended after `site-shell about-layout`; the site adds none. */
  className?: string;
}

/** Renders `<div id="about" class="site-shell about-layout"><span id="nico" class="legacy-anchor" aria-hidden="true"></span><div><p class="eyebrow">…</p><h3>…</h3></div><p>…</p></div>`. */
export declare function AboutLayout(props: AboutLayoutProps): React.ReactElement;

// ---- WhatsappBand ----
// WhatsappBand — Spoorlangs (group: Sections; page showcase). Declarations as documentation; mirrors WhatsappBand.js.

/** The two lucide icons the band's WhatsApp link renders (project/assets/Icons/<name>.svg). */
export type WhatsappBandIconName = 'message-circle' | 'arrow-right';

export interface WhatsappBandActionProps extends Record<string, unknown> {
  /** "primary" → `.button-primary` (Ignition Orange, Asphalt Black label — the WhatsApp link); "secondary" → `.button-secondary` (Titanium outline — "Fill in the quote form"). Default "primary". */
  variant?: 'primary' | 'secondary';
  /** The link target — always an `<a>`: the site's "https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request" or "/quote?service=&pickup=". */
  href: string;
  /** The label — sentence case, verbatim site copy: "WhatsApp us", "Fill in the quote form", "Ask on WhatsApp". */
  label?: React.ReactNode;
  /** Fallback for `label` when the action is written as an element with children. */
  children?: React.ReactNode;
  /** Leading icon: an icon name rendered as the site's inline lucide `<svg aria-hidden="true">` ("message-circle" on every WhatsApp link), or your own node. */
  icon?: WhatsappBandIconName | React.ReactNode;
  /** Trailing icon: "arrow-right" on the site's WhatsApp link, or your own node. */
  trailingIcon?: WhatsappBandIconName | React.ReactNode;
  /** Wrap the label in a `<span>`. Default: true when `icon` is given (site: "WhatsApp us" is wrapped, "Fill in the quote form" is bare text). */
  wrapLabel?: boolean;
  /** Extra class names appended after `.button-primary` / `.button-secondary`. */
  className?: string;
  /** Accessible name; the site sets "WhatsApp +27 66 271 5887" on the wa.me link. */
  'aria-label'?: string;
  /** External links: the site's WhatsApp link uses target="_blank". */
  target?: string;
  /** Pairs with target: "noreferrer" on the site. */
  rel?: string;
  /** Click handler (passes through to the `<a>`). */
  onClick?: (event: unknown) => void;
  /** React list key when the action is passed through `actions`; defaults to `href` + index. */
  key?: string | number;
}

/** One link in the band's `.contact-actions` row: `<a class="button-primary|button-secondary">` with the site's order — leading icon, `<span>` label, trailing icon. Any other prop passes through to the `<a>`. */
export declare function WhatsappBandAction(props: WhatsappBandActionProps): React.ReactElement;

export interface WhatsappBandProps extends Record<string, unknown> {
  /** The `<p class="eyebrow">` text. Default (site): "Talk directly to Spoorlangs". Pass null to omit. */
  eyebrow?: React.ReactNode;
  /** The `<h2>`. Default (site): "Have a runner to move?". Pass null to omit. */
  title?: React.ReactNode;
  /** The muted paragraph under the heading (`--muted-foreground`, line-height 1.7). Default (site): "Share the collection point, destination, vehicle and preferred timing.". Pass null to omit. */
  text?: React.ReactNode;
  /** The `.contact-actions` row, in order, each rendered by `WhatsappBandAction`. Default (site): the WhatsApp `.button-primary` ("WhatsApp us", wa.me/27662715887 prefilled, message-circle + arrow-right, target="_blank" rel="noreferrer", aria-label "WhatsApp +27 66 271 5887") then the `.button-secondary` "Fill in the quote form" → "/quote?service=&pickup=". */
  actions?: WhatsappBandActionProps[];
  /** Custom nodes for the `.contact-actions` row (e.g. `WhatsappBandAction` elements); when given, `actions` is ignored. */
  children?: React.ReactNode;
  /** Extra class names appended after `whatsapp-band`. */
  className?: string;
  /** The `<aside>` landmark name. Default (site): "WhatsApp quote call to action". */
  'aria-label'?: string;
  /** Optional id on the `<aside>` (the site sets none; its hash links go to the neighbouring #why and #faq sections). */
  id?: string;
}

/** Black padded aside: `.whatsapp-band > .site-shell.whatsapp-layout > div` holding the eyebrow, `<h2>`, paragraph and the `.contact-actions` row (stacked, max-width 27rem, below 640px; a row from 640px). Any other prop passes through to the `<aside>`. */
export declare function WhatsappBand(props: WhatsappBandProps): React.ReactElement;

// ---- FaqList ----
// FaqList — Spoorlangs (group: Content). Declarations as documentation; mirrors FaqList.js.

/** One question/answer row as the site's `<details>` carries it. */
export interface FaqEntry {
  /** The question in the `<summary>`, sentence case with a "?" — site: "What do you deliver?", "How does POD work?". */
  question: React.ReactNode;
  /** The answer, rendered as the single `<p>` under the summary — site: "Runners only — vehicles that start and drive. Not tows, trailers, or non-runners." */
  answer?: React.ReactNode;
  /** Initial `open` attribute on the native `<details>` (uncontrolled afterwards). The site ships every row closed. */
  open?: boolean;
  /** Optional `id` on the `<details>` (also used as the React key). Not set on the site. */
  id?: string;
  /** Explicit React key; defaults to `id`, then the index. */
  key?: string | number;
  /** Extra class names on the `<details>`. The site sets none. */
  className?: string;
}

export interface FaqItemProps extends Record<string, unknown> {
  /** The question text inside `<summary>`; the orange "+" `<span aria-hidden="true">` is appended automatically. */
  question: React.ReactNode;
  /** The answer, wrapped in `<p>` (muted-foreground, line-height 1.7; .84rem / 1.55 at ≥900px). */
  answer?: React.ReactNode;
  /** Initial `open` attribute — rotates the "+" 45° into a "×" over .2s. Default false. */
  open?: boolean;
  /** Native toggle event from the `<details>` (fires on open and close). */
  onToggle?: (event: unknown) => void;
  /** Extra class names on the `<details>`. */
  className?: string;
  /** Further nodes after the answer `<p>` (the site has exactly one `<p>` per row). */
  children?: React.ReactNode;
}

/** One accordion row: `<details [open]><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>`. Any other prop passes through to the `<details>`. */
export declare function FaqItem(props: FaqItemProps): React.ReactElement;

export interface FaqListProps {
  /** The Q&A rows, in order; home carries 11, /faq three groups of 6 + 4 + 5. */
  items?: FaqEntry[];
  /** Forwarded to every row's `<details>` as `onToggle(event, index, item)`. */
  onToggle?: (event: unknown, index: number, item: FaqEntry) => void;
  /** Extra class names after the site's `faq-list`. */
  className?: string;
  /** Extra rows (`FaqItem` nodes) after `items`. */
  children?: React.ReactNode;
}

/** `<div class="faq-list">`: hairline top rule (`--border`), each `<details>` with a hairline bottom rule, 800-weight summaries. */
export declare function FaqList(props: FaqListProps): React.ReactElement;

export interface FaqGroupProps {
  /** The `<h2 class="faq-group-heading">` — Oswald, 1.4rem, uppercase via CSS, `--orange`. Site: "What Spoorlangs does", "Coverage and availability", "Booking, quotes and rates" (/faq); "Zone rates", "What we move" (/pricing). */
  heading: React.ReactNode;
  /** The heading id and the section's `aria-labelledby`. Default for a string heading: the site's own "faq-" + lowercased heading with whitespace → "-" ("faq-what-spoorlangs-does"); the pricing page uses "rates-title" / "vehicles-title". Required when `heading` is not a string. */
  id?: string;
  /** Rows rendered as a `FaqList` under the heading; omit for non-FAQ content (the pricing page's table and vehicle cards go in `children`). */
  items?: FaqEntry[];
  /** Forwarded to the inner `FaqList`. */
  onToggle?: (event: unknown, index: number, item: FaqEntry) => void;
  /** Extra class names after the site's `faq-section-page`. */
  className?: string;
  /** Nodes after the list (or instead of it). */
  children?: React.ReactNode;
}

/** `<section class="faq-section-page" aria-labelledby>` with an orange uppercase `h2.faq-group-heading` and the rows — one per group on /faq and /pricing. */
export declare function FaqGroup(props: FaqGroupProps): React.ReactElement;

export interface FaqSectionLink {
  /** Site: "/pricing". */
  href: string;
  /** Site: "See the guide rates". */
  label: React.ReactNode;
}

export interface FaqSectionProps {
  /** The section id (the home nav's "#faq" target). Default "faq". */
  id?: string;
  /** The h2 id and the section's `aria-labelledby`. Default "faq-title". */
  titleId?: string;
  /** `<p class="eyebrow">` above the heading. Site: "Straight answers". */
  eyebrow?: React.ReactNode;
  /** The section `<h2>` (Base's uppercase Oswald rule). Site: "Before the wheels turn." */
  title: React.ReactNode;
  /** `<p class="faq-sub">` under the heading (muted). Site: "WhatsApp us for anything not covered here." */
  sub?: React.ReactNode;
  /** The 11 home rows. */
  items?: FaqEntry[];
  /** Forwarded to the inner `FaqList`. */
  onToggle?: (event: unknown, index: number, item: FaqEntry) => void;
  /** Closing `<p class="faq-sub"><a class="service-card-link" href>…</a></p>`. Site: { href: "/pricing", label: "See the guide rates" }. */
  link?: FaqSectionLink;
  /** Extra class names after the site's `section faq-section`. */
  className?: string;
  /** Nodes inside the column after the list, before the footer link. */
  children?: React.ReactNode;
}

/** The home page block: `<section id="faq" class="section faq-section">` → `.site-shell.faq-layout` → eyebrow, h2, `.faq-sub`, `.faq-list`, footer link. Background: a 180° gradient from `--background` to `--card`. */
export declare function FaqSection(props: FaqSectionProps): React.ReactElement;

export interface FaqCtaPrimaryLink {
  /** Site: "/pricing" (/faq) or "/quote?service=&pickup=" (/pricing). */
  href: string;
  /** Label inside the `<span>`, followed by the arrow-right icon. Site: "See guide rates", "Get a quote". */
  label: React.ReactNode;
}

export interface FaqCtaWhatsAppLink {
  /** Label inside the `<span>` between message-circle and arrow-right. Site: "Ask on WhatsApp". */
  label: React.ReactNode;
  /** Override the wa.me link. Default: the site's "https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request". */
  href?: string;
}

export interface FaqCtaProps {
  /** `<p class="lead">` above the buttons. Site: "Still unsure? Send the collect pin, deliver pin and vehicle notes — we will confirm what is possible." */
  lead?: React.ReactNode;
  /** First `.button-primary` link: `<span>label</span>` + arrow-right. */
  primary?: FaqCtaPrimaryLink;
  /** Second `.button-primary` link: message-circle + `<span>label</span>` + arrow-right, `target="_blank" rel="noreferrer"`, `aria-label="WhatsApp +27 66 271 5887"`. */
  whatsapp?: FaqCtaWhatsAppLink;
  /** Extra class names after the site's `faq-cta`. */
  className?: string;
  /** Further action nodes inside `.pricing-cta-row` after the two links (e.g. Spoorlangs.Button). */
  children?: React.ReactNode;
}

/** The closing call-to-action under the groups: `<div class="faq-cta"><p class="lead">…</p><div class="pricing-cta-row">…</div></div>`, as /faq and /pricing end. */
export declare function FaqCta(props: FaqCtaProps): React.ReactElement;

// ---- ContactBand ----
// ContactBand — Spoorlangs (group: Sections; page showcase). Declarations as documentation; mirrors ContactBand.js.

/** The three lucide icons the band's links render (project/assets/Icons/<name>.svg). */
export type ContactBandIconName = 'message-circle' | 'arrow-right' | 'mail';

export interface ContactBandActionProps extends Record<string, unknown> {
  /** "primary" → `.button-primary` (Ignition Orange, Asphalt Black label — the WhatsApp link, once per band); "secondary" → `.button-secondary` (Titanium outline — mail, quote and contact links). Default "primary". */
  variant?: 'primary' | 'secondary';
  /** The link target — always an `<a>`: the site's "https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request", "mailto:drive@spoorlangs.online", "/quote?service=&pickup=" or "/contact". */
  href: string;
  /** The label — sentence case, verbatim site copy: "WhatsApp us", "drive@spoorlangs.online", "Get a quote", "Contact details". */
  label?: React.ReactNode;
  /** Fallback for `label` when the action is written as an element with children. */
  children?: React.ReactNode;
  /** Leading icon: an icon name rendered as the site's inline lucide `<svg aria-hidden="true">` ("message-circle" on the WhatsApp link, "mail" on the email link), or your own node. */
  icon?: ContactBandIconName | React.ReactNode;
  /** Trailing icon: "arrow-right" on the site's WhatsApp link, or your own node. */
  trailingIcon?: ContactBandIconName | React.ReactNode;
  /** Wrap the label in a `<span>`. Default: true when `icon` is given. The site wraps "WhatsApp us" but leaves the mail label bare after its icon — pass false to match. */
  wrapLabel?: boolean;
  /** Extra class names appended after `.button-primary` / `.button-secondary`. */
  className?: string;
  /** Accessible name; the site sets "WhatsApp +27 66 271 5887" on the wa.me link. */
  'aria-label'?: string;
  /** External links: the site's WhatsApp link uses target="_blank". */
  target?: string;
  /** Pairs with target: "noreferrer" on the site. */
  rel?: string;
  /** Click handler (passes through to the `<a>`). */
  onClick?: (event: unknown) => void;
  /** React list key when the action is passed through `actions`; defaults to `href` + index. */
  key?: string | number;
}

/** One link in the band's `.contact-actions` row: `<a class="button-primary|button-secondary">` with the site's order — leading icon, label (in a `<span>` or bare), trailing icon. Any other prop passes through to the `<a>`. */
export declare function ContactBandAction(props: ContactBandActionProps): React.ReactElement;

export interface ContactBandProps extends Record<string, unknown> {
  /** The background photograph (`<img loading="lazy">`, no class; object-fit cover, centred). Site: Imagery `contact-cta.png` (2752×1536). Omit to render the band without a photo (overlay on `--background`). */
  imageSrc?: string;
  /** Alt text — on every image (Brand Book p26). Default (site): "Get a Spoorlangs vehicle delivery quote"; describe the image you pass. */
  imageAlt?: string;
  /** The `<img loading>` attribute. Default (site): "lazy". */
  imageLoading?: 'lazy' | 'eager';
  /** The `<p class="eyebrow">` text. Default (site): "Kempton Park · Gauteng vehicle delivery". Pass null to omit. */
  eyebrow?: React.ReactNode;
  /** The `<h2>` (max-width 13ch). Default (site): "Every vehicle deserves a professional journey." — the Brand Book's North Star (p05). Pass null to omit. */
  title?: React.ReactNode;
  /** The `<h2>` id, also the section's `aria-labelledby`. Default (site): "contact-title". */
  titleId?: string;
  /** The `<p class="contact-hours">` line (Titanium Silver, .85rem/1.6, max-width 38rem). Default (site): "Message any time · Nico replies from 07:30 · we confirm your window.". Pass null to omit. */
  hours?: React.ReactNode;
  /** The `.contact-actions` row, in order, each rendered by `ContactBandAction`. Default (site): the WhatsApp `.button-primary` ("WhatsApp us", wa.me/27662715887 prefilled, message-circle + arrow-right, target="_blank" rel="noreferrer", aria-label "WhatsApp +27 66 271 5887"), then `.button-secondary` "drive@spoorlangs.online" (mail icon, bare label) → mailto, "Get a quote" → "/quote?service=&pickup=", "Contact details" → "/contact". */
  actions?: ContactBandActionProps[];
  /** Custom nodes for the `.contact-actions` row (e.g. `ContactBandAction` elements); when given, `actions` is ignored. */
  children?: React.ReactNode;
  /** Extra class names appended after `contact-section`. */
  className?: string;
  /** The section id — the header's "Contact" link lands here. Default (site): "contact"; pass null to omit. */
  id?: string | null;
  /** Overrides the computed `aria-labelledby` (default: `titleId` while a title renders). */
  'aria-labelledby'?: string;
}

/** Photo band: `.contact-section` (flex, min-height 36rem, overflow hidden) holding the `<img>`, the `.contact-overlay` left-to-right black scrim and `.site-shell.contact-content` with the eyebrow, `<h2>`, `.contact-hours` line and the `.contact-actions` row (stacked, max-width 27rem, below 640px; a row from 640px). Any other prop passes through to the `<section>`. */
export declare function ContactBand(props: ContactBandProps): React.ReactElement;

// ---- CoverageSection ----
// CoverageSection — Spoorlangs (group: Sections). Declarations as documentation; mirrors CoverageSection.js.

/** One coverage area as the site's pin list writes it (js/index-XYJAvexp.js): an area centre, never a driver. */
export interface CoverageArea {
  /** Area name — the popup's <strong> and the `?pickup=` value on the site: "Johannesburg", "Sandton", "Midrand", "Centurion", "Pretoria", "Ekurhuleni", "Roodepoort & West Rand", "Vereeniging & Vanderbijlpark". */
  name: string;
  /** Latitude in decimal degrees (site: -26.2041 for Johannesburg). */
  lat: number;
  /** Longitude in decimal degrees (site: 28.0473 for Johannesburg). */
  lng: number;
}

export interface CoverageMapProps extends Record<string, unknown> {
  /** The pins. Default: the site's eight Gauteng areas in site order. `[]` renders the empty bordered box (the server-rendered state before Leaflet mounts). */
  areas?: CoverageArea[];
  /** Accessible name of the region. Default (site): "Map of Gauteng areas Spoorlangs collects from and delivers to". */
  'aria-label'?: string;
  /** Attribution strip content. Default: the site's tile attribution "© OpenStreetMap contributors" with its link (target _blank, rel noreferrer). `false` hides the strip. */
  attribution?: React.ReactNode | false;
  /** Leaflet fitBounds padding in px, [x, y]. Default (site): [32, 32]. */
  padding?: [number, number];
  /** Marker radius in px. Default (site circleMarker): 9. */
  markerRadius?: number;
  /** Receives the `.coverage-map` element (callback or ref object) — mount real Leaflet here and pass `children` or `areas: []` to keep the box empty. */
  mapRef?: ((el: HTMLDivElement | null) => void) | { current: HTMLDivElement | null };
  /** Extra class names appended after `coverage-map`. */
  className?: string;
  /** Inline style merged over the `position: relative` Leaflet sets on its container. */
  style?: React.CSSProperties;
  /** Replaces the static rendition (markers + attribution) inside the box. */
  children?: React.ReactNode;
}

export interface CoverageHonestyProps extends Record<string, unknown> {
  /** One `<li>` per line. Default (site /coverage): "Based in Kempton Park" · "Johannesburg / Greater Gauteng on-wheels, day one" · "Outside Gauteng — WhatsApp us (no national branch list)" · "Runners only: the vehicle must start and drive". */
  items?: React.ReactNode[];
  /** Accessible name of the list. Default (site): "Spoorlangs coverage and service scope". */
  'aria-label'?: string;
  /** Extra class names appended after `coverage-honesty`. */
  className?: string;
  /** Custom `<li>` nodes in place of `items`. */
  children?: React.ReactNode;
}

export interface CoverageNoteProps extends Record<string, unknown> {
  /** Which site note to show when there are no children: "home" (default) — "Pins mark the areas we cover — not live driver locations. …"; "page" — "Coverage pins are approximate area centres. …". */
  variant?: 'home' | 'page';
  /** Extra class names appended after `coverage-note`. */
  className?: string;
  /** The note text; overrides `variant`. */
  children?: React.ReactNode;
}

export interface CoverageBookingLinkProps extends Record<string, unknown> {
  /** Link target. Default (site): "/coverage?service=&pickup=". */
  href?: string;
  /** Extra class names appended after `button-primary coverage-booking-link`. */
  className?: string;
  /** The label. Default (site): "Request a run". */
  children?: React.ReactNode;
}

export interface CoverageSectionProps extends Record<string, unknown> {
  /** `<p class="eyebrow">` text. Default (site): "Where we drive"; `null` omits it. */
  eyebrow?: React.ReactNode | null;
  /** The `<h2>` text (sentence case; the CSS uppercases it). Default (site): "Gauteng, on the ground."; `null` omits it. */
  title?: React.ReactNode | null;
  /** The muted paragraph under the heading. Default (site): "These are the areas Spoorlangs collects from and delivers to today. Nationwide is where we are headed — not a claim of branches elsewhere."; `null` omits it. */
  lead?: React.ReactNode | null;
  /** `id` of the h2 and the section's `aria-labelledby`. Default (site): "coverage-title". */
  titleId?: string;
  /** The `.coverage-note` text. Default (site home): "Pins mark the areas we cover — not live driver locations. …"; `null` omits it. */
  note?: React.ReactNode | null;
  /** Pins passed to CoverageMap. Default: the site's eight areas. */
  areas?: CoverageArea[];
  /** The map region's accessible name (CoverageMap `aria-label`). */
  mapLabel?: string;
  /** Any further CoverageMap props (attribution, padding, mapRef, children …). */
  mapProps?: Partial<CoverageMapProps>;
  /** Booking link href. Default (site): "/coverage?service=&pickup="; `null` omits the link. */
  bookingHref?: string | null;
  /** Booking link label. Default (site): "Request a run"; `null` omits the link. */
  bookingLabel?: React.ReactNode | null;
  /** `id` of the section. Default (site): "coverage" — the header's `#coverage` hash link target. */
  id?: string;
  /** Extra class names appended after `section coverage-section`. */
  className?: string;
  /** Rendered inside `.site-shell` after the booking link. */
  children?: React.ReactNode;
}

/** `<div class="coverage-map" role="region">` — the bordered 22rem map box: a static rendition of the site's Leaflet map (markers + attribution), or `children`. */
export declare function CoverageMap(props: CoverageMapProps): React.ReactElement;
/** `<ul class="coverage-honesty">` — the coverage page's four-line scope list, 3px Ignition Orange left edge, "·" bullets, two columns from 640px. */
export declare function CoverageHonesty(props: CoverageHonestyProps): React.ReactElement;
/** `<p class="coverage-note">` — the muted "pins, not drivers" line under the map. */
export declare function CoverageNote(props: CoverageNoteProps): React.ReactElement;
/** `<a class="button-primary coverage-booking-link">` — the "Request a run" pill under the home note. */
export declare function CoverageBookingLink(props: CoverageBookingLinkProps): React.ReactElement;
/** `<section id="coverage" class="section coverage-section">` — the home page's heading + map + note + booking link, in its own `.site-shell`. */
export declare function CoverageSection(props: CoverageSectionProps): React.ReactElement;

// ---- PricingTable ----
// PricingTable — Spoorlangs (group: Data). Declarations as documentation; mirrors PricingTable.js.

/** One zone row. Rates are formatted strings exactly as published — "R950", "R1 350" (space as thousands separator, Brand Book p24) — never numbers. */
export interface PricingRow {
  /** The zone name in the row header `<th scope="row">` (uppercased by CSS) — site: "Local", "JHB–PTA", "Greater Gauteng"; quote page: "Johannesburg–Pretoria". */
  zone: React.ReactNode;
  /** Zone description rendered as `<span class="pricing-zone-note">` under the name (full table only; GuideRates ignores it) — site: "Within the Johannesburg metro", "Johannesburg to Pretoria corridor", "Beyond the metro, inside Gauteng". */
  note?: React.ReactNode;
  /** Standard rate — site: "R950" / "R1 850" / "R2 450". */
  standard?: React.ReactNode;
  /** Rush rate — site: "R1 350" / "R2 450" / "R3 150". */
  rush?: React.ReactNode;
  /** After-hours / Sunday rate — site: "R1 650" / "R2 950" / "R3 750". */
  afterHours?: React.ReactNode;
  /** Alternative to standard/rush/afterHours: the rate cells in column order (any length, to match a custom `columns`). Wins when present. */
  rates?: React.ReactNode[];
  /** Explicit React key; defaults to `id`, then the index. */
  key?: string | number;
  /** Used as the React key when `key` is absent. Not set on the site. */
  id?: string;
}

export interface PricingTableProps extends Record<string, unknown> {
  /** The zone rows in site order (Local, JHB–PTA, Greater Gauteng). Required — the rates are consumer data, never baked in. */
  rows: PricingRow[];
  /** Column headers (`<th scope="col">`, uppercase .74rem/800 titanium). Default: "Zone", "Standard", "Rush", "After-hours / Sunday". The first names the zone column; the rest must match each row's rate cells. */
  columns?: React.ReactNode[];
  /** Visually hidden `<caption class="sr-only">`. Default: "Guide rates by zone and service speed, excluding VAT". Pass null or "" to omit (not recommended — it is the table's accessible name). */
  caption?: React.ReactNode | null;
  /** When given, a `PricingNotes` list renders after the wrap as a sibling — site: the three "guide rates / excl. VAT" notes on /pricing. */
  notes?: React.ReactNode[];
  /** Extra class names appended after "pricing-table-wrap" on the wrapper `<div>`. The site sets none. */
  className?: string;
  /** Further nodes rendered after the wrap (and after the notes) as siblings; the site has none. */
  children?: React.ReactNode;
}

/** Zone-rate table: `<div class="pricing-table-wrap"><table class="pricing-table">` with an sr-only caption, `<th scope="col">` headers and `<th scope="row">` zone cells (+ `.pricing-zone-note`), orange nowrap rate `<td>`s. Any other prop passes through to the wrapper `<div>`. Compose it inside FaqList's `FaqGroup` ("Zone rates") as /pricing does. */
export declare function PricingTable(props: PricingTableProps): React.ReactElement;

export interface PricingNotesProps extends Record<string, unknown> {
  /** One `<li>` per item, in order — site: "All rates are guide rates and exclude VAT. Spoorlangs is not VAT registered — no VAT is added." … */
  items?: React.ReactNode[];
  /** Extra class names appended after "pricing-notes". */
  className?: string;
  /** Further nodes after the items inside the `<ul>` (should be `<li>`s). */
  children?: React.ReactNode;
}

/** `<ul class="pricing-notes">` — titanium .9rem/1.6 outside-bulleted notes, margin-top 1.25rem. Any other prop passes through to the `<ul>`. */
export declare function PricingNotes(props: PricingNotesProps): React.ReactElement;

export interface GuideRatesProps extends Record<string, unknown> {
  /** The zone rows (same shape as PricingTable; `note` is not rendered) — site: "Local", "Johannesburg–Pretoria", "Greater Gauteng" with the same nine rates. */
  rows: PricingRow[];
  /** The `<h2>` text (Oswald 1rem/1.3, uppercase). Default "Guide". */
  heading?: React.ReactNode;
  /** The `<span>` after the heading (Montserrat .68rem/700 titanium). Default "· excl. VAT · confirm on quote". Pass null or "" to omit. */
  headingSuffix?: React.ReactNode | null;
  /** `id` of the `<h2>` and the section's `aria-labelledby`. Default "guide-rates-title" (the site's). */
  headingId?: string;
  /** Plain `<th>` headers (no scope on the site), orange uppercase .62rem. Default: "Zone", "Standard", "Rush", "After-hours". */
  columns?: React.ReactNode[];
  /** The muted `<p>` under the table. Default "After-hours / Sunday = named rate.". Pass null or "" to omit. */
  footnote?: React.ReactNode | null;
  /** Extra class names appended after "guide-rates" on the `<section>`. */
  className?: string;
  /** Further nodes after the footnote inside the `<section>`; the site has none. */
  children?: React.ReactNode;
}

/** The /quote compact variant: `<section class="guide-rates" aria-labelledby>` with `<h2>Guide <span>· excl. VAT · confirm on quote</span></h2>`, a `.guide-rates-scroll` div holding a plain `<table>` (min-width 31rem, .7rem, right-aligned rates in titanium), and the footnote `<p>`. Any other prop passes through to the `<section>`. */
export declare function GuideRates(props: GuideRatesProps): React.ReactElement;

// ---- VehicleCard ----
// VehicleCard — Spoorlangs (group: Data). Declarations as documentation; mirrors VehicleCard.js.

/** One vehicle-class card's data (the site's four, in site order: Sedans & hatchbacks · SUVs & bakkies · Vans & LDVs · Luxury & classic). */
export interface VehicleItem {
  /** Card title → `<h3>`; write it in sentence case with "&", the CSS uppercases it (site: "Sedans & hatchbacks", "SUVs & bakkies", "Vans & LDVs", "Luxury & classic"). */
  title: React.ReactNode;
  /** One or two sentences → `<p>` in `--titanium` .9rem/1.6 (site: "Core work. Standard zone rates apply — the vehicle must start and drive."). Omit to render no `<p>`. */
  description?: React.ReactNode;
  /** Extra class names appended to this card's `pricing-vehicle-card`. */
  className?: string;
  /** React key; defaults to the array position. */
  key?: string | number;
}

export interface VehicleCardProps {
  /** Card title → `<h3>` (uppercased, .04em tracking, `--orange`, 1rem; Oswald 700 via the global heading rule). */
  title: React.ReactNode;
  /** The `<p>` copy (`--titanium`, .9rem/1.6). Takes precedence over `children`. */
  description?: React.ReactNode;
  /** Fallback content of the `<p>` when `description` is not given; with neither, no `<p>` is rendered. */
  children?: React.ReactNode;
  /** Extra class names appended to `pricing-vehicle-card`. */
  className?: string;
}

export interface VehicleGridProps {
  /** The cards, in order (the site renders exactly four). */
  items?: VehicleItem[];
  /** Extra class names appended to `pricing-vehicle-grid`. */
  className?: string;
  /** Appended after the items as further direct children — hand-built `VehicleCard`s. */
  children?: React.ReactNode;
}

export interface VehicleSectionProps {
  /** `id` on the `<h2>`, referenced by the section's `aria-labelledby` (site: "vehicles-title"). Default "vehicles-title". */
  id?: string;
  /** The `<h2 class="faq-group-heading">` text (site: "What we move"); sentence case, uppercased and set `--orange` by FaqList's CSS. */
  heading: React.ReactNode;
  /** The cards — see `VehicleItem`. */
  items?: VehicleItem[];
  /** Extra class names appended to the inner `pricing-vehicle-grid`. */
  gridClassName?: string;
  /** Hand-built `VehicleCard`s appended inside the grid after `items`. */
  gridChildren?: React.ReactNode;
  /** The `<p class="lead">` after the grid (site: "Runners only — the vehicle must start and drive. Non-runners, tows and trailer work fall outside what we do."). Omit to render none. */
  note?: React.ReactNode;
  /** Extra class names appended to `faq-section-page`. */
  className?: string;
  /** Rendered inside the `<section>` after the note. */
  children?: React.ReactNode;
}

/** One `<article class="pricing-vehicle-card">`: orange uppercase h3 and titanium copy inside a .75rem-radius titanium hairline — no icon, price or link. */
export declare function VehicleCard(props: VehicleCardProps): React.ReactElement;
/** `<div class="pricing-vehicle-grid">` — one column, two from 700px, 1rem gap, of `VehicleCard`s. */
export declare function VehicleGrid(props: VehicleGridProps): React.ReactElement;
/** `<section aria-labelledby class="faq-section-page">` — h2.faq-group-heading, the grid and the `.lead` note, as the /pricing "What we move" block. */
export declare function VehicleSection(props: VehicleSectionProps): React.ReactElement;

// ---- Field ----
// Field — Spoorlangs (group: Forms). Declarations as documentation; mirrors Field.js.

/** One `<option>` of a Field select: a bare string (value = label) or a row. */
export interface FieldOption {
  /** The option's value attribute — the site's slugs: "same-day", "auction", "after-hours", "fleet", "live-pin", "pod"; "" for "Choose…". */
  value: string;
  /** The visible text; defaults to `value`. Site: "Same-day", "Auction", "After-hours", "Fleet", "Live pin", "POD"; "07:00 – 09:00" … "After-hours (after 17:00)". */
  label?: React.ReactNode;
  /** `disabled` on the option — the coverage page's "Choose…" row. */
  disabled?: boolean;
  /** Pre-selected row; expressed as `defaultValue` on the `<select>` so the `selected` attribute lands on mount (coverage "Choose…"). */
  selected?: boolean;
}

export interface FieldProps extends Record<string, unknown> {
  /** The control's `id` and the label's `for`; also the default `name`. Site ids: "service_type", "pickup", "dropoff", "vehicle_make", "vehicle_model", "vehicle_year", "vehicle_type", "name" / "customer_name", "phone", "email", "notes", "preferred_window", "requested_date". */
  id: string;
  /** Label text, verbatim site copy: "Service", "Collection point", "Delivery point", "Vehicle make", "Vehicle model", "Year (optional)", "Your name", "Contact number", "Email address", "Anything else? (optional)" … (CSS uppercases it). */
  label: React.ReactNode;
  /** Which element: "input" (default), "select" (with `options`) or "textarea" (with `rows`, `maxLength`). */
  control?: 'input' | 'select' | 'textarea';
  /** `name` attribute; defaults to `id` (the site's ids and names match on every field). */
  name?: string;
  /** Adds `.field-wide` — spans both columns of `.quote-form` from 640px (site: "Email address", "Anything else? (optional)", consent). */
  wide?: boolean;
  /** Error text → `<span role="alert">` after the control and `aria-invalid="true"`. Site messages (quote-schema): "Please choose a service.", "Where should the vehicle be collected?", "Where should the vehicle be delivered?", "Which make is the vehicle?", "Which model is the vehicle?", "Year looks too far in the future.", "Please enter your name.", "Please enter a contact number.", "Use digits, spaces, +, - or brackets only.", "Please keep notes under 500 characters." */
  error?: React.ReactNode;
  /** Default true → `aria-invalid="false"` on the control, as the site renders validated fields; false omits the attribute (quote "Preferred date and time", coverage/book "Service" selects, book "Year (optional)"). */
  validated?: boolean;
  /** Select rows (control "select"): strings or `FieldOption`s. */
  options?: Array<string | FieldOption>;
  /** Extra class names appended after `field[ field-wide]`. */
  className?: string;
  /** Attributes for the wrapping `<div class="field">` (data-*, style …). */
  wrapperProps?: Record<string, unknown>;
  /** A custom control node rendered in place of the generated input/select/textarea (keep `id` = the label's `for`). */
  children?: React.ReactNode;
  /** Input type — site: "date" (with `min`), "email", "tel" (book "Phone"); omitted = text. */
  type?: string;
  /** Site: "numeric" on the year fields, "tel" on "Contact number" / "Phone number". */
  inputMode?: string;
  /** Site: "name", "tel", "email". */
  autoComplete?: string;
  /** Verbatim site placeholders: "e.g. Thursday morning or asap", "e.g. 09:00–12:00", "+27821234567", "e.g. Toyota", "e.g. Corolla". */
  placeholder?: string;
  /** Textarea rows — site: 4 on "Anything else? (optional)". */
  rows?: number;
  /** Textarea maxLength — site: 500. */
  maxLength?: number;
  /** Date input minimum — the book page sets today's date ("2026-10-08" when fetched). */
  min?: string;
  /** Controlled value (pair with `onChange`). */
  value?: string;
  /** Uncontrolled initial value (a select with a `selected` option sets this itself). */
  defaultValue?: string;
  /** Change handler (passes through to the control). */
  onChange?: (event: unknown) => void;
  /** Passes through; the site's custom CSS has no disabled style (gap). */
  disabled?: boolean;
  /** Passes through; the site's forms are `noValidate` and validate in the client instead. */
  required?: boolean;
}

/** Grid field: `<div class="field[ field-wide]"><label for>…</label><input|select|textarea id aria-invalid name …/>[<span role="alert">…</span>]</div>`. Any other prop passes through to the control. */
export declare function Field(props: FieldProps): React.ReactElement;

export interface ConsentFieldProps extends Record<string, unknown> {
  /** Checkbox `id` and the label's `for`; default "consent" (coverage uses "booking-consent"). Ignored in the `utilities` variant, which has neither. */
  id?: string;
  /** Checkbox `name`; default "consent" (every page). */
  name?: string;
  /** true → the book page's markup: no `.consent-field`, label `class="flex items-start gap-2"`, checkbox `class="mt-1"`, no id/for/aria-invalid. */
  utilities?: boolean;
  /** Error text → `<span role="alert">` after the label and `aria-invalid="true"`. Site message (quote-schema): "Please tick the box so we may use your details to reply." Placement after the label is inferred — the span is client-rendered and not in the source pack. */
  error?: React.ReactNode;
  /** Default true → `aria-invalid="false"` on the checkbox (quote page); false omits it (coverage page). Not used by the `utilities` variant. */
  validated?: boolean;
  /** Extra class names appended after `field field-wide[ consent-field]`. */
  className?: string;
  /** Attributes for the wrapping `<div>`. */
  wrapperProps?: Record<string, unknown>;
  /** The sentence inside the `<span>`, verbatim: "I agree that Spoorlangs may use these details to contact me about this quote, as set out in the <a href="/privacy">privacy notice</a>." (quote) · "I agree that Spoorlangs may store and use these details to review and respond to this booking request, as set out in the <a href="/privacy">privacy policy</a>." (coverage) · "I agree that Spoorlangs may use these details to arrange this run." (book). */
  children?: React.ReactNode;
  /** Controlled checked state (pair with `onChange`). */
  checked?: boolean;
  /** Uncontrolled initial state. */
  defaultChecked?: boolean;
  /** Change handler (passes through to the checkbox). */
  onChange?: (event: unknown) => void;
}

/** Consent checkbox sentence: `<div class="field field-wide consent-field"><label for><input type="checkbox" …/><span>…</span></label></div>` (or the book page's utility-class variant). */
export declare function ConsentField(props: ConsentFieldProps): React.ReactElement;

export interface FormErrorProps extends Record<string, unknown> {
  /** Extra class names appended after `form-error`. */
  className?: string;
  /** The message. The site's own form-level copy is client-rendered and not in the source pack — use its schema messages or your own validated copy. */
  children?: React.ReactNode;
  /** Passes through, e.g. "alert" (the site's field-level pattern). */
  role?: string;
}

/** Form-level message: `<p class="form-error">` — 3px Ignition Orange left rule, orange .82rem/700. Element name system-given (markup not in the source pack). */
export declare function FormError(props: FormErrorProps): React.ReactElement;

export interface QuoteConfirmationProps extends Record<string, unknown> {
  /** Extra class names appended after `quote-confirmation`. */
  className?: string;
  /** The panel's content; inherits var(--foreground) at .9rem/1.6. The site's own copy is client-rendered and not in the source pack. */
  children?: React.ReactNode;
}

/** Full-width confirmation panel at the foot of `.quote-form`: `<div class="quote-confirmation">` — orange-45 % hairline, orange-10 % fill, radius .75rem, grid-column 1/-1. Element name system-given (markup not in the source pack). */
export declare function QuoteConfirmation(props: QuoteConfirmationProps): React.ReactElement;

// ---- CorridorChips ----
// CorridorChips — Spoorlangs (group: Forms). Declarations as documentation; mirrors CorridorChips.js.

export interface CorridorChipProps extends Record<string, unknown> {
  /** Renders `<a href … type="button">` instead of `<button>`; the site's only link chip is the wa.me "Outside Gauteng — WhatsApp us" (prefilled "Hi Spoorlangs — quote request / Collection: Outside Gauteng"). */
  href?: string;
  /** `<a>` only. Default "_blank" (site); pass null to omit the attribute. */
  target?: string | null;
  /** `<a>` only. Default "noreferrer" (site); pass null to omit the attribute. */
  rel?: string | null;
  /** `<button>` only: "button" | "submit" | "reset". Default "button" (every site chip). */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler, passed to the element. */
  onClick?: (event: unknown) => void;
  /** `<button>` only: sets the disabled attribute; the Tailwind utilities then paint opacity .5, cursor not-allowed, no pointer events (the site never renders a chip disabled). */
  disabled?: boolean;
  /** Extra class names appended after the site's shadcn outline/sm class list. */
  className?: string;
  /** The label, verbatim site copy: "Johannesburg", "Pretoria", "Greater Gauteng", "Outside Gauteng — WhatsApp us". */
  children?: React.ReactNode;
}

/** One pill chip: `<button class="inline-flex … text-xs" type="button">` or, with `href`, `<a href target="_blank" rel="noreferrer" class="…" type="button">` — the site's markup attribute for attribute. Styled titanium on background with a `--border` hairline, 999px radius, min-height 2.25rem; hover orange border and white text. */
export declare function CorridorChip(props: CorridorChipProps): React.ReactElement;

export interface CorridorChipItem extends CorridorChipProps {
  /** The chip label (rendered as the chip's children). */
  label: React.ReactNode;
  /** React key; defaults to the label when it is a string, else the index. */
  key?: string | number;
}

export interface CorridorChipsProps extends Record<string, unknown> {
  /** The `<legend>`: uppercase titanium .74rem/900, .12em tracking. Default "Collection corridor" (the site's only legend). Type it in sentence case; CSS uppercases it. */
  legend?: React.ReactNode;
  /** Chips in order; the site's set is three `<button>`s ("Johannesburg", "Pretoria", "Greater Gauteng") then the wa.me `<a>` chip. */
  items?: CorridorChipItem[];
  /** Alternative to `items`: already-composed `CorridorChip` nodes placed inside `.corridor-chips`. */
  children?: React.ReactNode;
  /** Keep the site's `field-wide` class (full row of `.quote-form`'s two-column grid at ≥640px, rule owned by QuoteForm). Default true; false drops it. */
  wide?: boolean;
  /** Extra class names appended after "corridor-picker field-wide". */
  className?: string;
  /** Fires after a button chip's own onClick with (item, index, event); never for the `href` chip. On the site the chips write the corridor into the "Collection point" field — that wiring is the consumer's. */
  onSelect?: (item: CorridorChipItem, index: number, event: unknown) => void;
  /** Any other attribute passes through to the `<fieldset>` (id, aria-describedby, form …). */
  'aria-describedby'?: string;
}

/** `<fieldset class="corridor-picker field-wide">` with an uppercase titanium `<legend>` and a wrapped `.corridor-chips` flex row (gap .5rem) of pill chips — the first row of the quote form on /quote and /coverage. No selected state exists in the source. */
export declare function CorridorChips(props: CorridorChipsProps): React.ReactElement;

// ---- QuoteForm ----
// QuoteForm — Spoorlangs (group: Forms, page showcase). Declarations as documentation; mirrors QuoteForm.js.
// Markup from page-quote.html (shell shared with page-book.html; `.quote-form` alone on page-coverage.html);
// CSS from custom.css L1676–L1684, L1700–L1708, L1749–L1755, L1817–L1833, L1894–L1977, L2061–L2062, L2180–L2193.
// The /quote-sent route markup is NOT in the source pack: QuoteSent's elements are system-given (see its doc).

/** The five lucide icons the quote page and the sent state render (project/assets/Icons/<name>.svg). */
export type QuoteIconName = 'arrow-left' | 'message-circle' | 'mail' | 'calendar-check' | 'circle-check';

export interface QuoteIconProps {
  /** Which icon: arrow-left (back link), message-circle (WhatsApp submit), mail (email action), calendar-check (book submit), circle-check (sent tick). */
  name: QuoteIconName;
  /** Extra class names appended after the site's "lucide lucide-<name>" — "quote-sent-tick" on the tick, "spin" while a request runs. */
  className?: string;
}

/** Inline lucide <svg> exactly as the site prints it: 24×24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2, round caps/joins, aria-hidden="true". */
export declare function QuoteIcon(props: QuoteIconProps): React.ReactElement;

export interface QuoteLayoutProps extends Record<string, unknown> {
  /** The left column — normally a `QuoteIntro`. Given: `<main class="quote-main"><div class="site-shell quote-layout">{intro}<div>{children}</div></div></main>`. Omitted: `<main class="quote-main"><div class="site-shell">{children}</div></main>` (single column for `QuoteSent`; system-given). */
  intro?: React.ReactNode;
  /** The form column: on /quote the DescribeMove section then the `QuoteForm`; on /book the `QuoteForm` alone. */
  children?: React.ReactNode;
  /** Extra class names appended after "quote-main". */
  className?: string;
  /** Extra class names appended after "site-shell quote-layout" / "site-shell". */
  shellClassName?: string;
}

/** The quote / book page shell: 8rem top padding clears the fixed header; one column, then `minmax(0,.85fr) minmax(30rem,1.15fr)` with a 4rem gap from 900px. */
export declare function QuoteLayout(props: QuoteLayoutProps): React.ReactElement;

export interface QuoteIntroProps extends Record<string, unknown> {
  /** Back link href; the site always uses "/". Default "/". */
  backHref?: string;
  /** Back link label inside `<span>`; the site's only label is "Back to home" (default). Pass null to render no back link. */
  backLabel?: React.ReactNode | null;
  /** Click handler for the back link (e.g. client-side routing). */
  onBack?: (event: unknown) => void;
  /** `<p class="eyebrow">` — site: "Gauteng vehicle delivery" (quote and book). */
  eyebrow?: React.ReactNode;
  /** `<h1 class="quote-title">` — site: "Get a quote" / "Book a run". Uppercased by the CSS; clamp(2.7rem,10vw,4.5rem). */
  title?: React.ReactNode;
  /** id on the h1 (for aria-labelledby). Not set on the site. */
  titleId?: string;
  /** `<p class="lead">` — site: "Runner vehicles only, driven on their own wheels across Johannesburg and Greater Gauteng." */
  lead?: React.ReactNode;
  /** `<p class="privacy-note">` (3px orange left rule, muted .82rem/1.7). Verbatim site copy incl. the `<a href="/privacy">privacy notice</a>` link — see README. */
  privacyNote?: React.ReactNode;
  /** Anything after the note — the site places PricingTable's compact `.guide-rates` section here (quote page only). */
  children?: React.ReactNode;
  /** Extra class names appended after "quote-intro". */
  className?: string;
}

/** The intro column: `.back-link` (arrow-left + span), `.eyebrow`, `h1.quote-title`, `.lead`, `.privacy-note`, children. */
export declare function QuoteIntro(props: QuoteIntroProps): React.ReactElement;

/** One `<option>` of a QuoteField select: a bare string (value = label) or a row. */
export interface QuoteFieldOption {
  /** The option value — site slugs: "same-day", "auction", "after-hours", "fleet", "live-pin", "pod"; "" for "Choose…"; "hatch" … "other". */
  value: string;
  /** Visible text; defaults to `value`. Site: "Same-day", "Auction", "After-hours", "Fleet", "Live pin", "POD"; "Choose…", "hatch", "sedan", "suv", "bakkie", "van", "other". */
  label?: React.ReactNode;
  /** `disabled` on the option (the coverage page's "Choose…"). */
  disabled?: boolean;
}

export interface QuoteFieldProps extends Record<string, unknown> {
  /** The control's `id` and the label's `for`; also the default `name`. Site ids: service_type, preferred_window, pickup, dropoff, vehicle_make, vehicle_model, vehicle_year, vehicle_type, name, phone, notes, consent. */
  id: string;
  /** `name` attribute; defaults to `id`. */
  name?: string;
  /** The `<label>` text, verbatim site labels: "Service", "Preferred date and time (optional)", "Collection point", "Delivery point", "Vehicle make", "Vehicle model", "Year (optional)", "Vehicle type (optional)", "Your name", "Contact number", "Anything else? (optional)". For control "checkbox" it is the consent sentence inside the `<span>`. */
  label?: React.ReactNode;
  /** "input" (default) | "select" | "textarea" | "checkbox" (the `.consent-field` variant, always field-wide). */
  control?: 'input' | 'select' | 'textarea' | 'checkbox';
  /** Options for control "select". */
  options?: Array<QuoteFieldOption | string>;
  /** Adds `field-wide` (spans both columns from 640px) — the site's notes textarea. */
  wide?: boolean;
  /** true → aria-invalid="true"; false → aria-invalid="false" (the site's server markup on validated fields); undefined → attribute omitted ("Preferred date and time (optional)", "Vehicle type (optional)"). */
  invalid?: boolean;
  /** Error text → `<span role="alert">` after the control (orange .76rem/700). Site messages (quote-schema): "Where should the vehicle be collected?", "Where should the vehicle be delivered?", "Which make is the vehicle?", "Which model is the vehicle?", "Please enter your name.", "Please enter a contact number.", "Use digits, spaces, +, - or brackets only.", "Please keep notes under 500 characters.", "Please choose a service.", "Please tick the box so we may use your details to reply." Placement is inferred (client-rendered on the site). */
  error?: React.ReactNode;
  /** Extra class names appended after "field[ field-wide]" / "field field-wide consent-field". */
  className?: string;
  /** Attributes for the wrapping `<div class="field">`. */
  wrapperProps?: Record<string, unknown>;
  /** Extra nodes after the control / alert. */
  children?: React.ReactNode;
  /** Input type — omitted on the quote page (text); "date" with `min` on book/coverage. */
  type?: string;
  /** Site: "numeric" on "Year (optional)", "tel" on "Contact number". */
  inputMode?: string;
  /** Site: "name" on "Your name", "tel" on "Contact number". */
  autoComplete?: string;
  /** Verbatim site placeholder: "e.g. Thursday morning or asap" (preferred_window). */
  placeholder?: string;
  /** Textarea rows — site: 4. */
  rows?: number;
  /** Textarea maxLength — site: 500. */
  maxLength?: number;
  /** Controlled value (pair with `onChange`). */
  value?: string;
  /** Uncontrolled initial value; "" selects a select's "Choose…" row. */
  defaultValue?: string;
  /** Checkbox only: controlled checked state. */
  checked?: boolean;
  /** Checkbox only: uncontrolled initial state. */
  defaultChecked?: boolean;
  /** Change handler (passes through to the control). */
  onChange?: (event: unknown) => void;
  /** Passes through; the site's custom CSS has no disabled style (gap). */
  disabled?: boolean;
}

/** Grid field `<div class="field[ field-wide]"><label for>…</label><input|select|textarea id … aria-invalid name/>[<span role="alert">…</span>]</div>`, or the consent checkbox `<div class="field field-wide consent-field"><label for><input type="checkbox"/><span>…</span></label></div>`. Any other prop passes through to the control. */
export declare function QuoteField(props: QuoteFieldProps): React.ReactElement;

export interface QuoteCorridorChip {
  /** Chip text — site: "Johannesburg", "Pretoria", "Greater Gauteng", "Outside Gauteng — WhatsApp us". */
  label: React.ReactNode;
  /** Given → the chip is an `<a href … type="button">` (site: the wa.me link "https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request%0ACollection%3A%20Outside%20Gauteng"); omitted → `<button type="button">`. */
  href?: string;
  /** Site: "_blank" on the wa.me chip. */
  target?: string;
  /** Site: "noreferrer" on the wa.me chip. */
  rel?: string;
  /** Click handler — on the site the three city chips write into "Collection point" (client code, not in the pack). */
  onClick?: (event: unknown) => void;
  /** `<button>` only; Tailwind disabled:opacity-50 applies. */
  disabled?: boolean;
  /** Extra class names appended after the site's shadcn utility string. */
  className?: string;
  /** React key; defaults to the index. */
  key?: string | number;
}

export interface QuoteCorridorPickerProps extends Record<string, unknown> {
  /** `<legend>` — site: "Collection corridor" (default). */
  legend?: React.ReactNode;
  /** The chips in site order: three `<button>`s then the wa.me `<a>`. A bare string is a button chip. */
  chips?: Array<QuoteCorridorChip | string>;
  /** Extra class names appended after "corridor-picker field-wide". */
  className?: string;
  /** Extra nodes after the chips inside `.corridor-chips`. */
  children?: React.ReactNode;
}

/** `<fieldset class="corridor-picker field-wide"><legend/><div class="corridor-chips">…</div></fieldset>` — pill chips, titanium text, orange border + white text on hover; no selected state in source. */
export declare function QuoteCorridorPicker(props: QuoteCorridorPickerProps): React.ReactElement;

export interface QuoteActionsProps extends Record<string, unknown> {
  /** Adds `field-wide` — the book page's `<div class="quote-actions field-wide">`. */
  wide?: boolean;
  /** Extra class names appended after "quote-actions". */
  className?: string;
  /** The actions: `QuoteAction`s (or Button / WhatsAppButton nodes). */
  children?: React.ReactNode;
}

/** `<div class="quote-actions[ field-wide]">` — stacked below 640px, a row from 640px; pads right 4.25rem below 640px inside `.quote-sent`. */
export declare function QuoteActions(props: QuoteActionsProps): React.ReactElement;

export interface QuoteActionProps extends Record<string, unknown> {
  /** "primary" → `.button-primary` (Ignition Orange, black label); "secondary" → `.button-secondary` (1px Titanium border, transparent, per `.quote-actions .button-secondary`). Default "primary". */
  variant?: 'primary' | 'secondary';
  /** `<button>` only: "submit" for "Send on WhatsApp" / "Request this booking", "button" for "Send by email". Default "button". */
  type?: 'button' | 'submit' | 'reset';
  /** Renders `<a class="button-…" href>` instead of a `<button>` — the sent state's follow-up links (wa.me, mailto:drive@spoorlangs.online). */
  href?: string;
  /** Leading icon: a `QuoteIconName` ("message-circle", "mail", "calendar-check") or any node. */
  icon?: QuoteIconName | React.ReactNode;
  /** Extra class on a named icon — "spin" (1s linear rotation) while a request runs. */
  iconClassName?: string;
  /** Wrap the label in `<span>` (site pattern inside .quote-actions). Default true. */
  wrapLabel?: boolean;
  /** Extra class names appended after the variant class. */
  className?: string;
  /** The label, verbatim: "Send on WhatsApp", "Send by email", "Request this booking", "Save & open WhatsApp"; sent-state links "WhatsApp us", "drive@spoorlangs.online". */
  children?: React.ReactNode;
  /** Click handler (passes through). */
  onClick?: (event: unknown) => void;
  /** `<button>` only; no disabled style in the site's custom CSS (gap). */
  disabled?: boolean;
  /** Accessible name — the site sets "WhatsApp +27 66 271 5887" on every wa.me link. */
  'aria-label'?: string;
  /** External links: "_blank" with rel "noreferrer" on the site. */
  target?: string;
  /** Pairs with target: "noreferrer". */
  rel?: string;
}

/** A form action exactly as the site prints it: `<button type class="button-primary|button-secondary"><svg …/><span>label</span></button>`, or `<a class="…" href>` when `href` is given. */
export declare function QuoteAction(props: QuoteActionProps): React.ReactElement;

export interface QuoteFormProps extends Record<string, unknown> {
  /** The corridor picker rendered first (quote and coverage pages; the book page has none). */
  corridor?: QuoteCorridorPickerProps;
  /** The fields in site order, as `QuoteField` prop objects (a `key` defaults to the id). */
  fields?: QuoteFieldProps[];
  /** Any nodes after the fields — Field / ConsentField / CorridorChips / DescribeMove family nodes compose here. */
  children?: React.ReactNode;
  /** The consent checkbox (`QuoteField` with control "checkbox"; id defaults to "consent"), rendered after the fields and children. */
  consent?: QuoteFieldProps;
  /** Form-level message → `<p class="form-error">` before the actions (orange left rule). Copy and placement not in the source pack. */
  error?: React.ReactNode;
  /** Confirmation panel → `<div class="quote-confirmation">` before the actions (orange-10 % fill, grid-column 1/-1). Copy not in the source pack. */
  confirmation?: React.ReactNode;
  /** The action row: `QuoteAction` nodes — site: "Send on WhatsApp" (submit, message-circle) + "Send by email" (secondary, mail); book: "Request this booking" (submit, calendar-check). */
  actions?: React.ReactNode;
  /** Adds `field-wide` to `.quote-actions` (book page). */
  actionsWide?: boolean;
  /** Submit handler; the site builds a wa.me deep link or a mailto: and routes to /quote-sent. */
  onSubmit?: (event: unknown) => void;
  /** Rendered as the site does (`noValidate=""`); pass false to let the browser validate. Default true. */
  noValidate?: boolean;
  /** Extra class names appended after "quote-form". */
  className?: string;
}

/** `<form class="quote-form" noValidate>` — card (1px --border, --card, radius .5rem); one column at 1.1rem gaps, two columns `repeat(2,minmax(0,1fr))` with 1.1rem 1.25rem gaps and 2rem padding from 640px. */
export declare function QuoteForm(props: QuoteFormProps): React.ReactElement;

export interface QuoteSentRow {
  /** `<dt>` — uppercase titanium .72rem/900. The site's WhatsApp message labels: "Service", "Pickup", "Drop-off", "Vehicle", "Window", "Name", "Phone". */
  term: React.ReactNode;
  /** `<dd>` — .95rem/700. */
  value: React.ReactNode;
  /** React key; defaults to the index. */
  key?: string | number;
}

export interface QuoteSentProps extends Record<string, unknown> {
  /** `<h1 class="quote-title">` text after the tick. The route's own heading is not in the pack; its meta title is "Quote Sent | Spoorlangs Vehicle Delivery". */
  title?: React.ReactNode;
  /** id on the h1. */
  titleId?: string;
  /** Render the orange circle-check `.quote-sent-tick` (.9em) before the title. Default true. */
  tick?: boolean;
  /** The quote reference (≤20 chars, the route's `ref` param) inside `<strong>` (orange monospace 1.05rem). Omitted → no badge. Never invent one. */
  reference?: React.ReactNode;
  /** Text before the `<strong>` in the badge. Default "Reference" (the site's message line "Reference: <ref>"; the badge's own label is not in the pack). Pass null for none. */
  referenceLabel?: React.ReactNode | null;
  /** `.sent-summary` rows `<div><dt/><dd/></div>`, hairline-separated. */
  summary?: QuoteSentRow[];
  /** `.sent-next` heading `<h2>` (uppercase titanium .8rem/900). Copy not in the pack. */
  nextTitle?: React.ReactNode;
  /** id for the h2 / aria-labelledby on the section. */
  nextTitleId?: string;
  /** `.sent-next` numbered steps `<ol><li>…`. Copy not in the pack. */
  next?: React.ReactNode[];
  /** Follow-up links in `.quote-actions` — `QuoteAction`s with `href` (the route offers WhatsApp or email follow-up). */
  actions?: React.ReactNode;
  /** Extra nodes between the badge and the summary. */
  children?: React.ReactNode;
  /** Extra class names appended after "quote-sent". */
  className?: string;
}

/** The /quote-sent state (`max-width:44rem`): h1 + tick, reference badge, summary list, next steps, action links. Element choices are system-given — only the CSS is in the source pack. */
export declare function QuoteSent(props: QuoteSentProps): React.ReactElement;

// ---- DescribeMove ----
// DescribeMove — Spoorlangs (group: Forms). Declarations as documentation; mirrors DescribeMove.js.

export interface DescribeMoveProps extends Record<string, unknown> {
  /** Extra class names appended after the site's "describe-move". */
  className?: string;
  /** The `<p class="eyebrow">` text. Default "Quicker option" (site); pass null to leave the eyebrow out. */
  eyebrow?: React.ReactNode | null;
  /** The `<h2>` text — uppercased by Base's h1,h2,h3 rule. Default "Describe your move" (site). */
  title?: React.ReactNode;
  /** id of the `<h2>`, also the section's aria-labelledby. Default "describe-move-title" (site); give each instance on a page its own. */
  titleId?: string;
  /** The muted paragraph under the heading. Default the site's "Type it in your own words and we will fill in the form below for you. Check every field before you send it — nothing is sent until you press a send button."; pass null to leave it out. */
  children?: React.ReactNode | null;
  /** The textarea's `sr-only` label (always rendered — never drop it). Default "Describe your vehicle move" (site). */
  label?: React.ReactNode;
  /** id of the textarea and the label's htmlFor. Default "move-description" (site); give each instance on a page its own. */
  textareaId?: string;
  /** textarea rows. Default 4 (site). */
  rows?: number;
  /** textarea maxLength. Default 1500 (site; no counter in source). */
  maxLength?: number;
  /** textarea placeholder. Default the site's "I bought a 2019 Toyota Corolla at the auction in Boksburg and need it driven to my house in Sandton on Thursday morning." */
  placeholder?: string;
  /** Controlled textarea value; rendered readOnly when no onChange is given. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** textarea change handler. */
  onChange?: (event: unknown) => void;
  /** Any further attributes spread onto the `<textarea>` (name, onBlur, aria-describedby …). */
  textareaProps?: Record<string, unknown>;
  /** The `<span>` label inside the `.button-secondary` button. Default "Fill in the form for me" (site). */
  buttonLabel?: React.ReactNode;
  /** Leading icon node inside the button. Default the site's inline wand-sparkles `<svg>` (24×24, stroke currentColor, aria-hidden); pass null for none. */
  icon?: React.ReactNode | null;
  /** Extra class names appended to the default wand icon's "lucide lucide-wand-sparkles" — e.g. "spin" (the site's 1s rotation; where the site applies it is not in the source pack). Ignored when `icon` is given. */
  iconClassName?: string;
  /** Click handler of the "Fill in the form for me" button (`type="button"` — it never submits). */
  onFill?: (event: unknown) => void;
  /** Disables the button: the site's `.describe-move button:disabled` (opacity .6, cursor:progress) — the only disabled rule on a custom button. */
  disabled?: boolean;
  /** Result line rendered after the button as `<p class="describe-move-summary">` (orange .85rem/700/1.6). Copy not in the source pack. */
  summary?: React.ReactNode;
  /** Failure line rendered last as `<p class="describe-move-error">` (orange .82rem/700). Copy not in the source pack. */
  error?: React.ReactNode;
}

/** The quote page's "Quicker option" card: `<section class="describe-move" aria-labelledby>` with eyebrow, h2, muted copy, an `sr-only`-labelled textarea, the outlined wand-sparkles button and optional summary / error lines. Any other prop passes through to the `<section>`. */
export declare function DescribeMove(props: DescribeMoveProps): React.ReactElement;

// ---- LegalPage ----
/** One body block of the reading column: a string or node renders as one <p>; `{ p }` as one <p>; `{ ul }` as one <ul> of <li>. */
export type LegalBlock = React.ReactNode | { p: React.ReactNode } | { ul: React.ReactNode[] };

/** One <h2> section of the privacy page: heading, optional contact line, then <p>/<ul> blocks. Renders a Fragment — the site wraps nothing around a section. */
export interface LegalSectionProps {
  /** The h2 text, typed in sentence case — `.legal-page h2` uppercases it. Site: "Who is responsible for your information", "What we collect", "Why we collect it" … */
  heading?: React.ReactNode;
  /** id attribute for the <h2> (LegalPage also uses it as the section's React key). The site sets none. */
  id?: string;
  /** `true` renders the site's own LegalContactLine straight after the h2 (the first section on /privacy); or pass a node, e.g. a configured LegalContactLine. */
  contact?: boolean | React.ReactNode;
  /** The body, in order: a string/node → <p>; `{ p }` → <p>; `{ ul: [...] }` → <ul><li>…</li></ul>. */
  blocks?: LegalBlock[];
  /** Free content rendered after the blocks. */
  children?: React.ReactNode;
}

/** The /privacy page shell: <main class="quote-main"><div class="site-shell legal-page">back link · eyebrow · h1.quote-title · intro · sections</div></main>. */
export interface LegalPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children' | 'title'> {
  /** href of the <a class="back-link"> that opens the shell. Default "/" (the site's only target); null or false renders no back link. */
  backHref?: string | null | false;
  /** Back-link label, wrapped in <span>; default "Back to home" — the site's only label. */
  backLabel?: React.ReactNode;
  /** <p class="eyebrow"> above the title; site: "POPIA". Omit to render none. Inside .legal-page it paints --titanium (source quirk). */
  eyebrow?: React.ReactNode;
  /** <h1 class="quote-title">; site: "Privacy policy". */
  title?: React.ReactNode;
  /** Opening paragraph(s) under the title, one <p> each. Site: "This policy explains how Spoorlangs (Pty) Ltd handles personal information … Last updated: 15 September 2026." */
  intro?: React.ReactNode | React.ReactNode[];
  /** The h2 sections in reading order — LegalSection props each. */
  sections?: LegalSectionProps[];
  /** Free content rendered after the sections, inside .legal-page. */
  children?: React.ReactNode;
  /** false returns the .site-shell.legal-page <div> alone, without <main class="quote-main">. Default true. */
  main?: boolean;
  /** Extra class names appended after "quote-main" on the <main>. */
  mainClassName?: string;
  /** Extra class names appended after the site's "site-shell legal-page". Other attributes go to that <div>. */
  className?: string;
}

/** <p class="legal-contact-line">: the responsible-party line — business · city · WhatsApp link · email link. Bold, 3px orange left rule. Brand Book p25: "COPY EXACTLY". */
export interface LegalContactLineProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className' | 'children'> {
  /** Legal name; default "Spoorlangs (Pty) Ltd". */
  business?: React.ReactNode;
  /** City only — never a street address (Brand Book p25); default "Kempton Park". */
  city?: React.ReactNode;
  /** WhatsApp link href; default "https://wa.me/27662715887" (target="_blank" rel="noreferrer", as the site prints it). */
  whatsappHref?: string;
  /** WhatsApp link text; default "WhatsApp +27 66 271 5887". */
  whatsappLabel?: React.ReactNode;
  /** Email address; default "drive@spoorlangs.online" — rendered as a mailto: link whose text is the address. */
  email?: string;
  /** Replaces the whole generated content when given. */
  children?: React.ReactNode;
  /** Extra class names appended after "legal-contact-line". */
  className?: string;
}

/** <p class="privacy-note">: the muted form note under the quote form (/quote) and the booking form (/book) — 3px orange left rule, orange underlined link. */
export interface PrivacyNoteProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className' | 'children'> {
  /** The note's copy, including its <a href="/privacy">privacy notice</a> link. */
  children?: React.ReactNode;
  /** Extra class names appended after "privacy-note". */
  className?: string;
}

export declare function LegalPage(props: LegalPageProps): React.ReactElement;
export declare function LegalSection(props: LegalSectionProps): React.ReactElement;
export declare function LegalContactLine(props: LegalContactLineProps): React.ReactElement;
export declare function PrivacyNote(props: PrivacyNoteProps): React.ReactElement;

// ---- BookingPage ----
/** BookingPage — the sub-page shell (`main.quote-main > div.site-shell.booking-page`, opening /coverage, /pricing, /faq and /contact) and the hairline-topped `section.booking-section` that pairs intro copy with the booking form (/coverage). */

export interface BookingPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
  /** The page's stacked blocks in site order: the BackLink, the SectionHeading (eyebrow + `h1.quote-title` + `p.lead`), the page content, then a BookingSection. The shell's grid spaces them 1.5rem apart. */
  children?: React.ReactNode;
  /** Extra class names appended after the site's "site-shell booking-page". */
  className?: string;
  /** true (default) wraps the shell in the site's `<main class="quote-main">` (padding-block 8rem 4rem, styled by QuoteForm); false renders the `<div>` alone, for a consumer that already has a `<main>`. */
  main?: boolean;
}

export interface BookingSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'className' | 'children' | 'title'> {
  /** Label above the title, rendered as `<p class="eyebrow">`. Site: "Booking request". Omit to render none. */
  eyebrow?: React.ReactNode;
  /** The section title, always an `<h2>` — the only level the site styles here (`.booking-section h2 { margin-bottom:1rem }`). Sentence case; the CSS uppercases it. Site: "Tell us what needs moving." */
  title: React.ReactNode;
  /** `id` of the `<h2>`, which the section's `aria-labelledby` points at. Default "booking-title" (the site's). */
  titleId?: string;
  /** Muted lead under the title, rendered as `<p class="lead">`. Site: "Submitting this form creates a pending request. The run is booked only after Spoorlangs confirms it with you." Omit to render none. */
  lead?: React.ReactNode;
  /** The second column: the booking form — on the site QuoteForm's `<form class="quote-form">` with Field, CorridorChips and one `.button-primary` submit ("Save & open WhatsApp"). */
  children?: React.ReactNode;
  /** Extra class names appended after the site's "booking-section". */
  className?: string;
}

/** `<main class="quote-main"><div class="site-shell booking-page">…</div></main>` — the stacked sub-page shell. */
export declare function BookingPage(props: BookingPageProps): React.ReactElement;
/** `<section class="booking-section" aria-labelledby=…>` — intro column (eyebrow, h2, lead) beside the form column from 900px; stacked below. */
export declare function BookingSection(props: BookingSectionProps): React.ReactElement;

// ---- ContactCards ----
/** The inline lucide icon the contact cards render above their label (message-circle for WhatsApp, mail for Email), exactly as page-contact.html prints it. */
export interface ContactCardIconProps {
  /** Which of the two card icons to draw: "message-circle" (WhatsApp) or "mail" (Email). Any other name renders nothing. */
  name: 'message-circle' | 'mail';
  /** Extra class names appended after the site's "lucide lucide-<name> mb-3 text-primary". */
  className?: string;
}

export declare function ContactCardIcon(props: ContactCardIconProps): React.ReactElement | null;

/** One contact tile: a bordered, .5rem-radius <a> with an orange lucide icon, a muted label and a 1.25rem semibold value. */
export interface ContactCardProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'> {
  /** Destination. The site has two: "https://wa.me/27662715887" (WhatsApp) and "mailto:drive@spoorlangs.online" (Email). */
  href: string;
  /** Small muted line above the value: the site's "WhatsApp" or "Email". */
  label?: React.ReactNode;
  /** The detail itself: "+27 66 271 5887" or "drive@spoorlangs.online". */
  value?: React.ReactNode;
  /** Icon above the label: an icon name ("message-circle" | "mail") rendered as ContactCardIcon, or any node. Omit for no icon. */
  icon?: 'message-circle' | 'mail' | React.ReactNode;
  /** Adds target="_blank" rel="noopener noreferrer" as the site's WhatsApp card has. Default: true when href starts with http(s)://. */
  external?: boolean;
  /** Adds Tailwind "break-all" to the value so a long address wraps, as the site's Email card has. Default: true when href starts with mailto:. */
  breakAll?: boolean;
  /** Extra class names appended after the site's utility list. */
  className?: string;
  /** Anything rendered after the value paragraph (the site renders nothing there). */
  children?: React.ReactNode;
}

export declare function ContactCard(props: ContactCardProps): React.ReactElement;

/** The "Ways to reach us" section: a two-column (from 640px) grid of ContactCards under a visually hidden h2. */
export interface ContactWaysProps extends Omit<React.HTMLAttributes<HTMLElement>, 'id' | 'className' | 'children'> {
  /** id of the hidden h2, also the section's aria-labelledby target. Site: "contact-ways" (default). */
  id?: string;
  /** The hidden (sr-only) heading text. Site: "Ways to reach us" (default). */
  heading?: React.ReactNode;
  /** The cards, each a ContactCardProps object, rendered in order. The site lists WhatsApp first, then Email. */
  cards?: ContactCardProps[];
  /** Extra class names appended after the site's "mt-10 grid gap-4 sm:grid-cols-2". */
  className?: string;
  /** Alternative or additional children rendered after the cards (e.g. hand-built ContactCards). */
  children?: React.ReactNode;
}

export declare function ContactWays(props: ContactWaysProps): React.ReactElement;

/** The "Areas we serve" section: Oswald h2, muted intro, a two-column (from 640px) list of bordered area chips and a muted closing line. */
export interface AreasWeServeProps extends Omit<React.HTMLAttributes<HTMLElement>, 'id' | 'className' | 'children'> {
  /** id of the h2, also the section's aria-labelledby target. Site: "areas" (default). */
  id?: string;
  /** The heading. Site: "Areas we serve" (default). */
  heading?: React.ReactNode;
  /** The muted paragraph under the heading. Default: the site's "We come to you — no walk-in office. Pickup and drop-off across:". Pass null to omit. */
  intro?: React.ReactNode | null;
  /** The area names, one chip each, in order. Default: the site's eight — Johannesburg, Sandton, Midrand, Centurion, Pretoria, Ekurhuleni, Roodepoort & West Rand, Vereeniging & Vanderbijlpark. */
  areas?: React.ReactNode[];
  /** The small muted closing line. Default: the site's "Runners only — the vehicle must start and drive. Outside these areas, WhatsApp Nico for a quote.". Pass null to omit. */
  note?: React.ReactNode | null;
  /** Extra class names appended after the site's "mt-12". */
  className?: string;
  /** Anything rendered after the closing line (the site renders nothing there). */
  children?: React.ReactNode;
}

export declare function AreasWeServe(props: AreasWeServeProps): React.ReactElement;

/** The CTA row that closes the contact page: a wrapping flex row with a .75rem gap, 3rem above. */
export interface ContactActionsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
  /** Extra class names appended after the site's "mt-12 flex flex-wrap gap-3". */
  className?: string;
  /** The buttons: the site puts a primary "Get a quote" (/quote?service=&pickup=) and a secondary "See guide rates" (/pricing) here — the Button family. */
  children?: React.ReactNode;
}

export declare function ContactActions(props: ContactActionsProps): React.ReactElement;

// ---- IgnitionRule ----
/** Props of IgnitionRule: the Brand Book p22 "Ignition rule 96 × 5 px under headings" (an intentional addition from the book, not the site), or the site's eyebrow dash for comparison. */
export interface IgnitionRuleProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 'ignition' (default): the Brand Book rule — --ignition-rule-width × --ignition-rule-height (96 × 5 px) in --ignition-orange. 'eyebrow': the site's .eyebrow::before dash — --eyebrow-rule-width × --eyebrow-rule-height (2.5rem × 1px) in --orange — for comparison only. */
  variant?: 'ignition' | 'eyebrow';
  /** Extra class names appended after 'ignition-rule' (and 'ignition-rule-eyebrow'). */
  className?: string;
  /** Set to 'true' unless you pass your own value — the rule is decorative. */
  'aria-hidden'?: React.HTMLAttributes<HTMLSpanElement>['aria-hidden'];
}

/** Renders <span class="ignition-rule" aria-hidden="true"></span>: a block of --ignition-rule-width × --ignition-rule-height in Ignition Orange; its margin-top is var(--ignition-rule-gap, 0) — the heading-to-rule gap is not in source, so the consumer sets --ignition-rule-gap (system-given) or leaves it at 0. */
export declare function IgnitionRule(props: IgnitionRuleProps): React.ReactElement;

/** Props of IgnitionHeading: a Bebas Neue caps heading with the ignition rule beneath it — the Brand Book's page-title device (seen on every page image). */
export interface IgnitionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which heading element to render: 'h1' | 'h2' | 'h3' (default 'h2'). */
  level?: 'h1' | 'h2' | 'h3';
  /** Brand Book p17 step, via the tokens.css type-style class: 'display' (.brand-display, 96 px web maximum), 'h1' (.brand-h1, 48 px web — default), 'h2' (.brand-h2, 32 px web). */
  size?: 'display' | 'h1' | 'h2';
  /** Which rule to draw beneath: 'ignition' (default, Brand Book 96 × 5 px) or 'eyebrow' (the site's 2.5rem × 1px dash, for comparison). */
  rule?: 'ignition' | 'eyebrow';
  /** Lands on the heading element (pair with a section's aria-labelledby); every other attribute lands on the wrapper <div>. */
  id?: string;
  /** Class names for the wrapper <div>; the heading always carries 'ignition-heading' plus its size class. */
  className?: string;
  /** The heading text — Spoorlangs copy as the book prints it (CSS uppercases it either way), e.g. "SAME-DAY. ON WHEELS.", "GUIDE RATES · EXCL. VAT". */
  children?: React.ReactNode;
}

/** Renders <div><h2 class="ignition-heading brand-h1">…</h2><span class="ignition-rule" aria-hidden="true"></span></div>. */
export declare function IgnitionHeading(props: IgnitionHeadingProps): React.ReactElement;

declare global { interface Window { Spoorlangs: { Button: typeof Button; WhatsAppButton: typeof WhatsAppButton; ButtonIcon: typeof ButtonIcon; FloatingActions: typeof FloatingActions; FloatingQuote: typeof FloatingQuote; WhatsAppWidget: typeof WhatsAppWidget; Eyebrow: typeof Eyebrow; SectionHeading: typeof SectionHeading; SplitHeading: typeof SplitHeading; Heading: typeof Heading; Lead: typeof Lead; BackLink: typeof BackLink; SiteHeader: typeof SiteHeader; NavLinks: typeof NavLinks; NavLink: typeof NavLink; SiteFooter: typeof SiteFooter; Hero: typeof Hero; HeroAction: typeof HeroAction; ServiceGrid: typeof ServiceGrid; ServiceCard: typeof ServiceCard; ServicesSection: typeof ServicesSection; ServiceDetail: typeof ServiceDetail; ServicesIntro: typeof ServicesIntro; ServicesDetailSection: typeof ServicesDetailSection; ServiceDetailArticle: typeof ServiceDetailArticle; ServicesMidCta: typeof ServicesMidCta; ServicesNotes: typeof ServicesNotes; ServicesCta: typeof ServicesCta; ServiceDetailIcon: typeof ServiceDetailIcon; ProcessSection: typeof ProcessSection; ProcessVisual: typeof ProcessVisual; ProcessSteps: typeof ProcessSteps; ProcessStep: typeof ProcessStep; BenefitIcon: typeof BenefitIcon; BenefitItem: typeof BenefitItem; BenefitList: typeof BenefitList; WhyVisual: typeof WhyVisual; WhySection: typeof WhySection; TrustRitual: typeof TrustRitual; TrustRitualList: typeof TrustRitualList; TrustRitualItem: typeof TrustRitualItem; AboutLayout: typeof AboutLayout; WhatsappBand: typeof WhatsappBand; WhatsappBandAction: typeof WhatsappBandAction; FaqSection: typeof FaqSection; FaqGroup: typeof FaqGroup; FaqList: typeof FaqList; FaqItem: typeof FaqItem; FaqCta: typeof FaqCta; ContactBand: typeof ContactBand; ContactBandAction: typeof ContactBandAction; CoverageSection: typeof CoverageSection; CoverageMap: typeof CoverageMap; CoverageHonesty: typeof CoverageHonesty; CoverageNote: typeof CoverageNote; CoverageBookingLink: typeof CoverageBookingLink; PricingTable: typeof PricingTable; PricingNotes: typeof PricingNotes; GuideRates: typeof GuideRates; VehicleCard: typeof VehicleCard; VehicleGrid: typeof VehicleGrid; VehicleSection: typeof VehicleSection; Field: typeof Field; ConsentField: typeof ConsentField; FormError: typeof FormError; QuoteConfirmation: typeof QuoteConfirmation; CorridorChips: typeof CorridorChips; CorridorChip: typeof CorridorChip; QuoteIcon: typeof QuoteIcon; QuoteLayout: typeof QuoteLayout; QuoteIntro: typeof QuoteIntro; QuoteField: typeof QuoteField; QuoteCorridorPicker: typeof QuoteCorridorPicker; QuoteActions: typeof QuoteActions; QuoteAction: typeof QuoteAction; QuoteForm: typeof QuoteForm; QuoteSent: typeof QuoteSent; DescribeMove: typeof DescribeMove; LegalPage: typeof LegalPage; LegalSection: typeof LegalSection; LegalContactLine: typeof LegalContactLine; PrivacyNote: typeof PrivacyNote; BookingPage: typeof BookingPage; BookingSection: typeof BookingSection; ContactCardIcon: typeof ContactCardIcon; ContactCard: typeof ContactCard; ContactWays: typeof ContactWays; AreasWeServe: typeof AreasWeServe; ContactActions: typeof ContactActions; IgnitionRule: typeof IgnitionRule; IgnitionHeading: typeof IgnitionHeading } } }
export {};
