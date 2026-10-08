# Field

Grid field: uppercase Titanium Silver label over a black, .375rem-radius input, select or textarea with an Ignition Orange focus ring — plus the error line, consent checkbox and confirmation box of the quote, coverage and book forms.

**Use** inside `.quote-form` (QuoteForm) for every typed answer, `ConsentField` once at the foot; **not** for the corridor chips (CorridorChips) or the "Describe your move" textarea (DescribeMove).

**Consumer provides:** `id` (label `for`, default `name`), `label`, `control` (`input` | `select` + `options` | `textarea`), `type`/`inputMode`/`autoComplete`/`placeholder`/`rows`/`maxLength`, `wide` (`.field-wide`), `error` (adds `<span role="alert">`, `aria-invalid="true"`), `validated:false` (no `aria-invalid`). `ConsentField`: `id`, the sentence as `children` with its `/privacy` link, `utilities` for the book-page variant. `FormError`, `QuoteConfirmation`: `children`; the confirmation sits in the `.quote-form` grid.

**Do / don't**
- Labels in sentence case (CSS uppercases); "(optional)" in the label — no required marker on the site.
- Placeholders are examples: "e.g. Toyota", "+27821234567".
- Errors in the site's voice: "Where should the vehicle be collected?" (quote-schema). Never colour alone — the alert is text, not a red border (Brand Book p26).
- Consent sentence verbatim per form; forms are `noValidate`, validation runs in the client.

**Copy (verbatim, site):** "Service", "Collection point", "Delivery point", "Vehicle make", "Vehicle model", "Year (optional)", "Your name", "Contact number", "Email address", "Anything else? (optional)"; rows "Same-day" … "POD", "Choose…"; consent "I agree that Spoorlangs may use these details to contact me about this quote, as set out in the privacy notice."

**States:** focus-visible — orange 1px border + `0 0 0 3px` orange-18 % halo, outline removed, .2s (Brand Book: 200–400 ms); error — orange .76rem/700 line. The book consent lacks `.consent-field`: the generic rules give it an uppercase label and a 3rem bordered checkbox — source inconsistency, kept.

**Gaps (not in source):** `.form-error` and `.quote-confirmation` markup and copy (element names system-given); the consent alert's placement; invalid-border, disabled and helper-text states; Montserrat on the site vs Inter in the Brand Book (p16) — for Andries Liebenberg.
