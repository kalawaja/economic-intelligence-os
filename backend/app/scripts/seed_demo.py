"""Seed the platform with a demo universe of companies.

Usage (inside the backend container):
    python -m app.scripts.seed_demo --tickers AAPL,MSFT,LMT
Defaults to DEFAULT_TICKERS from the environment.
"""

from __future__ import annotations

import argparse
import json

from app.core.config import get_settings
from app.core.db import get_sessionmaker, init_db
from app.ingestion import pipeline


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--tickers",
        default=",".join(get_settings().default_ticker_list),
        help="comma-separated tickers",
    )
    args = parser.parse_args()
    tickers = [t.strip().upper() for t in args.tickers.split(",") if t.strip()]

    init_db()
    with get_sessionmaker()() as db:
        summary = pipeline.run_full_ingest(db, tickers)
    print(json.dumps(summary, indent=2, default=str))


if __name__ == "__main__":
    main()
