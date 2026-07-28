import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { api } from "../api";
import type { ContributionSummaryRow } from "../types";

interface Props {
  companyId: number | null;
  companyName: string | null;
}

export default function FlowsChart({ companyId, companyName }: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [rows, setRows] = useState<ContributionSummaryRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (companyId === null) {
      setRows([]);
      return;
    }
    api
      .contributionSummary(companyId)
      .then((r) => {
        setRows(r);
        setError(null);
      })
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Load failed")
      );
  }, [companyId]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    if (rows.length === 0 || !svgRef.current) return;

    const width = svgRef.current.clientWidth || 720;
    const barHeight = 30;
    const margin = { top: 8, right: 90, bottom: 8, left: 260 };
    const height = margin.top + margin.bottom + rows.length * barHeight;
    svg.attr("viewBox", `0 0 ${width} ${height}`).attr("height", height);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(rows, (d) => d.total) ?? 1])
      .range([0, width - margin.left - margin.right]);
    const y = d3
      .scaleBand<string>()
      .domain(rows.map((d) => d.committee))
      .range([margin.top, height - margin.bottom])
      .padding(0.25);

    const g = svg.append("g");

    g.selectAll("rect")
      .data(rows)
      .join("rect")
      .attr("x", margin.left)
      .attr("y", (d) => y(d.committee) ?? 0)
      .attr("width", (d) => Math.max(2, x(d.total)))
      .attr("height", y.bandwidth())
      .attr("rx", 3)
      .attr("fill", "#FFB454")
      .attr("fill-opacity", 0.85);

    g.selectAll("text.committee")
      .data(rows)
      .join("text")
      .attr("class", "committee")
      .attr("x", margin.left - 10)
      .attr("y", (d) => (y(d.committee) ?? 0) + y.bandwidth() / 2 + 3)
      .attr("text-anchor", "end")
      .attr("fill", "#E6EBF4")
      .attr("font-size", 11)
      .text((d) =>
        d.committee.length > 38 ? `${d.committee.slice(0, 37)}…` : d.committee
      );

    g.selectAll("text.amount")
      .data(rows)
      .join("text")
      .attr("class", "amount")
      .attr("x", (d) => margin.left + Math.max(2, x(d.total)) + 8)
      .attr("y", (d) => (y(d.committee) ?? 0) + y.bandwidth() / 2 + 3)
      .attr("fill", "#8A96AD")
      .attr("font-size", 10)
      .attr("font-family", "'Fragment Mono', monospace")
      .text((d) => `$${d3.format(",.0f")(d.total)} · ${d.count}`);
  }, [rows]);

  if (companyId === null) {
    return (
      <div className="empty">
        Select a company to chart where its employees' contributions flow.
      </div>
    );
  }

  return (
    <div className="flows-wrap">
      <h2 className="flows-title">
        Employee contributions from <b>{companyName}</b> by committee
      </h2>
      {error && <p className="hint error">{error}</p>}
      {!error && rows.length === 0 && (
        <p className="hint">
          No contributions linked yet. Run an ingest — FEC matching depends on
          employer strings, so coverage varies by company.
        </p>
      )}
      <svg ref={svgRef} className="flows-svg" />
    </div>
  );
}
