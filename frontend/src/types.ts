export interface Health {
  status: "ok" | "degraded";
  services: Record<string, string>;
}

export interface EntityHit {
  uid: string;
  kind: "company" | "person" | "committee" | string;
  name: string;
  ticker?: string;
  state?: string;
  score: number;
}

export interface DocumentHit {
  title?: string;
  form?: string;
  filed_at?: string;
  company?: string;
  company_uid?: string;
  url?: string;
  score: number;
}

export interface SearchResponse {
  entities: EntityHit[];
  documents: DocumentHit[];
}

export interface GraphNode {
  id: string;
  name: string;
  kind: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  kind: string;
  amount?: number | null;
}

export interface GraphElements {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface AskResponse {
  answer: string | null;
  note: string | null;
  entities: EntityHit[];
  graph_facts: string[];
  sources: DocumentHit[];
}

export interface CompanyOut {
  id: number;
  uid: string;
  cik: number | null;
  ticker: string | null;
  name: string;
  state: string | null;
  sic_description: string | null;
}

export interface ContributionSummaryRow {
  committee: string;
  total: number;
  count: number;
}
