"""SEC EDGAR ingestion.

Endpoints (no API key, but SEC requires a declared User-Agent and asks for
<= 10 requests/second — both are honored here):
  - https://www.sec.gov/files/company_tickers.json     ticker -> CIK map
  - https://data.sec.gov/submissions/CIK##########.json  company profile + recent filings

Full-text filing bodies (EDGAR full-text search / primary documents) are on
the roadmap; today we ingest structured metadata, which already powers the
graph, search and RAG layers.
"""

from __future__ import annotations

import logging
import time
from datetime import date

import httpx
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.models.entities import Company, Filing
from app.services.entity_resolution import normalize_name

logger = logging.getLogger(__name__)

TICKERS_URL = "https://www.sec.gov/files/company_tickers.json"
SUBMISSIONS_URL = "https://data.sec.gov/submissions/CIK{cik:010d}.json"

_client: httpx.Client | None = None
_tickers_cache: dict | None = None


def _http() -> httpx.Client:
    global _client
    if _client is None:
        _client = httpx.Client(
            headers={
                "User-Agent": get_settings().sec_user_agent,
                "Accept-Encoding": "gzip, deflate",
            },
            timeout=30.0,
        )
    return _client


def _get_json(url: str) -> dict:
    time.sleep(0.12)  # stay comfortably under SEC's 10 req/s guidance
    response = _http().get(url)
    response.raise_for_status()
    return response.json()


def lookup_cik(ticker: str) -> tuple[int, str] | None:
    """Resolve a ticker to (CIK, registered title) using SEC's official map."""
    global _tickers_cache
    if _tickers_cache is None:
        _tickers_cache = _get_json(TICKERS_URL)
    wanted = ticker.upper()
    for row in _tickers_cache.values():
        if str(row.get("ticker", "")).upper() == wanted:
            return int(row["cik_str"]), str(row.get("title", ""))
    return None


def fetch_submissions(cik: int) -> dict:
    return _get_json(SUBMISSIONS_URL.format(cik=cik))


def upsert_company(db: Session, cik: int, data: dict) -> Company:
    name = data.get("name") or f"CIK {cik}"
    company = db.scalar(select(Company).where(Company.cik == cik))
    if company is None:
        company = Company(cik=cik, name=name, normalized_name=normalize_name(name))
        db.add(company)

    company.name = name
    company.normalized_name = normalize_name(name)
    tickers = data.get("tickers") or []
    if tickers:
        company.ticker = tickers[0]
    company.sic = str(data.get("sic") or "") or None
    company.sic_description = data.get("sicDescription") or None
    company.state_of_incorporation = data.get("stateOfIncorporation") or None
    business = (data.get("addresses") or {}).get("business") or {}
    company.state = business.get("stateOrCountry") or None
    company.website = data.get("website") or None
    db.flush()
    return company


def upsert_recent_filings(
    db: Session, company: Company, data: dict, max_filings: int = 40
) -> int:
    recent = ((data.get("filings") or {}).get("recent")) or {}
    accession_numbers = recent.get("accessionNumber") or []
    forms = recent.get("form") or []
    dates = recent.get("filingDate") or []
    docs = recent.get("primaryDocument") or []
    descriptions = recent.get("primaryDocDescription") or []

    added = 0
    for i in range(min(len(accession_numbers), max_filings)):
        accession = accession_numbers[i]
        if db.scalar(select(Filing.id).where(Filing.accession_no == accession)):
            continue
        primary_doc = docs[i] if i < len(docs) else ""
        if primary_doc:
            url = (
                "https://www.sec.gov/Archives/edgar/data/"
                f"{company.cik}/{accession.replace('-', '')}/{primary_doc}"
            )
        else:
            url = (
                "https://www.sec.gov/cgi-bin/browse-edgar"
                f"?action=getcompany&CIK={company.cik}"
            )
        form = forms[i] if i < len(forms) else None
        filed_at = (
            date.fromisoformat(dates[i]) if i < len(dates) and dates[i] else None
        )
        title = (descriptions[i] if i < len(descriptions) else None) or form or accession
        db.add(
            Filing(
                company_id=company.id,
                accession_no=accession,
                form=form,
                filed_at=filed_at,
                title=title,
                primary_doc=primary_doc or None,
                url=url,
            )
        )
        added += 1
    db.flush()
    return added


def ingest_ticker(
    db: Session, ticker: str, max_filings: int = 40
) -> tuple[Company, int]:
    resolved = lookup_cik(ticker)
    if resolved is None:
        raise ValueError(f"Ticker not found in SEC registry: {ticker}")
    cik, _title = resolved
    data = fetch_submissions(cik)
    company = upsert_company(db, cik, data)
    filings_added = upsert_recent_filings(db, company, data, max_filings=max_filings)
    logger.info(
        "EDGAR: %s (CIK %s) upserted, %s new filings", company.name, cik, filings_added
    )
    return company, filings_added
