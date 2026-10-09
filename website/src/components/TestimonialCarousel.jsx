import React from "react";
import { IconButton } from "../../project/components/forms/IconButton.jsx";
import { IconArrow, IconStar } from "../sections/icons.jsx";

/* Single-slide testimonial carousel: autoplay every `autoplayMs`, paused on
   hover/focus/touch and skipped entirely under prefers-reduced-motion
   (matches the convention Reveal.jsx already uses elsewhere on the site).
   Arrows + dots give manual control; swipe works via touch events.
   With a single item it renders as a static quote: no arrows, dots or
   autoplay. Stars only show for items that carry a `rating`. */
export function TestimonialCarousel({ items, autoplayMs = 6000 }) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = items.length;
  const multiple = count > 1;

  const go = React.useCallback((delta) => {
    setIndex((i) => (i + delta + count) % count);
  }, [count]);

  React.useEffect(() => {
    if (!multiple) return;
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => go(1), autoplayMs);
    return () => clearInterval(id);
  }, [multiple, paused, autoplayMs, go]);

  const touchX = React.useRef(null);
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (!multiple || touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const item = items[index];
  const initials = item.name.split(" ").map((p) => p[0]).slice(0, 2).join("");

  return (
    <div
      className="hb-testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hb-testimonials__stage">
        {multiple && (
          <IconButton
            ariaLabel="Previous testimonial"
            variant="outline"
            shape="circle"
            onClick={() => go(-1)}
            className="hb-testimonials__arrow hb-testimonials__arrow--prev"
          >
            <span style={{ width: 18, height: 18, display: "inline-flex", transform: "scaleX(-1)" }}>
              <IconArrow />
            </span>
          </IconButton>
        )}

        <div
          className="hb-testimonials__card"
          {...(multiple ? { role: "group", "aria-roledescription": "slide", "aria-label": `${index + 1} of ${count}` } : {})}
        >
          {item.rating != null && (
            <div className="hb-testimonials__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: 18,
                    height: 18,
                    display: "inline-flex",
                    color: i < item.rating ? "var(--hb-honey-500)" : "var(--hb-slate-200)",
                  }}
                >
                  <IconStar />
                </span>
              ))}
            </div>
          )}
          <p className="hb-testimonials__quote">&ldquo;{item.quote}&rdquo;</p>
          <div className="hb-testimonials__person">
            <span className="hb-testimonials__avatar" aria-hidden="true">{initials}</span>
            <span>
              <strong style={{ display: "block", color: "var(--text-strong)" }}>{item.name}</strong>
              <span className="hb-testimonials__role">{item.role}</span>
            </span>
          </div>
        </div>

        {multiple && (
          <IconButton
            ariaLabel="Next testimonial"
            variant="outline"
            shape="circle"
            onClick={() => go(1)}
            className="hb-testimonials__arrow hb-testimonials__arrow--next"
          >
            <span style={{ width: 18, height: 18, display: "inline-flex" }}>
              <IconArrow />
            </span>
          </IconButton>
        )}
      </div>

      {multiple && (
        <div className="hb-testimonials__dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              className={`hb-testimonials__dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
