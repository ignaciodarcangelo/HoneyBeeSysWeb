import React from "react";

/**
 * HoneyBee Systems — Radio
 * Single radio control. Use several with the same `name` for a group.
 */
export function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  name,
  value,
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
      <input id={inputId} type="radio" name={name} value={value} checked={isChecked}
        disabled={disabled} onChange={handle}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }} {...rest} />
      <span aria-hidden="true" style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 20, height: 20, flexShrink: 0, borderRadius: "var(--radius-pill)",
        border: `var(--border-width-strong) solid ${isChecked ? "var(--hb-honey-500)" : "var(--border-strong)"}`,
        background: "var(--surface-card)",
        transition: "border-color var(--dur-fast) var(--ease-standard)",
      }}>
        {isChecked ? (
          <span style={{ width: 10, height: 10, borderRadius: "var(--radius-pill)", background: "var(--hb-honey-500)" }} />
        ) : null}
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
