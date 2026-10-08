# Button

Pill (999px) CTA: `.button-primary` in Ignition Orange with an Asphalt Black label, `.button-secondary` outlined in Titanium Silver, `.button-compact` for the header; leading and trailing icon slots.

**Use** for a section's action ("Get a quote", "WhatsApp us") and the quieter route beside it ("Fill in the quote form"); **not** for nav links, floating actions or chips.

**Consumer provides:** `variant`, `compact`, `href` (renders `<a>`; omit for `<button type>`), the label as `children`, `icon` / `trailingIcon` (`ButtonIcon` nodes), `wrapLabel`, `aria-label`, `target`/`rel`. `WhatsAppButton` takes `label` and `compact` and fixes the wa.me href, `aria-label="WhatsApp +27 66 271 5887"`, `target="_blank" rel="noreferrer"`.

**Do / don't**
- One orange primary per action row: a second `.button-primary` inside `.hero-actions` renders as the ghost.
- Every WhatsApp CTA is `.button-primary`, never secondary.
- Black label on orange, never white: "Asphalt on Ignition 8.0:1 Pass — buttons · White on Ignition 2.6:1 Fail — avoid" (Brand Book p26).
- Labels sentence case; Montserrat .9rem/800 on the site (Brand Book p16: Inter — for Andries Liebenberg).
- "Tap targets: 44 × 44 px minimum" (Brand Book p26); `.nav-quote` drops to 2.5rem below 640px — flagged.

**Copy (verbatim, site):** "Get a quote", "WhatsApp us", "Request a run", "Fill in the quote form", "drive@spoorlangs.online", "Contact details", "Describe your move", "Send on WhatsApp", "Send by email", "Fill in the form for me", "Save & open WhatsApp", "Request this booking", "Ask on WhatsApp", "See guide rates". Brand Book p08: "CTA: Get a quote on WhatsApp".

**States:** hover lifts `translateY(-2px)`; primary turns Burnt Copper with a white label (3.81:1 — real source pair, flagged); secondary lifts only; focus-visible is Base's 2px orange outline; inside `.services-cta` the primary inverts to black on orange, white on black on hover. Transitions .2s (Brand Book 200–400 ms).

**Gaps (not in source):** disabled, active, loading and icon-only states; a class for the hero ghost (`button-ghost`, system-given); secondary hover colour; site calendar-check paths differ from the project's lucide-static file.
