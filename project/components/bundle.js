/* @ds-bundle: {"format":4,"namespace":"Spoorlangs","components":[{"name":"Button"},{"name":"FloatingActions"},{"name":"Eyebrow"},{"name":"SectionHeading"},{"name":"BackLink"},{"name":"SiteHeader"},{"name":"SiteFooter"},{"name":"Hero"},{"name":"ServiceGrid"},{"name":"ServiceDetail"},{"name":"ProcessSteps"},{"name":"BenefitList"},{"name":"TrustRitual"},{"name":"AboutLayout"},{"name":"WhatsappBand"},{"name":"FaqList"},{"name":"ContactBand"},{"name":"CoverageSection"},{"name":"PricingTable"},{"name":"VehicleCard"},{"name":"Field"},{"name":"CorridorChips"},{"name":"QuoteForm"},{"name":"DescribeMove"},{"name":"LegalPage"},{"name":"BookingPage"},{"name":"ContactCards"},{"name":"IgnitionRule"}]} */
(function () {
"use strict";
var React = window.React, ReactDOM = window.ReactDOM;
var h = React.createElement;

/* ---- Base ---- */
/* Base — Spoorlangs global rules (group: Typography).
   No React components: Base is the pseudo-family of globals every other family inherits
   (Tailwind preflight, html/body/a/img, :focus-visible, ::selection, .site-shell, .section,
   h1/h2/h3, the .lead colour group, .wide-visual, .legacy-anchor, reduced motion).
   Everything lives in Base.css; exports = []. The orchestrator wraps all parts in one IIFE,
   so this file intentionally defines nothing. */

/* ---- Button ---- */
/*
 * Button — Spoorlangs (group: Actions).
 * Hand-written from the live site's markup (index.html, page-services.html, page-quote.html,
 * page-book.html, page-coverage.html; WhatsAppButton from js/whatsapp-widget-8F4ds14e.js)
 * and custom.css L989–L1030. Site class names kept verbatim:
 * .button-primary · .button-secondary · .button-compact (· .nav-quote, .coverage-booking-link as className).
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in
 * one IIFE and assigns window.Spoorlangs from the "exports" list (Button, WhatsAppButton, ButtonIcon).
 */

/* Icon path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC).
   Only the five icons the site renders inside buttons. */
function spoorlangsButtonIconParts(name) {
  switch (name) {
    case 'message-circle':
      return [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ];
    case 'arrow-right':
      return [
        ['path', { d: 'M5 12h14' }],
        ['path', { d: 'm12 5 7 7-7 7' }]
      ];
    case 'mail':
      return [
        ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' }],
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }]
      ];
    case 'calendar-check':
      return [
        ['path', { d: 'M8 2v3' }],
        ['path', { d: 'M16 2v3' }],
        ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' }],
        ['path', { d: 'M3 9h18' }],
        ['path', { d: 'm9 15 2 2 4-4' }]
      ];
    case 'wand-sparkles':
      return [
        ['path', { d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72' }],
        ['path', { d: 'm14 7 3 3' }],
        ['path', { d: 'M5 6v4' }],
        ['path', { d: 'M19 14v4' }],
        ['path', { d: 'M10 2v2' }],
        ['path', { d: 'M7 8H3' }],
        ['path', { d: 'M21 16h-4' }],
        ['path', { d: 'M11 3H9' }]
      ];
  }
  return null;
}

/* Props the Button consumes itself; everything else passes through to the element. */
function spoorlangsButtonIsOwnProp(key) {
  return key === 'variant' || key === 'compact' || key === 'href' || key === 'type' ||
    key === 'icon' || key === 'trailingIcon' || key === 'wrapLabel' ||
    key === 'className' || key === 'children';
}

/* ButtonIcon — the inline lucide <svg> exactly as the site renders it inside a button:
   xmlns, 24×24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2,
   round caps and joins, class "lucide lucide-<name>", aria-hidden="true".
   Sized by the site rule `.button-primary svg,.button-secondary svg { width:1.15rem; height:1.15rem }`. */
function ButtonIcon(props) {
  var h = window.React.createElement;
  var parts = spoorlangsButtonIconParts(props.name);
  if (!parts) return null;
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'lucide lucide-' + props.name + (props.className ? ' ' + props.className : ''),
    'aria-hidden': 'true'
  };
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', attrs].concat(children));
}

/* Button — `<a class="button-primary|button-secondary[ button-compact]" href>` when `href` is given,
   else `<button type class="…">`. Children order as on the site: leading icon, label, trailing icon.
   The label sits in a <span> when a leading icon is present (site default), or whenever `wrapLabel` says so
   (the site also wraps the header's "Get a quote" and "See guide rates", and leaves the home mail link bare). */
function Button(props) {
  var h = window.React.createElement;
  var variant = props.variant === 'secondary' ? 'secondary' : 'primary';
  var classes = ['button-' + variant];
  if (props.compact) classes.push('button-compact');
  if (props.className) classes.push(props.className);
  var wrap = props.wrapLabel === undefined ? !!props.icon : !!props.wrapLabel;
  var label = wrap ? h('span', null, props.children) : props.children;
  var attrs = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsButtonIsOwnProp(key)) {
      attrs[key] = props[key];
    }
  }
  attrs.className = classes.join(' ');
  if (props.href) {
    attrs.href = props.href;
    return h('a', attrs, props.icon || null, label, props.trailingIcon || null);
  }
  attrs.type = props.type || 'button';
  return h('button', attrs, props.icon || null, label, props.trailingIcon || null);
}

/* WhatsAppButton — the site's shared component (whatsapp-widget-8F4ds14e.js: function b({label, compact=false})):
   <a href="https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request" target="_blank"
      rel="noreferrer" class="button-primary[ button-compact]" aria-label="WhatsApp +27 66 271 5887">
     <svg message-circle/><span>{label}</span>[<svg arrow-right/> unless compact]
   </a> */
function WhatsAppButton(props) {
  var h = window.React.createElement;
  var compact = !!props.compact;
  var className = compact ? 'button-primary button-compact' : 'button-primary';
  if (props.className) className += ' ' + props.className;
  return h('a', {
    href: props.href || 'https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request',
    target: '_blank',
    rel: 'noreferrer',
    className: className,
    'aria-label': 'WhatsApp +27 66 271 5887'
  },
    h(ButtonIcon, { name: 'message-circle' }),
    h('span', null, props.label),
    compact ? null : h(ButtonIcon, { name: 'arrow-right' })
  );
}

/* ---- FloatingActions ---- */
/* FloatingActions — Spoorlangs design system part.
   Source: spoorlangs.online, chunk whatsapp-widget-8F4ds14e.js (T(), w(), C) and the server-rendered
   markup after the footer in index.html (identical on all 9 pages; /quote adds the active-route attributes).
   Plain React 18 via window.React, no JSX. Top-level functions only: the orchestrator wraps every part in
   one IIFE and assigns window.Spoorlangs from the exports (FloatingActions, FloatingQuote, WhatsAppWidget). */

/* Site constant w(e = C): 'https://wa.me/27662715887' + '?text=' + encodeURIComponent(e),
   C = 'Hi Spoorlangs — quote request' (Brand Book p25: "wa.me/27662715887 for links and QR codes"). */
function floatingActionsWhatsAppHref(message) {
  var text = message == null ? 'Hi Spoorlangs \u2014 quote request' : String(message);
  return 'https://wa.me/27662715887?text=' + encodeURIComponent(text);
}

/* Copies every own prop not named in omit so unknown attributes pass through to the element. */
function floatingActionsRest(props, omit) {
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && omit.indexOf(key) === -1) rest[key] = props[key];
  }
  return rest;
}

/* The site's inline lucide message-circle SVG, exactly as index.html renders it (stroke currentColor,
   so it takes the pill's ink; sized by .whatsapp-widget svg { width:1.15rem; height:1.15rem }). */
function floatingActionsMessageCircleIcon(h) {
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'lucide lucide-message-circle',
    'aria-hidden': 'true'
  }, h('path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }));
}

/* a.floating-quote[href="/quote?service=&pickup="] "Get a quote"
   On /quote TanStack Router adds class "active", data-status="active" and aria-current="page" (unstyled). */
function FloatingQuote(props) {
  var h = window.React.createElement;
  var rest = floatingActionsRest(props, ['className', 'href', 'active', 'children', 'onClick']);
  var active = !!props.active;
  var attrs = {
    className: ['floating-quote', active ? 'active' : null, props.className].filter(Boolean).join(' '),
    href: props.href == null ? '/quote?service=&pickup=' : props.href,
    onClick: props.onClick
  };
  if (active) {
    attrs['data-status'] = 'active';
    attrs['aria-current'] = 'page';
  }
  return h('a', Object.assign(attrs, rest), props.children == null ? 'Get a quote' : props.children);
}

/* a.whatsapp-widget[href="https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request"]
   [target="_blank"][rel="noreferrer"][aria-label="WhatsApp +27 66 271 5887"]
   > svg.lucide.lucide-message-circle[aria-hidden="true"] + span "WhatsApp us" */
function WhatsAppWidget(props) {
  var h = window.React.createElement;
  var rest = floatingActionsRest(props, ['className', 'href', 'message', 'label', 'children', 'icon', 'ariaLabel', 'target', 'rel', 'onClick']);
  var icon = props.icon === undefined ? floatingActionsMessageCircleIcon(h) : props.icon;
  var label = props.children != null ? props.children : (props.label != null ? props.label : 'WhatsApp us');
  var attrs = {
    className: ['whatsapp-widget', props.className].filter(Boolean).join(' '),
    href: props.href != null ? props.href : floatingActionsWhatsAppHref(props.message),
    target: props.target === undefined ? '_blank' : props.target,
    rel: props.rel === undefined ? 'noreferrer' : props.rel,
    'aria-label': props.ariaLabel === undefined ? 'WhatsApp +27 66 271 5887' : props.ariaLabel,
    onClick: props.onClick
  };
  return h('a', Object.assign(attrs, rest), icon, h('span', null, label));
}

/* div.floating-actions > FloatingQuote + WhatsAppWidget — fixed bottom-right, once per page. */
function FloatingActions(props) {
  var h = window.React.createElement;
  var rest = floatingActionsRest(props, [
    'className', 'children', 'showQuote',
    'quoteHref', 'quoteLabel', 'quoteActive', 'onQuoteClick',
    'whatsappHref', 'whatsappMessage', 'whatsappLabel', 'whatsappAriaLabel', 'icon', 'onWhatsAppClick'
  ]);
  var children = props.children;
  if (children == null) {
    children = [
      props.showQuote === false ? null : h(FloatingQuote, {
        key: 'quote',
        href: props.quoteHref,
        active: props.quoteActive,
        onClick: props.onQuoteClick
      }, props.quoteLabel),
      h(WhatsAppWidget, {
        key: 'whatsapp',
        href: props.whatsappHref,
        message: props.whatsappMessage,
        ariaLabel: props.whatsappAriaLabel,
        icon: props.icon,
        onClick: props.onWhatsAppClick
      }, props.whatsappLabel)
    ];
  }
  var attrs = { className: ['floating-actions', props.className].filter(Boolean).join(' ') };
  return h('div', Object.assign(attrs, rest), children);
}

/* ---- Eyebrow ---- */
/* Eyebrow — the site's label paragraph: <p class="eyebrow">…</p> or <p class="hero-kicker">…</p>.
   Source markup: index.html (hero kicker + 9 eyebrows), page-services.html (9), page-quote.html (2),
   page-coverage.html (2), page-pricing / page-faq / page-book / page-contact / page-privacy (1 each).
   Source CSS: custom.css L1057-L1071 (.hero-kicker, ::before rule), L1123-L1131 (.eyebrow).
   Always a <p> immediately before the h1/h2/h3 it labels; the site never adds other classes or attributes. */
function Eyebrow(props) {
  const h = window.React.createElement;
  var variant = props.variant === 'hero-kicker' ? 'hero-kicker' : 'eyebrow';
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && key !== 'variant' && key !== 'className' && key !== 'children') {
      rest[key] = props[key];
    }
  }
  rest.className = props.className ? variant + ' ' + props.className : variant;
  return h('p', rest, props.children);
}

/* ---- SectionHeading ---- */
/* SectionHeading — Spoorlangs. Oswald 700 uppercase h1/h2/h3 with eyebrow and lead;
   .section-heading and .split-heading. Markup copied from spoorlangs.online
   (index.html, page-pricing.html, page-faq.html, page-coverage.html, page-contact.html);
   CSS in SectionHeading.css (custom.css L1132–L1155, L1215–L1222, L1682–L1684, L2080–L2081, L2102–L2105). */

function sectionHeadingClasses() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) out.push(arguments[i]);
  }
  return out.length ? out.join(' ') : undefined;
}

function sectionHeadingLevel(level) {
  return level === 1 || level === 3 ? level : 2;
}

/* Bare heading: <h1>, <h2> or <h3> (site: global `h1,h2,h3` rule — Oswald 700, uppercase, line-height .95).
   quoteTitle adds the site's `.quote-title` class (sub-page h1: clamp(2.7rem,10vw,4.5rem), max-width none). */
function Heading(props) {
  var h = React.createElement;
  var level = sectionHeadingLevel(props.level);
  return h('h' + level, {
    id: props.id,
    className: sectionHeadingClasses(props.quoteTitle ? 'quote-title' : null, props.className)
  }, props.children);
}

/* Muted lead paragraph: <p class="lead"> (site: muted-foreground, line-height 1.7). */
function Lead(props) {
  var h = React.createElement;
  return h('p', { className: sectionHeadingClasses('lead', props.className) }, props.children);
}

/* Stacked heading block: <div class="section-heading"> eyebrow + heading + paragraph.
   Site pattern: h2 + bare <p> (home sections, contact h1) or h1.quote-title + p.lead (pricing, faq, coverage). */
function SectionHeading(props) {
  var h = React.createElement;
  var leadVariant = props.leadVariant || (props.quoteTitle ? 'lead' : 'plain');
  var lead = null;
  if (props.lead != null) {
    lead = leadVariant === 'lead'
      ? h(Lead, null, props.lead)
      : h('p', null, props.lead);
  }
  return h('div', { className: sectionHeadingClasses('section-heading', props.className) },
    props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
    h(Heading, { level: props.level, id: props.id, quoteTitle: props.quoteTitle }, props.title),
    lead,
    props.children
  );
}

/* Split heading: <div class="split-heading"> with eyebrow + heading in the left cell and the paragraph
   as a direct child (right column at >=900px). The site instance carries class="site-shell split-heading". */
function SplitHeading(props) {
  var h = React.createElement;
  return h('div', { className: sectionHeadingClasses('split-heading', props.className) },
    h('div', null,
      props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
      h(Heading, { level: props.level, id: props.id }, props.title)
    ),
    props.lead == null ? null : h('p', null, props.lead)
  );
}

/* ---- BackLink ---- */
/* BackLink — Spoorlangs design system part, group "Navigation".
   Markup copied from the live site (page-quote.html; identical on book, coverage,
   pricing, faq, contact, privacy): <a class="back-link" href="/"><svg … class="lucide
   lucide-arrow-left" aria-hidden="true">…</svg><span>Back to home</span></a>.
   Styles: custom.css L1685–L1699 (.back-link, .back-link:hover, .back-link svg).
   Reads the global React only; `h` is function-scoped so the parts can share one IIFE. */

/* The site's lucide arrow-left (lucide-static v1.52.0, assets/Icons/arrow-left.svg),
   attribute for attribute as the server-rendered markup prints it. Stroke is
   currentColor, so it takes the link's titanium and turns orange with it on hover. */
function BackLinkArrowLeftIcon() {
  var h = React.createElement;
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'lucide lucide-arrow-left',
      'aria-hidden': 'true'
    },
    h('path', { d: 'm12 19-7-7 7-7' }),
    h('path', { d: 'M19 12H5' })
  );
}

/* props: href (site: always "/"), children = the label (site: "Back to home"),
   className appended after "back-link", icon = a node replacing the arrow-left
   (null renders no icon), onClick and any other anchor attribute pass through. */
function BackLink(props) {
  var h = React.createElement;
  var p = props || {};
  var label = p.children == null ? 'Back to home' : p.children;
  var icon = p.icon === undefined ? h(BackLinkArrowLeftIcon, null) : p.icon;

  /* attribute order as the site prints it: class, href, then anything else */
  var attrs = {
    className: p.className ? 'back-link ' + p.className : 'back-link',
    href: p.href == null ? '/' : p.href
  };
  for (var k in p) {
    if (Object.prototype.hasOwnProperty.call(p, k) &&
        k !== 'href' && k !== 'children' && k !== 'className' && k !== 'icon') {
      attrs[k] = p[k];
    }
  }

  return h('a', attrs, icon, h('span', null, label));
}

/* ---- SiteHeader ---- */
/* SiteHeader — Spoorlangs site header: fixed, blurred 68 %-asphalt bar with a titanium
   hairline, the Main Full · Dark logo, uppercase nav links and the compact "Get a quote" button.
   Markup, class names, attributes and aria labels are copied verbatim from spoorlangs.online
   (index.html + page-*.html, fetched 2026-10-08; rendered there by x() in whatsapp-widget-8F4ds14e.js).
   Plain React 18 createElement, reads window.React only. No window assignment here: the
   orchestrator wraps every part in one IIFE and assigns window.Spoorlangs from the exports. */

/* One <a> inside the header. When `active` is true it carries the three markers the site's
   router (TanStack Router) sets on the current-route link: class "active", data-status="active",
   aria-current="page". No CSS targets them in source — the active state is unstyled. */
function NavLink(props) {
  var h = window.React.createElement;
  var active = !!props.active;
  var cls = [props.className, active ? 'active' : null].filter(Boolean).join(' ');
  var attrs = {};
  if (cls) attrs.className = cls;
  if (props['aria-label']) attrs['aria-label'] = props['aria-label'];
  attrs.href = props.href;
  if (active) {
    attrs['data-status'] = 'active';
    attrs['aria-current'] = 'page';
  }
  if (props.target) attrs.target = props.target;
  if (props.rel) attrs.rel = props.rel;
  if (props.onClick) attrs.onClick = props.onClick;
  return h('a', attrs, props.children != null ? props.children : props.label);
}

/* The <div class="nav-links" aria-label="Page sections"> row. Hidden below 900 px (display:none);
   a flex row of titanium uppercase links at >= 900 px. Pass `items` ({label, href, active?}) or
   compose NavLink children yourself. */
function NavLinks(props) {
  var h = window.React.createElement;
  var items = props.items || [];
  var onNavigate = props.onNavigate;
  var nodes = items.map(function (item, i) {
    return h(NavLink, {
      key: item.href != null ? item.href + '#' + i : i,
      href: item.href,
      label: item.label,
      active: item.active,
      onClick: onNavigate ? function (e) { onNavigate(item, e); } : undefined
    });
  });
  return h(
    'div',
    {
      className: ['nav-links', props.className].filter(Boolean).join(' '),
      'aria-label': props.label != null ? props.label : 'Page sections'
    },
    nodes,
    props.children
  );
}

/* The whole <header class="site-header"> with its <nav class="site-shell nav-row">.
   Defaults reproduce the live site: logo-link -> "/", the seven nav links in site order,
   and the compact primary "Get a quote" link. The header is position:fixed (inset:0 0 auto),
   so the page below it provides its own top padding (the site uses 8rem on the hero and
   quote pages, 4.5rem on the services page). */
