# FaqList

Native `<details>`/`<summary>` accordion with hairline rows (`--border`), 800-weight questions and an orange "+" that turns 45° when a row opens — straight answers before the wheels turn. Exports `FaqSection`, `FaqGroup`, `FaqList`, `FaqItem`, `FaqCta`.

**Use** `FaqSection` for the home `#faq` block; `FaqGroup` for each titled group on /faq and /pricing (orange uppercase `h2.faq-group-heading`); `FaqList`/`FaqItem` elsewhere; `FaqCta` to close a page with a lead and two CTAs. **Not** for navigation or form help text.

**Consumer provides** `items: [{ question, answer, open? }]` (verbatim site copy), `eyebrow`/`title`/`sub`/`link` (section), `heading`/`id` (group; id defaults to the site's "faq-…" slug), `lead` + `primary { href, label }` + `whatsapp { label }` (CTA), `onToggle`, `className`, `children`. The "+" span is automatic.

**Do / don't**
- Questions sentence case ending "?"; answers plain facts: "Runners only — vehicles that start and drive."
- Keep the honesty lines: "Nationwide is our direction, not a live branch list."; never "insured"/GIT claims.
- Rates say "guide" and "excl. VAT" — Brand Book p24: "Always say "excl. VAT" and "guide""; the site's FAQ wording is "All published guide rates exclude VAT."
- Rows are independent native `<details>`: no exclusive accordion or animated height.
- The WhatsApp CTA is always `.button-primary` with `aria-label="WhatsApp +27 66 271 5887"`.

**Copy (verbatim, site).** Home: "Straight answers", "Before the wheels turn.", "WhatsApp us for anything not covered here.", "How does POD work?" with "POD is Proof of Delivery. The job is closed when you have proof of delivery, not when we say so." /faq groups: "What Spoorlangs does", "Coverage and availability", "Booking, quotes and rates"; buttons "See guide rates", "Ask on WhatsApp".

**States:** closed; `details[open]` rotates the "+" over .2s (Brand Book p21: 200–400 ms); summary `cursor:pointer`; focus-visible: Base's orange outline; no hover. At ≥900px summaries .8rem, answers .84rem/1.55.

**Gaps / flags for Andries Liebenberg.** No open-by-default or animated behaviour in source. `.button-primary` and `.service-card-link` belong to Button and ServiceCard. `.pricing-cta-row` paints two primaries side by side. Oswald (site) vs Bebas Neue (Brand Book p16); .8rem desktop summaries undercut the book's 16px body minimum (p26).
