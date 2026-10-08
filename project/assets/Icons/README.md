# Icons

The 14 lucide icons the live site renders, as files from lucide-static v1.52.0 (ISC licence; each file opens with `<!-- @license lucide-static v1.52.0 - ISC -->`). Every file is `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`: a 24 px grid, 2 px round-capped stroke, one ink. Because the ink is `currentColor`, an `<img>` cannot recolour it — inline the SVG (or use the site's lucide-react components) and set `color`. Inks the site uses: `primary-foreground` / `background` (#000000) inside `.button-primary` and `.whatsapp-widget` at rest (black on orange, 8.04:1) at 1.15rem; `foreground` (#ffffff) inside `.button-secondary`, inside `.services-cta .button-primary` (white on black) and on the Burnt Copper hover of `.button-primary` / `.whatsapp-widget` (3.81:1 — flagged); `orange` (#ff7a00) on `.benefit-list svg`, `.services-notes li svg` (1.2rem), `.service-detail-title > svg` (2rem) and `.quote-sent-tick`; `primary` (#ff7a00) via Tailwind `text-primary` on the contact cards (24 px); `titanium` inherited in `.back-link` (1rem). Every inline instance carries `aria-hidden="true"` — the label beside it names the action.

Brand Book rule (p20): "Line only — 1.5 px stroke on a 24 px grid, rounded ends · White on dark · One orange highlight per icon, on the detail that matters · No fills, 3D, gradients or emoji · Same stroke weight across a set". The book's eight tiles (Same-day · Auction · After-hours · Fleet · Live pin · POD · WhatsApp · Handover) have no artwork — "the icon artwork did not render in the page export" — so this lucide set is the only icon artwork in either source. Discrepancy for Andries Liebenberg (README §9 row 5): the site strokes at 2 px with no orange highlight; the book asks for 1.5 px with one. No Handover icon exists.

- `message-circle.svg` — speech bubble; WhatsApp CTAs: hero and band "WhatsApp us", floating widget, services "WhatsApp us", pricing and FAQ "Ask on WhatsApp", quote "Send on WhatsApp", contact WhatsApp card (18 uses); book tile WhatsApp.
- `arrow-right.svg` — right arrow; trailing on forward CTAs: "WhatsApp us", "Get a quote" (services, pricing), "Request this service" ×6, "Describe your move", "See guide rates", "Ask on WhatsApp" (16 uses).
- `arrow-left.svg` — left arrow; `.back-link` "Back to home" on the seven sub-pages, 1rem.
- `circle-check.svg` — tick in a circle; the four "Before you book" bullets on /services (orange, 1.2rem) and `.quote-sent-tick`.
- `mail.svg` — envelope; "drive@spoorlangs.online" button on the home contact band, contact Email card, quote "Send by email".
- `map-pin.svg` — pin; why tile "Live pin + POD" and the Live pin service on /services; book tile Live pin.
- `clock-3.svg` — clock at three; why tile "Clock as the product" and the Same-day service; book tile Same-day. The live markup emits both `lucide-clock3` and `lucide-clock-3` for this glyph.
- `car-front.svg` — car front; why tile "Honest scope" and the Fleet service; book tile Fleet.
- `calendar-check.svg` — calendar with tick; coverage "Save & open WhatsApp" and book "Request this booking" submits.
- `wand-sparkles.svg` — wand; quote "Fill in the form for me" (DescribeMove).
- `users.svg` — two people; why tile "Owner-driven first".
- `moon.svg` — crescent; the After-hours service on /services; book tile After-hours.
- `gavel.svg` — gavel; the Auction service on /services; book tile Auction.
- `file-check-corner.svg` — document with tick; the POD service on /services; book tile POD.

Service mapping as the site has it: Same-day `clock-3` · Auction `gavel` · After-hours `moon` · Fleet `car-front` · Live pin `map-pin` · POD `file-check-corner`. The home service cards carry no icon, only the numeral.
