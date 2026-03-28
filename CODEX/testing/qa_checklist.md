# QA Checklist

## Core Navigation
- Verify `/assets/css/site.css` and `/assets/js/site.js` load correctly in a normal hosted page request.
- Verify the skip link moves focus to the main content.
- Verify sidebar anchor links scroll to the correct sections.
- Verify mobile menu opens, closes, and restores `aria-expanded`.
- Verify backdrop click closes the sidebar on mobile.
- Verify `Escape` closes the mobile sidebar and returns focus to the menu button.

## Hero
- Verify carousel previous/next buttons work.
- Verify dots switch slides.
- Verify autoplay pauses on hover and focus.
- Verify hero CTA buttons point to the intended sections.
- Verify the buyer-fit cards expose the intended direct route links and that those links jump to the matching product sections.

## Products
- Verify all five external product links open the correct destinations.
- Verify sidebar mini-links match the main product cards.

## Timeline
- Verify every step remains visible on desktop, tablet, and mobile.
- Verify alternating layout does not hide content at any breakpoint.
- Verify the new timeline route cards and preview tiles stay readable and balanced at all breakpoints.

## Contact
- Verify all `mailto:` links are correct.
- Verify contact cards remain legible on small screens.

## Accessibility
- Verify keyboard navigation through sidebar, carousel controls, CTAs, and contact links.
- Verify the visible focus ring appears on buttons, route pills, sidebar links, mini-links, and contact links.
- Verify the active sidebar link updates `aria-current="location"` as sections enter view.
- Verify reduced-motion mode does not autoplay or animate unnecessarily.
- Verify headings remain in a logical order after edits.

## Knowledge
- Verify the knowledge panel image, topic cards, and query chips remain legible and aligned on desktop and mobile.

## Current Known Failure
- No deployment mismatch is currently recorded after `DII-016`.

## Remaining Coverage Gap
- Best-available hosted coverage is now recorded for Chrome, Edge, Firefox, Android-size mobile emulation, iPhone-size mobile emulation, WebKit desktop, and WebKit iPhone-size mobile emulation.
- The only remaining browser-coverage gap is at least one true physical phone-browser pass, still tracked under `DII-017`.
