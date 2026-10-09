import React from "react";

/**
 * HoneyBee Systems — Tag
 * A removable/selectable chip for filters, categories, and multi-select.
 */
export function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  iconLeft = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "5px 12px", height: 30,
        borderRadius: "var(--radius-sm)",
        border: `var(--border-width) solid ${selected ? "var(--hb-honey-500)" : "var(--border-default)"}`,
        background: selected ? "var(--hb-honey-50)" : hover && onClick ? "var(--hb-slate-50)" : "var(--surface-card)",
        color: selected ? "var(--hb-honey-700)" : "var(--text-body)",
        fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--fw-semibold)", lineHeight: 1, whiteSpace: "nowrap",
        cursor: onClick ? "pointer" : "default",
        transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      {iconLeft ? <span style={{ display: "inline-flex" }}>{iconLeft}</span> : null}
      {children}
      {onRemove ? (
        <button
          type="button"
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 16, height: 16, marginRight: -4, marginLeft: 2, padding: 0,
            border: "none", background: "transparent", cursor: "pointer", color: "currentColor",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        </button>
      ) : null}
    </span>
  );
}
