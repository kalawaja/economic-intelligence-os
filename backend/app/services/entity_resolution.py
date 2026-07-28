"""Entity resolution: map raw names from heterogeneous sources onto one entity.

Strategy (cheap to expensive):
  1. exact match on normalized name
  2. exact match on stored aliases
  3. fuzzy match (RapidFuzz token_sort_ratio) above a threshold

Every successful non-exact match is persisted as an alias so it becomes an
exact match next time. Suitable for skeleton scale; swap step 3 for a blocked
/ indexed matcher (e.g. Splink) as the corpus grows.
"""

from __future__ import annotations

import re

from rapidfuzz import fuzz, process
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.entities import Company, EntityAlias, Person

_SUFFIX_RE = re.compile(
    r"\b(incorporated|corporation|company|holdings?|group|international"
    r"|inc|corp|co|llc|llp|lp|ltd|plc|sa|nv|ag|the)\b"
)
_NON_ALNUM_RE = re.compile(r"[^a-z0-9 ]+")
_SPACES_RE = re.compile(r"\s+")


def normalize_name(raw: str | None) -> str:
    if not raw:
        return ""
    s = raw.lower().replace("&", " and ")
    s = _NON_ALNUM_RE.sub(" ", s)
    for _ in range(3):  # suffixes can stack: "X Holdings Inc."
        s = _SUFFIX_RE.sub(" ", s)
    return _SPACES_RE.sub(" ", s).strip()


def add_alias(
    db: Session, entity_type: str, entity_id: int, alias: str, source: str
) -> None:
    norm = normalize_name(alias)
    if not norm:
        return
    exists = db.scalar(
        select(EntityAlias.id).where(
            EntityAlias.entity_type == entity_type, EntityAlias.alias_norm == norm
        )
    )
    if not exists:
        db.add(
            EntityAlias(
                entity_type=entity_type,
                entity_id=entity_id,
                alias=alias,
                alias_norm=norm,
                source=source,
            )
        )
        db.flush()


def resolve_company(
    db: Session, raw_name: str | None, min_score: float = 92.0
) -> Company | None:
    norm = normalize_name(raw_name)
    if not norm:
        return None

    company = db.scalar(select(Company).where(Company.normalized_name == norm))
    if company:
        return company

    alias = db.scalar(
        select(EntityAlias).where(
            EntityAlias.entity_type == "company", EntityAlias.alias_norm == norm
        )
    )
    if alias:
        return db.get(Company, alias.entity_id)

    rows = db.execute(select(Company.id, Company.normalized_name)).all()
    if not rows:
        return None
    choices = {row.id: row.normalized_name for row in rows}
    best = process.extractOne(norm, choices, scorer=fuzz.token_sort_ratio)
    if best and best[1] >= min_score:
        company = db.get(Company, best[2])
        if company and raw_name:
            add_alias(db, "company", company.id, raw_name, source="fuzzy")
        return company
    return None


def get_or_create_person(db: Session, raw_name: str) -> Person:
    norm = normalize_name(raw_name)
    person = db.scalar(select(Person).where(Person.normalized_name == norm))
    if person:
        return person
    person = Person(full_name=raw_name.strip(), normalized_name=norm)
    db.add(person)
    db.flush()
    return person
