"""OpenSearch layer: full-text search over entities and documents.

Two indices:
  - entities:  autocomplete-friendly names for companies / people / committees
  - documents: filing metadata today; full filing text and news on the roadmap

This index also serves as the retrieval half of the RAG layer (app.rag).
"""

from __future__ import annotations

import logging

from opensearchpy import OpenSearch

from app.core.config import get_settings

logger = logging.getLogger(__name__)

ENTITIES_INDEX = "entities"
DOCUMENTS_INDEX = "documents"

_client: OpenSearch | None = None


def get_client() -> OpenSearch:
    global _client
    if _client is None:
        _client = OpenSearch(
            hosts=[get_settings().opensearch_url],
            http_compress=True,
            timeout=10,
        )
    return _client


_ENTITIES_BODY = {
    "mappings": {
        "properties": {
            "uid": {"type": "keyword"},
            "kind": {"type": "keyword"},
            "name": {"type": "search_as_you_type"},
            "ticker": {"type": "keyword"},
            "state": {"type": "keyword"},
        }
    }
}

_DOCUMENTS_BODY = {
    "mappings": {
        "properties": {
            "company_uid": {"type": "keyword"},
            "company": {"type": "text"},
            "title": {"type": "text"},
            "body": {"type": "text"},
            "form": {"type": "keyword"},
            "filed_at": {"type": "date"},
            "url": {"type": "keyword"},
        }
    }
}


def ensure_indices() -> None:
    client = get_client()
    for name, body in ((ENTITIES_INDEX, _ENTITIES_BODY), (DOCUMENTS_INDEX, _DOCUMENTS_BODY)):
        if not client.indices.exists(index=name):
            client.indices.create(index=name, body=body)
            logger.info("created index %s", name)


def index_entity(uid: str, kind: str, name: str, **extra: str | None) -> None:
    doc = {"uid": uid, "kind": kind, "name": name}
    doc.update({k: v for k, v in extra.items() if v})
    get_client().index(index=ENTITIES_INDEX, id=uid, body=doc)


def index_document(doc_id: str, doc: dict) -> None:
    get_client().index(index=DOCUMENTS_INDEX, id=doc_id, body=doc)


def refresh() -> None:
    get_client().indices.refresh(index=f"{ENTITIES_INDEX},{DOCUMENTS_INDEX}")


def search_entities(q: str, size: int = 8) -> list[dict]:
    body = {
        "size": size,
        "query": {
            "bool": {
                "should": [
                    {
                        "multi_match": {
                            "query": q,
                            "type": "bool_prefix",
                            "fields": ["name", "name._2gram", "name._3gram"],
                        }
                    },
                    {"term": {"ticker": {"value": q.upper(), "boost": 4}}},
                ]
            }
        },
    }
    res = get_client().search(index=ENTITIES_INDEX, body=body)
    return [
        {"score": h["_score"], **h["_source"]} for h in res["hits"]["hits"]
    ]


def search_documents(q: str, size: int = 8) -> list[dict]:
    body = {
        "size": size,
        "query": {
            "multi_match": {
                "query": q,
                "fields": ["title^2", "body", "company", "form"],
            }
        },
    }
    res = get_client().search(index=DOCUMENTS_INDEX, body=body)
    return [
        {"score": h["_score"], **h["_source"]} for h in res["hits"]["hits"]
    ]
