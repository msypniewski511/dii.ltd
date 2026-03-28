# CODEX START HERE

## Project
Dhruvi Infinity Inspiration Ltd. (`dii.ltd`)

## Purpose
Single-page parent-company homepage for the DII ecosystem. The site currently explains how DII connects founder tools, visa-path support, operations software, finance/accountancy software, and a future knowledge layer.

## Codex Workspace
Persistent collaboration docs live in `/CODEX/`.

## Read This Next
1. `/CODEX/README.md`
2. `/CODEX/tasks/next_task.md`
3. `/CODEX/tasks/in_progress.md`
4. `/CODEX/project/current_priorities.md`
5. `/CODEX/architecture/frontend_map.md`
6. Relevant `/CODEX/content/` or `/CODEX/design/` files before changing copy or UI

## Current State
- Live source of truth is `/index.html`.
- The frontend now uses `/index.html` plus extracted live assets at `/assets/css/site.css` and `/assets/js/site.js`.
- Root SEO/crawl files now include `/robots.txt`, `/sitemap.xml`, and `/google46d6e99a9bb78479.html`.
- Primary experience is a scrollable one-page layout with a fixed sidebar, hero carousel, product cards, timeline summary boards, a structured knowledge panel, principles section, and contact block with a guided enquiry workspace.
- A local browser-driven regression pass is now recorded after the CSS/JS extraction, including Chrome desktop, short mobile, Android-size mobile, and reduced-motion coverage.
- As of 2026-03-24, `https://dii.ltd/` now serves the current extracted-asset repo state; `/assets/css/site.css` and `/assets/js/site.js` return `200` on the hosted domain.
- A hosted browser-driven pass is now also recorded for Chrome desktop, Edge desktop, Firefox desktop, Android-size mobile emulation, and iPhone-size mobile emulation against `https://dii.ltd/`, with no live regression reproduced.
- A hosted WebKit pass is now also recorded for desktop and iPhone-size mobile emulation against `https://dii.ltd/`, with no WebKit-specific regression reproduced.
- The hero now carries above-the-fold proof and buyer-fit cues so visitors can see five live routes, named contact structure, and the main audience split before they reach the products section.
- The hero buyer-fit cards now also act as direct first-screen route handoffs, using compact jump links to Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts.
- The homepage now uses a reusable live-versus-growing availability pattern so visitors can see which ecosystem routes are live today and which layer is still expanding next.
- The products section now includes a reusable factual proof band so visitors see five live routes, named inboxes, and the London HQ listing before they choose a product.
- The products section now also uses a reusable audience-problem-outcome fit pattern so visitors can separate founder planning, IFV preparation, shift planning, warehouse control, and finance operations more quickly.
- The products section now also includes a reusable operations-proof strip so Rotaplan and Warewise show route-specific workflow signals instead of relying only on surrounding copy.
- The journey section now includes a reusable live route proof board so Step 02 shows five named product paths with real screenshots where available and direct jumps to the matching product cards.
- The journey now also uses structured workflow signal boards for Rotaplan and Warewise where dedicated screenshots are still absent, and Step 03 separates those two operations routes again instead of collapsing them into one generic operations card.
- The platform overview and principles sections now use more outcome-first language so the broader DII story points more directly to clearer decisions, lower friction, and stronger control.
- The platform overview now also includes a direct route-handoff layer so the section no longer stops at explanation alone.
- The knowledge section now previews search-style questions, more concrete topic paths, and example discovery routes so the growing-next layer feels more specific without pretending the article library is already fully live.
- The contact section now explains what happens after direct or guided contact with clearer first-step copy, a three-step reassurance strip, and guided-enquiry messaging that treats the first email as the starting brief.
- `tmp.html` is now an archived prototype with a visible non-production warning and cleaned closing HTML; do not treat it as live.
- No `CODEX/` workspace existed before this bootstrap. Initial architecture, task, content, design, and testing docs were created on 2026-03-22.

## Active Priorities
- `DII-030` Add stronger factual proof near the contact decision.
- `DII-017` Record the remaining physical-phone hosted QA after WebKit coverage was completed from this Linux environment.

## Current In-Progress Task
- None.

## Recommended Next Task
- `DII-030` Add stronger factual proof near the contact decision.

