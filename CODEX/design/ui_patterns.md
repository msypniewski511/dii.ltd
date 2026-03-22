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

## Card Pattern
- Base: `.card`
- Reused in platform, products, knowledge, and some supporting content

## Metrics Pattern
- `.metric-row`
- `.metric`
- Useful for short explanatory proof points

## Timeline Pattern
- `.timeline-row`
- left/right split between `.timeline-card` and `.timeline-summary`
- center marker column
- Mobile adaptation now stacks both sides in one content column while keeping the marker in a left rail

## Contact Pattern
- `.contact-grid` for functional contact cards
- `.contact-panel` for brand/company summary and CTA group

## Placeholder Pattern
- `.placeholder-frame`, `.placeholder-window`, `.timeline-placeholder`
- Present in production right now, but should be phased out in favor of real assets
