import React from "react";

/**
 * HoneyBee Systems — HexIcon
 * The signature honeycomb-hex frame around an icon or glyph. This is the
 * brand's iconography motif: features, service categories, and empty-state
 * illustrations sit inside a hexagon. Pass any icon node as children.
 */
export function HexIcon({
  children,
  size = 56,
  tone = "honey",
  style = {},
  ...rest
}) {
  const tones = {
    honey:   { fill: "var(--hb-honey-50)",  stroke: "var(--hb-honey-500)", ink: "var(--hb-honey-700)" },
    solid:   { fill: "var(--hb-honey-500)", stroke: "var(--hb-honey-500)", ink: "var(--hb-slate-800)" },
    slate:   { fill: "var(--hb-slate-50)",  stroke: "var(--hb-slate-300)", ink: "var(--hb-slate-700)" },
    inverse: { fill: "rgba(242,181,24,0.14)", stroke: "rgba(242,181,24,0.55)", ink: "var(--hb-honey-400)" },
  };
  const c = tones[tone] || tones.honey;

  return (
    <span style={{
      position: "relative", display: "inline-flex", alignItems: "center",
      justifyContent: "center", width: size, height: size, flexShrink: 0, ...style,
    }} {...rest}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
        {/* flat-top hexagon */}
        <path
          d="M27 8 L73 8 L96 50 L73 92 L27 92 L4 50 Z"
          fill={c.fill}
          stroke={c.stroke}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{
        position: "relative", display: "inline-flex", alignItems: "center",
        justifyContent: "center", color: c.ink, width: size * 0.44, height: size * 0.44,
      }}>
        {children}
      </span>
    </span>
  );
}
