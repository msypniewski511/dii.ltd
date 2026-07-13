# Content Map

## Company Details Source
- Legal name: `DHRUVI INFINITY INSPIRATION LTD`
- Public brand: `DII Ltd` / `dii.ltd`
- Company number: `16113201`
- Current registered and trading address:

```text
264 North Circular Road
London
NW10 0JT
United Kingdom
```

## Address Source Of Truth
- Human-readable current address for this static site is documented here and in `/CODEX/HANDOFF.md`.
- The live HTML is still plain static, so public display locations must be kept in sync manually unless a future templating/build step is introduced.

## Public Address Locations
- `/index.html`: Organization JSON-LD postal address.
- `/index.html`: sidebar footer.
- `/index.html`: hero proof card.
- `/index.html`: product proof band.
- `/index.html`: contact meta block.
- `/tmp.html`: archived prototype contact line, retained only because it remains reachable.

## Footer
- Current footer/contact-visible address should use the compact form:
  `264 North Circular Road, London, NW10 0JT, United Kingdom`.

## Contact Page
- There is no standalone contact page. The contact experience is the `#contact` section in `/index.html`.

## Legal Pages
- No standalone privacy, terms, cookie, accessibility, or legal notice pages currently exist in this static repo.

## Metadata And Structured Data
- `/index.html` includes Open Graph, Twitter metadata, and Organization/WebSite/WebPage JSON-LD.
- The Organization JSON-LD postal address must match visible content.

## Sitemap And Robots
- `/sitemap.xml` lists `https://dii.ltd/`.
- `/robots.txt` allows crawling and references the sitemap.

## Product Links
- Product links remain external or anchor-based from the homepage. This pass did not change product routes.

## Remaining Stale References
- Other local repositories contain Paul Street fixtures or stale references, especially DII Accounts variants and `startup-builder`. They were identified but not modified in this static-site task.
