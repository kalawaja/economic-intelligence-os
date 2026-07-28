"""FEC (Federal Election Commission) ingestion via api.open.fec.gov.

We pull Schedule A itemized receipts filtered by contributor employer, then
entity-resolve the employer to one of our companies and the contributor to a
Person. This is what creates the cross-domain edges in the graph:

  (Company)-[:EMPLOYER_OF]->(Person)-[:CONTRIBUTED_TO]->(Committee)

DEMO_KEY works for development; get a real key for meaningful volume.
"""

from __future__ import annotations

import logging
from datetime import date

import httpx
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.models.entities import Committee, Company, Contribution
from app.services.entity_resolution import get_or_create_person, normalize_name

logger = logging.getLogger(__name__)

FEC_BASE = "https://api.open.fec.gov/v1"


def fetch_schedule_a_by_employer(employer: str, per_page: int = 100) -> list[dict]:
    params = {
        "api_key": get_settings().fec_api_key,
        "contributor_employer": employer,
        "per_page": per_page,
        "sort": "-contribution_receipt_date",
    }
    response = httpx.get(f"{FEC_BASE}/schedules/schedule_a/", params=params, timeout=30)
    response.raise_for_status()
    return response.json().get("results", [])


def _upsert_committee(db: Session, fec_id: str | None, name: str | None) -> Committee | None:
    if not fec_id:
        return None
    committee = db.scalar(select(Committee).where(Committee.fec_id == fec_id))
    if committee is None:
        committee = Committee(fec_id=fec_id, name=name)
        db.add(committee)
        db.flush()
    elif name and not committee.name:
        committee.name = name
    return committee


def ingest_contributions_for_company(db: Session, company: Company) -> int:
    # Employer strings in FEC data are free text; query the registered name
    # and its normalized short form, dedupe on sub_id.
    variants = [company.name]
    short = normalize_name(company.name).upper()
    if short and short.lower() != company.name.lower():
        variants.append(short)

    added = 0
    seen: set[str] = set()
    for employer in variants:
        try:
            results = fetch_schedule_a_by_employer(employer)
        except httpx.HTTPError as exc:
            logger.warning("FEC query failed for %r: %s", employer, exc)
            continue
        for row in results:
            sub_id = str(row.get("sub_id") or "")
            if not sub_id or sub_id in seen:
                continue
            seen.add(sub_id)
            if db.scalar(select(Contribution.id).where(Contribution.sub_id == sub_id)):
                continue

            contributor_name = (row.get("contributor_name") or "").strip()
            person = (
                get_or_create_person(db, contributor_name) if contributor_name else None
            )
            committee_info = row.get("committee") or {}
            committee = _upsert_committee(
                db, committee_info.get("committee_id"), committee_info.get("name")
            )
            raw_date = row.get("contribution_receipt_date")
            db.add(
                Contribution(
                    sub_id=sub_id,
                    person_id=person.id if person else None,
                    company_id=company.id,
                    committee_id=committee.id if committee else None,
                    contributor_name=contributor_name or None,
                    contributor_employer=row.get("contributor_employer"),
                    amount=row.get("contribution_receipt_amount"),
                    date=date.fromisoformat(raw_date[:10]) if raw_date else None,
                )
            )
            added += 1
    db.flush()
    logger.info("FEC: %s new contributions linked to %s", added, company.name)
    return added
