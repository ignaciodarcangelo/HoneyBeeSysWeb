import React from "react";

/* Infinite auto-scrolling logo strip. The item list is rendered twice back
   to back so the CSS animation can translate exactly -50% and loop with no
   seam. Pausing and reduced-motion handling live in layout.css (.hb-marquee),
   not here, so it stays in sync with the rest of the site's motion rules.
   Items without a logoSrc fall back to a styled text wordmark, so the
   placeholder data below can be swapped for real logos later without
   touching this component. */
export function LogoMarquee({ items, direction = "left", speed = 34 }) {
  const track = [...items, ...items];

  return (
    <div className="hb-marquee">
      <div
        className="hb-marquee__track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {track.map((item, i) => (
          <div
            className="hb-marquee__item"
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length}
            style={item.scale ? { height: `${44 * item.scale}px` } : undefined}
          >
            {item.logoSrc ? (
              <img src={item.logoSrc} alt={item.name} />
            ) : (
              <span className="hb-marquee__wordmark">{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
