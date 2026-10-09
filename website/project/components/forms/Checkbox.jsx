import React from "react";

/**
 * HoneyBee Systems — Checkbox
 * Custom-styled checkbox with brand honey fill when checked.
 */
export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internal;

  const handle = (e) => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={inputId} style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-sans)", fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)", color: "var(--text-body)", userSelect: "none", ...style,
    }}>
      <input id={inputId} type="checkbox" checked={isChecked} disabled={disabled}
        onChange={handle}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} {...rest} />
      <span aria-hidden="true" style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 20, height: 20, flexShrink: 0,
        borderRadius: "var(--radius-xs)",
        border: `var(--border-width-strong) solid ${isChecked ? "var(--hb-honey-500)" : "var(--border-strong)"}`,
        background: isChecked ? "var(--hb-honey-500)" : "var(--surface-card)",
        transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
      }}>
        {isChecked ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5l4.5 4.5L19 7" stroke="var(--hb-slate-800)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : null}
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
