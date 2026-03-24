# Browser Checks

## Local Repo-State Pass
- Date: 2026-03-24
- Method: local browser-driven regression against `/index.html` served over `http://127.0.0.1`
- Coverage recorded:
  - Chrome desktop `1440x1024`: PASS
  - Chrome short mobile `390x640`: PASS
  - Chrome Android-size `412x732`: PASS
  - Chrome desktop with `prefers-reduced-motion: reduce`: PASS
  - Firefox desktop: BLOCKED locally, Playwright launch timed out after 12 seconds
- Fixes made during the pass:
  - Updated the hero slide CSS fallback image URLs in `/index.html` from HTML-relative `assets/images/...` to stylesheet-relative `../images/...`
  - Updated `/assets/js/site.js` so carousel autoplay no longer restarts while the carousel is still hovered or focus-within after a dot or arrow click

## Hosted Site Status
- Date checked: 2026-03-24
- `https://dii.ltd/` now serves the current extracted-asset repo build:
  - `https://dii.ltd/assets/css/site.css`: `200`
  - `https://dii.ltd/assets/js/site.js`: `200`
  - The hosted HTML now includes `<link rel="stylesheet" href="assets/css/site.css">` and `<script src="assets/js/site.js"></script>`
  - The hosted product links now include `https://www.northstarwms.co/wms`
- Best-available hosted browser smoke from this environment after deployment:
  - Chrome desktop live site: PASS
  - Edge desktop live site: PASS
  - Firefox desktop live site: BLOCKED locally, browser launch timed out after 10 seconds
  - WebKit desktop live site: BLOCKED locally, Playwright WebKit browser is not installed

## Current Blocker
- `DII-015` is no longer blocked by deployment
- The remaining work is a hosted human browser pass in Firefox, Safari, Edge, and at least one real phone browser

## Useful Evidence
- Deployment sync commit pushed to `origin/main`: `94b83eb`
- Hosted live smoke after deployment confirmed:
  - extracted CSS tag present
  - extracted JS tag present
  - `https://www.northstarwms.co/wms` present in live links
