# SectionHeading

Oswald 700 uppercase headings (h1/h2/h3) with an eyebrow and a lead, as the site's `.section-heading` and `.split-heading` blocks. Exports `SectionHeading`, `SplitHeading`, `Heading`, `Lead`.

**Use** `SectionHeading` to open a page section: eyebrow, heading, one paragraph; `SplitHeading` when the paragraph sits beside the heading (right column at ≥900px, the home process section); bare `Heading`/`Lead` inside other blocks. Not for the hero h1 (Hero owns it) or h4–h6 (unstyled).

**Consumer provides** `eyebrow`, `title`, `level` (1 | 2 | 3), `id` (the section's `aria-labelledby` target), `quoteTitle` (sub-page h1), `lead`, `leadVariant`, `className` (the site's split heading also carries `site-shell`). Eyebrow styling: the Eyebrow component.

**Do** write titles in sentence case with a full stop — the CSS uppercases them (Brand Book p17: "headings in caps · body in sentence case"). Proper spaces, never glued words (p08: "DRIVENBY ✗"). One h1 per page; one muted lead (`muted-foreground`, line-height 1.7).

**Don't** add letter-spacing (site: `letter-spacing:0`), colour headings orange (only the hero h1 `strong` is), or append children after a plain lead (it loses the `>p:last-child` colour).

**Copy (site, verbatim).** Home: "Gauteng on-wheels" · "Six ways to keep moving." · "Professional vehicle relocation for runners — powered by people, not trucks or trailers." Split: "Simple by design" · "Collect. Drive. Hand over." Pricing: "Guide rates" · "Honest numbers, confirmed on the quote." · "Zone-based guide rates for on-wheels delivery — a driver collects your vehicle and drives it. Final pin-to-pin pricing is confirmed on your quote before anything moves."

**States:** none.

**Gaps / flags for Andries Liebenberg.** Fonts: site Oswald vs Brand Book p16 Bebas Neue (Oswald is the alternate). Sizes: site h2 80 px / h1 120 px desktop vs book p17 32 px / 48 px web. An h1 in `.section-heading` gets no margin before its lead (only `.section-heading h2` has `margin-bottom:1rem`) — kept as source. `/contact` h1 lacks `.quote-title`. Contextual margins (`.why-copy h2`, `.quote-intro .lead` …) stay with their sections.
