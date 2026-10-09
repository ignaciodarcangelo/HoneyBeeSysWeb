import React from "react";

/**
 * HoneyBee Systems — Badge
 * Small status pill. Semantic tones map to status colors; `honey` is the brand tone.
 */
export function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { soft: { bg: "var(--hb-slate-100)", fg: "var(--hb-slate-600)" }, solid: { bg: "var(--hb-slate-600)", fg: "var(--hb-white)" } },
    honey:   { soft: { bg: "var(--hb-honey-100)", fg: "var(--hb-honey-700)" }, solid: { bg: "var(--hb-honey-500)", fg: "var(--hb-slate-800)" } },
    success: { soft: { bg: "var(--hb-success-soft)", fg: "var(--hb-success)" }, solid: { bg: "var(--hb-success)", fg: "var(--hb-white)" } },
    warning: { soft: { bg: "var(--hb-warning-soft)", fg: "var(--hb-honey-700)" }, solid: { bg: "var(--hb-warning)", fg: "var(--hb-slate-800)" } },
    danger:  { soft: { bg: "var(--hb-danger-soft)", fg: "var(--hb-danger)" }, solid: { bg: "var(--hb-danger)", fg: "var(--hb-white)" } },
    info:    { soft: { bg: "var(--hb-info-soft)", fg: "var(--hb-info)" }, solid: { bg: "var(--hb-info)", fg: "var(--hb-white)" } },
  };
  const c = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;

  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 10px", height: 24,
      borderRadius: "var(--radius-pill)",
      background: c.bg, color: c.fg,
      fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-bold)", letterSpacing: "0.02em",
      lineHeight: 1, whiteSpace: "nowrap", ...style,
    }} {...rest}>
      {dot ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} /> : null}
      {children}
    </span>
  );
}
