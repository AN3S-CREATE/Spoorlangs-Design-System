Contact page pieces: two bordered .5rem-radius contact cards and the areas-we-serve list. Exports `ContactWays`, `ContactCard`, `ContactCardIcon`, `AreasWeServe`, `ContactActions` (CTA row).

**Use** on `/contact`, below `BackLink` and the `SectionHeading` (eyebrow "Contact · Gauteng"). **Not for** `ContactBand`, `SiteFooter` or forms.

**Consumer provides:** `cards` `{icon, label, value, href}` (WhatsApp first, then Email), `areas` in order, `heading`/`intro`/`note` overrides, `className`, two `Button`s as `ContactActions` children.

**Do**
- Keep WhatsApp first: "WhatsApp is the fastest way to reach us." (site).
- Icon orange (`text-primary`), label muted, value white 1.25rem/600.
- Link `wa.me/27662715887` (Brand Book p25); this card carries no `?text=`.
- City only — "Never a street address — clients never visit us." (p25).

**Don't**
- Add trading hours, a street line or "walk-in or workshop claims" (p25 NEVER PUBLISH).
- Add areas the site does not list; beyond them: "WhatsApp Nico for a quote."

**Copy (site, verbatim):** "Ways to reach us" (hidden) · "WhatsApp"/"+27 66 271 5887" · "Email"/"drive@spoorlangs.online" · "Areas we serve" · "We come to you — no walk-in office. Pickup and drop-off across:" · Johannesburg, Sandton, Midrand, Centurion, Pretoria, Ekurhuleni, Roodepoort & West Rand, Vereeniging & Vanderbijlpark · "Runners only — the vehicle must start and drive. Outside these areas, WhatsApp Nico for a quote." · "Get a quote"/"See guide rates".

**States:** card rest 1px `--border`; `hover:border-primary` declared but defeated by the unlayered `* { border-color }` — no visible change (source bug); focus = global `:focus-visible`, 2px `--orange`, offset 4px; chips: none; two columns from 640px.

**Settled 2026-10-08:** email `drive@spoorlangs.online` — the site and book p25 now agree. **Flags for Andries Liebenberg:** card radius 8px vs p22 "Cards 16 px"; `--border` hairline vs p22 "1–2 px steel or titanium"; icons 2px single ink vs p20 1.5px with one orange highlight; the dead hover above.

**Gaps (not in source):** no active/visited styling, third channel or light theme; `text-2xl` on the h2 is inert.
