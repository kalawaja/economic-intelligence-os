# Architecture

## Principles

1. **PostgreSQL is the source of truth.** Every ingester writes normalized rows here first. Neo4j and OpenSearch are *projections* that can be dropped and rebuilt (`pipeline.reindex_search`, `graphdb.sync.sync_all`) at any time.
2. **One identifier across stores.** Each entity exposes a `uid` (`company:{pg_id}`, `person:{pg_id}`, `committee:{fec_id}`, `filing:{accession_no}`). The API, the graph, the search index and the UI all speak `uid`.
3. **Resilient boundaries.** The API boots even when a store is down (`/health` reports it); each ingestion stage catches its own failures and records them on the `IngestRun` row instead of aborting the run.
4. **Idempotent sync.** Graph projection uses `MERGE` on `uid` everywhere, so repeated runs converge instead of duplicating.

## Components

- `app/ingestion/` — source clients (EDGAR, FEC, stubs for USPTO/OpenSecrets) and the `pipeline` orchestrator that a scheduler triggers via `POST /api/ingest/run`.
- `app/services/entity_resolution.py` — normalization + alias store + RapidFuzz fallback. Every successful fuzzy match is persisted as an alias, so the system gets cheaper over time. Replace with a blocked matcher (e.g. Splink) at scale.
- `app/graphdb/` — Neo4j driver lifecycle, uid constraints, batch sync, Cytoscape-shaped read queries.
- `app/core/search.py` — OpenSearch indices: `entities` (search-as-you-type) and `documents` (filing metadata today; full text on the roadmap).
- `app/rag/` — the AI layer. `answer.py` does hybrid retrieval (entity hits → graph neighborhoods → documents) and asks the LLM to answer *only* from that context with `[G#]`/`[S#]` citations. `cypher_gen.py` translates questions to Cypher and refuses anything that is not a read (`CREATE/MERGE/DELETE/SET/...` deny-list, allowed opening clauses, forced `LIMIT`).
- `frontend/` — React + TS console: Cytoscape neighborhood explorer (tap to expand), D3 contribution-flow chart, Leaflet map over state centroids.

## Scaling path

| Pressure | Move |
|---|---|
| Ingestion volume (full-text filings, news) | move ingesters to workers; Apache Spark for backfills |
| Orchestration complexity | replace the n8n webhook with Airflow DAGs or Temporal workflows hitting the same pipeline functions |
| Entity resolution accuracy | blocking + probabilistic matching (Splink), human-review queue on low-confidence matches |
| Schema evolution | Alembic migrations (currently `create_all`) |
| Multi-user | authn/authz in FastAPI, per-user saved graphs |
