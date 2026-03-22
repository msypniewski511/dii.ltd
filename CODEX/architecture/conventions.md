# Conventions

## Current Project Conventions
- Keep the project static and framework-free
- Treat `/index.html` as the production source of truth
- Use semantic HTML where it already exists: `aside`, `nav`, `main`, `section`, `article`
- Keep JS lightweight and progressive
- Preserve anchor IDs used by sidebar navigation

## Editing Conventions For Future Work
- Update `/CODEX/` docs when changes affect:
  - page structure
  - reusable UI patterns
  - copy strategy
  - SEO direction
  - JS behavior
- When editing section content, keep section IDs stable unless there is a strong reason to change them.
- When adding assets, record them in `/CODEX/architecture/assets_map.md`.
- When adding or changing CTAs, update `/CODEX/content/copy_inventory.md` and `/CODEX/tasks/` if the change affects conversion flow.
- Treat `tmp.html` as a sandbox/artifact unless it is intentionally cleaned and promoted.
- Prefer asset paths that still resolve when the root `index.html` is opened directly from disk, unless the project intentionally requires root-relative routing.

## Recommended Future Conventions
- Once messaging stabilizes, move CSS and JS into `/assets/` files for easier maintenance and caching.
- Add focus-visible styles whenever new interactive elements are introduced.
- Prefer production-ready customer-facing copy over editor instructions inside the live HTML.
