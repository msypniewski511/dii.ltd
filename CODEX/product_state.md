# Product State

## LIVE / CONFIRMED
- Plain static site exists at `/index.html`.
- Live domain `https://dii.ltd/` returns `HTTP/2 200` from GitHub Pages.
- Root `CNAME` contains `dii.ltd`.
- Homepage has extracted CSS and JavaScript assets at `/assets/css/site.css` and `/assets/js/site.js`.
- Homepage includes SEO metadata, Open Graph/Twitter metadata, JSON-LD, `robots.txt`, `sitemap.xml`, and Google verification HTML.

## BUILT BUT NOT DEPLOYED
- Corrected company address in local `/index.html`.
- Corrected archived prototype contact address in local `/tmp.html`.
- Added local `/.nojekyll`.
- Updated local `/sitemap.xml` `lastmod` to `2026-07-13`.
- Added CODEX hosting/content continuity docs.

## IN PROGRESS
- Owner review and eventual named-file commit/push.
- Hosted address verification after GitHub Pages refresh.

## NOT STARTED
- Dedicated privacy, terms, cookie, accessibility, about, or contact pages. The current production site is still one homepage plus a reachable archived prototype.
- Multi-page content or knowledge articles.

## BLOCKED
- Physical-phone QA remains blocked unless a real phone/browser is available.
- HTTPS freshness and DNS correctness can only be verified against hosted deployment and external DNS records after push.

## STALE / SUPERSEDED
- `tmp.html` is an archived prototype and not the live source of truth, but it remains reachable and should not show obsolete public company details.
- Other local Rails/accounting/startup-builder repositories contain Paul Street test fixtures or stale public/legal references; they are outside this static-site pass.

## UNKNOWN
- GitHub repository Pages settings are not confirmed locally. Evidence suggests branch/root Pages because there is no workflow and the domain is already served by GitHub Pages.
