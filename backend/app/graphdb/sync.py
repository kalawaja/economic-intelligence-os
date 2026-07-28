"""Project the relational source of truth into the Neo4j knowledge graph.

Idempotent: every statement uses MERGE on `uid`, so repeated syncs converge.

Graph schema:
  (Company)  -[:FILED]->            (Filing)
  (Company)  -[:EMPLOYER_OF]->      (Person)
  (Person)   -[:CONTRIBUTED_TO]->   (Committee)   {amount, date, sub_id}
  (Person)   -[:OFFICER_OF]->       (Company)     {title}
"""

from __future__ import annotations

from collections.abc import Iterable, Iterator

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.graphdb import run
from app.models.entities import (
    Committee,
    Company,
    Contribution,
    Filing,
    Person,
    Position,
)


def _chunked(rows: list[dict], size: int = 500) -> Iterator[list[dict]]:
    for i in range(0, len(rows), size):
        yield rows[i : i + size]


def _run_batches(query: str, rows: Iterable[dict]) -> int:
    rows = list(rows)
    for chunk in _chunked(rows):
        run(query, rows=chunk)
    return len(rows)


def sync_all(db: Session) -> dict[str, int]:
    stats: dict[str, int] = {}

    companies = [
        {
            "uid": c.uid,
            "name": c.name,
            "ticker": c.ticker,
            "cik": c.cik,
            "state": c.state,
            "sic": c.sic_description,
        }
        for c in db.scalars(select(Company))
    ]
    stats["companies"] = _run_batches(
        """
        UNWIND $rows AS row
        MERGE (c:Company {uid: row.uid})
        SET c.name = row.name, c.ticker = row.ticker, c.cik = row.cik,
            c.state = row.state, c.sic = row.sic
        """,
        companies,
    )

    filings = [
        {
            "uid": f.uid,
            "company_uid": f"company:{f.company_id}",
            "form": f.form,
            "name": f.title or f.form or f.accession_no,
            "filed_at": f.filed_at.isoformat() if f.filed_at else None,
            "url": f.url,
        }
        for f in db.scalars(select(Filing))
    ]
    stats["filings"] = _run_batches(
        """
        UNWIND $rows AS row
        MERGE (f:Filing {uid: row.uid})
        SET f.form = row.form, f.name = row.name,
            f.filed_at = row.filed_at, f.url = row.url
        WITH f, row
        MATCH (c:Company {uid: row.company_uid})
        MERGE (c)-[:FILED]->(f)
        """,
        filings,
    )

    people = [
        {"uid": p.uid, "name": p.full_name} for p in db.scalars(select(Person))
    ]
    stats["people"] = _run_batches(
        """
        UNWIND $rows AS row
        MERGE (p:Person {uid: row.uid})
        SET p.name = row.name
        """,
        people,
    )

    committees = [
        {"uid": k.uid, "fec_id": k.fec_id, "name": k.name or k.fec_id}
        for k in db.scalars(select(Committee))
    ]
    stats["committees"] = _run_batches(
        """
        UNWIND $rows AS row
        MERGE (k:Committee {uid: row.uid})
        SET k.fec_id = row.fec_id, k.name = row.name
        """,
        committees,
    )

    contributions = [
        {
            "person_uid": f"person:{row.person_id}",
            "committee_uid": f"committee:{row.fec_id}",
            "sub_id": row.sub_id,
            "amount": float(row.amount) if row.amount is not None else None,
            "date": row.date.isoformat() if row.date else None,
        }
        for row in db.execute(
            select(
                Contribution.person_id,
                Contribution.sub_id,
                Contribution.amount,
                Contribution.date,
                Committee.fec_id,
            ).join(Committee, Contribution.committee_id == Committee.id)
            .where(Contribution.person_id.is_not(None))
        )
    ]
    stats["contributions"] = _run_batches(
        """
        UNWIND $rows AS row
        MATCH (p:Person {uid: row.person_uid})
        MATCH (k:Committee {uid: row.committee_uid})
        MERGE (p)-[r:CONTRIBUTED_TO {sub_id: row.sub_id}]->(k)
        SET r.amount = row.amount, r.date = row.date
        """,
        contributions,
    )

    employer_pairs = [
        {
            "company_uid": f"company:{row.company_id}",
            "person_uid": f"person:{row.person_id}",
        }
        for row in db.execute(
            select(Contribution.company_id, Contribution.person_id)
            .where(
                Contribution.company_id.is_not(None),
                Contribution.person_id.is_not(None),
            )
            .distinct()
        )
    ]
    stats["employer_edges"] = _run_batches(
        """
        UNWIND $rows AS row
        MATCH (c:Company {uid: row.company_uid})
        MATCH (p:Person {uid: row.person_uid})
        MERGE (c)-[:EMPLOYER_OF]->(p)
        """,
        employer_pairs,
    )

    positions = [
        {
            "company_uid": f"company:{pos.company_id}",
            "person_uid": f"person:{pos.person_id}",
            "title": pos.title,
        }
        for pos in db.scalars(select(Position))
    ]
    stats["positions"] = _run_batches(
        """
        UNWIND $rows AS row
        MATCH (c:Company {uid: row.company_uid})
        MATCH (p:Person {uid: row.person_uid})
        MERGE (p)-[r:OFFICER_OF]->(c)
        SET r.title = row.title
        """,
        positions,
    )

    return stats
