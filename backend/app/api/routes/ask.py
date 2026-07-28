from fastapi import APIRouter, HTTPException

from app.rag import answer as rag_answer
from app.rag import cypher_gen
from app.schemas.api import AskRequest, AskResponse

router = APIRouter(prefix="/api/ask", tags=["ask"])


@router.post("", response_model=AskResponse)
def ask(body: AskRequest):
    return rag_answer.ask(body.question)


@router.post("/graph")
def ask_graph(body: AskRequest):
    try:
        return cypher_gen.ask_graph(body.question)
    except cypher_gen.UnsafeCypherError as exc:
        raise HTTPException(400, str(exc))
