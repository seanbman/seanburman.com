# Graph Report - docs/graph  (2026-07-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 49 nodes · 61 edges · 9 communities (5 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0aef0ccd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- seanburman.com
- Below-the-fold business narrative
- Homepage
- Staged design: SaaS landing → architecture hero → calling card
- Contact page (digital calling card)
- Footer band: LinkedIn, GitHub, Contact
- Mobile-first Call + Add to Contacts
- Desktop QR code
- Custom Business Software & Automation

## God Nodes (most connected - your core abstractions)
1. `Contact page (digital calling card)` - 13 edges
2. `seanburman.com` - 11 edges
3. `Below-the-fold business narrative` - 9 edges
4. `Homepage` - 8 edges
5. `seanburman.com Design Thesis` - 4 edges
6. `Staged design: SaaS landing → architecture hero → calling card` - 4 edges
7. `The work: find the bottleneck, build the fix, make it fit` - 4 edges
8. `Sticky stacked-section takeover scroll (CSS-only)` - 4 edges
9. `seanburman.com custom domain` - 3 edges
10. `Sound familiar? recognizable bottleneck list` - 3 edges

## Surprising Connections (you probably didn't know these)
- `seanburman.com Design Thesis` --documents--> `seanburman.com`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 3 → community 0_
- `seanburman.com` --includes--> `Contact page (digital calling card)`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 4_
- `seanburman.com` --includes--> `Homepage`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 2_
- `Homepage` --includes--> `Footer band: LinkedIn, GitHub, Contact`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 2 → community 5_
- `Homepage` --uses_visual--> `Dark moody architecture hero`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 2 → community 3_

## Communities (9 total, 4 thin omitted)

### Community 0 - "seanburman.com"
Cohesion: 0.17
Nodes (12): Pages env still allowed only master after rename to main, Default branch main, public/CNAME, Squarespace DNS blocked resolution, seanburman.com custom domain, seanburman.com, seanbman/seanburman.com, Vite base / (+4 more)

### Community 1 - "Below-the-fold business narrative"
Cohesion: 0.31
Nodes (9): Below-the-fold business narrative, Identify bottlenecks, build efficiency, conform to the business, Plain trade language; never 'consulting', Physical work first-class: crews, trucks, materials, job sites, Scope ranges from one automation to an operation-wide system, Sound familiar? recognizable bottleneck list, How it starts: conversation, close look, one small thing, The work: find the bottleneck, build the fix, make it fit (+1 more)

### Community 2 - "Homepage"
Cohesion: 0.25
Nodes (8): I build practical software around the way your business works, and the places where it could work better., Cormorant Garamond + Outfit, Custom software, engineered for the realities of your business., Homepage, SB monogram favicon suite + web manifest (Cormorant Garamond paths), Measured negative sticky offsets for panels taller than the viewport, Sticky stacked-section takeover scroll (CSS-only), Static-flow fallback under reduced motion

### Community 3 - "Staged design: SaaS landing → architecture hero → calling card"
Cohesion: 0.33
Nodes (7): Staged design: SaaS landing → architecture hero → calling card, seanburman.com Design Thesis, docs/ui inspiration images, Dark moody architecture hero, landing_inspiration.png, Open questions: case studies, scheduling, design system, DNS drift, assistant context, Credible consulting presence without marketing clutter

### Community 4 - "Contact page (digital calling card)"
Cohesion: 0.40
Nodes (5): Contact page (digital calling card), info@seanburman.com, +1 368 997 4329, Calling card not form, sean-burman.vcf / Add to Contacts

## Knowledge Gaps
- **20 isolated node(s):** `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.`, `React`, `Vite` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `seanburman.com` connect `seanburman.com` to `Homepage`, `Staged design: SaaS landing → architecture hero → calling card`, `Contact page (digital calling card)`?**
  _High betweenness centrality (0.521) - this node is a cross-community bridge._
- **Why does `Contact page (digital calling card)` connect `Contact page (digital calling card)` to `seanburman.com`, `Below-the-fold business narrative`, `Homepage`, `Footer band: LinkedIn, GitHub, Contact`, `Mobile-first Call + Add to Contacts`, `Desktop QR code`, `Custom Business Software & Automation`?**
  _High betweenness centrality (0.423) - this node is a cross-community bridge._
- **Why does `Homepage` connect `Homepage` to `seanburman.com`, `Below-the-fold business narrative`, `Staged design: SaaS landing → architecture hero → calling card`, `Footer band: LinkedIn, GitHub, Contact`?**
  _High betweenness centrality (0.327) - this node is a cross-community bridge._
- **What connects `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._