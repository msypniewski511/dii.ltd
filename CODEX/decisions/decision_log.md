# Decision Log

## 2026-07-13

### Preserve the existing plain-static GitHub Pages model
- Reason: the site is already live from this repository with root `index.html`, root `CNAME`, no package/build system, and GitHub Pages response headers. Adding a Pages Actions workflow would change a working branch-based model without evidence that it is needed.

### Add `.nojekyll` instead of introducing a build framework
- Reason: the repository is plain HTML/CSS/JavaScript. The safest hosting continuation is to mark the repo as plain static for GitHub Pages while preserving the existing source layout and not adding Node, npm, a generator, or a deployment workflow.

### Update the archived prototype address because it remains reachable
- Reason: `tmp.html` is explicitly non-production, but it is still a public static HTML file in the repository root. Leaving the obsolete address there could continue the bank-facing discrepancy if the file is discovered.

## 2026-03-22

### Use `/index.html` as the live source of truth
- Reason: it is the only production-ready page in the repo and contains the active HTML, CSS, and JS.

### Treat `/tmp.html` as a non-production artifact
- Reason: it represents an older concept and currently includes appended prompt text after the HTML, making it unreliable as a working reference.

### Prioritize the mobile timeline bug before broader copy or design polish
- Reason: the bug removes core explanatory content on smaller screens, which is a direct usability and conversion problem.

### Document the current system before refactoring assets
- Reason: the user explicitly requested inspection and persistent organization before broader modification.

### Fix `DII-001` with a CSS-only mobile reflow
- Reason: the problem was caused by the `920px` breakpoint hiding one timeline side. Reflowing both sides into a stacked mobile layout fixes the bug without rewriting the timeline HTML.

### Use repo-relative paths for hero carousel images
- Reason: root-relative asset URLs worked on the hosted domain but broke when `index.html` was opened directly from the filesystem. Repo-relative paths preserve both local previewing and normal hosted-root behavior for this single-page site.

### Add CSS background-image fallbacks to hero slides
- Reason: the browser could resolve the image URLs but still failed to paint the nested carousel images on the page. Putting the slide image on the article itself makes the carousel more robust than relying only on the nested `<picture>` element.

### Give the lower hero carousel panel an explicit height
- Reason: DevTools showed the resolved image source correctly, but the rendered image height was `0px`. The carousel used percentage heights under a parent with only `min-height`, so the slide chain needed a real height value to avoid collapsing.

### Complete `DII-002` without changing page structure
- Reason: the page needed customer-facing copy more than a layout refactor. Rewriting the visible text while preserving the existing section structure reduced risk and kept the task focused.

## 2026-03-27

### Use reusable audience/problem/outcome fit rows inside the existing product cards
- Reason: `DII-020` needed clearer differentiation between the five live routes, but the fastest low-risk fix was to sharpen the current grid rather than introduce a heavier comparison table or redesign the section layout.

### Use a client-side guided enquiry generator instead of adding a third-party form backend
- Reason: `DII-021` needed a lower-friction lead path, but the repo is still a static site with no existing backend or external form service. Generating a recommended inbox plus copyable draft solved the immediate friction safely without changing the stack.

### Use a compact hero fact grid instead of adding another full-width proof section above the fold
- Reason: `DII-022` needed stronger first-screen trust and buyer-fit cues, but the homepage already had a proof band lower on the page. Folding concise factual cues into the upper hero panel improved clarity without adding another structural block or bloating the scroll start.

### Use factual contact next-step cards instead of promising reply times
- Reason: `DII-023` needed more reassurance after a visitor reaches out, but the site does not currently support response-time or SLA claims. Explaining routing and the first-email brief reduced hesitation without inventing promises.

### Use a live route proof board inside Step 02 instead of rebuilding the full journey section
- Reason: `DII-024` needed stronger mid-page product proof, but the timeline structure was already working. Replacing the weaker Step 02 summary with five named route cards delivered more concrete evidence without redesigning the whole section.

