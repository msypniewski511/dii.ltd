# Performance Notes

## Current Risks
- `/index.html` is very large even though CSS and JS are now extracted into `/assets/css/site.css` and `/assets/js/site.js`.
- Ionicons, GSAP, and ScrollTrigger are loaded from `unpkg.com`, adding third-party dependency weight.
- `ILOVE.png` is still used as the favicon/logo source and is about 1.8 MiB, much larger than a favicon needs to be.
- Unused alternate screenshots exist in `/assets/images/` and add repo noise.

## Current Wins
- Hero images provide WebP sources with JPEG fallback.
- All 11 live homepage `<img>` elements now include real intrinsic `width` and `height` attributes, covering the hero carousel, timeline proof/snapshot visuals, and knowledge preview image.
- The social preview now uses a purpose-built 1200x630 PNG rather than the large legacy `ILOVE.png`.
- Only one production page exists, so there is no multi-page duplication cost yet.
- Motion is disabled when `prefers-reduced-motion: reduce` is true.

## Not Yet Measured
- No Lighthouse run recorded
- No Core Web Vitals measurement recorded
- No network waterfall review recorded

## Practical Next Steps
- Add or select a lightweight favicon asset so browsers do not need the large `ILOVE.png` for icon use.
- Run a Lighthouse or equivalent local performance baseline after favicon optimization.
- Review CDN dependency tradeoffs for Ionicons, GSAP, and ScrollTrigger if performance becomes the next focus.
