"""Read queries used by the API: neighborhoods and shortest paths,
returned in a Cytoscape.js-friendly shape."""

from __future__ import annotations

from app.graphdb import run


def _kind(label: str) -> str:
    return label.lower()


def neighbors(uid: str, limit: int = 60) -> dict:
    center = run(
        """
        MATCH (n {uid: $uid})
        RETURN n.uid AS uid, labels(n)[0] AS label, coalesce(n.name, n.uid) AS name
        """,
        uid=uid,
    )
    if not center:
        return {"nodes": [], "edges": []}

    rows = run(
        """
        MATCH (n {uid: $uid})-[r]-(m)
        RETURN m.uid AS m_uid, labels(m)[0] AS m_label,
               coalesce(m.name, m.uid) AS m_name,
               type(r) AS rel, elementId(r) AS rel_id,
               startNode(r).uid AS start_uid, endNode(r).uid AS end_uid,
               properties(r) AS rel_props
        LIMIT $limit
        """,
        uid=uid,
        limit=limit,
    )

    c = center[0]
    nodes: dict[str, dict] = {
        c["uid"]: {"id": c["uid"], "name": c["name"], "kind": _kind(c["label"])}
    }
    edges: dict[str, dict] = {}
    for row in rows:
        nodes.setdefault(
            row["m_uid"],
            {"id": row["m_uid"], "name": row["m_name"], "kind": _kind(row["m_label"])},
        )
        props = row.get("rel_props") or {}
        edges.setdefault(
            row["rel_id"],
            {
                "id": row["rel_id"],
                "source": row["start_uid"],
                "target": row["end_uid"],
                "kind": row["rel"],
                "amount": props.get("amount"),
            },
        )
    return {"nodes": list(nodes.values()), "edges": list(edges.values())}


def shortest_path(src: str, dst: str, max_hops: int = 6) -> dict | None:
    rows = run(
        f"""
        MATCH (a {{uid: $src}}), (b {{uid: $dst}}),
              p = shortestPath((a)-[*..{max_hops}]-(b))
        RETURN [n IN nodes(p) |
                  {{uid: n.uid, label: labels(n)[0], name: coalesce(n.name, n.uid)}}
               ] AS nodes,
               [r IN relationships(p) |
                  {{type: type(r), start: startNode(r).uid, end: endNode(r).uid}}
               ] AS rels
        """,
        src=src,
        dst=dst,
    )
    return rows[0] if rows else None
