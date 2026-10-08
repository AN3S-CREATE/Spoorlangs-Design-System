# WhatsappBand

Black padded aside with eyebrow, h2 "Have a runner to move?", muted paragraph and two actions — the home page's direct line to Nico on WhatsApp; the quote form is the quieter route. `--background` ground, `4rem` padding-block, copy in `.site-shell.whatsapp-layout` (max-width `54rem`).

**Use** once on the home page, between "Why Spoorlangs" and the FAQ, as the `<aside aria-label="WhatsApp quote call to action">` landmark. **Don't** use it as the main contact band (that is ContactBand), inside a `.section`, or twice.

**Consumer provides:** `eyebrow`, `title`, `text` (defaults are the site's copy; `null` omits); `actions` — `[{variant, href, label, icon, trailingIcon, target, rel, 'aria-label'}]`, each a `WhatsappBandAction` link (`.button-primary` / `.button-secondary`) — or `children` for the `.contact-actions` row; `className`, `aria-label`, `id`. Container: the page body, full-bleed.

**Do / don't**
- WhatsApp is the primary when both appear and the band's only `.button-primary`; the form link is `.button-secondary`.
- Black label on orange, never white: "White on Ignition 2.6:1 Fail — avoid" (Brand Book p26).
- Keep the site's link: `wa.me/27662715887` (p25), `target="_blank" rel="noreferrer"`, `aria-label="WhatsApp +27 66 271 5887"`.
- Brand Book p08 CTA microcopy: "Get a quote on WhatsApp". A "runner" starts and drives (p04).
- Actions stack (max-width `27rem`) below 640px, a row from 640px.

**Copy (site, verbatim):** "Talk directly to Spoorlangs" · "Have a runner to move?" · "Share the collection point, destination, vehicle and preferred timing." · "WhatsApp us" · "Fill in the quote form". Also "Ask on WhatsApp" (/pricing, /faq).

**States:** as Button — hover lifts 2px, primary turns Burnt Copper with a white label (3.81:1, flagged), secondary lifts only; focus is Base's orange outline. The band itself has none.

**Gaps — for Andries Liebenberg:** quirks kept — `.whatsapp-layout>div>p` paints the eyebrow `--muted-foreground`, line-height 1.7 (orange elsewhere); the primary's `.75rem` margin-top offsets the row at ≥640px. No heading id, narrower breakpoint or Afrikaans copy in source. Site face Oswald; book primary Bebas Neue (p16).
