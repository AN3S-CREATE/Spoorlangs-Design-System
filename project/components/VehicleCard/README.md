# VehicleCard

1→2-column grid of .75rem-radius titanium-bordered cards with uppercase h3 and muted copy — the /pricing "What we move" vehicle classes.

**Use** `VehicleSection` for the /pricing "What we move" block; `VehicleGrid` or a lone `VehicleCard` for vehicle classes elsewhere. **Not** for services, rates or anything needing a price, icon or link.

**Consumer provides:** `items` (`{title, description}`) or `VehicleCard` children; `VehicleSection` adds `id` ("vehicles-title"), `heading`, `note` (the `.lead` line). Cards are direct children of the grid.

**Do / don't**
- Cards are Brand Book p24's categories: CORE "Sedans & hatchbacks", "SUVs & bakkies"; ASK ONLY "Luxury / classic", "Vans & LDVs". NOT TAKEN ("Non-runners, tow-only") is the `note`, never a card.
- Title in sentence case; the CSS uppercases it.
- No price on a card ("Never 'from R…' without the zone and band", p24); no "insured" / GIT claims.
- No background: a hairline on asphalt. Never fill it orange (p15 "Never a full background field").
- Title `--orange` (8.0:1 on asphalt, p26), copy `--titanium` (11:1).

**Copy (site, page-pricing.html, verbatim):** "What we move" · "Sedans & hatchbacks" / "Core work. Standard zone rates apply — the vehicle must start and drive." · "SUVs & bakkies" / "Same zone bands. The quote may adjust for size or height — confirmed before you book." · "Vans & LDVs" / "Moved as runners only — they must start and drive. No separate light-commercial product yet." · "Luxury & classic" / "Specialist moves. No published rate — WhatsApp Nico and we will quote you directly." Note: "Runners only — the vehicle must start and drive. Non-runners, tows and trailer work fall outside what we do."

**States:** none — not a link. One column below 700px, two from 700px.

**For Andries Liebenberg** — radius: site .75rem vs p22 "Cards 16 px"; border: 1px titanium at 30% vs p22 "1–2 px steel or titanium"; order: site "Vans & LDVs" before "Luxury & classic", p24 the reverse; fonts: Oswald/Montserrat vs Bebas Neue/Inter.

**Gaps** — no icon, price or link slot; no hover state.
