from fastapi import APIRouter

from app.core import search as search_layer
from app.schemas.api import SearchResponse

router = APIRouter(prefix="/api/search", tags=["search"])


@router.get("", response_model=SearchResponse)
def search(q: str):
    return SearchResponse(
        entities=search_layer.search_entities(q),
        documents=search_layer.search_documents(q),
    )
