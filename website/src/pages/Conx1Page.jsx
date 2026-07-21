import React from "react";
import { Card } from "../../../project/components/layout/Card.jsx";
import { Badge } from "../../../project/components/layout/Badge.jsx";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { PageHero } from "../sections/PageHero.jsx";
import { CTASection } from "../sections/CTASection.jsx";
import { FeatureCard } from "../components/FeatureCard.jsx";
import { IconPhone, IconMessage, IconSend, IconActivity } from "../sections/icons.jsx";

const FEATURES = [
  [IconPhone, "Call recording + playback", "Every call is recorded, stored, and easy to replay when it matters."],
  [IconMessage, "Real-time call transcription", "See conversations as they happen with live, searchable transcripts."],
  [IconSend, "SMS follow-up after calls", "Send or automate text follow-ups instantly after every call."],
  [IconActivity, "Agent scorecards", "Rate calls, track performance, and improve team consistency."],
];

const ROADMAP = [
  ["Predictive Dialer", "Connect agents only when calls are answered"],
  ["Workforce Management", "Scheduling and shift tracking"],
  ["IVR Builder", "Create call flows with a visual editor"],
  ["Omnichannel Inbox", "Manage calls, texts, chat, and email in one place"],
  ["AI Agent Assist", "Real-time suggestions during live calls"],
];

export function Conx1Page() {
  return (
    <>
      <Seo {...SEO.conx1} />
      <PageHero
        logoSrc="/conx1-logo.webp"
        logoAlt="ConX1"
        title="Your phone system should make you money. Not just ring."
        subtitle="ConX1 turns your phone system into a real-time performance tool, with recording, transcription, messaging, and team insights built in."
      />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
            <Badge tone="neutral" variant="soft">
              Powered by HoneyBee Systems
            </Badge>
          </div>

          <h2
            style={{
              textAlign: "center",
              margin: "0 0 var(--space-8)",
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h2)",
              fontWeight: "var(--fw-extrabold)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--text-strong)",
            }}
          >
            What can ConX1 do?
          </h2>
          <div className="hb-why-grid" style={{ gap: "var(--space-6)", marginBottom: "var(--space-16)" }}>
            {FEATURES.map(([Ic, title, body]) => (
              <FeatureCard key={title} icon={Ic} title={title} body={body} />
            ))}
          </div>

          <h2
            style={{
              textAlign: "center",
              margin: "0 0 var(--space-8)",
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h2)",
              fontWeight: "var(--fw-extrabold)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--text-strong)",
            }}
          >
            What's coming next?
          </h2>
          <div style={{ maxWidth: "var(--container-md)", margin: "0 auto var(--space-16)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {ROADMAP.map(([title, body]) => (
              <Card key={title} variant="outline" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: "var(--fw-bold)", color: "var(--text-strong)", fontSize: "var(--fs-body)" }}>{title}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-medium)", marginTop: 2 }}>{body}</div>
                </div>
                <Badge tone="info" variant="soft">
                  Coming soon
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
