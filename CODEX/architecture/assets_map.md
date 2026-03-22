# Assets Map

## Domain And Root Assets
- `/CNAME`: `dii.ltd`
- `/ILOVE.png`: 1536x1024 PNG, used as current `og:image`, about 1.8 MiB

## Homepage Image Assets
- `/assets/images/dhruviinfinity.jpg`
- `/assets/images/dhruviinfinity.webp`
- `/assets/images/ifv.jpg`
- `/assets/images/ifv.webp`
- `/assets/images/dhruviinfinity-fast-checker.jpg`
- `/assets/images/dhruviinfinity-fast-checker.webp`
- `/assets/images/DIIAccounts.jpg`

These seven files are the assets currently referenced by the hero carousel in `/index.html`.

## Unused Image Variants
- `/assets/images/dhruviinfinity-fast-checker-1.jpg`
- `/assets/images/dhruviinfinity-fast-checker-1.webp`
- `/assets/images/dhruviinfinity-fast-checker-2.jpg`
- `/assets/images/dhruviinfinity-fast-checker-2.webp`

These appear to be alternate screenshots not currently used by the live page.

## Asset Notes
- Carousel images use `<picture>` with WebP preferred and JPEG fallback.
- `DIIAccounts.jpg` is currently the only carousel image without a paired WebP variant.
- Carousel image URLs in `/index.html` are repo-relative (`assets/...`) so they work in direct local file previews as well as standard hosted root paths.
- The hero slides also use the JPEG assets as CSS background-image fallbacks for more robust rendering.
- `width` and `height` attributes are not set on the `<img>` tags.
- `ILOVE.png` is much larger than the carousel WebP assets and may be worth optimizing later.
