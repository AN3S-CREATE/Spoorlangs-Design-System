# Website implementation

How https://spoorlangs.online (fetched 2026-10-08) implements the brand. Values are the site's own, from its `:root` and hand-written component CSS; brand-book equivalents and conflicts are in README §9.

## Tokens: site variable → brand token

| Site `--var` | Brand token |
|---|---|
| `--background`, `--primary-foreground`, `--color-black` | `asphalt-black` |
| `--foreground`, `--card-foreground`, `--accent-foreground` | `white` |
| `--primary`, `--ring`, `--orange` | `ignition-orange` |
| `--accent`, `--copper` | `burnt-copper` |
| `--secondary`, `--titanium` | `titanium-silver` |
| `--steel` | `steel-grey` |
| `--card` oklch(10.5% 0.004 260), `--muted-foreground` oklch(72% 0.012 263), `--border` oklch(30% 0.012 263) | site-only `card`, `muted-foreground`, `border` |
| `--muted`, `--secondary-foreground` | declared, unpainted |

The hand-written CSS uses the brand names (`--orange`, `--copper`, `--titanium`, `--steel`) everywhere except `.button-primary` (`--primary` / `--primary-foreground`). Every translucent is a `color-mix(in oklab, X p%, transparent)` with a solid fallback — the `header-bg` … `placeholder-foreground` tokens.

## Fonts actually loaded

Every page `<head>` requests `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@500;600;700&display=swap`. Stacks: `--font-sans: "Montserrat", Arial, sans-serif`; `--font-display: "Oswald", Impact, sans-serif`; `--font-mono` declared, unused (the quote reference uses generic `monospace`). The brand primaries Bebas Neue and Inter are not on the site. Oswald is served 500–700, so elements inheriting 400 render at 500 and the one 900 request (`h2-sent-next`) renders at 700. All six Montserrat weights are used.

## Layout

- Shell: `.site-shell { width: min(100% - 2rem, 1180px); margin-inline: auto }` → `min(100% - 3rem, 1180px)` at `(width>=640px)`. Page root `div.min-h-screen.overflow-x-hidden.bg-background.text-foreground`.
- Section rhythm: `.section { padding-block: 5rem }` → `clamp(4.5rem, 8vh, 7rem)` at ≥900px; Bands: `.whatsapp-band` 4rem, `.services-cta` 5rem, `.services-notes` 4.5rem, `.site-footer` 3rem. Separators are 1px borders, not space.
- Header: `.site-header` fixed, z-index 50, background `--background` 68%, border-bottom titanium 16%, `backdrop-filter: blur(22px) saturate(1.25)`; `.nav-row` min-height 4rem; `.nav-logo` `clamp(8.25rem, 20vw, 10.5rem)` × 2.65rem; `.nav-links` hidden below 900px — no mobile menu. Pages clear the header with top padding: `.hero-content` 8rem, `.quote-main` 8rem, `.services-page` 4.5rem.
- Breakpoints: `(width<=639px)`, `(width>=640px)`, `(width>=700px)`, `(width>=900px)`; Tailwind `sm:` reaches the markup only on /contact.
- Grids: `service-grid` 1 → 2 (≥640) → 3 (≥900) columns, gap 0, `--border` lines; `process-steps` 3 columns at ≥900; `split-heading` 1.2fr/.8fr; `pod-layout` 1.15fr/.85fr; `footer-grid` `minmax(0,1.5fr) minmax(14rem,.8fr) auto`; `quote-layout` .85fr/1.15fr; `quote-form` 2 columns at ≥640 (`.field-wide`, `.quote-actions` span both); `booking-section` .65fr/1.35fr; `pricing-vehicle-grid` 2 columns at ≥700; `service-detail` .9fr/1.1fr, even rows reversed.

## States

