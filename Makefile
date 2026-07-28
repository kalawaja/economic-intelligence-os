.PHONY: up down logs ps seed test fmt

up:
	docker compose up -d --build

down:
	docker compose down

logs:
	docker compose logs -f backend

ps:
	docker compose ps

seed:
	docker compose exec backend python -m app.scripts.seed_demo

test:
	docker compose exec backend pytest -q

fmt:
	docker compose exec backend python -m compileall app
