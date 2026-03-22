# Frontend Map

## Stack
- Static HTML
- Inline CSS inside `/index.html`
- Inline vanilla JS inside `/index.html`
- Third-party browser scripts loaded from `unpkg.com`:
  - Ionicons
  - GSAP
  - GSAP ScrollTrigger

## Live File Structure

### `/index.html`
- `<head>`
  - Title, description, theme color
  - Open Graph title, description, type, url, image
  - External script tags for Ionicons and GSAP
  - One large inline `<style>` block
- `<body>`
  - Mobile menu toggle button
  - Backdrop overlay
  - Fixed decorative `.page-infinity` background accent with an inline SVG infinity mark, glow trails, and soft color blooms in the top-right page background
  - Fixed sidebar with:
    - Brand block
    - Anchor navigation
    - "Live ecosystem" side card with external product links
    - Office address footer
  - `<main>` containing all homepage sections
  - One inline `<script>` block for sidebar behavior, active nav, carousel, and GSAP reveals

## Section Map

### `#hero`
- Left column: eyebrow, H1, lede, three role-specific CTA buttons, a CTA guidance note, and three value-point cards
- Right column: ecosystem summary glass card plus a four-slide hero image carousel
- Carousel image paths are repo-relative so the slides render both from a hosted root and when `index.html` is opened directly from the filesystem
- Hero slides also carry a CSS background-image fallback so the carousel still paints even if the browser mishandles the nested `<picture>` layer inside the glass panel
- The lower carousel panel now has an explicit height so the slide, picture, and image layers do not collapse to `0px`
- The right-side `.hero-art` frame now uses a taller aspect ratio and minimum height, and the top `.hero-panel-main` glass card is intentionally larger to better balance the left-column hero copy
- The top and bottom hero glass cards now sit in a two-row internal layout, so the gap between them follows the hero frame gutter instead of opening into a large empty band
- The tertiary hero action now opens a guided `mailto:` enquiry instead of only pushing visitors to the contact section
- The hero copy and summary now treat finance/accountancy as a live layer, and the carousel includes a DII Accounts slide using `/assets/images/DIIAccounts.jpg`
- Key classes: `.hero`, `.hero-copy`, `.hero-actions`, `.hero-action-note`, `.hero-point`, `.hero-art`, `.hero-carousel`, `.hero-slide`

### `#platform`
- Section head plus four explanatory cards and a four-metric row, now including a live finance layer
- Key classes: `.platform-band`, `.grid.grid-4`, `.card`, `.metric-row`, `.metric`

### `#products`
- Product-intent intro, a routing strip for common visitor goals, and five product cards with status pills, bullet lists, and outbound buttons
- The final finance card spans the full product grid width to position DII Accounts as the layer that later connects planning, operations, and reporting
- Key classes: `.products-grid`, `.product-router`, `.route-pill`, `.product-card`, `.product-card-featured`, `.product-head`, `.product-status`, `.product-list`

### `#how-it-works`
- Intro plus five alternating timeline rows that now explicitly include a finance path
- Each row uses left/right columns split between `.timeline-card` and `.timeline-summary`
- Key classes: `.timeline`, `.timeline-row`, `.timeline-side`, `.timeline-center`, `.timeline-marker`, `.timeline-placeholder`
- Mobile behavior: below `920px`, each row reflows into a stacked two-card layout with the marker in the left rail and the main step card shown first

### `#knowledge`
- Left card describing future content direction
- Right visual placeholder frame with editor instructions
- Key classes: `.knowledge-split`, `.feature-list`, `.feature-item`, `.placeholder-frame`

### `#principles`
- Four compact brand-principle blocks
- Key class: `.pillars`, `.pillar`

### `#contact`
- Four contact cards plus a parent-brand summary panel, guided-enquiry lead block, and footer text
- Key classes: `.contact-shell`, `.contact-grid`, `.contact-card`, `.contact-panel`, `.contact-lead`, `.footer`

## CSS Architecture
- Tokenized at the top with `:root` custom properties for color, shadow, radius, sidebar width, and container width
- Pattern-based component classes:
  - layout: `.shell`, `.section`, `.grid-*`
  - decorative background: `.page-infinity`, `.page-infinity-svg`
  - navigation: `.sidebar`, `.nav`, `.mini-link`
  - actions: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`
  - content blocks: `.card`, `.metric`, `.pillar`, `.contact-card`, `.contact-lead`
  - routing: `.products-grid`, `.product-router`, `.route-pill`
  - timeline: `.timeline-*`
  - placeholder visuals: `.placeholder-*`
- Responsive breakpoints:
  - `1260px`
  - `1080px`
  - `920px`
  - `760px`
  - `prefers-reduced-motion: reduce`

## JS Behavior
- Mobile sidebar open/close via `#menuToggle`, `#sidebar`, and `#backdrop`
- Nav section highlight via `IntersectionObserver`
- Hero carousel:
  - previous/next buttons
  - dot navigation
  - autoplay every 5 seconds
  - autoplay pause on hover/focus
  - reduced-motion guard
- GSAP entrance animations for hero and `.reveal` sections

## Known Frontend Risks
- Inline CSS and JS make future changes harder to isolate and cache
- `carousel` logic assumes `#heroCarousel` exists before event binding
- No separate reusable asset pipeline yet; all presentation logic is embedded in one file
