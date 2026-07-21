import React from "react";

/**
 * HoneyBee Systems — Input
 * Text field with optional label, helper/error text, and leading/trailing adornments.
 */
export function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  helperText,
  error,
  disabled = false,
  required = false,
  iconLeft = null,
  iconRight = null,
  size = "md",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const heights = { sm: 38, md: 44, lg: 52 };
  const h = heights[size] || heights.md;

  const borderColor = error
    ? "var(--hb-danger)"
    : focus
    ? "var(--border-focus)"
    : "var(--border-default)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...style }}>
      {label ? (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-body-sm)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--text-strong)",
          }}
        >
          {label}
          {required ? <span style={{ color: "var(--hb-danger)", marginLeft: 3 }}>*</span> : null}
        </label>
      ) : null}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          height: h,
          padding: "0 var(--space-4)",
          background: disabled ? "var(--hb-slate-50)" : "var(--surface-card)",
          border: `var(--border-width) solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          boxShadow: focus ? "var(--ring)" : "none",
          transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {iconLeft ? <span style={{ display: "inline-flex", color: "var(--text-muted)" }}>{iconLeft}</span> : null}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-body)",
            fontWeight: "var(--fw-medium)",
            color: "var(--text-strong)",
          }}
          {...rest}
        />
        {iconRight ? <span style={{ display: "inline-flex", color: "var(--text-muted)" }}>{iconRight}</span> : null}
      </div>

      {error || helperText ? (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-caption)",
            fontWeight: "var(--fw-medium)",
            color: error ? "var(--hb-danger)" : "var(--text-muted)",
          }}
        >
          {error || helperText}
        </span>
      ) : null}
    </div>
  );
}
