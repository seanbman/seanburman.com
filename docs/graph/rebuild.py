#!/usr/bin/env python3
"""Rebuild the thesis concept graph with graphify (no LLM required)."""
from __future__ import annotations

import json
from pathlib import Path

from graphify.build import build_from_json
from graphify.cluster import cluster
from graphify.export import to_json, to_html

ROOT = Path(__file__).resolve().parents[2]
EXTRACTION = Path(__file__).resolve().parent / "thesis_extraction.json"
OUT = Path(__file__).resolve().parent / "graphify-out"


def main() -> None:
    extraction = json.loads(EXTRACTION.read_text(encoding="utf-8"))
    OUT.mkdir(parents=True, exist_ok=True)
    G = build_from_json(extraction, directed=False, root=str(ROOT))
    communities = cluster(G)
    labels = {cid: f"Community {cid}" for cid in communities}
    ok = to_json(G, communities, str(OUT / "graph.json"), force=True, community_labels=labels)
    if not ok:
        raise SystemExit("refused to write graph.json")
    to_html(G, communities, str(OUT / "graph.html"), community_labels=labels)
    print(
        f"wrote {OUT / 'graph.json'}: "
        f"{G.number_of_nodes()} nodes, {G.number_of_edges()} edges, "
        f"{len(communities)} communities"
    )


if __name__ == "__main__":
    main()
