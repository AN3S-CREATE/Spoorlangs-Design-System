# TrustRitual

POD block: a bordered photo beside an eyebrow, an h3, a muted paragraph and the three-step orange-numbered ritual list — the home page's `.pod-layout` with its `.trust-ritual` `<ol>`. Exports `TrustRitual` (the block), `TrustRitualList` (the `<ol>` alone), `TrustRitualItem`.

**Use it** once, where the site does: in the "Why Spoorlangs" section, for the proof-of-delivery promise and its three steps; `TrustRitualList` alone where the steps appear without the photo. **Don't** use it for services, pricing or FAQ lists, add a fourth step or a CTA, or colour steps by status (success green `#2F6F4E`, Brand Book p14, is not in this source).

**Consumer provides:** `imageSrc` + `imageAlt` (alt text on every image, book p26), `eyebrow`, `title`, `lead`, `items` (strings auto-number "01"…, or `{ number, label }`), `ariaLabel`, `className` (the site passes `site-shell`), optional `figure`, `listChildren`, `children`. Container: a `.section`.

**Do / don't**

- Numerals "01"-style: Oswald (`--font-display`) in `--orange`; step text `--titanium`, `.78rem`, 700.
- Rules are `--hairline` `--border`: above the block, above the list, under each step.
- Photo: real handovers, drivers, collections (book p19); never racing, trailers, sales floors.
- Title in sentence case with a full stop; CSS uppercases it.

**Copy (site, verbatim):** "Proof at handover" · "POD means Proof of Delivery." · "The job is closed when you have proof of delivery, not when we say so." · "01 Collect pin confirmed" · "02 Live pin on request while we drive" · "03 POD closes the job." Alt: "Driver recording a vehicle handover for Proof of Delivery".

**States:** none; two columns, figure `clamp(8rem,15vh,10rem)` tall, at ≥900px.

**Gaps — for Andries Liebenberg:** the eyebrow renders `--muted-foreground`, not orange, inside `.pod-layout` (`.pod-layout p` wins; kept as source) · photo corners `.375rem` (`--radius-md`) vs book p22 "Photos 12 px"; frame `--border` hairline vs "1–2 px steel or titanium" · numerals Oswald vs book p16 Bebas Neue, no explicit font-size · book p20 lists POD and Handover icon tiles; the site block uses none.
