# Component Inventory

## Production Components In `/index.html`

### Navigation
- `.skip-link`
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
- `.availability-band`
- `.availability-card`
- `.status-chip`
- `.section-status`
- `.proof-band`
- `.proof-card`
- `.proof-icon`
- `.proof-kicker`
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
- `.timeline-visual`
- `.timeline-visual-card`
- `.timeline-preview-card`
- `.timeline-preview-thumb`

### Knowledge Visuals
- `.knowledge-panel`
- `.knowledge-board`
- `.knowledge-hero-card`
- `.knowledge-topic-grid`
- `.knowledge-topic-card`
- `.knowledge-query-row`
- `.knowledge-query`

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
- Navigation now includes a dedicated skip link plus `aria-current` state syncing between the viewport observer and sidebar anchors.
- The carousel is the most JS-dependent component.
- The timeline is the highest-risk layout pattern because of the broken mobile behavior.
- The old placeholder visual system has been removed in favor of reusable timeline and knowledge presentation components.
- The new product router is a lightweight conversion component rather than a separate page-level navigation system.
- DII Accounts is currently the only full-width featured product card in the grid.
- The availability band now acts as a reusable trust/clarity component for signaling which ecosystem layers are live today versus still growing next.
- The proof band now acts as a reusable trust component for factual credibility cues near conversion decisions.
