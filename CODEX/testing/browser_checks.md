# Browser Checks

## 2026-07-13 Address / GitHub Pages Readiness Pass
- Local preview: `python3 -m http.server 4173 --bind 127.0.0.1`.
- Desktop Chrome headless at `1440x1000`: homepage loaded, CSS loaded, all internal anchors resolved, contact block showed `264 North Circular Road, London, NW10 0JT, United Kingdom`, no old address appeared in rendered HTML/text, and no horizontal overflow was detected.
- Mobile Chrome headless at `390x900`: homepage loaded, corrected address appeared, no old address appeared, CSS loaded, all internal anchors resolved, and no horizontal overflow was detected.
- Mobile menu behavior: `#menuToggle` opened the sidebar, changed `aria-expanded` to `true`, updated the label to `Close navigation menu`, and Escape closed it with `aria-expanded="false"`.
- Archived prototype `/tmp.html` at mobile width: corrected address appeared and the old address did not appear.
- Console notes: pre-existing GSAP target warnings still appear during local Chrome checks; no serious console error was introduced by the address/hosting changes.
- Static HTTP checks: `/`, `/assets/css/site.css`, `/assets/js/site.js`, `/assets/images/dii-social-preview.png`, and `/CNAME` returned successfully from local preview.

## Local Repo-State Pass
- Date: 2026-03-24
- Method: local browser-driven regression against `/index.html` served over `http://127.0.0.1`
- Coverage recorded:
  - Chrome desktop `1440x1024`: PASS
  - Chrome short mobile `390x640`: PASS
  - Chrome Android-size `412x732`: PASS
  - Chrome desktop with `prefers-reduced-motion: reduce`: PASS
  - Firefox desktop: BLOCKED locally, Playwright launch timed out after 12 seconds
- Fixes made during the pass:
  - Updated the hero slide CSS fallback image URLs in `/index.html` from HTML-relative `assets/images/...` to stylesheet-relative `../images/...`
  - Updated `/assets/js/site.js` so carousel autoplay no longer restarts while the carousel is still hovered or focus-within after a dot or arrow click

## Targeted Local Sanity Pass
- Date: 2026-03-27
- Method: local browser-driven sanity check against `http://127.0.0.1:4173/#products`
- Coverage recorded:
  - Firefox desktop `1440x1200`: PASS
  - iPhone 13 emulation: PASS
- Checks exercised:
  - updated route-pill labels visible at the products jump target
  - new `.product-fit` audience/problem/outcome rows render inside the product cards
  - no product-section layout break was observed in the recorded desktop or mobile captures
- Notes:
  - `xmllint --html --noout index.html` was not treated as a useful validation signal because it flagged the existing HTML5/custom-element markup rather than a regression introduced by `DII-020`

## Targeted Local Contact Pass
- Date: 2026-03-27
- Method: local contact-flow sanity check against `http://127.0.0.1:4173/#guidedEnquiry`
- Coverage recorded:
  - Firefox desktop `1440x1200`: PASS
  - Firefox mobile-size `390x844`: PASS
  - `node --check /assets/js/site.js`: PASS
- Checks exercised:
  - the guided enquiry form renders at the contact jump target on desktop and mobile-size viewports
  - a headless Chrome same-origin DOM harness submitted an IFV sales enquiry and received `sales.ifv@dii.ltd`
  - the same harness changed the enquiry type to legal and confirmed the recommended inbox updated to `legal@dii.ltd`
  - the prepared message updated to include `What I need: Legal or formal contact`
  - the status message updated after the post-submit edit, confirming the result state stays in sync when the form changes

## Targeted Local Hero Pass
- Date: 2026-03-27
- Method: local hero sanity check against `http://127.0.0.1:4173/#hero`
- Coverage recorded:
  - Firefox desktop `1440x1200`: PASS
  - Firefox mobile-size `390x844`: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the updated hero H1 and lede render at the top of the page
  - the new `.hero-facts` proof grid is present in the upper hero panel
  - the buyer-fit hero cards render on both desktop and mobile-size viewports
  - no first-screen layout break was observed in the recorded desktop or mobile captures

## Targeted Local Contact Reassurance Pass
- Date: 2026-03-27
- Method: local contact reassurance check against `http://127.0.0.1:4173/#contact`
- Coverage recorded:
  - Firefox desktop `1440x1200`: PASS
  - Firefox mobile-size `390x844`: PASS
  - `node --check /assets/js/site.js`: PASS
  - Playwright Firefox interaction harness: PASS