function SiteHeader(props) {
  var h = window.React.createElement;
  var defaultItems = [
    { label: 'Services', href: '/services' },
    { label: 'Coverage', href: '/coverage?service=&pickup=' },
    { label: 'Why us', href: '/#why' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Book', href: '/book' },
    { label: 'Contact', href: '/contact' }
  ];
  var logoSrc = props.logoSrc != null ? props.logoSrc : '/_blob/192c5a535993ae37d9e1294d83934d5f';
  var logoAlt = props.logoAlt != null ? props.logoAlt : 'Spoorlangs';
  var homeHref = props.homeHref != null ? props.homeHref : '/';
  var homeLabel = props.homeLabel != null ? props.homeLabel : 'Spoorlangs home';
  var navLabel = props.navLabel != null ? props.navLabel : 'Primary navigation';
  var sectionsLabel = props.sectionsLabel != null ? props.sectionsLabel : 'Page sections';
  var quoteHref = props.quoteHref != null ? props.quoteHref : '/quote?service=&pickup=';
  var quoteLabel = props.quoteLabel != null ? props.quoteLabel : 'Get a quote';
  var items = props.items || defaultItems;
  var onNavigate = props.onNavigate;

  var logo = h(
    NavLink,
    {
      className: 'logo-link',
      'aria-label': homeLabel,
      href: homeHref,
      active: !!props.homeActive,
      onClick: onNavigate ? function (e) { onNavigate({ label: homeLabel, href: homeHref }, e); } : undefined
    },
    h('img', { src: logoSrc, alt: logoAlt, className: 'nav-logo' })
  );

  var body;
  if (props.children != null) {
    body = props.children;
  } else {
    body = [
      h(NavLinks, { key: 'links', items: items, label: sectionsLabel, onNavigate: onNavigate }),
      h(
        NavLink,
        {
          key: 'quote',
          className: 'button-primary button-compact nav-quote',
          href: quoteHref,
          active: !!props.quoteActive,
          onClick: onNavigate ? function (e) { onNavigate({ label: quoteLabel, href: quoteHref }, e); } : undefined
        },
        h('span', null, quoteLabel)
      )
    ];
  }

  return h(
    'header',
    { className: ['site-header', props.className].filter(Boolean).join(' ') },
    h('nav', { className: 'site-shell nav-row', 'aria-label': navLabel }, logo, body)
  );
}

/* ---- SiteFooter ---- */
/* SiteFooter — Spoorlangs site footer (group: Navigation; page showcase).
   Markup: spoorlangs.online, rendered by S() in whatsapp-widget-8F4ds14e.js,
   identical on all nine pages; /contact and /privacy mark their own link
   class="active" data-status="active" aria-current="page".
   CSS: custom.css L1669–L1670, L1978–L2002, L2153–L2157 (SiteFooter.css).
   Every default below is the site's own copy, verbatim. */

function SiteFooter(props) {
  const h = window.React.createElement;
  const p = props || {};

  // Site copy (verbatim) as defaults. The logo default is this system's
  // upload of assets/Logos/monochrome-white.png (the site's Monochrome-White.png).
  const logoSrc = p.logoSrc !== undefined ? p.logoSrc : '/_blob/694452e8b7ac21fa9d74d9e25d09ff34';
  const logoAlt = p.logoAlt !== undefined ? p.logoAlt : 'Spoorlangs · drive@spoorlangs.online · +27 66 271 5887';
  const tagline = p.tagline !== undefined ? p.tagline : 'Driven By People. Further Together.';
  const location = p.location !== undefined ? p.location : 'Kempton Park';
  const whatsappHref = p.whatsappHref !== undefined ? p.whatsappHref : 'https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request';
  const whatsappNumber = p.whatsappNumber !== undefined ? p.whatsappNumber : '+27 66 271 5887';
  const whatsappAriaLabel = p.whatsappAriaLabel !== undefined ? p.whatsappAriaLabel : 'WhatsApp ' + whatsappNumber;
  const email = p.email !== undefined ? p.email : 'drive@spoorlangs.online';
  const hours = p.hours !== undefined ? p.hours : 'Message any time · Nico replies from 07:30 · we confirm your window.';
  const mantra = p.mantra !== undefined ? p.mantra : 'SOUTH AFRICA KEEPS MOVING';
  const links = Array.isArray(p.links) ? p.links : [
    { label: 'Contact details', href: '/contact' },
    { label: 'Privacy policy', href: '/privacy' }
  ];
  const currentPath = p.currentPath;
  const copyright = p.copyright !== undefined ? p.copyright : '© 2026 Spoorlangs (Pty) Ltd';

  // Everything else (id, style, aria-*, data-*) goes onto the <footer>.
  const own = {
    className: 1, logoSrc: 1, logoAlt: 1, tagline: 1, location: 1, whatsappHref: 1,
    whatsappNumber: 1, whatsappAriaLabel: 1, email: 1, hours: 1, mantra: 1, links: 1,
    currentPath: 1, copyright: 1, children: 1
  };
  const rest = {};
  for (const k in p) { if (Object.prototype.hasOwnProperty.call(p, k) && !own[k]) rest[k] = p[k]; }
  rest.className = ['site-footer', p.className].filter(Boolean).join(' ');

  const linkNodes = links.map(function (link, i) {
    const active = link.active === true || (currentPath !== undefined && link.href === currentPath);
    const attrs = active
      ? { key: link.href || i, className: 'active', href: link.href, 'data-status': 'active', 'aria-current': 'page' }
      : { key: link.href || i, href: link.href };
    return h('a', attrs, link.label);
  });

  return h('footer', rest,
    h('div', { className: 'site-shell footer-grid' },
      h('div', null,
        logoSrc ? h('img', { src: logoSrc, alt: logoAlt, className: 'footer-logo', loading: 'lazy' }) : null,
        h('p', null, tagline)
      ),
      h('div', { className: 'footer-contact' },
        h('span', { className: 'footer-location' }, location),
        h('a', { href: whatsappHref, 'aria-label': whatsappAriaLabel, target: '_blank', rel: 'noreferrer' }, whatsappNumber),
        h('a', { href: 'mailto:' + email }, email),
        h('span', { className: 'footer-hours' }, hours)
      ),
      h('div', { className: 'footer-meta' },
        h('span', null, mantra),
        linkNodes,
        h('span', null, copyright)
      )
    )
  );
}

/* ---- Hero ---- */
/*
 * Hero — Spoorlangs (group: Sections; page showcase).
 * Hand-written from the live site's home hero (site/index.html, <section class="hero" aria-labelledby="hero-title">)
 * and custom.css L1031–L1112 (+ L2016–L2021 inside @media (width>=640px), L2034–L2051 inside @media (width<=639px)).
 * Site class names kept verbatim:
 * .hero · .hero-image · .hero-shade · .site-shell.hero-content · .hero-kicker · .hero-secondary · .hero-lead ·
 * .hero-parity-strip · .hero-actions · .button-primary.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the "exports" list (Hero, HeroAction).
 */

/* Icon path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC) —
   only the two icons the hero's action row renders (message-circle leading, arrow-right trailing). */
function spoorlangsHeroIconParts(name) {
  switch (name) {
    case 'message-circle':
      return [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ];
    case 'arrow-right':
      return [
        ['path', { d: 'M5 12h14' }],
        ['path', { d: 'm12 5 7 7-7 7' }]
      ];
  }
  return null;
}

/* The inline lucide <svg> exactly as the site renders it inside the hero's WhatsApp link:
   xmlns, 24×24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2, round caps/joins,
   class "lucide lucide-<name>", aria-hidden="true". Sized by Button's `.button-primary svg { width:1.15rem; height:1.15rem }`. */
function spoorlangsHeroIcon(name) {
  var h = window.React.createElement;
  var parts = spoorlangsHeroIconParts(name);
  if (!parts) return null;
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'lucide lucide-' + name,
    'aria-hidden': 'true'
  }].concat(children));
}

/* Props HeroAction consumes itself; everything else passes through to the <a>. */
function spoorlangsHeroActionIsOwnProp(key) {
  return key === 'href' || key === 'icon' || key === 'trailingIcon' || key === 'wrapLabel' ||
    key === 'className' || key === 'children';
}

/* HeroAction — one link of the hero's action row, exactly as index.html writes them:
   <a class="button-primary" href="/quote?service=&pickup=">Get a quote</a>
   <a href="https://wa.me/27662715887?text=…" target="_blank" rel="noreferrer" class="button-primary" aria-label="WhatsApp +27 66 271 5887">
     <svg message-circle/><span>WhatsApp us</span><svg arrow-right/>
   </a>
   The label sits in a <span> when a leading icon is present (site pattern) or when `wrapLabel` says so.
   Styling (pill, orange, ghost when it follows another .button-primary inside .hero-actions) is the Button family's CSS. */
function HeroAction(props) {
  var h = window.React.createElement;
  var attrs = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsHeroActionIsOwnProp(key)) {
      attrs[key] = props[key];
    }
  }
  attrs.className = props.className ? 'button-primary ' + props.className : 'button-primary';
  attrs.href = props.href;
  var icon = typeof props.icon === 'string' ? spoorlangsHeroIcon(props.icon) : (props.icon || null);
  var trailing = typeof props.trailingIcon === 'string' ? spoorlangsHeroIcon(props.trailingIcon) : (props.trailingIcon || null);
  var wrap = props.wrapLabel === undefined ? !!icon : !!props.wrapLabel;
  var label = wrap ? h('span', null, props.children) : props.children;
  return h('a', attrs, icon, label, trailing);
}

/* Props Hero consumes itself; everything else passes through to the <section>. */
function spoorlangsHeroIsOwnProp(key) {
  return key === 'imageSrc' || key === 'imageAlt' || key === 'kicker' || key === 'title' || key === 'titleAccent' ||
    key === 'titleId' || key === 'secondary' || key === 'lead' || key === 'parity' || key === 'actions' ||
    key === 'className' || key === 'children';
}

/* Hero — the site's full-viewport home hero (index.html):
   <section class="hero" aria-labelledby="hero-title">
     <img src alt class="hero-image" fetchPriority="high"/>
     <div class="hero-shade" aria-hidden="true"></div>
     <div class="site-shell hero-content">
       <p class="hero-kicker">…</p>
       <h1 id="hero-title"><span>…</span><strong>…</strong></h1>
       <p class="hero-secondary">…</p>
       <p class="hero-lead">… <br/> …</p>
       <div class="hero-parity-strip" aria-label="…"><strong>…</strong><span>…</span></div>
       <div class="hero-actions">…</div>
     </div>
   </section>
   `lead` as an array of lines is joined with <br/> (the site's lead is two lines). `actions` (or `children`) fills
   .hero-actions. The image attribute is written lowercase `fetchpriority` (the same DOM attribute the site's
   server markup spells `fetchPriority="high"`) so React 18 passes it through without a warning. */
function Hero(props) {
  var h = window.React.createElement;
  var Fragment = window.React.Fragment;
  var titleId = props.titleId || 'hero-title';
  var attrs = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsHeroIsOwnProp(key)) {
      attrs[key] = props[key];
    }
  }
  attrs.className = props.className ? 'hero ' + props.className : 'hero';
  attrs['aria-labelledby'] = titleId;

  var leadChildren = null;
  if (Array.isArray(props.lead)) {
    leadChildren = [];
    props.lead.forEach(function (line, i) {
      if (i > 0) leadChildren.push(h('br', { key: 'br' + i }));
      leadChildren.push(h(Fragment, { key: 'line' + i }, line));
    });
  } else if (props.lead !== undefined && props.lead !== null) {
    leadChildren = props.lead;
  }

  var parity = props.parity || null;
  var actions = props.actions !== undefined ? props.actions : props.children;

  return h('section', attrs,
    props.imageSrc
      ? h('img', { src: props.imageSrc, alt: props.imageAlt, className: 'hero-image', fetchpriority: 'high' })
      : null,
    h('div', { className: 'hero-shade', 'aria-hidden': 'true' }),
    h('div', { className: 'site-shell hero-content' },
      props.kicker ? h('p', { className: 'hero-kicker' }, props.kicker) : null,
      h('h1', { id: titleId },
        h('span', null, props.title),
        props.titleAccent ? h('strong', null, props.titleAccent) : null
      ),
      props.secondary ? h('p', { className: 'hero-secondary' }, props.secondary) : null,
      leadChildren ? h('p', { className: 'hero-lead' }, leadChildren) : null,
      parity
        ? h('div', { className: 'hero-parity-strip', 'aria-label': parity.label || 'Spoorlangs service and contact details' },
            h('strong', null, parity.title),
            h('span', null, parity.details)
          )
        : null,
      actions ? h('div', { className: 'hero-actions' }, actions) : null
    )
  );
}

/* ---- ServiceGrid ---- */
/*
 * ServiceGrid — Spoorlangs (group: Content).
 * Hand-written from the live site's markup (index.html, <section id="services" class="section section-services">)
 * and custom.css L1156–L1214, L2009–L2015 (inside @media (width>=640px)), L2082–L2101 (inside @media (width>=900px)),
 * L2198–L2207. Site class names kept verbatim:
 * .section-services · .service-grid · .service-card · .service-index · .service-card-copy · .service-card-link · .wide-visual
 * Plain JS, no JSX, no ES-module syntax, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the bundle header (ServiceGrid, ServiceCard, ServicesSection).
 */

function serviceGridJoinClasses(base, extra) {
  return extra ? base + ' ' + extra : base;
}

/* ServiceCard — one <article class="service-card">, exactly as index.html renders it:
   <article class="service-card">
     <span class="service-index">01</span>                     ← two React text nodes: a literal "0", then the 1-based position
     <div class="service-card-copy">                           (the server markup shows the node boundary as an empty comment)
       <h3>Same-day</h3>                                        ← uppercased by the global h1,h2,h3 rule (Oswald 700)
       <p>Book before 10am for same-day Gauteng runners</p>
       <a class="service-card-link" href="/quote?service=same-day&pickup=">Get a Same-day quote</a>
     </div>                                                     ← three text nodes: "Get a ", the title, " quote"
   </article>
   The site never puts an icon or an image in a card (the `.service-card>img` rule has no markup). */
function ServiceCard(props) {
  var h = window.React.createElement;
  var href = props.href != null ? props.href : '/quote?service=' + (props.service != null ? props.service : '') + '&pickup=';
  var index = props.indexLabel != null
    ? [props.indexLabel]
    : (props.index != null ? ['0', String(props.index)] : []);
  var link = props.linkLabel != null
    ? [props.linkLabel]
    : ['Get a ', props.title, ' quote'];
  return h('article', { className: serviceGridJoinClasses('service-card', props.className) },
    h.apply(null, ['span', { className: 'service-index' }].concat(index)),
    h('div', { className: 'service-card-copy' },
      h('h3', null, props.title),
      h('p', null, props.copy),
      h.apply(null, ['a', { className: 'service-card-link', href: href }].concat(link))
    )
  );
}

/* ServiceGrid — <div class="service-grid"> holding one ServiceCard per item, numbered 01, 02 … in array order
   (the site: six cards, same-day · auction · after-hours · fleet · live-pin · pod). The hairline ruling is
   nth-child based (odd cards get a right rule at ≥640px; every 3rd card loses its right rule at ≥900px),
   so the cards must be direct children — `children` is appended after the items for hand-built ServiceCards. */
function ServiceGrid(props) {
  var h = window.React.createElement;
  var items = props.items || [];
  var cards = items.map(function (item, i) {
    return h(ServiceCard, {
      key: item.key != null ? item.key : (item.service != null ? item.service : i),
      index: i + 1,
      indexLabel: item.indexLabel,
      title: item.title,
      copy: item.copy,
      service: item.service,
      href: item.href,
      linkLabel: item.linkLabel,
      className: item.className
    });
  });
  return h('div', { className: serviceGridJoinClasses('service-grid', props.className) },
    cards,
    props.children == null ? null : props.children
  );
}

/* ServicesSection — the whole home-page block as index.html renders it:
   <section id="services" class="section section-services" aria-labelledby="services-title">
     <div class="site-shell">
       <div class="section-heading">
         <p class="eyebrow">Gauteng on-wheels</p>
         <h2 id="services-title">Six ways to keep moving.</h2>
         <p>Professional vehicle relocation for runners — powered by people, not trucks or trailers.</p>
       </div>
       <div class="service-grid">…</div>
       <figure class="wide-visual"><img src alt loading="lazy"/></figure>     ← hidden at ≥900px by the site's CSS
     </div>
   </section>
   .section, .site-shell, .section-heading and .eyebrow are styled by Base / SectionHeading / Eyebrow (same bundle). */
function ServicesSection(props) {
  var h = window.React.createElement;
  var id = props.id != null ? props.id : 'services';
  var headingId = props.headingId != null ? props.headingId : 'services-title';
  var heading = props.heading !== undefined
    ? props.heading
    : h('div', { className: 'section-heading' },
        props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
        h('h2', { id: headingId }, props.title),
        props.lead == null ? null : h('p', null, props.lead)
      );
  var visual = props.visual;
  return h('section', {
    id: id,
    className: serviceGridJoinClasses('section section-services', props.className),
    'aria-labelledby': headingId
  },
    h('div', { className: 'site-shell' },
      heading,
      h(ServiceGrid, { items: props.items, className: props.gridClassName }),
      visual
        ? h('figure', { className: 'wide-visual' },
            h('img', { src: visual.src, alt: visual.alt, loading: 'lazy' }))
        : null,
      props.children == null ? null : props.children
    )
  );
}

/* ---- ServiceDetail ---- */
/*
 * ServiceDetail — Spoorlangs (group: Sections; a page showcase, page=true).
 * The /services page of https://spoorlangs.online (page-services.html, fetched 2026-10-08):
 *   <main class="services-page">                                  → ServiceDetail
 *     <header class="services-intro site-shell">                  → ServicesIntro
 *     <section class="services-detail" aria-label="Spoorlangs services">
 *       <div class="site-shell services-detail-list">             → ServicesDetailSection
 *         <article class="service-detail"> ×6                     → ServiceDetailArticle
 *         <aside class="services-mid-cta"> after the third article → ServicesMidCta
 *     <section class="services-notes">                            → ServicesNotes
 *     <section class="services-cta">                              → ServicesCta
 * Markup hand-written from page-services.html; CSS in ServiceDetail.css (custom.css L1483–L1641,
 * L2025–L2026 inside the @media (width>=640px) block opened at L2003, L2158–L2172 inside the
 * @media (width>=900px) block opened at L2066). Icons are the site's inline lucide <svg>s (ServiceDetailIcon).
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the "exports" list — ServiceDetail, ServicesIntro, ServicesDetailSection,
 * ServiceDetailArticle, ServicesMidCta, ServicesNotes, ServicesCta, ServiceDetailIcon.
 * Helper names are prefixed serviceDetail… so they cannot collide with other parts inside the shared IIFE.
 */

/* The nine lucide icons the services page renders. Path data copied verbatim from page-services.html
   (the site renders lucide-react). project/assets/Icons/<name>.svg (lucide-static v1.52.0) carries the same
   paths for eight of them; circle-check differs — the site draws the tick as "m9 12 2 2 4-4", the file as
   "m16 9-5.5 5.5L8 12". The site's markup is kept here and the split is flagged in the README.
   Class strings are the site's own: the clock carries both "lucide-clock3" and "lucide-clock-3". */
function serviceDetailIconDef(name) {
  switch (name) {
    case 'clock-3':
      return { className: 'lucide lucide-clock3 lucide-clock-3', parts: [
        ['circle', { cx: '12', cy: '12', r: '10' }],
        ['path', { d: 'M12 6v6h4' }]
      ] };
    case 'gavel':
      return { className: 'lucide lucide-gavel', parts: [
        ['path', { d: 'm14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381' }],
        ['path', { d: 'm16 16 6-6' }],
        ['path', { d: 'm21.5 10.5-8-8' }],
        ['path', { d: 'm8 8 6-6' }],
        ['path', { d: 'm8.5 7.5 8 8' }]
      ] };
    case 'moon':
      return { className: 'lucide lucide-moon', parts: [
        ['path', { d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401' }]
      ] };
    case 'car-front':
      return { className: 'lucide lucide-car-front', parts: [
        ['path', { d: 'm21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8' }],
        ['path', { d: 'M7 14h.01' }],
        ['path', { d: 'M17 14h.01' }],
        ['rect', { width: '18', height: '8', x: '3', y: '10', rx: '2' }],
        ['path', { d: 'M5 18v2' }],
        ['path', { d: 'M19 18v2' }]
      ] };
    case 'map-pin':
      return { className: 'lucide lucide-map-pin', parts: [
        ['path', { d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' }],
        ['circle', { cx: '12', cy: '10', r: '3' }]
      ] };
    case 'file-check-corner':
      return { className: 'lucide lucide-file-check-corner', parts: [
        ['path', { d: 'M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6' }],
        ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5' }],
        ['path', { d: 'm14 20 2 2 4-4' }]
      ] };
    case 'circle-check':
      return { className: 'lucide lucide-circle-check', parts: [
        ['circle', { cx: '12', cy: '12', r: '10' }],
        ['path', { d: 'm9 12 2 2 4-4' }]
      ] };
    case 'arrow-right':
      return { className: 'lucide lucide-arrow-right', parts: [
        ['path', { d: 'M5 12h14' }],
        ['path', { d: 'm12 5 7 7-7 7' }]
      ] };
    case 'message-circle':
      return { className: 'lucide lucide-message-circle', parts: [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ] };
  }
  return null;
}

/* Copies every prop not named in `own` (the ones the component consumes) so data- and aria- attributes
   and handlers pass through to the root element. */
function serviceDetailRest(props, own) {
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && own.indexOf(key) === -1) rest[key] = props[key];
  }
  return rest;
}

function serviceDetailClasses(base, extra) {
  return extra ? base + ' ' + extra : base;
}

/* Shallow copy of a props object with a React key added (list rendering). */
function serviceDetailWithKey(obj, key) {
  var out = {};
  for (var k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) out[k] = obj[k];
  }
  if (out.key == null) out.key = key;
  return out;
}

/* ServiceDetailIcon — the inline lucide <svg> exactly as the services page renders it:
   xmlns, 24×24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2, round caps and joins,
   class "lucide lucide-<name>", aria-hidden="true". Sized by the site rules: 2rem in .service-detail-title,
   1rem in .service-detail-link, 1.2rem in .services-notes li, 1.15rem inside .button-primary/.button-secondary. */
function ServiceDetailIcon(props) {
  var h = window.React.createElement;
  var def = serviceDetailIconDef(props.name);
  if (!def) return null;
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: props.className ? def.className + ' ' + props.className : def.className,
    'aria-hidden': 'true'
  };
  var children = def.parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', attrs].concat(children));
}

/* The services page's action pair, identical in the intro and in the mid CTA (page-services.html):
     <a class="button-primary" href="/quote?service=&pickup=">Get a quote<svg arrow-right/></a>
     <a class="button-secondary" href="https://wa.me/27662715887?text=…" target="_blank" rel="noreferrer"><svg message-circle/>WhatsApp us</a>
   Labels are bare text (no <span>). On this page the WhatsApp CTA is .button-secondary and carries no aria-label. */
function serviceDetailActionPair(props) {
  var h = window.React.createElement;
  var out = [];
  if (props.quoteHref != null) {
    out.push(h('a', { key: 'quote', className: 'button-primary', href: props.quoteHref },
      props.quoteLabel, h(ServiceDetailIcon, { name: 'arrow-right' })));
  }
  if (props.whatsappHref != null) {
    out.push(h('a', { key: 'whatsapp', className: 'button-secondary', href: props.whatsappHref, target: '_blank', rel: 'noreferrer' },
      h(ServiceDetailIcon, { name: 'message-circle' }), props.whatsappLabel));
  }
  return out;
}

/* ServicesIntro — <header class="services-intro site-shell">: p.eyebrow, h1, p.lead, div.services-intro-actions.
   `children` replaces the default action pair inside .services-intro-actions. */
function ServicesIntro(props) {
  var h = window.React.createElement;
  var rest = serviceDetailRest(props, ['eyebrow', 'title', 'lead', 'quoteHref', 'quoteLabel', 'whatsappHref', 'whatsappLabel', 'className', 'children']);
  rest.className = serviceDetailClasses('services-intro site-shell', props.className);
  var hasActions = props.children != null || props.quoteHref != null || props.whatsappHref != null;
  return h('header', rest,
    props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
    h('h1', null, props.title),
    props.lead == null ? null : h('p', { className: 'lead' }, props.lead),
    hasActions ? h('div', { className: 'services-intro-actions' }, props.children != null ? props.children : serviceDetailActionPair(props)) : null
  );
}

/* ServiceDetailArticle — one <article class="service-detail">:
     <figure class="service-detail-visual"><img src alt loading/><span>01</span></figure>
     <div class="service-detail-copy">
       <div class="service-detail-title"><svg 2rem orange/><div><p class="eyebrow">…</p><h2>…</h2></div></div>
       <p>…</p><p>…</p>
       <a class="service-detail-link" href="/quote?service=<slug>&pickup=">Request this service<svg arrow-right/></a>
     </div>
   The image side alternates by CSS (.service-detail:nth-child(2n) .service-detail-visual { order:2 } at ≥900px),
   so alternation depends on the article's position among its siblings, not on a prop. */
function ServiceDetailArticle(props) {
  var h = window.React.createElement;
  var rest = serviceDetailRest(props, ['image', 'alt', 'loading', 'index', 'icon', 'iconName', 'eyebrow', 'title', 'paragraphs', 'href', 'linkLabel', 'className', 'children']);
  rest.className = serviceDetailClasses('service-detail', props.className);
  var icon = props.icon != null ? props.icon : (props.iconName ? h(ServiceDetailIcon, { name: props.iconName }) : null);
  var paragraphs = (props.paragraphs || []).map(function (text, i) {
    return h('p', { key: i }, text);
  });
  var copy = [
    'div',
    { className: 'service-detail-copy' },
    h('div', { className: 'service-detail-title' },
      icon,
      h('div', null,
        props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
        h('h2', null, props.title)
      )
    )
  ].concat(paragraphs, [
    props.href == null ? null : h('a', { className: 'service-detail-link', href: props.href }, props.linkLabel, h(ServiceDetailIcon, { name: 'arrow-right' })),
    props.children == null ? null : props.children
  ]);
  return h('article', rest,
    h('figure', { className: 'service-detail-visual' },
      h('img', { src: props.image, alt: props.alt, loading: props.loading || 'lazy' }),
      props.index == null ? null : h('span', null, props.index)
    ),
    h.apply(null, copy)
  );
}

/* ServicesMidCta — <aside class="services-mid-cta" aria-label="Get a quote or WhatsApp Spoorlangs">
     <p>Not sure which fits? Tell us the move.</p>
     <div class="services-mid-cta-actions">(action pair)</div>
   </aside>  — the site inserts it after the third article. `children` replaces the default action pair. */
