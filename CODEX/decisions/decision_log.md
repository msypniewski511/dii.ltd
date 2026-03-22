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
