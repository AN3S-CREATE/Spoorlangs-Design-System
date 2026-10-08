# DescribeMove

Card panel with a 40 %-orange border: eyebrow, `h2`, muted copy, a textarea, the outlined "Fill in the form for me" button and orange summary / error lines — /quote's "Quicker option" above the quote form.

**Use** once, on /quote, directly above `.quote-form`. **Not** as the quote or contact form, nor without a send button beneath — it never sends.

**Consumer provides:** `onFill`, textarea `value` / `defaultValue` / `onChange`, `summary`, `error`, `disabled`; optional `className`, `textareaProps`, `icon` / `iconClassName`. All copy props and both ids default to the site's. Container: `.site-shell`.

**Do / don't**

- Keep the `sr-only` label.
- Button stays `.button-secondary`; the orange primary is "Send on WhatsApp" below it.
- Copy direct, sentence case — Brand Book p07: "We'll collect by 14:00."
- Never claim it sends, stores or insures: "Nothing is stored on this page." (site).

**Copy (site, verbatim):** "Quicker option" · "Describe your move" · "Type it in your own words and we will fill in the form below for you. Check every field before you send it — nothing is sent until you press a send button." · label "Describe your vehicle move" · placeholder "I bought a 2019 Toyota Corolla at the auction in Boksburg and need it driven to my house in Sandton on Thursday morning." · "Fill in the form for me".

**States:** textarea focus — orange border, 3 px 18 % halo; button `:disabled` — opacity .6, `cursor:progress`; `.describe-move-summary` orange .85rem/700; `.describe-move-error` orange .82rem/700; `.spin` 1 s rotation.

**Gaps — for Andries Liebenberg:**

- Summary, error and loading markup and copy: not in the source pack; the `<p>` elements and `iconClassName` are system-given; no `role` / `aria-live` in source.
- Both result lines orange — Brand Book p26 "Never colour alone".
- `maxLength 1500`, no counter.
- Quirk: `.describe-move>p` mutes the eyebrow.
- `h2` Oswald 700, 33.6 px max; Brand Book p17 HEADING 2: Bebas Neue "32 px web", orange.
