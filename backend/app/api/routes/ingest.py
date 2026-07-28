from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.core.db import get_db
from app.ingestion import pipeline
from app.schemas.api import IngestRunRequest

router = APIRouter(prefix="/api/ingest", tags=["ingest"])


def require_ingest_key(
    x_api_key: str | None = Header(default=None, alias="X-API-Key"),
) -> None:
    expected = get_settings().ingest_api_key
    if expected and x_api_key != expected:
        raise HTTPException(401, "invalid or missing X-API-Key")


@router.post("/run", dependencies=[Depends(require_ingest_key)])
def run_ingest(body: IngestRunRequest | None = None, db: Session = Depends(get_db)):
    tickers = body.tickers if body else None
    return pipeline.run_full_ingest(db, tickers)
