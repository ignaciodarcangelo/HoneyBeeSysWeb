import React from "react";
import { Button } from "../../project/components/forms/Button.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { IconPhone } from "./icons.jsx";

export function CTASection() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section style={{ padding: "var(--space-10) var(--space-8) var(--section-y)" }}>
      <Reveal
        className="hb-cta-glow"
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          overflow: "hidden",
          maxWidth: "var(--container-lg)",
          margin: "0 auto",
          background: "var(--hb-gradient-honey)",
          borderRadius: "var(--radius-2xl)",
          padding: "var(--space-16)",
          textAlign: "center",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h1)",
              fontWeight: "var(--fw-extrabold)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--hb-slate-800)",
            }}
          >
            Let's make IT one less thing to worry about.
          </h2>
          <p style={{ margin: "var(--space-4) auto var(--space-8)", maxWidth: 520, color: "var(--hb-slate-700)", fontSize: "var(--fs-body-lg)", fontWeight: "var(--fw-semibold)" }}>
            Schedule a free IT assessment. We'll learn about your business, identify any immediate concerns, and recommend clear, practical next steps.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="secondary"
              size="lg"
              style={{ background: "var(--hb-slate)", color: "var(--hb-cream)", borderColor: "var(--hb-slate)" }}
              onClick={() => {
                window.location.href = "mailto:support@honeybeesys.com?subject=" + encodeURIComponent("Schedule a free IT assessment");
              }}
            >
              Schedule your free review
            </Button>
            <Button
              variant="ghost"
              size="lg"
              iconLeft={
                <span style={{ width: 18, height: 18, display: "inline-flex" }}>
                  <IconPhone />
                </span>
              }
              style={{ color: "var(--hb-slate-800)" }}
            >
              (754) 264-1616
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
