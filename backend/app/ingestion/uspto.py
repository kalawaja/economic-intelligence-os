"""USPTO patents ingestion — planned.

Target: PatentsView Search API (requires a free API key). Planned model:
  Patent(id, title, grant_date, assignee) -> (Company)-[:ASSIGNEE_OF]->(Patent)
plus inventor People. Wire into pipeline.run_full_ingest once implemented.
"""

from __future__ import annotations

from sqlalchemy.orm import Session


def ingest_patents_for_company(db: Session, company_id: int) -> int:
    raise NotImplementedError("USPTO ingestion is on the roadmap; see docs/data-sources.md")
