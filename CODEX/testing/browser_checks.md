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
- `https://dii.ltd/` is not serving the current repo build:
  - `https://dii.ltd/assets/css/site.css` returns `404` from GitHub Pages
  - The hosted HTML does not include `<link rel="stylesheet" href="assets/css/site.css">` or `<script src="assets/js/site.js"></script>`
  - The hosted page still shows older public state such as `NorthStar WMS` copy and the old warehouse destination `https://warewise-8b381130a046.herokuapp.com/`
- Best-available hosted browser smoke from this environment:
  - Chrome desktop live site: PASS as a smoke check, but it is validating the older deployed build
  - Edge desktop live site: PASS as a smoke check, but it is validating the older deployed build
  - Firefox desktop live site: BLOCKED locally, browser launch timed out after 10 seconds
  - WebKit desktop live site: BLOCKED locally, Playwright WebKit browser is not installed

## Current Blocker
- `DII-015` cannot be truthfully closed until the current repo state is deployed to `https://dii.ltd/`
- Hosted manual QA in Firefox, Safari, Edge, and a real phone browser should happen only after the deployed site serves the extracted asset build and current product/link state

## Useful Evidence
- Hosted source check confirmed current live content but older deployment wiring
- Hosted product smoke showed:
  - `DII Accounts`: present
  - `Warewise`: absent
  - `NorthStar WMS`: present
  - Warehouse product link still points to `https://warewise-8b381130a046.herokuapp.com/`
