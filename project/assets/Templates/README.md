# Templates — launch set and WhatsApp kit

Fifteen PNGs exported 2026-10-08 from the brand's own Canva designs (folders "Launch Editable Extra" and "WA Extra"): edit in Canva, re-export at the same size, replace the file. Brand Book p27 lists "Website · WhatsApp kit · rate card · Email signature · Letterhead A4 · A5 leave-behind · Business card · Runner ID · Vehicle branding (target) · Workwear polo" as in use and "social master in Canva" as NOT BUILT YET — the squares are not that master. Its rule: "All templates follow this book: asphalt + ignition, real approved logos, Kempton Park city only, no fake stats." No file passes as exported. Colours were sampled with a Node PNG decoder.

## The post anatomy

The four 1080 × 1080 squares share one pattern:

1. **Ground** — `asphalt-black`, ≈38 px left margin; all four carry a dim radial orange glow (#261000–#462100), off palette (open, p13/p18). Each hides a stray ≈113 × 45 px noise block top-left; delete it.
2. **Logo** — `main-full-dark.png` top-left, ≈355–410 px wide at y ≈100–330, on flat #000000 — behind a glow its ground shows as a ≈408 × 229 px box (p12). One wordmark-S height (≈30 px) clear (p11).
3. **Eyebrow** — `brand-kicker`, `ignition-orange` semibold caps ≈28 px (p17 "tracked caps"; untracked here); "TRUST FORMAT" and "SERVICE CTA" are design names, not copy — delete.
4. **Headline** — `brand-display` (Bebas Neue caps) ≈85–93 px (p17: Display 120–160 px slides; Heading 1 72 px), two lines: `white`, then `ignition-orange`; no p22 ignition rule (`ignition-rule-width` × `ignition-rule-height`) — open.
5. **Lead** — `brand-lead`, sentence case, `titanium-silver` ≈30 px.
6. **Content block** — left-rule cards (1008 × ≈104 px, #101010 fill, 8 px orange bar), outlined chips (≈44 px pills, steel hairline), step boxes (≈205 × 73 px, orange outline, "1 Pin" / "2 Drive" / "3 POD") or a quote card; Service CTA adds a 505 × 72 px orange button. Per p22: `radius-card`, 1–2 px `hairline` in `steel-grey`/`titanium-silver`, `radius-rule` bars, `step-16` gaps, `radius-pill` buttons; unfilled cards follow the book's own page layout (not a stated rule).
7. **Footer band** — full-width 3–5 px `ignition-orange` rule at y ≈990 (book has no social spec — p27; recommended: 5 px `ignition-rule-height`; `accent-4` is the site's 4 px border-left token, not a book value) over a #080808 band (use `asphalt-black`): "Driven By People. Further Together." in `titanium-silver` and "WhatsApp +27 66 271 5887" in `white` bold, ending 5–9 px from the edge — lift it.

**Story** (`story-quote.png`, 1080 × 1920): `main-full-dark.png` top-centre ≈632 px wide; an orange opening-quote glyph; two centred `brand-display` lines (white); an orange rule; "SOUTH AFRICA KEEPS MOVING" tracked caps; a hairline facts chip; an orange CTA (make it a pill); email; a typeset "SPOORLANGS" sign-off (use `wordmark-only.png`). The quote slot takes the brand's own lines; no testimonials, ratings or stats without written permission (p28) — none on file; no fake stats (p27).

**WhatsApp kit.** QR card (`wa-qr-status-story.png`, 1080 × 1920): typed "SPOORLANGS" masthead (drop, p13) over the kicker "STATUS / STORY"; `main-full-dark.png` ≈329 px wide; "SCAN TO WHATSAPP" ≈68 px white over the tagline; a centred ≈604 px QR card encoding https://wa.me/27662715887; phone, email, a pill chip; a full-width orange CTA "GET A QUOTE ON WHATSAPP" (make it a pill); footer "Launch · visual_gate=final" (delete). Rate table (`wa-rate-card-square.png`, 1080 × 1080): 10 px orange top band; `main-full-dark.png` centred 177 px; "GUIDE RATES · EXCL. VAT" ≈47 px white; a table card (1 px #262a30 hairline; "ZONE" and the Standard prices orange; figures as p24); two orange-outlined chips, two captions, a ≈340 px void. Footer strip: 4–5 px orange rule over a #08090b bar — white tile with `single-colour-flame-s.png`, "WhatsApp  +27 66 271 5887" white bold, "drive@spoorlangs.co.za" titanium, "Nico · Owner" orange right.

**Email signature** (`email-signature-launch.png`, 720 × 420 sheet "SPOORLANGS · EMAIL SIGNATURE · LAUNCH"): on #f5f5f7, a 641 × 161 px white card with a 1 px `titanium-silver` hairline: a 72 px tile (`icon-only.png` in a black rounded frame) · 16 px · a 4 × 105 px vertical `ignition-orange` rule · 16 px · five oblique lines: "Nico" (orange ≈19 px), "Owner · Spoorlangs · Johannesburg on-wheels" (`steel-grey`), "Driven By People. Further Together." (black), "SAME-DAY · AUCTION · AFTER-HOURS · FLEET · LIVE PIN · POD" (steel caps), "WhatsApp +27 66 271 5887" (orange) · "drive@spoorlangs.co.za" (black) — ≈11–15 px. Spec lines: "Paste block: signature.html · Icon: signature-icon-72.png (host or CID)", "Asphalt #000000 · Ignition #FF7A00 · WA +27 66 271 5887 · drive@spoorlangs.co.za", "No street NAP · no live website URL · Launch-approved (visual_gate=final)".

## The 15 files

| File | Canva design · edit | Format | What it is | Verdict | Fixes |
|---|---|---|---|---|---|
| `social-trust-format.png` | "Spoorlangs - Social template Trust" · [edit](https://www.canva.com/d/sp5ZQCTeIugIJGW) | 1080² | proof cards | fix-before-reuse | drop "TRUST FORMAT"; glow off logo; lift footer |
| `social-service-cta.png` | "Spoorlangs - Social template Service CTA" · [edit](https://www.canva.com/d/o-blWfTnbOuu5k-) | 1080² | chips, button | fix-before-reuse | drop "SERVICE CTA"; pill CTA; "Get a quote on WhatsApp" |
| `social-nico-factor.png` | "Spoorlangs - Social template Nico factor" · [edit](https://www.canva.com/d/OjDN4CiIcYDj_j8) | 1080² | quote, avatar ring | fix-before-reuse | crop `icon-only.png`'s white ground; ring clear |
| `social-behind-the-wheel.png` | "Spoorlangs - Social template Behind the wheel" · [edit](https://www.canva.com/d/yIWi9MDhUUrZUTi) | 1080² | three-step process | fix-before-reuse | delete ten stray rules; kicker ≥30 px clear of the lockup (now 17 px) |
| `wave1-01-coming-soon.png` | "Spoorlangs - Wave1 post 01 Coming soon" · [edit](https://www.canva.com/d/06bXjk5Tm9O269i) | 2048² | "SOMETHING BIG" teaser | do-not-reuse | AI lockup; amber; racing render |
| `wave1-02-milestone.png` | "Spoorlangs - Wave1 post 02 Milestone" · [edit](https://www.canva.com/d/rRgaVnVqY-addn-) | 2048² | "8+ YEARS. ONE MISSION." | do-not-reuse | AI wordmark; navy render; attribute "8+" |
| `wave1-03-contact.png` | "Spoorlangs - Wave1 post 03 Contact" · [edit](https://www.canva.com/d/CMvGFl0zrHh3L1p) | 2048² | contact card | do-not-reuse | AI lockup; amber footer; p25 block |
| `wave1-05-fleet.png` | "Spoorlangs - Wave1 post 05 Fleet" · [edit](https://www.canva.com/d/tw_F8gGoAUVPBv8) | 2048² | "FLEET COLLECTIONS" | do-not-reuse | AI lockup reads "POORLANGS"; panel van |
| `delivery-post-live-delivery.png` | "Spoorlangs - Delivery post" · [edit](https://www.canva.com/d/K7vwQXws4Htk4H7) | 2048² | "SAME-DAY. / ON WHEELS." | fix-before-reuse | replace band (drift marks); Bebas headline; pill CTA |
| `story-quote.png` | "Spoorlangs - Story quote" · [edit](https://www.canva.com/d/qYKpCQVWuYAb97k) | 1080×1920 | tagline pull-quote | fix-before-reuse | logo on flat black; stray lines; pill CTA |
| `edge-to-edge-delivery.png` | "Spoorlangs Edge-to-Edge Delivery Image" · [edit](https://www.canva.com/d/KIUdWrz8e5nWZkc) | 1080×1350 | light-trail post | do-not-reuse | typed wordmark; #FE4D00; "RUNNERSRunners" |
| `instagram-launch-post.png` | "Instagram Post - Spoorlangs Launch" · [edit](https://www.canva.com/d/BlZAFa5hOvulhld) | 1080×1350 | stars, handover cards | do-not-reuse | delete stars; approved lockup; clipped band |
| `email-signature-launch.png` | "Spoorlangs - Email signature" · [edit](https://www.canva.com/d/TzAQC9O5Wicc_A5) | 720×420 | signature sheet | fix-before-reuse | orange on white 2.61:1 (p26); Horizontal lockup (p10); 16 px copy; p25 block |
| `wa-qr-status-story.png` | "Spoorlangs - QR status story" · [edit](https://www.canva.com/d/ZTFAjkT3V8WWkrc) | 1080×1920 | QR to WhatsApp | fix-before-reuse | gate label; masthead; pill CTA |
| `wa-rate-card-square.png` | "Spoorlangs - Rate card square" · [edit](https://www.canva.com/d/ZMY6J4iDqEokMYL) | 1080² | p24 rate table | fix-before-reuse | "Local (under 25 km)"; "agreed SLA"; logo ground |

## Do not reuse / fix first

- **Not an approved logo** — p13 "never: redraw, retype or AI-generate the wordmark"; p27 "real approved logos". Wave-1 posts: chrome/neon renders — rounded bevelled letterforms, gauge numerals ("MAX", "km/h", duplicated "80"/"180"), a neon-tube S, "POORLANGS" on 03/05. `edge-to-edge`: the name typed in a geometric sans inside an orange plate. `instagram-launch-post`: a serif "Spoorlangs / Launch". `wa-qr-status-story`, `story-quote`: a typed "SPOORLANGS" in addition to the real lockup (a masthead 95 px above it on the QR story; a footer sign-off ≈1300 px below it on the story quote — recorded as unclear).
- **Fake stats** — p27 "no fake stats"; p28 "testimonials: none on file": `instagram-launch-post` five stars; `wave1-02` "8+ YEARS." unattributed (p03).
- **Imagery** — p19 DON'T "Racing as content, burnouts, track days", "Courier, trucking or car-transporter visuals"; brief "No stock or AI-generated images": `delivery-post`, `wave1-01/02/05`, `edge-to-edge` — concept until the real shoot.
- **Palette and contrast** — p14/p15: amber on `wave1-01/02/03` (≈ superseded #E8A317), #FE4D00 on `edge-to-edge`, navy ground on `wave1-02`; p26 "White on Ignition 2.6:1 Fail — avoid": `email-signature`, `edge-to-edge` body on the trail.
- **Pricing copy** — p24: "Local (<25 km)" and "miss written SLA" for "Local (under 25 km)" and "miss the agreed SLA".
- **Logo ground and clear space** — p11/p12: the file's black box on `social-trust`, `social-service-cta`, `story-quote`, `wa-rate-card`; `icon-only.png` uncropped on `social-nico-factor`; text or chrome inside the box on `social-trust`, `behind-the-wheel`, `service-cta`, `wave1-03/05`.

## Elsewhere in Canva

Launch Editable Extra: "Spoorlangs - One-pager", "Spoorlangs - Email signature ARCHIVE 2page", "Spoorlangs Rates Table on Dark Textured Background", "SPOORLANGS: Minimalist Poster Design with Clarity", folders "Covers", "Print", "Pitch deck". WA Extra kit: Catalog after-hours / auction / fleet / live pin / POD / same-day; Highlight about / after-hours / auction / fleet / live pin / POD / quote / same-day; How we work square / story / strip; Job card square; POD overlay; Pre-collect square / story; QR share square; Rate card story; Status booked / delivered / en route / quote ready; Digital business card; "Your Story - Spoorlangs Cancel Reschedule / Delay / Incident Report", "Instagram Post of Spoorlangs Delay Notification", "Full-Bleed Spoorlangs Incident Report Post 2", "Spoorlangs Cancellation Process Layout". Covers Launch images: Avatar 1080, Cover Facebook 820x312, Cover LinkedIn 1584x396, Cover TikTok 1080x1920, Cover X 1500x500, IG Bio Banner 1080x566, WA Status Banner 1080x1920.

No stored file: an HTML render of the WhatsApp rate card (same content as `wa-rate-card-square.png`, a tall card with three zone cards and a "WHAT YOU GET" list, rates written "R 950" with a space after R, footer "WhatsApp +27 66 271 5887 · drive@spoorlangs.co.za · Spoorlangs (Pty) Ltd · Johannesburg") and a plain dark tyre-texture story background. The September concept-kit renders on the owner's disk (AI chrome wordmark on a speedometer, "Johan Smit, Chief Operations Officer" placeholder, lorem ipsum, "Sales · Service · Parts · Tyres · Performance · Fleet Solutions" icons) are superseded — never reuse.

## Discrepancies for Andries Liebenberg

1. **Email domain** — kit pieces print "drive@spoorlangs.co.za" (p25); the site publishes drive@spoorlangs.online (§9 row 3).
2. **Rate format** — the HTML card writes "R 950"; p24 and the PNG write "R950" / "R1 350".
3. **Button case** — the Service CTA button is sentence case; the kit's are caps ("GET A QUOTE ON WHATSAPP"); p08 microcopy is "Get a quote on WhatsApp".
4. **Tagline case** — p08 says "title case with full stops" yet prints it in caps; five pieces set "DRIVEN BY PEOPLE. FURTHER TOGETHER."
5. **Contact wording** — "Johannesburg on-wheels", "Gauteng day-one" against p25 "Johannesburg & Greater Gauteng, on wheels"; "Kempton Park" and "Spoorlangs (Pty) Ltd" on no piece.
6. **Copy in neither source** — "photo POD", "Live collect pin".
7. **Site line on wave1-03** — "Nico replies from 07:30": the live site's footer line (§9 row 6) against p25 "invented trading hours".
8. **Glow fields and dark-UI tints** (#101010, #080808, #121212, #262a30) — record or replace with unfilled hairline cards.
9. **Ignition rule on social** — does p22 "Ignition rule 96 × 5 px under headings" apply to social?
10. **Logo version** — Icon Only in the signature (p10: Horizontal for email); Main Full on the square rate card (p10: Stacked for "Square spaces").
