# Data sources

## Implemented

### SEC EDGAR
- `https://www.sec.gov/files/company_tickers.json` — ticker → CIK registry
- `https://data.sec.gov/submissions/CIK##########.json` — company profile + recent filings
- **Rules:** the SEC requires a declared `User-Agent` (set `SEC_USER_AGENT` in `.env`, format `app-name your-name email`) and asks for ≤ 10 requests/second. The client sleeps between calls.
- Roadmap: EDGAR full-text search + primary-document bodies into OpenSearch; Form 4 (insiders) and 13F (holdings) parsers.

### FEC (api.open.fec.gov)
- `GET /v1/schedules/schedule_a/?contributor_employer=...` — itemized receipts by employer string.
- `DEMO_KEY` works for development with tight rate limits; request a free key for real volume: https://api.open.fec.gov/developers/
- Employer strings are free text — coverage depends on entity resolution; every fuzzy match is stored as an alias to improve recall over time.

## Planned

### USPTO / PatentsView
Search API requires a free key. Model: `(Company)-[:ASSIGNEE_OF]->(Patent)` plus inventor People.

### OpenSecrets
Lobbying and revolving-door data. OpenSecrets has changed its data-access model over time — verify the current API/bulk availability before implementing.

### Company IR pages, US agencies, financial news
Scraping + NER pipeline; extracted events become graph edges with provenance. Prefer official/primary sources; store the source URL on every derived edge.
