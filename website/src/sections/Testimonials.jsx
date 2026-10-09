import React from "react";
import { Reveal } from "../components/Reveal.jsx";
import { TestimonialCarousel } from "../components/TestimonialCarousel.jsx";

/* Real client testimonials only. Add more items (quote/name/role, optional
   rating 1-5) as they come in; the carousel shows its arrows, dots and
   autoplay on its own once there is more than one. Blank lines in a quote
   render as paragraph breaks. */
const TESTIMONIALS = [
  {
    quote:
      "We want to take a moment to recognize our amazing IT team for the outstanding service they provide. They are truly excellent at what they do, always respond quickly, and are incredibly friendly and helpful.\n\n" +
      "We always feel supported and know that we can count on them whenever we need assistance. Their professionalism, knowledge, and dedication give us great peace of mind.\n\n" +
      "We truly appreciate everything they do for us and are very grateful to have such a reliable and supportive IT team!",
    name: "Dilcia Lucena",
    role: "W Aviation Operations LLC",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "var(--ls-overline)",
              fontSize: "var(--fs-overline)",
              fontWeight: "var(--fw-bold)",
              color: "var(--hb-honey-700)",
            }}
          >
            What clients say
          </span>
          <h2
            style={{
              margin: "var(--space-3) 0 0",
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h2)",
              fontWeight: "var(--fw-extrabold)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--text-strong)",
            }}
          >
            Businesses that run on HoneyBee
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <TestimonialCarousel items={TESTIMONIALS} />
        </Reveal>
      </div>
    </section>
  );
}
