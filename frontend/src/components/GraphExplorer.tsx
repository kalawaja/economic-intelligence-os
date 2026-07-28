import { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import type { Core, ElementDefinition } from "cytoscape";
import { api } from "../api";
import type { GraphElements } from "../types";

const KIND_COLORS: Record<string, string> = {
  company: "#6FB3FF",
  filing: "#3D6EA8",
  person: "#F27FA5",
  committee: "#FFB454",
};

interface Props {
  uid: string | null;
}

export default function GraphExplorer({ uid }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cyRef = useRef<Core | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cy = cytoscape({
      container: containerRef.current,
      elements: [],
      wheelSensitivity: 0.25,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "data(color)",
            label: "data(name)",
            color: "#E6EBF4",
            "font-size": 9,
            "font-family": "'Fragment Mono', monospace",
            "text-wrap": "wrap",
            "text-max-width": "110",
            "text-valign": "bottom",
            "text-margin-y": 5,
            width: 22,
            height: 22,
            "border-width": 1.5,
            "border-color": "#0D1220",
          },
        },
        {
          selector: "edge",
          style: {
            width: 1.2,
            "line-color": "#2B3A5C",
            "curve-style": "bezier",
            label: "data(kind)",
            "font-size": 7,
            "font-family": "'Fragment Mono', monospace",
            color: "#8A96AD",
            "text-rotation": "autorotate",
            "text-background-color": "#0D1220",
            "text-background-opacity": 0.7,
            "text-background-padding": "1",
          },
        },
        {
          selector: "node:selected",
          style: { "border-color": "#E6EBF4", "border-width": 2.5 },
        },
      ],
    });

    cy.on("tap", "node", (evt) => {
      const nodeUid = evt.target.id() as string;
      setStatus(`Expanding ${nodeUid}…`);
      api
        .neighbors(nodeUid)
        .then((g) => {
          addElements(cy, g);
          setStatus(null);
        })
        .catch(() => setStatus(null));
    });

    cyRef.current = cy;
    return () => {
      cy.destroy();
      cyRef.current = null;
    };
  }, []);

  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    if (!uid) {
      cy.elements().remove();
      return;
    }
    setStatus("Loading neighborhood…");
    cy.elements().remove();
    api
      .neighbors(uid)
      .then((g) => {
        addElements(cy, g);
        setStatus(null);
      })
      .catch((err) => {
        setStatus(err instanceof Error ? err.message : "Graph unavailable");
      });
  }, [uid]);

  return (
    <div className="graph-wrap">
      {!uid && (
        <div className="empty">
          Select an entity on the left. Tap any node to expand its neighborhood.
        </div>
      )}
      {status && <div className="graph-status">{status}</div>}
      <div ref={containerRef} className="graph-canvas" />
    </div>
  );
}

function addElements(cy: Core, g: GraphElements) {
  const additions: ElementDefinition[] = [];
  for (const node of g.nodes) {
    if (cy.getElementById(node.id).empty()) {
      additions.push({
        data: { ...node, color: KIND_COLORS[node.kind] ?? "#8A96AD" },
      });
    }
  }
  for (const edge of g.edges) {
    if (cy.getElementById(edge.id).empty()) {
      additions.push({ data: { ...edge } });
    }
  }
  if (additions.length > 0) {
    cy.add(additions);
    cy.layout({ name: "cose", animate: false, padding: 40 }).run();
  }
}
