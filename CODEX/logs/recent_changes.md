# Recent Changes

## 2026-03-22
- Added `/CODEX/README.md`
- Added `/CODEX/project/*`
- Added `/CODEX/architecture/*`
- Added `/CODEX/content/*`
- Added `/CODEX/design/*`
- Added `/CODEX/tasks/*`
- Added `/CODEX/testing/*`
- Added `/CODEX/logs/*`
- Added `/CODEX/decisions/*`
- Added `/CODEX/reference/*`
- Replaced placeholder content in `/CODEX_START_HERE.md`
- Updated `/index.html` to fix the mobile timeline layout at the `920px` breakpoint
- Updated `/index.html` copy across the hero, platform, timeline, knowledge, principles, and contact sections
- Updated hero carousel image paths in `/index.html` from root-relative to repo-relative URLs
- Updated hero carousel slide styling in `/index.html` to use background-image fallbacks and a stronger overlay/panel paint stack
- Updated `/index.html` hero panel sizing so the carousel slide/image height resolves correctly instead of collapsing to `0px`
- Updated `/index.html` hero proportions so `.hero-art`, `.hero-panel-main`, and `.hero-panel-badge` render taller and more prominent
- Updated `/index.html` hero glass-card layout so `.hero-panel-bottom` sits directly below `.hero-panel-main` with an internal gap that matches the hero frame gutter
- Updated `/index.html` CTA structure so the hero, products, and contact sections route visitors more clearly into products, the journey, or a guided enquiry
- Updated `/index.html` and `/assets/images/DIIAccounts.jpg` to add DII Accounts as a live finance/accountancy product across the ecosystem copy and product map
- Updated `/index.html` copy again to remove the remaining strategy-note and roadmap-style phrasing from products, workflow, knowledge, principles, and contact sections
- Updated `/index.html` background styling to add a subtle top-right infinity accent using layered blue, cyan, and mint tones
- Updated `/index.html` background styling again so the top-right accent now reads as a clearer infinity symbol with SVG-based glow trails
- Updated `/index.html` infinity styling once more to widen the left and right bowls and remove flower-like inner trails
- Updated `/index.html` infinity palette so the accent now uses blue, cyan, indigo, and mint tones with no pink
- Updated `/index.html` infinity styling again to use heavier blur and lower opacity so the accent feels softer and less dominant
- Updated `/index.html` infinity styling once more to use even more blur, lower saturation, and more transparency
- Updated `/index.html` infinity styling again to push the accent close to `0.3` overall presence and remove remaining crispness from the inner stroke layer

## Frontend Code Changes
- Mobile timeline rows now stack both sides in one content column while keeping the numbered marker rail visible.
- Hero carousel images load correctly when `index.html` is opened directly from disk.
- Hero carousel slides now have a non-`<picture>` visual fallback so the images can still render if the browser loses the nested image layer.
- Hero carousel slides now inherit from an explicit panel height, which fixes the zero-height image rendering bug visible in DevTools.
- The hero right column now has a taller visual frame and larger top summary panel to better balance the overall hero composition.
- The hero right column now uses a consistent internal gutter between the top summary card and lower carousel card.
- The homepage now has a stronger conversion hierarchy: choose a product, follow the journey, or start a guided enquiry.
- The homepage now treats finance as a live product layer rather than only future intent, with DII Accounts threaded through the sidebar, hero, products, and workflow sections.
- Live homepage sections no longer expose internal TODO or owner-facing instructions.
- The homepage copy now reads more consistently as a finished visitor-facing company site rather than a planning document.
- The page background now carries a soft infinity-shaped accent that reinforces the brand name without competing with the hero content.
- The infinity accent now reads more literally as an infinity symbol rather than two abstract loops.
- The infinity accent now uses broader, simpler bowls so it reads less like a flower and more like a horizontal infinity symbol.
- The infinity accent now sits deeper in the background with a softer, blurrier glow.
- The infinity accent is now noticeably more transparent and diffused.
- The infinity accent is now intentionally very faint and atmospheric rather than decorative-first.
