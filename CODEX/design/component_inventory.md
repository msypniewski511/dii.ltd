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
- `.hero-point-route`
- `.hero-point-copy`
- `.hero-point-links`
- `.hero-point-link`
- `.hero-panel-main`
- `.hero-facts`
- `.hero-fact`
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
- `.platform-handoff-head`
- `.platform-handoff-row`
- `.platform-handoff-card`
- `.platform-handoff-kicker`
- `.platform-handoff-note`
- `.platform-handoff-links`
- `.platform-handoff-link`
- `.operations-proof-band`
- `.operations-proof-card`
- `.operations-proof-list`
- `.route-signal-board`
- `.route-signal-label`
- `.route-signal-list`
- `.route-signal-row`
- `.route-signal-key`
- `.route-signal-value`
- `.route-signal-note`
- `.metric`
- `.products-grid`
- `.product-router`
- `.route-pill`
- `.product-card`
- `.product-card-featured`
- `.product-status`
- `.product-fit`
- `.product-fit-item`
- `.product-fit-label`
- `.product-fit-copy`
- `.feature-item`
- `.pillar`
- `.contact-card`
- `.contact-panel`
- `.contact-lead`
- `.contact-next-steps`
- `.contact-step`
- `.contact-step-number`
- `.guided-enquiry`
- `.guided-enquiry-form`
- `.guided-enquiry-grid`
- `.guided-field`
- `.guided-input`
- `.guided-result`
- `.guided-result-grid`
- `.guided-result-card`
- `.guided-result-link`
- `.guided-status`
- `.guided-note`

### Journey / Timeline
- `.timeline`
- `.timeline-row`
- `.timeline-card`
- `.timeline-summary`
- `.timeline-marker`
- `.timeline-visual`
- `.timeline-visual-card`
- `.timeline-proof-grid`
- `.timeline-preview-card`
- `.timeline-preview-thumb`
- `.timeline-proof-link`

### Knowledge Visuals
- `.knowledge-panel`
- `.knowledge-board`
- `.knowledge-hero-card`
- `.knowledge-topic-grid`
- `.knowledge-topic-card`
- `.knowledge-path-head`
- `.knowledge-path-grid`
- `.knowledge-path-note`

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
- The platform handoff row now acts as a reusable conversion bridge for turning higher-level ecosystem framing into direct route choices without duplicating the full products section.
- The operations proof strip now acts as a reusable conversion pattern for separating operations routes when screenshots are unavailable or uneven across products.
- The product-fit rows now act as a reusable comparison aid inside the product cards, clarifying audience, problem, and intended outcome without needing a separate comparison table.
- The timeline proof grid now acts as a reusable mid-page trust pattern for turning a journey step into named live routes with direct product handoff.
- The knowledge discovery-path cards now act as a reusable preview pattern for showing search-style topic intent before a full article library exists.
- The guided enquiry workspace now acts as a reusable lead-capture pattern for static sites that need structured email-ready output without a backend form service.
- The contact next-step strip now acts as a reusable reassurance pattern for explaining how a routed enquiry is handled without inventing reply-time promises.
- The hero fact grid now acts as a reusable first-screen proof pattern when the page needs concise credibility cues above the fold without adding a heavier section.
- The hero buyer-fit cards now also act as a reusable first-screen handoff pattern, using compact route chips to move visitors from self-recognition into the closest product section.