function ServicesMidCta(props) {
  var h = window.React.createElement;
  var rest = serviceDetailRest(props, ['text', 'ariaLabel', 'quoteHref', 'quoteLabel', 'whatsappHref', 'whatsappLabel', 'className', 'children']);
  rest.className = serviceDetailClasses('services-mid-cta', props.className);
  rest['aria-label'] = props.ariaLabel == null ? 'Get a quote or WhatsApp Spoorlangs' : props.ariaLabel;
  return h('aside', rest,
    h('p', null, props.text),
    h('div', { className: 'services-mid-cta-actions' }, props.children != null ? props.children : serviceDetailActionPair(props))
  );
}

/* ServicesDetailSection — <section class="services-detail" aria-label="Spoorlangs services">
     <div class="site-shell services-detail-list"> articles, with the mid CTA inserted after item `midCtaAfter` (site: 3) </div>
   </section>. `midCta` is ServicesMidCta props or a ready element; `children` are appended after the items. */
function ServicesDetailSection(props) {
  var h = window.React.createElement;
  var rest = serviceDetailRest(props, ['ariaLabel', 'items', 'midCta', 'midCtaAfter', 'className', 'children']);
  rest.className = serviceDetailClasses('services-detail', props.className);
  rest['aria-label'] = props.ariaLabel == null ? 'Spoorlangs services' : props.ariaLabel;
  var after = props.midCtaAfter == null ? 3 : props.midCtaAfter;
  var list = [];
  (props.items || []).forEach(function (item, i) {
    list.push(h(ServiceDetailArticle, serviceDetailWithKey(item, item.index != null ? item.index : i)));
    if (props.midCta != null && i + 1 === after) {
      list.push(window.React.isValidElement(props.midCta)
        ? window.React.cloneElement(props.midCta, { key: 'mid-cta' })
        : h(ServicesMidCta, serviceDetailWithKey(props.midCta, 'mid-cta')));
    }
  });
  if (props.children != null) list.push(props.children);
  return h('section', rest,
    h.apply(null, ['div', { className: 'site-shell services-detail-list' }].concat(list))
  );
}

/* ServicesNotes — <section class="services-notes" aria-labelledby="services-notes-title">
     <div class="site-shell services-notes-layout">
       <div><p class="eyebrow">Before you book</p><h2 id="services-notes-title">…</h2></div>
       <ul><li><svg circle-check/><span>…</span></li> …</ul>
     </div>
   </section> */
function ServicesNotes(props) {
  var h = window.React.createElement;
  var rest = serviceDetailRest(props, ['eyebrow', 'title', 'id', 'items', 'className', 'children']);
  var id = props.id == null ? 'services-notes-title' : props.id;
  rest.className = serviceDetailClasses('services-notes', props.className);
  rest['aria-labelledby'] = id;
  var items = (props.items || []).map(function (text, i) {
    return h('li', { key: i }, h(ServiceDetailIcon, { name: 'circle-check' }), h('span', null, text));
  });
  return h('section', rest,
    h('div', { className: 'site-shell services-notes-layout' },
      h('div', null,
        props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
        h('h2', { id: id }, props.title)
      ),
      h('ul', null, items, props.children == null ? null : props.children)
    )
  );
}

/* ServicesCta — the orange closing band: <section class="services-cta" aria-labelledby="services-cta-title">
     <div class="site-shell"><p class="eyebrow">…</p><h2 id="services-cta-title">…</h2><p>…</p>
       <a class="button-primary" href="/quote?service=&pickup=">Describe your move<svg arrow-right/></a></div>
   </section>. `children` replaces the anchor. */
function ServicesCta(props) {
  var h = window.React.createElement;
  var rest = serviceDetailRest(props, ['eyebrow', 'title', 'id', 'text', 'href', 'ctaLabel', 'className', 'children']);
  var id = props.id == null ? 'services-cta-title' : props.id;
  rest.className = serviceDetailClasses('services-cta', props.className);
  rest['aria-labelledby'] = id;
  var action = props.children != null
    ? props.children
    : (props.href == null ? null : h('a', { className: 'button-primary', href: props.href }, props.ctaLabel, h(ServiceDetailIcon, { name: 'arrow-right' })));
  return h('section', rest,
    h('div', { className: 'site-shell' },
      props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
      h('h2', { id: id }, props.title),
      props.text == null ? null : h('p', null, props.text),
      action
    )
  );
}

/* ServiceDetail — the whole page: <main class="services-page"> intro · detail section · notes · closing band · children.
   Each part is omitted when its props object is absent. Site: page-services.html. */
function ServiceDetail(props) {
  var h = window.React.createElement;
  var rest = serviceDetailRest(props, ['intro', 'services', 'sectionLabel', 'midCta', 'midCtaAfter', 'notes', 'cta', 'className', 'children']);
  rest.className = serviceDetailClasses('services-page', props.className);
  return h('main', rest,
    props.intro == null ? null : h(ServicesIntro, props.intro),
    props.services == null ? null : h(ServicesDetailSection, {
      ariaLabel: props.sectionLabel,
      items: props.services,
      midCta: props.midCta,
      midCtaAfter: props.midCtaAfter
    }),
    props.notes == null ? null : h(ServicesNotes, props.notes),
    props.cta == null ? null : h(ServicesCta, props.cta),
    props.children == null ? null : props.children
  );
}

/* ---- ProcessSteps ---- */
/* ProcessSteps — Spoorlangs. The home "Collect. Drive. Hand over." block: split heading, bordered process image
   (<figure class="wide-visual process-visual">) and a hairline-ruled 3-step <ol class="process-steps"> whose
   numerals are literal text ("01") set in var(--font-display) (Oswald on the site) in var(--orange).
   Markup copied from spoorlangs.online index.html (<section id="process" class="section process-section">);
   CSS in ProcessSteps.css (custom.css L1223–L1247 and, inside the @media (width>=900px) block opened at L2066,
   L2104–L2120). `.section` and `.site-shell` are Base rules; `.wide-visual` is ServiceGrid's (§10);
   `.split-heading` / `.eyebrow` / h2 are SectionHeading's and Eyebrow's — only the class names are repeated here. */

function processStepsClasses() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) out.push(arguments[i]);
  }
  return out.length ? out.join(' ') : undefined;
}

/* Copies every prop except the named ones, so id / data-* / aria-* reach the element. */
function processStepsRest(props, omit) {
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && omit.indexOf(key) === -1) rest[key] = props[key];
  }
  return rest;
}

/* One step: <li><span>01</span><div><h3>Collect</h3><p>…</p></div></li>
   The numeral is text, not a CSS counter (the <ol> has list-style:none). */
function ProcessStep(props) {
  var h = React.createElement;
  var rest = processStepsRest(props, ['number', 'title', 'body', 'children', 'className']);
  rest.className = props.className;
  return h('li', rest,
    h('span', null, props.number),
    h('div', null,
      h('h3', null, props.title),
      props.body == null ? null : h('p', null, props.body),
      props.children
    )
  );
}

/* The list: <ol class="process-steps"> — hairline top rule, a hairline under every <li>; at >=900px three
   columns with a hairline between them. Steps come from `steps` [{number, title, body}] and/or ProcessStep children. */
function ProcessSteps(props) {
  var h = React.createElement;
  var rest = processStepsRest(props, ['steps', 'children', 'className']);
  rest.className = processStepsClasses('process-steps', props.className);
  var items = null;
  if (props.steps) {
    items = props.steps.map(function (step, i) {
      return h(ProcessStep, {
        key: step.key != null ? step.key : i,
        number: step.number,
        title: step.title,
        body: step.body
      });
    });
  }
  return h('ol', rest, items, props.children);
}

/* The framed image: <figure class="wide-visual process-visual"><img src="…" alt="…" loading="lazy"/></figure>
   Site image: assets/Imagery/how-it-works.png (2752x1536), alt "Collect, drive, then hand over with Proof of Delivery". */
function ProcessVisual(props) {
  var h = React.createElement;
  var rest = processStepsRest(props, ['src', 'alt', 'loading', 'className']);
  rest.className = processStepsClasses('wide-visual', 'process-visual', props.className);
  return h('figure', rest,
    h('img', { src: props.src, alt: props.alt == null ? '' : props.alt, loading: props.loading || 'lazy' })
  );
}

/* The whole home section, markup verbatim:
   <section id="process" class="section process-section" aria-labelledby="process-title">
     <div class="site-shell split-heading"><div><p class="eyebrow">…</p><h2 id="process-title">…</h2></div><p>…</p></div>
     <div class="site-shell"><figure class="wide-visual process-visual">…</figure><ol class="process-steps">…</ol></div>
   </section> */
function ProcessSection(props) {
  var h = React.createElement;
  var id = props.id || 'process';
  var titleId = props.titleId || id + '-title';
  var rest = processStepsRest(props, ['id', 'titleId', 'eyebrow', 'title', 'lead', 'image', 'steps', 'children', 'className']);
  rest.id = id;
  rest.className = processStepsClasses('section', 'process-section', props.className);
  rest['aria-labelledby'] = titleId;
  return h('section', rest,
    h('div', { className: 'site-shell split-heading' },
      h('div', null,
        props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
        h('h2', { id: titleId }, props.title)
      ),
      props.lead == null ? null : h('p', null, props.lead)
    ),
    h('div', { className: 'site-shell' },
      props.image == null ? null : h(ProcessVisual, { src: props.image.src, alt: props.image.alt, loading: props.image.loading }),
      h(ProcessSteps, { steps: props.steps }, props.children)
    )
  );
}

/* ---- BenefitList ---- */
/*
 * BenefitList — Spoorlangs (group: Content).
 * Two-column list of four bordered .25rem-radius benefit items with orange lucide icons:
 * the home page's "Why Spoorlangs" section (index.html, section#why).
 * Hand-written from the live site's markup (index.html: section#why.section.why-section >
 * .site-shell.why-layout > .why-copy + figure.why-visual) and custom.css L1248–L1295, L2063–L2064, L2121–L2131.
 * Site class names kept verbatim: .why-section · .why-layout · .why-copy · .benefit-list · .benefit-grid · .why-visual.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the "exports" list (BenefitIcon, BenefitItem, BenefitList, WhyVisual, WhySection).
 */

/* Icon path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC) —
   the four icons the site renders inside .benefit-list, in site order. Element order per icon is the file's. */
function spoorlangsBenefitIconParts(name) {
  switch (name) {
    case 'users':
      return [
        ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }],
        ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744' }],
        ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }],
        ['circle', { cx: '9', cy: '7', r: '4' }]
      ];
    case 'clock-3':
      return [
        ['circle', { cx: '12', cy: '12', r: '10' }],
        ['path', { d: 'M12 6v6h4' }]
      ];
    case 'map-pin':
      return [
        ['path', { d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' }],
        ['circle', { cx: '12', cy: '10', r: '3' }]
      ];
    case 'car-front':
      return [
        ['path', { d: 'm21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8' }],
        ['path', { d: 'M7 14h.01' }],
        ['path', { d: 'M17 14h.01' }],
        ['rect', { width: '18', height: '8', x: '3', y: '10', rx: '2' }],
        ['path', { d: 'M5 18v2' }],
        ['path', { d: 'M19 18v2' }]
      ];
  }
  return null;
}

/* The class attribute exactly as the site's lucide-react build writes it: "lucide lucide-<name>",
   except clock-3, which the site renders as "lucide lucide-clock3 lucide-clock-3" (both spellings). */
function spoorlangsBenefitIconClass(name) {
  return name === 'clock-3' ? 'lucide lucide-clock3 lucide-clock-3' : 'lucide lucide-' + name;
}

/* Props each component consumes itself; everything else passes through to its element. */
function spoorlangsBenefitOwnProp(key) {
  return key === 'icon' || key === 'title' || key === 'items' || key === 'grid' ||
    key === 'src' || key === 'alt' || key === 'loading' ||
    key === 'className' || key === 'children';
}

function spoorlangsBenefitRest(props) {
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsBenefitOwnProp(key)) {
      rest[key] = props[key];
    }
  }
  return rest;
}

/* BenefitIcon — the inline lucide <svg> exactly as the site renders it inside a benefit item:
   xmlns, width/height 24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2,
   round caps and joins, class "lucide lucide-<name>", aria-hidden="true".
   Coloured by `.benefit-list svg { color: var(--orange) }`; no CSS size rule, so it stays 24×24. */
function BenefitIcon(props) {
  var h = window.React.createElement;
  var parts = spoorlangsBenefitIconParts(props.name);
  if (!parts) return null;
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: spoorlangsBenefitIconClass(props.name) + (props.className ? ' ' + props.className : ''),
    'aria-hidden': 'true'
  };
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', attrs].concat(children));
}

/* BenefitItem — one tile, the site's <li> verbatim:
   <li><svg …/><span><strong>Owner-driven first</strong>Tight loop, not a dispatch queue.</span></li>
   The <li> carries no class on the site; the description follows the <strong> inside the same <span>
   with no space between them (the <strong> is display:block, so the CSS separates the lines). */
function BenefitItem(props) {
  var h = window.React.createElement;
  var icon = typeof props.icon === 'string' ? h(BenefitIcon, { name: props.icon }) : (props.icon || null);
  var attrs = spoorlangsBenefitRest(props);
  if (props.className) attrs.className = props.className;
  return h('li', attrs,
    icon,
    h('span', null,
      props.title == null ? null : h('strong', null, props.title),
      props.children
    )
  );
}

/* BenefitList — <ul class="benefit-list benefit-grid"> (the site's one instance: four items, two columns,
   one column at <=639px). `grid: false` drops the .benefit-grid modifier (one column at every width).
   Pass `items` ({icon, title, text}) or compose BenefitItem children yourself. */
function BenefitList(props) {
  var h = window.React.createElement;
  var classes = ['benefit-list'];
  if (props.grid !== false) classes.push('benefit-grid');
  if (props.className) classes.push(props.className);
  var attrs = spoorlangsBenefitRest(props);
  attrs.className = classes.join(' ');
  var children = props.children;
  if (props.items) {
    children = props.items.map(function (item, i) {
      return h(BenefitItem, { key: item.key != null ? item.key : i, icon: item.icon, title: item.title }, item.text);
    });
  }
  return h('ul', attrs, children);
}

/* WhyVisual — the framed photograph beside the copy:
   <figure class="why-visual"><img src="…/why-choose-us.png" alt="…" loading="lazy"/></figure>
   (1px --border, radius .375rem, overflow hidden; height clamp(13rem,24vh,16rem) at >=900px, object-fit cover). */
function WhyVisual(props) {
  var h = window.React.createElement;
  var attrs = spoorlangsBenefitRest(props);
  attrs.className = props.className ? 'why-visual ' + props.className : 'why-visual';
  var img = props.children || h('img', { src: props.src, alt: props.alt, loading: props.loading || 'lazy' });
  return h('figure', attrs, img);
}

/* WhySection — the whole home-page block, markup as index.html:
   <section id="why" class="section why-section" aria-labelledby="why-title">
     <div class="site-shell why-layout">
       <div class="why-copy">
         <p class="eyebrow">Why Spoorlangs</p>
         <h2 id="why-title">Premium service. Human accountability.</h2>
         <p class="lead">Every movement is handled as a professional journey, with direct communication and a clear handover.</p>
         <ul class="benefit-list benefit-grid">…</ul>
       </div>
       <figure class="why-visual">…</figure>
     </div>
     {children — on the site the .pod-layout and .about-layout blocks follow inside the same section}
   </section>
   .eyebrow, h2 and .lead are styled by the Eyebrow / SectionHeading / Base families (same bundle). */
function WhySection(props) {
  var h = window.React.createElement;
  var id = props.id || 'why';
  var titleId = props.titleId || (id + '-title');
  var list = props.list !== undefined
    ? props.list
    : (props.items ? h(BenefitList, { items: props.items, grid: props.grid }) : null);
  var visual = props.visual !== undefined
    ? props.visual
    : (props.image ? h(WhyVisual, { src: props.image.src, alt: props.image.alt, loading: props.image.loading }) : null);
  return h('section', {
    id: id,
    className: props.className ? 'section why-section ' + props.className : 'section why-section',
    'aria-labelledby': titleId
  },
    h('div', { className: 'site-shell why-layout' },
      h('div', { className: 'why-copy' },
        props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
        h('h2', { id: titleId }, props.title),
        props.lead == null ? null : h('p', { className: 'lead' }, props.lead),
        list
      ),
      visual
    ),
    props.children
  );
}

/* ---- TrustRitual ---- */
/*
 * TrustRitual — Spoorlangs (group: Content).
 * The home page's POD block: <div class="site-shell pod-layout"> — a bordered <figure><img> beside a copy column
 * (<p class="eyebrow">, <h3>, <p>) that ends in the three-item <ol class="trust-ritual"> with orange Oswald numerals.
 * Markup copied from spoorlangs.online index.html (inside #why, once); CSS in TrustRitual.css
 * (custom.css L1287–L1323 and L2132–L2138 inside @media (width>=900px)).
 * Site class names kept verbatim: .pod-layout · .trust-ritual (· .site-shell passed as className by the site instance).
 * Plain JS, no JSX, no module syntax, no window assignment: the orchestrator wraps every part in one IIFE and
 * assigns window.Spoorlangs from the names this part returns (TrustRitual, TrustRitualList, TrustRitualItem).
 */

/* Joins the truthy class names, or returns undefined so React emits no empty class attribute. */
function trustRitualClasses() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) out.push(arguments[i]);
  }
  return out.length ? out.join(' ') : undefined;
}

/* The site's numeral format: "01", "02", "03" — two digits, zero-padded. */
function trustRitualNumber(index) {
  var n = index + 1;
  return (n < 10 ? '0' : '') + n;
}

/* TrustRitualItem — one step: <li><span>01</span>Collect pin confirmed</li>.
   The numeral <span> (orange, var(--font-display)) comes first, the text follows as a bare text node, exactly as the site renders it. */
function TrustRitualItem(props) {
  var h = window.React.createElement;
  return h('li', { className: props.className },
    h('span', null, props.number),
    props.children
  );
}

/* TrustRitualList — the ordered list alone: <ol class="trust-ritual" aria-label="…">.
   `items` entries are strings (auto-numbered "01"…) or { number, label }; `children` renders instead of `items`
   when given (TrustRitualItem elements). */
function TrustRitualList(props) {
  var h = window.React.createElement;
  var children = props.children;
  if (children == null && props.items) {
    children = props.items.map(function (item, i) {
      var isObject = item !== null && typeof item === 'object' && !window.React.isValidElement(item);
      var number = isObject && item.number != null ? item.number : trustRitualNumber(i);
      var label = isObject ? item.label : item;
      return h(TrustRitualItem, { key: i, number: number }, label);
    });
  }
  return h('ol', {
    className: trustRitualClasses('trust-ritual', props.className),
    'aria-label': props.ariaLabel == null ? 'Spoorlangs collection and delivery proof process' : props.ariaLabel
  }, children);
}

/* TrustRitual — the whole POD block as the site renders it:
   <div class="pod-layout">
     <figure><img src alt loading="lazy"/></figure>
     <div>
       <p class="eyebrow">Proof at handover</p>
       <h3>POD means Proof of Delivery.</h3>
       <p>The job is closed when you have proof of delivery, not when we say so.</p>
       <ol class="trust-ritual" aria-label="…">…</ol>
     </div>
   </div>
   The site instance carries class="site-shell pod-layout" — pass `className: 'site-shell'` to reproduce it.
   Inside .pod-layout every <p> (the eyebrow too) takes var(--muted-foreground) / line-height 1.7 from the site's
   shared rule `.pod-layout p` (Base) — a source behaviour this component keeps. */
function TrustRitual(props) {
  var h = window.React.createElement;
  var figure = null;
  if (props.figure != null) {
    figure = h('figure', null, props.figure);
  } else if (props.imageSrc) {
    figure = h('figure', null, h('img', {
      src: props.imageSrc,
      alt: props.imageAlt == null ? '' : props.imageAlt,
      loading: props.loading || 'lazy'
    }));
  }
  var list = null;
  if (props.items != null || props.listChildren != null) {
    list = h(TrustRitualList, { items: props.items, ariaLabel: props.ariaLabel }, props.listChildren);
  }
  return h('div', { className: trustRitualClasses(props.className, 'pod-layout') },
    figure,
    h('div', null,
      props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
      props.title == null ? null : h('h3', { id: props.id }, props.title),
      props.lead == null ? null : h('p', null, props.lead),
      list,
      props.children
    )
  );
}

/* ---- AboutLayout ---- */
/* AboutLayout — Spoorlangs. The home page's hairline-topped about block:
   <div id="about" class="site-shell about-layout"> with the hidden legacy #nico anchor, an eyebrow + h3 cell and one muted paragraph.
   Source markup: index.html — the last child of <section id="why" class="section why-section">, after .site-shell.pod-layout.
   Source CSS (AboutLayout.css): custom.css L1324–L1335 (.about-layout, .about-layout>p), L1336–L1338 (.legacy-anchor),
   L2139–L2141 (.about-layout inside the @media (width>=900px) block opened at L2066).
   .eyebrow is styled by the Eyebrow part, h3 by the global h1,h2,h3 / h3 rules, .site-shell by Base — all in bundle.css. */

function aboutLayoutClasses() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) out.push(arguments[i]);
  }
  return out.length ? out.join(' ') : undefined;
}

/* Renders the site's exact markup:
   <div id="about" class="site-shell about-layout">
     <span id="nico" class="legacy-anchor" aria-hidden="true"></span>
     <div><p class="eyebrow">About Spoorlangs</p><h3>Who we are</h3></div>
     <p>Spoorlangs is owner-driven: …</p>
   </div>
   Props: eyebrow, title (h3), body (the paragraph) or children; id (default "about", null = none),
   anchorId (default "nico", null = no span), headingId, shell (default true), className, plus any other
   <div> attribute passed through. */
function AboutLayout(props) {
  var h = window.React.createElement;
  var id = props.id === undefined ? 'about' : props.id;
  var anchorId = props.anchorId === undefined ? 'nico' : props.anchorId;
  var shell = props.shell === undefined ? true : !!props.shell;
  var own = { id: 1, anchorId: 1, shell: 1, eyebrow: 1, title: 1, headingId: 1, body: 1, children: 1, className: 1 };
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !own[key]) rest[key] = props[key];
  }
  if (id) rest.id = id;
  rest.className = aboutLayoutClasses(shell ? 'site-shell' : null, 'about-layout', props.className);
  return h('div', rest,
    anchorId ? h('span', { id: anchorId, className: 'legacy-anchor', 'aria-hidden': 'true' }) : null,
    h('div', null,
      props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
      h('h3', { id: props.headingId }, props.title)
    ),
    props.body == null ? null : h('p', null, props.body),
    props.children
  );
}

/* ---- WhatsappBand ---- */
/*
 * WhatsappBand — Spoorlangs (group: Sections; page showcase).
 * The home page's black WhatsApp call-to-action band, between #why and #faq (index.html only):
 *   <aside class="whatsapp-band" aria-label="WhatsApp quote call to action">
 *     <div class="site-shell whatsapp-layout"><div>
 *       <p class="eyebrow">Talk directly to Spoorlangs</p>
 *       <h2>Have a runner to move?</h2>
 *       <p>Share the collection point, destination, vehicle and preferred timing.</p>
 *       <div class="contact-actions">
 *         <a href="https://wa.me/27662715887?text=…" target="_blank" rel="noreferrer" class="button-primary"
 *            aria-label="WhatsApp +27 66 271 5887"><svg message-circle/><span>WhatsApp us</span><svg arrow-right/></a>
 *         <a class="button-secondary" href="/quote?service=&pickup=">Fill in the quote form</a>
 *       </div>
 *     </div></div>
 *   </aside>
 * CSS: custom.css L1339–L1348 (.whatsapp-band, .whatsapp-layout, .whatsapp-layout h2, .whatsapp-layout .button-primary),
 * L1151–L1153 (.whatsapp-layout>div>p), L1413–L1419 + L2022–L2024 (.contact-actions) — see WhatsappBand.css.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the "exports" list (WhatsappBand, WhatsappBandAction).
 * Every default below is the site's own copy, verbatim.
 */