- Hover: `.button-primary` → `--copper` surface, `--foreground` label (3.81:1, flagged), `translateY(-2px)`; `.button-secondary` lift only; `.service-card` → orange border, orange 4% tint, `translateX(.35rem)`; `.nav-links a`, `.back-link`, `.footer-contact a` → orange; `.service-card-link`, `.service-detail-link` → white; corridor chips → orange border, white text; `.services-cta .button-primary` inverts to white surface, black label.
- Focus: `:focus-visible { outline: 2px solid var(--orange); outline-offset: 4px }`; fields and the describe-move textarea instead set `border-color: var(--orange)`, `outline: none`, `box-shadow: 0 0 0 3px` orange 18% (`focus-ring-field`). `::selection` is black on orange.
- Disabled: only Tailwind `disabled:opacity-50` on the chips and coverage submit, and `.describe-move button:disabled { opacity: .6; cursor: progress }`; plain buttons have no disabled style.
- Open: `.faq-list details[open] summary span { transform: rotate(45deg) }` — the orange "+" becomes "×".
- Invalid: every input renders `aria-invalid="false"`; the true state is `.field span[role=alert]` (.76rem/700 orange) and `.form-error` (3px orange left border, .82rem/700). Schema messages: "Please enter your name.", "Please enter a contact number.", "Please choose a service.", "Please keep notes under 500 characters.", "Please tick the box so we may use your details to reply."
- Active route: `class="active"`, `aria-current="page"` are set on the current nav link; no rule styles them.

## Motion

Every hand-written transition is `.2s` with no timing function: `.button-primary, .button-secondary` (transform, background-color, border-color, color, box-shadow), `.service-card`, `.faq-list summary span`, `.field` controls, `.whatsapp-widget`. Tailwind `.transition-colors` on the corridor chips runs `.15s cubic-bezier(.4, 0, .2, 1)`. Hovers lift `translateY(-2px)` or nudge `translateX(.35rem)`. The only animation is `.spin { animation: 1s linear infinite spin }` for the quote form's busy state. Reduced motion: `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto } *, :before, :after { transition-duration: .01ms !important } }` — transitions collapse, animations are untouched. Against the book's "UI transitions 200–400 ms" with ease-out, the site sits at the floor with no easing (README §9 row 4).

## Imagery treatment

`.hero-image`: `object-fit: cover; object-position: 50% center` (54% ≥640, 68% ≤639); `filter: saturate(.96) contrast(1.08) brightness(.78)`; `.hero { min-height: 100svh }`. `.hero-shade`: `linear-gradient(90deg, background 96% → 73% at 48% → 20%)` over `linear-gradient(0deg, background 86% → transparent at 52% → 52%)`; one vertical gradient (96% → 48% at 68% → 74%) at ≤639px. `.contact-overlay`: `linear-gradient(90deg, background 94% at 5% → 72% at 70% → 35%)`. Framed figures: `border: 1px solid var(--border); border-radius: .375rem; overflow: hidden`; service-detail images `aspect-ratio: 16/10` → `4/3` at ≥900 with the orange Oswald 3rem numeral bottom-right. Map tiles: `filter: invert() hue-rotate(180deg) brightness(.85) contrast(.9) saturate(.25)`. No `<video>`: the hero is the poster PNG.

## Which component renders where

| Route | Components |
|---|---|
| every page | SiteHeader, SiteFooter, FloatingActions, Button, Eyebrow, SectionHeading, Base |
| / | Hero, ServiceGrid, ProcessSteps, CoverageSection, BenefitList, TrustRitual, AboutLayout, WhatsappBand, FaqList (11), ContactBand |
| /services | ServiceDetail (intro, six rows, mid-page CTA, notes, orange CTA band) |
| /coverage | BackLink, BookingPage, CoverageSection (honesty list + map), QuoteForm, CorridorChips, Field |
| /pricing | BackLink, BookingPage, PricingTable, VehicleCard, FaqList `.faq-cta` |
| /faq | BackLink, BookingPage, FaqList (15, three groups) |
| /book | BackLink, QuoteForm, Field |
| /contact | BackLink, BookingPage, ContactCards |
| /quote | BackLink, QuoteForm, PricingTable (`.guide-rates`), DescribeMove, CorridorChips, Field |
| /privacy | BackLink, LegalPage |
| /quote-sent, /booking-sent | QuoteForm sent panels — body copy not in source |

## Floating actions

