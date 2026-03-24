# Blocked

## Current Blocked Tasks

### DII-015
- Title: Record a hosted manual cross-browser pass outside local Chrome automation
- Area: QA / cross-browser compatibility
- Priority: P2 Medium
- Status: BLOCKED
- Dependencies: DII-014, DII-016
- Notes: As of 2026-03-24, `https://dii.ltd/` is still serving an older inline build. `/assets/css/site.css` returns `404`, the hosted HTML does not load the extracted assets, and the warehouse card still points to `https://warewise-8b381130a046.herokuapp.com/`.

## Notes
- Finish `DII-016` first, then rerun the hosted browser pass on the deployed domain.