/* Icon path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC):
   the two icons the band renders inside its WhatsApp link. Identical to the site's lucide-react paths. */
function spoorlangsWhatsappBandIconParts(name) {
  switch (name) {
    case 'message-circle':
      return [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ];
    case 'arrow-right':
      return [
        ['path', { d: 'M5 12h14' }],
        ['path', { d: 'm12 5 7 7-7 7' }]
      ];
  }
  return null;
}

/* The inline lucide <svg> exactly as the site renders it inside the link: xmlns, 24×24, viewBox 0 0 24 24,
   fill none, stroke currentColor, stroke-width 2, round caps and joins, class "lucide lucide-<name>",
   aria-hidden="true". Sized by the site rule `.button-primary svg,.button-secondary svg { width:1.15rem; height:1.15rem }`. */
function spoorlangsWhatsappBandIcon(name) {
  var h = window.React.createElement;
  var parts = spoorlangsWhatsappBandIconParts(name);
  if (!parts) return null;
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'lucide lucide-' + name,
    'aria-hidden': 'true'
  };
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', attrs].concat(children));
}

/* The site's two actions, in site order (index.html .whatsapp-band .contact-actions). A fresh array each call. */
function spoorlangsWhatsappBandDefaultActions() {
  return [
    {
      variant: 'primary',
      href: 'https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request',
      target: '_blank',
      rel: 'noreferrer',
      'aria-label': 'WhatsApp +27 66 271 5887',
      icon: 'message-circle',
      label: 'WhatsApp us',
      trailingIcon: 'arrow-right'
    },
    {
      variant: 'secondary',
      href: '/quote?service=&pickup=',
      label: 'Fill in the quote form'
    }
  ];
}

/* WhatsappBandAction — one link in the band's .contact-actions row:
   <a class="button-primary|button-secondary[ className]" href …>[<svg icon/>]<span>label</span>|label[<svg trailing/>]</a>
   `icon` / `trailingIcon` take an icon name ("message-circle", "arrow-right") rendered as the site's inline
   <svg>, or any React node. The label sits in a <span> when a leading icon is present (site: "WhatsApp us"),
   bare otherwise (site: "Fill in the quote form"); `wrapLabel` overrides. Every other prop passes through to the <a>. */
function WhatsappBandAction(props) {
  var h = window.React.createElement;
  var p = props || {};
  var variant = p.variant === 'secondary' ? 'secondary' : 'primary';
  var icon = typeof p.icon === 'string' ? spoorlangsWhatsappBandIcon(p.icon) : (p.icon || null);
  var trailing = typeof p.trailingIcon === 'string' ? spoorlangsWhatsappBandIcon(p.trailingIcon) : (p.trailingIcon || null);
  var label = p.label !== undefined ? p.label : p.children;
  var wrap = p.wrapLabel === undefined ? !!icon : !!p.wrapLabel;
  var own = { variant: 1, icon: 1, trailingIcon: 1, label: 1, children: 1, wrapLabel: 1, className: 1 };
  var attrs = {};
  for (var k in p) {
    if (Object.prototype.hasOwnProperty.call(p, k) && !own[k]) attrs[k] = p[k];
  }
  attrs.className = ['button-' + variant, p.className].filter(Boolean).join(' ');
  return h('a', attrs, icon, wrap ? h('span', null, label) : label, trailing);
}

/* WhatsappBand — the <aside class="whatsapp-band"> landmark with .site-shell.whatsapp-layout > div holding
   <p class="eyebrow">, <h2>, <p> and the .contact-actions row. `actions` (array of WhatsappBandAction props)
   or `children` (custom nodes for the row); `eyebrow`, `title`, `text` default to the site's copy
   (pass null to omit one). Every other prop (id, style, data-*, aria-*) passes through to the <aside>;
   aria-label defaults to the site's "WhatsApp quote call to action". */
function WhatsappBand(props) {
  var h = window.React.createElement;
  var p = props || {};
  var eyebrow = p.eyebrow !== undefined ? p.eyebrow : 'Talk directly to Spoorlangs';
  var title = p.title !== undefined ? p.title : 'Have a runner to move?';
  var text = p.text !== undefined ? p.text : 'Share the collection point, destination, vehicle and preferred timing.';
  var actions = Array.isArray(p.actions) ? p.actions : spoorlangsWhatsappBandDefaultActions();
  var own = { eyebrow: 1, title: 1, text: 1, actions: 1, children: 1, className: 1 };
  var rest = {};
  for (var k in p) {
    if (Object.prototype.hasOwnProperty.call(p, k) && !own[k]) rest[k] = p[k];
  }
  rest.className = ['whatsapp-band', p.className].filter(Boolean).join(' ');
  if (rest['aria-label'] === undefined) rest['aria-label'] = 'WhatsApp quote call to action';

  var actionNodes;
  if (p.children !== undefined && p.children !== null) {
    actionNodes = p.children;
  } else {
    actionNodes = actions.map(function (action, i) {
      var ap = {};
      for (var key in action) {
        if (Object.prototype.hasOwnProperty.call(action, key)) ap[key] = action[key];
      }
      if (ap.key === undefined) ap.key = action.href !== undefined ? String(action.href) + '-' + i : i;
      return h(WhatsappBandAction, ap);
    });
  }

  return h('aside', rest,
    h('div', { className: 'site-shell whatsapp-layout' },
      h('div', null,
        eyebrow ? h('p', { className: 'eyebrow' }, eyebrow) : null,
        title ? h('h2', null, title) : null,
        text ? h('p', null, text) : null,
        h('div', { className: 'contact-actions' }, actionNodes)
      )
    )
  );
}

/* ---- FaqList ---- */
/*
 * FaqList — Spoorlangs (group: Content).
 * Native <details>/<summary> accordion with hairline rows, 800-weight questions and an orange rotating "+".
 * Hand-written from the live site's markup (index.html #faq; page-faq.html .faq-section-page ×3 + .faq-cta;
 * page-pricing.html .faq-section-page ×2 + .faq-cta) and custom.css L1349–L1381, L2142–L2152 (≥900px),
 * L2320–L2332, L2421–L2424 — see FaqList.css. Site class names kept verbatim:
 * .faq-section · .faq-layout · .faq-sub · .faq-list · .faq-section-page · .faq-group-heading · .faq-cta · .pricing-cta-row.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE and
 * assigns window.Spoorlangs from the "exports" list (FaqSection, FaqGroup, FaqList, FaqItem, FaqCta).
 */

/* Icon path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC) —
   the two icons the site renders inside the FAQ / pricing CTA row. */
function spoorlangsFaqIconParts(name) {
  switch (name) {
    case 'arrow-right':
      return [
        ['path', { d: 'M5 12h14' }],
        ['path', { d: 'm12 5 7 7-7 7' }]
      ];
    case 'message-circle':
      return [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ];
  }
  return null;
}

/* The inline lucide <svg> exactly as the site renders it inside a .button-primary:
   xmlns, 24×24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2, round caps/joins,
   class "lucide lucide-<name>", aria-hidden="true". Sized by Button's `.button-primary svg { width:1.15rem; height:1.15rem }`. */
function spoorlangsFaqIcon(name) {
  var h = window.React.createElement;
  var parts = spoorlangsFaqIconParts(name);
  if (!parts) return null;
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'lucide lucide-' + name,
    'aria-hidden': 'true'
  }].concat(children));
}

/* Joins the site's class name with an optional consumer className. */
function spoorlangsFaqClasses(base, extra) {
  return extra ? base + ' ' + extra : base;
}

/* The site's own id for a group heading: "faq-" + the heading lowercased, whitespace → "-"
   ("What Spoorlangs does" → "faq-what-spoorlangs-does"; "Booking, quotes and rates" → "faq-booking,-quotes-and-rates", as on /faq). */
function spoorlangsFaqGroupId(heading) {
  return 'faq-' + String(heading).toLowerCase().replace(/\s+/g, '-');
}

/* Props FaqItem consumes itself; everything else passes through to the <details> element. */
function spoorlangsFaqItemIsOwnProp(key) {
  return key === 'question' || key === 'answer' || key === 'open' ||
    key === 'className' || key === 'children' || key === 'onToggle';
}

/* FaqItem — one row, the site's exact markup:
   <details [open]><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
   The "+" is a literal span the CSS colours --orange at 1.7rem and rotates 45° when the <details> is open. */
function FaqItem(props) {
  var h = window.React.createElement;
  var attrs = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsFaqItemIsOwnProp(key)) {
      attrs[key] = props[key];
    }
  }
  if (props.className) attrs.className = props.className;
  if (props.open) attrs.open = true;
  if (props.onToggle) attrs.onToggle = props.onToggle;
  return h('details', attrs,
    h('summary', null, props.question, h('span', { 'aria-hidden': 'true' }, '+')),
    props.answer == null ? null : h('p', null, props.answer),
    props.children
  );
}

/* FaqList — <div class="faq-list"> of FaqItems (hairline top rule; each <details> carries the bottom rule).
   items: [{ question, answer, open?, id?, key?, className? }]. onToggle(event, index, item) is forwarded to every <details>. */
function FaqList(props) {
  var h = window.React.createElement;
  var items = props.items || [];
  var rows = items.map(function (item, index) {
    var itemProps = {
      key: item.key != null ? item.key : (item.id != null ? item.id : index),
      question: item.question,
      answer: item.answer,
      open: !!item.open
    };
    if (item.id) itemProps.id = item.id;
    if (item.className) itemProps.className = item.className;
    if (props.onToggle) {
      itemProps.onToggle = function (event) { props.onToggle(event, index, item); };
    }
    return h(FaqItem, itemProps);
  });
  return h('div', { className: spoorlangsFaqClasses('faq-list', props.className) }, rows, props.children);
}

/* FaqGroup — a titled group as on /faq and /pricing:
   <section class="faq-section-page" aria-labelledby={id}><h2 id={id} class="faq-group-heading">{heading}</h2>{FaqList}{children}</section>
   id defaults to the site's own derivation from a string heading (spoorlangsFaqGroupId); the pricing page uses its own ids ("rates-title", "vehicles-title"). */
function FaqGroup(props) {
  var h = window.React.createElement;
  var id = props.id || (typeof props.heading === 'string' ? spoorlangsFaqGroupId(props.heading) : undefined);
  return h('section', { className: spoorlangsFaqClasses('faq-section-page', props.className), 'aria-labelledby': id },
    h('h2', { id: id, className: 'faq-group-heading' }, props.heading),
    props.items ? h(FaqList, { items: props.items, onToggle: props.onToggle }) : null,
    props.children
  );
}

/* FaqSection — the home page block (index.html #faq):
   <section id="faq" class="section faq-section" aria-labelledby="faq-title">
     <div class="site-shell faq-layout"><div>
       <p class="eyebrow">…</p><h2 id="faq-title">…</h2><p class="faq-sub">…</p>
       <div class="faq-list">…</div>
       <p class="faq-sub"><a class="service-card-link" href="/pricing">See the guide rates</a></p>
     </div></div>
   </section>
   The eyebrow is the site's <p class="eyebrow"> (Eyebrow family CSS); the footer link is the site's .service-card-link (ServiceCard family CSS). */
function FaqSection(props) {
  var h = window.React.createElement;
  var titleId = props.titleId || 'faq-title';
  return h('section', {
    id: props.id || 'faq',
    className: spoorlangsFaqClasses('section faq-section', props.className),
    'aria-labelledby': titleId
  },
    h('div', { className: 'site-shell faq-layout' },
      h('div', null,
        props.eyebrow == null ? null : h('p', { className: 'eyebrow' }, props.eyebrow),
        h('h2', { id: titleId }, props.title),
        props.sub == null ? null : h('p', { className: 'faq-sub' }, props.sub),
        h(FaqList, { items: props.items || [], onToggle: props.onToggle }),
        props.children,
        props.link ? h('p', { className: 'faq-sub' },
          h('a', { className: 'service-card-link', href: props.link.href }, props.link.label)
        ) : null
      )
    )
  );
}

/* FaqCta — the closing call-to-action under the groups (page-faq.html, page-pricing.html):
   <div class="faq-cta"><p class="lead">{lead}</p><div class="pricing-cta-row">
     <a class="button-primary" href={primary.href}><span>{primary.label}</span><svg arrow-right/></a>
     <a href={wa.me…} target="_blank" rel="noreferrer" class="button-primary" aria-label="WhatsApp +27 66 271 5887"><svg message-circle/><span>{whatsapp.label}</span><svg arrow-right/></a>
   </div></div>
   Both anchors are the site's .button-primary (Button family CSS). children render after them for other action nodes (e.g. Spoorlangs.Button). */
function FaqCta(props) {
  var h = window.React.createElement;
  var primary = props.primary ? h('a', { className: 'button-primary', href: props.primary.href },
    h('span', null, props.primary.label),
    spoorlangsFaqIcon('arrow-right')
  ) : null;
  var whatsapp = props.whatsapp ? h('a', {
    href: props.whatsapp.href || 'https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request',
    target: '_blank',
    rel: 'noreferrer',
    className: 'button-primary',
    'aria-label': 'WhatsApp +27 66 271 5887'
  },
    spoorlangsFaqIcon('message-circle'),
    h('span', null, props.whatsapp.label),
    spoorlangsFaqIcon('arrow-right')
  ) : null;
  return h('div', { className: spoorlangsFaqClasses('faq-cta', props.className) },
    props.lead == null ? null : h('p', { className: 'lead' }, props.lead),
    h('div', { className: 'pricing-cta-row' }, primary, whatsapp, props.children)
  );
}

/* ---- ContactBand ---- */
/*
 * ContactBand — Spoorlangs (group: Sections; page showcase).
 * The home page's photo contact band, #contact, the last section before the footer (index.html only):
 *   <section id="contact" class="contact-section" aria-labelledby="contact-title">
 *     <img src="…/contact-cta.png" alt="Get a Spoorlangs vehicle delivery quote" loading="lazy"/>
 *     <div class="contact-overlay" aria-hidden="true"></div>
 *     <div class="site-shell contact-content">
 *       <p class="eyebrow">Kempton Park · Gauteng vehicle delivery</p>
 *       <h2 id="contact-title">Every vehicle deserves a professional journey.</h2>
 *       <p class="contact-hours">Message any time · Nico replies from 07:30 · we confirm your window.</p>
 *       <div class="contact-actions">
 *         <a href="https://wa.me/27662715887?text=…" target="_blank" rel="noreferrer" class="button-primary"
 *            aria-label="WhatsApp +27 66 271 5887"><svg message-circle/><span>WhatsApp us</span><svg arrow-right/></a>
 *         <a class="button-secondary" href="mailto:drive@spoorlangs.online"><svg mail/>drive@spoorlangs.online</a>
 *         <a class="button-secondary" href="/quote?service=&pickup=">Get a quote</a>
 *         <a class="button-secondary" href="/contact">Contact details</a>
 *       </div>
 *     </div>
 *   </section>
 * CSS: custom.css L1382–L1419 (.contact-section, .contact-section>img / .contact-overlay, the @supports color-mix
 * overlay pair, .contact-content, .contact-content h2, .contact-hours, .contact-actions) and L2022–L2024
 * (.contact-actions inside @media (width>=640px)) — see ContactBand.css.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the "exports" list (ContactBand, ContactBandAction).
 * Every default below is the site's own copy, verbatim.
 */

/* Icon path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC):
   the three icons this band renders inside its links. Identical to the site's lucide-react paths. */
function spoorlangsContactBandIconParts(name) {
  switch (name) {
    case 'message-circle':
      return [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ];
    case 'arrow-right':
      return [
        ['path', { d: 'M5 12h14' }],
        ['path', { d: 'm12 5 7 7-7 7' }]
      ];
    case 'mail':
      return [
        ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' }],
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }]
      ];
  }
  return null;
}

/* The inline lucide <svg> exactly as the site renders it inside the link: xmlns, 24×24, viewBox 0 0 24 24,
   fill none, stroke currentColor, stroke-width 2, round caps and joins, class "lucide lucide-<name>",
   aria-hidden="true". Sized by the site rule `.button-primary svg,.button-secondary svg { width:1.15rem; height:1.15rem }`. */
function spoorlangsContactBandIcon(name) {
  var h = window.React.createElement;
  var parts = spoorlangsContactBandIconParts(name);
  if (!parts) return null;
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'lucide lucide-' + name,
    'aria-hidden': 'true'
  };
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', attrs].concat(children));
}

/* The site's four actions, in site order (index.html #contact .contact-actions). A fresh array each call.
   The mail link's label is bare text after its icon (no <span>) — the site's own markup, hence wrapLabel:false. */
function spoorlangsContactBandDefaultActions() {
  return [
    {
      variant: 'primary',
      href: 'https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request',
      target: '_blank',
      rel: 'noreferrer',
      'aria-label': 'WhatsApp +27 66 271 5887',
      icon: 'message-circle',
      label: 'WhatsApp us',
      trailingIcon: 'arrow-right'
    },
    {
      variant: 'secondary',
      href: 'mailto:drive@spoorlangs.online',
      icon: 'mail',
      label: 'drive@spoorlangs.online',
      wrapLabel: false
    },
    {
      variant: 'secondary',
      href: '/quote?service=&pickup=',
      label: 'Get a quote'
    },
    {
      variant: 'secondary',
      href: '/contact',
      label: 'Contact details'
    }
  ];
}

/* ContactBandAction — one link in the band's .contact-actions row:
   <a class="button-primary|button-secondary[ className]" href …>[<svg icon/>]<span>label</span>|label[<svg trailing/>]</a>
   `icon` / `trailingIcon` take an icon name ("message-circle", "arrow-right", "mail") rendered as the site's inline
   <svg>, or any React node. The label sits in a <span> when a leading icon is present (site: "WhatsApp us"),
   bare otherwise; `wrapLabel` overrides (the site's mail link is bare despite its icon). Every other prop passes
   through to the <a>. */
function ContactBandAction(props) {
  var h = window.React.createElement;
  var p = props || {};
  var variant = p.variant === 'secondary' ? 'secondary' : 'primary';
  var icon = typeof p.icon === 'string' ? spoorlangsContactBandIcon(p.icon) : (p.icon || null);
  var trailing = typeof p.trailingIcon === 'string' ? spoorlangsContactBandIcon(p.trailingIcon) : (p.trailingIcon || null);
  var label = p.label !== undefined ? p.label : p.children;
  var wrap = p.wrapLabel === undefined ? !!icon : !!p.wrapLabel;
  var own = { variant: 1, icon: 1, trailingIcon: 1, label: 1, children: 1, wrapLabel: 1, className: 1 };
  var attrs = {};
  for (var k in p) {
    if (Object.prototype.hasOwnProperty.call(p, k) && !own[k]) attrs[k] = p[k];
  }
  attrs.className = ['button-' + variant, p.className].filter(Boolean).join(' ');
  return h('a', attrs, icon, wrap ? h('span', null, label) : label, trailing);
}

/* ContactBand — the <section class="contact-section"> landmark: the photograph (<img loading="lazy">, no class),
   the .contact-overlay scrim, then .site-shell.contact-content holding <p class="eyebrow">, <h2 id>, <p class="contact-hours">
   and the .contact-actions row. `actions` (array of ContactBandAction props) or `children` (custom nodes for the row);
   `eyebrow`, `title`, `hours`, `imageAlt` default to the site's copy (pass null to omit one); `id` defaults to "contact",
   `titleId` to "contact-title" and feeds aria-labelledby. Every other prop (style, data-*, aria-*) passes through to the <section>. */
function ContactBand(props) {
  var h = window.React.createElement;
  var p = props || {};
  var eyebrow = p.eyebrow !== undefined ? p.eyebrow : 'Kempton Park · Gauteng vehicle delivery';
  var title = p.title !== undefined ? p.title : 'Every vehicle deserves a professional journey.';
  var hours = p.hours !== undefined ? p.hours : 'Message any time · Nico replies from 07:30 · we confirm your window.';
  var titleId = p.titleId || 'contact-title';
  var imageAlt = p.imageAlt !== undefined ? p.imageAlt : 'Get a Spoorlangs vehicle delivery quote';
  var imageLoading = p.imageLoading !== undefined ? p.imageLoading : 'lazy';
  var actions = Array.isArray(p.actions) ? p.actions : spoorlangsContactBandDefaultActions();
  var own = { imageSrc: 1, imageAlt: 1, imageLoading: 1, eyebrow: 1, title: 1, titleId: 1, hours: 1, actions: 1, children: 1, className: 1 };
  var rest = {};
  for (var k in p) {
    if (Object.prototype.hasOwnProperty.call(p, k) && !own[k]) rest[k] = p[k];
  }
  rest.className = ['contact-section', p.className].filter(Boolean).join(' ');
  if (rest.id === undefined) rest.id = 'contact';
  if (rest['aria-labelledby'] === undefined && title) rest['aria-labelledby'] = titleId;

  var actionNodes;
  if (p.children !== undefined && p.children !== null) {
    actionNodes = p.children;
  } else {
    actionNodes = actions.map(function (action, i) {
      var ap = {};
      for (var key in action) {
        if (Object.prototype.hasOwnProperty.call(action, key)) ap[key] = action[key];
      }
      if (ap.key === undefined) ap.key = action.href !== undefined ? String(action.href) + '-' + i : i;
      return h(ContactBandAction, ap);
    });
  }

  return h('section', rest,
    p.imageSrc
      ? h('img', { src: p.imageSrc, alt: imageAlt, loading: imageLoading })
      : null,
    h('div', { className: 'contact-overlay', 'aria-hidden': 'true' }),
    h('div', { className: 'site-shell contact-content' },
      eyebrow ? h('p', { className: 'eyebrow' }, eyebrow) : null,
      title ? h('h2', { id: titleId }, title) : null,
      hours ? h('p', { className: 'contact-hours' }, hours) : null,
      h('div', { className: 'contact-actions' }, actionNodes)
    )
  );
}

