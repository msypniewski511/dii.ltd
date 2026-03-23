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

## P1 High
- No open P1 tasks at the moment.

## P2 Medium

### DII-006 Improve accessibility states and landmarks
- Area: Accessibility
- Why now: semantic structure is decent, but there is no skip link, no dedicated focus-visible styling, and active nav state is visual only.

### DII-007 Replace visible placeholder visuals with production-ready assets
- Area: Design / content
- Why now: the timeline and knowledge sections still rely on placeholder visuals instead of production-ready screenshots or diagrams.

### DII-004 Extract inline CSS and JS after content and layout stabilize
- Area: Frontend architecture
- Why now: maintainability is weak, but message and structure issues should be solved first to avoid churn.
