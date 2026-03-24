# Next Task

## DII-016
- Title: Deploy the current extracted-asset build before hosted QA resumes
- Priority: P1 High
- Status: TODO
- Area: Release / deployment

## Why This Is Next
- `DII-015` is now blocked because `https://dii.ltd/` is still serving an older inline build rather than the current extracted-asset repo state.
- The hosted domain returns `404` for `/assets/css/site.css`, does not include the extracted asset tags in the HTML, and still exposes the old warehouse destination.
- Until deployment is synced, any hosted browser matrix would be validating the wrong build.

## Relevant Files
- `/CNAME`
- `/index.html`
- `/assets/css/site.css`
- `/assets/js/site.js`
- `/CODEX/testing/browser_checks.md`
- `/CODEX/testing/qa_checklist.md`
- `/CODEX/project/current_priorities.md`
- `/CODEX/tasks/backlog.md`
- `/CODEX/logs/session_log.md`

## Acceptance Criteria
- `https://dii.ltd/` serves the current repo build rather than the older inline deployment.
- The hosted domain returns `200` for `/assets/css/site.css` and `/assets/js/site.js` if the extracted-asset build remains the current architecture.
- The hosted page reflects the current repo state, including the Warewise/NorthStar destination and current product naming, so `DII-015` can be rerun meaningfully.
