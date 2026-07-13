# Handoff

## 2026-07-13 Recovery Snapshot
- Selected repository: `/home/maciej-sypniewski/Projects/dii.ltd`
- Remote: `git@github.com:msypniewski511/dii.ltd.git`
- Branch: `main`
- Site type: plain static HTML/CSS/JavaScript
- Live source: `/index.html`
- Assets: `/assets/css/site.css`, `/assets/js/site.js`, `/assets/images/`
- Hosting: GitHub Pages, root static publishing, canonical domain `dii.ltd`
- Domain file: `/CNAME`
- Plain-static marker: `/.nojekyll`

## Source-Of-Truth Evidence
- Root `CNAME` contains `dii.ltd`.
- `https://dii.ltd/` returns `HTTP/2 200` from `GitHub.com`.
- Repository remote is named for `dii.ltd`.
- Existing CODEX docs identify `/index.html` as the live source of truth.

## Current Address
Use this address for public/current company details:

```text
264 North Circular Road
London
NW10 0JT
United Kingdom
```

Compact display form:

```text
264 North Circular Road, London, NW10 0JT, United Kingdom
```

## What Changed In This Pass
- Replaced public old-address output in `/index.html`.
- Updated Organization JSON-LD postal address.
- Replaced the reachable archived prototype contact address in `/tmp.html`.
- Added `/.nojekyll`.
- Updated `/sitemap.xml` `lastmod`.
- Added root CODEX maps for hosting, content, product state, feature inventory, and documentation.

## Remaining Work
- Review locally in a browser, then commit and push named files only.
- Let GitHub Pages refresh after push.
- Verify `https://dii.ltd/` no longer contains Paul Street after deployment.
- DNS and HTTPS remain external verification items; do not change DNS from Codex unless explicitly asked.
