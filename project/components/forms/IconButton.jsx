import React from "react";

/**
 * HoneyBee Systems — IconButton
 * Square/circular button holding a single icon. Used for toolbar actions,
 * close buttons, and compact controls.
 */
export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  shape = "rounded",
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = { sm: 32, md: 40, lg: 48 };
  const dim = sizes[size] || sizes.md;

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const variants = {
    solid:   { background: "var(--action)", color: "var(--text-on-honey)", border: "none" },
    ghost:   { background: "transparent", color: "var(--text-body)", border: "none" },
    outline: { background: "var(--surface-card)", color: "var(--text-strong)", border: "var(--border-width) solid var(--border-default)" },
    inverse: { background: "rgba(245,239,224,0.10)", color: "var(--text-on-dark)", border: "none" },
  };
  const hoverStyles = {
    solid:   { background: "var(--action-hover)" },
    ghost:   { background: "var(--hb-slate-100)" },
    outline: { background: "var(--hb-slate-50)", borderColor: "var(--border-strong)" },
    inverse: { background: "rgba(245,239,224,0.20)" },
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
        transform: active && !disabled ? "scale(0.94)" : "none",
        ...variants[variant],
        ...(hover && !disabled ? hoverStyles[variant] : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
