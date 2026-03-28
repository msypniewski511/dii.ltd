# UI Patterns

## Sidebar Navigation
- Fixed left rail on desktop
- Slide-in drawer on mobile via `.sidebar.open`
- Pattern depends on stable section IDs and anchor links

## Section Header Pattern
- `.section-head`
- `.eyebrow`
- `h2`
- supporting paragraph

## Button Pattern
- Base: `.btn`
- Variants:
  - `.btn-primary`
  - `.btn-secondary`
  - `.btn-ghost`

## Hero Proof Pattern
- `.hero-facts` inside the upper hero panel
- `.hero-fact` for compact factual proof tiles that support credibility without turning the hero into a full comparison section

## Hero Buyer-Fit Handoff Pattern
- `.hero-point-links` nested inside each buyer-fit card
- `.hero-point-link` for compact route chips that turn audience recognition into direct first-screen action
- Keeps the hero lighter than the full products router while still handing visitors to Startup Business Builder, IFV Builder, Rotaplan, Warewise, or DII Accounts

## Card Pattern
- Base: `.card`
- Reused in platform, products, knowledge, and some supporting content

## Product Fit Pattern
- `.product-fit` stacked inside each product card
- `.product-fit-item` pairs a short label with a single audience/problem/outcome statement
- Helps the product family differentiate without introducing a full comparison table or a new page

## Metrics Pattern
- `.metric-row`
- `.metric`
- Useful for short explanatory proof points

## Platform Handoff Pattern
- `.platform-handoff-head` for a lightweight "choose the next route" bridge inside the platform overview
- `.platform-handoff-row` for the four-card handoff grid
- `.platform-handoff-card` plus `.platform-handoff-link` for compact route choices that stay lighter than the full products router

## Timeline Pattern
- `.timeline-row`
- left/right split between `.timeline-card` and `.timeline-summary`
- center marker column
- Mobile adaptation now stacks both sides in one content column while keeping the marker in a left rail

## Journey Proof Pattern
- `.timeline-proof-grid` for a mid-page route-proof board
- `.timeline-proof-link` when the proof cards should jump directly to the matching product anchors
- Uses the existing `.timeline-preview-card` and `.timeline-preview-thumb` styles so the proof board stays visually aligned with the rest of the journey section

## Operations Proof Pattern
- `.operations-proof-band` for a two-card comparison strip focused on Rotaplan and Warewise
- `.operations-proof-card` for the linked proof summary that combines route-specific copy with a structured workflow board
- `.route-signal-board` and `.route-signal-*` for compact workflow cues when screenshots are unavailable but generic icons feel too weak

## Knowledge Discovery Pattern
- `.knowledge-path-head` for framing example search or discovery intent
- `.knowledge-path-grid` for concrete example queries or content-path previews
- Reuses `.knowledge-topic-card` so the preview reads like a credible content map instead of loose keyword chips

## Contact Pattern
- `.contact-grid` for functional contact cards
- `.contact-panel` for brand/company summary and the guided enquiry workspace
- `.contact-next-steps` for the three-card explanation of what happens after first contact

## Guided Enquiry Pattern
- `.guided-enquiry` nested inside the contact panel
- `.guided-enquiry-grid` collects short routing details before showing a result state
- `.guided-result-*` exposes the recommended inbox, subject, and copyable message without needing a backend form submit
- `.guided-note` and guided status copy frame the output as the starting brief for the next conversation

## Placeholder Pattern
- `.placeholder-frame`, `.placeholder-window`, `.timeline-placeholder`
- Present in production right now, but should be phased out in favor of real assets
