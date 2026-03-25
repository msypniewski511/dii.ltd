# Design System

## Current Visual Direction
- Light, blue-led interface
- glassmorphism-style panels
- soft gradients and grid textures
- a soft top-right infinity accent built from an SVG infinity mark with glow trails and blurred color blooms
- rounded cards with subtle borders and layered shadows

## Core Tokens From `/assets/css/site.css`

### Colors
- Background: `--bg`, `--bg-strong`
- Surfaces: `--surface`, `--surface-strong`
- Text: `--ink`, `--ink-strong`, `--muted`
- Accent palette: `--blue-1`, `--blue-2`, `--blue-3`, `--blue-4`, `--cyan`, `--indigo`, `--mint`
- Status colors: `--ok`, `--warn`

### Shadows
- `--shadow-sm`
- `--shadow-md`
- `--shadow-lg`

### Radii
- `--radius-sm`
- `--radius-md`
- `--radius-lg`

### Layout
- Sidebar width: `--sidebar: 290px`
- Container width: `--container: 1380px`

## Reusable Styling Patterns
- Section eyebrow pill
- Gradient primary button
- Frosted secondary surfaces
- Reusable availability band with live-now and growing-next status chips
- Reusable proof band with icon-led factual trust cards
- Shared focus-visible ring for buttons, route pills, sidebar links, and contact links
- Fixed skip link that stays hidden until keyboard focus
- Fixed page-level decorative accent using an SVG infinity stroke, layered glow trails, and blurred color glows
- Rounded cards with top highlight rule
- Split layouts for hero, knowledge, and contact
- Alternating timeline cards with center marker
- Structured timeline summary boards for routes, product previews, and ecosystem layers
- Knowledge panel with hero media, topic cards, and rounded query chips
- Compact route pills for product selection and guided conversion
- Full-width featured product card for the finance layer

## Reuse Pack
- Reusable CSS starter: `/CODEX/design/ui_foundation.css`
- Reusable Codex prompt and UI instructions: `/CODEX/design/ui_playbook.md`
- Exact production reference for section-specific styles: `/assets/css/site.css` plus `/index.html`

## Current Hero Direction
- The right hero visual is intentionally tall and framed like a layered dashboard rather than a short media card.
- The upper glass summary card is oversized relative to the carousel so the ecosystem explanation reads as part of the hero, not as a small caption block.
- The hero badge and summary typography were scaled up slightly to hold the larger panel proportion without feeling sparse.
- The two hero glass cards now share the same internal gutter rhythm as the outer frame, so the right column reads as one composed module rather than two disconnected blocks.

## Current Design Gaps
- The live CSS is now extracted, but it still lives as one large page-level stylesheet rather than a more modular component system.
- Keyboard states are improved, but they still need a manual browser pass across desktop and mobile assistive flows.
- The new visual boards still rely on a limited screenshot set, so operations-specific visuals are represented more by structured cards than by dedicated product imagery.
- The homepage now distinguishes live routes from the growing knowledge layer more clearly, but the next trust gap is proof rather than availability labeling.
- The homepage now has better factual trust cues, so the next conversion gap is clearer product differentiation rather than basic proof.

## Rule For Future Design Changes
- Keep the current visual language unless the user requests a redesign.
- Favor reusable class patterns over section-specific one-offs.
- Treat the infinity background accent as supporting atmosphere only; it should stay subtle and never compete with text or product visuals.
- Keep the infinity accent heavily blurred and low-contrast enough that it reads as atmosphere first and symbol second.
- Favor transparency over punch in the infinity accent; if it feels too visible, reduce opacity and saturation before changing the shape.
- The current target is a very soft treatment around `0.3` overall visual presence rather than a prominent decorative mark.
