# Repository Analysis State — Spoorlangs Design System

## Current Analysis Phase & Progress
Phase 4: Published. The system (tokens, README + content.md + website.md, 4 asset notes, 29 components with READMEs and live previews, cover, bundle, React runtime, 4 fonts, index) is live as version 5 of https://claude.ai/artifact/7nj8ka81Ne5UvSpfNXk2Uo with 44 uploads (16 logos/derivatives, 14 icons, 12 photographs, 2 motion files). Both workflows completed (wf_5e4d9482-81f site inventories; wf_2e23a2b3-236 brand book, tokens, writers, review). Next, when asked: Andries settles the discrepancies listed in `project/README.md` §9; re-sync when the site or the book changes.

## Key Architectural Insights Discovered
- The site is a server-rendered React build (Vite/rolldown) on Tailwind v4 with a shadcn-style `:root` token set in oklch, plus ~78 KB of hand-written component CSS (`.button-primary`, `.site-header`, `.eyebrow`, `.field`, `.service-card`, `.pricing-table`, `.faq-*` …).
- One theme only: black `--background: oklch(0% 0 0)`, white foreground, orange `--primary: oklch(72.3013% .189673 50.544)` (also `--orange`, `--ring`), `--copper` (accent), `--titanium` (secondary), `--steel`; card `oklch(10.5% .004 260)`, muted `oklch(17% .006 260)`, border `oklch(30% .012 263)`.
- Fonts: Montserrat 400–900 (body, `--font-sans`) and Oswald 500–700 (display, `--font-display`), both via Google Fonts; headings are Oswald 700 uppercase with line-height 0.95; eyebrows are Montserrat 900 uppercase with 0.15em tracking in orange.
- Buttons are 999px pills: primary = orange fill, black text, Montserrat 800, orange glow shadow; secondary = 75% black fill, titanium 1px border, white text.
- Icons: lucide-react line icons (message-circle, arrow-right, arrow-left, circle-check, mail, map-pin, clock-3, car-front, calendar-check, wand-sparkles, users, moon, gavel, file-check-corner).
- Logos on the site: `Main-Full-Logo-Dark-Background.png` (1920×1088 RGBA, orange S + speedometer arc + silver wordmark), `Monochrome-White.png` (2000×2000 on solid black), favicon 64px, apple-touch-icon 180px, Facebook cover 820×312 with tagline. No SVG logo exists on the site.

## Files Deeply Reviewed
- Scratchpad `site/index.html`, `site/page-*.html`, `site/styles.css` (split into `base-layer.css` and `custom.css`), `site/text/*.txt` (plain-text copy of every page), `site/js/*.js`.
- Artifact type references: `artifact-type/reference/format.md`, `craft.md`, `cover.md`, `from-code.md`, `demo.json` (worked example).

## Open Questions & Areas Needing Investigation
- Q1 (answered 2026-10-08): no vector logo exists anywhere — Brand Book p09/p28 lists "Vector logo masters (SVG / PDF)" as open decision 05. The approved set is 13 PNGs (14 Sep 2026) at `C:\Users\creat\Downloads\Spoorlangs Logo\` / `D:\Work\Repositories\Spoorlangs\Branding\Spoorlangs Logo.zip`; all on solid black or white; Monochrome Black held back (misspelled).
- Q2: light theme — the book's open decision 01 ("Light / print version of this book for long documents?") is unresolved; the site is dark-only. The system stays single-theme and flags it.
- Q3 (for Andries): web address (book: spoorlangs.lovable.app until the switch is confirmed; site live at spoorlangs.online) and email (site drive@spoorlangs.online; book names spoorlangs.co.za as email domain, its field is corrupted).
- Q4 (for Andries): the brand faces (Bebas Neue / Inter) are not on the site, which uses the alternates (Oswald / Montserrat). Should the web move to the primaries?

## Sources on record
- Brand Book v1.0 · 8 Oct 2026 — Canva folder "Spoorlangs - Brand Book" (FAHXYbsI0Nw), 28 designs; text saved verbatim at scratchpad `brandbook/brandbook-text.md`; 20 page images in `brandbook/`. Photo Shoot Brief (DAHXaO93UJY) saved as `brandbook/photo-shoot-brief.md`. Logo Animation designs DAHXaCmpHJ0 / DAHXaB4Tht0 (not exported).
- Earlier concept kit `D:\Work\Repositories\Development\spoorslags` (10 Sep 2026; orange #F36B16, text-based SVG "logos") — superseded by the approved set and the book; not used.

## Decisions Made & Rationale
- Decision: build the deliverable as a Claude "Design System" artifact (https://claude.ai/artifact/7nj8ka81Ne5UvSpfNXk2Uo) kept in files under `project/`, and mirror the same files into this working directory.
  Rationale: the user asked for "a Design System from Claude"; the typed artifact is the browsable reference other agents read, and the local copy is the user's editable source.
- Decision: tokens use the site's own names and exact oklch values; nothing is re-tinted.
  Rationale: craft.md "exact values from real sources"; matches the user's earlier 360 Vision Events system which "records only what the site actually uses".

## Next Immediate Steps
1. Run the extraction/build workflow (inventory → adversarial verify → write files → review).
2. Upload logo PNGs as artifact assets, publish `project/` files, write the cover last.
3. Mirror files into the working directory, create `.index/`, update this memory file.

## Patterns & Recurring Issues Noticed
- Pattern: copy is staccato, sentence case with full stops, South African English, "runners only", "Proof of Delivery (POD)", WhatsApp-first CTAs, "Nico replies from 07:30".
- Recurring issue: some site fetches time out intermittently (HTTP 000); retries succeed.

## Session Log
- [2026-10-08] Protocol initialized. Created the Design System artifact from the type, fetched site sources and logos, captured computed styles. Memory file created.
- [2026-10-08] First workflow extracted and verified the five site inventories; the session ended before the components corrector finished. The user supplied the Brand Book pages; the full 28-page text was read from Canva, the approved logo set and hero loop found on disk, fonts fetched, assets uploaded.
- [2026-10-08] Second workflow (41 agents): brand-book inventory verified (24 fixes), components catalogue corrected (16), merged tokens.json validated, docs/cover/29 components written, 24 review issues (21 applied, 3 decided by the orchestrator: bare `page` flags dropped, cover name kept caps-by-CSS, Tailwind theme vars stay in Base). Bundle assembled (90 exports), previews render-checked locally, published in three calls as versions 3–5. `.index/` completed.
- [2026-10-08] Committed and pushed the system to https://github.com/AN3S-CREATE/Spoorlangs-Design-System (main, ed2e869). The user shared 21 launch/WhatsApp-kit images; 15 were matched to their Canva designs, exported, uploaded and committed as the Templates group on branch `templates-launch-set` (PR #1). A third workflow (wf_7a18de9e-ba3, 48 agents) analysed each against the Brand Book: 9 fix-before-reuse, 6 do-not-reuse (AI-rendered wordmarks on the Wave-1 posts, fake stars and a serif title on the Instagram launch post, a typed wordmark on the edge-to-edge post), none approved as exported. Copilot review on PR #1 flagged the missing Templates README and the unregistered index group; both fixed.
