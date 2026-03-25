# Blocked

## Current Blocked Tasks
- `DII-017` Record the remaining physical-phone hosted QA after WebKit coverage
  - Blocker: the WebKit portion is now covered, but no physical phone browser is attached to this environment and `adb` currently reports no available device path for manual verification.

## Notes
- Deployment drift is no longer a blocker after `DII-016`.
- The remaining QA gap is now only real-device phone access rather than a repo-side defect.
