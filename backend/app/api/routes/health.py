from fastapi import APIRouter
from sqlalchemy import text

from app.core import search
from app.core.db import get_engine
from app.graphdb import run as graph_run

router = APIRouter(tags=["health"])


def _check(fn) -> str:
    try:
        fn()
        return "up"
    except Exception as exc:
        return f"down: {type(exc).__name__}"


@router.get("/health")
def health() -> dict:
    services = {
        "postgres": _check(
            lambda: get_engine().connect().execute(text("SELECT 1")).close()
        ),
        "neo4j": _check(lambda: graph_run("RETURN 1 AS ok")),
        "opensearch": _check(lambda: search.get_client().info()),
    }
    status = "ok" if all(v == "up" for v in services.values()) else "degraded"
    return {"status": status, "services": services}
