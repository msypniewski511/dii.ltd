# Next Task

## DII-015
- Title: Record a hosted manual cross-browser pass outside local Chrome automation
- Priority: P2 Medium
- Status: TODO
- Area: QA / cross-browser compatibility

## Why This Is Next
- `DII-016` has now synced the live deployment to the current repo state, so hosted QA can validate the right build again.
- Chrome and Edge live smoke checks already confirm that the extracted asset tags and NorthStar destination are now present on `https://dii.ltd/`.
- The remaining quality gap is the still-unrecorded human pass in Firefox, Safari, Edge, and at least one real phone browser.

## Relevant Files
- `/index.html`
- `/assets/css/site.css`
- `/assets/js/site.js`
- `/CODEX/testing/browser_checks.md`
- `/CODEX/testing/qa_checklist.md`
- `/CODEX/project/current_priorities.md`
- `/CODEX/tasks/backlog.md`
- `/CODEX/logs/session_log.md`

## Acceptance Criteria
- A hosted manual pass is recorded for Firefox, Safari, Edge, and at least one real phone browser in `/CODEX/testing/browser_checks.md`.
- Any browser-specific regression is either fixed or logged clearly for follow-up.
- QA notes are updated so future sessions know which parts of the browser matrix are human-verified versus automated smoke coverage.
