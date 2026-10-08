# FloatingActions

Fixed bottom-right cluster: orange uppercase WhatsApp pill + mobile-only quote pill. Every page of spoorlangs.online renders it once, after the footer.

**Use** once per page, at the end of `<body>`. **Don't** nest it in a section, add pills, or drop it on the quote-sent page (which pads `.quote-actions` `4.25rem` to clear it).

**Consumer provides:** nothing — both targets are site constants: `https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request` (book p25: "wa.me/27662715887 for links and QR codes") and `/quote?service=&pickup=`. Props: `quoteActive` (the router's `active`, `data-status="active"`, `aria-current="page"` on /quote), `whatsappMessage`, click handlers, `className`, `children` to replace the pair. Parts: `FloatingQuote`, `WhatsAppWidget`.

**Do / don't**
- WhatsApp is the primary pill: `--background` (black) label on `--orange` — book p26 "Asphalt on Ignition 8.0:1 Pass — buttons". Never white on orange ("2.6:1 Fail — avoid").
- Hover is `--copper` only (p15 "Hover and depth on orange only"); it turns the label white — 3.81:1, flagged for Andries Liebenberg.
- Labels stay sentence case in source ("WhatsApp us", "Get a quote"); CSS uppercases them. Book p08 microcopy: "CTA: Get a quote on WhatsApp".
- Keep the icon inline SVG on `currentColor`. The site ships lucide `message-circle` at 2 px; the book asks 1.5 px with one orange highlight (p20) — unresolved discrepancy.
- `min-height: 2.75rem` = 44 px meets p26 "Tap targets: 44 × 44 px minimum".

**Copy (site, verbatim):** "Get a quote" · "WhatsApp us" · aria-label "WhatsApp +27 66 271 5887".

**States:** default; `:hover` (copper, white label, `translateY(-2px)`, `.2s` — book p21 says 200–400 ms); `:focus-visible` via the global rule (2 px `--orange` outline, 4 px offset); active route (present, unstyled); ≤639px shows the quote pill with `gap: .5rem`.

**Gaps:** no disabled, loading or quote-pill hover styles in source. Cascade quirk kept: the mobile block precedes the base rules, so at ≤639px its `right`, `bottom` and `padding` overrides lose to the later base declarations — only `gap`, `min-height` and the quote pill's `display` apply.
