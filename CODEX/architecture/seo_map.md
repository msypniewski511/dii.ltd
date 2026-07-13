# SEO Map

## 2026-07-13 Address Correction
- Homepage Organization JSON-LD now uses `264 North Circular Road`, `London`, `NW10 0JT`, `GB`.
- Visible homepage address copy now matches the structured data.
- `/sitemap.xml` `lastmod` is updated to `2026-07-13` for the public address correction.
- No new standalone legal, privacy, terms, or contact pages were added in this pass.

## Current Baseline

### Page
- URL intent: homepage for `https://dii.ltd/`
- Page count: one production page
- Domain: `dii.ltd` via `/CNAME`
- Search Console verification: `/google46d6e99a9bb78479.html` exists at repo root

### Existing Meta In `/index.html`
- `<title>`: `Dhruvi Infinity Inspiration Ltd. | Build, Launch & Scale with Connected SaaS`
- `meta[name="description"]`: present
- `meta[name="robots"]`: present
- `meta[name="theme-color"]`: present
- `link[rel="canonical"]`: present
- `link[rel="icon"]`: present
- Open Graph:
  - `og:title`
  - `og:description`
  - `og:site_name`
  - `og:type`
  - `og:url`
  - `og:image`
  - `og:image:type`
  - `og:image:width`
  - `og:image:height`
  - `og:image:alt`
- Twitter:
  - `twitter:card`
  - `twitter:title`
  - `twitter:description`
  - `twitter:image`
  - `twitter:image:alt`
- JSON-LD:
  - `Organization`
  - `WebSite`
  - `WebPage`
  - `WebPage.hasPart` route entries for Startup Business Builder, IFV Builder, Rotaplan, Warewise, and DII Accounts, each using a real homepage anchor URL and a factual homepage-supported description

### Crawl Files
- `/robots.txt`: present
- `/sitemap.xml`: present

### Heading Structure
- One `h1` in hero
- Section-level `h2` headings for each homepage block
- Nested `h3` headings in cards, product entries, timeline rows, and contact cards

## Internal Linking
- Internal links are all on-page anchor jumps
- Product links go directly to external destinations rather than internal detail pages
- The knowledge section now includes a homepage-first content roadmap that maps five planned content lanes to existing product anchors
- No standalone article or content pages exist yet inside this repo

## SEO Gaps
- No dedicated content pages yet for long-tail discovery
- Single-page architecture limits how much search intent can be captured without additional landing pages or knowledge content

## Near-Term SEO Work
- Keep the title, meta description, H1, and schema aligned as homepage copy evolves
- Use the first knowledge paths roadmap as the source for future static content pages around founder planning, IFV preparation, operations workflows, warehouse control, and finance operations
- Keep `/assets/images/dii-social-preview.png` aligned with homepage route names if the public product map changes
