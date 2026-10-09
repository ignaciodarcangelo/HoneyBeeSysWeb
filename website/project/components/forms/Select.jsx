import React from "react";

/**
 * HoneyBee Systems — Select
 * Native-backed dropdown with a custom chevron and brand styling.
 */
export function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder,
  helperText,
  error,
  disabled = false,
  required = false,
  size = "md",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const heights = { sm: 38, md: 44, lg: 52 };
  const h = heights[size] || heights.md;
  const borderColor = error ? "var(--hb-danger)" : focus ? "var(--border-focus)" : "var(--border-default)";

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
      <div style={{ position: "relative", width: "100%" }}>
        <select
          id={inputId}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            width: "100%",
            height: h,
            padding: "0 var(--space-10) 0 var(--space-4)",
            background: disabled ? "var(--hb-slate-50)" : "var(--surface-card)",
            border: `var(--border-width) solid ${borderColor}`,
            borderRadius: "var(--radius-md)",
            boxShadow: focus ? "var(--ring)" : "none",
            outline: "none",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-body)",
            fontWeight: "var(--fw-medium)",
            color: "var(--text-strong)",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
            transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
          }}
          {...rest}
        >
          {placeholder ? <option value="" disabled>{placeholder}</option> : null}
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
          style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
          <path d="M6 9l6 6 6-6" stroke="var(--text-muted)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {error || helperText ? (
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)",
          fontWeight: "var(--fw-medium)", color: error ? "var(--hb-danger)" : "var(--text-muted)",
        }}>
          {error || helperText}
        </span>
      ) : null}
    </div>
  );
}
