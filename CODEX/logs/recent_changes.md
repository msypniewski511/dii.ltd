# Recent Changes

## 2026-07-13
- Recovered the real public website repo as `/home/maciej-sypniewski/Projects/dii.ltd`; the Warwise Rails repo and `startup-builder` are not the selected website source of truth for this pass.
- Updated all public/current address output in the selected static site to `264 North Circular Road, London, NW10 0JT, United Kingdom`.
- Updated homepage Organization JSON-LD so structured data matches the visible address.
- Updated the reachable archived prototype contact line so it no longer publicly displays the obsolete Paul Street address.
- Added `.nojekyll` for plain-static GitHub Pages publishing and updated the sitemap last modified date for the address correction.
- Added missing CODEX continuity maps for hosting, content, product state, handoff, feature inventory, and documentation index.
- No DNS, GitHub settings, deployment, commit, push, Rails app, secrets, or product redesign changes were made.

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
- Updated CODEX testing notes to record the hosted `DII-015` browser-driven matrix for Chrome, Edge, Firefox, and mobile emulations against `https://dii.ltd/`
- Updated CODEX task and log docs to mark `DII-015` complete as the best-available hosted matrix from this environment and split the remaining true Safari/physical-phone coverage into blocked follow-up `DII-017`
- Updated CODEX testing notes again to record hosted WebKit desktop and WebKit iPhone-size passes after locally unblocking Playwright WPE
- Updated CODEX task and log docs so `DII-017` now tracks only the remaining physical phone-browser blocker
- Updated `/index.html` platform, timeline, and knowledge copy to distinguish live product routes from the still-growing knowledge center
- Updated `/assets/css/site.css` to add a reusable availability band plus shared live-now and growing-next status chips
- Updated CODEX copy, design, architecture, task, and log docs for the new `DII-018` credibility/availability pass
- Updated `/index.html` products section to add a factual proof band above the product router
- Updated `/assets/css/site.css` to add reusable proof-band, proof-card, and proof-icon patterns
- Updated CODEX copy, design, architecture, task, and log docs for the completed `DII-019` trust-cue pass

## QA Notes
- A local Chrome desktop/mobile/reduced-motion regression is now recorded after the CSS/JS extraction
- The five public product destinations were spot-checked and returned `200`; NorthStar redirects from `/wms` to `/users/sign_in`
- Firefox desktop automation initially timed out locally during `DII-014`, but the hosted `DII-015` pass now records Firefox desktop as PASS after Playwright Firefox was installed
- Hosted smoke work first exposed deployment drift, then `DII-016` fixed it by pushing the current build to `origin/main`
- `https://dii.ltd/` now serves the extracted asset build and returns `200` for both `/assets/css/site.css` and `/assets/js/site.js`
- The hosted browser-driven pass now records PASS results for Chrome desktop, Edge desktop, Firefox desktop, Android-size mobile emulation, and iPhone-size mobile emulation
- WebKit desktop and WebKit iPhone-size hosted passes now also record PASS after staging missing runtime libs into Playwright's WPE bundle
- Only the physical phone-browser pass remains blocked because no real device is attached to this environment
- The homepage now makes live-versus-growing availability clearer, especially around the knowledge layer
- The product-selection flow now surfaces factual trust cues before visitors choose a route

