"""FastAPI application entrypoint.

Startup is resilient by design: if a store (Postgres / Neo4j / OpenSearch) is
unreachable the app still boots and /health reports the degraded parts. This
keeps local development and tests usable while containers come up.
"""

from __future__ import annotations

import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core import search
from app.core.config import get_settings
from app.core.db import init_db
from app.api.routes import ask, companies, graph, health, ingest
from app.api.routes import search as search_routes
from app.graphdb import close_driver, ensure_constraints

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    for name, bootstrap in (
        ("postgres", init_db),
        ("opensearch", search.ensure_indices),
        ("neo4j", ensure_constraints),
    ):
        try:
            bootstrap()
        except Exception as exc:
            logger.warning("startup: %s not ready (%s)", name, exc)
    yield
    close_driver()


settings = get_settings()
app = FastAPI(title=settings.app_name, version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(companies.router)
app.include_router(graph.router)
app.include_router(search_routes.router)
app.include_router(ask.router)
app.include_router(ingest.router)


@app.get("/")
def root() -> dict:
    return {
        "name": settings.app_name,
        "docs": "/docs",
        "health": "/health",
        "hint": "POST /api/companies/ingest {\"ticker\": \"AAPL\"} to pull your first entity",
    }
