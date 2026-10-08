# ServiceGrid

Hairline-ruled 1/2/3-column grid of six service cards with steel Oswald index, h3, copy and orange link.

**Use** `ServicesSection` for the home page's "Six ways to keep moving." block, or `ServiceGrid` alone wherever the six services are listed; not for /services rows or rates.

**You provide** `items: ServiceItem[]` — `title` (sentence case), `copy`, `service` slug (`href` = `/quote?service=<slug>&pickup=`). `ServicesSection` adds `eyebrow`, `title`, `lead`, `visual {src, alt}` and its own `.section > .site-shell`; bare `ServiceGrid` needs a `.site-shell`-width container.

**Do** list only the six live services (Brand Book p23 "CORE — LIVE"); keep the Steel Grey "01" … "06" index; one link per card, to /quote.

**Don't** show FUTURE lines ("Not sold, not priced, never shown as available", p23); price a card ("Never 'from R…' without the zone and band", p24); fill a card orange ("Never a full background field", p15) — hover is a hairline, 4 % tint and .35rem slide; add icons or images.

**Copy (site, index.html)**
- 01 Same-day — "Book before 10am for same-day Gauteng runners" — "Get a Same-day quote"
- 02 Auction — "Lift from the sale floor once the pin is locked" — "Get a Auction quote"
- 03 After-hours — "Named after-hours / Sunday rate"
- 04 Fleet — "Multi-unit dealer and fleet moves, same SLA"
- 05 Live pin — "Collect and drop pins confirmed on the quote"
- 06 POD — "Proof of delivery closes the job"
- "Gauteng on-wheels" / "Six ways to keep moving." / "Professional vehicle relocation for runners — powered by people, not trucks or trailers."

**States** rest · hover (`--orange` rules, 4 % tint, .35rem slide, .2s; link white) · focus-visible (orange outline) · 1/2/3 columns at <640 / ≥640 / ≥900px (odd cards ruled right at 2; every third unruled at 3, wide visual hidden).

**For Andries Liebenberg** — index 12.8 px Steel Grey (3.36:1) vs p26 "Steel Grey text: 18 px+ or decorative only"; site Oswald/Montserrat vs book Bebas Neue/Inter; p23 "Auction lift" / "Fleet collections" vs the site's titles.

**Gaps** — `.service-card>img` styled, unused; the ≥900px link override loses to the later base rule; no active or disabled state; no card spec in the book.
