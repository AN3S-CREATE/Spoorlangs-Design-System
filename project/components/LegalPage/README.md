Reading column for the privacy page: uppercase h2s, titanium paragraphs, bullets, contact line. The `/privacy` shell — back link, "POPIA" eyebrow, `quote-title` h1, then `h2` + `p`/`ul` blocks capped at 46rem — plus `PrivacyNote`, the note under the quote and booking forms.

**Use it** for the privacy policy and any future legal text. **Not for** marketing sections (`SectionHeading`), the FAQ (`FaqList`) or pricing notes (`PricingTable`).

**Consumer provides:** `backHref`/`backLabel` (site: `/`, "Back to home"), `eyebrow`, `title`, `intro` paragraph(s), `sections` — `{ heading, contact?, blocks: [string | { p } | { ul: [...] }] }` — or free `children`; `main: false` drops the `quote-main` wrapper. `LegalContactLine`: `business`, `city`, `whatsappHref`, `whatsappLabel`, `email` (site defaults) or `children`. `PrivacyNote`: `children` with its `/privacy` link. Container: between `SiteHeader` and `SiteFooter`.

**Do**
- Type h2s in sentence case; CSS uppercases them (Brand Book p17).
- Keep body `--titanium` (11:1 on Asphalt, p26) and links `--orange` underlined.
- Contact line follows the book's rule "City only: Kempton Park. Never a street address" (p25), but it is the site's own line, not the book's "COPY EXACTLY" block: owner and coverage lines differ — for Andries Liebenberg. Email and web already match the domain settled on 2026-10-08, spoorlangs.online (README §9 rows 2–3).
- Date every policy change in the intro: "Last updated: 15 September 2026."

**Don't**
- Add h3s, a contents list or a "last updated" badge — none in source.
- Publish invented trading hours or "insured" claims (p24–25).

**Copy (site, verbatim):** "POPIA" · "Privacy policy" · "Spoorlangs (Pty) Ltd · Kempton Park · WhatsApp +27 66 271 5887 · drive@spoorlangs.online" · "When you ask for a quote, we collect only the details needed to price and arrange that delivery:" · PrivacyNote (/quote): "Nothing is stored on this page."

**States:** links `--orange` underlined; back link orange-underlined and eyebrow `--titanium` here (`.legal-page a`/`.legal-page p` outrank them — source quirk, kept); focus from Base `:focus-visible`; no hover or breakpoint rules.

**Settled 2026-10-08:** email `drive@spoorlangs.online` and web spoorlangs.online — the site and book p25 now agree. **Flags for Andries Liebenberg:** type — site Oswald/Montserrat, book Bebas Neue/Inter.

**Gaps (not in source):** no h3, contents list, terms page, light/print variant or Afrikaans edition (book open decision 03).
