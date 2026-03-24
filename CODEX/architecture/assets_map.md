# Assets Map

## Domain And Root Assets
- `/CNAME`: `dii.ltd`
- `/ILOVE.png`: 1536x1024 PNG, used as current `og:image`, about 1.8 MiB

## Live Code Assets
- `/assets/css/site.css`
- `/assets/js/site.js`

These two files now hold the extracted production stylesheet and interaction logic that were previously embedded directly inside `/index.html`.

## Homepage Image Assets
- `/assets/images/dhruviinfinity.jpg`
- `/assets/images/dhruviinfinity.webp`
- `/assets/images/ifv.jpg`
- `/assets/images/ifv.webp`
- `/assets/images/dhruviinfinity-fast-checker.jpg`
- `/assets/images/dhruviinfinity-fast-checker.webp`
- `/assets/images/DIIAccounts.jpg`

These seven files are the current homepage image assets referenced in `/index.html`.

## Current Usage
- Hero carousel:
  - `/assets/images/dhruviinfinity.jpg`
  - `/assets/images/ifv.jpg`
  - `/assets/images/dhruviinfinity-fast-checker.jpg`
  - `/assets/images/DIIAccounts.jpg`
- Timeline and knowledge visuals:
  - `/assets/images/dhruviinfinity.jpg`
  - `/assets/images/ifv.jpg`
  - `/assets/images/DIIAccounts.jpg`

## Unused Image Variants
- `/assets/images/dhruviinfinity-fast-checker-1.jpg`
- `/assets/images/dhruviinfinity-fast-checker-1.webp`
- `/assets/images/dhruviinfinity-fast-checker-2.jpg`
- `/assets/images/dhruviinfinity-fast-checker-2.webp`

These appear to be alternate screenshots not currently used by the live page.

## Asset Notes
- As of 2026-03-24, the live page loads its main CSS and JS from `/assets/css/site.css` and `/assets/js/site.js` rather than inline blocks in `/index.html`.
- Carousel images use `<picture>` with WebP preferred and JPEG fallback.
- Timeline and knowledge panels now reuse existing JPEG screenshots to replace placeholder visuals without adding new asset files.
- `DIIAccounts.jpg` is currently the only carousel image without a paired WebP variant.
- Carousel image URLs in `/index.html` are repo-relative (`assets/...`) so they work in direct local file previews as well as standard hosted root paths.
- The hero slides also use the JPEG assets as CSS background-image fallbacks for more robust rendering.
- `width` and `height` attributes are not set on the `<img>` tags.
- `ILOVE.png` is much larger than the carousel WebP assets and may be worth optimizing later.
