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

## DII-005
- Title: Strengthen SEO foundations for the homepage
- Description: Added the missing homepage SEO baseline so the one-page site is easier to index, share, and submit to search tools.
- Area: SEO
- Priority: P1 High
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-23 in `/index.html`, `/robots.txt`, and `/sitemap.xml`. This pass added canonical, robots, Twitter card tags, JSON-LD schema, and logged the existing `/google46d6e99a9bb78479.html` verification file.

## DII-006
- Title: Improve accessibility affordances and states
- Description: Added a practical accessibility baseline across navigation, keyboard focus, and interactive state handling without redesigning the page.
- Area: Accessibility
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23 in `/index.html`. This pass added a skip link, focus-visible styling, `aria-current` syncing for sidebar navigation, Escape-to-close mobile menu behavior, semantic footer markup, and cleaner assistive-state handling for icons and carousel slides.

## DII-007
- Title: Replace visible placeholder visuals with production-ready assets
- Description: Replaced the abstract timeline and knowledge placeholders with more production-style visual boards built from real screenshots and structured content cards.
- Area: Design / content
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-002
- Notes: Completed on 2026-03-23 in `/index.html` with reused assets from `/assets/images/`. The timeline now uses route boards, preview cards, and ecosystem layer cards; the knowledge section now uses a real media-and-topic panel.

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

## DII-013
- Title: Capture reusable UI playbook and CSS starter
- Description: Turned the current visual language into a reusable Codex prompt plus a starter CSS kit for future projects.
- Area: Design system / documentation
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23 in `/CODEX/design/ui_playbook.md` and `/CODEX/design/ui_foundation.css`, with matching updates to the design and reference docs.

## DII-004
- Title: Extract inline CSS and JS after layout and messaging stabilize
- Description: Moved the live stylesheet and interaction logic out of `/index.html` into standalone asset files without changing the static stack.
- Area: Frontend architecture / performance
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-001, DII-002
- Notes: Completed on 2026-03-24 in `/assets/css/site.css`, `/assets/js/site.js`, and `/index.html`. This pass also updated the Warewise/NorthStar destination links to `https://www.northstarwms.co/wms`.

## DII-008
- Title: Decide whether to archive or clean `tmp.html`
- Description: Cleaned and clearly marked the old prototype file so it remains a non-production reference rather than a misleading repo artifact.
- Area: Repo hygiene
- Priority: P3 Low
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-24 in `/tmp.html`. Removed the copied prompt text after the closing HTML, changed the page title to indicate archive status, and added a visible in-page archived-prototype warning.

## DII-009
- Title: Audit product naming and outbound destination consistency
- Description: Standardized the public product naming and checked that the outbound product links still point to the intended live destinations.
- Area: Brand / content / IA
- Priority: P2 Medium
- Status: DONE
- Dependencies: None
- Notes: Completed on 2026-03-23 in `/index.html` plus related CODEX content/task docs. The final public naming map is Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts; the Fast Checker hero slide now reads as a Startup Business Builder entry view rather than a separate live product.

## DII-014
- Title: Run a manual browser regression pass after recent structural changes
- Description: Recorded a browser regression pass after the CSS/JS extraction and repo cleanup work, then fixed the regressions exposed during QA.
- Area: QA / accessibility / responsive
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-004
- Notes: Completed on 2026-03-24 using a local Chrome desktop/mobile/reduced-motion matrix plus outbound URL spot-checks. Fixed the hero carousel fallback image path bug in `/index.html` and the hover/focus autoplay restart bug in `/assets/js/site.js`. Firefox desktop automation timed out locally, so hosted non-Chromium coverage moved into `DII-015`.

## DII-016
- Title: Deploy the current extracted-asset build before hosted QA resumes
- Description: Synced the deployed site to the current repo so hosted QA can validate the right build.
- Area: Release / deployment
- Priority: P1 High
- Status: DONE
- Dependencies: Current local homepage changes
- Notes: Completed on 2026-03-24 by pushing commit `94b83eb` to `origin/main`. Verified that `https://dii.ltd/assets/css/site.css` and `https://dii.ltd/assets/js/site.js` return `200`, and confirmed in hosted Chrome and Edge smoke checks that the extracted asset tags plus the NorthStar destination are present on the live page.

## DII-015
- Title: Record a hosted manual cross-browser pass outside local Chrome automation
- Description: Recorded the best-available hosted browser matrix from this environment after deployment sync and confirmed the live site behaves correctly outside the earlier local Chrome-only coverage.
- Area: QA / cross-browser compatibility
- Priority: P2 Medium
- Status: DONE
- Dependencies: DII-014
- Notes: Completed on 2026-03-24 using hosted browser-driven checks in Chrome desktop, Edge desktop, Firefox desktop, Android-size mobile emulation, and iPhone-size mobile emulation against `https://dii.ltd/`. No hosted regression was reproduced. The remaining true Safari/WebKit and physical-phone slice is now tracked as `DII-017`.

## DII-018
- Title: Clarify what is live now versus still growing across the homepage
- Description: Added a reusable availability pattern plus more explicit knowledge-layer copy so the homepage is clearer about which parts of the ecosystem are available today and which part is still expanding next.
- Area: Copy / conversion / trust
- Priority: P1 High
- Status: DONE
- Dependencies: DII-011
- Notes: Completed on 2026-03-24 in `/index.html` and `/assets/css/site.css`. Added a two-card availability band in the platform section, introduced reusable `status-chip` styling, and reframed the knowledge section as a growing next layer rather than an equally live product surface.

## DII-019
- Title: Add stronger proof and trust cues near the product-selection flow
- Description: Added factual trust signals close to the product-selection area so visitors see concrete proof points before they choose a route.
- Area: Conversion / credibility / copy
- Priority: P1 High
- Status: DONE
- Dependencies: DII-018 preferred first
- Notes: Completed on 2026-03-24 in `/index.html` and `/assets/css/site.css`. Added a reusable three-card proof band above the product router covering five live product routes, named contact inboxes, and the public London HQ listing.
