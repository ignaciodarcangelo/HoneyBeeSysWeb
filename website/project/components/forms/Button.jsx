import React from "react";

/**
 * HoneyBee Systems — Button
 * The primary action element. `primary` uses the Amber action color
 * (reserved for CTAs), `secondary` is a slate outline, `ghost` is text-only,
 * and `inverse` is for dark (slate) surfaces.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "0 var(--space-4)", height: 36, fontSize: "var(--fs-body-sm)", gap: 6 },
    md: { padding: "0 var(--space-6)", height: 44, fontSize: "var(--fs-body)", gap: 8 },
    lg: { padding: "0 var(--space-8)", height: 54, fontSize: "var(--fs-body-lg)", gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-bold)",
    fontSize: s.fontSize,
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    border: "var(--border-width-strong) solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  const variants = {
    primary: {
      background: "var(--action)",
      color: "var(--text-on-honey)",
      boxShadow: "var(--shadow-xs)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
    },
    inverse: {
      background: "var(--hb-cream-100)",
      color: "var(--hb-slate-800)",
    },
  };

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverStyles = {
    primary: { background: "var(--action-hover)", boxShadow: "var(--shadow-honey)" },
    secondary: { background: "var(--hb-slate-50)", borderColor: "var(--hb-slate-400)" },
    ghost: { background: "var(--hb-slate-50)" },
    inverse: { background: "var(--hb-cream-300)" },
  };

  const composed = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hoverStyles[variant] : {}),
    ...(active && !disabled ? { transform: "translateY(1px) scale(0.99)" } : {}),
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={composed}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {iconLeft ? <span style={{ display: "inline-flex", marginLeft: -2 }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: "inline-flex", marginRight: -2 }}>{iconRight}</span> : null}
    </button>
  );
}
