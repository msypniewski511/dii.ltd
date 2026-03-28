# Frontend Map

## Stack
- Static HTML
- External CSS in `/assets/css/site.css`
- External vanilla JS in `/assets/js/site.js`
- Third-party browser scripts loaded from `unpkg.com`:
  - Ionicons
  - GSAP
  - GSAP ScrollTrigger

## Live File Structure

### Root files
- `/robots.txt`: allows crawling and points bots to `https://dii.ltd/sitemap.xml`
- `/sitemap.xml`: currently lists the homepage only
- `/google46d6e99a9bb78479.html`: Google Search Console verification file supplied by the site owner
- `/assets/css/site.css`: extracted production stylesheet for the live homepage
- `/assets/js/site.js`: extracted production interaction script for the live homepage
- `/tmp.html`: archived prototype file kept for reference, now visibly marked as non-production and cleaned so no prompt text remains after the closing HTML

### `/index.html`
- `<head>`
  - Title, description, robots, canonical, theme color, and favicon
  - Open Graph title, description, site name, type, url, image, and image alt
  - Twitter card title, description, and image metadata
  - JSON-LD graph for `Organization`, `WebSite`, and `WebPage`
  - External script tags for Ionicons and GSAP
  - `<link rel="stylesheet" href="assets/css/site.css" />`
- `<body>`
  - Fixed skip link to `#mainContent` for keyboard users
  - Mobile menu toggle button
  - Backdrop overlay
  - Fixed decorative `.page-infinity` background accent with an inline SVG infinity mark, glow trails, and soft color blooms in the top-right page background
  - Fixed sidebar with:
    - Brand block
    - Anchor navigation with `aria-current="location"` on the active section link
    - "Live ecosystem" side card with external product links
    - Office address footer
    - Internal vertical scrolling when the sidebar content exceeds the viewport height
  - `<main id="mainContent">` containing all homepage sections
  - `<script src="assets/js/site.js"></script>` for sidebar behavior, active nav, carousel, and GSAP reveals

## Section Map

### `#hero`
- Left column: eyebrow, H1, lede, three role-specific CTA buttons, a CTA guidance note, and three audience-fit cards that now include compact direct route links
- Right column: live-now proof summary glass card plus a four-slide hero image carousel
- Carousel image paths are repo-relative so the slides render both from a hosted root and when `index.html` is opened directly from the filesystem
- Hero slides also carry a CSS background-image fallback so the carousel still paints even if the browser mishandles the nested `<picture>` layer inside the glass panel
- Because the fallback images are now consumed from `/assets/css/site.css`, the `--slide-image` custom-property URLs in `/index.html` must stay stylesheet-relative (`../images/...`) rather than HTML-relative asset paths
- The lower carousel panel now has an explicit height so the slide, picture, and image layers do not collapse to `0px`
- The right-side `.hero-art` frame now uses a taller aspect ratio and minimum height, and the top `.hero-panel-main` glass card is intentionally larger to better balance the left-column hero copy
- The top and bottom hero glass cards now sit in a two-row internal layout, so the gap between them follows the hero frame gutter instead of opening into a large empty band
- The tertiary hero action now jumps directly to the guided enquiry workspace inside `#contact`
- The hero copy and summary now treat finance/accountancy as a live layer, and the carousel includes a DII Accounts slide using `/assets/images/DIIAccounts.jpg`
- Hero product naming is now standardized around Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts, and the Fast Checker screenshot is presented as a Startup Business Builder entry view rather than a separate live product
- The hero H1 and lede now signal five live routes earlier, while the left-side cards separate new founders, visa-focused founders, and operations/finance teams before the visitor reaches the products section
- The buyer-fit cards now also hand visitors directly into the closest product sections using compact route chips, so the first screen moves from recognition into action without repeating the full products router
- The top hero panel now uses a factual proof grid covering live routes, named inboxes, the London HQ, and the growing-next knowledge layer instead of the earlier abstract progress-bar treatment
- Key classes: `.hero`, `.hero-copy`, `.hero-actions`, `.hero-action-note`, `.hero-point`, `.hero-point-route`, `.hero-point-copy`, `.hero-point-links`, `.hero-point-link`, `.hero-art`, `.hero-panel-main`, `.hero-facts`, `.hero-fact`, `.hero-carousel`, `.hero-slide`

