import React from "react";

/**
 * HoneyBee Systems — Tooltip
 * Hover/focus tooltip. Wraps its trigger child; shows `content` on a dark
 * slate bubble. `placement` positions the bubble.
 */
export function Tooltip({
  children,
  content,
  placement = "top",
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(false);

  const pos = {
    top:    { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left:   { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right:  { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  };

  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...rest}
    >
      {children}
      {open ? (
        <span
          role="tooltip"
          style={{
            position: "absolute", zIndex: "var(--z-dropdown)", ...pos[placement],
            padding: "6px 10px",
            background: "var(--hb-slate-800)", color: "var(--hb-cream-100)",
            borderRadius: "var(--radius-sm)",
            fontFamily: "var(--font-sans)", fontSize: "var(--fs-caption)",
            fontWeight: "var(--fw-semibold)", whiteSpace: "nowrap",
            boxShadow: "var(--shadow-md)", pointerEvents: "none",
          }}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
