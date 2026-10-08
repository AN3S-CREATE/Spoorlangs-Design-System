# Hero

Full-viewport photo hero: the locked look-M poster under a gradient `.hero-shade`, a `.hero-kicker`, the two-line Oswald h1 with its second line in Ignition Orange, the `.hero-secondary` line, a lead, the parity strip and the action row.

**Use** once, atop the home page (Brand Book p09: "covers, hero moments"). **Not** on inner pages or inside a section.

**Consumer provides:** `imageSrc` + `imageAlt`, `kicker`, `title` (white `<span>`), `titleAccent` (orange `<strong>`), `secondary`, `lead` (an array of lines joins with `<br/>`), `parity` `{ title, details, label }`, `actions` or `children` (`HeroAction` links — `icon` / `trailingIcon`: `message-circle` / `arrow-right` — or Button / WhatsAppButton); `titleId` (default `hero-title`) feeds `aria-labelledby`. No container: full-bleed, 100svh, own `.site-shell`.

**Do / don't**
- Two actions, site order: "Get a quote" (orange) then "WhatsApp us" — the second `.button-primary` in `.hero-actions` renders as the ghost (Titanium border, no shadow). Never two orange pills.
- h1 short (`max-width:10ch`); only the second line orange (p15: Ignition "never a full background field or full-wordmark fill").
- Parity strip verbatim: tagline "title case with full stops, never glued words" (p08) plus the contact line; "Never a street address" (p25).
- Keep "Runners only — the car must start and drive."; alt text always (p26).

**Copy (verbatim, site index.html):** "Driver-powered vehicle relocation"; "Vehicle delivery." / "Done right."; "Same-day. On wheels."; "Car delivery in Johannesburg & Gauteng · from Kempton Park" / "Runners only — the car must start and drive."; "Driven By People. Further Together." + "Kempton Park · Johannesburg / Greater Gauteng on-wheels · +27 66 271 5887 · drive@spoorlangs.online"; "Get a quote", "WhatsApp us". p08 alternate: "South Africa's Trusted Vehicle Delivery Network."

**States:** none of its own; links as in Button. ≥640px: centred, image at 54%. ≤639px: bottom-aligned, image at 68%, vertical shade, h1 `clamp(4rem,20vw,5.5rem)`, actions stacked.

**Gaps (not in source):** no video variant (poster only; p21 mp4 in Motion); `.hero-picture` unused. For Andries Liebenberg: fonts (site Oswald/Montserrat; p16 Bebas Neue/Inter). Settled 2026-10-08: email drive@spoorlangs.online, as the site has it.
