Fixed blurred 68%-black header with titanium hairline, logo, uppercase nav links, compact quote button. The top bar of every spoorlangs.online page: `position:fixed`, `--background` at 68 % over `backdrop-filter: blur(22px) saturate(1.25)`, a 1 px `--titanium` 16 % hairline, the Main Full · Dark logo, seven `--titanium` uppercase links (Montserrat .78rem/700, orange on hover) and the compact primary "Get a quote".

**Use** once per page, first inside the page shell, on asphalt or over the hero. **Don't** stack a second bar, add icons or a hamburger (none in source), or style the active link (unstyled in source).

**Consumer provides:** `logoSrc` (the upload of `assets/Logos/main-full-dark.png`; solid black ground), `items` `[{label, href, active}]` in site order, `homeActive` / `quoteActive` for the current route, optional `onNavigate(item, event)`, and top padding on the page below (site: `8rem` hero/quote, `4.5rem` services). `children` replaces links + button (compose `NavLinks` / `NavLink`).

**Copy (site, verbatim):** "Services", "Coverage", "Why us", "Pricing", "FAQ", "Book", "Contact", "Get a quote"; `aria-label` "Primary navigation", "Spoorlangs home", "Page sections"; logo `alt` "Spoorlangs".

**Do:** keep the quote button the only primary in the bar; black label on orange (Brand Book p26 "Asphalt on Ignition 8.0:1 Pass — buttons"); logo at or above the book's 120 px digital minimum (site: `clamp(8.25rem,20vw,10.5rem)`, 7.75rem under 640 px). **Don't** put the full-colour logo on orange, recolour the wordmark or add glows (p12–p13).

**States:** nav-link hover → `--orange` (≥ 900 px, no transition); focus → Base's 2 px orange outline; current route → `class="active" data-status="active" aria-current="page"`, unstyled. Below 900 px the links are `display:none` — logo + "Get a quote" only.

**Gaps / discrepancies for Andries Liebenberg:** no mobile menu, scrolled state or skip link in source. Brand Book p10 assigns "Horizontal — Nav bars" and "Dark Mode — Digital headers on asphalt"; the site's header uses Main Full · Dark ("Primary · covers, hero") — the site's choice. Nav hover has no transition (p21: 200–400 ms). Titanium contrast over imagery: not in source.
