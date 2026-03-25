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
- Best-available hosted browser-driven pass from this environment after deployment:
  - Chrome desktop `1440x1024`: PASS
  - Edge desktop `1440x1024`: PASS
  - Firefox desktop `1440x1024`: PASS
  - Chrome Android-size mobile emulation `412x732`: PASS
  - Chrome iPhone-size mobile emulation `390x844`: PASS
- Checks exercised in the hosted pass:
  - extracted asset tags present in hosted HTML and both hosted asset URLs return `200`
  - skip link focus and skip-link landing on `#mainContent`
  - hero carousel next, previous, and dot controls
  - sidebar navigation scroll and `aria-current="location"` updates
  - DII Accounts route pill jump target
  - timeline row visibility and marker count
  - contact card count and contact lead visibility
  - mobile menu open, backdrop close, and mobile nav follow behavior
  - knowledge panel visibility and topic-card count
- No hosted browser regression was reproduced in the recorded Chrome, Edge, Firefox, or mobile-emulation pass.
- A true WebKit hosted pass is now also recorded from this machine after locally staging the missing Playwright WPE runtime libraries:
  - WebKit desktop `1440x1024`: PASS
  - WebKit iPhone-size mobile emulation `390x844`: PASS
- Additional checks exercised in the hosted WebKit pass:
  - skip link focus and landing on `#mainContent`
  - hero carousel next, previous, and dot controls
  - sidebar `aria-current="location"` updates after navigation
  - DII Accounts route pill jump target
  - knowledge panel visibility and topic-card count
  - mobile menu open, backdrop close, and mobile nav follow behavior
  - timeline row visibility on iPhone-size WebKit emulation
- No WebKit-specific regression was reproduced in the hosted pass.

## Remaining External Gap
- `DII-015` remains complete as the best-available hosted Chromium/Firefox matrix from this Linux environment.
- `DII-017` has now closed the true WebKit browser gap from this machine.
- A real phone-browser pass is still unavailable here because no physical device is attached to this environment and `adb` is not available with any connected device.
- The remaining external-only follow-up is now the physical phone slice of `DII-017`.

## Useful Evidence
- Deployment sync commit pushed to `origin/main`: `94b83eb`
- Hosted live smoke after deployment confirmed:
  - extracted CSS tag present
  - extracted JS tag present
  - `https://www.northstarwms.co/wms` present in live links
- Hosted browser-driven pass artifact written locally outside the repo to `/home/maciej/pwtemp/dii-015-hosted-pass.json`
- Hosted WebKit pass artifact written locally outside the repo to `/home/maciej/pwtemp/dii-017-webkit-pass.json`