## 2026-03-27
- Updated `/index.html` product-intro copy so the five routes are framed by starting point instead of a generic product list
- Updated `/index.html` route-pill labels and product-card copy to separate founder planning, IFV preparation, shift planning, warehouse control, and finance operations more clearly
- Updated `/index.html` timeline routing copy so the product split stays consistent outside the main products section
- Updated `/assets/css/site.css` to add reusable `.product-fit*` rows for audience/problem/outcome framing inside product cards
- Updated CODEX architecture, content, design, task, decision, and log docs for the completed `DII-020` differentiation pass
- Added follow-up task `DII-021` to improve the current mailto-only guided enquiry path
- Updated `/index.html` so the hero guidance CTA now jumps to an in-page guided enquiry workspace and the contact panel now includes a structured enquiry form plus result state
- Updated `/assets/css/site.css` to add reusable guided enquiry layout, field, result-card, and status patterns
- Updated `/assets/js/site.js` to recommend the right inbox, prepare a structured message, support clipboard copy, and generate a draft email link from the guided enquiry inputs
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-021` lead-capture pass
- Added follow-up task `DII-022` to strengthen hero trust and differentiation above the fold
- Updated `/index.html` hero copy so the first screen now signals five live routes earlier and separates the main audience groups more clearly
- Updated `/index.html` top hero panel to replace the abstract summary treatment with factual above-the-fold proof cues
- Updated `/assets/css/site.css` to add reusable hero fact styling plus route-label styling inside the hero audience cards
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-022` hero pass
- Added follow-up task `DII-023` to clarify what happens after a guided enquiry or contact route
- Updated `/index.html` contact intro, direct-inbox copy, guided-enquiry copy, and added a reusable three-card next-steps reassurance strip under the contact shell
- Updated `/assets/css/site.css` to style `.contact-next-steps`, `.contact-step`, and `.contact-step-number`
- Updated `/assets/js/site.js` guided-enquiry status copy so the prepared email is framed as the starting brief for the next conversation
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-023` contact-reassurance pass
- Added follow-up task `DII-024` to strengthen product-specific proof in the journey section
- Updated `/index.html` Step 02 of `#how-it-works` to add a five-route live proof board with named product cards and direct jumps to the matching product anchors
- Updated `/assets/css/site.css` to add `.timeline-proof-grid` plus `.timeline-proof-link` hover/focus behavior for the new journey proof board
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-024` journey-proof pass
- Added follow-up task `DII-025` to make the knowledge section feel more concrete and searchable
- Updated `/index.html` knowledge copy so the growing-next content layer now previews search-style questions, more concrete topic titles, and a more specific CTA
- Updated `/index.html` knowledge panel to add four example discovery-path cards for founder, visa, operations, and finance queries
- Updated `/assets/css/site.css` to add `.knowledge-path-head`, `.knowledge-path-grid`, and `.knowledge-path-note` patterns with responsive collapse behavior
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-025` knowledge-discovery pass
- Added follow-up task `DII-026` to strengthen operations-route proof where screenshot coverage is still weakest
- Updated `/index.html` to add a two-card operations proof strip under the product router so Rotaplan and Warewise now show route-specific workflow evidence before the full product cards
- Updated `/index.html` journey proof and Step 03 snapshot so Rotaplan and Warewise use structured workflow signal boards instead of generic icon-only treatment and appear as separate operations routes again
- Updated `/assets/css/site.css` to add reusable `.operations-proof-*` and `.route-signal-*` patterns plus focus states and responsive layout for the new operations proof treatment
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-026` operations-proof pass
- Added follow-up task `DII-027` to sharpen outcome specificity in the platform and principles sections
- Updated `/index.html` platform overview copy so the section now speaks more directly about clearer founder decisions, lower operational drag, stronger finance control, and earlier route recognition
- Updated `/index.html` principles intro and pillar copy so the parent-brand message now describes clearer outcomes rather than staying mostly values-led
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-027` parent-brand outcome pass
- Added follow-up task `DII-028` to make the platform overview more actionable with route-level handoff

## 2026-03-28
- Updated `/index.html` platform overview to add a route-handoff head and four compact handoff cards that jump directly to founder, operations, finance, knowledge, and guided-enquiry destinations
- Updated `/assets/css/site.css` to add reusable `.platform-handoff-*` styles and focus-visible support for the new platform route chips
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-028` platform-handoff pass
- Added follow-up task `DII-029` to make the hero buyer-fit cards more actionable with direct route handoff
- Updated `/index.html` hero guidance copy and buyer-fit cards so the first screen now includes compact direct route chips for Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts
- Updated `/assets/css/site.css` to add reusable `.hero-point-links` and `.hero-point-link` styles plus focus-visible support for the new hero handoff chips
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-029` hero-handoff pass
- Added follow-up task `DII-030` to add stronger factual proof near the contact decision

