# BenefitList

Two-column list of four bordered .25rem-radius benefit items with orange lucide icons — the home "Why Spoorlangs" tiles; `WhySection` adds the gradient band.

**Use** `WhySection` for the home "why" block; `BenefitList` alone for a few proof points. **Not** for services, process steps, POD ritual or FAQs.

**Consumer provides:** `items` (`{icon, title, text}`; icon `'users' | 'clock-3' | 'map-pin' | 'car-front'` or an inline `<svg>`) or `BenefitItem` children; `grid` (`.benefit-grid`, default true). `WhySection`: `eyebrow`, `title`, `lead`, `image` `{src, alt}`, `id`, `children` (the `.pod-layout` / `.about-layout` that follow).

**Do / don't**
- One title plus one line per tile; icons are `aria-hidden` — words carry the meaning (Brand Book p26: "Never colour alone").
- Icons inline, stroke `currentColor` — `.benefit-list svg` paints them `--orange`; never an `<img>`.
- Title `--foreground`, copy `--muted-foreground`; tile 1px `--border`, `--radius-rule`, `--background` at 72%.
- No fake stats, "insured" or "from R…" (Brand Book p24, p27).
- Four tiles, two columns; one at ≤639px — never three.

**Copy (site, verbatim):** "Why Spoorlangs" · "Premium service. Human accountability." · "Every movement is handled as a professional journey, with direct communication and a clear handover." Tiles: "Owner-driven first" / "Tight loop, not a dispatch queue." · "Clock as the product" / "Written window before wheels turn." · "Live pin + POD" / "Track on request; job closed when you have proof." · "Honest scope" / "Gauteng runners only; no non-runners or long-haul truck lanes." Alt: "Professional Gauteng vehicle delivery with journey updates and Proof of Delivery".

**States:** none. Breakpoints: ≤639px one column; ≥900px gap .7rem, `padding-top:.75rem`, section `padding-block:1.5rem`, photo `clamp(13rem,24vh,16rem)`.

**Gaps — for Andries Liebenberg.** Icons: site lucide 2px, all orange; Brand Book p20 "1.5 px stroke … White on dark · One orange highlight per icon". At ≥900px `.why-layout` stays one column — no two-column desktop layout in the source CSS. No space between `</strong>` and the text — kept. clock-3 keeps the site's double class `lucide-clock3 lucide-clock-3`.
