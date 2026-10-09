import React from "react";

/**
 * HoneyBee Systems — Tabs
 * Horizontal tab navigation with a honey underline indicator.
 * Controlled via `value`+`onChange`, or uncontrolled via `defaultValue`.
 */
export function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const first = defaultValue ?? (items[0] && items[0].value);
  const [internal, setInternal] = React.useState(first);
  const active = value !== undefined ? value : internal;

  const select = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };

  return (
    <div
      role="tablist"
      style={{
        display: "flex", gap: "var(--space-6)",
        borderBottom: "var(--border-width) solid var(--border-default)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const isActive = it.value === active;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => select(it.value)}
            style={{
              position: "relative",
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "0 2px 12px",
              border: "none", background: "transparent", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontSize: "var(--fs-body)",
              fontWeight: isActive ? "var(--fw-bold)" : "var(--fw-semibold)",
              color: isActive ? "var(--text-strong)" : "var(--text-muted)",
              transition: "color var(--dur-fast) var(--ease-standard)",
            }}
          >
            {it.icon ? <span style={{ display: "inline-flex" }}>{it.icon}</span> : null}
            {it.label}
            {it.badge != null ? (
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                minWidth: 20, height: 20, padding: "0 6px", borderRadius: "var(--radius-pill)",
                background: isActive ? "var(--hb-honey-100)" : "var(--hb-slate-100)",
                color: isActive ? "var(--hb-honey-700)" : "var(--text-muted)",
                fontSize: "var(--fs-caption)", fontWeight: "var(--fw-bold)",
              }}>{it.badge}</span>
            ) : null}
            <span style={{
              position: "absolute", left: 0, right: 0, bottom: -1, height: 3,
              borderRadius: "3px 3px 0 0",
              background: isActive ? "var(--hb-honey-500)" : "transparent",
              transition: "background var(--dur-fast) var(--ease-standard)",
            }} />
          </button>
        );
      })}
    </div>
  );
}
