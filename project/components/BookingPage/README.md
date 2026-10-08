# BookingPage

Sub-page shell and the hairline-topped booking section pairing intro copy with the booking form. Exports `BookingPage` (`main.quote-main > div.site-shell.booking-page`, the shell of /coverage, /pricing, /faq and /contact) and `BookingSection` (`section.booking-section`: eyebrow, h2 and lead beside the form, /coverage only).

**Use** `BookingPage` for every stacked sub-page: BackLink, SectionHeading (eyebrow, `h1.quote-title`, lead), then the page's blocks, 1.5rem apart. Use `BookingSection` once, last in the shell. **Not for** `/book` and `/quote` (`.quote-layout`, QuoteForm), the home page or `/privacy` (LegalPage).

**Consumer provides.** `BookingPage`: `children`, `className`, `main` (false when a `<main>` exists). `BookingSection`: `eyebrow`, `title` (always an `<h2>`), `titleId` (default `booking-title`, the `aria-labelledby` target), `lead`, `className`, `children` = the form column: QuoteForm's `<form class="quote-form">`.

**Do**
- Title in sentence case with a full stop; the CSS uppercases it (Brand Book p17).
- Say what submitting does: a pending request, booked only once Spoorlangs confirms.
- One primary inside the shell — the submit, black label on orange (p26).

**Don't**
- Promise a slot, hours or a price in the intro: no invented trading hours, no "from R…" without zone and band (p24–p25).
- Put the coverage map in the section; it sits above (CoverageSection).
- Add a fill or shadow: one `--border` hairline on Asphalt.

**States:** none (form states belong to Field and QuoteForm).

**Copy (site, verbatim).** Shell: "Gauteng coverage" · "Request a run". Section: "Booking request" · "Tell us what needs moving." · "Submitting this form creates a pending request. The run is booked only after Spoorlangs confirms it with you." Submit: "Save & open WhatsApp".

**Flags for Andries Liebenberg.** The hairline is the site's `--border` (#2b2e34, 1.54:1 on Asphalt), not the book's "1–2 px steel or titanium" (p22). Child margins (`.back-link`, `.section-heading`) stack on the shell's gap — source, kept.

**Gaps (not in source):** no sent or error state; only `<h2>` is styled; no light theme.
