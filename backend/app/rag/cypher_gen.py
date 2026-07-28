"""Guarded natural-language -> Cypher.

The LLM is asked for a single read-only Cypher query against the published
schema; the result is validated (deny-list + allowed opening clause + forced
LIMIT) before it touches Neo4j. Requires ANTHROPIC_API_KEY.
"""

from __future__ import annotations

import re

from app.core.config import get_settings
from app.graphdb import run

SCHEMA_HINT = """Nodes:
  Company {uid, name, ticker, cik, state, sic}
  Person {uid, name}
  Committee {uid, fec_id, name}
  Filing {uid, form, filed_at, url, name}
Relationships:
  (Company)-[:FILED]->(Filing)
  (Company)-[:EMPLOYER_OF]->(Person)
  (Person)-[:CONTRIBUTED_TO {amount, date, sub_id}]->(Committee)
  (Person)-[:OFFICER_OF {title}]->(Company)"""

_FORBIDDEN = re.compile(
    r"\b(create|merge|delete|detach|set|remove|drop|foreach|load\s+csv|call)\b",
    re.IGNORECASE,
)
_ALLOWED_START = ("MATCH", "OPTIONAL", "WITH", "RETURN")


class UnsafeCypherError(ValueError):
    pass


def validate(cypher: str, default_limit: int = 50) -> str:
    stripped = cypher.strip().rstrip(";")
    if not stripped:
        raise UnsafeCypherError("empty query")
    if _FORBIDDEN.search(stripped):
        raise UnsafeCypherError("only read-only queries are allowed")
    if not stripped.upper().startswith(_ALLOWED_START):
        raise UnsafeCypherError("query must start with MATCH / OPTIONAL MATCH / WITH / RETURN")
    if not re.search(r"\blimit\s+\d+\b", stripped, re.IGNORECASE):
        stripped = f"{stripped} LIMIT {default_limit}"
    return stripped


def generate_cypher(question: str) -> str:
    from anthropic import Anthropic

    settings = get_settings()
    client = Anthropic(api_key=settings.anthropic_api_key)
    message = client.messages.create(
        model=settings.llm_model,
        max_tokens=400,
        system=(
            "Translate the user's question into ONE read-only Cypher query for "
            "the schema below. Output only the query — no prose, no code "
            f"fences.\n\n{SCHEMA_HINT}"
        ),
        messages=[{"role": "user", "content": question}],
    )
    text = "".join(block.text for block in message.content if hasattr(block, "text"))
    return text.replace("```cypher", "").replace("```", "").strip()


def ask_graph(question: str) -> dict:
    if not get_settings().anthropic_api_key:
        raise UnsafeCypherError("ANTHROPIC_API_KEY is required for /api/ask/graph")
    cypher = validate(generate_cypher(question))
    rows = run(cypher)
    return {"cypher": cypher, "rows": rows}
