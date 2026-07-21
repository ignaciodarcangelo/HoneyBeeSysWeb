import React from "react";

/**
 * HoneyBee Systems — Switch
 * On/off toggle. On = honey gold. Use for settings and enablement.
 */
export function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = "md",
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;

  const dims = { sm: { w: 36, h: 20, k: 14 }, md: { w: 46, h: 26, k: 20 } };
  const d = dims[size] || dims.md;
  const pad = (d.h - d.k) / 2;

  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  };

  return (
    <label htmlFor={inputId} style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-sans)", fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)", color: "var(--text-body)", userSelect: "none", ...style,
    }}>
      <input id={inputId} type="checkbox" role="switch" checked={on} disabled={disabled}
        onChange={toggle} style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} {...rest} />
      <span aria-hidden="true" style={{
        position: "relative", display: "inline-block", flexShrink: 0,
        width: d.w, height: d.h, borderRadius: "var(--radius-pill)",
        background: on ? "var(--hb-honey-500)" : "var(--hb-slate-300)",
        transition: "background var(--dur-base) var(--ease-standard)",
      }}>
        <span style={{
          position: "absolute", top: pad, left: on ? d.w - d.k - pad : pad,
          width: d.k, height: d.k, borderRadius: "var(--radius-pill)",
          background: "var(--hb-white)", boxShadow: "var(--shadow-sm)",
          transition: "left var(--dur-base) var(--ease-standard)",
        }} />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
