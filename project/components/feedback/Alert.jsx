import React from "react";

/**
 * HoneyBee Systems — Alert
 * Inline message banner for status, tips, and errors.
 */
export function Alert({
  children,
  title,
  tone = "info",
  icon = null,
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info:    { bg: "var(--hb-info-soft)",    bd: "var(--hb-info)",    fg: "var(--hb-info)" },
    success: { bg: "var(--hb-success-soft)", bd: "var(--hb-success)", fg: "var(--hb-success)" },
    warning: { bg: "var(--hb-warning-soft)", bd: "var(--hb-warning)", fg: "var(--hb-honey-700)" },
    danger:  { bg: "var(--hb-danger-soft)",  bd: "var(--hb-danger)",  fg: "var(--hb-danger)" },
    honey:   { bg: "var(--hb-honey-50)",     bd: "var(--hb-honey-500)", fg: "var(--hb-honey-700)" },
  };
  const c = tones[tone] || tones.info;

  const defaultGlyph = {
    info: "i", success: "✓", warning: "!", danger: "!", honey: "✦",
  }[tone];

  return (
    <div
      role="alert"
      style={{
        display: "flex", alignItems: "flex-start", gap: 12,
        padding: "var(--space-4) var(--space-5)",
        background: c.bg,
        borderRadius: "var(--radius-md)",
        borderLeft: `4px solid ${c.bd}`,
        ...style,
      }}
      {...rest}
    >
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 22, height: 22, flexShrink: 0, marginTop: 1, borderRadius: "var(--radius-pill)",
        background: c.bd, color: "var(--hb-white)",
        fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: "var(--fw-bold)",
      }}>
        {icon || defaultGlyph}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title ? (
          <div style={{
            fontFamily: "var(--font-sans)", fontSize: "var(--fs-body)",
            fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 2,
          }}>{title}</div>
        ) : null}
        <div style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)",
          fontWeight: "var(--fw-medium)", color: "var(--text-body)", lineHeight: "var(--lh-normal)",
        }}>{children}</div>
      </div>
      {onClose ? (
        <button type="button" aria-label="Dismiss" onClick={onClose} style={{
          border: "none", background: "transparent", cursor: "pointer",
          color: "var(--text-muted)", padding: 2, marginTop: -2, marginRight: -4, display: "inline-flex",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>
      ) : null}
    </div>
  );
}
