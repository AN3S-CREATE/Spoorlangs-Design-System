Inline-flex uppercase titanium link with arrow-left icon; orange on hover. It is the "Back to home" line the site puts first inside every sub-page shell (quote, book, coverage, pricing, faq, contact, privacy), above the eyebrow and the page title.

**Use it** once per sub-page, as the first child of the shell, pointing at `/`. **Not for** in-copy links (underlined orange: `.legal-page a`, `.privacy-note a`), calls to action (`Button`) or the header (`SiteHeader`).

**Consumer provides:** `href` (always `/` on the site), the label as `children` (the site's only label is "Back to home"), optional `className`, `icon` (keep the lucide arrow-left; the site has no other) and `onClick` or any other anchor attribute, passed to the `<a>`.

**Do**
- Type the label in sentence case; `text-transform: uppercase` does the capitals — a convention derived from the site's CSS (`.back-link { text-transform: uppercase }`) and its sentence-case source strings, not a quoted site rule.
- Keep `titanium` at rest (11:1 on Asphalt, Brand Book p26) and `orange` on hover; the icon follows via `currentColor`.
- Keep the 1rem arrow on the left, before the `<span>`.

**Don't**
- Underline it or add a transition: the site declares neither.
- Reword it: "Back to home" is Spoorlangs's wording.

**States:** rest `--titanium`; hover `--orange`; keyboard focus from the global `:focus-visible` (2px solid `--orange`, offset 4px, custom.css L941–L943); no transition (instant).

**Copy (site, verbatim):** "Back to home" → `/`.

**Flags for Andries Liebenberg**
- On `/privacy`, `.legal-page a { color: var(--orange); text-decoration: underline }` (L2222–L2224) outranks `.back-link`: that back link is orange and underlined at rest. Kept as source.
- Brand Book p21: UI transitions 200–400 ms; `.back-link` has none.
- Brand Book p20: icons 1.5 px stroke, one orange highlight; the site's lucide arrow is a 2 px single-ink stroke.
- Brand Book p26: tap targets 44 × 44 px minimum; from the source values (.78rem × line-height 1.5) the link box is about 18.7 px tall.

**Gaps (not in source):** no "back to previous page" variant; no active, visited or disabled styling.
