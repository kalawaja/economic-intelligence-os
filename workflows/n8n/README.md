# Scheduling ingestion with n8n

The platform exposes one webhook the scheduler needs:

```
POST {BACKEND_URL}/api/ingest/run
Header:  X-API-Key: <INGEST_API_KEY from .env>
Body:    {"tickers": ["AAPL", "LMT"]}   # optional; omit to use DEFAULT_TICKERS
```

## Workflow shape

1. **Schedule Trigger** — e.g. cron `0 6 * * *` (daily 06:00).
2. **HTTP Request** — POST to the URL above.
   - Authentication: none (the header carries the key) → add header `X-API-Key`.
   - Timeout: ≥ 300 000 ms (a full run downloads from SEC + FEC).
   - Retry on fail: 2 retries, 30 s wait.
3. *(Optional)* **IF** node on `{{$json.status}} != "success"` → notify (Slack/e-mail) with `{{$json.errors}}`.

The response includes `run_id`, per-ticker results, search/graph counts and an
`errors` array — everything you need for alerting. Runs are also recorded in
the `ingest_runs` table.

## Alternatives

Airflow (DAG of PythonOperators calling `app.ingestion.pipeline` directly) or
Temporal (workflow + activities per source) drive the same functions when you
outgrow webhook-style scheduling. Keep the pipeline functions as the single
entry point so schedulers stay swappable.
