# Project Overview

## What This Repo Is
`dii.ltd` is a static marketing site for Dhruvi Infinity Inspiration Ltd. The current implementation is a one-page homepage that presents DII as the parent brand above several related tools and content directions, including the new DII Accounts finance layer.

## Current Codebase Shape
- `/index.html`: main and only production page
- `/assets/css/site.css`: extracted production stylesheet
- `/assets/js/site.js`: extracted production interaction layer
- `/robots.txt`: crawl permissions and sitemap declaration
- `/sitemap.xml`: single-page sitemap for the homepage
- `/google46d6e99a9bb78479.html`: Google Search Console verification file
- `/assets/images/`: product screenshots used in the hero carousel
- `/ILOVE.png`: open graph/social share image
- `/CNAME`: custom domain configuration for `dii.ltd`
- `/tmp.html`: archived prototype file retained as a non-production reference

## What The Homepage Currently Tries To Do
- Introduce DII as one connected ecosystem
- Explain the product family
- Show a lifecycle from idea to operations and finance
- Reserve space for a future knowledge base
- Offer contact routes by department

## Current Strengths
- Strong visual direction for a single static file
- Clear product inventory with external links, including DII Accounts, and a more consistent public naming map
- Timeline and knowledge sections now use more production-style visual boards instead of abstract placeholders
- Reusable card, button, and layout patterns already exist
- Good baseline metadata with title, description, canonical, Open Graph, Twitter tags, JSON-LD schema, and crawl files

## Current Weaknesses
- CSS and JS are now extracted, but they still live as one large stylesheet and one large script tied to a single page
- Contact flow is still limited to `mailto:` rather than a form, even though the lead path is now clearer
- The site is still a single-page homepage, which limits long-tail SEO until real content pages exist
- The knowledge area now looks more finished, but the underlying content pages and real article library still do not exist
