# PricingTable

Zone-rate table in a 35%-titanium .75rem-radius scroll wrapper with uppercase headers and orange rates. `GuideRates` is the /quote compact variant (`.guide-rates`); `PricingNotes` the `.pricing-notes` list beneath.

**Use** for the published guide rates by zone and service speed (/pricing, /quote); **not** for vehicle categories (VehicleCard), per-km tariffs or "from R…" without zone and band.

**Consumer provides:** `rows` `{ zone, note?, standard, rush, afterHours }` (rates as formatted strings); `columns`; `caption`; `notes`; `className`/`id` on the wrap; the section shell (FaqList's `FaqGroup`, "Zone rates"). `GuideRates` takes `heading`, `headingSuffix`, `footnote`, `headingId`.

**Do / don't**
- "Always say "excl. VAT" and "guide" — final price on quote" (Brand Book p24): keep the caption, notes and compact heading.
- "Format: R1 350 (space as thousands separator)"; "Never "from R…" without the zone and band" (p24).
- Rates Ignition Orange on Asphalt Black (8.04:1); zones white; headers, notes Titanium Silver.
- "Insurance: no R3m / GIT / "insured" claims on any pricing asset" (p24).
- Keep the scroll wrap (min-width 34rem; 31rem compact); rates never wrap.

**Copy (verbatim, /pricing):** Local: "Within the Johannesburg metro" — R950, R1 350, R1 650; JHB–PTA: "Johannesburg to Pretoria corridor" — R1 850, R2 450, R2 950; Greater Gauteng: "Beyond the metro, inside Gauteng" — R2 450, R3 150, R3 750. Notes: "All rates are guide rates and exclude VAT. Spoorlangs is not VAT registered — no VAT is added." "After-hours and Sunday runs are a named service with their own rate, not a 24/7 promise." "Outside these corridors there is no per-km tariff — WhatsApp Nico and we will quote you honestly." /quote: "Johannesburg–Pretoria"; "After-hours / Sunday = named rate." Brand Book p24 writes "Local (under 25 km)" and "JHB–Pretoria" — for Andries Liebenberg.

**States:** none (no hover, sort, selection); horizontal scroll only.

**Gaps (not in source):** `tbody th` colour (inherits white); compact table: no caption or `scope`; `.guide-rates thead th` 9.92px breaks the 12px caption floor (p26); p24's volume/pilot lines are absent.
