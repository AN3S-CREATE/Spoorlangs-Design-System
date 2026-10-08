Spoorlangs is "South Africa's premium driver-powered vehicle delivery network." (Brand Book p03): it collects and delivers runners — "vehicles that start and drive" — across Johannesburg and Greater Gauteng from Kempton Park, owner-driven by Nico Strydom. Identity: Asphalt Black ground, Ignition Orange only as the signal ("orange = motion · metallic = premium · black = stability", p15), Titanium Silver metallic type, the speedometer arc with its orange red-zone, and poster-caps display headings — "clean · fast · premium · confident · South African · automotive-grade." (p06). The Brand Book v1.0 (8 Oct 2026) owns identity and words; the live site spoorlangs.online owns the web implementation; where they disagree, §9 records both for Andries Liebenberg to settle — never choose silently.

**Domain (p25):** use spoorlangs.online for both email and web: `drive@spoorlangs.online` and `https://spoorlangs.online`. The book: "Web is spoorlangs.online (https://spoorlangs.online). Locked by Andries 2026-10-08." · "Email is drive@spoorlangs.online. No other domain or email address is ever shown." Never print `spoorlangs.co.za` or `spoorlangs.lovable.app`.

**Never publish (p25):** "A street line or "123 Main Road" · +27 11 555 0101 · any other email address · invented trading hours · walk-in or workshop claims."

**Pricing presentation (p24):** "Always say "excl. VAT" and "guide" — final price on quote · Format: R1 350 (space as thousands separator) · Never "from R…" without the zone and band".

Further sections: `content.md` (voice, messaging and commercial copy) and `website.md` (the web implementation).

## 1. Colour

| Name | Token | Hex | Role (p14) | On Asphalt: p26 / site |
|---|---|---|---|---|
| Asphalt Black | `asphalt-black` | #000000 | "Primary surface" | — |
| White | `white` | #FFFFFF | "Cards, body on dark" | 21:1 / 21 |
| Ignition Orange | `ignition-orange` | #FF7A00 | "Action, motion, CTAs" | 8.0:1 / 8.04 |
| Burnt Copper | `burnt-copper` | #D95D00 | "Hover, depth on orange" | 5.5:1 / 5.52 |
| Titanium Silver | `titanium-silver` | #B7BCC6 | "Metallic type on dark" | 11:1 / 11.02 |
| Steel Grey | `steel-grey` | #59616F | "Rules, muted UI" | 3.4:1 large only / 3.36 |
| success green | `success-green` | #2F6F4E | "Functional only … POD-complete states" | not in book; 3.50 computed (3.42 on `card`) — below 4.5:1: icon/mark only, never text; `white` on it 5.99 |

Ratio "~70 / 20 / 10" (p15): `asphalt-black`, `white`, `ignition-orange` — orange only for "CTAs, rules, accents, motion trail". Site variables alias the palette: `background` → `asphalt-black`; `foreground` → `white`; `primary`, `ring`, `orange` → `ignition-orange`; `accent`, `copper` → `burnt-copper`; `secondary`, `titanium` → `titanium-silver`; `steel` → `steel-grey`. Site-only oklch: `card`, `muted-foreground` (8.49:1), `border` (1.54:1 — flagged). Translucents are the site's `color-mix()` recipes as hex8 (`header-bg`, `hero-shade-*` …) — records only: `components/bundle.css` keeps the site's `color-mix()` expressions, so an edit to those tokens on the page does not reach the previews.

- Orange is "Never a full background field or full-wordmark fill." (p15); the site's `.services-cta` breaks this — §9 row 16.
- Black text on orange, never white: "Asphalt on Ignition 8.0:1 Pass — buttons", "White on Ignition 2.6:1 Fail — avoid" (p26).
- `burnt-copper`: "Hover and depth on orange only." (p15). `steel-grey` text: "18 px+ or decorative only" (p26); the site's `service-index` at 12.8 px breaks this.
- Superseded, "never on new assets" (p15): navy #1F4E79, amber #E8A317, Midnight Velocity #0B1323. CMYK and Pantone "pending" (p14).

## 2. Typography

Brand faces (p16): Bebas Neue headings — "All caps, light tracking … never racing or dealership shout."; Inter body 400–700, "Sentence case, 16 px / 1.5 on web." Alternates Oswald, Montserrat; all OFL 1.1 in `fonts/`. Families: `brand-display`, `brand-sans` (brand); `display`, `sans` (web).