## Recent Changes
- Created `/CODEX/` workspace structure and seeded it with real findings from `/index.html`, `/tmp.html`, `/assets/images/`, `/CNAME`, and the current repository state.
- Replaced the placeholder root `CODEX_START_HERE.md` with a real resume entry point.
- Logged the first backlog, risks, priorities, and architecture map.
- Fixed the mobile timeline CSS so both sides of each row remain visible below `920px`.
- Rewrote the live homepage copy so visitor-facing sections no longer expose internal TODO or owner-facing instructions.
- Changed hero carousel image paths to repo-relative URLs so the images load from both direct local file previews and normal hosted root paths.
- Clarified the homepage CTA hierarchy so visitors can choose between selecting a product, following the DII journey, or starting a guided enquiry.
- Added DII Accounts across the live ecosystem, product family, hero carousel, and workflow copy so the finance layer is now represented as a real product rather than only future intent.
- Polished the remaining homepage copy so product, workflow, knowledge, and contact sections read more like a finished visitor-facing site and less like internal planning notes.
- Made the fixed sidebar scrollable inside the viewport so the full menu remains reachable on smaller screens and shorter viewports.
- Added a reusable UI playbook and starter CSS pack under `/CODEX/design/` so future Codex sessions can reuse this visual system across other projects.
- Strengthened the homepage SEO baseline with canonical, Twitter card tags, JSON-LD schema, `/robots.txt`, `/sitemap.xml`, and a logged Google Search Console verification file at `/google46d6e99a9bb78479.html`.
- Added an accessibility baseline with a skip link, stronger keyboard focus styling, nav `aria-current` updates, mobile Escape-to-close behavior, semantic footer markup, and cleaner assistive-state handling in the carousel and icon set.
- Replaced the abstract timeline and knowledge placeholders with production-style route boards, preview cards, and a structured knowledge panel built from existing screenshots.
- Completed `DII-009` by standardizing the live product naming around Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts; aligning the hero Fast Checker slide as a Startup Business Builder entry view; and confirming the linked product destinations resolve successfully.
- Completed `DII-004` by extracting the live stylesheet to `/assets/css/site.css`, the live behavior script to `/assets/js/site.js`, and updating the warehouse destination links to `https://www.northstarwms.co/wms`.
- Completed `DII-008` by trimming the copied prompt text out of `/tmp.html`, marking the file visibly as an archived prototype, and keeping it in place as a non-production reference rather than a misleading live page.
- Completed `DII-014` with a local browser-driven regression pass, fixing two regressions found during QA: hero slide CSS fallback image paths that broke after CSS extraction, and carousel autoplay restarting while hovered or focus-within after control clicks.
- Completed `DII-016` by pushing commit `94b83eb` to `origin/main`, verifying the hosted domain now serves `/assets/css/site.css` and `/assets/js/site.js`, and confirming in live Chrome and Edge smoke checks that the extracted build and NorthStar destination are now present on `https://dii.ltd/`.
- Completed `DII-015` as the best-available hosted browser matrix from this Linux environment, covering Chrome desktop, Edge desktop, Firefox desktop, Android-size mobile emulation, and iPhone-size mobile emulation with no live regression reproduced after deployment sync.
- Advanced `DII-017` by unblocking Playwright WebKit locally, recording hosted WebKit desktop and WebKit iPhone-size passes with no regression reproduced, and narrowing the remaining blocker to a true physical phone-browser pass.
- Completed `DII-018` by adding a reusable live-versus-growing availability band, tightening knowledge-layer copy, and making the product-versus-content availability state clearer across the homepage.
- Completed `DII-019` by adding a reusable proof band near the product-selection flow, using only supported facts already present on the homepage.
- Completed `DII-020` by tightening product-intro copy, route-pill labels, and product-card framing around audience fit, core problem, and intended outcome.
- Completed `DII-021` by replacing the mailto-only guided enquiry path with an on-page form that recommends the right inbox, prepares a structured message, and supports both copy and mailto-draft actions.
- Completed `DII-022` by strengthening the hero with above-the-fold proof cues, clearer buyer-fit language, and factual live-now framing inside the top hero panel.
- Completed `DII-023` by clarifying the post-contact flow with stronger first-step copy, a reusable three-step reassurance strip, and guided-enquiry status language that frames the prepared email as the starting brief.
- Completed `DII-024` by turning Step 02 of the journey section into a five-route live proof board with real screenshots where available and direct jumps to the matching product cards.
- Completed `DII-025` by making the knowledge section more search-oriented with clearer topic titles, example discovery paths, and a more specific CTA while keeping the growing-next framing.
- Completed `DII-026` by adding an operations-proof strip near the products router and reusing structured workflow signal boards for Rotaplan and Warewise in the journey section where screenshots are still absent.
- Completed `DII-027` by tightening the platform overview and principles sections around clearer founder, operations, finance, and learning outcomes instead of broader ecosystem-only wording.
- Completed `DII-028` by turning the platform overview into a route-level handoff with compact direct links to the main product, knowledge, and guided-enquiry destinations.
- Completed `DII-029` by turning the hero buyer-fit cards into direct first-screen route handoffs with compact jumps to the matching product sections.

## Important Rules
- Treat `/index.html` as the live page unless the repo structure changes.
- Read the startup files in the order above before new work.
- Update relevant `/CODEX/` docs when structure, reusable UI, copy strategy, SEO direction, or JS behavior changes.
- Keep work grounded in real files, selectors, assets, and links.
- Prefer small, safe iterations over broad redesigns.
- Preserve the static HTML/CSS/JS stack unless explicitly told otherwise.
- Treat physical-phone QA as external-device work until a machine or device with a real phone browser is available.

## Resume Protocol
If context is lost:
1. Read this file.
2. Read `/CODEX/tasks/next_task.md`.
3. Read `/CODEX/tasks/in_progress.md`.
4. Read `/CODEX/project/current_priorities.md`.
5. Read `/CODEX/architecture/frontend_map.md`.
6. Read any relevant `/CODEX/content/` or `/CODEX/design/` doc for the area you are changing.
7. Inspect the relevant code in `/index.html`.
8. Continue from the highest-priority open task unless the user directs otherwise.
