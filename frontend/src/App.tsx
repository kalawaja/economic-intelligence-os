import { useCallback, useEffect, useState } from "react";
import { api } from "./api";
import type { CompanyOut, EntityHit, Health } from "./types";
import SearchBar from "./components/SearchBar";
import AskPanel from "./components/AskPanel";
import GraphExplorer from "./components/GraphExplorer";
import MapView from "./components/MapView";
import FlowsChart from "./components/FlowsChart";

type Tab = "graph" | "map" | "flows";

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [tab, setTab] = useState<Tab>("graph");
  const [selected, setSelected] = useState<EntityHit | null>(null);
  const [companies, setCompanies] = useState<CompanyOut[]>([]);
  const [ticker, setTicker] = useState("");
  const [ingesting, setIngesting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const refreshCompanies = useCallback(() => {
    api.companies().then(setCompanies).catch(() => setCompanies([]));
  }, []);

  useEffect(() => {
    api.health().then(setHealth).catch(() => setHealth(null));
    refreshCompanies();
  }, [refreshCompanies]);

  const selectedCompanyId =
    selected && selected.uid.startsWith("company:")
      ? Number(selected.uid.split(":")[1])
      : null;

  async function handleIngest() {
    const t = ticker.trim().toUpperCase();
    if (!t || ingesting) return;
    setIngesting(true);
    setNotice(`Ingesting ${t} from SEC EDGAR + FEC…`);
    try {
      await api.ingestTicker(t);
      setNotice(`${t} ingested. Search it on the left.`);
      setTicker("");
      refreshCompanies();
    } catch (err) {
      setNotice(err instanceof Error ? err.message : "Ingest failed");
    } finally {
      setIngesting(false);
    }
  }

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">ECON·INTEL</span>
          <span className="brand-sub">operating system</span>
        </div>
        <div className="legend" aria-hidden="true">
          <span className="legend-item ledger">companies · filings</span>
          <span className="legend-item signal">committees · money</span>
          <span className="legend-item rose">people</span>
        </div>
        <div className="topbar-actions">
          <form
            className="ingest"
            onSubmit={(e) => {
              e.preventDefault();
              void handleIngest();
            }}
          >
            <input
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              placeholder="Ticker, e.g. NVDA"
              aria-label="Ticker to ingest"
              disabled={ingesting}
            />
            <button type="submit" disabled={ingesting}>
              {ingesting ? "Ingesting…" : "Ingest"}
            </button>
          </form>
          <div
            className={`health ${health?.status ?? "unknown"}`}
            title={
              health
                ? Object.entries(health.services)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join("\n")
                : "API unreachable"
            }
          >
            <span className="dot" />
            {health ? health.status : "offline"}
          </div>
        </div>
      </header>

      {notice && (
        <div className="notice" role="status">
          {notice}
          <button className="notice-close" onClick={() => setNotice(null)}>
            ×
          </button>
        </div>
      )}

      <main className="layout">
        <aside className="rail">
          <SearchBar onSelect={setSelected} />
          <AskPanel />
        </aside>

        <section className="canvas">
          <nav className="tabs">
            {(["graph", "map", "flows"] as Tab[]).map((t) => (
              <button
                key={t}
                className={`tab ${t} ${tab === t ? "active" : ""}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
            {selected && (
              <span className="selected-chip">
                <b>{selected.name}</b>
                <code>{selected.uid}</code>
              </span>
            )}
          </nav>

          <div className="canvas-body">
            {tab === "graph" && <GraphExplorer uid={selected?.uid ?? null} />}
            {tab === "map" && <MapView companies={companies} />}
            {tab === "flows" && (
              <FlowsChart
                companyId={selectedCompanyId}
                companyName={selected?.name ?? null}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