### Use search-style discovery-path cards inside the existing knowledge panel instead of pretending the knowledge center is already fully shipped
- Reason: `DII-025` needed the knowledge layer to feel more concrete and searchable, but the site still needs to stay honest that this section is growing next. Previewing representative search questions and route-oriented content paths increased specificity without faking a full article library or blog index.

### Use reusable workflow signal boards and an operations proof strip instead of inventing screenshot assets for Rotaplan and Warewise
- Reason: `DII-026` needed stronger route-specific operations proof, but the repo still does not contain dedicated Rotaplan or Warewise screenshots. Reusing structured workflow boards across the products and journey sections made those routes more concrete without fabricating imagery, adding dependencies, or redesigning the page.

### Tighten the existing platform and principles copy instead of adding another new explanatory section
- Reason: `DII-027` needed the broader DII story to feel more outcome-specific, but the page already had the right structural sections. Rewriting those sections around clearer end-state results improved comprehension without increasing page length or introducing another parent-brand block.

## 2026-03-28

### Add a compact route-handoff row inside the platform section instead of duplicating the full products router
- Reason: `DII-028` needed the platform overview to become actionable, but the page already had a fuller product-selection section lower down. A lighter handoff row preserved the role of the platform section as a bridge while still giving visitors direct next-step choices.

### Add compact route chips inside the existing hero buyer-fit cards instead of building another full handoff block above the fold
- Reason: `DII-029` needed the first screen to move from audience recognition into action, but the hero already carried primary CTAs and proof. Adding small route chips inside the existing buyer-fit cards made the cards actionable without duplicating the lower products router or bloating the hero.

## 2026-04-17

### Add a light contact proof strip instead of testimonials or a case-study block
- Reason: `DII-030` needed more confidence near the final contact decision, but the homepage does not currently support testimonials, customer logos, case studies, or reply-time promises. A small factual strip beside the inbox cards reinforces the five live routes, named inbox paths, London HQ listing, and guided enquiry brief without overstating evidence.

### Keep `DII-031` homepage-first instead of adding empty content pages
- Reason: the knowledge layer needs clearer SEO/content architecture, but the repo does not yet contain real article copy or a static page pattern for individual knowledge pages. A homepage roadmap gives future sessions a concrete route plan without creating thin pages, fake articles, publication dates, authors, or a blog system that does not exist.

### Represent product paths as homepage parts, not fake product pages
- Reason: `DII-032` needed crawler clarity for the five visible product routes, but the repo is still a one-page site and should not imply standalone product pages, offers, ratings, pricing, reviews, or availability claims that are not present. Conservative `WebPage.hasPart` entries keep the structured data aligned with real anchors and visible homepage copy.

### Move focus to the prepared guided enquiry result instead of adding a modal or multi-step form
- Reason: `DII-033` needed stronger completion confidence for keyboard and assistive users without changing the static flow. A labelled focusable result region makes the generated inbox, subject, and message easier to discover after submit while preserving the current in-page form and mailto/copy actions.

### Use a dedicated social preview card while keeping `ILOVE.png` as logo/favicon
- Reason: `DII-034` needed a clearer share image, but replacing the existing logo-like `ILOVE.png` would mix favicon/logo and social-preview responsibilities. A new 1200x630 PNG generated from an editable SVG source gives Open Graph/Twitter a purpose-built card while leaving the existing logo asset untouched.

## 2026-04-18

### Fix overflow by sizing the layout pieces, not by adding more clipping
- Reason: `DII-035` found that horizontal overflow came from real layout math: desktop `.main` was viewport-wide despite being offset by the fixed sidebar, and the hero visual kept wide-panel sizing too far into narrow desktop/tablet widths. The fix keeps the existing visual system but makes `.main` subtract `--sidebar`, moves the single-column hero breakpoint to `1340px`, and resets one-column `.hero-art` aspect sizing instead of relying on additional global `overflow-x` clipping.