## 2026-04-17
- Updated `/index.html` contact section so the direct inbox cards now sit in a `.contact-route-column` with a lightweight factual proof strip below them
- Added four supported contact proof facts: five live routes, named inbox paths, London HQ listing, and the guided enquiry's structured first brief
- Updated `/assets/css/site.css` to add `.contact-route-column`, `.contact-proof-strip`, `.contact-proof-head`, and `.contact-proof-list` styles with mobile collapse behavior
- Ran a targeted local Chromium contact proof pass against `#contact` on desktop and mobile-size viewports, including guided enquiry routing, mailto link presence, focus visibility, heading sanity, and overflow checks
- Updated CODEX architecture, content, design, testing, task, decision, and log docs for the completed `DII-030` contact-proof pass
- Updated `/index.html` knowledge section with a homepage-first first knowledge paths roadmap covering founder planning, IFV preparation, operations workflows, warehouse control, and finance operations
- Mapped each planned content lane to search intent plus the closest live route: Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts
- Updated `/assets/css/site.css` with reusable `.knowledge-roadmap`, `.knowledge-route-grid`, `.knowledge-route-card`, and `.knowledge-route-detail` styles plus responsive collapse behavior
- Ran a targeted local Chromium knowledge roadmap pass against `#knowledge` on desktop and mobile-size viewports, including card count, route links, growing-next messaging, heading hierarchy, overflow, and console checks
- Updated CODEX architecture, SEO, content, design, testing, task, decision, and log docs for the completed `DII-031` knowledge-roadmap pass
- Added follow-up task `DII-032` to align route-level JSON-LD with the five live product paths
- Updated `/index.html` JSON-LD so the homepage `WebPage` has five conservative `WebPageElement` route parts for Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts
- Kept the route-level structured data limited to existing homepage anchors and factual visible route descriptions, with no offers, pricing, ratings, reviews, or fake product pages
- Updated `/index.html` guided enquiry copy and semantics so visitors are told the tool prepares an email locally and does not send to a server
- Added helper text for closest route, need, problem summary, and generated message fields, wired through `aria-describedby`
- Updated `/assets/js/site.js` so submitting the guided enquiry moves focus to the prepared result region after rendering the inbox, subject, and message
- Updated `/assets/css/site.css` with `.guided-local-note`, `.guided-helper`, `.guided-result-head`, and result-region focus styling
- Ran a targeted local Chromium guided enquiry accessibility pass against `#guidedEnquiry` on desktop and mobile-size viewports, including IFV sales routing, legal routing, result focus, keyboard order, overflow, and console checks
- Updated CODEX architecture, SEO, content, design, testing, task, decision, and log docs for the completed `DII-032` and `DII-033` passes
- Added follow-up task `DII-034` to improve the social preview asset and metadata alignment
- Added `/assets/images/dii-social-preview.svg` as the editable source for a new DII homepage social preview card
- Generated `/assets/images/dii-social-preview.png` as a 1200x630, 8-bit PNG social card at about 49 KB
- Updated Open Graph and Twitter metadata in `/index.html` so shared links use the new social card, matching title/description copy, image dimensions, image type, and route-aware alt text
- Updated `WebPage.primaryImageOfPage` in JSON-LD to point to the new social preview image while leaving `ILOVE.png` as the logo/favicon asset
- Ran local metadata, JSON-LD, image existence, image dimension, and browser page-load checks for the DII-034 social preview pass
- Added follow-up task `DII-035` to audit and fix page-level horizontal overflow observed during the DII-034 browser check

## 2026-04-18
- Reproduced the DII-034 horizontal overflow at `1280x900` and tested additional desktop, tablet, and mobile-size viewports
- Identified the first root cause as `.main` using `width: 100%` while also being offset by the fixed `290px` sidebar
- Identified the second root cause as hero sizing in the narrow desktop/tablet range: the two-column hero stayed active too long, and one-column `.hero-art` could derive extra width from its aspect ratio plus minimum height
- Updated `/assets/css/site.css` so desktop `.main` uses `width: calc(100% - var(--sidebar))`
- Moved the existing one-column hero breakpoint from `1260px` to `1340px`
- Reset one-column `.hero-art` to height-led sizing with `aspect-ratio: auto`
- Restored `.main` to `width: 100%` below the mobile-sidebar breakpoint
- Verified no page-level horizontal overflow at `1280x900`, `1320x900`, `1366x900`, `1440x1000`, `1680x1050`, `1024x900`, and `390x900`, including mobile menu open
- Added follow-up task `DII-036` to add intrinsic dimensions to live homepage images
- Updated all 11 live homepage `<img>` elements in `/index.html` with accurate intrinsic `width` and `height` attributes from the real source files
- Covered the hero carousel, journey/timeline proof visuals, product snapshot visuals, and knowledge preview image without changing CSS sizing, image assets, or visual design
- Verified the image-dimension pass in Chromium desktop and mobile-size viewports, including carousel advance, scrolled timeline/knowledge image loading, no console errors, and no horizontal overflow regression at `1280x900`
- Added follow-up task `DII-037` to replace the oversized favicon source with a lightweight icon asset
