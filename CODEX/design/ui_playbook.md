# UI Playbook

## Purpose
Reusable UI instructions and a Codex-ready design prompt extracted from the live `dii.ltd` frontend.

## Source Of Truth
- Exact live implementation: `/assets/css/site.css` plus `/index.html`
- Reusable starter CSS: `/CODEX/design/ui_foundation.css`

## How To Use This In Future Projects
1. Start from `/CODEX/design/ui_foundation.css`.
2. Keep the token names and component classes unless the project needs a different visual system.
3. Use the Codex prompt below when you want the same style language in a new repo.
4. Pull any page-specific selectors from `/assets/css/site.css` only when the starter file is not enough.

## Codex UI Prompt
Use this prompt for future Codex sessions:

```text
Build the UI using the DII style system.

Visual direction:
- light, blue-led interface
- frosted white surfaces with soft glassmorphism
- layered radial gradients and faint grid texture in the background
- rounded cards with subtle borders and airy shadows
- clean business typography with dark navy headings and muted slate body text
- restrained motion only: small hover lifts and soft opacity/transform transitions

Design rules:
- use CSS custom properties for colors, shadows, radii, and layout widths
- prefer reusable class patterns over page-specific one-offs
- keep backgrounds atmospheric, not noisy
- keep accent colors in blue, cyan, indigo, and mint
- if using the infinity accent, keep it very blurred, low-saturation, and low-contrast
- make surfaces feel layered through blur, border highlights, and soft shadows rather than heavy outlines
- keep spacing generous and section rhythm calm
- use strong heading hierarchy and compact eyebrow pills above major sections

Default components:
- shell container
- section spacing
- eyebrow pill
- primary / secondary / ghost buttons
- glass card
- standard card
- metric card
- route pill
- fixed sidebar / mobile drawer
- contact card / summary panel

Responsive rules:
- desktop-first
- keep major breakpoints around 1260px, 1080px, 920px, and 760px
- fixed sidebars or drawers must remain scrollable within the viewport
- card grids should collapse cleanly from 4 -> 2 -> 1 columns
- preserve comfortable padding on small screens

Accessibility rules:
- maintain readable contrast
- do not rely on blur alone for separation
- keep hit targets generous
- add clear focus-visible states if the project does not already have them
- avoid decorative effects that compete with copy or controls
```

## Design DNA

### Color Direction
- Backgrounds are pale blue-white, never pure white.
- Headings use deep navy.
- Body text sits in muted slate.
- Bright accents come from blue and cyan first, with indigo and mint as support.

### Surface Direction
- Main surfaces use semi-transparent white backgrounds.
- Borders are subtle and often brighter than the surface shadow.
- Shadows are soft, wide, and blue-tinted rather than grey-black.

### Typography Direction
- Large headings are tight, dark, and slightly condensed via negative letter spacing.
- Supporting paragraphs use long line height and softer color.
- Eyebrows and status pills use uppercase microcopy with extra tracking.

### Motion Direction
- Hover motion is small.
- Use blur and depth before animation.
- Avoid flashy or spring-heavy motion for this visual language.

## Component Rules

### Background
- Use a light gradient base.
- Add one or two radial gradient blooms.
- Add a faint technical grid if the page benefits from structure.
- Decorative marks such as the infinity accent should live behind content and feel atmospheric.

### Buttons
- `btn-primary`: bright gradient fill, white text
- `btn-secondary`: frosted white surface, dark text
- `btn-ghost`: pale blue tint, blue text

### Cards
- Default cards use a white-to-blue vertical gradient.
- Add a top highlight rule with a thin gradient line.
- Hover lifts should stay subtle.

### Navigation
- Desktop uses a fixed left rail.
- Mobile uses the same rail as a slide-in drawer.
- When fixed, navigation must scroll internally if content exceeds viewport height.

### Hero
- Pair strong text on the left with a composed visual module on the right.
- The right module should feel like a dashboard object, not a flat image block.
- Use stacked glass panels and keep the top summary card slightly oversized.

## What To Avoid
- dark mode by default
- purple-heavy palettes
- thick borders
- harsh shadows
- cramped layouts
- random neon effects
- decorative elements that overpower copy
- too many one-off class names for similar components

## When To Pull More From The Live CSS
Use `/assets/css/site.css` if you need:
- the full hero carousel styling
- the timeline layout
- the placeholder window pattern
- the exact infinity accent SVG treatment
- the full mobile sidebar/drawer behavior

## Notes
- `/CODEX/design/ui_foundation.css` is the reusable starter, not a one-to-one dump of every selector in `/index.html`.
- `/assets/css/site.css` is the exact production reference if you want to lift section-specific styles, while `/index.html` remains the structure/content reference.
