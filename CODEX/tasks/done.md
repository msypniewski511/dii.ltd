# Done

## CODX-000
- Title: Bootstrap persistent Codex workspace
- Description: Created `/CODEX/` docs, replaced the placeholder root resume file, mapped the current frontend, and seeded the initial backlog.
- Area: Documentation / operations
- Priority: P1 High
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-22 using findings from `/index.html`, `/tmp.html`, `/assets/images/`, `/CNAME`, and current git state.

## DII-001
- Title: Fix mobile timeline content loss in `#how-it-works`
- Description: Reworked the `920px` breakpoint so mobile users still see both sides of every timeline row.
- Area: Responsive UX / conversion
- Priority: P0 Critical
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-22 in `/index.html` with a CSS-only layout change.

## DII-002
- Title: Replace placeholder and editor-facing homepage copy
- Description: Rewrote key homepage sections so the live page speaks to visitors rather than the site owner.
- Area: Copy / conversion / brand
- Priority: P1 High
- Status: DONE
- Dependencies: DII-001 preferred first if timeline structure changed
- Notes: Completed on 2026-03-22 in `/index.html`. The same pass also changed hero carousel image paths to repo-relative URLs so local file previews load the slides correctly.

## DII-003
- Title: Improve CTA routing and lead capture clarity
- Description: Reworked the homepage action hierarchy so visitors can choose a product, understand the ecosystem flow, or start a guided enquiry with less friction.
- Area: UX / conversion
- Priority: P1 High
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-22 in `/index.html`. This pass added a hero CTA guidance note, a product routing layer, product-specific jump targets, and stronger guided-enquiry copy in the contact panel.

## DII-010
- Title: Add DII Accounts to the live ecosystem
- Description: Added the new accountancy product across the homepage using the live URL, real image asset, and revised finance-layer copy.
- Area: Product / IA / content
- Priority: P1 High
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-22 in `/index.html` and `/assets/images/DIIAccounts.jpg`. The pass updated the sidebar ecosystem list, hero carousel, product routing, product family, workflow narrative, and supporting finance references.

## DII-011
- Title: Polish remaining internal-sounding homepage copy
- Description: Refined the smaller pockets of strategy-note and roadmap-style language that remained after the main homepage rewrite.
- Area: Copy / brand / conversion
- Priority: P1 High
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-22 in `/index.html`. The products, workflow, knowledge, principles, and contact sections now read more consistently as finished visitor-facing copy.

## DII-012
- Title: Make the fixed sidebar scrollable on smaller screens
- Description: Capped the fixed sidebar to the viewport and enabled internal vertical scrolling so shorter screens can still reach the full menu.
- Area: Responsive UX / navigation
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23 in `/index.html`. The sidebar now uses viewport-bound height plus internal scrolling behavior.
