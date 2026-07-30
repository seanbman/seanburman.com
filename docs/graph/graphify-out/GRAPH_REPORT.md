# Graph Report - docs/graph  (2026-07-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 45 nodes · 53 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1f168bdd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Staged design: SaaS landing → architecture hero → calling card
- Homepage
- Below-the-fold business narrative
- Contact page (digital calling card)
- seanburman.com
- Pages env still allowed only master after rename to main
- seanburman.com custom domain
- Mobile-first Call + Add to Contacts
- Desktop QR code
- Custom Business Software & Automation

## God Nodes (most connected - your core abstractions)
1. `Contact page (digital calling card)` - 12 edges
2. `seanburman.com` - 10 edges
3. `Below-the-fold business narrative` - 9 edges
4. `Homepage` - 7 edges
5. `seanburman.com Design Thesis` - 4 edges
6. `Staged design: SaaS landing → architecture hero → calling card` - 4 edges
7. `Sticky stacked-section takeover scroll (CSS-only)` - 4 edges
8. `seanburman.com custom domain` - 3 edges
9. `I build practical software around the way your business works, and the places where it could work better.` - 2 edges
10. `Custom Business Software & Automation` - 2 edges

## Surprising Connections (you probably didn't know these)
- `seanburman.com Design Thesis` --documents--> `seanburman.com`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 4_
- `seanburman.com` --includes--> `Contact page (digital calling card)`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 4 → community 3_
- `seanburman.com` --published_on--> `seanburman.com custom domain`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 4 → community 6_
- `seanburman.com` --includes--> `Homepage`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 4 → community 1_
- `seanburman.com` --deploys_via--> `GitHub Pages Actions`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 4 → community 5_

## Communities (10 total, 3 thin omitted)

### Community 0 - "Staged design: SaaS landing → architecture hero → calling card"
Cohesion: 0.33
Nodes (7): Staged design: SaaS landing → architecture hero → calling card, seanburman.com Design Thesis, docs/ui inspiration images, Dark moody architecture hero, landing_inspiration.png, Open questions: case studies, scheduling, design system, DNS drift, assistant context, Credible consulting presence without marketing clutter

### Community 1 - "Homepage"
Cohesion: 0.29
Nodes (7): I build practical software around the way your business works, and the places where it could work better., Cormorant Garamond + Outfit, Custom software, engineered for the realities of your business., Homepage, Measured negative sticky offsets for panels taller than the viewport, Sticky stacked-section takeover scroll (CSS-only), Static-flow fallback under reduced motion

### Community 2 - "Below-the-fold business narrative"
Cohesion: 0.38
Nodes (7): Below-the-fold business narrative, Identify bottlenecks, build efficiency, conform to the business, Plain trade language; never 'consulting', Sound familiar? recognizable bottleneck list, How it starts: conversation, close look, one small thing, The work: find the bottleneck, build the fix, make it fit, Black / white / charcoal panel rhythm

### Community 3 - "Contact page (digital calling card)"
Cohesion: 0.33
Nodes (6): Contact page (digital calling card), info@seanburman.com, LinkedIn profile, +1 368 997 4329, Calling card not form, sean-burman.vcf / Add to Contacts

### Community 4 - "seanburman.com"
Cohesion: 0.33
Nodes (6): seanburman.com, seanbman/seanburman.com, Vite base /, React, react-router, Vite

### Community 5 - "Pages env still allowed only master after rename to main"
Cohesion: 0.67
Nodes (3): Pages env still allowed only master after rename to main, Default branch main, GitHub Pages Actions

### Community 6 - "seanburman.com custom domain"
Cohesion: 0.67
Nodes (3): public/CNAME, Squarespace DNS blocked resolution, seanburman.com custom domain

## Knowledge Gaps
- **21 isolated node(s):** `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.`, `Cormorant Garamond + Outfit`, `React` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `seanburman.com` connect `seanburman.com` to `Staged design: SaaS landing → architecture hero → calling card`, `Homepage`, `Contact page (digital calling card)`, `Pages env still allowed only master after rename to main`, `seanburman.com custom domain`?**
  _High betweenness centrality (0.557) - this node is a cross-community bridge._
- **Why does `Contact page (digital calling card)` connect `Contact page (digital calling card)` to `Homepage`, `Below-the-fold business narrative`, `seanburman.com`, `Mobile-first Call + Add to Contacts`, `Desktop QR code`, `Custom Business Software & Automation`?**
  _High betweenness centrality (0.462) - this node is a cross-community bridge._
- **Why does `Homepage` connect `Homepage` to `Staged design: SaaS landing → architecture hero → calling card`, `Below-the-fold business narrative`, `seanburman.com`?**
  _High betweenness centrality (0.311) - this node is a cross-community bridge._
- **What connects `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._