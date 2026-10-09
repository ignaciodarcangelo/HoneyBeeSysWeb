import React from "react";

/**
 * HoneyBee Systems — Textarea
 * Multi-line text input, matching Input styling.
 */
export function Textarea({
  label,
  id,
  placeholder,
  value,
  defaultValue,
  onChange,
  helperText,
  error,
  disabled = false,
  required = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const borderColor = error
    ? "var(--hb-danger)"
    : focus
    ? "var(--border-focus)"
    : "var(--border-default)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...style }}>
      {label ? (
        <label htmlFor={inputId} style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)",
          fontWeight: "var(--fw-semibold)", color: "var(--text-strong)",
        }}>
          {label}
          {required ? <span style={{ color: "var(--hb-danger)", marginLeft: 3 }}>*</span> : null}
        </label>
      ) : null}
      <textarea
        id={inputId}
        rows={rows}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          resize: "vertical",
          padding: "var(--space-3) var(--space-4)",
          background: disabled ? "var(--hb-slate-50)" : "var(--surface-card)",
          border: `var(--border-width) solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          boxShadow: focus ? "var(--ring)" : "none",
          outline: "none",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--fs-body)",
          fontWeight: "var(--fw-medium)",
          lineHeight: "var(--lh-normal)",
          color: "var(--text-strong)",
          opacity: disabled ? 0.6 : 1,
          transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
        }}
        {...rest}
      />
      {error || helperText ? (
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)",
          fontWeight: "var(--fw-medium)",
          color: error ? "var(--hb-danger)" : "var(--text-muted)",
        }}>
          {error || helperText}
        </span>
      ) : null}
    </div>
  );
}