/* ---- CoverageSection ---- */
/*
 * CoverageSection — Spoorlangs (group: Sections; page showcase).
 * Hand-written from the live site's coverage markup:
 *   index.html        <section id="coverage" class="section coverage-section" aria-labelledby="coverage-title">
 *                       <div class="site-shell">
 *                         <div class="section-heading"><p class="eyebrow">Where we drive</p><h2 id="coverage-title">Gauteng, on the ground.</h2><p>…</p></div>
 *                         <div class="coverage-map" role="region" aria-label="Map of Gauteng areas Spoorlangs collects from and delivers to"></div>
 *                         <p class="coverage-note">Pins mark the areas we cover — not live driver locations. …</p>
 *                         <a class="button-primary coverage-booking-link" href="/coverage?service=&pickup=">Request a run</a>
 *                       </div>
 *                     </section>
 *   page-coverage.html (inside .site-shell.booking-page, below the page's title block):
 *                     <ul class="coverage-honesty" aria-label="Spoorlangs coverage and service scope"><li>…</li>×4</ul>
 *                     <div class="coverage-map" role="region" aria-label="…"></div>
 *                     <p class="coverage-note">Coverage pins are approximate area centres. …</p>
 * Map runtime (js/coverage-map-WzymGYBF.js, client-only): Leaflet map {scrollWheelZoom:false, zoomControl:true};
 *   tiles https://tile.openstreetmap.org/{z}/{x}/{y}.png, attribution `&copy; <a href="https://www.openstreetmap.org/copyright"
 *   target="_blank" rel="noreferrer">OpenStreetMap</a> contributors`, maxZoom 18; one circleMarker per area
 *   {radius:9, color:<computed --orange>, weight:2, fillColor:<computed --orange>, fillOpacity:.35}; popup
 *   `<strong>${name}</strong><br /><a href="/coverage?pickup=${name}">Request a run</a> · <a href="wa.me…" target="_blank" rel="noreferrer">WhatsApp</a>`;
 *   fitBounds(all pins, {padding:[32,32]}). Pin list: js/index-XYJAvexp.js (`vd`).
 * CSS: custom.css L1420–L1462 and L1642–L1668 → CoverageSection.css (.coverage-booking-link's margin lives in Button.css).
 * Site class names kept verbatim: .section .coverage-section · .site-shell · .section-heading · .eyebrow · .coverage-map ·
 * .coverage-note · .button-primary .coverage-booking-link · .coverage-honesty · Leaflet's .leaflet-control-container /
 * .leaflet-bottom.leaflet-right / .leaflet-control-attribution.leaflet-control / .leaflet-interactive.
 * STATIC RENDITION: the site draws the map with Leaflet + OpenStreetMap tiles over the network at runtime. Here the bordered
 * box shows the site's eight markers projected in Web Mercator (Leaflet's default CRS) with Leaflet's fitBounds padding, on the
 * --card ground the box shows before tiles arrive, plus the attribution strip. No tiles, zoom control or popups: Leaflet's own
 * stylesheet (leaflet-vh-t_kPv.css) is not in the source pack. A consumer mounting real Leaflet gets the element via `mapRef`
 * and passes `children` (or `areas: []`) to leave the box empty, exactly as the server renders it.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE and assigns
 * window.Spoorlangs from the "exports" list (CoverageSection, CoverageMap, CoverageHonesty, CoverageNote, CoverageBookingLink).
 * Every default below is the site's own copy, verbatim.
 */

/* The site's eight coverage areas (js/index-XYJAvexp.js `vd`), in site order. A fresh array each call. */
function spoorlangsCoverageAreas() {
  return [
    { name: 'Johannesburg', lat: -26.2041, lng: 28.0473 },
    { name: 'Sandton', lat: -26.1076, lng: 28.0567 },
    { name: 'Midrand', lat: -25.9992, lng: 28.1263 },
    { name: 'Centurion', lat: -25.8603, lng: 28.1894 },
    { name: 'Pretoria', lat: -25.7479, lng: 28.2293 },
    { name: 'Ekurhuleni', lat: -26.2285, lng: 28.3626 },
    { name: 'Roodepoort & West Rand', lat: -26.1625, lng: 27.8725 },
    { name: 'Vereeniging & Vanderbijlpark', lat: -26.6496, lng: 27.9587 }
  ];
}

/* The four lines of the coverage page's honesty list (page-coverage.html), in site order. A fresh array each call. */
function spoorlangsCoverageHonestyItems() {
  return [
    'Based in Kempton Park',
    'Johannesburg / Greater Gauteng on-wheels, day one',
    'Outside Gauteng — WhatsApp us (no national branch list)',
    'Runners only: the vehicle must start and drive'
  ];
}

/* The site's two .coverage-note texts, verbatim. */
function spoorlangsCoverageNoteText(variant) {
  return variant === 'page'
    ? 'Coverage pins are approximate area centres. They do not show a driver, vehicle, active route or live position.'
    : 'Pins mark the areas we cover — not live driver locations. Trip starting or ending outside these areas? Message us and we will tell you straight whether it can be done.';
}

/* Copy every prop except the ones named in `own` (an object whose keys are the component's own props). */
function spoorlangsCoverageRest(props, own) {
  var rest = {};
  for (var k in props) {
    if (Object.prototype.hasOwnProperty.call(props, k) && !own[k]) rest[k] = props[k];
  }
  return rest;
}

/* Web Mercator (EPSG:3857 — Leaflet's default CRS) fit of `areas` into a width × height box with Leaflet's fitBounds
   padding (the site passes [32,32]): the bounds' centre sits at the box centre, one uniform scale fills the padded box.
   Continuous scale — Leaflet snaps to an integer zoom, so the live map sits at or just below this scale, centred the same way.
   Returns [{ x, y, area }] in box pixels, rounded like Leaflet's layer points. */
function spoorlangsCoverageProject(areas, width, height, padX, padY) {
  var pts = [];
  var i, lat;
  for (i = 0; i < areas.length; i++) {
    lat = Math.max(-85.0511287798, Math.min(85.0511287798, Number(areas[i].lat)));
    pts.push({
      x: Number(areas[i].lng) * Math.PI / 180,
      y: -Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)),
      area: areas[i]
    });
  }
  if (!pts.length) return pts;
  var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (i = 0; i < pts.length; i++) {
    if (pts[i].x < minX) minX = pts[i].x;
    if (pts[i].x > maxX) maxX = pts[i].x;
    if (pts[i].y < minY) minY = pts[i].y;
    if (pts[i].y > maxY) maxY = pts[i].y;
  }
  var dx = maxX - minX, dy = maxY - minY;
  var innerW = Math.max(width - 2 * padX, 1), innerH = Math.max(height - 2 * padY, 1);
  var scale = Infinity;
  if (dx > 0) scale = Math.min(scale, innerW / dx);
  if (dy > 0) scale = Math.min(scale, innerH / dy);
  if (!isFinite(scale)) scale = 1;
  var cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  for (i = 0; i < pts.length; i++) {
    pts[i].x = Math.round(width / 2 + (pts[i].x - cx) * scale);
    pts[i].y = Math.round(height / 2 + (pts[i].y - cy) * scale);
  }
  return pts;
}

/* CoverageMap — <div class="coverage-map" role="region" aria-label="Map of Gauteng areas Spoorlangs collects from and delivers to">.
   Static rendition inside: an <svg> of the markers (one <path class="leaflet-interactive"> per area, drawn with Leaflet's
   circle path — M x-r,y a r,r 0 1,0 2r,0 a r,r 0 1,0 -2r,0 — stroke var(--orange) 2px, fill var(--orange) at .35, round
   caps/joins, evenodd, a <title> with the area name) and the attribution strip in Leaflet's control markup. The element
   gets `position:relative` inline, as Leaflet sets on its container at runtime. `children` replaces the static rendition;
   `areas: []` leaves the box empty (the server-rendered state). Every other prop passes through to the <div>. */
function CoverageMap(props) {
  var React = window.React;
  var h = React.createElement;
  var p = props || {};
  var areas = Array.isArray(p.areas) ? p.areas : spoorlangsCoverageAreas();
  var ref = React.useRef(null);
  var sizeState = React.useState({ w: 0, h: 0 });
  var size = sizeState[0];
  var setSize = sizeState[1];
  var mapRef = p.mapRef;

  React.useLayoutEffect(function () {
    var el = ref.current;
    if (!el) return undefined;
    function measure() {
      var w = el.clientWidth, hh = el.clientHeight;
      setSize(function (prev) { return (prev.w === w && prev.h === hh) ? prev : { w: w, h: hh }; });
    }
    measure();
    if (typeof mapRef === 'function') mapRef(el);
    else if (mapRef && typeof mapRef === 'object') mapRef.current = el;
    var observer = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(measure);
      observer.observe(el);
    } else {
      window.addEventListener('resize', measure);
    }
    return function () {
      if (observer) observer.disconnect();
      else window.removeEventListener('resize', measure);
      if (typeof mapRef === 'function') mapRef(null);
      else if (mapRef && typeof mapRef === 'object') mapRef.current = null;
    };
  }, [mapRef]);

  var own = { areas: 1, attribution: 1, padding: 1, markerRadius: 1, mapRef: 1, className: 1, children: 1, style: 1 };
  var rest = spoorlangsCoverageRest(p, own);
  rest.className = ['coverage-map', p.className].filter(Boolean).join(' ');
  if (rest.role === undefined) rest.role = 'region';
  if (rest['aria-label'] === undefined) rest['aria-label'] = 'Map of Gauteng areas Spoorlangs collects from and delivers to';
  var style = { position: 'relative' };
  if (p.style) {
    for (var sk in p.style) {
      if (Object.prototype.hasOwnProperty.call(p.style, sk)) style[sk] = p.style[sk];
    }
  }
  rest.style = style;
  rest.ref = ref;

  if (p.children !== undefined && p.children !== null) {
    return h('div', rest, p.children);
  }

  var radius = p.markerRadius === undefined ? 9 : Number(p.markerRadius);
  var r = Math.max(Math.round(radius), 1);
  var arc = 'a' + r + ',' + r + ' 0 1,0 ';
  var pad = Array.isArray(p.padding) ? p.padding : [32, 32];
  var measured = size.w > 0 && size.h > 0;
  var pins = measured ? spoorlangsCoverageProject(areas, size.w, size.h, Number(pad[0]) || 0, Number(pad[1]) || 0) : [];
  var markers = pins.map(function (pt, i) {
    return h('path', {
      key: i,
      className: 'leaflet-interactive',
      d: 'M' + (pt.x - r) + ',' + pt.y + arc + (r * 2) + ',0 ' + arc + (-r * 2) + ',0 ',
      strokeOpacity: 1,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      fillOpacity: 0.35,
      fillRule: 'evenodd',
      style: { stroke: 'var(--orange)', fill: 'var(--orange)' }
    }, h('title', null, pt.area.name));
  });
  var svgAttrs = {
    className: 'leaflet-zoom-animated',
    'aria-hidden': 'true',
    style: { display: 'block', width: '100%', height: '100%' }
  };
  if (measured) {
    svgAttrs.width = size.w;
    svgAttrs.height = size.h;
    svgAttrs.viewBox = '0 0 ' + size.w + ' ' + size.h;
  }

  var attribution = p.attribution === undefined
    ? ['© ', h('a', { key: 'osm', href: 'https://www.openstreetmap.org/copyright', target: '_blank', rel: 'noreferrer' }, 'OpenStreetMap'), ' contributors']
    : p.attribution;
  var controls = attribution
    ? h('div', { className: 'leaflet-control-container' },
        h('div', { className: 'leaflet-bottom leaflet-right', style: { position: 'absolute', right: 0, bottom: 0 } },
          h('div', { className: 'leaflet-control-attribution leaflet-control' }, attribution)))
    : null;

  return h('div', rest,
    h('svg', svgAttrs, h('g', null, markers)),
    controls
  );
}

/* CoverageHonesty — <ul class="coverage-honesty" aria-label="Spoorlangs coverage and service scope"> with one <li> per item
   (the orange "·" bullet is the CSS ::before). `items` defaults to the site's four lines; `children` replaces them. */
function CoverageHonesty(props) {
  var h = window.React.createElement;
  var p = props || {};
  var items = Array.isArray(p.items) ? p.items : spoorlangsCoverageHonestyItems();
  var rest = spoorlangsCoverageRest(p, { items: 1, className: 1, children: 1 });
  rest.className = ['coverage-honesty', p.className].filter(Boolean).join(' ');
  if (rest['aria-label'] === undefined) rest['aria-label'] = 'Spoorlangs coverage and service scope';
  var kids = (p.children !== undefined && p.children !== null)
    ? p.children
    : items.map(function (item, i) { return h('li', { key: i }, item); });
  return h('ul', rest, kids);
}

/* CoverageNote — <p class="coverage-note">. `variant` picks the site's text when there are no children:
   'home' (index.html, default) or 'page' (page-coverage.html). */
function CoverageNote(props) {
  var h = window.React.createElement;
  var p = props || {};
  var rest = spoorlangsCoverageRest(p, { variant: 1, className: 1, children: 1 });
  rest.className = ['coverage-note', p.className].filter(Boolean).join(' ');
  var text = (p.children !== undefined && p.children !== null) ? p.children : spoorlangsCoverageNoteText(p.variant);
  return h('p', rest, text);
}

/* CoverageBookingLink — <a class="button-primary coverage-booking-link" href="/coverage?service=&pickup=">Request a run</a>.
   Pill styling is the Button family's CSS; the 1.25rem margin-top is .coverage-booking-link (Button.css). */
function CoverageBookingLink(props) {
  var h = window.React.createElement;
  var p = props || {};
  var rest = spoorlangsCoverageRest(p, { href: 1, className: 1, children: 1 });
  rest.className = ['button-primary', 'coverage-booking-link', p.className].filter(Boolean).join(' ');
  rest.href = p.href === undefined ? '/coverage?service=&pickup=' : p.href;
  var label = (p.children !== undefined && p.children !== null) ? p.children : 'Request a run';
  return h('a', rest, label);
}

/* CoverageSection — the home page's <section id="coverage" class="section coverage-section" aria-labelledby="coverage-title">:
   .site-shell > .section-heading (eyebrow, h2#coverage-title, p) + CoverageMap + CoverageNote + CoverageBookingLink.
   `eyebrow`, `title`, `lead`, `note`, `bookingLabel` default to the site's copy (null omits one); `bookingHref` null omits
   the link; `areas` and `mapLabel` (or `mapProps`) reach the map. Every other prop (id, style, data-*, aria-*) passes
   through to the <section>; id defaults to "coverage", aria-labelledby to `titleId` ("coverage-title"). */
function CoverageSection(props) {
  var h = window.React.createElement;
  var p = props || {};
  var eyebrow = p.eyebrow !== undefined ? p.eyebrow : 'Where we drive';
  var title = p.title !== undefined ? p.title : 'Gauteng, on the ground.';
  var lead = p.lead !== undefined ? p.lead : 'These are the areas Spoorlangs collects from and delivers to today. Nationwide is where we are headed — not a claim of branches elsewhere.';
  var titleId = p.titleId || 'coverage-title';
  var note = p.note !== undefined ? p.note : spoorlangsCoverageNoteText('home');
  var own = { eyebrow: 1, title: 1, lead: 1, titleId: 1, note: 1, areas: 1, mapLabel: 1, mapProps: 1, bookingHref: 1, bookingLabel: 1, className: 1, children: 1 };
  var rest = spoorlangsCoverageRest(p, own);
  rest.className = ['section', 'coverage-section', p.className].filter(Boolean).join(' ');
  if (rest.id === undefined) rest.id = 'coverage';
  if (rest['aria-labelledby'] === undefined && title) rest['aria-labelledby'] = titleId;

  var mapProps = {};
  if (p.mapProps) {
    for (var mk in p.mapProps) {
      if (Object.prototype.hasOwnProperty.call(p.mapProps, mk)) mapProps[mk] = p.mapProps[mk];
    }
  }
  if (p.areas !== undefined) mapProps.areas = p.areas;
  if (p.mapLabel !== undefined) mapProps['aria-label'] = p.mapLabel;

  var heading = (eyebrow || title || lead)
    ? h('div', { className: 'section-heading' },
        eyebrow ? h('p', { className: 'eyebrow' }, eyebrow) : null,
        title ? h('h2', { id: titleId }, title) : null,
        lead ? h('p', null, lead) : null)
    : null;
  var booking = (p.bookingHref === null || p.bookingLabel === null)
    ? null
    : h(CoverageBookingLink, { href: p.bookingHref }, p.bookingLabel);

  return h('section', rest,
    h('div', { className: 'site-shell' },
      heading,
      h(CoverageMap, mapProps),
      note ? h(CoverageNote, null, note) : null,
      booking,
      p.children
    )
  );
}

/* ---- PricingTable ---- */
/*
 * PricingTable — Spoorlangs (group: Data).
 * Hand-written from the live site's markup (page-pricing.html, the "Zone rates" section;
 * page-quote.html, the .guide-rates block) and custom.css L2333–L2392 (.pricing-table-wrap,
 * .pricing-table, .pricing-zone-note, .pricing-notes) and L1709–L1748 (.guide-rates compact variant).
 * Site class names kept verbatim:
 * .pricing-table-wrap · .pricing-table · .pricing-zone-note · .pricing-notes · .guide-rates · .guide-rates-scroll · .sr-only.
 * Plain JS, no JSX, no module syntax, no global assignment: the orchestrator wraps every part in
 * one IIFE and exposes the Spoorlangs namespace from the exports list (PricingTable, PricingNotes, GuideRates).
 * The section shell around the full table on /pricing (.faq-section-page + h2.faq-group-heading "Zone rates")
 * belongs to FaqList (FaqGroup); the consumer composes PricingTable inside it.
 */

/* Verbatim site copy used as defaults (page-pricing.html / page-quote.html). The rows themselves are
   consumer data — the nine guide rates are passed in, never baked into the component. */
var SPOORLANGS_PRICING_COLUMNS = ['Zone', 'Standard', 'Rush', 'After-hours / Sunday'];
var SPOORLANGS_PRICING_CAPTION = 'Guide rates by zone and service speed, excluding VAT';
var SPOORLANGS_GUIDE_RATES_COLUMNS = ['Zone', 'Standard', 'Rush', 'After-hours'];
var SPOORLANGS_GUIDE_RATES_HEADING = 'Guide';
var SPOORLANGS_GUIDE_RATES_HEADING_SUFFIX = '· excl. VAT · confirm on quote';
var SPOORLANGS_GUIDE_RATES_FOOTNOTE = 'After-hours / Sunday = named rate.';

function spoorlangsPricingClasses(base, extra) {
  return extra ? base + ' ' + extra : base;
}

/* The three rate cells of a row in column order: `rates` (any length) wins, else standard / rush / afterHours. */
function spoorlangsPricingRowCells(row) {
  if (Array.isArray(row.rates)) return row.rates;
  return [row.standard, row.rush, row.afterHours];
}

function spoorlangsPricingRowKey(row, index) {
  if (row.key !== undefined && row.key !== null) return row.key;
  if (row.id !== undefined && row.id !== null) return row.id;
  return index;
}

/* Copies every prop not consumed by the component onto the element (className is handled separately). */
function spoorlangsPricingRest(props, own) {
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && own.indexOf(key) === -1) rest[key] = props[key];
  }
  return rest;
}

var SPOORLANGS_PRICING_TABLE_OWN = ['caption', 'columns', 'rows', 'notes', 'className', 'children'];

/* PricingTable — the /pricing zone-rate table exactly as the site renders it:
   <div class="pricing-table-wrap"><table class="pricing-table"><caption class="sr-only">…</caption>
   <thead><tr><th scope="col">Zone</th>…</tr></thead>
   <tbody><tr><th scope="row">Local<span class="pricing-zone-note">Within the Johannesburg metro</span></th><td>R950</td>…</tr>…</tbody></table></div>
   followed (when `notes` is given) by <ul class="pricing-notes"> and then any children, as siblings. */
function PricingTable(props) {
  var h = window.React.createElement;
  var columns = props.columns || SPOORLANGS_PRICING_COLUMNS;
  var rows = props.rows || [];
  var caption = props.caption === undefined ? SPOORLANGS_PRICING_CAPTION : props.caption;
  var rest = spoorlangsPricingRest(props, SPOORLANGS_PRICING_TABLE_OWN);
  rest.className = spoorlangsPricingClasses('pricing-table-wrap', props.className);

  var head = h('thead', null,
    h('tr', null, columns.map(function (label, i) {
      return h('th', { key: i, scope: 'col' }, label);
    })));

  var body = h('tbody', null, rows.map(function (row, i) {
    var cells = spoorlangsPricingRowCells(row);
    return h('tr', { key: spoorlangsPricingRowKey(row, i) },
      h('th', { scope: 'row' },
        row.zone,
        row.note ? h('span', { className: 'pricing-zone-note' }, row.note) : null),
      cells.map(function (cell, j) {
        return h('td', { key: j }, cell);
      }));
  }));

  var wrap = h('div', rest,
    h('table', { className: 'pricing-table' },
      caption ? h('caption', { className: 'sr-only' }, caption) : null,
      head,
      body));

  var hasNotes = Array.isArray(props.notes) && props.notes.length > 0;
  if (!hasNotes && props.children === undefined) return wrap;
  return h(window.React.Fragment, null,
    wrap,
    hasNotes ? h(PricingNotes, { items: props.notes }) : null,
    props.children);
}

var SPOORLANGS_PRICING_NOTES_OWN = ['items', 'className', 'children'];

/* PricingNotes — the <ul class="pricing-notes"> under the /pricing table: one <li> per item (titanium,
   .9rem / 1.6, outside bullets). Children render after the items (the site has exactly three <li>). */
function PricingNotes(props) {
  var h = window.React.createElement;
  var items = props.items || [];
  var rest = spoorlangsPricingRest(props, SPOORLANGS_PRICING_NOTES_OWN);
  rest.className = spoorlangsPricingClasses('pricing-notes', props.className);
  return h('ul', rest,
    items.map(function (item, i) {
      return h('li', { key: i }, item);
    }),
    props.children);
}

var SPOORLANGS_GUIDE_RATES_OWN = ['heading', 'headingSuffix', 'headingId', 'columns', 'rows', 'footnote', 'className', 'children'];

/* GuideRates — the /quote compact variant exactly as the site renders it:
   <section class="guide-rates" aria-labelledby="guide-rates-title">
     <h2 id="guide-rates-title">Guide <span>· excl. VAT · confirm on quote</span></h2>
     <div class="guide-rates-scroll"><table><thead><tr><th>Zone</th>…</tr></thead>
       <tbody><tr><th>Local</th><td>R950</td>…</tr>…</tbody></table></div>
     <p>After-hours / Sunday = named rate.</p>
   </section>
   The site's compact table carries no caption and no scope attributes; neither is added. */
function GuideRates(props) {
  var h = window.React.createElement;
  var headingId = props.headingId || 'guide-rates-title';
  var heading = props.heading === undefined ? SPOORLANGS_GUIDE_RATES_HEADING : props.heading;
  var suffix = props.headingSuffix === undefined ? SPOORLANGS_GUIDE_RATES_HEADING_SUFFIX : props.headingSuffix;
  var columns = props.columns || SPOORLANGS_GUIDE_RATES_COLUMNS;
  var rows = props.rows || [];
  var footnote = props.footnote === undefined ? SPOORLANGS_GUIDE_RATES_FOOTNOTE : props.footnote;
  var rest = spoorlangsPricingRest(props, SPOORLANGS_GUIDE_RATES_OWN);
  rest.className = spoorlangsPricingClasses('guide-rates', props.className);
  if (rest['aria-labelledby'] === undefined) rest['aria-labelledby'] = headingId;

  var table = h('table', null,
    h('thead', null,
      h('tr', null, columns.map(function (label, i) {
        return h('th', { key: i }, label);
      }))),
    h('tbody', null, rows.map(function (row, i) {
      var cells = spoorlangsPricingRowCells(row);
      return h('tr', { key: spoorlangsPricingRowKey(row, i) },
        h('th', null, row.zone),
        cells.map(function (cell, j) {
          return h('td', { key: j }, cell);
        }));
    })));

  return h('section', rest,
    h('h2', { id: headingId },
      heading,
      suffix ? ' ' : null,
      suffix ? h('span', null, suffix) : null),
    h('div', { className: 'guide-rates-scroll' }, table),
    footnote ? h('p', null, footnote) : null,
    props.children);
}

