import { useEffect, useRef, useState } from "react";
import { api } from "../api";
import type { EntityHit, SearchResponse } from "../types";

interface Props {
  onSelect: (hit: EntityHit) => void;
}

export default function SearchBar({ onSelect }: Props) {
  const [q, setQ] = useState("");
  const [result, setResult] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current);
    if (q.trim().length < 2) {
      setResult(null);
      setError(null);
      return;
    }
    timer.current = window.setTimeout(() => {
      api
        .search(q.trim())
        .then((r) => {
          setResult(r);
          setError(null);
        })
        .catch((err) =>
          setError(err instanceof Error ? err.message : "Search failed")
        );
    }, 300);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [q]);

  return (
    <div className="panel">
      <h2 className="panel-title">Search entities</h2>
      <input
        className="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Company, person or committee"
        aria-label="Search entities"
      />
      {error && <p className="hint error">{error}</p>}
      {!result && !error && (
        <p className="hint">
          Search for a company, then select it to draw its neighborhood.
        </p>
      )}
      {result && (
        <>
          <ul className="hits">
            {result.entities.map((hit) => (
              <li key={hit.uid}>
                <button className="hit" onClick={() => onSelect(hit)}>
                  <span className={`kind-dot ${hit.kind}`} />
                  <span className="hit-name">{hit.name}</span>
                  <code className="hit-uid">{hit.uid}</code>
                </button>
              </li>
            ))}
            {result.entities.length === 0 && (
              <li className="hint">No entities yet — ingest a ticker above.</li>
            )}
          </ul>
          {result.documents.length > 0 && (
            <>
              <h3 className="panel-subtitle">Documents</h3>
              <ul className="docs">
                {result.documents.slice(0, 5).map((doc, i) => (
                  <li key={`${doc.url}-${i}`}>
                    <a href={doc.url} target="_blank" rel="noreferrer">
                      <code className="doc-form">{doc.form ?? "DOC"}</code>
                      <span>{doc.title}</span>
                      <span className="doc-meta">
                        {doc.company} · {doc.filed_at}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}
