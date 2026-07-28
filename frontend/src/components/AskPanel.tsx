import { useState } from "react";
import { api } from "../api";
import type { AskResponse } from "../types";

export default function AskPanel() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AskResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    const q = question.trim();
    if (!q || loading) return;
    setLoading(true);
    setError(null);
    try {
      setResponse(await api.ask(q));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="panel">
      <h2 className="panel-title">Ask the graph</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Which committees received money from Lockheed Martin employees?"
        rows={3}
        aria-label="Question"
      />
      <button className="primary" onClick={() => void submit()} disabled={loading}>
        {loading ? "Retrieving…" : "Ask"}
      </button>

      {error && <p className="hint error">{error}</p>}
      {response && (
        <div className="answer">
          {response.answer ? (
            <p className="answer-text">{response.answer}</p>
          ) : (
            <p className="hint">{response.note}</p>
          )}
          {response.graph_facts.length > 0 && (
            <details>
              <summary>{response.graph_facts.length} graph facts</summary>
              <ul className="facts">
                {response.graph_facts.slice(0, 12).map((fact, i) => (
                  <li key={i}>
                    <code>[G{i + 1}]</code> {fact}
                  </li>
                ))}
              </ul>
            </details>
          )}
          {response.sources.length > 0 && (
            <ul className="sources">
              {response.sources.slice(0, 5).map((s, i) => (
                <li key={i}>
                  <code>[S{i + 1}]</code>{" "}
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.title ?? s.url}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