| Step (p17) | Style | Slides | Web | Specimen |
|---|---|---|---|---|
| DISPLAY | `brand-display` | 120–160 px | 64–96 px | "VEHICLE DELIVERY. DONE RIGHT." |
| HEADING 1 | `brand-h1` | 72 px | 48 px | "SAME-DAY. ON WHEELS." |
| HEADING 2 | `brand-h2` (orange) | 48 px | 32 px | "GUIDE RATES · EXCL. VAT" |
| KICKER | `brand-kicker` (orange) | 18 px | 18 px | "DRIVER-POWERED VEHICLE RELOCATION" |
| LEAD | `brand-lead` | 30 px | 20 px | "Owner-driven. Gauteng. Proof of delivery." |
| BODY | `brand-body` (1.5) | 24 px | 16 px | "We collect and deliver runners … on the clock." |
| CAPTION | `brand-caption` | 16 px | 12–14 px | "All prices exclude VAT. Final price confirmed on quote." |

The site loads only Oswald 500–700 and Montserrat 400–900 — §9 row 1. Web styles: `h1-hero` (160 px, line-height .82, orange `<strong>` line), `h1` 120 px, `h1-quote-title` 72 px, `h2` 80 px, `h3` 35.2 px; `body` 16 px/1.5, `lead` 1.7 in `muted-foreground`, `eyebrow` (11.52 px/900/.15em orange), `button` (14.4 px/800), `field-label`, `footer`. `clamp()` sizes are recorded at their desktop maximum.

Rules (p17): "headings in caps · body in sentence case · prices always "excl. VAT" · proper spaces always · spell it SPOORLANGS, never "Spoorslags"." On the web, type sentence case and let CSS uppercase; never typeset the wordmark.

## 3. Spacing, layout and grid

The 8-pt scale (p22) is `step-8` … `step-120` (8 · 16 · 24 · 32 · 48 · 64 · 96 · 120 px); slide grid "1920 × 1080 slide · 12 columns · 120 px margins · 24 px gutters". The site never references it (§9 row 19): its lengths are `space-1` … `space-32` plus role-named off-grid lengths (`button-gap`, `eyebrow-gap` …).

Web shell `.site-shell { width: min(100% - 2rem, 1180px) }`, `min(100% - 3rem, 1180px)` from 640 px. Sections pad `space-20`, `clamp(4.5rem, 8vh, 7rem)` from 900 px, separated by hairlines. Breakpoints `(width<=639px)`, `(width>=640px)`, `(width>=700px)`, `(width>=900px)`. Grids: `service-grid` 1 → 2 → 3 columns with `border` lines; `quote-form` 2 columns at 640 px.

Corners (p22): `radius-pill` for CTAs and chips, `radius-card` 16 px for book cards, `radius-photo` 12 px, `radius-rule` 4 px; the site adds `radius-md` 6 px (fields, framed images) and `radius-lg` 8 px (panels). Lines: `hairline` 1 px (site `border`; the book wants "1–2 px steel or titanium"), `line-2`, `accent-3`, `accent-4`. "Ignition rule 96 × 5 px under headings": `ignition-rule-width` × `ignition-rule-height` in `ignition-orange` under every page title; the site draws `eyebrow-rule-width` × `eyebrow-rule-height` (40 × 1 px) before each eyebrow instead. Shadows: `shadow-header`, `shadow-button-primary`, `shadow-whatsapp-widget`, `focus-ring-field` — hex8 records of the site's `color-mix()` forms, which `bundle.css` keeps (see §1).

Not tokens, not page-editable: the site's Tailwind `@layer theme` values `--spacing` (.25rem), `--text-xs` / `--text-sm` / `--text-xl` / `--text-2xl` with their `--line-height` pairs, `--font-weight-medium` / `--font-weight-semibold`, `--default-transition-duration` (.15s) / `--default-transition-timing-function` and `--radius-xl` (.75rem) are declared only in Base's theme block at the top of `components/bundle.css` (Base is concatenated first); the ContactCards, CorridorChips and Field utilities read them there.

## 4. Logo

