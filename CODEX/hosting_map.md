# Hosting Map

## Repository
- Local path: `/home/maciej-sypniewski/Projects/dii.ltd`
- Remote: `git@github.com:msypniewski511/dii.ltd.git`
- Default branch: `main`

## Site Architecture
- Framework: none; plain static HTML/CSS/JavaScript
- Package manager: none
- Build command: none
- Output directory: repository root
- Production entrypoint: `/index.html`
- Assets: `/assets/css/site.css`, `/assets/js/site.js`, `/assets/images/`

## GitHub Pages
- Current evidence: `https://dii.ltd/` returns `HTTP/2 200` from `GitHub.com`.
- Deployment model: inferred branch/root GitHub Pages publishing.
- Workflow: none present under `.github/workflows/`.
- Pages artifact: repository root.
- Plain-static marker: `/.nojekyll`.

## Custom Domain
- Canonical domain: `dii.ltd`
- CNAME file: `/CNAME`
- CNAME contents: `dii.ltd`
- `www.dii.ltd`: not configured here as a separate canonical site.
- DNS status: external; verify manually with DNS/provider tools after deployment if needed.
- HTTPS status: live HTTPS currently responds for `https://dii.ltd/`; recheck after deployment.

## Safe Deployment Procedure
1. Review local diff.
2. Stage named files only.
3. Commit.
4. Push `main` to `origin`.
5. Wait for GitHub Pages to update.
6. Verify hosted HTML no longer contains the old address.

## Rollback Procedure
- Revert the specific address/hosting commit with a normal `git revert <commit>`.
- Push the revert to `origin/main`.
- Do not change DNS for a content rollback.