### `#platform`
- Section head plus a reusable two-card availability band, four explanatory cards, a route-handoff head, and a four-card route handoff row, now including a live finance layer
- The section copy now frames DII more directly around clearer founder decisions, lower operational drag, stronger finance control, and earlier route selection instead of mostly ecosystem description
- The section now hands visitors directly to founder, operations, finance, knowledge, or guided-enquiry routes instead of ending on explanation alone.
- Key classes: `.platform-band`, `.grid.grid-4`, `.card`, `.platform-handoff-head`, `.platform-handoff-row`, `.platform-handoff-card`, `.platform-handoff-kicker`, `.platform-handoff-note`, `.platform-handoff-links`, `.platform-handoff-link`

### `#products`
- Product-intent intro, a three-card proof band, a routing strip for common visitor goals, a two-card operations proof strip, and five product cards with status pills, reusable audience/problem/outcome fit rows, bullet lists, and outbound buttons
- The live naming map is Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts, matching the current destination brands or live route labels
- Warewise currently points to the custom domain `https://www.northstarwms.co/wms`
- The final finance card spans the full product grid width to position DII Accounts as the layer that later connects planning, operations, and reporting
- The section now surfaces factual trust cues before the route pills: five live product routes, named inboxes, and the public London HQ listing
- The route pills now use clearer starting contexts such as new founder idea, IFV-ready venture case, team shift planning, warehouse stock control, and finance operations so the five routes separate faster before visitors read the full cards
- The operations proof strip now gives Rotaplan and Warewise their own route-specific workflow summaries before the visitor reaches the individual product cards.
- Key classes: `.proof-band`, `.proof-card`, `.proof-kicker`, `.products-grid`, `.product-router`, `.route-pill`, `.operations-proof-band`, `.operations-proof-card`, `.operations-proof-list`, `.route-signal-board`, `.route-signal-label`, `.route-signal-list`, `.route-signal-row`, `.route-signal-key`, `.route-signal-value`, `.route-signal-note`, `.product-card`, `.product-card-featured`, `.product-head`, `.product-status`, `.product-fit`, `.product-fit-item`, `.product-fit-label`, `.product-fit-copy`, `.product-list`

### `#how-it-works`
- Intro plus five alternating timeline rows that now explicitly include a finance path
- Each row uses left/right columns split between `.timeline-card` and `.timeline-summary`
- The summary side now uses structured route boards, a live route proof board with five named product cards in Step 02, product preview tiles, and ecosystem layer cards instead of plain placeholder text pills
- The Step 02 proof cards now jump directly to the matching product anchors so the journey section acts as both proof and route handoff
- Rotaplan and Warewise now use structured workflow signal boards inside the journey instead of generic icon-only thumbs, and Step 03 separates those operations routes into distinct preview cards again.
- Key classes: `.timeline`, `.timeline-row`, `.timeline-side`, `.timeline-center`, `.timeline-marker`, `.timeline-visual`, `.timeline-visual-card`, `.timeline-proof-grid`, `.timeline-preview-card`, `.timeline-preview-thumb`, `.timeline-proof-link`, `.route-signal-board`, `.route-signal-label`, `.route-signal-list`, `.route-signal-row`, `.route-signal-key`, `.route-signal-value`, `.route-signal-note`
- Mobile behavior: below `920px`, each row reflows into a stacked two-card layout with the marker in the left rail and the main step card shown first

### `#knowledge`
- Left card describing the growing-next content direction with an explicit availability note
- The section copy now frames the knowledge layer around search-oriented questions, example guides, solution paths, and discovery intent instead of mostly strategic future-language
- Right panel now uses a real knowledge board with hero media, topic cards, and example discovery-path cards instead of a browser-wireframe placeholder
- Key classes: `.knowledge-split`, `.feature-list`, `.feature-item`, `.knowledge-panel`, `.knowledge-board`, `.knowledge-hero-card`, `.knowledge-topic-grid`, `.knowledge-path-head`, `.knowledge-path-grid`, `.knowledge-path-note`, `.section-status`

### `#principles`
- Four compact brand-principle blocks
- The section intro and pillar copy now describe the intended result of DII's approach, not just broad values-language
- Key class: `.pillars`, `.pillar`

### `#contact`
- Four contact cards plus a parent-brand summary panel, guided-enquiry lead block, guided enquiry workspace, a three-card next-steps reassurance strip, and footer text
- The guided enquiry workspace collects name, email, company, closest route, enquiry type, and problem summary, then recommends the right inbox and prepares a structured message
- The result state exposes both a copyable message and a ready-made `mailto:` draft so visitors do not depend entirely on a configured mail app, and the note/status copy now frames that first message as the starting brief DII can route
- Key classes: `.contact-shell`, `.contact-grid`, `.contact-card`, `.contact-panel`, `.contact-lead`, `.guided-enquiry`, `.guided-enquiry-form`, `.guided-enquiry-grid`, `.guided-field`, `.guided-input`, `.guided-result`, `.guided-result-grid`, `.guided-result-card`, `.guided-result-link`, `.guided-status`, `.guided-note`, `.contact-next-steps`, `.contact-step`, `.contact-step-number`, `.footer`

