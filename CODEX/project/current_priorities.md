# Current Priorities

## Urgent Current Priority

### DII-ADDRESS-DEPLOY-VERIFY
- Status: TODO after local preparation on 2026-07-13
- Priority: P0 Urgent
- Outcome needed: review, commit, push, and verify that `https://dii.ltd/` publicly displays `264 North Circular Road, London, NW10 0JT, United Kingdom` and no longer displays the Paul Street address.
- Constraint: do not change DNS during this task.

## Recent Completion

### DII-001 Fix mobile timeline content loss
- Status: DONE on 2026-03-22
- Outcome: the `920px` breakpoint now reflows each timeline row into a stacked layout so both sides remain visible on mobile.
- Files: `/index.html`, `/CODEX/architecture/frontend_map.md`, `/CODEX/tasks/*`

### DII-002 Replace placeholder and editor-facing copy
- Status: DONE on 2026-03-22
- Outcome: live sections now read as customer-facing homepage copy, and visible TODO/instructional text was removed.
- Files: `/index.html`, `/CODEX/content/brand_voice.md`, `/CODEX/content/copy_inventory.md`, `/CODEX/tasks/*`

### DII-003 Improve CTA routing and lead capture clarity
- Status: DONE on 2026-03-22
- Outcome: the hero now separates product selection, journey context, and guided enquiry; the products section adds route links; and the contact panel gives unsure visitors a clearer first step.
- Files: `/index.html`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/copy_inventory.md`, `/CODEX/tasks/*`

### DII-010 Add DII Accounts to the live ecosystem
- Status: DONE on 2026-03-22
- Outcome: DII Accounts now appears in the sidebar ecosystem list, hero carousel, product routing, product family, and workflow copy, replacing several "future finance" references with a live finance layer.
- Files: `/index.html`, `/assets/images/DIIAccounts.jpg`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/tasks/*`

### DII-011 Polish remaining internal-sounding homepage copy
- Status: DONE on 2026-03-22
- Outcome: the products, workflow, knowledge, principles, and contact sections now use more direct visitor-facing language and no longer read like strategy notes or roadmap instructions.
- Files: `/index.html`, `/CODEX_START_HERE.md`, `/CODEX/content/*`, `/CODEX/logs/*`, `/CODEX/tasks/*`

### DII-012 Make the fixed sidebar scrollable on smaller screens
- Status: DONE on 2026-03-23
- Outcome: the fixed sidebar now stays within the viewport height and scrolls internally, so mobile and shorter-screen users can reach the full menu and sidebar content.
- Files: `/index.html`, `/CODEX_START_HERE.md`, `/CODEX/architecture/frontend_map.md`, `/CODEX/logs/*`, `/CODEX/tasks/*`

### DII-013 Capture reusable UI playbook and CSS starter
- Status: DONE on 2026-03-23
- Outcome: the visual system is now documented as a reusable Codex prompt plus a starter CSS file for future projects.
- Files: `/CODEX/design/ui_playbook.md`, `/CODEX/design/ui_foundation.css`, `/CODEX/design/design_system.md`, `/CODEX/README.md`, `/CODEX/reference/important_paths.md`, `/CODEX/logs/*`, `/CODEX/tasks/*`

### DII-005 Strengthen homepage SEO foundations
- Status: DONE on 2026-03-23
- Outcome: the homepage now has canonical markup, robots directives, Twitter card tags, JSON-LD schema, `/robots.txt`, `/sitemap.xml`, and a documented Google Search Console verification file in the repo root.
- Files: `/index.html`, `/robots.txt`, `/sitemap.xml`, `/google46d6e99a9bb78479.html`, `/CODEX/architecture/seo_map.md`, `/CODEX/content/seo_keywords.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`

### DII-006 Improve accessibility states and landmarks
- Status: DONE on 2026-03-23
- Outcome: the homepage now includes a keyboard skip link, stronger focus-visible treatment, `aria-current` navigation state, Escape-to-close mobile sidebar behavior, semantic footer markup, and cleaner assistive-state handling for icons and carousel slides.
- Files: `/index.html`, `/CODEX/architecture/frontend_map.md`, `/CODEX/design/design_system.md`, `/CODEX/design/component_inventory.md`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`

### DII-007 Replace visible placeholder visuals with production-ready assets
- Status: DONE on 2026-03-23
- Outcome: the timeline summary cards and knowledge section now use production-style route boards, product preview cards, and a structured knowledge panel instead of abstract placeholder blocks.
- Files: `/index.html`, `/assets/images/dhruviinfinity.jpg`, `/assets/images/ifv.jpg`, `/assets/images/DIIAccounts.jpg`, `/CODEX/architecture/frontend_map.md`, `/CODEX/architecture/assets_map.md`, `/CODEX/design/*`, `/CODEX/content/copy_inventory.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`

### DII-009 Audit product naming and outbound destination consistency
- Status: DONE on 2026-03-23
- Outcome: the homepage now consistently uses Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts; the Fast Checker hero slide now reads as a Startup Business Builder entry view; and the current outbound destinations were checked and confirmed to respond.
- Files: `/index.html`, `/CODEX_START_HERE.md`, `/CODEX/content/*`, `/CODEX/reference/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`

### DII-004 Extract inline CSS and JS after layout and messaging stabilize
- Status: DONE on 2026-03-24
- Outcome: the live stylesheet now loads from `/assets/css/site.css`, the live interaction code now loads from `/assets/js/site.js`, and the Warewise/NorthStar destination now uses `https://www.northstarwms.co/wms`.
- Files: `/index.html`, `/assets/css/site.css`, `/assets/js/site.js`, `/CODEX/architecture/*`, `/CODEX/project/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`

### DII-008 Decide whether to archive or clean `tmp.html`
- Status: DONE on 2026-03-24
- Outcome: `tmp.html` is now a clearly marked archived prototype with valid closing HTML and no appended prompt text, so it can remain in the repo without being mistaken for the live page.
- Files: `/tmp.html`, `/CODEX_START_HERE.md`, `/CODEX/architecture/site_map.md`, `/CODEX/project/project_overview.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`

### DII-014 Run a manual browser regression pass after recent structural changes
- Status: DONE on 2026-03-24
- Outcome: a local Chrome desktop/mobile/reduced-motion regression is now recorded, the extracted CSS/JS assets were confirmed to load, and two regressions found during QA were fixed: hero fallback image paths after CSS extraction and carousel autoplay restarting while hovered or focus-within after control clicks.
- Files: `/index.html`, `/assets/js/site.js`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX_START_HERE.md`

### DII-016 Deploy the current extracted-asset build before hosted QA resumes
- Status: DONE on 2026-03-24
- Outcome: the live GitHub Pages deployment is now back in sync with the repo, `/assets/css/site.css` and `/assets/js/site.js` return `200` on `https://dii.ltd/`, and hosted Chrome/Edge smoke checks confirm the extracted asset tags plus the NorthStar destination are present on the live page.
- Files: `/index.html`, `/assets/css/site.css`, `/assets/js/site.js`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX_START_HERE.md`

### DII-015 Record a hosted manual cross-browser pass outside local Chrome automation
- Status: DONE on 2026-03-24
- Outcome: the best-available hosted browser-driven matrix is now recorded for Chrome desktop, Edge desktop, Firefox desktop, Android-size mobile emulation, and iPhone-size mobile emulation against `https://dii.ltd/`, with no live regression reproduced after deployment sync.
- Files: `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX_START_HERE.md`

### DII-018 Clarify what is live now versus still growing across the homepage
- Status: DONE on 2026-03-24
- Outcome: the homepage now uses a reusable live-versus-growing availability pattern and more explicit knowledge-layer copy, so visitors can see which ecosystem routes are available today and which layer is still expanding next.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX_START_HERE.md`

### DII-019 Add stronger proof and trust cues near the product-selection flow
- Status: DONE on 2026-03-24
- Outcome: the homepage now surfaces factual trust signals near the route-selection area, including five live product routes, named contact inboxes, and the public London HQ listing.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX_START_HERE.md`

### DII-020 Sharpen product differentiation by audience, problem, and outcome
- Status: DONE on 2026-03-27
- Outcome: the products section now differentiates the five routes more clearly using tighter intro copy, clearer starting-context route pills, and reusable audience/problem/outcome fit rows inside each product card.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-021 Make the guided enquiry path easier than raw `mailto:` links
- Status: DONE on 2026-03-27
- Outcome: the contact panel now includes an on-page guided enquiry tool that recommends the right inbox, prepares a structured message, and gives visitors both copy and email-draft actions without depending entirely on a configured mail client.
- Files: `/index.html`, `/assets/css/site.css`, `/assets/js/site.js`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-022 Strengthen hero trust and differentiation above the fold
- Status: DONE on 2026-03-27
- Outcome: the hero now introduces five live routes more explicitly, separates the main audience types faster, and surfaces factual live-now cues before visitors scroll into the proof band below.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-023 Clarify what happens after a guided enquiry or contact route
- Status: DONE on 2026-03-27
- Outcome: the contact section now explains what happens after direct or guided contact using clearer first-step copy, a three-step reassurance strip, and guided-enquiry messaging that frames the first email as the starting brief.
- Files: `/index.html`, `/assets/css/site.css`, `/assets/js/site.js`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-024 Add stronger product-specific proof in the journey section
- Status: DONE on 2026-03-27
- Outcome: the journey section now includes a five-route live proof board inside Step 02, using real screenshots where available and direct jump targets to the matching product cards.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-025 Make the knowledge section feel more concrete and searchable
- Status: DONE on 2026-03-27
- Outcome: the knowledge section now uses more explicit search-intent copy, concrete topic titles, example discovery-path cards, and a more specific CTA while still clearly framing the layer as growing next.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-026 Strengthen operations-route proof where screenshot coverage is still weakest
- Status: DONE on 2026-03-27
- Outcome: the products and journey sections now give Rotaplan and Warewise route-specific proof using a reusable operations-proof strip plus structured workflow signal boards instead of relying on generic icon-only treatments.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-027 Sharpen outcome specificity in the platform and principles sections
- Status: DONE on 2026-03-27
- Outcome: the platform and principles sections now describe clearer end-state outcomes for founders, operators, and finance teams instead of leaning mostly on abstract ecosystem language.
- Files: `/index.html`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/design_system.md`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-028 Make the platform overview more actionable with route-level handoff
- Status: DONE on 2026-03-28
- Outcome: the platform section now includes a dedicated route-handoff layer with direct jumps to founder, operations, finance, knowledge, and guided-enquiry destinations instead of ending on explanatory copy alone.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-029 Make the hero buyer-fit cards more actionable with direct route handoff
- Status: DONE on 2026-03-28
- Outcome: the hero buyer-fit cards now move directly into Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts via compact first-screen jump links instead of acting as audience description only.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-030 Add stronger factual proof near the contact decision
- Status: DONE on 2026-04-17
- Outcome: the contact section now includes a light factual proof strip beside the direct inbox cards, reinforcing five live routes, named inbox paths, the London HQ listing, and the guided enquiry's structured starting brief without inventing testimonials or promises.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/browser_checks.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-031 Define the first knowledge content architecture on the homepage
- Status: DONE on 2026-04-17
- Outcome: the knowledge section now includes a first knowledge paths roadmap that names five planned content lanes, maps them to search intent, and points them back to the closest live product routes while staying clear that the article library is not live yet.
- Files: `/index.html`, `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/architecture/seo_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/browser_checks.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-032 Add route-level structured data for the five live product paths
- Status: DONE on 2026-04-17
- Outcome: the homepage JSON-LD now uses conservative `WebPage.hasPart` entries for the five visible product route anchors, improving crawler clarity without inventing product pages, offers, ratings, reviews, pricing, or unsupported claims.
- Files: `/index.html`, `/CODEX/architecture/seo_map.md`, `/CODEX/content/seo_keywords.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX_START_HERE.md`

### DII-033 Improve guided enquiry accessibility and completion confidence
- Status: DONE on 2026-04-17
- Outcome: the guided enquiry now explains that it prepares an email locally, attaches helper text to key controls, labels the prepared result as a focusable region, and moves keyboard focus to the result after submit while preserving inbox routing and draft generation.
- Files: `/index.html`, `/assets/css/site.css`, `/assets/js/site.js`, `/CODEX/architecture/frontend_map.md`, `/CODEX/content/*`, `/CODEX/design/*`, `/CODEX/testing/browser_checks.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-034 Improve social preview asset and metadata alignment
- Status: DONE on 2026-04-17
- Outcome: the homepage now uses an intentional 1200x630 social preview PNG for Open Graph/Twitter sharing, with matching title, description, image dimensions, type, and alt text aligned to the five live DII routes.
- Files: `/index.html`, `/assets/images/dii-social-preview.png`, `/assets/images/dii-social-preview.svg`, `/CODEX/architecture/seo_map.md`, `/CODEX/architecture/assets_map.md`, `/CODEX/content/*`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-035 Audit and fix page-level horizontal overflow
- Status: DONE on 2026-04-18
- Outcome: the page-level horizontal overflow observed at `1280x900` is fixed. The root causes were the desktop `.main` width not subtracting the fixed sidebar, the hero staying two-column too long, and one-column `.hero-art` deriving extra width from its aspect ratio plus minimum height.
- Files: `/assets/css/site.css`, `/CODEX/architecture/frontend_map.md`, `/CODEX/design/*`, `/CODEX/testing/browser_checks.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX/decisions/decision_log.md`, `/CODEX_START_HERE.md`

### DII-036 Add intrinsic dimensions to homepage images
- Status: DONE on 2026-04-18
- Outcome: all 11 live homepage `<img>` elements now include accurate `width` and `height` attributes from the real source files, covering the hero carousel, timeline proof/snapshot visuals, and knowledge preview image without changing responsive CSS.
- Files: `/index.html`, `/CODEX/architecture/assets_map.md`, `/CODEX/architecture/frontend_map.md`, `/CODEX/testing/performance_notes.md`, `/CODEX/testing/browser_checks.md`, `/CODEX/tasks/*`, `/CODEX/logs/*`, `/CODEX_START_HERE.md`

## P1 High
- No open P1 tasks at the moment.

## P2 Medium

### DII-037 Replace oversized favicon source with a lightweight icon asset
- Area: Performance / assets / metadata
- Why now: image layout-stability is improved, but the favicon still points at the legacy 1536x1024 `ILOVE.png` file. A small dedicated icon would reduce unnecessary asset weight while keeping the social preview card separate and intentional.

### DII-017 Record the remaining physical-phone hosted QA after WebKit coverage
- Area: QA / external browser coverage
- Why now: the deployed site now also looks clean in true WebKit from this machine, but the remaining real-device phone coverage still requires hardware access that this environment does not have.

## P3 Low
- No open P3 tasks at the moment.
