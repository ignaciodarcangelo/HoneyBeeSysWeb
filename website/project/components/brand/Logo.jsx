import React from "react";
import logoUrl from "../../assets/brand/honeybee-logo.png";

/**
 * HoneyBee Systems — Logo
 * The brand lockup as a single raster asset (illustrated bee mark +
 * honeycomb + "HONEYBEE / SYSTEMS" wordmark baked in). The wordmark is
 * rendered near-white, so this reads correctly on dark surfaces only
 * (header/footer) — there's no separate onLight variant for this asset.
 */
export function Logo({ tone, showWordmark, size = 40, style = {}, ...rest }) {
  const aspectRatio = 1645 / 485;
  return (
    <img
      src={logoUrl}
      alt="HoneyBee Systems"
      style={{ display: "block", flexShrink: 0, height: size, width: size * aspectRatio, objectFit: "contain", ...style }}
      {...rest}
    />
  );
}
