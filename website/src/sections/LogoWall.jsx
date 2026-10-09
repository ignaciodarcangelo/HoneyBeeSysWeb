import React from "react";
import { Reveal } from "../components/Reveal.jsx";
import { LogoMarquee } from "../components/LogoMarquee.jsx";

export function LogoWall({ eyebrow, title, items, direction = "left", background = "var(--surface-page)" }) {
  return (
    <section style={{ background, padding: "var(--space-12) var(--space-8)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "var(--ls-overline)",
              fontSize: "var(--fs-overline)",
              fontWeight: "var(--fw-bold)",
              color: "var(--hb-honey-700)",
            }}
          >
            {eyebrow}
          </span>
          <h2
            style={{
              margin: "var(--space-3) 0 0",
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h3)",
              fontWeight: "var(--fw-extrabold)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--text-strong)",
            }}
          >
            {title}
          </h2>
        </Reveal>
        <LogoMarquee items={items} direction={direction} />
      </div>
    </section>
  );
}
