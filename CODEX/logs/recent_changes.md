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

## 2026-03-23
- Updated `/index.html` sidebar styling to keep the fixed menu capped to the viewport height and scrollable internally
- The fixed sidebar now uses viewport-bound height and `overflow-y: auto`, so the full menu and ecosystem links remain reachable on smaller screens and shorter viewports.
- Added `/CODEX/design/ui_playbook.md` with reusable Codex UI instructions extracted from the live site
- Added `/CODEX/design/ui_foundation.css` with the reusable CSS starter system extracted from `/index.html`
- Updated `/index.html` SEO metadata to add canonical, robots, Twitter card tags, and JSON-LD schema
- Added `/robots.txt`
- Added `/sitemap.xml`
- Logged the existing `/google46d6e99a9bb78479.html` Google Search Console verification file in the CODEX docs
- Updated `/index.html` accessibility behavior to add a skip link, shared focus-visible styling, nav `aria-current` state, Escape-to-close mobile menu behavior, and semantic footer markup
- Updated accessibility-related CODEX docs and QA notes to reflect the new baseline
- Updated `/index.html` timeline summaries to use structured route boards, product preview cards, and ecosystem layer cards instead of placeholder pills
- Updated `/index.html` knowledge section to use a real media-and-topic panel instead of a browser-wireframe placeholder
- Updated related CODEX architecture, design, copy, asset, task, and QA docs for the `DII-007` visual replacement pass
- Updated `/index.html` copy and metadata so the public product map now uses Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts consistently across metadata, sidebar links, hero slides, product cards, and workflow copy
- Updated the Fast Checker hero slide in `/index.html` so it now reads as a Startup Business Builder entry view rather than a separate live product
- Updated related CODEX task, content, and reference docs for the `DII-009` naming and destination consistency pass

## 2026-03-24
- Added `/assets/css/site.css`
- Added `/assets/js/site.js`
- Updated `/index.html` to load the extracted stylesheet and script instead of inline homepage blocks
- Updated `/index.html` warehouse product links to `https://www.northstarwms.co/wms`
- Updated CODEX architecture, project, task, log, reference, and QA docs for the `DII-004` extraction pass
- Updated `/tmp.html` to remove the appended prompt text after the closing HTML and add a visible archived-prototype warning
- Updated CODEX task and project docs for the `DII-008` prototype cleanup pass
- Updated `/index.html` hero slide fallback image custom-property URLs from `assets/images/...` to `../images/...` so the extracted stylesheet resolves the fallback images correctly
- Updated `/assets/js/site.js` so carousel autoplay does not restart while the carousel is still hovered or focus-within after a dot or arrow click
- Updated CODEX testing, task, log, and architecture docs for the `DII-014` browser regression pass and its follow-up task `DII-015`

## QA Notes
- A local Chrome desktop/mobile/reduced-motion regression is now recorded after the CSS/JS extraction
- The five public product destinations were spot-checked and returned `200`; NorthStar redirects from `/wms` to `/users/sign_in`
- Firefox desktop automation timed out locally, so hosted human QA on Firefox/Safari/Edge still remains open
- Hosted smoke work first exposed deployment drift, then `DII-016` fixed it by pushing the current build to `origin/main`
- `https://dii.ltd/` now serves the extracted asset build and returns `200` for both `/assets/css/site.css` and `/assets/js/site.js`