## CSS Architecture
- Lives in `/assets/css/site.css`
- Tokenized at the top with `:root` custom properties for color, shadow, radius, sidebar width, and container width
- Pattern-based component classes:
  - layout: `.shell`, `.section`, `.grid-*`
  - decorative background: `.page-infinity`, `.page-infinity-svg`
  - navigation: `.sidebar`, `.nav`, `.mini-link`
  - actions: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`
  - hero handoff: `.hero-point-links`, `.hero-point-link`
  - availability cues: `.availability-band`, `.availability-card`, `.status-chip`, `.section-status`
  - trust cues: `.proof-band`, `.proof-card`, `.proof-icon`, `.proof-kicker`
  - platform handoff: `.platform-handoff-*`
  - operations proof: `.operations-proof-*`, `.route-signal-*`
  - content blocks: `.card`, `.metric`, `.pillar`, `.contact-card`, `.contact-lead`
  - lead capture: `.guided-enquiry`, `.guided-field`, `.guided-input`, `.guided-result-*`, `.guided-actions`
  - routing: `.products-grid`, `.product-router`, `.route-pill`
  - timeline: `.timeline-*`, `.timeline-visual*`, `.timeline-proof-*`, `.timeline-preview-*`
  - knowledge visuals: `.knowledge-panel`, `.knowledge-board`, `.knowledge-hero-*`, `.knowledge-topic-*`, `.knowledge-path-*`
- Responsive breakpoints:
  - `1260px`
  - `1080px`
  - `920px`
  - `760px`
  - `prefers-reduced-motion: reduce`
- Sidebar behavior:
  - Fixed at desktop and mobile
  - Scrolls internally via `overflow-y: auto` when the menu/content exceeds the viewport height

## JS Behavior
- Lives in `/assets/js/site.js`
- Mobile sidebar open/close via `#menuToggle`, `#sidebar`, and `#backdrop`
- Mobile sidebar also closes on `Escape` and returns focus to the menu button when dismissed via Escape or backdrop click
- Nav section highlight via `IntersectionObserver`, with matching `aria-current="location"` updates on the active anchor
- Hero carousel:
  - previous/next buttons
  - dot navigation
  - autoplay every 5 seconds
  - autoplay pause on hover/focus
  - autoplay now stays paused even after a dot or arrow click if the carousel is still hovered or focus-within
  - reduced-motion guard
- Decorative `ion-icon` elements are hidden from assistive tech in the extracted script
- Hero carousel slides toggle `aria-hidden` and dots toggle `aria-pressed` so inactive slide content is not exposed as current
- Guided enquiry tool:
  - collects the visitor's route, need, and problem summary in-page
  - recommends the appropriate inbox using route-plus-intent logic
  - prepares a structured message preview
  - supports clipboard copy plus a generated `mailto:` draft link
  - keeps the result state synced if the visitor edits the form after the first submit
  - now uses status messaging that treats the generated enquiry as the starting brief for the next conversation, not just a mail-app fallback
- GSAP entrance animations for hero and `.reveal` sections

## Known Frontend Risks
- CSS and JS are now extracted, but they still live as one large stylesheet and one large script without module boundaries
- `carousel` logic assumes `#heroCarousel` exists before event binding
- The guided enquiry tool is still a client-side helper, not a true form backend, so the final send step still happens through the visitor's email service
- There is still no bundling or cache-busting asset pipeline; the page relies on static relative asset paths
- A best-available hosted matrix is now recorded for Chrome, Edge, Firefox, Android-size mobile emulation, iPhone-size mobile emulation, WebKit desktop, and WebKit iPhone-size mobile emulation; only true physical-phone coverage remains unrecorded from this environment
- As of 2026-03-24, the hosted GitHub Pages deployment is back in sync with the repo and serves `/assets/css/site.css` plus `/assets/js/site.js`; the remaining QA gap is now real-device phone access rather than deployment drift

## Reuse Assets
- `/CODEX/design/ui_playbook.md` stores the reusable Codex-facing design instructions for this visual language.
- `/CODEX/design/ui_foundation.css` stores the extracted starter CSS system for reuse in future projects.
- `/assets/css/site.css` remains the exact source for page-specific selectors beyond the starter kit, while `/index.html` remains the structure/content reference.