Source: "Approved PNG set, 14 Sep 2026" (p09). Files in `assets/Logos/`, all on solid black or white grounds — no transparent cut-out, no vector. The 12 versions (p10):

- Main Full · Dark `main-full-dark.png` — "Primary · covers, hero"; site header.
- Main Full · Light `main-full-light.png` — "Print, light documents".
- Dark Mode `dark-mode.png` — "Digital headers on asphalt".
- Light Mode `light-mode.png` — "Light UI and documents".
- Horizontal `horizontal.png` — "Nav bars, letterhead, email".
- Stacked `stacked.png` — "Square spaces, large avatars".
- Icon Only `icon-only.png` — "App icon, favicon, avatar"; the site favicon derives from it.
- Wordmark Only `wordmark-only.png` — "When the S is already nearby".
- Monochrome White `monochrome-white.png` — "One-colour reverse, embroidery"; site footer.
- Single-Colour Flame-S `single-colour-flame-s.png` — "Watermark, small accent".
- SA Flag Edition `sa-flag-edition.png` — "National moments, accent only".
- Special Dynamic `special-dynamic.png` — "Campaigns and motion".

Held back: "Monochrome Black is held back — the source file misspells the name ("SPOOOORLANS") and must be redrawn before use." (p10). Clear space "= height of the capital "S" in the wordmark"; minimum "Digital — 120 px wide — full or horizontal lockup · Print — 25 mm wide · Favicon / avatar — Use Icon Only · Embroidery — 70–90 mm wide on the chest" (p11). Backgrounds (p12): Main Full · Dark on #000000 is "The default for every digital surface"; Main Full · Light for print; Dark Mode on photography "on the darkest, calmest corner"; on orange "never the full-colour logo. Use a one-colour white cut-out only (cut-out file still to be supplied)." Misuse (p13): "Don't stretch or squash · Don't rotate · Don't recolour · Don't use low contrast · Don't place on busy texture · Don't add glows or shadows"; never "redraw, retype or AI-generate the wordmark". Match the file's ground to the surface.

## 5. Graphic elements, imagery and motion

Elements (p18): FLAME-S "Lead accent, watermark, avatar. Comes from the approved Single-Colour Flame-S — never redrawn."; SPEEDOMETER ARC "Section heads, progress, gauges."; MOTION TRAIL "Edges and dividers — restrained, never a flare."; SA flag "small accent only"; never "chequered flags, decorative flames, racing stripes, cartoon cars or luxury gold."

Photography (p19): locked hero "trusted driver, dark sedan, ignition light trails. Concept composite until the real shoot (approved Oct 2026) lands". DO "Real people, real vehicles, real roads · Wet asphalt, night or blue hour, restrained orange rim-light"; DON'T "Racing as content, burnouts, track days · Courier, trucking or car-transporter visuals". Shoot brief: "Asphalt blacks + one orange accent"; shot list and alt texts in `assets/Imagery/README.md`. Web: hero image `filter: saturate(.96) contrast(1.08) brightness(.78)` under the `hero-shade-*` scrims.

Motion (p21): "Smooth, not flashy — slow drift and ease-out · UI transitions 200–400 ms; hero moves 4–8 s loops · Respect "reduced motion" settings". Hero loop `assets/Motion/hero-locked-M.mp4` "1280×720 · ~6.8 s · 60 fps · slow smooth camera drift · corner lockup stays sharp"; the site ships its poster, not a `<video>`. The 5.5 s logo sting lives in Canva "Spoorlangs - Logo Animation", not here.

## 6. Iconography

Book (p20): "Line only — 1.5 px stroke on a 24 px grid, rounded ends · White on dark · One orange highlight per icon, on the detail that matters · No fills, 3D, gradients or emoji"; its eight tiles have no artwork. The site's set is 14 lucide icons (lucide-static v1.52.0, ISC) in `assets/Icons/`: `stroke="currentColor"`, `stroke-width="2"`, single ink, no highlight — §9 row 5. Mapping: Same-day `clock-3`, Auction `gavel`, After-hours `moon`, Fleet `car-front`, Live pin `map-pin`, POD `file-check-corner`, WhatsApp `message-circle`; no Handover icon. Inline the SVG to recolour it (an `<img>` cannot inherit `color`).

## 7. Accessibility

