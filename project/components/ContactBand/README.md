# ContactBand

Photo contact band: the contact-cta photograph under a left-to-right Asphalt Black scrim (`.contact-overlay`), an eyebrow, the 13ch h2, the Titanium `.contact-hours` line and the stacked `.contact-actions` — the home page's last word before the footer, pointing at Nico on WhatsApp.

**Use** once, as the home page's `#contact` section, last before the footer. **Don't** nest it in a `.section`, use it on inner pages, twice, or in place of WhatsappBand.

**Consumer provides:** `imageSrc` + `imageAlt` (alt on every image — p26); `eyebrow`, `title`, `hours` (defaults: the site's copy; `null` omits); `titleId` (default `contact-title`); `actions` — `[{variant, href, label, icon, trailingIcon, wrapLabel, target, rel, 'aria-label'}]`, each a `ContactBandAction` link — or `children`; `className`, `id` (default `contact`). Full-bleed, own `.site-shell`.

**Do / don't**
- One `.button-primary` per band: WhatsApp; the rest `.button-secondary`.
- Black label on orange, never white (p26: "White on Ignition 2.6:1 Fail — avoid").
- Keep `wa.me/27662715887` (p25), `target="_blank" rel="noreferrer"`, `aria-label="WhatsApp +27 66 271 5887"`.
- City only in the eyebrow (p25: "Never a street address"); never invent trading hours (p25).
- Actions stack (max-width `27rem`) below 640px, a row from 640px.

**Copy (site index.html, verbatim):** "Kempton Park · Gauteng vehicle delivery" · "Every vehicle deserves a professional journey." (p05 North Star) · "Message any time · Nico replies from 07:30 · we confirm your window." · "WhatsApp us" · "drive@spoorlangs.online" · "Get a quote" · "Contact details". p08: "Get a quote on WhatsApp".

**States:** none of its own; links as Button (hover lifts 2px; primary turns Burnt Copper, white label 3.81:1 — flagged); focus is Base's orange outline. Without `color-mix` the scrim is solid `--background`.

**Gaps — for Andries Liebenberg:** no mobile image position or `.section` padding in source. Mail label bare, "WhatsApp us" in a `<span>` — site quirk kept. Hours: site "Nico replies from 07:30" vs p25 "invented trading hours" — kept. Email: site drive@spoorlangs.online; p25 names spoorlangs.co.za. Fonts: site Oswald/Montserrat; p16 Bebas Neue/Inter.
