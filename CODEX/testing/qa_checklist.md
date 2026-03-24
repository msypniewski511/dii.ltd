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
- `https://dii.ltd/` is still serving an older inline build and does not expose the extracted `/assets/css/site.css` or `/assets/js/site.js` assets from the current repo state.

## Remaining Coverage Gap
- After deployment sync, Firefox, Safari, Edge, and a real phone-browser pass still need human hosted-site QA.
