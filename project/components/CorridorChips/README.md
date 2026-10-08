Fieldset with an uppercase Titanium Silver legend and a wrapped row of pill chips: the "Collection corridor" picker that opens the quote form on /quote and the booking request on /coverage — three `<button>` chips and one `<a>` chip that hands anyone outside Gauteng to WhatsApp.

**Use it** as the first, full-width row (`field-wide`) of `.quote-form`, above "Service". **Not for** navigation, filters, tags or anything needing a selected state (the site has none).

**Consumer provides:** `legend` (site: "Collection corridor"); `items` as `{ label, href?, onClick?, disabled? }` or `CorridorChip` children; `onSelect(item, index, event)` for button chips (the site's chips fill the "Collection point" field; that wiring is yours); `className`; `wide: false` drops `field-wide`. `href` renders the site's `<a target="_blank" rel="noreferrer" type="button">`; otherwise `<button type="button">`.

**Do / don't**
- Keep the site's set and order: "Johannesburg", "Pretoria", "Greater Gauteng", then the outbound chip.
- The outbound chip stays a wa.me link with the site's prefilled text ("wa.me/27662715887 for links and QR codes", Brand Book p25).
- Type the legend in sentence case; CSS uppercases it (`--titanium`: "Titanium on Asphalt 11:1 Pass", p26).
- Ink `--titanium` on `--background` with a `--border` hairline; hover: `--orange` border, `--foreground` text, background unchanged.
- Never add a pressed or selected look: not in source.

**Copy (site, verbatim):** "Collection corridor"; "Johannesburg", "Pretoria", "Greater Gauteng", "Outside Gauteng — WhatsApp us".

**States:** rest; hover (`.15s` colour transition); focus-visible = Base's 2px orange outline plus the 1px `--ring` ring (`focus-visible:outline-none` is layered and loses); disabled (opacity .5, `cursor: not-allowed`; Tailwind, never rendered on the site); `shadow-sm` on every chip.

**Flags for Andries Liebenberg:** chips 2.25rem (36px) tall against "Tap targets: 44 × 44 px minimum" (p26); .15s against p21's 200–400 ms; Montserrat where p16 names Inter; `<a type="button">` mixed semantics (source).

**Gaps (not in source):** selected state / `aria-pressed`; error state; icon chips; `.border-input` is not emitted by the site build (`--input` undefined), the custom rule supplies the colour.
