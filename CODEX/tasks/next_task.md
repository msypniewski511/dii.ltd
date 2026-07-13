# Next Task

## DII-ADDRESS-DEPLOY-VERIFY
- Title: Review, publish, and verify the corrected public company address
- Priority: P0 Urgent
- Status: TODO
- Area: Public website / GitHub Pages / business verification

## Why This Is Next
- Lloyds has put the business-account application on hold because the public website address did not match the current registered/trading address.
- The local static files now contain the corrected address, but the hosted GitHub Pages site will still show the old address until the named files are reviewed, committed, pushed, and refreshed.
- This must happen before lower-priority repo-local polish such as favicon optimization.

## Relevant Files
- `/index.html`
- `/tmp.html`
- `/.nojekyll`
- `/CNAME`
- `/sitemap.xml`
- `/CODEX/HANDOFF.md`
- `/CODEX/hosting_map.md`
- `/CODEX/content_map.md`
- `/CODEX/architecture/seo_map.md`
- `/CODEX/testing/browser_checks.md`
- `/CODEX/project/current_priorities.md`
- `/CODEX/tasks/backlog.md`
- `/CODEX/logs/session_log.md`

## Acceptance Criteria
- Local browser preview shows `264 North Circular Road, London, NW10 0JT, United Kingdom` in visible contact/footer content.
- Local and hosted homepage source contain no `Paul Street`, `86-90`, `86–90`, or `EC2A 4NE` after deployment.
- Organization JSON-LD uses `264 North Circular Road` and `NW10 0JT`.
- `https://dii.ltd/` loads from GitHub Pages after push.
- DNS is not changed during this verification task.

## Next Lower-Priority Task After Address Verification
- `DII-037` Replace oversized favicon source with a lightweight icon asset.
