import React from "react";

/* Shared page-intro banner for secondary pages (Services, Why HoneyBee,
   Support) — a lighter version of the homepage Hero: same dark slate
   surface and dot-grid texture, no stats/status panel. */
export function PageHero({ eyebrow, title, subtitle, logoSrc, logoAlt }) {
  return (
    <section style={{ background: "var(--hb-slate)", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(var(--hb-honey-500) 1.3px, transparent 1.3px)",
          backgroundSize: "26px 26px",
          opacity: 0.08,
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-lg)",
          margin: "0 auto",
          padding: "var(--space-20) var(--space-8) var(--space-16)",
          textAlign: "center",
        }}
      >
        {logoSrc ? (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "var(--space-6)" }}>
            <div
              style={{
                display: "inline-flex",
                background: "var(--hb-cream)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-4) var(--space-8)",
              }}
            >
              <img src={logoSrc} alt={logoAlt || ""} style={{ height: 104, width: "auto", display: "block" }} />
            </div>
          </div>
        ) : null}
        {eyebrow ? (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textTransform: "uppercase",
              letterSpacing: "var(--ls-overline)",
              fontSize: "var(--fs-overline)",
              fontWeight: "var(--fw-bold)",
              color: "var(--hb-honey-400)",
              marginBottom: "var(--space-5)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "var(--hb-honey-500)",
                clipPath: "polygon(27% 8%, 73% 8%, 100% 50%, 73% 92%, 27% 92%, 0% 50%)",
              }}
            />{" "}
            {eyebrow}
          </span>
        ) : null}
        <h1
          className="hb-page-h1"
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontWeight: "var(--fw-extrabold)",
            lineHeight: "var(--lh-tight)",
            letterSpacing: "var(--ls-tighter)",
            color: "var(--text-on-dark)",
          }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            style={{
              margin: "var(--space-5) auto 0",
              maxWidth: 620,
              fontSize: "var(--fs-body-lg)",
              lineHeight: "var(--lh-relaxed)",
              color: "var(--text-on-dark-muted)",
              fontWeight: "var(--fw-medium)",
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