- Checks exercised:
  - the updated contact intro and direct-route copy render at the contact jump target
  - the new `.contact-next-steps` reassurance strip renders on desktop and mobile-size viewports
  - the guided-enquiry helper note now explains that the first email becomes the starting brief
  - the Playwright harness submitted an IFV sales enquiry and received `sales.ifv@dii.ltd`
  - the same harness changed the enquiry type to legal and confirmed the recommended inbox updated to `legal@dii.ltd`
  - the guided status message kept the new starting-brief wording after the post-submit edit

## Targeted Local Journey Proof Pass
- Date: 2026-03-27
- Method: local journey-section proof check against `http://127.0.0.1:4173/#how-it-works`
- Coverage recorded:
  - Firefox desktop `1440x1400`: PASS
  - Firefox mobile-size `390x1080`: PASS
  - Playwright Firefox link harness: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the new `.timeline-proof-grid` renders inside Step 02 on desktop and mobile-size viewports
  - the journey section now shows five named live route cards: Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts
  - the Playwright harness confirmed all five `.timeline-proof-link` cards point to `#startup-builder`, `#ifv-builder`, `#rotaplan`, `#warewise`, and `#dii-accounts`

## Targeted Local Knowledge Discovery Pass
- Date: 2026-03-27
- Method: local knowledge-section sanity check against `http://127.0.0.1:4173/#knowledge`
- Coverage recorded:
  - Firefox desktop `1440x1400`: PASS
  - Firefox mobile-size `390x1180`: PASS
  - Playwright Firefox content harness: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the updated knowledge intro and growing-next framing render at the section jump target
  - the new `.knowledge-path-head` and `.knowledge-path-grid` render on desktop and mobile-size viewports
  - the section now shows four concrete discovery-path prompts covering founder, visa, operations, and finance questions
  - the Playwright harness confirmed the new knowledge-path heading text, the four example path-card titles, and the more specific CTA copy

## Targeted Local Operations Proof Pass
- Date: 2026-03-27
- Method: local products-and-journey sanity check against `http://127.0.0.1:4174/#products` and `http://127.0.0.1:4174/#how-it-works`
- Coverage recorded:
  - Firefox desktop `1440x1700`: PASS
  - Firefox mobile-size `390x1500`: PASS
  - Playwright Firefox content harness: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the new `.operations-proof-band` renders below the product router on desktop and mobile-size viewports
  - the operations proof strip shows separate Rotaplan and Warewise route cards with structured workflow signal boards
  - the Step 02 live route proof grid now renders route-signal boards for Rotaplan and Warewise instead of generic icon-only thumbs
  - the Playwright harness confirmed there are two operations proof cards in `#products`, two route-signal boards inside `.timeline-proof-grid`, and five Step 03 snapshot cards including separate Rotaplan and Warewise entries

## Targeted Local Platform Outcome Pass
- Date: 2026-03-27
- Method: local platform-and-principles sanity check against `http://127.0.0.1:4174/#platform` and `http://127.0.0.1:4174/#principles`
- Coverage recorded:
  - Firefox desktop `1440x1400`: PASS
  - Firefox mobile-size `390x1180`: PASS
  - Playwright Firefox content harness: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the updated platform heading and intro copy render cleanly at the section jump target
  - the longer outcome-first platform cards and metric labels render without a layout break on desktop and mobile-size viewports
  - the updated principles intro and revised pillar copy render cleanly at the section jump target
  - the Playwright harness confirmed the new platform heading, the updated metric labels, and the revised principles intro text

## Targeted Local Platform Handoff Pass
- Date: 2026-03-28
- Method: local platform-section handoff check against `http://127.0.0.1:4174/#platform`
- Coverage recorded:
  - Firefox desktop `1440x1450`: PASS
  - Firefox mobile-size `390x1360`: PASS
  - Playwright Firefox content harness: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the new `.platform-handoff-head` and `.platform-handoff-row` render cleanly at the platform jump target
  - the four platform handoff cards render without a layout break on desktop and mobile-size viewports
  - the route chips remain visibly separated from the fuller products router below
  - the Playwright harness confirmed four handoff cards and seven route chips pointing to `#startup-builder`, `#ifv-builder`, `#rotaplan`, `#warewise`, `#dii-accounts`, `#knowledge`, and `#contact`

## Targeted Local Hero Handoff Pass
- Date: 2026-03-28
- Method: local hero-section handoff check against `http://127.0.0.1:4174/#hero`
- Coverage recorded:
  - Firefox desktop `1440x1200`: PASS
  - Firefox mobile-size `390x844`: PASS
  - Playwright Firefox content harness: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the new `.hero-point-links` render cleanly inside the three buyer-fit cards at the hero jump target
  - the compact route chips render without a first-screen layout break on desktop and mobile-size viewports
  - the Playwright harness confirmed three hero buyer-fit cards, five `.hero-point-link` chips, and the expected product anchors: `#startup-builder`, `#ifv-builder`, `#rotaplan`, `#warewise`, and `#dii-accounts`
  - the route labels now read `Closest route`, `Closest route`, and `Closest routes` across the three buyer-fit cards

