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
- The frontend is a single static HTML file with large inline `<style>` and `<script>` blocks.
- Primary experience is a scrollable one-page layout with a fixed sidebar, hero carousel, product cards, timeline, knowledge placeholder, principles section, and contact block.
- `tmp.html` is an older concept/prototype file and currently contains appended prompt text after the HTML; do not treat it as production.
- No `CODEX/` workspace existed before this bootstrap. Initial architecture, task, content, design, and testing docs were created on 2026-03-22.

## Active Priorities
- `DII-005` Strengthen SEO foundations for the single-page homepage.
- `DII-006` Improve accessibility affordances and states.
- `DII-007` Replace visible placeholder visuals with production-ready assets.

## Current In-Progress Task
- None.

## Recommended Next Task
- `DII-005` Strengthen SEO foundations for the single-page homepage.

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

## Important Rules
- Treat `/index.html` as the live page unless the repo structure changes.
- Read the startup files in the order above before new work.
- Update relevant `/CODEX/` docs when structure, reusable UI, copy strategy, SEO direction, or JS behavior changes.
- Keep work grounded in real files, selectors, assets, and links.
- Prefer small, safe iterations over broad redesigns.
- Preserve the static HTML/CSS/JS stack unless explicitly told otherwise.

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
