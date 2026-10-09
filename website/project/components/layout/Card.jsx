import React from "react";

/**
 * HoneyBee Systems — Card
 * The core surface container. `elevated` (default) uses a soft slate-tinted
 * shadow; `outline` uses a border; `honey` is a warm tinted panel;
 * `inverse` is a dark slate card. `interactive` adds hover lift.
 */
export function Card({
  children,
  variant = "elevated",
  padding = "lg",
  interactive = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0, sm: "var(--space-4)", md: "var(--space-6)", lg: "var(--space-8)",
  };

  const variants = {
    elevated: { background: "var(--surface-card)", boxShadow: "var(--shadow-md)", border: "var(--border-width) solid var(--border-subtle)" },
    outline:  { background: "var(--surface-card)", border: "var(--border-width) solid var(--border-default)" },
    honey:    { background: "var(--surface-honey-soft)", border: "var(--border-width) solid var(--hb-honey-200)" },
    inverse:  { background: "var(--surface-inverse)", border: "var(--border-width) solid var(--border-on-dark)", color: "var(--text-on-dark)" },
    sunken:   { background: "var(--surface-sunken)", border: "var(--border-width) solid var(--border-subtle)" },
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: "var(--radius-card)",
        padding: pads[padding] ?? pads.lg,
        transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
        cursor: interactive || onClick ? "pointer" : "default",
        ...variants[variant],
        ...(interactive && hover
          ? { boxShadow: "var(--shadow-lg)", transform: "translateY(-3px)" }
          : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