/* ---- VehicleCard ---- */
/*
 * VehicleCard — Spoorlangs (group: Data).
 * 1→2-column grid of .75rem-radius titanium-bordered cards with uppercase h3 and muted copy:
 * the /pricing page's "What we move" block (page-pricing.html, <section aria-labelledby="vehicles-title" class="faq-section-page">).
 * Hand-written from the live site's markup (page-pricing.html) and custom.css L2393–L2420 — see VehicleCard.css.
 * Site class names kept verbatim: .pricing-vehicle-grid · .pricing-vehicle-card — plus the wrapper's
 * .faq-section-page / .faq-group-heading (styled by FaqList) and .lead (styled by Base), which VehicleSection renders as the page does.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the "exports" list (VehicleCard, VehicleGrid, VehicleSection).
 */

function vehicleCardJoinClasses(base, extra) {
  return extra ? base + ' ' + extra : base;
}

/* VehicleCard — one <article class="pricing-vehicle-card">, exactly as page-pricing.html renders it:
   <article class="pricing-vehicle-card">
     <h3>Sedans &amp; hatchbacks</h3>                                                   ← uppercased + .04em by the CSS; Oswald 700 via the global h1,h2,h3 rule; --orange, 1rem
     <p>Core work. Standard zone rates apply — the vehicle must start and drive.</p>   ← --titanium .9rem/1.6
   </article>
   The site renders no icon, image, price or link inside a card, and the card has no background (a hairline on asphalt).
   The paragraph takes `description`, else `children`; with neither, no <p> is rendered. */
function VehicleCard(props) {
  var h = window.React.createElement;
  var copy = props.description != null ? props.description : props.children;
  return h('article', { className: vehicleCardJoinClasses('pricing-vehicle-card', props.className) },
    h('h3', null, props.title),
    copy == null ? null : h('p', null, copy)
  );
}

/* VehicleGrid — <div class="pricing-vehicle-grid"> holding one VehicleCard per item, in array order
   (the site: four cards — Sedans & hatchbacks · SUVs & bakkies · Vans & LDVs · Luxury & classic).
   One column, two from 700px (custom.css @media (width>=700px)). `children` are appended after the items
   for hand-built VehicleCards; cards must be direct children of the grid. */
function VehicleGrid(props) {
  var h = window.React.createElement;
  var items = props.items || [];
  var cards = items.map(function (item, i) {
    return h(VehicleCard, {
      key: item.key != null ? item.key : i,
      title: item.title,
      description: item.description,
      className: item.className
    });
  });
  return h('div', { className: vehicleCardJoinClasses('pricing-vehicle-grid', props.className) },
    cards,
    props.children == null ? null : props.children
  );
}

/* VehicleSection — the whole /pricing block as page-pricing.html renders it:
   <section aria-labelledby="vehicles-title" class="faq-section-page">
     <h2 id="vehicles-title" class="faq-group-heading">What we move</h2>
     <div class="pricing-vehicle-grid">…four .pricing-vehicle-card…</div>
     <p class="lead">Runners only — the vehicle must start and drive. Non-runners, tows and trailer work fall outside what we do.</p>
   </section>
   .faq-section-page and .faq-group-heading are styled by FaqList, .lead by Base (same bundle) — not by VehicleCard.css.
   The same wrapper can be composed by hand from FaqGroup + VehicleGrid; this component is the page's exact markup. */
function VehicleSection(props) {
  var h = window.React.createElement;
  var id = props.id != null ? props.id : 'vehicles-title';
  return h('section', {
    'aria-labelledby': id,
    className: vehicleCardJoinClasses('faq-section-page', props.className)
  },
    h('h2', { id: id, className: 'faq-group-heading' }, props.heading),
    h(VehicleGrid, { items: props.items, className: props.gridClassName },
      props.gridChildren == null ? null : props.gridChildren),
    props.note == null ? null : h('p', { className: 'lead' }, props.note),
    props.children == null ? null : props.children
  );
}

/* ---- Field ---- */
/*
 * Field — Spoorlangs (group: Forms).
 * Hand-written from the live site's markup — every <div class="field"> inside <form class="quote-form"> on
 * page-quote.html (12 fields + consent), page-coverage.html (13 + consent) and page-book.html (12 + consent) —
 * and custom.css L1781–L1816 (.field, .field label, .field input/select/textarea, focus-visible pair,
 * .field span[role=alert]), L2185–L2186 (.field-wide), L2208–L2224 (.consent-field …),
 * L2225–L2241 (.quote-confirmation, both halves), L1476–L1482 (.form-error).
 * Validation messages shown in the alert line come from the site's own schema, site/js/quote-schema-CezrbQDx.js.
 * Site class names kept verbatim: .field · .field-wide · .consent-field · .form-error · .quote-confirmation;
 * the error line is the site's <span role="alert">. The book page's consent uses Tailwind utilities instead of
 * .consent-field: label "flex items-start gap-2", input "mt-1" — kept verbatim as the `utilities` variant.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE and
 * assigns window.Spoorlangs from the "exports" list (Field, ConsentField, FormError, QuoteConfirmation).
 */

/* Props the Field consumes itself; everything else passes through to the control element. */
function spoorlangsFieldIsOwnProp(key) {
  return key === 'id' || key === 'label' || key === 'control' || key === 'name' || key === 'wide' ||
    key === 'error' || key === 'validated' || key === 'options' || key === 'className' ||
    key === 'wrapperProps' || key === 'children';
}

/* Shallow copy of an object's own keys onto a target. */
function spoorlangsFieldAssign(target, source) {
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
  }
  return target;
}

/* <option> rows for a select: strings, or { value, label, disabled, selected }.
   The site writes a disabled+selected "Choose…" row on the coverage page (value ""); React expresses the
   selected row as defaultValue on the <select>, which sets the option's `selected` attribute on mount. */
function spoorlangsFieldOptions(options) {
  var h = window.React.createElement;
  var nodes = [];
  var defaultValue;
  var list = options || [];
  for (var i = 0; i < list.length; i++) {
    var o = list[i];
    if (typeof o === 'string') o = { value: o, label: o };
    var attrs = { key: i, value: o.value };
    if (o.disabled) attrs.disabled = true;
    if (o.selected && defaultValue === undefined) defaultValue = o.value;
    nodes.push(h('option', attrs, o.label === undefined ? o.value : o.label));
  }
  return { nodes: nodes, defaultValue: defaultValue };
}

/* Field — the site's labelled control:
   <div class="field[ field-wide]">
     <label for="{id}">{label}</label>
     <input id="{id}" … aria-invalid="false" name="{name}"/>   |   <select id …><option …/></select>   |   <textarea id … rows maxLength/>
     [<span role="alert">{error}</span>]
   </div>
   `aria-invalid="false"` is what the site renders on validated fields; `validated: false` omits it
   (the site omits it on the quote page's "Preferred date and time" input, the coverage and book "Service"
   selects, and the book "Year (optional)" input). `error` renders the site's alert span and flips
   aria-invalid to "true". Pass `children` to supply your own control instead of the generated one. */
function Field(props) {
  var h = window.React.createElement;
  var control = props.control === 'select' || props.control === 'textarea' ? props.control : 'input';
  var classes = ['field'];
  if (props.wide) classes.push('field-wide');
  if (props.className) classes.push(props.className);

  var attrs = { id: props.id };
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsFieldIsOwnProp(key)) {
      attrs[key] = props[key];
    }
  }
  if (props.error) {
    attrs['aria-invalid'] = 'true';
  } else if (props.validated !== false && attrs['aria-invalid'] === undefined) {
    attrs['aria-invalid'] = 'false';
  }
  attrs.name = props.name || props.id;

  var controlNode;
  if (props.children !== undefined && props.children !== null) {
    controlNode = props.children;
  } else if (control === 'select') {
    var opts = spoorlangsFieldOptions(props.options);
    if (opts.defaultValue !== undefined && attrs.value === undefined && attrs.defaultValue === undefined) {
      attrs.defaultValue = opts.defaultValue;
    }
    controlNode = h.apply(null, ['select', attrs].concat(opts.nodes));
  } else if (control === 'textarea') {
    controlNode = h('textarea', attrs);
  } else {
    controlNode = h('input', attrs);
  }

  var wrapper = spoorlangsFieldAssign({}, props.wrapperProps || {});
  wrapper.className = classes.join(' ');
  return h('div', wrapper,
    h('label', { htmlFor: props.id }, props.label),
    controlNode,
    props.error ? h('span', { role: 'alert' }, props.error) : null
  );
}

/* Props the ConsentField consumes itself; everything else passes through to the checkbox. */
function spoorlangsConsentIsOwnProp(key) {
  return key === 'id' || key === 'name' || key === 'utilities' || key === 'error' ||
    key === 'validated' || key === 'className' || key === 'wrapperProps' || key === 'children';
}

/* ConsentField — the checkbox sentence at the foot of every form.
   Quote / coverage pages:
   <div class="field field-wide consent-field">
     <label for="{id}"><input id="{id}" type="checkbox" aria-invalid="false" name="consent"/><span>{children}</span></label>
   </div>
   Book page (`utilities: true` — no .consent-field, no id/for, Tailwind utilities instead):
   <div class="field field-wide">
     <label class="flex items-start gap-2"><input type="checkbox" class="mt-1" name="consent"/><span>{children}</span></label>
   </div>
   The quote page sets aria-invalid="false" on the checkbox; the coverage page (id "booking-consent") does not —
   pass `validated: false` for that. `error` adds the site's <span role="alert"> after the label
   (the consent message in quote-schema: "Please tick the box so we may use your details to reply."). */
function ConsentField(props) {
  var h = window.React.createElement;
  var utilities = !!props.utilities;
  var input = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsConsentIsOwnProp(key)) {
      input[key] = props[key];
    }
  }
  input.type = 'checkbox';
  input.name = props.name || 'consent';
  var labelAttrs;
  if (utilities) {
    input.className = input.className ? 'mt-1 ' + input.className : 'mt-1';
    labelAttrs = { className: 'flex items-start gap-2' };
  } else {
    input.id = props.id || 'consent';
    if (props.validated !== false && input['aria-invalid'] === undefined) input['aria-invalid'] = 'false';
    labelAttrs = { htmlFor: input.id };
  }
  if (props.error) input['aria-invalid'] = 'true';

  var classes = utilities ? ['field', 'field-wide'] : ['field', 'field-wide', 'consent-field'];
  if (props.className) classes.push(props.className);
  var wrapper = spoorlangsFieldAssign({}, props.wrapperProps || {});
  wrapper.className = classes.join(' ');
  return h('div', wrapper,
    h('label', labelAttrs, h('input', input), h('span', null, props.children)),
    props.error ? h('span', { role: 'alert' }, props.error) : null
  );
}

/* FormError — the form-level message styled by custom.css L1476–L1482 (.form-error: 3px orange left rule,
   orange .82rem/700 text, margin 0). Its markup is client-rendered on the site and NOT in the source pack;
   the <p> element is system-given (the rule's margin:0 resets a paragraph margin). Any other prop (role, id …)
   passes through. */
function FormError(props) {
  var h = window.React.createElement;
  var attrs = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && key !== 'className' && key !== 'children') {
      attrs[key] = props[key];
    }
  }
  attrs.className = props.className ? 'form-error ' + props.className : 'form-error';
  return h('p', attrs, props.children);
}

/* QuoteConfirmation — the full-width tinted panel at the foot of the quote form, styled by custom.css
   L2225–L2241 (.quote-confirmation: orange-45% 1px border, orange-10% background, radius .75rem,
   padding 1rem 1.1rem, .9rem/1.6, grid-column 1/-1 — so it must sit inside the .quote-form grid).
   Its markup is client-rendered on the site and NOT in the source pack; the <div> element is system-given. */
function QuoteConfirmation(props) {
  var h = window.React.createElement;
  var attrs = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && key !== 'className' && key !== 'children') {
      attrs[key] = props[key];
    }
  }
  attrs.className = props.className ? 'quote-confirmation ' + props.className : 'quote-confirmation';
  return h('div', attrs, props.children);
}

/* ---- CorridorChips ---- */
/* CorridorChips — Spoorlangs design system part, group "Forms".
   Markup copied from the live site (page-quote.html; byte-identical on page-coverage.html), the first row of
   <form class="quote-form">:
     <fieldset class="corridor-picker field-wide">
       <legend>Collection corridor</legend>
       <div class="corridor-chips">
         <button class="<shadcn outline sm classes>" type="button">Johannesburg</button>
         <button … type="button">Pretoria</button>
         <button … type="button">Greater Gauteng</button>
         <a href="https://wa.me/27662715887?text=Hi%20Spoorlangs%20%E2%80%94%20quote%20request%0ACollection%3A%20Outside%20Gauteng"
            target="_blank" rel="noreferrer" class="<same classes>" type="button">Outside Gauteng — WhatsApp us</a>
       </div>
     </fieldset>
   Styles: custom.css L1756–L1782 (.corridor-picker, .corridor-picker legend, .corridor-chips, .corridor-chips button/a,
   :hover) over the Tailwind utilities in the class list (CorridorChips.css).
   Plain React 18 via window.React, no JSX, no import/export, no window assignment: the orchestrator wraps every part
   in one IIFE and assigns window.Spoorlangs from the exports (CorridorChips, CorridorChip). */

/* The chip's class list exactly as the server-rendered markup prints it (shadcn Button variant="outline" size="sm",
   button-B7cUVs6d.js); the HTML entity [&amp;_svg] decodes to [&_svg]. */
function corridorChipClassList() {
  return 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none ' +
    'disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ' +
    'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs';
}

/* Copies every own prop not named in omit so unknown attributes pass through to the element. */
function corridorChipsRest(props, omit) {
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && omit.indexOf(key) === -1) rest[key] = props[key];
  }
  return rest;
}

/* CorridorChip — one chip. With `href`: <a href target="_blank" rel="noreferrer" class="…" type="button"> (the site's
   outbound "Outside Gauteng — WhatsApp us" chip; `target`/`rel` default to the site's values, pass null to omit one).
   Without: <button class="…" type="button">. `children` is the label; `className` is appended after the site's classes;
   `disabled` is honoured on <button> only (the Tailwind disabled:* utilities match :disabled, which an <a> never is). */
function CorridorChip(props) {
  var h = window.React.createElement;
  var p = props || {};
  var classes = corridorChipClassList() + (p.className ? ' ' + p.className : '');
  var rest = corridorChipsRest(p, ['href', 'target', 'rel', 'type', 'className', 'children', 'onClick', 'disabled']);

  if (p.href) {
    /* attribute order as the site prints it: href, target, rel, class, type */
    var link = { href: p.href };
    if (p.target !== null) link.target = p.target === undefined ? '_blank' : p.target;
    if (p.rel !== null) link.rel = p.rel === undefined ? 'noreferrer' : p.rel;
    link.className = classes;
    link.type = 'button';
    if (p.onClick) link.onClick = p.onClick;
    return h('a', Object.assign(link, rest), p.children);
  }

  var button = { className: classes, type: p.type || 'button' };
  if (p.disabled) button.disabled = true;
  if (p.onClick) button.onClick = p.onClick;
  return h('button', Object.assign(button, rest), p.children);
}

/* CorridorChips — <fieldset class="corridor-picker field-wide"> <legend>…</legend> <div class="corridor-chips">…</div>.
   props: legend (site: "Collection corridor"), items = [{ label, href?, onClick?, disabled?, target?, rel?, className?, key? }]
   rendered as CorridorChip in order (the site: three <button>s then the wa.me <a>), or `children` already composed
   of CorridorChip nodes; onSelect(item, index, event) fires after a button chip's own onClick (the site's chips write the
   corridor into the Collection point field — that wiring is the consumer's); wide=false drops the site's `field-wide`
   (the .quote-form full-row class); className is appended; every other prop passes through to the <fieldset>. */
function CorridorChips(props) {
  var h = window.React.createElement;
  var p = props || {};
  var rest = corridorChipsRest(p, ['legend', 'items', 'children', 'wide', 'className', 'onSelect']);
  var classes = ['corridor-picker', p.wide === false ? null : 'field-wide', p.className].filter(Boolean).join(' ');
  var legend = p.legend == null ? 'Collection corridor' : p.legend;

  var chips = p.children;
  if (p.items && p.items.length) {
    chips = p.items.map(function (item, index) {
      var chipProps = corridorChipsRest(item, ['label', 'key', 'onClick']);
      chipProps.key = item.key != null ? item.key : (typeof item.label === 'string' ? item.label : index);
      if (item.onClick || (p.onSelect && !item.href)) {
        chipProps.onClick = function (event) {
          if (item.onClick) item.onClick(event);
          if (p.onSelect && !item.href) p.onSelect(item, index, event);
        };
      }
      return h(CorridorChip, chipProps, item.label);
    });
  }

  return h('fieldset', Object.assign({ className: classes }, rest),
    h('legend', null, legend),
    h('div', { className: 'corridor-chips' }, chips)
  );
}

/* ---- QuoteForm ---- */
/* QuoteForm — Spoorlangs design system part, group "Forms" (page showcase).
   Hand-written from the live site's server-rendered markup — page-quote.html (the same
   .quote-main > .site-shell.quote-layout shell on page-book.html; `.quote-form` alone inside
   .booking-section on page-coverage.html) — and custom.css L1676–L1684, L1700–L1708,
   L1749–L1755, L1817–L1833, L1894–L1977, L2061–L2062, L2180–L2193.
   Site class names kept verbatim: .quote-main .quote-layout .quote-intro .quote-title
   .privacy-note .quote-form .field .field-wide .consent-field .corridor-picker .corridor-chips
   .quote-actions .button-primary .button-secondary .quote-sent .quote-sent-tick
   .reference-badge .sent-summary .sent-next (+ the shadcn chip utility string).
   Plain JS: no JSX, no import/export, no network, no window assignment — the orchestrator wraps
   every part in one IIFE and assigns window.Spoorlangs from the "exports" list. `h` is
   function-scoped so the parts can share that IIFE. Names are prefixed "Quote…" so they do not
   collide with the Field / CorridorChips / Button / BackLink / PricingTable families, which
   render the same markup for the same classes and compose with QuoteForm through `children`.
   NOT in the source pack: the /quote-sent route markup (chunk quote-sent-chtAwquL.js) and the
   client-rendered error nodes — QuoteSent's element choices and the error placement are
   inferred from the CSS selectors and marked system-given in QuoteForm.d.ts / README.md. */

/* lucide path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC):
   the five icons the quote page and the sent state render. */
function quoteFormIconParts(name) {
  switch (name) {
    case 'arrow-left':
      return [
        ['path', { d: 'm12 19-7-7 7-7' }],
        ['path', { d: 'M19 12H5' }]
      ];
    case 'message-circle':
      return [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ];
    case 'mail':
      return [
        ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' }],
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }]
      ];
    case 'calendar-check':
      return [
        ['path', { d: 'M8 2v3' }],
        ['path', { d: 'M16 2v3' }],
        ['rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' }],
        ['path', { d: 'M3 9h18' }],
        ['path', { d: 'm9 15 2 2 4-4' }]
      ];
    case 'circle-check':
      return [
        ['circle', { cx: '12', cy: '12', r: '10' }],
        ['path', { d: 'm16 9-5.5 5.5L8 12' }]
      ];
  }
  return null;
}

/* "base extra" class joiner. */
function quoteFormClasses(base, extra) {
  return extra ? base + ' ' + extra : base;
}

/* Copies every prop whose key `isOwn(key)` is false into a fresh object (pass-through attributes). */
function quoteFormRest(props, isOwn) {
  var out = {};
  for (var k in props) {
    if (Object.prototype.hasOwnProperty.call(props, k) && !isOwn(k)) out[k] = props[k];
  }
  return out;
}

/* Creates `tag` with `content` spread as separate children (so an array of nodes needs no keys). */
function quoteFormEl(tag, attrs, content) {
  var h = React.createElement;
  if (Array.isArray(content)) return h.apply(null, [tag, attrs].concat(content));
  return h(tag, attrs, content);
}

/* The shadcn `Button variant="outline" size="sm"` class string the site prints on every corridor chip
   (page-quote.html / page-coverage.html; `&amp;` decoded). Kept whole: Tailwind's layered utilities are
   overridden by the unlayered .corridor-chips rules (999px pill, 2.25rem min-height, titanium text). */
function quoteFormChipClass() {
  return 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none ' +
    'disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ' +
    'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs';
}

/* QuoteIcon — the inline lucide <svg> exactly as the site renders it: xmlns, 24×24, viewBox 0 0 24 24,
   fill none, stroke currentColor, stroke-width 2, round caps/joins, class "lucide lucide-<name>",
   aria-hidden="true". Sized by the owning rule (.button-primary svg 1.15rem, .back-link svg 1rem,
   .quote-sent-tick .9em). */
function QuoteIcon(props) {
  var h = React.createElement;
  var p = props || {};
  var parts = quoteFormIconParts(p.name);
  if (!parts) return null;
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: quoteFormClasses('lucide lucide-' + p.name, p.className),
    'aria-hidden': 'true'
  };
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', attrs].concat(children));
}

/* QuoteLayout — the page shell: <main class="quote-main"><div class="site-shell quote-layout">
   {intro}<div>{children}</div></div></main> (page-quote.html, page-book.html). Without `intro` it
   renders <main class="quote-main"><div class="site-shell">{children}</div></main> — the single-column
   shell for QuoteSent (system-given: the /quote-sent markup is not in the pack). */
function QuoteLayout(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = quoteFormRest(p, function (k) {
    return k === 'intro' || k === 'children' || k === 'className' || k === 'shellClassName';
  });
  attrs.className = quoteFormClasses('quote-main', p.className);
  if (p.intro != null) {
    return h('main', attrs,
      h('div', { className: quoteFormClasses('site-shell quote-layout', p.shellClassName) },
        p.intro,
        quoteFormEl('div', null, p.children)));
  }
  return h('main', attrs,
    quoteFormEl('div', { className: quoteFormClasses('site-shell', p.shellClassName) }, p.children));
}

/* QuoteIntro — the left column (page-quote.html .quote-intro): back link (arrow-left + <span>),
   <p class="eyebrow">, <h1 class="quote-title">, <p class="lead">, <p class="privacy-note">, then
   children (the site puts PricingTable's compact `.guide-rates` section here). */
