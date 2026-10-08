# AboutLayout

Hairline-topped two-column about block (eyebrow + h3, paragraph). On the home page it is the "About Spoorlangs / Who we are" strip closing `#why`: a `--border` hairline, eyebrow and h3 in the left cell, one muted paragraph on the right from 900px, stacked below.

**Use it** once, on the home page, for the owner-driven "who we are" statement after the POD ritual. **Don't** use it as a card, hero or page-title block, and don't add a photo, founder card, stats or testimonials (none in source; Brand Book p28: "Awards, client logos, testimonials: none on file").

**Consumer provides:** `title` (h3), `eyebrow`, `body` (one paragraph) or `children`; optional `id` (default "about"), `anchorId` (default "nico" — the hidden `legacy-anchor` span for old hash links; `null` omits it), `headingId`, `className`, `shell` (default true: `site-shell`). Container: the site's `section#why.section.why-section`, after `.site-shell.pod-layout`.

**Do / don't**

- Keep `shell` on: the hairline spans the 1180px `.site-shell`.
- One paragraph, sentence case; `.about-layout>p` caps it at 50rem.
- Name the owner "Nico" (Brand Book p25: "Public owner name: Nico.").
- No "insured"/GIT claims, invented hours or street address (Brand Book p24–p25).
- The hairline is `--hairline` in `--border`, never orange.

**Copy (site, verbatim):** "About Spoorlangs" / "Who we are" / "Spoorlangs is owner-driven: Nico is the owner and first driver. Overflow is handled by vetted freelancers on the same SLA. This is not a call centre, and the contracting party is always Spoorlangs." The preview also sets Brand Book p03's bios verbatim.

**States:** none — static; one breakpoint (≥900px: `minmax(15rem,.55fr) minmax(0,1.45fr)`, `align-items:start`).

**Gaps — for Andries Liebenberg:**

- No fetched page links to `#nico` or `#about`; the anchor's purpose is not in source.
- Brand Book p17 has no h3 level; the h3 is the site's generic `clamp(1.5rem,5vw,2.2rem)`.
- Hairline colour: site `--border` (#2b2e34, 1.54:1 on black) vs Brand Book p22 "1–2 px steel or titanium".
- Owner naming: site "Nico"; Brand Book p03/p25 print "Nico Strydom" while p25 rules "Public owner name: Nico."
