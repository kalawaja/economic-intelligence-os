import type {
  AskResponse,
  CompanyOut,
  ContributionSummaryRow,
  GraphElements,
  Health,
  SearchResponse,
} from "./types";

const BASE =
  (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:8000";

async function j<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`);
  return (await res.json()) as T;
}

export const api = {
  health: () => j<Health>("/health"),
  search: (q: string) => j<SearchResponse>(`/api/search?q=${encodeURIComponent(q)}`),
  neighbors: (uid: string) =>
    j<GraphElements>(`/api/graph/neighbors?uid=${encodeURIComponent(uid)}`),
  ask: (question: string) =>
    j<AskResponse>("/api/ask", { method: "POST", body: JSON.stringify({ question }) }),
  companies: () => j<CompanyOut[]>("/api/companies"),
  contributionSummary: (id: number) =>
    j<ContributionSummaryRow[]>(`/api/companies/${id}/contributions/summary`),
  ingestTicker: (ticker: string) =>
    j<Record<string, unknown>>("/api/companies/ingest", {
      method: "POST",
      body: JSON.stringify({ ticker }),
    }),
};
