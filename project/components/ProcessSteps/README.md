# ProcessSteps

Split heading, bordered process image and a hairline-ruled 3-step list with orange Oswald numerals — the home "Collect. Drive. Hand over." block. Exports `ProcessSection`, `ProcessVisual`, `ProcessSteps`, `ProcessStep`.

**Use** `ProcessSection` for the home process section; `ProcessSteps` / `ProcessStep` alone for a short numbered sequence; `ProcessVisual` for the framed image. Not for the POD ritual (TrustRitual) or service cards (ServiceGrid). Three steps only — the ≥900px grid is `repeat(3, …)`.

**Consumer provides** `eyebrow`, `title`, `lead`, `id` (the h2 gets `<id>-title` for `aria-labelledby`), `image` `{src, alt}` (site: `assets/Imagery/how-it-works.png`, 2752×1536), `steps` `[{number, title, body}]` or `ProcessStep` children (`number` is literal text, "01", not a CSS counter), `className`. `.section`/`.site-shell` are Base's, `.wide-visual` ServiceGrid's, `.split-heading`/`.eyebrow` SectionHeading's and Eyebrow's.

**Do** write titles in sentence case — the CSS uppercases them (Brand Book p17: "headings in caps · body in sentence case"); keep numerals two-digit "01"–"03"; orange on the numeral only (p15: "CTAs, rules, accents … Never a full background field"); alt text on the image (p26); keep `loading="lazy"`.

**Don't** add icons, fills, glows or shadows to the list (p13, p18); invent a fourth step; restyle the hairline (`--border`).

**Copy (site index.html, verbatim).** "Simple by design" · "Collect. Drive. Hand over." · "Your vehicle stays on its own wheels from collection to a documented handover." · 01 "Collect" — "The collection pin, vehicle notes and written window are confirmed before the job starts." · 02 "Drive" — "A professional driver (owner or vetted freelancer) takes the vehicle on its own wheels to the agreed delivery pin." · 03 "Hand over" — "Proof of Delivery records the handover and closes the job." Alt: "Collect, drive, then hand over with Proof of Delivery".

**States:** none (no hover, focus or active rules).

**Gaps / flags for Andries Liebenberg.** Numerals and h3 are Oswald (site) against Bebas Neue (Brand Book p16). The book has no process section; the steps are the site's own. Type styles: `process-step-number` (24px), `h3-process-step` (21.6px), `process-step-copy` (13.44px — under the book's 16px web body minimum, p26; site value kept).
