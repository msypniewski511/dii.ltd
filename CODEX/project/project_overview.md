# Project Overview

## What This Repo Is
`dii.ltd` is a static marketing site for Dhruvi Infinity Inspiration Ltd. The current implementation is a one-page homepage that presents DII as the parent brand above several related tools and content directions, including the new DII Accounts finance layer.

## Current Codebase Shape
- `/index.html`: main and only production page
- `/assets/images/`: product screenshots used in the hero carousel
- `/ILOVE.png`: open graph/social share image
- `/CNAME`: custom domain configuration for `dii.ltd`
- `/tmp.html`: earlier prototype file, not production-safe in its current state

## What The Homepage Currently Tries To Do
- Introduce DII as one connected ecosystem
- Explain the product family
- Show a lifecycle from idea to operations and finance
- Reserve space for a future knowledge base
- Offer contact routes by department

## Current Strengths
- Strong visual direction for a single static file
- Clear product inventory with external links, including DII Accounts
- Reusable card, button, and layout patterns already exist
- Good baseline metadata for title, description, Open Graph, and viewport

## Current Weaknesses
- Several sections still use abstract placeholder visuals even though the live copy is now visitor-facing
- CSS and JS are embedded in one large HTML file, which hurts maintainability
- Contact flow is still limited to `mailto:` rather than a form, even though the lead path is now clearer
- SEO structure is basic and missing canonical, Twitter, and schema support
