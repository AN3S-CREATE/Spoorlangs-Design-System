# Spoorlangs design system

The brand design system for **Spoorlangs** (spoorlangs.online — driver-powered vehicle delivery in Johannesburg and Gauteng), built from the live site's own stylesheet, markup, copy and assets.

It lives in two places that hold the same files:

- **The Claude Design System artifact** — https://claude.ai/artifact/7nj8ka81Ne5UvSpfNXk2Uo — the browsable reference (brand book, colour and type tokens, live component previews, logos, icons, imagery). Agents read it by its `project/README.md`.
- **`project/` in this folder** — the editable source of those files, published to the artifact as-is.

## Layout

| Path | What |
| --- | --- |
| `project/README.md` | The brand book: usage rules for anyone (or any agent) building for Spoorlangs |
| `project/tokens.json` | Colour, type, spacing, radius and shadow tokens (the Design System type's list format) |
| `project/fonts/` | Montserrat and Oswald variable webfonts (latin subset, SIL OFL) |
| `project/assets/Logos/` | The logo files the site ships (PNG only — no vector logo exists) |
| `project/assets/Icons/` | The lucide line icons the site uses (ISC) |
| `project/assets/Imagery/` | The site's photographs |
| `project/assets/Templates/`, `WA Kits/`, `Covers/`, `Print/`, `Pitch deck/` | Exports of the brand's own Canva designs (launch set, WhatsApp updates, covers, stationery and workwear, dealer pitch), each with its Canva edit link and a Brand Book verdict in the group's README |
| `project/components/` | `bundle.js` (React 18, `window.Spoorlangs`), `bundle.css`, `index.d.ts`, and per component a `README.md` + live `preview.html`; `Cover/` is the system's cover |
| `project/design-system.json` | The artifact's index (title, libraries, asset records) |
| `.index/` | Project context index for agents (see its README) |
| `REPO_ANALYSIS_MEMORY.md` | Working notes from the extraction |

## Updating

Edit files under `project/`, then republish them to the artifact URL above (one publish call with the changed files; `design-system.json` only when its own keys change). Values must stay traceable to the site: re-read `https://spoorlangs.online/assets/styles-*.css` when the site changes.
