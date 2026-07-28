"""Ingestion pipeline.

One company:  EDGAR profile + filings  ->  FEC contributions  ->  commit
Full run:     every ticker             ->  reindex OpenSearch  ->  sync Neo4j

Each stage degrades gracefully: a failing source or a store that is down is
logged and recorded in IngestRun.stats instead of aborting the run. The
scheduler (n8n / Airflow / Temporal) calls POST /api/ingest/run, which lands
here.
"""

from __future__ import annotations

import logging
from datetime import datetime, timezone

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core import search
from app.core.config import get_settings
from app.graphdb import sync as graph_sync
from app.ingestion import edgar, fec
from app.models.entities import Committee, Company, Filing, IngestRun, Person

logger = logging.getLogger(__name__)


def ingest_company(db: Session, ticker: str) -> dict:
    company, filings_added = edgar.ingest_ticker(db, ticker)
    contributions_added = 0
    try:
        contributions_added = fec.ingest_contributions_for_company(db, company)
    except Exception as exc:  # FEC being down must not lose EDGAR work
        logger.warning("FEC ingestion skipped for %s: %s", ticker, exc)
    db.commit()
    return {
        "ticker": ticker,
        "company_id": company.id,
        "company": company.name,
        "filings_added": filings_added,
        "contributions_added": contributions_added,
    }


def reindex_search(db: Session) -> dict[str, int]:
    counts = {"entities": 0, "documents": 0}
    search.ensure_indices()

    for company in db.scalars(select(Company)):
        search.index_entity(
            company.uid,
            "company",
            company.name,
            ticker=company.ticker,
            state=company.state,
        )
        counts["entities"] += 1
    for person in db.scalars(select(Person)):
        search.index_entity(person.uid, "person", person.full_name)
        counts["entities"] += 1
    for committee in db.scalars(select(Committee)):
        search.index_entity(committee.uid, "committee", committee.name or committee.fec_id)
        counts["entities"] += 1

    for filing in db.scalars(select(Filing)):
        search.index_document(
            filing.uid,
            {
                "company_uid": f"company:{filing.company_id}",
                "company": filing.company.name if filing.company else None,
                "title": filing.title,
                "body": f"{filing.form or ''} {filing.title or ''}".strip(),
                "form": filing.form,
                "filed_at": filing.filed_at.isoformat() if filing.filed_at else None,
                "url": filing.url,
            },
        )
        counts["documents"] += 1

    search.refresh()
    return counts


def run_full_ingest(db: Session, tickers: list[str] | None = None) -> dict:
    tickers = [t.upper() for t in tickers] if tickers else get_settings().default_ticker_list
    run = IngestRun(source="full", status="running")
    db.add(run)
    db.commit()

    results: list[dict] = []
    errors: list[str] = []
    for ticker in tickers:
        try:
            results.append(ingest_company(db, ticker))
        except Exception as exc:
            db.rollback()
            logger.exception("ingest failed for %s", ticker)
            errors.append(f"{ticker}: {exc}")

    search_counts: dict[str, int] = {}
    try:
        search_counts = reindex_search(db)
    except Exception as exc:
        logger.warning("OpenSearch reindex skipped: %s", exc)
        errors.append(f"opensearch: {exc}")

    graph_counts: dict[str, int] = {}
    try:
        graph_counts = graph_sync.sync_all(db)
    except Exception as exc:
        logger.warning("Neo4j sync skipped: %s", exc)
        errors.append(f"neo4j: {exc}")

    run.status = "success" if not errors else ("partial" if results else "failed")
    run.finished_at = datetime.now(timezone.utc)
    run.stats = {
        "tickers": tickers,
        "results": results,
        "search": search_counts,
        "graph": graph_counts,
    }
    run.error = "; ".join(errors) if errors else None
    db.commit()

    return {
        "run_id": run.id,
        "status": run.status,
        "results": results,
        "search": search_counts,
        "graph": graph_counts,
        "errors": errors,
    }
