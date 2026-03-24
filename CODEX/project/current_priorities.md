# Current Priorities

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

## P1 High

### DII-016 Deploy the current extracted-asset build before hosted QA resumes
- Area: Release / deployment
- Why now: `DII-015` is blocked because `https://dii.ltd/` is still serving an older inline build and returns `404` for `/assets/css/site.css`.

## P2 Medium

### DII-015 Record a hosted manual cross-browser pass outside local Chrome automation
- Area: QA / cross-browser compatibility
- Status: BLOCKED on 2026-03-24
- Why now: the hosted pass still matters, but it is currently blocked until the deployed site matches the current repo state.

## P3 Low
- No open P3 tasks at the moment.
