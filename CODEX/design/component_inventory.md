# Component Inventory

## Production Components In `/index.html`

### Navigation
- `menuToggle`
- `backdrop`
- `.sidebar`
- `.nav a`

### Branding
- `.brand`
- `.brand-mark`
- `.brand-copy`
- `.sidebar-footer`

### Hero
- `.hero-actions`
- `.hero-action-note`
- `.hero-point`
- `.hero-panel-main`
- `.hero-carousel`
- `.hero-slide`
- `.hero-carousel-btn`
- `.hero-carousel-dot`
- `.hero-slide` now uses both a background image fallback and the nested `<picture>` element for more reliable painting across browsers

### Content Blocks
- `.card`
- `.card-icon`
- `.metric`
- `.products-grid`
- `.product-router`
- `.route-pill`
- `.product-card`
- `.product-card-featured`
- `.product-status`
- `.feature-item`
- `.pillar`
- `.contact-card`
- `.contact-panel`
- `.contact-lead`

### Journey / Timeline
- `.timeline`
- `.timeline-row`
- `.timeline-card`
- `.timeline-summary`
- `.timeline-marker`
- `.timeline-placeholder`

### Utility Layout
- `.grid`
- `.grid-2`
- `.grid-3`
- `.grid-4`
- `.section`
- `.shell`
- `.card-actions`

## Component Notes
- Most reusable UI already shares classes instead of one-off IDs.
- The carousel is the most JS-dependent component.
- The timeline is the highest-risk layout pattern because of the broken mobile behavior.
- The new product router is a lightweight conversion component rather than a separate page-level navigation system.
- DII Accounts is currently the only full-width featured product card in the grid.
