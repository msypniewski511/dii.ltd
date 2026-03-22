# Backlog

## P0 Critical

### DII-001
- Title: Fix mobile timeline content loss in `#how-it-works`
- Description: Rework the responsive timeline layout so all five steps remain visible and readable on screens below `920px`.
- Area: Responsive UX / conversion
- Priority: P0 Critical
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-22 by reflowing each mobile timeline row into a stacked layout with both sides visible and the step card shown first.

## P1 High

### DII-002
- Title: Replace placeholder and editor-facing homepage copy
- Description: Rewrite live sections so the page speaks to visitors, not the site owner, and remove visible TODO/instructional text from production content.
- Area: Copy / conversion / brand
- Priority: P1 High
- Status: DONE
- Dependencies: DII-001 preferred first if timeline structure changes
- Notes: Completed on 2026-03-22. The live page now uses customer-facing copy across the hero, platform, timeline, knowledge, principles, and contact sections.

### DII-003
- Title: Improve CTA routing and lead capture clarity
- Description: Clarify the primary and secondary actions so visitors can choose between learning, opening a product, or contacting the company with less friction.
- Area: UX / conversion
- Priority: P1 High
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-22. The hero now separates product selection, journey context, and guided enquiry; the products section includes a routing layer; and the contact panel now offers a stronger first-step CTA.

### DII-005
- Title: Strengthen SEO foundations for the homepage
- Description: Add missing SEO baseline elements and align on-page copy with homepage intent.
- Area: SEO
- Priority: P1 High
- Status: TODO
- Dependencies: DII-002
- Notes: Canonical, Twitter tags, and schema are missing. The single-page architecture also needs better intent documentation.

### DII-011
- Title: Polish remaining internal-sounding homepage copy
- Description: Remove the smaller strategy-note and roadmap-style phrases that remained after the main homepage rewrite.
- Area: Copy / brand / conversion
- Priority: P1 High
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-22. Products, workflow, knowledge, principles, and contact copy now read more like a finished company site.

## P2 Medium

### DII-006
- Title: Improve accessibility affordances and states
- Description: Add stronger keyboard-visible states, review nav state semantics, and consider a skip link.
- Area: Accessibility
- Priority: P2 Medium
- Status: TODO
- Dependencies: None
- Notes: Existing interactivity is usable, but focus styling and assistive-state signals are weak.

### DII-007
- Title: Replace placeholder visuals with production-ready assets
- Description: Remove mock placeholder boxes and insert real screenshots, diagrams, or structured content blocks.
- Area: Design / content
- Priority: P2 Medium
- Status: TODO
- Dependencies: DII-002
- Notes: Timeline and knowledge sections still rely on placeholder visuals and abstract stand-in UI.

### DII-004
- Title: Extract inline CSS and JS after layout and messaging stabilize
- Description: Move the embedded style and script blocks into maintainable static asset files.
- Area: Frontend architecture / performance
- Priority: P2 Medium
- Status: TODO
- Dependencies: DII-001, DII-002
- Notes: Do this after the homepage structure and messaging settle to avoid duplicate churn.

### DII-009
- Title: Audit product naming and outbound destination consistency
- Description: Confirm that product naming, statuses, and destination URLs are consistent across sidebar cards, hero slides, and product cards.
- Area: Brand / content / IA
- Priority: P2 Medium
- Status: TODO
- Dependencies: None
- Notes: This is mainly a consistency sweep across current copy and links.

### DII-010
- Title: Add DII Accounts to the live ecosystem
- Description: Introduce the new finance/accountancy product across the homepage using the real product image, live app URL, and updated workflow copy.
- Area: Product / IA / content
- Priority: P1 High
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-22. DII Accounts now appears in the sidebar ecosystem list, hero carousel, product router, product family, and workflow narrative.

## P3 Low

### DII-008
- Title: Decide whether to archive or clean `tmp.html`
- Description: Either remove it from active use, move it to a clearer archive path, or clean it so it is not a misleading repo artifact.
- Area: Repo hygiene
- Priority: P3 Low
- Status: TODO
- Dependencies: None
- Notes: The file currently contains appended prompt text after the HTML, which makes it unreliable as a project reference.

### CODX-000
- Title: Bootstrap persistent Codex workspace
- Description: Create the initial `CODEX/` system, root resume file, architecture map, and task seed documents.
- Area: Documentation / operations
- Priority: P1 High
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-22.
