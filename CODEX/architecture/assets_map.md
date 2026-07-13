# Assets Map

## Domain And Root Assets
- `/CNAME`: `dii.ltd`
- `/ILOVE.png`: 1536x1024 PNG, retained as the current favicon/logo image, about 1.8 MiB

## Live Code Assets
- `/assets/css/site.css`
- `/assets/js/site.js`

These two files now hold the extracted production stylesheet and interaction logic that were previously embedded directly inside `/index.html`.

## Homepage Image Assets
- `/assets/images/dhruviinfinity.jpg`: 3840x2160 JPEG
- `/assets/images/dhruviinfinity.webp`: 1200x675 WebP
- `/assets/images/ifv.jpg`: 3811x1843 JPEG
- `/assets/images/ifv.webp`: 1200x580 WebP
- `/assets/images/dhruviinfinity-fast-checker.jpg`: 2074x1494 JPEG
- `/assets/images/dhruviinfinity-fast-checker.webp`: 1200x864 WebP
- `/assets/images/dhruviinfinity-fast-checker-1.jpg`: 2074x1494 JPEG
- `/assets/images/DIIAccounts.jpg`: 1875x1200 JPEG
- `/assets/images/dii-social-preview.png`: 1200x630 PNG
- `/assets/images/dii-social-preview.svg`: 1200x630 SVG source

These files are the current homepage image assets, metadata image asset, and editable social-card source kept in the repo.

## Current Usage
- Hero carousel:
  - `/assets/images/dhruviinfinity.jpg`
  - `/assets/images/ifv.jpg`
  - `/assets/images/dhruviinfinity-fast-checker.jpg`
  - `/assets/images/DIIAccounts.jpg`
- Timeline and knowledge visuals:
  - `/assets/images/dhruviinfinity.jpg`
  - `/assets/images/ifv.jpg`
  - `/assets/images/dhruviinfinity-fast-checker-1.jpg`
  - `/assets/images/DIIAccounts.jpg`
- Social preview:
  - `/assets/images/dii-social-preview.png`
  - `/assets/images/dii-social-preview.svg` is the editable source for the PNG social card

## Unused Image Variants
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
- As of `DII-036`, all 11 live homepage `<img>` tags include accurate intrinsic `width` and `height` attributes from their real source files. The `<picture>` WebP sources preserve the same aspect ratios as the JPEG fallback files.
- `ILOVE.png` is much larger than the carousel WebP assets and may be worth optimizing later if it remains the favicon/logo source.
- `dii-social-preview.png` is a purpose-built 1200x630 Open Graph/Twitter card generated from `dii-social-preview.svg`; it should stay factual and mention only supported homepage routes.
