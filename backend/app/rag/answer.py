"""GraphRAG answerer.

Retrieval is hybrid:
  1. OpenSearch entities index  -> which entities does the question mention?
  2. Neo4j neighborhoods        -> relationship facts around those entities
  3. OpenSearch documents index -> supporting filings / documents

The LLM answers ONLY from that context and cites [G#] graph facts and [S#]
sources. Without an ANTHROPIC_API_KEY the endpoint still returns the
retrieved context so the platform degrades gracefully.
"""

from __future__ import annotations

import logging

from app.core import search
from app.core.config import get_settings
from app.graphdb import queries as graph_queries

logger = logging.getLogger(__name__)

SYSTEM_PROMPT = (
    "You are the analysis layer of an economic intelligence platform built on "
    "US public data (SEC EDGAR, FEC). Answer strictly from the provided "
    "context. Cite graph facts as [G#] and documents as [S#]. If the context "
    "is insufficient, say exactly what is missing instead of guessing."
)


def _graph_facts(entities: list[dict], per_entity: int = 25) -> list[str]:
    facts: list[str] = []
    for entity in entities[:2]:
        try:
            hood = graph_queries.neighbors(entity["uid"], limit=per_entity)
        except Exception as exc:
            logger.warning("graph retrieval failed for %s: %s", entity["uid"], exc)
            continue
        names = {n["id"]: n["name"] for n in hood["nodes"]}
        for edge in hood["edges"]:
            amount = f" (${edge['amount']:,.0f})" if edge.get("amount") else ""
            facts.append(
                f"{names.get(edge['source'], edge['source'])} "
                f"-{edge['kind']}-> "
                f"{names.get(edge['target'], edge['target'])}{amount}"
            )
    return facts


def _build_context(entities: list[dict], facts: list[str], docs: list[dict]) -> str:
    lines: list[str] = []
    if entities:
        lines.append("## Entities")
        for e in entities:
            lines.append(f"- {e['name']} ({e['kind']}, uid={e['uid']})")
    if facts:
        lines.append("\n## Graph facts")
        for i, fact in enumerate(facts, 1):
            lines.append(f"[G{i}] {fact}")
    if docs:
        lines.append("\n## Documents")
        for i, doc in enumerate(docs, 1):
            lines.append(
                f"[S{i}] {doc.get('title')} | form={doc.get('form')} "
                f"| filed={doc.get('filed_at')} | company={doc.get('company')} "
                f"| {doc.get('url')}"
            )
    return "\n".join(lines)


def _call_llm(question: str, context: str) -> str:
    from anthropic import Anthropic

    settings = get_settings()
    client = Anthropic(api_key=settings.anthropic_api_key)
    message = client.messages.create(
        model=settings.llm_model,
        max_tokens=1024,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": f"Context:\n{context}\n\nQuestion: {question}",
            }
        ],
    )
    return "".join(block.text for block in message.content if hasattr(block, "text"))


def ask(question: str) -> dict:
    entities: list[dict] = []
    docs: list[dict] = []
    try:
        entities = search.search_entities(question, size=4)
        docs = search.search_documents(question, size=6)
    except Exception as exc:
        logger.warning("search retrieval failed: %s", exc)

    facts = _graph_facts(entities)
    context = _build_context(entities, facts, docs)

    answer: str | None = None
    note: str | None = None
    if get_settings().anthropic_api_key:
        try:
            answer = _call_llm(question, context)
        except Exception as exc:
            logger.warning("LLM call failed: %s", exc)
            note = f"LLM call failed: {exc}"
    else:
        note = "ANTHROPIC_API_KEY is not set; returning retrieved context only."

    return {
        "answer": answer,
        "note": note,
        "entities": entities,
        "graph_facts": facts,
        "sources": [
            {
                "title": d.get("title"),
                "form": d.get("form"),
                "filed_at": d.get("filed_at"),
                "company": d.get("company"),
                "url": d.get("url"),
            }
            for d in docs
        ],
    }