## Targeted Local Contact Proof Pass
- Date: 2026-04-17
- Method: local contact-section proof check against `http://127.0.0.1:4175/#contact`
- Coverage recorded:
  - Chromium desktop `1440x1300`: PASS
  - Chromium mobile-size `390x1200`: PASS
  - `ASDF_NODEJS_VERSION=22.11.0 node --check assets/js/site.js`: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the new `.contact-proof-strip` renders beside the contact decision on desktop and mobile-size viewports
  - the proof strip exposes four supported facts: five live routes, named inbox paths, London HQ listing, and structured first brief
  - all seven direct `mailto:` links remain present in the contact section
  - the contact section keeps one `h2`, existing `h3`/`h4` heading hierarchy, four direct contact cards, and the guided enquiry form
  - focus styling remains visible on contact `mailto:` links
  - no horizontal overflow or browser console errors were found in the checked viewports
  - the guided enquiry still routes IFV sales to `sales.ifv@dii.ltd`, switches legal enquiries to `legal@dii.ltd`, and keeps a generated `mailto:` draft link

## Targeted Local Knowledge Roadmap Pass
- Date: 2026-04-17
- Method: local knowledge-section roadmap check against `http://127.0.0.1:4176/#knowledge`
- Coverage recorded:
  - Chromium desktop `1440x1300`: PASS
  - Chromium mobile-size `390x1200`: PASS
  - `ASDF_NODEJS_VERSION=22.11.0 node --check assets/js/site.js`: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the new `.knowledge-roadmap` renders at the knowledge jump target on desktop and mobile-size viewports
  - five `.knowledge-route-card` entries render for founder planning, IFV preparation, operations workflows, warehouse control, and finance operations
  - the roadmap links point to `#startup-builder`, `#ifv-builder`, `#rotaplan`, `#warewise`, and `#dii-accounts`
  - the section still includes the `Growing next` status and explicitly says this is not a live article library yet
  - heading order remains logical with one knowledge `h2`, roadmap `h3`, and route-card `h4` headings

## Targeted Local Guided Enquiry Accessibility Pass
- Date: 2026-04-17
- Method: local guided-enquiry check against `http://127.0.0.1:4183/#guidedEnquiry`
- Coverage recorded:
  - Chromium desktop `1440x1100`: PASS
  - Chromium mobile-size `390x900`: PASS
  - `ASDF_NODEJS_VERSION=22.11.0 node --check assets/js/site.js`: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - the guided enquiry renders with explicit local email-preparation guidance
  - route, need, and problem controls expose helper text through `aria-describedby`
  - the prepared result is a labelled focusable region
  - submitting the form moves focus to `#guidedEnquiryResult`
  - IFV sales still routes to `sales.ifv@dii.ltd`
  - legal enquiries still route to `legal@dii.ltd`
  - generated `mailto:` draft links remain present and update with the recommended inbox
  - keyboard tab order through the main guided enquiry fields remains intact
  - no horizontal overflow or browser console errors were found in the checked viewports

## Targeted Local Social Preview Metadata Pass
- Date: 2026-04-17
- Method: local metadata and page-load check against `http://127.0.0.1:4184/`
- Coverage recorded:
  - Chromium desktop `1280x900`: PASS for metadata consistency, image loading, and console errors
  - `git diff --check`: PASS
  - JSON-LD parse check: PASS
  - Social image file check: PASS, `/assets/images/dii-social-preview.png` is 1200x630 and about 49 KB
- Checks exercised:
  - `og:image` and `twitter:image` both point to `https://dii.ltd/assets/images/dii-social-preview.png`
  - Open Graph and Twitter title, description, and image alt text match
  - Open Graph image type, width, and height are present
  - referenced social image returns `200` from the local static server
  - no browser console errors were found on page load
- Follow-up:
  - The same browser load check observed page-level horizontal overflow at `1280x900`; this is now tracked separately as `DII-035`.

## Targeted Local Horizontal Overflow Pass
- Date: 2026-04-18
- Method: local page-level overflow check against `http://127.0.0.1:4185/`
- Coverage recorded:
  - Chromium desktop `1280x900`: PASS
  - Chromium desktop `1320x900`: PASS
  - Chromium desktop `1366x900`: PASS
  - Chromium desktop `1440x1000`: PASS
  - Chromium wide desktop `1680x1050`: PASS
  - Chromium tablet/narrow desktop `1024x900`: PASS
  - Chromium mobile-size `390x900`: PASS
  - Chromium mobile-size `390x900` with mobile menu open: PASS
  - `ASDF_NODEJS_VERSION=22.11.0 node --check assets/js/site.js`: PASS
  - `git diff --check`: PASS
