"""Relational source of truth.

PostgreSQL holds normalized records; Neo4j and OpenSearch are projections
derived from these tables (see app.graphdb.sync and app.ingestion.pipeline).
Every entity exposes a `uid` used as the cross-store identifier.
"""

from __future__ import annotations

from datetime import date, datetime

from sqlalchemy import (
    JSON,
    BigInteger,
    Boolean,
    Date,
    DateTime,
    ForeignKey,
    Numeric,
    String,
    Text,
    UniqueConstraint,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.db import Base


class Company(Base):
    __tablename__ = "companies"

    id: Mapped[int] = mapped_column(primary_key=True)
    cik: Mapped[int | None] = mapped_column(BigInteger, unique=True, index=True)
    ticker: Mapped[str | None] = mapped_column(String(16), index=True)
    name: Mapped[str] = mapped_column(String(512))
    normalized_name: Mapped[str] = mapped_column(String(512), index=True)
    sic: Mapped[str | None] = mapped_column(String(8))
    sic_description: Mapped[str | None] = mapped_column(String(256))
    state: Mapped[str | None] = mapped_column(String(8))
    state_of_incorporation: Mapped[str | None] = mapped_column(String(8))
    website: Mapped[str | None] = mapped_column(String(512))
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    filings: Mapped[list[Filing]] = relationship(back_populates="company")

    @property
    def uid(self) -> str:
        return f"company:{self.id}"


class Person(Base):
    __tablename__ = "people"

    id: Mapped[int] = mapped_column(primary_key=True)
    full_name: Mapped[str] = mapped_column(String(256))
    normalized_name: Mapped[str] = mapped_column(String(256), index=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )

    @property
    def uid(self) -> str:
        return f"person:{self.id}"


class Filing(Base):
    __tablename__ = "filings"

    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"), index=True)
    accession_no: Mapped[str] = mapped_column(String(32), unique=True, index=True)
    form: Mapped[str | None] = mapped_column(String(24), index=True)
    filed_at: Mapped[date | None] = mapped_column(Date, index=True)
    title: Mapped[str | None] = mapped_column(String(512))
    primary_doc: Mapped[str | None] = mapped_column(String(256))
    url: Mapped[str | None] = mapped_column(Text)

    company: Mapped[Company] = relationship(back_populates="filings")

    @property
    def uid(self) -> str:
        return f"filing:{self.accession_no}"


class Committee(Base):
    """FEC political committee (a contribution recipient)."""

    __tablename__ = "committees"

    id: Mapped[int] = mapped_column(primary_key=True)
    fec_id: Mapped[str] = mapped_column(String(16), unique=True, index=True)
    name: Mapped[str | None] = mapped_column(String(512))

    @property
    def uid(self) -> str:
        return f"committee:{self.fec_id}"


class Contribution(Base):
    """FEC Schedule A itemized receipt, linked to resolved entities where possible."""

    __tablename__ = "contributions"

    id: Mapped[int] = mapped_column(primary_key=True)
    sub_id: Mapped[str] = mapped_column(String(32), unique=True, index=True)
    person_id: Mapped[int | None] = mapped_column(ForeignKey("people.id"), index=True)
    company_id: Mapped[int | None] = mapped_column(
        ForeignKey("companies.id"), index=True
    )
    committee_id: Mapped[int | None] = mapped_column(
        ForeignKey("committees.id"), index=True
    )
    contributor_name: Mapped[str | None] = mapped_column(String(256))
    contributor_employer: Mapped[str | None] = mapped_column(String(256))
    amount: Mapped[float | None] = mapped_column(Numeric(14, 2))
    date: Mapped[date | None] = mapped_column(Date, index=True)

    person: Mapped[Person | None] = relationship()
    company: Mapped[Company | None] = relationship()
    committee: Mapped[Committee | None] = relationship()


class Position(Base):
    """Officer / director role at a company (populated by the Form 4 / DEF 14A
    ingesters on the roadmap; the graph sync already projects it)."""

    __tablename__ = "positions"
    __table_args__ = (
        UniqueConstraint("company_id", "person_id", "title", name="uq_position"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"), index=True)
    person_id: Mapped[int] = mapped_column(ForeignKey("people.id"), index=True)
    title: Mapped[str | None] = mapped_column(String(256))
    is_director: Mapped[bool] = mapped_column(Boolean, default=False)
    is_officer: Mapped[bool] = mapped_column(Boolean, default=False)
    source: Mapped[str | None] = mapped_column(String(64))
    as_of: Mapped[date | None] = mapped_column(Date)


class EntityAlias(Base):
    """Alternate spellings collected by the entity-resolution service."""

    __tablename__ = "entity_aliases"
    __table_args__ = (
        UniqueConstraint("entity_type", "alias_norm", name="uq_alias"),
    )

    id: Mapped[int] = mapped_column(primary_key=True)
    entity_type: Mapped[str] = mapped_column(String(16))  # 'company' | 'person'
    entity_id: Mapped[int] = mapped_column(index=True)
    alias: Mapped[str] = mapped_column(String(512))
    alias_norm: Mapped[str] = mapped_column(String(512), index=True)
    source: Mapped[str | None] = mapped_column(String(64))


class IngestRun(Base):
    __tablename__ = "ingest_runs"

    id: Mapped[int] = mapped_column(primary_key=True)
    source: Mapped[str] = mapped_column(String(64))
    status: Mapped[str] = mapped_column(String(16), default="running")
    started_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    finished_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    stats: Mapped[dict | None] = mapped_column(JSON)
    error: Mapped[str | None] = mapped_column(Text)
