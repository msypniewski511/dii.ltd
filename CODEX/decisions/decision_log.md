# Decision Log

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
