# IgnitionRule

Brand Book graphic: the 96 × 5 px Ignition Orange rule under headings (p22), and the site eyebrow rule for comparison; an intentional addition sourced from the book, not the site.

**Use it** under a page or section title set in Bebas Neue caps — the book's page-title device. `IgnitionHeading` renders heading + rule; `IgnitionRule` is the bar alone. **Don't** put it under the site's Oswald headings (the site has no such rule; it uses `Eyebrow` before the heading), between paragraphs, or under body copy.

**Consumer provides:** `children` (heading text), `level` (`h1` | `h2` | `h3`, default `h2`), `size` (`display` | `h1` | `h2` — p17 web steps 96 / 48 / 32 px via the type-style classes `brand-display` / `brand-h1` / `brand-h2`), `rule` (`ignition` default, `eyebrow`), `id` on the heading, other attributes on the wrapper; the heading-to-rule gap as the custom property `--ignition-rule-gap` (system-given, default 0 — the book states no gap). Container: the headline zone (p22).

**Do / don't**

- The rule is always `--ignition-rule-width` × `--ignition-rule-height` in `--ignition-orange`, flush left — never lengthened, recoloured or thickened. Other lines: "1–2 px steel or titanium" (p22).
- Heading ink `--white`; "headings in caps · proper spaces always" (p17). Spell it SPOORLANGS.
- One rule per heading. Orange stays an accent (p15 ratio 70 / 20 / 10).

**Copy (Brand Book p17, verbatim):** "VEHICLE DELIVERY. DONE RIGHT." · "SAME-DAY. ON WHEELS." · "GUIDE RATES · EXCL. VAT"; page title "ACCESSIBILITY" (p26).

**States:** none.

**Gaps — for Andries Liebenberg:**

- Heading-to-rule gap not in source (≈15.7 px measured at the 48 px web H1: the slide shows 34 px under a 73 px cap — for Andries Liebenberg); the CSS ships no gap (`--ignition-rule-gap` default 0) and nothing below the rule.
- p17 prints HEADING 2 in Ignition Orange; the component keeps white.
- Heading line-height and tracking not stated ("light tracking", p16); the site's `.95` / `0` apply.
- Fonts: book Bebas Neue vs site Oswald — book-only here.
