import React from "react";
import { Card } from "../../project/components/layout/Card.jsx";
import { HexIcon } from "../../project/components/brand/HexIcon.jsx";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { PageHero } from "../sections/PageHero.jsx";
import { CTASection } from "../sections/CTASection.jsx";
import { FaqItem } from "../components/FaqItem.jsx";
import { IconHeadset, IconCheck, IconActivity, IconCloud } from "../sections/icons.jsx";

const CARDS = [
  [IconHeadset, "You get real people who know your business", "When you need help, you are not dropped into a faceless ticket queue. You get a responsive team that understands your systems, your people, and your priorities."],
  [IconCheck, "We make IT easier to understand", "No confusing jargon, scare tactics, or vague recommendations. We explain what is happening, why it matters, and what we believe you should do next."],
  [IconActivity, "We stay ahead of problems", "We monitor, maintain, patch, and protect your systems so small issues are less likely to become expensive interruptions."],
  [IconCloud, "We plan for where your business is going", "Technology should support your growth, not hold it back. We help you make practical IT decisions for today while preparing for what comes next."],
];

const DIFFERENTIATORS = [
  ["No cookie-cutter solutions", "We recommend what fits your business, not an oversized package, a trendy tool, or the same setup we give everyone else."],
  ["Security that works in real life", "We protect your systems without creating unnecessary roadblocks that frustrate your team or slow down the workday."],
  ["We deal with the tech maze", "Internet providers, software vendors, phone systems, equipment: we help coordinate the moving parts so you are not stuck chasing five different companies for one answer."],
];

export function WhyHoneyBeePage() {
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <>
      <Seo {...SEO.whyHoneyBee} />
      <PageHero
        eyebrow="Why businesses choose HoneyBee Systems"
        title="IT support should feel personal, clear, and dependable."
        subtitle="We take the time to understand your business, communicate without the technical nonsense, and build solutions that actually fit the way your team works."
      />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto" }}>
          <div className="hb-why-grid" style={{ gap: "var(--space-6)" }}>
            {CARDS.map(([Ic, title, body]) => (
              <div key={title} className="hb-service-card" style={{ height: "100%" }}>
                <Card variant="elevated" style={{ height: "100%", minHeight: 310, display: "flex", flexDirection: "column" }}>
                  <HexIcon tone="honey" size={56} style={{ marginBottom: "var(--space-5)" }}>
                    <Ic />
                  </HexIcon>
                  <h3 style={{ margin: 0, fontSize: "var(--fs-h4)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</h3>
                  <p style={{ margin: "var(--space-2) 0 0", color: "var(--text-body)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)" }}>
                    {body}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-md)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            <span
              style={{
                textTransform: "uppercase",
                letterSpacing: "var(--ls-overline)",
                fontSize: "var(--fs-overline)",
                fontWeight: "var(--fw-bold)",
                color: "var(--hb-honey-700)",
              }}
            >
              What makes us different
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
              Technology built around your business
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {DIFFERENTIATORS.map(([q, a], i) => (
              <FaqItem key={q} q={q} a={a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
