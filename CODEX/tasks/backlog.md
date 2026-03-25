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

### DII-016
- Title: Deploy the current extracted-asset build before hosted QA resumes
- Description: Sync the current repo state to GitHub Pages so `https://dii.ltd/` serves `/assets/css/site.css`, `/assets/js/site.js`, and the current product/link configuration before any hosted browser matrix is recorded.
- Area: Release / deployment
- Priority: P1 High
- Status: DONE
- Dependencies: Current local homepage changes
- Notes: Completed on 2026-03-24 by pushing commit `94b83eb` to `origin/main` and verifying that `https://dii.ltd/` now returns `200` for `/assets/css/site.css` and `/assets/js/site.js`, with the NorthStar destination present on the hosted page.

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
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-23. Added canonical, robots, Twitter tags, JSON-LD schema, `/robots.txt`, `/sitemap.xml`, and documented the Google Search Console verification file at the repo root.

### DII-011
- Title: Polish remaining internal-sounding homepage copy
- Description: Remove the smaller strategy-note and roadmap-style phrases that remained after the main homepage rewrite.
- Area: Copy / brand / conversion
- Priority: P1 High
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-22. Products, workflow, knowledge, principles, and contact copy now read more like a finished company site.

### DII-018
- Title: Clarify what is live now versus still growing across the homepage
- Description: Add a reusable availability pattern and tighten copy so visitors can distinguish live product routes from the still-expanding knowledge layer.
- Area: Copy / conversion / trust
- Priority: P1 High
- Status: DONE
- Dependencies: DII-011
- Notes: Completed on 2026-03-24 in `/index.html` and `/assets/css/site.css`. Added a live-versus-growing availability band in the platform section, made the knowledge section more explicit about being the next public layer DII is expanding, and added reusable status-chip styling for future availability cues.

### DII-019
- Title: Add stronger proof and trust cues near the product-selection flow
- Description: Introduce more concrete credibility signals near the hero, products, or contact route using only facts the site can support today, so visitors get more confidence without inflated claims.
- Area: Conversion / credibility / copy
- Priority: P1 High
- Status: DONE
- Dependencies: DII-018 preferred first
- Notes: Completed on 2026-03-24 in `/index.html` and `/assets/css/site.css`. Added a reusable proof band above the product router using only supported facts: five live product routes, named contact inboxes, and the public London HQ listing.

### DII-020
- Title: Sharpen product differentiation by audience, problem, and outcome
- Description: Make it easier for visitors to understand which product is for them by tightening the product-intro copy, route labels, and product-card positioning around specific buyer contexts and outcomes.
- Area: Conversion / IA / copy
- Priority: P1 High
- Status: TODO
- Dependencies: DII-019 preferred first
- Notes: The homepage now has clearer trust cues, so the next leverage point is reducing hesitation between Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts.

## P2 Medium

### DII-006
- Title: Improve accessibility affordances and states
- Description: Add stronger keyboard-visible states, review nav state semantics, and consider a skip link.
- Area: Accessibility
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23. Added a skip link, stronger focus-visible treatment, `aria-current` nav state syncing, Escape-to-close mobile menu behavior, semantic footer markup, and cleaner assistive-state handling in the carousel and icon set.

### DII-012
- Title: Make the fixed sidebar scrollable on smaller screens
- Description: Keep the sidebar capped to the viewport height and allow internal vertical scrolling so the full menu and ecosystem links stay reachable.
- Area: Responsive UX / navigation
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23. The fixed sidebar now uses viewport-bound height and `overflow-y: auto`.

### DII-013
- Title: Capture reusable UI playbook and CSS starter
- Description: Package the current visual system into reusable Codex instructions plus a starter CSS file for future projects.
- Area: Design system / documentation
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23. Reusable assets now live in `/CODEX/design/ui_playbook.md` and `/CODEX/design/ui_foundation.css`.

### DII-007
- Title: Replace placeholder visuals with production-ready assets
- Description: Remove mock placeholder boxes and insert real screenshots, diagrams, or structured content blocks.
- Area: Design / content
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-23. The timeline now uses route boards, product preview cards, and layer cards, while the knowledge section now uses a structured media-and-topic panel instead of browser-wireframe placeholders.

### DII-004
- Title: Extract inline CSS and JS after layout and messaging stabilize
- Description: Move the embedded style and script blocks into maintainable static asset files.
- Area: Frontend architecture / performance
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-001, DII-002
- Notes: Completed on 2026-03-24. Extracted the production CSS to `/assets/css/site.css`, the production JS to `/assets/js/site.js`, and updated the Warewise/NorthStar destination links to `https://www.northstarwms.co/wms`.

### DII-009
- Title: Audit product naming and outbound destination consistency
- Description: Confirm that product naming, statuses, and destination URLs are consistent across sidebar cards, hero slides, and product cards.
- Area: Brand / content / IA
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23. Standardized the live naming system to Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts; tied the Fast Checker hero slide back to Startup Business Builder; and confirmed the linked product destinations respond.

### DII-014
- Title: Run a manual browser regression pass after recent structural changes
- Description: Check the live page in real browsers after the CSS/JS extraction and repo cleanup work so layout, navigation, and interactive states are confirmed outside headless verification.
- Area: QA / accessibility / responsive
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-004
- Notes: Completed on 2026-03-24 with a local browser-driven Chrome matrix plus reduced-motion coverage. The pass fixed broken hero fallback image paths after CSS extraction and fixed carousel autoplay restarting while hovered or focus-within after control clicks. A hosted manual Firefox/Safari/Edge pass is now tracked separately as `DII-015`.

### DII-015
- Title: Record a hosted manual cross-browser pass outside local Chrome automation
- Description: Verify the deployed site in Firefox, Safari, Edge, and at least one real phone browser to close the remaining matrix gap after the local Chrome regression.
- Area: QA / cross-browser compatibility
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-014
- Notes: Completed on 2026-03-24 as the best-available hosted matrix from this Linux environment: Chrome desktop, Edge desktop, Firefox desktop, Android-size mobile emulation, and iPhone-size mobile emulation all passed against `https://dii.ltd/`. The true Safari/WebKit and physical-phone slice could not be executed here and is now tracked separately as `DII-017`.

### DII-017
- Title: Record the remaining physical-phone hosted QA after WebKit coverage
- Description: Run a real manual pass on the deployed site in Safari or another true WebKit browser plus at least one physical phone browser, then log any browser-specific regressions or confirm the site is clean.
- Area: QA / external browser coverage
- Priority: P2 Medium
- Status: BLOCKED
- Dependencies: DII-015
- Notes: Updated on 2026-03-24. True WebKit coverage is now recorded from this machine after locally staging the missing Playwright WPE runtime libraries, and both WebKit desktop plus WebKit iPhone-size emulation passed against `https://dii.ltd/`. The remaining blocker is only the physical phone-browser slice because no attached device is available here.

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
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-24. Removed the appended prompt text after `</html>`, updated the page title, and added a visible archived-prototype warning so the file can stay as a non-production reference without being confused for the live page.

### CODX-000
- Title: Bootstrap persistent Codex workspace
- Description: Create the initial `CODEX/` system, root resume file, architecture map, and task seed documents.
- Area: Documentation / operations
- Priority: P1 High
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-22.
