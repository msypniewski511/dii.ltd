# Performance Notes

## Current Risks
- `/index.html` is very large and contains all HTML, CSS, and JS inline.
- Ionicons, GSAP, and ScrollTrigger are loaded from `unpkg.com`, adding third-party dependency weight.
- `ILOVE.png` used for social preview is about 1.8 MiB.
- Hero images use `picture`, which is good, but the HTML does not set intrinsic `width` and `height`.
- Unused alternate screenshots exist in `/assets/images/` and add repo noise.

## Current Wins
- Hero images provide WebP sources with JPEG fallback.
- Only one production page exists, so there is no multi-page duplication cost yet.
- Motion is disabled when `prefers-reduced-motion: reduce` is true.

## Not Yet Measured
- No Lighthouse run recorded
- No Core Web Vitals measurement recorded
- No network waterfall review recorded

## Practical Next Steps
- Fix UX/copy issues first.
- After structure stabilizes, extract CSS/JS into cacheable assets and review CDN dependency tradeoffs.
