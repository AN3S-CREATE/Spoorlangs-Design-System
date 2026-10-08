# Architecture

## What this repository is

A **brand design system** for Spoorlangs, extracted from the live marketing site (spoorlangs.online) and published as a Claude "Design System" artifact. It is not an application: there is no build step, no package manifest, no tests. The files under `project/` are the system; the artifact serves them read-only and renders the previews.

## Source → system

```
spoorlangs.online (React + Tailwind v4, oklch tokens, Montserrat/Oswald, lucide icons, PNG logos)
   │  fetched 2026-10-08: styles-BpVU00Sv.css, 9 server-rendered pages, JS chunks, logos, photos
   ▼
scratchpad source pack (site/, text/, brand-assets/, source-notes.md, inventory/*)
   │  multi-agent extraction, adversarial verification, writers, reviewers
   ▼
project/  ──────────────────────────────────────────────────────────────────────┐
  README.md            brand book: usage rules naming tokens, styles, assets    │
  tokens.json          color (1 theme) · type (2 fonts, 2 families) · spacing   │ published as-is to
                       · radius · shadow — list format the artifact page reads  │ https://claude.ai/artifact/7nj8ka81Ne5UvSpfNXk2Uo
  fonts/               Montserrat + Oswald variable latin woff2                 │ (root = this folder,
  assets/Logos|Icons|Imagery/  uploads (blob ids in design-system.json)         │  files = project/**)
  components/          bundle.js (window.Spoorlangs), bundle.css, index.d.ts,   │
                       lib/react*.js, <Comp>/README.md + preview.html, Cover/   │
  design-system.json   the artifact index: title, libraries, assetGroups        │
──────────────────────────────────────────────────────────────────────────────────┘
```

## How the pieces relate

- `tokens.json` is the single source of every colour, length and shadow. The artifact page compiles it to `tokens.css` (`--name` custom properties plus a `.style` class per type style); `bundle.css` references those `var(--name)`s and keeps literal values only where the site had no variable.
- `bundle.js` is one classic script: an IIFE reading `window.React`/`window.ReactDOM` (React 18.3.1 in `components/lib/`) and assigning `window.Spoorlangs = { Button, … }`. Components render the site's exact markup and class names, so `bundle.css` (copied verbatim from the site's component CSS) styles them unchanged.
- Each `components/<Comp>/preview.html` is a complete small document; the artifact frame preloads tokens.css, fonts, bundle.css, the libraries and bundle.js, then runs the preview's one inline script. `components/Cover/preview.html` is the system's cover (palette blocks + pattern + name), kept bare (no README beside it).
- Assets under `assets/<Group>/` are uploads; `design-system.json` records each as `assetGroups.<Group>.files.<name> = {name, blob, size, type}`. Previews reference them as `/_blob/<id>`.
- `README.md` plus `assets/<Group>/README.md` are the only prose a consuming agent needs; component READMEs state what the consumer provides.

## Constraints and conventions

- Values stay traceable to the site. A re-sync re-reads the site's stylesheet and copy and merges (keeping usage notes and page edits), never rebuilds.
- One theme (`dark`). Text colours' usage notes name their grounds and contrast; two source pairs that miss 4.5:1 are kept and flagged (white on copper hover; steel numerals).
- Publishing: one Artifact publish with `root` = this folder, `file_path` = `project/design-system.json`, `files` = every other changed `project/**` path. Never publish `index.html`, `SKILL.md` or `artifact-type/`.
- Local checks: `scratchpad/tools/validate-tokens.js` (grammar), `compile-tokens.js` (local tokens.css for the harness), `assemble-bundle.js` (parts → bundle), `harness-server.js` (renders previews like the artifact frame).
