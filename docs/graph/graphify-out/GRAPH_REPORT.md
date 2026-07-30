# Graph Report - docs/graph  (2026-07-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 35 nodes · 38 edges · 8 communities (5 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d63e27d5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- seanburman.com
- Staged design: SaaS landing → architecture hero → calling card
- Contact page (digital calling card)
- Homepage
- seanburman.com custom domain
- Mobile-first Call + Add to Contacts
- Desktop QR code
- Custom Business Software & Automation

## God Nodes (most connected - your core abstractions)
1. `Contact page (digital calling card)` - 11 edges
2. `seanburman.com` - 10 edges
3. `Homepage` - 5 edges
4. `seanburman.com Design Thesis` - 4 edges
5. `Staged design: SaaS landing → architecture hero → calling card` - 4 edges
6. `seanburman.com custom domain` - 3 edges
7. `I build practical software around the way your business works, and the places where it could work better.` - 2 edges
8. `Custom Business Software & Automation` - 2 edges
9. `Dark moody architecture hero` - 2 edges
10. `GitHub Pages Actions` - 2 edges

## Surprising Connections (you probably didn't know these)
- `seanburman.com Design Thesis` --documents--> `seanburman.com`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 1 → community 0_
- `seanburman.com` --includes--> `Contact page (digital calling card)`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 2_
- `seanburman.com` --published_on--> `seanburman.com custom domain`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 4_
- `seanburman.com` --includes--> `Homepage`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 0 → community 3_
- `Homepage` --uses_visual--> `Dark moody architecture hero`  [EXTRACTED]
  docs/thesis.txt → docs/thesis.txt  _Bridges community 3 → community 1_

## Communities (8 total, 3 thin omitted)

### Community 0 - "seanburman.com"
Cohesion: 0.22
Nodes (9): Pages env still allowed only master after rename to main, Default branch main, seanburman.com, seanbman/seanburman.com, Vite base /, GitHub Pages Actions, React, react-router (+1 more)

### Community 1 - "Staged design: SaaS landing → architecture hero → calling card"
Cohesion: 0.33
Nodes (7): Staged design: SaaS landing → architecture hero → calling card, seanburman.com Design Thesis, docs/ui inspiration images, Dark moody architecture hero, landing_inspiration.png, Open questions: case studies, scheduling, design system, DNS drift, assistant context, Credible consulting presence without marketing clutter

### Community 2 - "Contact page (digital calling card)"
Cohesion: 0.33
Nodes (6): Contact page (digital calling card), info@seanburman.com, LinkedIn profile, +1 368 997 4329, Calling card not form, sean-burman.vcf / Add to Contacts

### Community 3 - "Homepage"
Cohesion: 0.50
Nodes (4): I build practical software around the way your business works, and the places where it could work better., Cormorant Garamond + Outfit, Custom software, engineered for the realities of your business., Homepage

### Community 4 - "seanburman.com custom domain"
Cohesion: 0.67
Nodes (3): public/CNAME, Squarespace DNS blocked resolution, seanburman.com custom domain

## Knowledge Gaps
- **19 isolated node(s):** `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.`, `Cormorant Garamond + Outfit`, `React` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `seanburman.com` connect `seanburman.com` to `Staged design: SaaS landing → architecture hero → calling card`, `Contact page (digital calling card)`, `Homepage`, `seanburman.com custom domain`?**
  _High betweenness centrality (0.731) - this node is a cross-community bridge._
- **Why does `Contact page (digital calling card)` connect `Contact page (digital calling card)` to `seanburman.com`, `Homepage`, `Mobile-first Call + Add to Contacts`, `Desktop QR code`, `Custom Business Software & Automation`?**
  _High betweenness centrality (0.557) - this node is a cross-community bridge._
- **Why does `seanburman.com Design Thesis` connect `Staged design: SaaS landing → architecture hero → calling card` to `seanburman.com`?**
  _High betweenness centrality (0.244) - this node is a cross-community bridge._
- **What connects `seanbman/seanburman.com`, `Credible consulting presence without marketing clutter`, `Custom software, engineered for the realities of your business.` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._