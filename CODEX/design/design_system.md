# Design System

## Current Visual Direction
- Light, blue-led interface
- glassmorphism-style panels
- soft gradients and grid textures
- a soft top-right infinity accent built from an SVG infinity mark with glow trails and blurred color blooms
- rounded cards with subtle borders and layered shadows

## Core Tokens From `/index.html`

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
- Fixed page-level decorative accent using an SVG infinity stroke, layered glow trails, and blurred color glows
- Rounded cards with top highlight rule
- Split layouts for hero, knowledge, and contact
- Alternating timeline cards with center marker
- Compact route pills for product selection and guided conversion
- Full-width featured product card for the finance layer

## Current Hero Direction
- The right hero visual is intentionally tall and framed like a layered dashboard rather than a short media card.
- The upper glass summary card is oversized relative to the carousel so the ecosystem explanation reads as part of the hero, not as a small caption block.
- The hero badge and summary typography were scaled up slightly to hold the larger panel proportion without feeling sparse.
- The two hero glass cards now share the same internal gutter rhythm as the outer frame, so the right column reads as one composed module rather than two disconnected blocks.

## Current Design Gaps
- The live page still exposes placeholder UI and instructional text in the timeline and knowledge sections.
- There is no separate asset/style system outside `/index.html`.
- Focus states are not intentionally designed.

## Rule For Future Design Changes
- Keep the current visual language unless the user requests a redesign.
- Favor reusable class patterns over section-specific one-offs.
- Treat the infinity background accent as supporting atmosphere only; it should stay subtle and never compete with text or product visuals.
- Keep the infinity accent heavily blurred and low-contrast enough that it reads as atmosphere first and symbol second.
- Favor transparency over punch in the infinity accent; if it feels too visible, reduce opacity and saturation before changing the shape.
- The current target is a very soft treatment around `0.3` overall visual presence rather than a prominent decorative mark.
