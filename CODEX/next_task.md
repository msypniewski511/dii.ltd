# Next Task

## DII-ADDRESS-DEPLOY-VERIFY
- Status: TODO
- Priority: P0
- Area: Public website / GitHub Pages / business verification

## Task
After reviewing the local changes, commit and push the named address/hosting files, wait for GitHub Pages to refresh, then verify the hosted website no longer displays the Paul Street address.

## Acceptance Criteria
- `https://dii.ltd/` loads.
- Footer/contact/proof copy shows `264 North Circular Road, London, NW10 0JT, United Kingdom`.
- Homepage JSON-LD contains `264 North Circular Road` and `NW10 0JT`.
- Hosted page search returns no `Paul Street`, `86-90`, `86–90`, or `EC2A 4NE`.
- No DNS changes are made during verification.

See also: `/CODEX/tasks/next_task.md`.
