"""OpenSecrets lobbying / revolving-door data — planned.

OpenSecrets has changed its data-access model over time; verify the current
API / bulk-data availability before implementing (see docs/data-sources.md).
Planned model: LobbyingRecord -> (Company)-[:LOBBIED_ON]->(Issue).
"""

from __future__ import annotations

from sqlalchemy.orm import Session


def ingest_lobbying_for_company(db: Session, company_id: int) -> int:
    raise NotImplementedError("OpenSecrets ingestion is on the roadmap; see docs/data-sources.md")
