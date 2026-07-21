import React from "react";

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";

/* Scrubs opacity/transform directly to how far the element is currently
   scrolled into view — bidirectional, so it fades in on the way down and
   back out on the way up, rather than a one-shot reveal that only ever
   plays forward. Wraps children in a plain element (default div);
   `delay` (ms) offsets a group of siblings so they reveal in sequence.
   `variant`: "fade" (default) slides up from below; "scale" pops in from
   the center — better suited to a single focal element like a button. */
export function Reveal({ children, as: Tag = "div", delay = 0, variant = "fade", style = {}, className = "", ...rest }) {
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia(reduceMotionQuery).matches) {
      setReduced(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const steps = Array.from({ length: 25 }, (_, i) => i / 24);
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fully revealed once ~55% of the element is on screen, rather
        // than requiring the whole thing — and back down as it leaves.
        setProgress(Math.min(1, entry.intersectionRatio / 0.55));
      },
      { threshold: steps }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shown = reduced ? 1 : progress;
  const transform = variant === "scale" ? `scale(${0.7 + shown * 0.3})` : `translateY(${(1 - shown) * 36}px)`;

  return (
    <Tag
      ref={ref}
      className={`hb-reveal${className ? ` ${className}` : ""}`}
      style={{
        opacity: shown,
        transform,
        transformOrigin: variant === "scale" ? "center" : undefined,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
