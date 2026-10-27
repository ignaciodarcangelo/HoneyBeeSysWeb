import React from "react";
import { Button } from "../../project/components/forms/Button.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { IconArrow } from "./icons.jsx";

export function Hero() {
  return (
    <section id="top" className="hb-hero-section" style={{ background: "var(--hb-slate)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", zIndex: 0 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(35, 43, 51, 0.6), rgba(35, 43, 51, 0.4))",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "var(--space-16) var(--space-8)",
          width: "100%",
        }}
      >
        <Reveal delay={0}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textTransform: "uppercase",
              letterSpacing: "var(--ls-overline)",
              fontSize: "var(--fs-body-sm)",
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
            Managed IT &amp; cybersecurity across the East Coast
          </span>
        </Reveal>
        <Reveal delay={220}>
          <h1
            className="hb-hero-h1"
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-extrabold)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-tighter)",
              color: "var(--text-on-dark)",
            }}
          >
            Business moves fast,
            <br />
            your <span style={{ color: "var(--hb-honey-400)" }}>IT</span> should too.
          </h1>
        </Reveal>
        <Reveal delay={440}>
          <p
            style={{
              marginTop: "var(--space-6)",
              fontSize: "1.375rem",
              lineHeight: "var(--lh-relaxed)",
              color: "var(--text-on-dark)",
              maxWidth: 560,
              fontWeight: "var(--fw-medium)",
            }}
          >
            HoneyBee Systems keeps your technology connected, protected, and supported, so your team can stay
            productive and focus on running the business.
          </p>
        </Reveal>
        <Reveal delay={660} variant="scale" className="hb-hero-actions" style={{ display: "inline-flex", marginTop: "var(--space-8)" }}>
          <Button
            variant="primary"
            size="lg"
            style={{ height: 66, padding: "0 var(--space-10)", fontSize: "1.25rem" }}
            iconRight={
              <span style={{ width: 22, height: 22, display: "inline-flex" }}>
                <IconArrow />
              </span>
            }
            onClick={() => {
              window.location.href = "mailto:support@honeybeesys.com?subject=" + encodeURIComponent("Schedule a free IT assessment");
            }}
          >
            Schedule a free IT assessment
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