function QuoteIntro(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = quoteFormRest(p, function (k) {
    return k === 'backHref' || k === 'backLabel' || k === 'onBack' || k === 'eyebrow' || k === 'title' ||
      k === 'titleId' || k === 'lead' || k === 'privacyNote' || k === 'children' || k === 'className';
  });
  attrs.className = quoteFormClasses('quote-intro', p.className);
  var backLabel = p.backLabel === undefined ? 'Back to home' : p.backLabel;
  var back = null;
  if (backLabel !== null) {
    var backAttrs = { className: 'back-link', href: p.backHref == null ? '/' : p.backHref };
    if (p.onBack) backAttrs.onClick = p.onBack;
    back = h('a', backAttrs, h(QuoteIcon, { name: 'arrow-left' }), h('span', null, backLabel));
  }
  var titleAttrs = { className: 'quote-title' };
  if (p.titleId != null) titleAttrs.id = p.titleId;
  return quoteFormEl('div', attrs, [
    back,
    p.eyebrow == null ? null : quoteFormEl('p', { className: 'eyebrow' }, p.eyebrow),
    p.title == null ? null : quoteFormEl('h1', titleAttrs, p.title),
    p.lead == null ? null : quoteFormEl('p', { className: 'lead' }, p.lead),
    p.privacyNote == null ? null : quoteFormEl('p', { className: 'privacy-note' }, p.privacyNote),
    p.children
  ]);
}

/* Props QuoteField consumes itself; everything else goes onto the control. */
function quoteFormFieldIsOwn(key) {
  return key === 'id' || key === 'label' || key === 'control' || key === 'options' || key === 'wide' ||
    key === 'error' || key === 'invalid' || key === 'className' || key === 'children' ||
    key === 'wrapperProps' || key === 'name';
}

/* QuoteField — one grid cell of .quote-form:
   <div class="field[ field-wide]"><label for>…</label><input|select|textarea id … aria-invalid name/>
   [<span role="alert">…</span>]</div>. control "checkbox" renders the consent sentence instead:
   <div class="field field-wide consent-field"><label for><input id type="checkbox" aria-invalid name/>
   <span>…</span></label></div>. `invalid` true/false writes aria-invalid="true"/"false"; undefined omits it
   (the site omits it on "Preferred date and time (optional)" and "Vehicle type (optional)"). The
   <span role="alert"> is client-rendered on the site (not in the pack): placed after the control. */
function QuoteField(props) {
  var h = React.createElement;
  var p = props || {};
  var control = p.control || 'input';
  var rest = quoteFormRest(p, quoteFormFieldIsOwn);
  var name = p.name === undefined ? p.id : p.name;
  var wrapper = quoteFormRest(p.wrapperProps || {}, function () { return false; });
  var alert = p.error == null ? null : quoteFormEl('span', { role: 'alert' }, p.error);

  var attrs = { id: p.id };
  if (control === 'checkbox') attrs.type = 'checkbox';
  for (var k in rest) {
    if (Object.prototype.hasOwnProperty.call(rest, k)) attrs[k] = rest[k];
  }
  if (p.invalid === true) attrs['aria-invalid'] = 'true';
  else if (p.invalid === false) attrs['aria-invalid'] = 'false';
  if (name != null) attrs.name = name;

  if (control === 'checkbox') {
    wrapper.className = quoteFormClasses('field field-wide consent-field', p.className);
    return quoteFormEl('div', wrapper, [
      h('label', { htmlFor: p.id }, h('input', attrs), quoteFormEl('span', null, p.label)),
      alert,
      p.children
    ]);
  }

  var controlNode;
  if (control === 'select') {
    var options = (p.options || []).map(function (o, i) {
      var row = typeof o === 'string' ? { value: o } : o;
      var oa = { key: i, value: row.value };
      if (row.disabled) oa.disabled = true;
      return h('option', oa, row.label == null ? row.value : row.label);
    });
    controlNode = h.apply(null, ['select', attrs].concat(options));
  } else if (control === 'textarea') {
    controlNode = h('textarea', attrs);
  } else {
    controlNode = h('input', attrs);
  }
  wrapper.className = quoteFormClasses('field' + (p.wide ? ' field-wide' : ''), p.className);
  return quoteFormEl('div', wrapper, [
    quoteFormEl('label', { htmlFor: p.id }, p.label),
    controlNode,
    alert,
    p.children
  ]);
}

/* QuoteCorridorPicker — the first row of the quote / coverage form:
   <fieldset class="corridor-picker field-wide"><legend>Collection corridor</legend><div class="corridor-chips">
   <button class="…" type="button">Johannesburg</button> … <a href target rel class="…" type="button">Outside
   Gauteng — WhatsApp us</a></div></fieldset>. A chip with `href` is the <a> (the site keeps type="button"
   on it too); the rest are <button type="button">. No selected state exists in source. */
function QuoteCorridorPicker(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = quoteFormRest(p, function (k) {
    return k === 'legend' || k === 'chips' || k === 'className' || k === 'children';
  });
  attrs.className = quoteFormClasses('corridor-picker field-wide', p.className);
  var chips = (p.chips || []).map(function (chip, i) {
    var c = typeof chip === 'string' ? { label: chip } : chip;
    var ca = quoteFormRest(c, function (k) { return k === 'label' || k === 'href' || k === 'className' || k === 'key'; });
    var key = c.key == null ? i : c.key;
    if (c.href != null) {
      var a = { key: key, href: c.href };
      if (c.target != null) a.target = c.target;
      if (c.rel != null) a.rel = c.rel;
      for (var k in ca) { if (Object.prototype.hasOwnProperty.call(ca, k)) a[k] = ca[k]; }
      a.className = quoteFormClasses(quoteFormChipClass(), c.className);
      a.type = 'button';
      return h('a', a, c.label);
    }
    var b = { key: key, className: quoteFormClasses(quoteFormChipClass(), c.className), type: 'button' };
    for (var kb in ca) { if (Object.prototype.hasOwnProperty.call(ca, kb)) b[kb] = ca[kb]; }
    return h('button', b, c.label);
  });
  return h('fieldset', attrs,
    h('legend', null, p.legend === undefined ? 'Collection corridor' : p.legend),
    h.apply(null, ['div', { className: 'corridor-chips' }].concat(chips).concat([p.children])));
}

/* QuoteActions — <div class="quote-actions[ field-wide]"> (the book page adds field-wide). Column below
   640px, row from 640px; inside .quote-sent it pads right 4.25rem below 640px to clear the floating widget. */
function QuoteActions(props) {
  var p = props || {};
  var attrs = quoteFormRest(p, function (k) { return k === 'wide' || k === 'className' || k === 'children'; });
  attrs.className = quoteFormClasses('quote-actions' + (p.wide ? ' field-wide' : ''), p.className);
  return quoteFormEl('div', attrs, p.children);
}

/* QuoteAction — a form action as the site prints it inside .quote-actions:
   <button type="submit" class="button-primary"><svg … lucide-message-circle/><span>Send on WhatsApp</span></button>
   <button type="button" class="button-secondary"><svg … lucide-mail/><span>Send by email</span></button>
   With `href` it is <a class="button-…" href …> (the sent state's follow-up links; .quote-actions a).
   `icon` is a QuoteIcon name or a node; `iconClassName` (e.g. "spin") goes onto a named icon. */
function QuoteAction(props) {
  var h = React.createElement;
  var p = props || {};
  var variant = p.variant === 'secondary' ? 'button-secondary' : 'button-primary';
  var rest = quoteFormRest(p, function (k) {
    return k === 'variant' || k === 'icon' || k === 'iconClassName' || k === 'children' ||
      k === 'className' || k === 'href' || k === 'type' || k === 'wrapLabel';
  });
  var icon = null;
  if (typeof p.icon === 'string') icon = h(QuoteIcon, { name: p.icon, className: p.iconClassName });
  else if (p.icon != null) icon = p.icon;
  var label = p.wrapLabel === false ? p.children : quoteFormEl('span', null, p.children);
  if (p.href != null) {
    var a = { className: quoteFormClasses(variant, p.className), href: p.href };
    for (var k in rest) { if (Object.prototype.hasOwnProperty.call(rest, k)) a[k] = rest[k]; }
    return h('a', a, icon, label);
  }
  var b = { type: p.type || 'button', className: quoteFormClasses(variant, p.className) };
  for (var kb in rest) { if (Object.prototype.hasOwnProperty.call(rest, kb)) b[kb] = rest[kb]; }
  return h('button', b, icon, label);
}

/* QuoteForm — the two-column form card: <form class="quote-form" noValidate> with, in site order,
   the corridor picker, the fields, `children`, the consent field, a form-level error, a confirmation
   panel and the action row. `fields` / `consent` are QuoteField prop objects (convenience); `children`
   takes any nodes — the Field, ConsentField, CorridorChips and DescribeMove families compose here too.
   The site's forms are noValidate (zod validates in the client, quote-schema-CezrbQDx.js). */
function QuoteForm(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = quoteFormRest(p, function (k) {
    return k === 'corridor' || k === 'fields' || k === 'consent' || k === 'error' || k === 'confirmation' ||
      k === 'actions' || k === 'actionsWide' || k === 'children' || k === 'className';
  });
  attrs.className = quoteFormClasses('quote-form', p.className);
  if (attrs.noValidate === undefined) attrs.noValidate = true;

  var fieldNodes = (p.fields || []).map(function (f, i) {
    var fa = {};
    for (var k in f) { if (Object.prototype.hasOwnProperty.call(f, k)) fa[k] = f[k]; }
    fa.key = f.key == null ? (f.id == null ? i : f.id) : f.key;
    return h(QuoteField, fa);
  });

  var consent = null;
  if (p.consent != null) {
    var ca = {};
    for (var kc in p.consent) { if (Object.prototype.hasOwnProperty.call(p.consent, kc)) ca[kc] = p.consent[kc]; }
    ca.control = 'checkbox';
    if (ca.id == null) ca.id = 'consent';
    consent = h(QuoteField, ca);
  }

  var children = [p.corridor == null ? null : h(QuoteCorridorPicker, p.corridor)]
    .concat(fieldNodes)
    .concat([
      p.children,
      consent,
      p.error == null ? null : quoteFormEl('p', { className: 'form-error' }, p.error),
      p.confirmation == null ? null : quoteFormEl('div', { className: 'quote-confirmation' }, p.confirmation),
      p.actions == null ? null : h(QuoteActions, { wide: !!p.actionsWide }, p.actions)
    ]);
  return h.apply(null, ['form', attrs].concat(children));
}

/* QuoteSent — the post-submit page (/quote-sent). The route's markup is NOT in the source pack; this
   structure is inferred from custom.css L1900–L1977 (system-given element choices):
   <div class="quote-sent"><h1 class="quote-title"><svg … class="lucide lucide-circle-check quote-sent-tick"/>{title}</h1>
   <p class="reference-badge">{referenceLabel} <strong>{reference}</strong></p>
   <dl class="sent-summary"><div><dt/><dd/></div>…</dl>
   <section class="sent-next"><h2/><ol><li/>…</ol></section>
   <div class="quote-actions">{actions}</div></div>.
   The badge renders only when `reference` is given; the site's WhatsApp message carries the line
   "Reference: <ref>" (quote-schema-CezrbQDx.js), which is where the default label comes from. */
function QuoteSent(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = quoteFormRest(p, function (k) {
    return k === 'title' || k === 'titleId' || k === 'tick' || k === 'reference' || k === 'referenceLabel' ||
      k === 'summary' || k === 'nextTitle' || k === 'nextTitleId' || k === 'next' || k === 'actions' ||
      k === 'children' || k === 'className';
  });
  attrs.className = quoteFormClasses('quote-sent', p.className);

  var titleAttrs = { className: 'quote-title' };
  if (p.titleId != null) titleAttrs.id = p.titleId;
  var tick = p.tick === false ? null : h(QuoteIcon, { name: 'circle-check', className: 'quote-sent-tick' });

  var badge = null;
  if (p.reference != null) {
    var label = p.referenceLabel === undefined ? 'Reference' : p.referenceLabel;
    badge = h('p', { className: 'reference-badge' },
      label == null ? null : label,
      label == null ? null : ' ',
      h('strong', null, p.reference));
  }

  var summary = null;
  if (p.summary && p.summary.length) {
    summary = h.apply(null, ['dl', { className: 'sent-summary' }].concat(p.summary.map(function (row, i) {
      return h('div', { key: row.key == null ? i : row.key },
        quoteFormEl('dt', null, row.term),
        quoteFormEl('dd', null, row.value));
    })));
  }

  var next = null;
  if (p.next && p.next.length) {
    var sectionAttrs = { className: 'sent-next' };
    var h2Attrs = {};
    if (p.nextTitleId != null) { sectionAttrs['aria-labelledby'] = p.nextTitleId; h2Attrs.id = p.nextTitleId; }
    next = h('section', sectionAttrs,
      p.nextTitle == null ? null : quoteFormEl('h2', h2Attrs, p.nextTitle),
      h.apply(null, ['ol', null].concat(p.next.map(function (step, i) {
        return quoteFormEl('li', { key: i }, step);
      }))));
  }

  return quoteFormEl('div', attrs, [
    h('h1', titleAttrs, tick, p.title),
    badge,
    p.children,
    summary,
    next,
    p.actions == null ? null : h(QuoteActions, null, p.actions)
  ]);
}

/* ---- DescribeMove ---- */
/*
 * DescribeMove — Spoorlangs (group: Forms).
 * Hand-written from the live site's markup (page-quote.html: the one <section class="describe-move">,
 * rendered above .quote-form) and custom.css L1834–L1899. Site class names kept verbatim:
 * .describe-move · .eyebrow · .sr-only · .button-secondary · .lucide.lucide-wand-sparkles ·
 * .describe-move-summary · .describe-move-error · .spin.
 * Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in one IIFE
 * and assigns window.Spoorlangs from the "exports" list (DescribeMove).
 *
 * Not in the source pack (the quote page's React chunk was not fetched): the markup of the summary, error
 * and loading states. Summary and error render here as <p class="describe-move-summary|-error"> (system-given:
 * the site's CSS sets margin:0 on both, a block text element); the loading state is left to the consumer
 * (`disabled` is the site's :disabled rule; `iconClassName` lets the consumer apply the site's `.spin`).
 */

/* The site's own copy and attributes for the one instance (page-quote.html, verbatim). Every one is a prop
   default so a consumer never retypes Spoorlangs's words. */
function spoorlangsDescribeMoveDefaults() {
  return {
    eyebrow: 'Quicker option',
    title: 'Describe your move',
    titleId: 'describe-move-title',
    children: 'Type it in your own words and we will fill in the form below for you. Check every field before you send it — nothing is sent until you press a send button.',
    label: 'Describe your vehicle move',
    textareaId: 'move-description',
    rows: 4,
    maxLength: 1500,
    placeholder: 'I bought a 2019 Toyota Corolla at the auction in Boksburg and need it driven to my house in Sandton on Thursday morning.',
    buttonLabel: 'Fill in the form for me'
  };
}

/* Props DescribeMove consumes itself; everything else passes through to the <section>. */
function spoorlangsDescribeMoveIsOwnProp(key) {
  return key === 'className' || key === 'eyebrow' || key === 'title' || key === 'titleId' ||
    key === 'children' || key === 'label' || key === 'textareaId' || key === 'rows' ||
    key === 'maxLength' || key === 'placeholder' || key === 'value' || key === 'defaultValue' ||
    key === 'onChange' || key === 'textareaProps' || key === 'buttonLabel' || key === 'icon' ||
    key === 'iconClassName' || key === 'onFill' || key === 'disabled' || key === 'summary' ||
    key === 'error';
}

/* The wand-sparkles <svg> exactly as the site renders it inside the button (page-quote.html; path data
   identical to project/assets/Icons/wand-sparkles.svg, lucide-static v1.52.0, ISC): xmlns, 24×24,
   viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2, round caps and joins,
   class "lucide lucide-wand-sparkles", aria-hidden="true". Sized to 1.15rem by the Button part's
   `.button-primary svg,.button-secondary svg`. */
function spoorlangsDescribeMoveWandIcon(h, className) {
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'lucide lucide-wand-sparkles' + (className ? ' ' + className : ''),
    'aria-hidden': 'true'
  },
    h('path', { key: 0, d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72' }),
    h('path', { key: 1, d: 'm14 7 3 3' }),
    h('path', { key: 2, d: 'M5 6v4' }),
    h('path', { key: 3, d: 'M19 14v4' }),
    h('path', { key: 4, d: 'M10 2v2' }),
    h('path', { key: 5, d: 'M7 8H3' }),
    h('path', { key: 6, d: 'M21 16h-4' }),
    h('path', { key: 7, d: 'M11 3H9' })
  );
}

/* DescribeMove — the site's markup, in order:
   <section class="describe-move" aria-labelledby={titleId}>
     <p class="eyebrow">…</p>
     <h2 id={titleId}>…</h2>
     <p>…</p>
     <label class="sr-only" for={textareaId}>…</label>
     <textarea id={textareaId} rows maxLength placeholder></textarea>
     <button type="button" class="button-secondary"><svg …wand-sparkles/><span>…</span></button>
     [<p class="describe-move-summary">…</p>] [<p class="describe-move-error">…</p>]
   </section>
   Pass `null` for `eyebrow` or `children` to leave that paragraph out. */
function DescribeMove(props) {
  var h = window.React.createElement;
  var d = spoorlangsDescribeMoveDefaults();
  var pick = function (key) { return props[key] === undefined ? d[key] : props[key]; };
  var titleId = pick('titleId');
  var textareaId = pick('textareaId');
  var eyebrow = pick('eyebrow');
  var copy = pick('children');

  var attrs = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !spoorlangsDescribeMoveIsOwnProp(key)) {
      attrs[key] = props[key];
    }
  }
  attrs.className = 'describe-move' + (props.className ? ' ' + props.className : '');
  attrs['aria-labelledby'] = titleId;

  var textarea = {
    id: textareaId,
    rows: pick('rows'),
    maxLength: pick('maxLength'),
    placeholder: pick('placeholder')
  };
  if (props.value !== undefined) {
    textarea.value = props.value;
    if (!props.onChange) textarea.readOnly = true;
  }
  if (props.defaultValue !== undefined) textarea.defaultValue = props.defaultValue;
  if (props.onChange) textarea.onChange = props.onChange;
  if (props.textareaProps) {
    for (var tk in props.textareaProps) {
      if (Object.prototype.hasOwnProperty.call(props.textareaProps, tk)) textarea[tk] = props.textareaProps[tk];
    }
  }

  var icon = props.icon === undefined ? spoorlangsDescribeMoveWandIcon(h, props.iconClassName) : props.icon;
  var button = { type: 'button', className: 'button-secondary', disabled: !!props.disabled };
  if (props.onFill) button.onClick = props.onFill;

  return h('section', attrs,
    (eyebrow === null || eyebrow === false) ? null : h('p', { className: 'eyebrow' }, eyebrow),
    h('h2', { id: titleId }, pick('title')),
    (copy === null || copy === false) ? null : h('p', null, copy),
    h('label', { className: 'sr-only', htmlFor: textareaId }, pick('label')),
    h('textarea', textarea),
    h('button', button, icon, h('span', null, pick('buttonLabel'))),
    props.summary ? h('p', { className: 'describe-move-summary' }, props.summary) : null,
    props.error ? h('p', { className: 'describe-move-error' }, props.error) : null
  );
}

/* ---- LegalPage ---- */
/* LegalPage — Spoorlangs design system part, group "Sections" (page showcase).
   The reading column of /privacy as the live site serves it (page-privacy.html):
     <main class="quote-main"><div class="site-shell legal-page">
       <a class="back-link" href="/">[lucide arrow-left]<span>Back to home</span></a>
       <p class="eyebrow">POPIA</p>
       <h1 class="quote-title">Privacy policy</h1>
       <p>intro …</p>
       <h2>…</h2> <p class="legal-contact-line">…</p> <p>…</p> <ul><li>…</li></ul> …
     </div></main>
   plus <p class="privacy-note">…</p>, the form note on /quote and /book that shares this family's CSS.
   Styles: custom.css L1671–L1675 (.legal-contact-line), L1702–L1708 (.privacy-note),
   L2222–L2224 (.consent-field a,.privacy-note a,.legal-page a), L2242–L2256 (.legal-page, h2, p/li, ul).
   Reads the global React only. Every helper is prefixed "legalPage"/"LegalPage" so the parts
   can share one IIFE without redeclaring another part's function. */

/* The site's lucide arrow-left exactly as page-privacy.html prints it inside .back-link
   (assets/Icons/arrow-left.svg, lucide-static v1.52.0). stroke="currentColor", so it takes
   the link's ink. Prefixed: BackLink carries its own copy of this icon. */
function LegalPageArrowLeftIcon() {
  var h = React.createElement;
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'lucide lucide-arrow-left',
      'aria-hidden': 'true'
    },
    h('path', { d: 'm12 19-7-7 7-7' }),
    h('path', { d: 'M19 12H5' })
  );
}

/* Attribute passthrough: a copy of props without the names in `omit`. */
function legalPageRestProps(props, omit) {
  var rest = {};
  for (var k in props) {
    if (Object.prototype.hasOwnProperty.call(props, k) && omit.indexOf(k) === -1) {
      rest[k] = props[k];
    }
  }
  return rest;
}

/* The site's class first, the consumer's className appended. */
function legalPageClassName(base, extra) {
  return extra ? base + ' ' + extra : base;
}

/* <p class="legal-contact-line">Spoorlangs (Pty) Ltd · Kempton Park ·
     <a href="https://wa.me/27662715887" target="_blank" rel="noreferrer">WhatsApp +27 66 271 5887</a> ·
     <a href="mailto:drive@spoorlangs.online">drive@spoorlangs.online</a></p>
   Defaults are the site's own line (page-privacy.html). Pass `children` to replace the whole content.
   Brand Book p25: the contact block is "COPY EXACTLY" — city only, never a street address. */
function LegalContactLine(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = legalPageRestProps(p, ['children', 'className', 'business', 'city', 'whatsappHref', 'whatsappLabel', 'email']);
  attrs.className = legalPageClassName('legal-contact-line', p.className);
  if (p.children != null) return h('p', attrs, p.children);

  var business = p.business == null ? 'Spoorlangs (Pty) Ltd' : p.business;
  var city = p.city == null ? 'Kempton Park' : p.city;
  var whatsappHref = p.whatsappHref == null ? 'https://wa.me/27662715887' : p.whatsappHref;
  var whatsappLabel = p.whatsappLabel == null ? 'WhatsApp +27 66 271 5887' : p.whatsappLabel;
  var email = p.email == null ? 'drive@spoorlangs.online' : p.email;

  return h(
    'p',
    attrs,
    business,
    ' · ',
    city,
    ' · ',
    h('a', { href: whatsappHref, target: '_blank', rel: 'noreferrer' }, whatsappLabel),
    ' · ',
    h('a', { href: 'mailto:' + email }, email)
  );
}

/* One heading block of the reading column: <h2>, an optional contact line, then <p> / <ul><li> blocks.
   Returns a Fragment — the site wraps nothing around a section; h2, p and ul are direct children
   of .legal-page (that is what lets `.legal-page p,.legal-page li` and `.legal-page ul` apply).
   A block is a string or node (one <p>), `{ p: node }` (one <p>) or `{ ul: [node…] }` (one <ul>). */