`.floating-actions { position: fixed; right: 1rem; bottom: max(1rem, env(safe-area-inset-bottom)); z-index: 60 }`. `.whatsapp-widget` on every page: orange pill, black uppercase label .8rem/800/.05em, 1px border orange 78% over background, `message-circle` 1.15rem, href `https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request`, `aria-label="WhatsApp +27 66 271 5887"`. `.floating-quote` ("Get a quote") shows only at ≤639px: 1px titanium border, background 88% with `backdrop-filter: blur(14px)`, uppercase .74rem/800.

## Forms

Labels: `.field label` (.74rem/900/.12em uppercase titanium), typed sentence case; optional fields say "(optional)"; no `required` attributes. Controls: 1rem, white on black, 1px `--border`, radius .375rem, min-height 3rem (textarea 6rem). Field names: `service_type`, `preferred_window`, `requested_date`, `pickup`, `dropoff`, `vehicle_make`, `vehicle_model`, `vehicle_year`, `vehicle_type`, `name` / `customer_name`, `phone`, `email`, `notes`, `consent`.

- /quote: legend "Collection corridor" chips "Johannesburg" · "Pretoria" · "Greater Gauteng" · "Outside Gauteng — WhatsApp us"; "Service" select Same-day · Auction · After-hours · Fleet · Live pin · POD; "Preferred date and time (optional)" ("e.g. Thursday morning or asap"); "Collection point"; "Delivery point"; "Vehicle make"; "Vehicle model"; "Year (optional)"; "Vehicle type (optional)" Choose… · hatch · sedan · suv · bakkie · van · other; "Your name"; "Contact number"; "Anything else? (optional)"; consent "I agree that Spoorlangs may use these details to contact me about this quote, as set out in the privacy notice."; "Send on WhatsApp" (primary) · "Send by email" (secondary). Above it, DescribeMove: "Describe your move", button "Fill in the form for me".
- /book: "Date"; "Time" Choose a time · "07:00 – 09:00" · "09:00 – 11:00" · "11:00 – 13:00" · "13:00 – 15:00" · "15:00 – 17:00" · "After-hours (after 17:00)"; "Service"; "Vehicle type" Sedan · Hatchback · Suv · Bakkie · Van · Other; collection, delivery, make, model, "Year (optional)"; "Your name"; "Phone"; "Email"; consent "I agree that Spoorlangs may use these details to arrange this run."; submit "Request this booking".
- /coverage: the corridor chips; "Service"; "Preferred date"; collection and delivery points; "Preferred time window" ("e.g. 09:00–12:00"); "Vehicle type" Choose… (disabled) · sedan · hatchback · suv · bakkie · van · other; make, model, "Vehicle year (optional)"; "Your name"; "Phone number"; "Email address"; consent "I agree that Spoorlangs may store and use these details to review and respond to this booking request, as set out in the privacy policy."; submit "Save & open WhatsApp".

Privacy notes: (quote) "This builds a WhatsApp message to Spoorlangs. Nothing is stored on this page. The email option opens your email app with the same details ready to send. Read the privacy notice." · (book) "Your request goes straight to Spoorlangs on WhatsApp, and your email app opens with a copy addressed to drive@spoorlangs.online. A booking is only confirmed once Spoorlangs contacts you. Read the privacy notice." · (coverage) "Submitting this form creates a pending request. The run is booked only after Spoorlangs confirms it with you."

## Contact facts the site publishes

WhatsApp "+27 66 271 5887" (`https://wa.me/27662715887`); email "drive@spoorlangs.online"; "Kempton Park"; "Johannesburg / Greater Gauteng on-wheels"; "Message any time · Nico replies from 07:30 · we confirm your window."; "We come to you — no walk-in office."; areas "Johannesburg", "Sandton", "Midrand", "Centurion", "Pretoria", "Ekurhuleni", "Roodepoort & West Rand", "Vereeniging & Vanderbijlpark"; "© 2026 Spoorlangs (Pty) Ltd"; JSON-LD `AutomotiveBusiness` with `founder` "Nicholaas Strydom", `address` region "Gauteng" / "ZA" (no street), `availableLanguage` ["en", "af"]. `contact-cta.png` still carries "drive@spoorlangs.co.za" in the artwork — never reuse that address.
