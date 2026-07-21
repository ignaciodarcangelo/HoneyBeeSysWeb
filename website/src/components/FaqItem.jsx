import React from "react";
import { Card } from "../../../project/components/layout/Card.jsx";
import { IconArrow } from "../sections/icons.jsx";

export function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="hb-service-card hb-service-card--wide">
      <Card variant="outline" padding="none" style={{ overflow: "hidden" }}>
        <button
          type="button"
          onClick={onToggle}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            padding: "var(--space-5)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
            font: "inherit",
          }}
          aria-expanded={open}
        >
          <span style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body)", color: "var(--text-strong)" }}>{q}</span>
          <span
            style={{
              flexShrink: 0,
              width: 22,
              height: 22,
              display: "inline-flex",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform var(--dur-fast) var(--ease-standard)",
              color: "var(--hb-honey-600)",
            }}
          >
            <IconArrow />
          </span>
        </button>
        {open ? (
          <div style={{ padding: "0 var(--space-5) var(--space-5)", color: "var(--text-body)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)" }}>
            {a}
          </div>
        ) : null}
      </Card>
    </div>
  );
}