| Pair | Book (p26) | Site |
|---|---|---|
| `white` on `asphalt-black` | 21:1 Pass | 21 |
| `titanium-silver` on `asphalt-black` | 11:1 Pass | 11.02 |
| `ignition-orange` on `asphalt-black` | 8.0:1 Pass | 8.04 |
| `asphalt-black` on `ignition-orange` | 8.0:1 Pass — buttons | 8.04 |
| `burnt-copper` on `asphalt-black` | 5.5:1 Pass | 5.52 |
| `steel-grey` on `asphalt-black` | 3.4:1 Large text only | 3.36 |
| `white` on `ignition-orange` | 2.6:1 Fail — avoid | 2.61, never painted |
| `white` on `burnt-copper` | not in book | 3.81 hover label, fails AA |
| `success-green` on `asphalt-black` | not in book | 3.50 computed (3.42 on `card`) — below 4.5:1: POD-complete icon/mark beside a white label only, never text; `white` on it 5.99 |
| `placeholder-foreground` on `background` | not in book | 5.32 computed (#808080 composited) |

Minimum sizes (p26): "Body: 16 px web · 10 pt print · 24 px slides · Captions: 12 px web minimum · Steel Grey text: 18 px+ or decorative only · Tap targets: 44 × 44 px minimum". Always: "Alt text on every image and logo · Never colour alone — POD status = icon + label · Respect reduced-motion; no flashing · Write prices and times in full: R1 350 · 14:00". Web focus: 2px solid orange outline, offset 4px; fields use an orange border plus `focus-ring-field`.

## 8. Components

See `components/<Name>/README.md`.

- Base — canvas, `.site-shell`, `.section`, focus.
- Button — `.button-primary` black-on-orange, `.button-secondary`; one primary per group.
- FloatingActions — fixed `.whatsapp-widget`; mobile `.floating-quote`.
- Eyebrow — orange dash + tracked label.
- SectionHeading — eyebrow, heading, lead.
- BackLink — "Back to home".
- SiteHeader — fixed blurred bar.
- SiteFooter — orange rule, contact column.
- Hero — poster, scrims, two-line h1.
- ServiceGrid — six numbered tiles.
- ServiceDetail — services page rows, CTA band.
- ProcessSteps — "Collect. Drive. Hand over."
- BenefitList — "Why Spoorlangs" tiles.
- TrustRitual — POD three-step list.
- AboutLayout — "Who we are".
- WhatsappBand — "Have a runner to move?"
- FaqList — `<details>` accordions.
- ContactBand — photographic contact band.
- CoverageSection — dark Leaflet map.
- PricingTable — zone rates; `.guide-rates` variant.
- VehicleCard — "What we move" classes.
- Field — label, control, alert, consent.
- CorridorChips — corridor pills.
- QuoteForm — form shell, sent panels.
- DescribeMove — "Describe your move" helper.
- LegalPage — POPIA privacy layout.
- BookingPage — two-column sub-page shell.
- ContactCards — Tailwind cards on /contact.
- IgnitionRule — Intentional addition: the book's "Ignition rule 96 × 5 px under headings" (p22) has no web implementation; this supplies one.

## Templates in use

Brand Book p27 lists the templates in use — "Website · WhatsApp kit · rate card · Email signature · Letterhead A4 · A5 leave-behind · Business card · Runner ID · Vehicle branding (target) · Workwear polo" — and "NOT BUILT YET: Proposal · report · invoice template · event signage · social master in Canva". The stored exports — four social squares, four wave-1 posts, the delivery post, a story, two portrait posts, the email-signature sheet, the WhatsApp QR story and rate card, exported 2026-10-08 — live in `assets/Templates/` with Canva edit links; edit in Canva, re-export, replace the file.

The four squares share one pattern: `main-full-dark.png` top-left on `asphalt-black` (each export adds an off-palette orange glow, #261000–#462100); an `ignition-orange` `brand-kicker` in caps (untracked in the exports; on two squares it is the Canva design name); a two-line `brand-display` (Bebas Neue caps) headline at ≈85–93 px, line 1 `white`, line 2 `ignition-orange`; a `brand-lead` in `titanium-silver` sentence case; cards or chips with #101010–#141414 fills and 1–2 px hairlines or outlines; a full-width 3–5 px `ignition-orange` rule over a #080808 footer band carrying "Driven By People. Further Together." (`titanium-silver`) and "WhatsApp +27 66 271 5887" (`white`). The book has no social spec (p27: "social master in Canva" is NOT BUILT YET); recommended for that master: one wordmark-S height clear around the lockup (p11), a tracked-caps kicker (p17), unfilled `radius-card` cards with a `hairline` in `steel-grey` or `titanium-silver` (p22), a 5 px `ignition-rule-height` rule, and the band in `asphalt-black` (`accent-4` is the site's border-left token, not a book value).

Most broken hard rules: the approved logo file only — never "redraw, retype or AI-generate the wordmark" (p13; seven pieces, plus story-quote's typeset sign-off — unclear) — and "no fake stats" (p27; the Instagram post's five stars). Verdicts, fixes, open questions: `assets/Templates/README.md`.

## 9. Discrepancies for Andries Liebenberg to settle

| # Topic | Brand Book | Site |
|---|---|---|
| 1 Fonts | Bebas Neue / Inter (p16) | Oswald / Montserrat |
| 2 Web address — **resolved: spoorlangs.online** | p25 updated 2026-10-08: "Web is spoorlangs.online (https://spoorlangs.online)" | spoorlangs.online |
| 3 Email — **resolved: drive@spoorlangs.online** | p25 updated 2026-10-08: "Email is drive@spoorlangs.online" | drive@spoorlangs.online; `contact-cta.png` still prints .co.za |
| 4 Transitions | "200–400 ms", ease-out (p21) | `.2s`, no easing |
| 5 Icons | 1.5 px, orange highlight (p20) | lucide 2 px, single ink |
| 6 Hours line | no "invented trading hours" (p25) | "Nico replies from 07:30" |
| 7 Hero A case | "Vehicle Delivery. Done Right." (p08) | "Vehicle delivery." / "Done right." |
| 8 Owner name | public "Nico" (p25) | "Nico (Nicholaas Strydom)" |
| 9 Service names | "Same-day Gauteng collection" (p23) | "Same-day" |
| 10 Zone labels | "Local (under 25 km)" (p24) | "Local" |
| 11 Volume / pilot / Rush slot | "Also live" (p23) | absent |
| 12 Success green | #2F6F4E (p14) | orange reused |
| 13 Contrast values | rounded (p26) | measured |
| 14 Steel text size | 18 px+ (p26) | 12.8 px |
| 15 White on copper | not listed | hover 3.81:1 |
| 16 Orange field | "Never a full background field" (p15) | `.services-cta` |
| 17 Web type sizes | Display 64–96 px (p17) | h1 160 px |
| 18 Heading weight | "light tracking" (p16) | Oswald 700, tracking 0 |
| 19 Spacing | 8-pt (p22) | off-grid rem |
| 20 Corners | 16 / 12 / 4 px (p22) | 8 / 6 / 12 / 4 px |
| 21 Lines | steel/titanium 1–2 px (p22) | `border` 1.54:1, eyebrow dash |
| 22 Header logo | Dark Mode / Horizontal (p10) | Main Full · Dark |
| 23 WhatsApp avatar | Icon Only (p11) | cartoon driver |
| 24 Tap targets | 44 px (p26) | chips 36 px |
| 25 Time format | "14:00" (p26) | "10am" |
| 26 VAT wording | "excl. VAT" (p04, p17, p24) | "not VAT registered — no VAT is added." |

## 10. Known gaps and open decisions

Open decisions (p28): "01 Light / print version of this book for long documents? · 02 CMYK and Pantone values for cards and banners? · 03 Afrikaans edition? · 04 Web address — DECIDED 8 Oct 2026: spoorlangs.online + drive@spoorlangs.online · 05 Vector logo masters (SVG / PDF) + redraw Monochrome Black · 06 Real photography — APPROVED Oct 2026 (Photo Shoot Brief) · 07 Logo animation — DONE Oct 2026 (Logo Animation design)".

Not in source: vector or transparent logo; white cut-out for orange; titanium one-colour mark for the polo; Bebas Neue weight and kicker tracking; book icon artwork; a light theme; status colours beyond orange; quote-sent and booking-sent copy; rates for "Luxury & classic" or outside the three zones; cancellation and payment figures; awards, client logos, testimonials ("none on file", p28); templates "NOT BUILT YET: Proposal · report · invoice template · event signage · social master in Canva" (p27).
