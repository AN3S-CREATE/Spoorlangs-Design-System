# CoverageSection

Bordered map box ("Gauteng, on the ground."), muted note, the coverage page's honesty list with its 3px Ignition Orange left edge, and the "Request a run" booking link — where Spoorlangs drives; pins mark areas, never drivers. Static here: the site's Leaflet + OpenStreetMap map becomes eight orange markers on the `--card` ground plus the attribution strip.

**Use** once on the home page as `<section id="coverage">` (`CoverageSection`), and on `/coverage` as `CoverageHonesty` → `CoverageMap` → `CoverageNote` inside `.site-shell.booking-page`, above the booking form. **Don't** present it as tracking, add areas outside Gauteng, or show an address (p25: "Never a street address").

**Consumer provides:** `CoverageSection` — `eyebrow`, `title`, `lead`, `note`, `bookingHref`, `bookingLabel` (defaults: the site's copy; `null` omits), `titleId`, `areas`, `mapLabel`, `className`, `children`. `CoverageMap` — `areas: [{ name, lat, lng }]` (default: the site's eight), `attribution`, `padding` ([32,32]), `markerRadius` (9), `mapRef` (element, for real Leaflet), `children` (replaces the markers). `CoverageHonesty` — `items`. `CoverageNote` — `variant: 'home' | 'page'` or `children`. `CoverageBookingLink` — `href`, label. Container: `.site-shell` (the section brings its own).

**Do / don't**
- Keep the honesty line under every map: "Pins mark the areas we cover — not live driver locations."
- "nationwide" is "brand voice and north star — not a claim of live national branches or fleet" (Brand Book p05); the site's wording is "Nationwide is our direction, not a live branch list." (site: /).
- One `.button-primary` per view — here the booking link; black label on orange, never white (p26).
- Markers: `--orange` stroke 2px, fill .35 (`coverage-marker-fill`), radius 9 — runtime, not CSS.

**Copy (site, verbatim):** "Where we drive" · "Gauteng, on the ground." · "These are the areas Spoorlangs collects from and delivers to today. Nationwide is where we are headed — not a claim of branches elsewhere." · "Based in Kempton Park" · "Outside Gauteng — WhatsApp us (no national branch list)" · "Request a run".

**States:** none of its own; runtime popup links hover → white. `areas: []` = the empty server-rendered box.

**Gaps — for Andries Liebenberg:** no tiles, zoom control or popups (Leaflet's stylesheet not in the source pack); `22rem` at every width; no loading state; fonts site Oswald/Montserrat vs book Bebas Neue/Inter (p16).
