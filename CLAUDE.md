# seoreading.uk — repo brain

Astro 5 + Tailwind 4 static site, local SEO lead-gen agency site for Reading/Berkshire. Deploy: git push to `master` on GitHub (`sunnyp81/seoreading`), Cloudflare Pages git integration auto-builds (`npm run build`, output `dist`). No wrangler.toml, no manual CLI deploy step needed.

## 2026-07-07 — GSC recovery pass
- Diagnosis: NOT a demotion. Site is ~6 weeks old (files dated May 21-26 2026). Impressions tripled 1,879 to 5,319 (28d) because Google is now surfacing the site for dozens of "seo [town]" long-tail queries, but positions are mostly 60-95 (page 6-10) so clicks stay at 1. This is a young-domain authority ramp, not lost rankings, not thin content, not a technical block on the pages that do rank.
- Real finding: `/areas/` was **not indexed** ("URL is unknown to Google" per GSC inspection) despite being linked from homepage nav + footer + in the sitemap. This is the page that should be catching the Wokingham/Bracknell/Newbury/Earley/Woodley/Thatcham query variants currently spreading thin across homepage/services with terrible positions.
- Fixes shipped: added `Service` + `LocalBusiness` schema (areaServed list incl. Newbury/Thatcham, previously missing from schema) to `src/pages/areas/index.astro`; added a genuine Newbury/Thatcham subsection (previously unmentioned by name, both get real GSC impressions) with an extractable quick-answer block; added contextual internal links to `/areas/` from `src/pages/services/index.astro` and `src/pages/technical-seo-reading.astro` (both indexed, both getting impressions) to push crawl signal to the orphaned-from-Google page.
- No title/meta rewrites (out of scope this pass), no new pages, no postcode pages.
- Submitted changed URLs to Bing via `submit_url_batch`; Google indexing needs a manual "Request indexing" in GSC UI for `/areas/` since MCP has no direct index-request tool.
- Pre-existing em dashes remain in `technical-seo-reading.astro` (not introduced this pass, out of scope) — flag for a future dash cleanup pass.
- Honest read: content/schema fixes here won't move page-6-10 commercial terms to page 1 by themselves; that needs backlinks/domain age. This pass targets the one concrete indexing gap plus AI-citability for the area-specific queries.