- Root cause:
  - `.main` used `width: 100%` while also being offset by the fixed `290px` sidebar, making the document wider than the viewport at narrow desktop widths.
  - The hero two-column breakpoint stayed active too long for the fixed-sidebar content width, and the one-column `.hero-art` retained a wide-desktop aspect ratio that could derive extra width from `min-height`.
- Checks exercised:
  - `document.documentElement.scrollWidth` and `document.body.scrollWidth` match the viewport width in all checked viewports
  - hero, knowledge, and contact sections remain inside the content column
  - mobile sidebar opens without introducing page-level horizontal scroll
  - no browser console errors were found

## Targeted Local Intrinsic Image Dimensions Pass
- Date: 2026-04-18
- Method: local image-dimension and layout check against `http://127.0.0.1:4186/`
- Coverage recorded:
  - Chromium desktop `1440x1100`: PASS
  - Chromium mobile-size `390x900`: PASS
  - Chromium desktop `1280x900`: PASS for overflow regression guard
  - `ASDF_NODEJS_VERSION=22.11.0 node --check assets/js/site.js`: PASS
  - `git diff --check`: PASS
- Checks exercised:
  - all 11 homepage `<img>` elements have `width` and `height` attributes
  - image attributes match the real source-file dimensions used by the fallback `<img>` elements
  - hero carousel still renders and advances from Startup Business Builder to IFV Builder
  - journey/timeline proof and snapshot images load when scrolled into view
  - knowledge preview image loads when scrolled into view
  - no page-level horizontal overflow was found at desktop, mobile-size, or the prior `1280x900` guard viewport
  - mobile sidebar still opens in the mobile-size pass
  - no browser console errors were found

## Hosted Site Status
- Date checked: 2026-03-24
- `https://dii.ltd/` now serves the current extracted-asset repo build:
  - `https://dii.ltd/assets/css/site.css`: `200`
  - `https://dii.ltd/assets/js/site.js`: `200`
  - The hosted HTML now includes `<link rel="stylesheet" href="assets/css/site.css">` and `<script src="assets/js/site.js"></script>`
  - The hosted product links now include `https://www.northstarwms.co/wms`
- Best-available hosted browser-driven pass from this environment after deployment:
  - Chrome desktop `1440x1024`: PASS
  - Edge desktop `1440x1024`: PASS
  - Firefox desktop `1440x1024`: PASS
  - Chrome Android-size mobile emulation `412x732`: PASS
  - Chrome iPhone-size mobile emulation `390x844`: PASS
- Checks exercised in the hosted pass:
  - extracted asset tags present in hosted HTML and both hosted asset URLs return `200`
  - skip link focus and skip-link landing on `#mainContent`
  - hero carousel next, previous, and dot controls
  - sidebar navigation scroll and `aria-current="location"` updates
  - DII Accounts route pill jump target
  - timeline row visibility and marker count
  - contact card count and contact lead visibility
  - mobile menu open, backdrop close, and mobile nav follow behavior
  - knowledge panel visibility and topic-card count
- No hosted browser regression was reproduced in the recorded Chrome, Edge, Firefox, or mobile-emulation pass.
- A true WebKit hosted pass is now also recorded from this machine after locally staging the missing Playwright WPE runtime libraries:
  - WebKit desktop `1440x1024`: PASS
  - WebKit iPhone-size mobile emulation `390x844`: PASS
- Additional checks exercised in the hosted WebKit pass:
  - skip link focus and landing on `#mainContent`
  - hero carousel next, previous, and dot controls
  - sidebar `aria-current="location"` updates after navigation
  - DII Accounts route pill jump target
  - knowledge panel visibility and topic-card count
  - mobile menu open, backdrop close, and mobile nav follow behavior
  - timeline row visibility on iPhone-size WebKit emulation
- No WebKit-specific regression was reproduced in the hosted pass.

## Remaining External Gap
- `DII-015` remains complete as the best-available hosted Chromium/Firefox matrix from this Linux environment.
- `DII-017` has now closed the true WebKit browser gap from this machine.
- A real phone-browser pass is still unavailable here because no physical device is attached to this environment and `adb` is not available with any connected device.
- The remaining external-only follow-up is now the physical phone slice of `DII-017`.

## Useful Evidence
- Deployment sync commit pushed to `origin/main`: `94b83eb`
- Hosted live smoke after deployment confirmed:
  - extracted CSS tag present
  - extracted JS tag present
  - `https://www.northstarwms.co/wms` present in live links
- Hosted browser-driven pass artifact written locally outside the repo to `/home/maciej/pwtemp/dii-015-hosted-pass.json`
- Hosted WebKit pass artifact written locally outside the repo to `/home/maciej/pwtemp/dii-017-webkit-pass.json`
