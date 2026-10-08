# Eyebrow

Uppercase Montserrat label with a 2.5rem × 1px orange rule before it; `.eyebrow` (orange) and `.hero-kicker` (titanium) variants.

**Use it** as the one-line label — a `<p>` placed immediately before the `h1`/`h2`/`h3` it introduces: heading blocks, sub-page title blocks, the service spotlights, and once as `hero-kicker` above the hero `h1`. **Don't** use it as body copy, a link or a badge; don't stack two or leave it without a heading.

**Consumer provides:** `children` (the label, typed in sentence case — CSS uppercases it; Brand Book p17: "proper spaces always"), `variant` (`eyebrow` default, `hero-kicker`), optional `className` and any `<p>` attribute. Container: the heading block (`.section-heading`, `.split-heading`, `.service-detail-title`, `.services-cta`, the hero).

**Do / don't**

- Ink is `--orange`; on the orange `.services-cta` band it becomes `--background` — black on orange, never white.
- The rule is always `--orange`, `--eyebrow-rule-width` × `--eyebrow-rule-height`, `--eyebrow-gap` before the text; don't lengthen, recolour or drop it.
- Keep it short — the site's longest is "Kempton Park · Gauteng vehicle delivery" (spaced middle dot).
- `hero-kicker`: once, in the hero only.

**Copy (site, verbatim):** kicker "Driver-powered vehicle relocation"; eyebrows "Gauteng on-wheels", "Simple by design", "Where we drive", "Why Spoorlangs", "Proof at handover", "About Spoorlangs", "Talk directly to Spoorlangs", "Straight answers", "Guide rates", "Contact · Gauteng", "POPIA", "Not sure which service fits?". Brand Book p17 KICKER sample: "DRIVER-POWERED VEHICLE RELOCATION".

**States:** none — static text; no hover, focus, disabled or breakpoint rules.

**Gaps — for Andries Liebenberg:**

- Brand Book p17 KICKER is "Inter Semibold · 18 px · tracked caps" in Ignition Orange; the site sets `.eyebrow` in Montserrat .72rem/900/.15em and `.hero-kicker` in titanium .68rem/700/.18em. Both recorded as type styles (`brand-kicker`, `eyebrow`, `hero-kicker`); which governs the web is open.
- On the orange band the rule stays orange (invisible): the source never recolours `::before`.
- Source quirks: inside `.pod-layout`, `.whatsapp-layout>div` and `.describe-move` the eyebrow renders `--muted-foreground`, inside `.legal-page` `--titanium` (parent `p` rules win on specificity). Kept as the site behaves.
- No line-height declared (inherits body).
