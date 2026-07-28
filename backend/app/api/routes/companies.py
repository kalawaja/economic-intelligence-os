from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.ingestion import pipeline
from app.models.entities import Committee, Company, Contribution, Filing
from app.schemas.api import (
    CompanyOut,
    ContributionSummaryRow,
    FilingOut,
    IngestTickerRequest,
)

router = APIRouter(prefix="/api/companies", tags=["companies"])


@router.get("", response_model=list[CompanyOut])
def list_companies(q: str | None = None, db: Session = Depends(get_db)):
    stmt = select(Company).order_by(Company.name).limit(200)
    if q:
        like = f"%{q.lower()}%"
        stmt = stmt.where(
            func.lower(Company.name).like(like) | (Company.ticker == q.upper())
        )
    return db.scalars(stmt).all()


@router.get("/{company_id}", response_model=CompanyOut)
def get_company(company_id: int, db: Session = Depends(get_db)):
    company = db.get(Company, company_id)
    if not company:
        raise HTTPException(404, "company not found")
    return company


@router.get("/{company_id}/filings", response_model=list[FilingOut])
def company_filings(company_id: int, db: Session = Depends(get_db)):
    return db.scalars(
        select(Filing)
        .where(Filing.company_id == company_id)
        .order_by(desc(Filing.filed_at))
        .limit(50)
    ).all()


@router.get(
    "/{company_id}/contributions/summary",
    response_model=list[ContributionSummaryRow],
)
def contribution_summary(company_id: int, db: Session = Depends(get_db)):
    total = func.coalesce(func.sum(Contribution.amount), 0).label("total")
    rows = db.execute(
        select(
            func.coalesce(Committee.name, Committee.fec_id, "Unknown committee").label(
                "committee"
            ),
            total,
            func.count().label("count"),
        )
        .select_from(Contribution)
        .outerjoin(Committee, Contribution.committee_id == Committee.id)
        .where(Contribution.company_id == company_id)
        .group_by("committee")
        .order_by(desc("total"))
        .limit(15)
    ).all()
    return [
        ContributionSummaryRow(committee=r.committee, total=float(r.total), count=r.count)
        for r in rows
    ]


@router.post("/ingest")
def ingest_company(body: IngestTickerRequest, db: Session = Depends(get_db)):
    try:
        return pipeline.ingest_company(db, body.ticker.upper())
    except ValueError as exc:
        raise HTTPException(404, str(exc))
