# Session Log

## 2026-03-22
- Inspected repo structure and confirmed the live site is centered on `/index.html`.
- Read existing `/AGENTS.md` and found `/CODEX_START_HERE.md` was still a placeholder.
- Mapped homepage sections, reusable classes, JS behaviors, assets, metadata, and current risks.
- Confirmed `tmp.html` is an old concept file with appended prompt text after the HTML and should not be treated as production.
- Created the initial persistent `CODEX/` workspace and seeded the first task backlog.
- Identified the mobile timeline layout as the highest-priority implementation issue.
- Completed `DII-001` by reworking the mobile timeline CSS so all five steps remain visible below `920px`.
- Diagnosed missing hero carousel images in local previews as a root-relative path issue under `file://`.
- Completed `DII-002` by rewriting owner-facing homepage copy and removing visible TODO/instructional text from the live page.
- Hardened the hero carousel rendering by giving each slide a CSS background-image fallback and simplifying the lower panel paint stack after the images still failed to appear in-browser.
- Identified the remaining carousel bug as a collapsed height chain: the image URLs were fine, but the lower panel lacked an explicit height, which let the slide image resolve at `0px` tall in browser layout.
- Raised the full `.hero-art` frame and enlarged the top hero glass panel so the right column better matches the scale of the left-side copy block while keeping the carousel visible underneath.
- Reworked the two hero glass cards into a grid-based stack so the lower carousel card sits directly under the summary card with a controlled gutter equal to the hero frame spacing.
- Completed `DII-003` by separating the hero CTA roles, adding a product routing strip, and turning the contact panel into a clearer guided-enquiry starting point.
- Added DII Accounts as a live ecosystem product, using the supplied `/assets/images/DIIAccounts.jpg` asset and Heroku URL across the sidebar, hero carousel, products section, and workflow language.
- Completed `DII-011` by removing the remaining internal-sounding strategy and roadmap phrasing from the products, workflow, knowledge, principles, and contact sections.
- Added a fixed top-right infinity background accent in `/index.html` using layered blue, cyan, and mint tones so the page atmosphere better matches the DII name without changing the core layout.
- Reworked the background accent into a more literal infinity symbol using inline SVG curves, brighter crossover highlights, and soft trailing lines based on the user's visual reference.
- Refined the infinity accent again by removing the petal-like inner trails and widening the two main bowls so the symbol reads more clearly as a horizontal infinity mark.
- Shifted the infinity accent palette again so it now stays within blue, cyan, indigo, and mint tones with no pink highlights.
- Softened the infinity accent by increasing the blur and lowering the glow intensity so it sits further into the background and feels less visually strong.
- Softened the infinity accent again by pushing the blur further, reducing saturation, and lowering the color alpha so it becomes more transparent and atmospheric.
- Softened the infinity accent again by bringing the overall layer close to `0.3`, removing the crisp inner merge, and diffusing the symbol much further into the background.

## 2026-03-23
- Completed `DII-012` by making the fixed sidebar scrollable within the viewport using viewport-bound height and internal vertical scrolling.
- Completed `DII-013` by packaging the current visual system into a reusable UI playbook and starter CSS file for future projects.
- Confirmed the supplied Google Search Console verification file exists at `/google46d6e99a9bb78479.html`.
- Completed `DII-005` by adding canonical, robots, Twitter card tags, JSON-LD schema, `/robots.txt`, and `/sitemap.xml` to the production SEO baseline.
- Completed `DII-006` by adding a skip link, stronger focus-visible states, nav `aria-current` syncing, Escape-to-close sidebar behavior, semantic footer markup, and cleaner assistive-state handling in the carousel and icon set.
- Ran a headless Chromium render sanity check after the accessibility pass; no full manual browser matrix was completed.
- Completed `DII-007` by replacing the old timeline and knowledge placeholders with route boards, product preview cards, and a structured knowledge panel built from existing screenshots.
- Ran another headless Chromium render sanity check after `DII-007`; the new sections still need a manual visual review in a real browser.
- Completed `DII-009` by standardizing the public naming system to Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts, re-framing the Fast Checker hero slide as part of Startup Business Builder, and confirming the current outbound product URLs respond.

## 2026-03-24
- Completed `DII-004` by extracting the live stylesheet into `/assets/css/site.css` and the live behavior script into `/assets/js/site.js`, replacing the old inline `<style>` and `<script>` blocks in `/index.html`.
- Updated the Warewise/NorthStar destination links to the new custom domain `https://www.northstarwms.co/wms`.
- Completed `DII-008` by cleaning `tmp.html` back to valid HTML and adding an explicit archived-prototype warning so the file is no longer misleading as a pseudo-live page.
- Started `DII-014` with a browser-driven local regression against the extracted `/assets/css/site.css` and `/assets/js/site.js`.
- Found and fixed a hero regression from the CSS extraction: the carousel fallback image custom-property URLs were still HTML-relative, which made `/assets/css/site.css` request broken paths such as `/assets/css/assets/images/...`.
- Found and fixed a carousel interaction regression: clicking a dot or arrow restarted autoplay even while the carousel remained hovered or focus-within, so hover pause did not hold after direct interaction.
- Recorded a local regression matrix covering Chrome desktop, Chrome short mobile, Chrome Android-size mobile, and Chrome reduced-motion behavior, plus outbound destination spot-checks for all five product links.
- The local Firefox desktop automation attempt timed out after 12 seconds, so a hosted human pass in Firefox, Safari, Edge, and a real phone browser was split into follow-up task `DII-015`.
- Started `DII-015` and confirmed that the blocker is deployment, not browser state: `https://dii.ltd/` still serves an older inline build, returns `404` for `/assets/css/site.css`, and still exposes the old warehouse Heroku destination.
- Ran a best-available hosted smoke in Chrome and Edge against `https://dii.ltd/`; both browsers loaded the live site, but they validated the older deployed build rather than the current repo state.
- The hosted Firefox desktop launch still timed out locally, and Playwright WebKit is not installed in this environment.
- Added follow-up task `DII-016` to deploy the current repo state before resuming hosted browser QA.
