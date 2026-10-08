# SiteFooter

Orange top-rule footer with monochrome logo, tagline, location, contact lines and meta. On all nine pages: a `1px` `--orange` rule over `--background`, `3rem` padding-block, `.footer-grid` in `.8rem` `--muted-foreground` — logo + tagline, `.footer-contact`, `.footer-meta` — `2rem` gap stacked, then `minmax(0,1.5fr) minmax(14rem,.8fr) auto`, bottom-aligned, from 900px.

**Use** once per page, last in the document after the page sections. **Don't** use it as an in-page contact block or add a fourth column.

**Consumer provides:** nothing for the live site; every prop defaults to the site's copy. Props: `className`; `logoSrc` (default: this system's upload of `assets/Logos/monochrome-white.png`); `logoAlt`; `tagline`; `location`; `whatsappHref`, `whatsappNumber`, `whatsappAriaLabel`; `email`; `hours`; `mantra`; `links` `[{label, href}]`; `currentPath` — the matching link gets `class="active" data-status="active" aria-current="page"`, as the router marks `/contact` and `/privacy`; `copyright`. No children slot.

**Do / don't (Brand Book):** Monochrome White is for "One-colour reverse, embroidery" (p10) — keep it on `--background`; the PNG carries a black ground. "City only: Kempton Park. Never a street address" (p25). WhatsApp links use `wa.me/27662715887` (p25). "Alt text on every image and logo" (p26). Tagline "always in English, title case with full stops, never glued words" (p08). Footer microcopy "Spoorlangs (Pty) Ltd" (p08). Logo at least 120 px wide (p11): `.footer-logo` is `13rem`.

**Copy (site, every page):** "Driven By People. Further Together." · "Kempton Park" · "+27 66 271 5887" · "drive@spoorlangs.online" · "Message any time · Nico replies from 07:30 · we confirm your window." · "SOUTH AFRICA KEEPS MOVING" · "Contact details" · "Privacy policy" · "© 2026 Spoorlangs (Pty) Ltd". Book p08 lists the same PRIMARY TAGLINE and SECONDARY LINE.

**States:** `.footer-contact a:hover` → `--orange`; `.footer-meta a` has no hover rule; the active link is unstyled; focus is Base's `:focus-visible`.

**Settled 2026-10-08:** email `drive@spoorlangs.online` and web spoorlangs.online, as the footer has them (supersedes book p25's `spoorlangs.co.za` and `spoorlangs.lovable.app`). **Gaps — for Andries Liebenberg:** the hours line is the site's own; book p25 forbids "invented trading hours". `--font-display` is Oswald; the book's primary is Bebas Neue (p16).
