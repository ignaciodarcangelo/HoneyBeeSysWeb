import React from "react";
import { Card } from "./Card.jsx";

/**
 * HoneyBee Systems — StatCard
 * A metric tile for dashboards: label, big value, optional delta + icon.
 */
export function StatCard({
  label,
  value,
  unit,
  delta,
  deltaDirection = "up",
  icon = null,
  variant = "elevated",
  style = {},
  ...rest
}) {
  const deltaColor =
    deltaDirection === "up" ? "var(--hb-success)" :
    deltaDirection === "down" ? "var(--hb-danger)" : "var(--text-muted)";
  const onDark = variant === "inverse";

  return (
    <Card variant={variant} padding="md" style={{ minWidth: 180, ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)",
          fontWeight: "var(--fw-semibold)",
          color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
        }}>{label}</span>
        {icon ? (
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 34, height: 34, borderRadius: "var(--radius-sm)",
            background: onDark ? "rgba(242,181,24,0.16)" : "var(--hb-honey-50)",
            color: "var(--hb-honey-600)",
          }}>{icon}</span>
        ) : null}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 10 }}>
        <span style={{
          fontFamily: "var(--font-display)", fontSize: "var(--fs-h2)",
          fontWeight: "var(--fw-extrabold)", letterSpacing: "var(--ls-tight)", lineHeight: 1,
          color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
        }}>{value}</span>
        {unit ? <span style={{ fontSize: "var(--fs-body)", fontWeight: "var(--fw-semibold)", color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)" }}>{unit}</span> : null}
      </div>
      {delta ? (
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
          <span style={{ color: deltaColor, fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)" }}>
            {deltaDirection === "up" ? "▲" : deltaDirection === "down" ? "▼" : "•"} {delta}
          </span>
        </div>
      ) : null}
    </Card>
  );
}
