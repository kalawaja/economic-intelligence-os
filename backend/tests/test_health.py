"""Smoke test: the app must boot and report per-service health even when no
backing store is reachable (resilient startup contract)."""

from fastapi.testclient import TestClient

from app.main import app


def test_health_reports_all_services():
    with TestClient(app) as client:
        response = client.get("/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] in {"ok", "degraded"}
    assert set(body["services"]) == {"postgres", "neo4j", "opensearch"}


def test_root_points_to_docs():
    with TestClient(app) as client:
        response = client.get("/")
    assert response.status_code == 200
    assert response.json()["docs"] == "/docs"
