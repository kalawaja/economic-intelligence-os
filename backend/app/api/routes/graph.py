from fastapi import APIRouter, HTTPException

from app.graphdb import queries
from app.schemas.api import GraphElements

router = APIRouter(prefix="/api/graph", tags=["graph"])


@router.get("/neighbors", response_model=GraphElements)
def neighbors(uid: str, limit: int = 60):
    result = queries.neighbors(uid, limit=min(limit, 200))
    if not result["nodes"]:
        raise HTTPException(404, f"no node with uid={uid}")
    return result


@router.get("/path")
def path(src: str, dst: str, max_hops: int = 6):
    result = queries.shortest_path(src, dst, max_hops=min(max_hops, 8))
    if result is None:
        raise HTTPException(404, "no path found")
    return result
