"""Neo4j driver lifecycle, schema constraints and a thin query runner."""

from __future__ import annotations

import logging
from typing import Any

from neo4j import GraphDatabase
from neo4j import Driver

from app.core.config import get_settings

logger = logging.getLogger(__name__)

_driver: Driver | None = None


def get_driver() -> Driver:
    global _driver
    if _driver is None:
        s = get_settings()
        _driver = GraphDatabase.driver(
            s.neo4j_uri,
            auth=(s.neo4j_user, s.neo4j_password),
            connection_timeout=5,
        )
    return _driver


def close_driver() -> None:
    global _driver
    if _driver is not None:
        _driver.close()
        _driver = None


def run(query: str, **params: Any) -> list[dict]:
    with get_driver().session() as session:
        return [record.data() for record in session.run(query, **params)]


_CONSTRAINTS = [
    "CREATE CONSTRAINT company_uid IF NOT EXISTS FOR (n:Company) REQUIRE n.uid IS UNIQUE",
    "CREATE CONSTRAINT person_uid IF NOT EXISTS FOR (n:Person) REQUIRE n.uid IS UNIQUE",
    "CREATE CONSTRAINT committee_uid IF NOT EXISTS FOR (n:Committee) REQUIRE n.uid IS UNIQUE",
    "CREATE CONSTRAINT filing_uid IF NOT EXISTS FOR (n:Filing) REQUIRE n.uid IS UNIQUE",
]


def ensure_constraints() -> None:
    for statement in _CONSTRAINTS:
        run(statement)
    logger.info("neo4j constraints ensured")
