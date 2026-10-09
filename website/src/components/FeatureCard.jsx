import React from "react";
import { Card } from "../../project/components/layout/Card.jsx";
import { HexIcon } from "../../project/components/brand/HexIcon.jsx";

export function FeatureCard({ icon: Ic, title, body }) {
  return (
    <div className="hb-service-card" style={{ height: "100%" }}>
      <Card variant="elevated" style={{ height: "100%", minHeight: 190, display: "flex", flexDirection: "column" }}>
        <HexIcon tone="honey" size={52} style={{ marginBottom: "var(--space-4)" }}>
          <Ic />
        </HexIcon>
        <h4 style={{ margin: 0, fontSize: "var(--fs-h5)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</h4>
        <p style={{ margin: "var(--space-2) 0 0", color: "var(--text-body)", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)" }}>
          {body}
        </p>
      </Card>
    </div>
  );
}