function LegalSection(props) {
  var h = React.createElement;
  var p = props || {};
  var out = [];

  if (p.heading != null) out.push(h('h2', { key: 'h2', id: p.id }, p.heading));

  if (p.contact === true) {
    out.push(h(LegalContactLine, { key: 'contact' }));
  } else if (p.contact != null && p.contact !== false) {
    out.push(h(React.Fragment, { key: 'contact' }, p.contact));
  }

  var blocks = p.blocks || [];
  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    if (b == null) continue;
    if (typeof b === 'object' && !React.isValidElement(b) && Array.isArray(b.ul)) {
      var items = [];
      for (var j = 0; j < b.ul.length; j++) items.push(h('li', { key: j }, b.ul[j]));
      out.push(h('ul', { key: 'b' + i }, items));
    } else if (typeof b === 'object' && !React.isValidElement(b) && 'p' in b) {
      out.push(h('p', { key: 'b' + i }, b.p));
    } else if (typeof b === 'object' && !React.isValidElement(b) && !Array.isArray(b)) {
      continue; /* a plain object that is neither { p } nor { ul }: not renderable, skipped */
    } else {
      out.push(h('p', { key: 'b' + i }, b));
    }
  }

  if (p.children != null) out.push(h(React.Fragment, { key: 'children' }, p.children));
  return h(React.Fragment, null, out);
}

/* The page shell: <main class="quote-main"><div class="site-shell legal-page">…</div></main>.
   Order as the site renders it: back link, eyebrow, h1.quote-title, intro paragraph(s),
   the sections, then any free children. `main: false` returns the .legal-page div alone.
   Other props pass to the .legal-page div. */
function LegalPage(props) {
  var h = React.createElement;
  var p = props || {};
  var rest = legalPageRestProps(p, [
    'children', 'className', 'main', 'mainClassName',
    'backHref', 'backLabel', 'eyebrow', 'title', 'intro', 'sections'
  ]);
  rest.className = legalPageClassName('site-shell legal-page', p.className);

  var kids = [];

  var backHref = p.backHref === undefined ? '/' : p.backHref;
  if (backHref != null && backHref !== false) {
    kids.push(
      h(
        'a',
        { key: 'back', className: 'back-link', href: backHref },
        h(LegalPageArrowLeftIcon, null),
        h('span', null, p.backLabel == null ? 'Back to home' : p.backLabel)
      )
    );
  }

  if (p.eyebrow != null) kids.push(h('p', { key: 'eyebrow', className: 'eyebrow' }, p.eyebrow));
  if (p.title != null) kids.push(h('h1', { key: 'title', className: 'quote-title' }, p.title));

  var intro = p.intro == null ? [] : (Array.isArray(p.intro) ? p.intro : [p.intro]);
  for (var i = 0; i < intro.length; i++) kids.push(h('p', { key: 'intro' + i }, intro[i]));

  var sections = p.sections || [];
  for (var s = 0; s < sections.length; s++) {
    var sec = sections[s] || {};
    var secProps = legalPageRestProps(sec, []);
    secProps.key = sec.id != null ? sec.id : 'section' + s;
    kids.push(h(LegalSection, secProps));
  }

  if (p.children != null) kids.push(h(React.Fragment, { key: 'children' }, p.children));

  var shell = h('div', rest, kids);
  if (p.main === false) return shell;
  return h('main', { className: legalPageClassName('quote-main', p.mainClassName) }, shell);
}

/* <p class="privacy-note">… Read the <a href="/privacy">privacy notice</a>.</p>
   The form note under the quote form (/quote) and the booking form (/book). Children carry the
   copy and the link; the link is painted by `.privacy-note a` (orange, underlined). */
function PrivacyNote(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = legalPageRestProps(p, ['children', 'className']);
  attrs.className = legalPageClassName('privacy-note', p.className);
  return h('p', attrs, p.children);
}

/* ---- BookingPage ---- */
/* BookingPage — Spoorlangs design system part, group "Sections".
   Two pieces of the live site, markup copied from page-coverage.html:
   1. the sub-page shell  <main class="quote-main"><div class="site-shell booking-page">…</div></main>
      that opens /coverage, /pricing, /faq and /contact (page-coverage.html, page-pricing.html,
      page-faq.html, page-contact.html — identical opening on all four);
   2. the hairline-topped  <section class="booking-section" aria-labelledby="booking-title">
      that pairs the intro column (<p class="eyebrow"> / <h2 id="booking-title"> / <p class="lead">)
      with the booking form (<form class="quote-form">) on /coverage.
   Styles: custom.css L1465–L1475 (.booking-page, .booking-section, .booking-section h2) and
   L2194–L2196 (.booking-section inside @media (width>=900px)), copied in BookingPage.css.
   .quote-main (L1676) and .site-shell (L947) are styled by the QuoteForm and Base parts;
   .eyebrow, .lead and h2 by Eyebrow and SectionHeading.
   Reads the global React only; `h` is function-scoped so the parts can share one IIFE. */

function spoorlangsBookingClasses() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) out.push(arguments[i]);
  }
  return out.join(' ');
}

/* Copies every own prop except the named ones, so unknown attributes pass through. */
function spoorlangsBookingRest(props, omit) {
  var rest = {};
  for (var k in props) {
    if (Object.prototype.hasOwnProperty.call(props, k) && omit.indexOf(k) === -1) {
      rest[k] = props[k];
    }
  }
  return rest;
}

/* The sub-page shell.
   props: children = the page's stacked blocks in site order (back link, section heading, content,
   booking section); className appended after "site-shell booking-page"; main = false renders the
   <div> alone (the site always wraps it in <main class="quote-main">, the default); any other
   attribute passes to the <div>. */
function BookingPage(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = spoorlangsBookingRest(p, ['children', 'className', 'main']);
  attrs.className = spoorlangsBookingClasses('site-shell booking-page', p.className);
  var shell = h('div', attrs, p.children);
  if (p.main === false) return shell;
  return h('main', { className: 'quote-main' }, shell);
}

/* The hairline-topped booking section: intro column + form column.
   props: eyebrow (site: "Booking request"), title (site: "Tell us what needs moving."; always an
   <h2> — the only level the site styles here), titleId = the <h2> id and the section's
   aria-labelledby target (site: "booking-title"), lead (site: "Submitting this form creates a
   pending request. The run is booked only after Spoorlangs confirms it with you."),
   children = the form column (site: <form class="quote-form">), className appended after
   "booking-section"; any other attribute passes to the <section>. */
function BookingSection(props) {
  var h = React.createElement;
  var p = props || {};
  var titleId = p.titleId == null ? 'booking-title' : p.titleId;

  /* attribute order as the site prints it: class, aria-labelledby, then anything else */
  var attrs = { className: spoorlangsBookingClasses('booking-section', p.className) };
  attrs['aria-labelledby'] = titleId;
  var rest = spoorlangsBookingRest(p, ['children', 'className', 'eyebrow', 'title', 'titleId', 'lead']);
  for (var k in rest) {
    if (Object.prototype.hasOwnProperty.call(rest, k)) attrs[k] = rest[k];
  }

  return h('section', attrs,
    h('div', null,
      p.eyebrow == null ? null : h('p', { className: 'eyebrow' }, p.eyebrow),
      h('h2', { id: titleId }, p.title),
      p.lead == null ? null : h('p', { className: 'lead' }, p.lead)
    ),
    p.children
  );
}

/* ---- ContactCards ---- */
/* ContactCards — Spoorlangs design system part, group "Content" (system-given name).
   The /contact page pieces below the title block: the two contact cards ("Ways to reach us"),
   the "Areas we serve" list and the closing CTA row. Markup copied element for element from the
   live site's server-rendered page-contact.html (fetched 2026-10-08); the page styles these with
   Tailwind v4 utilities only (no custom class), kept verbatim in ContactCards.css.
   Exports: ContactCardIcon, ContactCard, ContactWays, AreasWeServe, ContactActions.
   Plain JS, no JSX, no import/export, no window assignment: the orchestrator wraps every part in
   one IIFE and assigns window.Spoorlangs from the "exports" list. Reads the global React only. */

/* Joins the site's class list with an optional consumer className. */
function contactCardsClasses() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) out.push(arguments[i]);
  }
  return out.join(' ');
}

/* Copies every prop except the ones a component consumes itself (pass-through attributes). */
function contactCardsRest(props, own) {
  var rest = {};
  for (var k in props) {
    if (Object.prototype.hasOwnProperty.call(props, k) && own.indexOf(k) === -1) rest[k] = props[k];
  }
  return rest;
}

/* Path data copied verbatim from project/assets/Icons/<name>.svg (lucide-static v1.52.0, ISC) —
   the two icons the contact cards render. */
function contactCardIconParts(name) {
  switch (name) {
    case 'message-circle':
      return [
        ['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' }]
      ];
    case 'mail':
      return [
        ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' }],
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }]
      ];
  }
  return null;
}

/* ContactCardIcon — the inline lucide <svg> exactly as page-contact.html prints it inside a card:
   xmlns, width/height 24, viewBox 0 0 24 24, fill none, stroke currentColor, stroke-width 2,
   round caps and joins, class "lucide lucide-<name> mb-3 text-primary", aria-hidden="true".
   The ink is currentColor, so Tailwind's text-primary paints it --primary (ignition orange). */
function ContactCardIcon(props) {
  var h = React.createElement;
  var p = props || {};
  var parts = contactCardIconParts(p.name);
  if (!parts) return null;
  var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: contactCardsClasses('lucide lucide-' + p.name + ' mb-3 text-primary', p.className),
    'aria-hidden': 'true'
  };
  var children = parts.map(function (part, i) {
    var a = {};
    for (var k in part[1]) {
      if (Object.prototype.hasOwnProperty.call(part[1], k)) a[k] = part[1][k];
    }
    a.key = i;
    return h(part[0], a);
  });
  return h.apply(null, ['svg', attrs].concat(children));
}

/* ContactCard — one bordered .5rem-radius tile, as the site renders the WhatsApp and Email cards:
   <a href="https://wa.me/27662715887" target="_blank" rel="noopener noreferrer"
      class="rounded-lg border border-border p-6 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
     <svg … class="lucide lucide-message-circle mb-3 text-primary" aria-hidden="true">…</svg>
     <p class="text-sm text-muted-foreground">WhatsApp</p>
     <p class="text-xl font-semibold">+27 66 271 5887</p>
   </a>
   The Email card is <a href="mailto:drive@spoorlangs.online" class="…"> (no target/rel) and its value
   carries "break-all". Attribute order as the site prints it: href, target, rel, class. */
function ContactCard(props) {
  var h = React.createElement;
  var p = props || {};
  var href = p.href == null ? '' : String(p.href);
  var external = p.external === undefined ? /^https?:\/\//i.test(href) : !!p.external;
  var breakAll = p.breakAll === undefined ? /^mailto:/i.test(href) : !!p.breakAll;
  var icon = p.icon;
  if (typeof icon === 'string') icon = h(ContactCardIcon, { name: icon });
  else if (icon === undefined) icon = null;

  var attrs = contactCardsRest(p, ['href', 'external', 'breakAll', 'icon', 'label', 'value', 'className', 'children']);
  attrs.href = href;
  if (external) {
    attrs.target = '_blank';
    attrs.rel = 'noopener noreferrer';
  }
  attrs.className = contactCardsClasses(
    'rounded-lg border border-border p-6 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary',
    p.className
  );

  return h('a', attrs,
    icon,
    p.label == null ? null : h('p', { className: 'text-sm text-muted-foreground' }, p.label),
    p.value == null ? null : h('p', { className: contactCardsClasses('text-xl font-semibold', breakAll ? 'break-all' : null) }, p.value),
    p.children
  );
}

/* ContactWays — the cards section:
   <section aria-labelledby="contact-ways" class="mt-10 grid gap-4 sm:grid-cols-2">
     <h2 id="contact-ways" class="sr-only">Ways to reach us</h2>
     …ContactCard × n (the site: WhatsApp, then Email)…
   </section>
   The heading is visually hidden (sr-only) and names the section for assistive technology. */
function ContactWays(props) {
  var h = React.createElement;
  var p = props || {};
  var id = p.id == null ? 'contact-ways' : p.id;
  var heading = p.heading == null ? 'Ways to reach us' : p.heading;
  var cards = Array.isArray(p.cards) ? p.cards : [];

  var attrs = contactCardsRest(p, ['id', 'heading', 'cards', 'className', 'children']);
  attrs['aria-labelledby'] = id;
  attrs.className = contactCardsClasses('mt-10 grid gap-4 sm:grid-cols-2', p.className);

  var items = cards.map(function (card, i) {
    var c = {};
    for (var k in card) {
      if (Object.prototype.hasOwnProperty.call(card, k)) c[k] = card[k];
    }
    if (c.key == null) c.key = c.href != null ? c.href : i;
    return h(ContactCard, c);
  });

  return h.apply(null, ['section', attrs, h('h2', { id: id, className: 'sr-only' }, heading)].concat(items, [p.children]));
}

/* The eight areas exactly as page-contact.html lists them, in its order. */
var contactCardsDefaultAreas = [
  'Johannesburg',
  'Sandton',
  'Midrand',
  'Centurion',
  'Pretoria',
  'Ekurhuleni',
  'Roodepoort & West Rand',
  'Vereeniging & Vanderbijlpark'
];

/* AreasWeServe — the list section:
   <section aria-labelledby="areas" class="mt-12">
     <h2 id="areas" class="text-2xl">Areas we serve</h2>
     <p class="mt-2 text-muted-foreground">We come to you — no walk-in office. Pickup and drop-off across:</p>
     <ul class="mt-4 grid gap-2 sm:grid-cols-2">
       <li class="rounded-md border border-border px-4 py-3">Johannesburg</li> … ×8
     </ul>
     <p class="mt-4 text-sm text-muted-foreground">Runners only — the vehicle must start and drive. Outside these areas, WhatsApp Nico for a quote.</p>
   </section>
   Defaults are the site's own words; pass intro: null or note: null to drop a paragraph. */
function AreasWeServe(props) {
  var h = React.createElement;
  var p = props || {};
  var id = p.id == null ? 'areas' : p.id;
  var heading = p.heading == null ? 'Areas we serve' : p.heading;
  var intro = p.intro === undefined ? 'We come to you — no walk-in office. Pickup and drop-off across:' : p.intro;
  var note = p.note === undefined ? 'Runners only — the vehicle must start and drive. Outside these areas, WhatsApp Nico for a quote.' : p.note;
  var areas = Array.isArray(p.areas) ? p.areas : contactCardsDefaultAreas;

  var attrs = contactCardsRest(p, ['id', 'heading', 'intro', 'note', 'areas', 'className', 'children']);
  attrs['aria-labelledby'] = id;
  attrs.className = contactCardsClasses('mt-12', p.className);

  var items = areas.map(function (area, i) {
    return h('li', { key: typeof area === 'string' ? area : i, className: 'rounded-md border border-border px-4 py-3' }, area);
  });

  return h('section', attrs,
    h('h2', { id: id, className: 'text-2xl' }, heading),
    intro == null ? null : h('p', { className: 'mt-2 text-muted-foreground' }, intro),
    h.apply(null, ['ul', { className: 'mt-4 grid gap-2 sm:grid-cols-2' }].concat(items)),
    note == null ? null : h('p', { className: 'mt-4 text-sm text-muted-foreground' }, note),
    p.children
  );
}

/* ContactActions — the CTA row that closes the page: <div class="mt-12 flex flex-wrap gap-3">…</div>.
   The site puts <a class="button-primary" href="/quote?service=&pickup="><span>Get a quote</span></a>
   and <a class="button-secondary" href="/pricing"><span>See guide rates</span></a> inside (Button family). */
function ContactActions(props) {
  var h = React.createElement;
  var p = props || {};
  var attrs = contactCardsRest(p, ['className', 'children']);
  attrs.className = contactCardsClasses('mt-12 flex flex-wrap gap-3', p.className);
  return h('div', attrs, p.children);
}

/* ---- IgnitionRule ---- */
/* IgnitionRule — an INTENTIONAL ADDITION sourced from the Brand Book, not the site.
   Brand Book p22 "Layout, Grid & Spacing": "Lines: 1–2 px steel or titanium. Ignition rule 96 × 5 px under headings."
   Every page image shows it: the page title in Bebas Neue white caps with a 96 × 5 px Ignition Orange rule beneath
   (12.png measured 1:1 on the 1920 × 1080 slide: rule x 120–215 / y 222–226 = 96 × 5 px; title cap baseline 34 px above it).
   The live site draws no such rule. Its nearest device is the 2.5rem × 1px orange dash that .hero-kicker:before,.eyebrow:before
   paints BEFORE a label (custom.css L1066–L1071) — offered here only as the `eyebrow` comparison variant.
   Markup and class names are system-given (neither source names a web element for this graphic):
     <span class="ignition-rule" aria-hidden="true"></span>
     <div><h2 class="ignition-heading brand-h1" id="…">SAME-DAY. ON WHEELS.</h2><span class="ignition-rule" aria-hidden="true"></span></div>
   .brand-display / .brand-h1 / .brand-h2 are the tokens.css type-style classes (Brand Book p17 DISPLAY 96 px web max, HEADING 1 48 px web,
   HEADING 2 32 px web; Bebas Neue 400 via --font-brand-display). */

function ignitionRuleRest(props, own) {
  var rest = {};
  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && !Object.prototype.hasOwnProperty.call(own, key)) {
      rest[key] = props[key];
    }
  }
  return rest;
}

/* The rule alone. variant 'ignition' (default): Brand Book p22, --ignition-rule-width × --ignition-rule-height in --ignition-orange.
   variant 'eyebrow': the site's .eyebrow::before dimensions, --eyebrow-rule-width × --eyebrow-rule-height in --orange (comparison). */
function IgnitionRule(props) {
  const h = window.React.createElement;
  var variant = props.variant === 'eyebrow' ? 'eyebrow' : 'ignition';
  var rest = ignitionRuleRest(props, { variant: 1, className: 1, children: 1 });
  rest.className = 'ignition-rule' + (variant === 'eyebrow' ? ' ignition-rule-eyebrow' : '') + (props.className ? ' ' + props.className : '');
  if (rest['aria-hidden'] === undefined) { rest['aria-hidden'] = 'true'; }
  return h('span', rest);
}

/* A heading with the rule beneath it — the Brand Book's page-title device.
   level: the heading element ('h1' | 'h2' | 'h3'; default 'h2'). size: the p17 step ('display' | 'h1' | 'h2'; default 'h1').
   rule: 'ignition' (default) | 'eyebrow' (comparison). id lands on the heading (for aria-labelledby); every other prop lands on the wrapper <div>. */
function IgnitionHeading(props) {
  const h = window.React.createElement;
  var level = props.level === 'h1' || props.level === 'h3' ? props.level : 'h2';
  var size = props.size === 'display' || props.size === 'h2' ? props.size : 'h1';
  var sizeClass = size === 'display' ? 'brand-display' : (size === 'h2' ? 'brand-h2' : 'brand-h1');
  var rest = ignitionRuleRest(props, { level: 1, size: 1, rule: 1, className: 1, children: 1, id: 1 });
  if (props.className) { rest.className = props.className; }
  var headingProps = { className: 'ignition-heading ' + sizeClass };
  if (props.id !== undefined) { headingProps.id = props.id; }
  return h('div', rest,
    h(level, headingProps, props.children),
    h(IgnitionRule, { variant: props.rule === 'eyebrow' ? 'eyebrow' : 'ignition' })
  );
}

var ns = window.Spoorlangs = window.Spoorlangs || {};
ns.Button = Button;
ns.WhatsAppButton = WhatsAppButton;
ns.ButtonIcon = ButtonIcon;
ns.FloatingActions = FloatingActions;
ns.FloatingQuote = FloatingQuote;
ns.WhatsAppWidget = WhatsAppWidget;
ns.Eyebrow = Eyebrow;
ns.SectionHeading = SectionHeading;
ns.SplitHeading = SplitHeading;
ns.Heading = Heading;
ns.Lead = Lead;
ns.BackLink = BackLink;
ns.SiteHeader = SiteHeader;
ns.NavLinks = NavLinks;
ns.NavLink = NavLink;
ns.SiteFooter = SiteFooter;
ns.Hero = Hero;
ns.HeroAction = HeroAction;
ns.ServiceGrid = ServiceGrid;
ns.ServiceCard = ServiceCard;
ns.ServicesSection = ServicesSection;
ns.ServiceDetail = ServiceDetail;
ns.ServicesIntro = ServicesIntro;
ns.ServicesDetailSection = ServicesDetailSection;
ns.ServiceDetailArticle = ServiceDetailArticle;
ns.ServicesMidCta = ServicesMidCta;
ns.ServicesNotes = ServicesNotes;
ns.ServicesCta = ServicesCta;
ns.ServiceDetailIcon = ServiceDetailIcon;
ns.ProcessSection = ProcessSection;
ns.ProcessVisual = ProcessVisual;
ns.ProcessSteps = ProcessSteps;
ns.ProcessStep = ProcessStep;
ns.BenefitIcon = BenefitIcon;
ns.BenefitItem = BenefitItem;
ns.BenefitList = BenefitList;
ns.WhyVisual = WhyVisual;
ns.WhySection = WhySection;
ns.TrustRitual = TrustRitual;
ns.TrustRitualList = TrustRitualList;
ns.TrustRitualItem = TrustRitualItem;
ns.AboutLayout = AboutLayout;
ns.WhatsappBand = WhatsappBand;
ns.WhatsappBandAction = WhatsappBandAction;
ns.FaqSection = FaqSection;
ns.FaqGroup = FaqGroup;
ns.FaqList = FaqList;
ns.FaqItem = FaqItem;
ns.FaqCta = FaqCta;
ns.ContactBand = ContactBand;
ns.ContactBandAction = ContactBandAction;
ns.CoverageSection = CoverageSection;
ns.CoverageMap = CoverageMap;
ns.CoverageHonesty = CoverageHonesty;
ns.CoverageNote = CoverageNote;
ns.CoverageBookingLink = CoverageBookingLink;
ns.PricingTable = PricingTable;
ns.PricingNotes = PricingNotes;
ns.GuideRates = GuideRates;
ns.VehicleCard = VehicleCard;
ns.VehicleGrid = VehicleGrid;
ns.VehicleSection = VehicleSection;
ns.Field = Field;
ns.ConsentField = ConsentField;
ns.FormError = FormError;
ns.QuoteConfirmation = QuoteConfirmation;
ns.CorridorChips = CorridorChips;
ns.CorridorChip = CorridorChip;
ns.QuoteIcon = QuoteIcon;
ns.QuoteLayout = QuoteLayout;
ns.QuoteIntro = QuoteIntro;
ns.QuoteField = QuoteField;
ns.QuoteCorridorPicker = QuoteCorridorPicker;
ns.QuoteActions = QuoteActions;
ns.QuoteAction = QuoteAction;
ns.QuoteForm = QuoteForm;
ns.QuoteSent = QuoteSent;
ns.DescribeMove = DescribeMove;
ns.LegalPage = LegalPage;
ns.LegalSection = LegalSection;
ns.LegalContactLine = LegalContactLine;
ns.PrivacyNote = PrivacyNote;
ns.BookingPage = BookingPage;
ns.BookingSection = BookingSection;
ns.ContactCardIcon = ContactCardIcon;
ns.ContactCard = ContactCard;
ns.ContactWays = ContactWays;
ns.AreasWeServe = AreasWeServe;
ns.ContactActions = ContactActions;
ns.IgnitionRule = IgnitionRule;
ns.IgnitionHeading = IgnitionHeading;
})();
