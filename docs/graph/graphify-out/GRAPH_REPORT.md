# Graph Report - docs/graph  (2026-07-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 41 nodes · 47 edges · 9 communities (6 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f038b9bd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- seanburman.com
- Staged design: SaaS landing → architecture hero → calling card
- Contact page (digital calling card)
- Below-the-fold business narrative
- Homepage
- Pages env still allowed only master after rename to main
- Mobile-first Call + Add to Contacts
- Desktop QR code
- Custom Business Software & Automation

## God Nodes (most connected - your core abstractions)
1. `Contact page (digital calling card)` - 12 edges
2. `seanburman.com` - 10 edges
3. `Below-the-fold business narrative` - 7 edges
4. `Homepage` - 6 edges
5. `seanburman.com Design Thesis` - 4 edges
6. `Staged design: SaaS landing → architecture hero → calling card` - 4 edges
7. `seanburman.com custom domain` - 3 edges
8. `I build practical software around the way your business works, and the places where it could work better.` - 2 edges
9. `Custom Business Software & Automation` - 2 edges
10. `Dark moody architecture hero` - 2 edges

## Surprising Connections (you probably didn't know these)
- `seanburman.com Design Thesis` --documents--> `seanburman.com`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 1 → community 0_
- `seanburman.com` --includes--> `Contact page (digital calling card)`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 2_
- `seanburman.com` --includes--> `Homepage`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 4_
- `seanburman.com` --deploys_via--> `GitHub Pages Actions`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 5_
- `Homepage` --uses_visual--> `Dark moody architecture hero`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 4 → community 1_

## Communities (9 total, 3 thin omitted)

### Community 0 - "seanburman.com"
Cohesion: 0.22
Nodes (9): public/CNAME, Squarespace DNS blocked resolution, seanburman.com custom domain, seanburman.com, seanbman/seanburman.com, Vite base /, React, react-router (+1 more)

### Community 1 - "Staged design: SaaS landing → architecture hero → calling card"
Cohesion: 0.33
Nodes (7): Staged design: SaaS landing → architecture hero → calling card, seanburman.com Design Thesis, docs/ui inspiration images, Dark moody architecture hero, landing_inspiration.png, Open questions: case studies, scheduling, design system, DNS drift, assistant context, Credible consulting presence without marketing clutter

### Community 2 - "Contact page (digital calling card)"
Cohesion: 0.33
Nodes (6): Contact page (digital calling card), info@seanburman.com, LinkedIn profile, +1 368 997 4329, Calling card not form, sean-burman.vcf / Add to Contacts

### Community 3 - "Below-the-fold business narrative"
Cohesion: 0.40
Nodes (6): Below-the-fold business narrative, Identify bottlenecks, build efficiency, conform to the business, Plain trade language; never 'consulting', Sound familiar? recognizable bottleneck list, How it starts: conversation, close look, one small thing, The work: find the bottleneck, build the fix, make it fit

### Community 4 - "Homepage"
Cohesion: 0.50
Nodes (4): I build practical software around the way your business works, and the places where it could work better., Cormorant Garamond + Outfit, Custom software, engineered for the realities of your business., Homepage

### Community 5 - "Pages env still allowed only master after rename to main"
Cohesion: 0.67
Nodes (3): Pages env still allowed only master after rename to main, Default branch main, GitHub Pages Actions

## Knowledge Gaps
- **20 isolated node(s):** `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.`, `Cormorant Garamond + Outfit`, `React` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `seanburman.com` connect `seanburman.com` to `Staged design: SaaS landing → architecture hero → calling card`, `Contact page (digital calling card)`, `Homepage`, `Pages env still allowed only master after rename to main`?**
  _High betweenness centrality (0.600) - this node is a cross-community bridge._
- **Why does `Contact page (digital calling card)` connect `Contact page (digital calling card)` to `seanburman.com`, `Below-the-fold business narrative`, `Homepage`, `Mobile-first Call + Add to Contacts`, `Desktop QR code`, `Custom Business Software & Automation`?**
  _High betweenness centrality (0.504) - this node is a cross-community bridge._
- **Why does `Homepage` connect `Homepage` to `seanburman.com`, `Staged design: SaaS landing → architecture hero → calling card`, `Below-the-fold business narrative`?**
  _High betweenness centrality (0.247) - this node is a cross-community bridge._
- **What connects `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._