# Graph Report - docs/graph-code  (2026-07-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 91 nodes · 84 edges · 12 communities (10 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d63e27d5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- compilerOptions
- devDependencies
- App.tsx
- package.json
- dependencies
- lib
- tsconfig.json

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 15 edges
3. `scripts` - 4 edges
4. `lib` - 4 edges
5. `react` - 2 edges
6. `react-dom` - 2 edges
7. `react-router-dom` - 2 edges
8. `@types/react` - 2 edges
9. `@types/react-dom` - 2 edges
10. `@vitejs/plugin-react` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (12 total, 2 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+10 more)

### Community 2 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react, @types/react, @types/react-dom (+3 more)

### Community 4 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, preview, type, version

### Community 5 - "dependencies"
Cohesion: 0.29
Nodes (7): dependencies, react, react-dom, react-router-dom, react, react-dom, react-router-dom

### Community 7 - "lib"
Cohesion: 0.50
Nodes (4): lib, DOM, DOM.Iterable, ES2020

## Knowledge Gaps
- **51 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `compilerOptions` to `lib`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._