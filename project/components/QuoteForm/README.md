# QuoteForm

Quote page: an intro column (back link, eyebrow, h1, lead, privacy note, guide rates) beside the two-column `.quote-form` card — corridor chips, fields, consent, action row — and the post-submit `.quote-sent` state.

**Use** for /quote and /book (`QuoteLayout` + `QuoteIntro`), or `.quote-form` alone inside a `.booking-section`. **Not** for the WhatsApp band or contact cards.

**Consumer provides:** `QuoteLayout` `intro` + `children`; `QuoteIntro` `eyebrow`, `title`, `lead`, `privacyNote`, `backHref`, children (PricingTable's `GuideRates`); `QuoteForm` `corridor` `{legend, chips}`, `fields` (QuoteField props: `id`, `label`, `control`, `options`, `wide`, `invalid`, `error`, control attributes), `consent`, `actions` (`QuoteAction` nodes), `onSubmit`; `QuoteSent` `title`, `reference`, `summary` `{term, value}`, `next`, `actions`. Field, CorridorChips and DescribeMove nodes compose via `children`.

**Do / don't**
- One orange primary per action row: "Send on WhatsApp" is `.button-primary`, "Send by email" the titanium outline; WhatsApp is primary when both appear (p08).
- Black label on orange, never white (p26).
- Privacy note and consent sentence verbatim; "privacy notice" links to /privacy.
- Guide rates "excl. VAT", "confirm on quote", format R1 350 (p24).
- Labels say "(optional)"; errors are the schema sentences, never colour alone (p26).
- Never invent a reference, pins or a name.

**Copy (verbatim, site):** "Gauteng vehicle delivery" · "Get a quote" · "Runner vehicles only, driven on their own wheels across Johannesburg and Greater Gauteng." · "This builds a WhatsApp message to Spoorlangs. Nothing is stored on this page. The email option opens your email app with the same details ready to send. Read the privacy notice.".

**States:** default; focus (orange border + 18 % halo); invalid (`aria-invalid="true"` + `<span role="alert">`; no border change in source); sent (tick, badge, summary, next steps, links). ≥640px two columns, actions in a row; ≥900px `.85fr / 1.15fr`.

**Gaps (not in source):** /quote-sent markup and copy (elements system-given; the preview borrows the route's meta title and other site lines); `.form-error` placement; no disabled, loading or selected-chip styles. For Andries Liebenberg: fonts (site Oswald/Montserrat; p16 Bebas Neue/Inter); radius .5rem vs p22 "Cards 16 px".
