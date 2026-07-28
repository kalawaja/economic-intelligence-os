"""Pydantic request/response models for the public API."""

from __future__ import annotations

from datetime import date

from pydantic import BaseModel, ConfigDict, Field


class CompanyOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    uid: str
    cik: int | None
    ticker: str | None
    name: str
    state: str | None
    sic_description: str | None


class GraphNode(BaseModel):
    id: str
    name: str
    kind: str


class GraphEdge(BaseModel):
    id: str
    source: str
    target: str
    kind: str
    amount: float | None = None


class GraphElements(BaseModel):
    nodes: list[GraphNode]
    edges: list[GraphEdge]


class SearchResponse(BaseModel):
    entities: list[dict]
    documents: list[dict]


class AskRequest(BaseModel):
    question: str = Field(min_length=3, max_length=2000)


class AskResponse(BaseModel):
    answer: str | None
    note: str | None
    entities: list[dict]
    graph_facts: list[str]
    sources: list[dict]


class IngestTickerRequest(BaseModel):
    ticker: str = Field(min_length=1, max_length=16)


class IngestRunRequest(BaseModel):
    tickers: list[str] | None = None


class ContributionSummaryRow(BaseModel):
    committee: str
    total: float
    count: int


class FilingOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    accession_no: str
    form: str | None
    filed_at: date | None
    title: str | None
    url: str | None
