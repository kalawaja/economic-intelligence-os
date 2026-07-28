import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { CompanyOut } from "../types";
import { STATE_CENTROIDS } from "../lib/stateCentroids";

interface Props {
  companies: CompanyOut[];
}

export default function MapView({ companies }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      center: [39.0, -96.0],
      zoom: 4,
      zoomControl: false,
    });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 12,
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    layerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    layer.clearLayers();
    for (const company of companies) {
      const state = (company.state ?? "").toUpperCase();
      const centroid = STATE_CENTROIDS[state];
      if (!centroid) continue;
      L.circleMarker(centroid, {
        radius: 7,
        color: "#6FB3FF",
        weight: 1.5,
        fillColor: "#6FB3FF",
        fillOpacity: 0.35,
      })
        .bindPopup(
          `<b>${company.name}</b><br/>${company.ticker ?? ""} · ${state}<br/>${
            company.sic_description ?? ""
          }`
        )
        .addTo(layer);
    }
  }, [companies]);

  return (
    <div className="map-wrap">
      {companies.length === 0 && (
        <div className="empty">No companies yet — ingest a ticker to place it.</div>
      )}
      <div ref={containerRef} className="map-canvas" />
    </div>
  );
}
