# ServiceDetail

The Services page of spoorlangs.online: an intro header, six alternating image/copy articles for Same-day · Auction · After-hours · Fleet · Live pin · POD, the "Not sure which fits?" mid CTA after the third, the "Before you book" notes and the Ignition Orange closing band.

**Use** as `/services`, or lift its parts for a single-service page. **Don't** use it for the home grid (ServiceGrid) or for the book's "FUTURE" lines ("never shown as available", p23).

**Consumer provides:** `intro` (eyebrow, title, lead, `quoteHref`, `whatsappHref`, labels); `services` — per article `image` (upload of `assets/Imagery/service-spotlight-n.png`), `alt`, `index`, `iconName`, `eyebrow`, `title`, two `paragraphs`, `href`, `linkLabel`; `midCta` (text + pair), `midCtaAfter` (site: 3); `notes` (title, `items`); `cta` (eyebrow, title, text, `href`, `ctaLabel`). Page padding-top clears SiteHeader.

**Do / don't**
- One `.button-primary` per row: "Get a quote" is primary; here "WhatsApp us" is `.button-secondary` (primary on the home page) — for Andries Liebenberg.
- Black ink on the orange band and its inverted pill, never white ("Asphalt on Ignition 8.0:1 Pass", Brand Book p26).
- Alternation is positional (`.service-detail:nth-child(2n)` at ≥900px); the aside counts: 01/03/04/06 photo-left, 02/05 photo-right.
- Keep the guard-rails verbatim; never add cover, insurance or "from R…" claims.

**Copy (site, verbatim):** "Driven for the job at hand." · "Send the collection point, destination and preferred timing. Spoorlangs confirms a realistic collection window before wheels turn." · "Not sure which fits? Tell us the move." · "Cover status is shared honestly on request while we bootstrap; no cover certificate is claimed on this site." · "Describe your move".

**States:** `.service-detail-link:hover` → white; `.services-cta .button-primary:hover` → white pill, black label; focus is Base's 2px orange outline. One column below 900px; action rows stack below 640px.

**Gaps / flags:** the full orange band breaks p15 "Never a full background field"; its eyebrow rule is invisible on orange; the Live pin link has an empty `service=`; no disabled state; the `circle-check` tick differs between site markup (kept) and `assets/Icons/circle-check.svg`; icons 2px single ink (p20: 1.5px + one orange highlight).
