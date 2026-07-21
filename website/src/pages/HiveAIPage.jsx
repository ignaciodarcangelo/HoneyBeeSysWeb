import React from "react";
import { Card } from "../../../project/components/layout/Card.jsx";
import { Badge } from "../../../project/components/layout/Badge.jsx";
import { Button } from "../../../project/components/forms/Button.jsx";
import { HexIcon } from "../../../project/components/brand/HexIcon.jsx";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { PageHero } from "../sections/PageHero.jsx";
import { CTASection } from "../sections/CTASection.jsx";
import { FeatureCard } from "../components/FeatureCard.jsx";
import { IconFile, IconGlobe, IconCloud, IconActivity, IconLock, IconZap } from "../sections/icons.jsx";

const FEATURES = [
  [IconFile, "Upload any document", "PDFs, Word docs, spreadsheets, text files: HiveAI ingests them all and makes every page searchable through conversation."],
  [IconGlobe, "Crawl your website", "Point HiveAI at any URL and it reads your entire site, turning your web content into an instant knowledge base."],
  [IconCloud, "Sync from OneDrive", "Connect your OneDrive or SharePoint and sync files directly. Your team's documents are always up to date."],
  [IconActivity, "Remembers your team", "HiveAI builds memory over time, learning names, roles, and projects so every conversation gets smarter."],
  [IconLock, "Your data, your silo", "Every client gets their own isolated knowledge base. Nothing is shared between organizations, ever."],
  [IconZap, "Ready in minutes", "Sign up, upload a document, and start asking questions. No IT project, no integration work, no waiting."],
];

const DEMO = [
  ["What's our refund policy for enterprise clients?", "Based on your Client Services Agreement, enterprise clients are eligible for a pro-rated refund within the first 30 days. After 30 days, credits are applied to the next billing cycle. Full details are in Section 4.2."],
  ["Who is our contact at Acme Corp?", "Your primary contact at Acme Corp is Jennifer Walsh, IT Director. Last touchpoint was March 3rd per your CRM notes."],
];

export function HiveAIPage() {
  return (
    <>
      <Seo {...SEO.hiveai} />
      <PageHero
        eyebrow="HiveAI"
        title="Train it on everything. Ask it anything."
        subtitle="The AI that knows your business as well as you do. Upload your documents, connect your website, sync your files, then ask HiveAI anything, instant answers from your own knowledge base."
      />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
            <Badge tone="honey" variant="soft" dot>
              Powered by HoneyBee Systems
            </Badge>
          </div>

          {/* Live-answer demo */}
          <Card variant="inverse" style={{ maxWidth: 660, margin: "0 auto var(--space-16)", background: "var(--hb-slate-800)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "var(--space-5)" }}>
              <HexIcon tone="inverse" size={32}>
                <IconFile />
              </HexIcon>
              <span style={{ fontWeight: "var(--fw-bold)", color: "var(--text-on-dark)", fontSize: "var(--fs-body-sm)" }}>Ask HiveAI</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              {DEMO.map(([q, a], i) => (
                <div key={q} style={{ borderTop: i ? "1px solid var(--border-on-dark)" : "none", paddingTop: i ? "var(--space-5)" : 0 }}>
                  <div style={{ color: "var(--hb-honey-400)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)", marginBottom: 6 }}>{q}</div>
                  <div style={{ color: "var(--text-on-dark-muted)", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)" }}>
                    {a}
                  </div>
                </div>
              ))}
            </div>
          </Card>

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
              Why HiveAI
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
              Your knowledge. Instantly answerable.
            </h2>
            <p style={{ margin: "var(--space-4) auto 0", maxWidth: 560, color: "var(--text-body)", fontSize: "var(--fs-body-lg)", fontWeight: "var(--fw-medium)" }}>
              Stop searching through folders and asking the same questions twice. HiveAI learns your business and
              answers in seconds.
            </p>
          </div>

          <div className="hb-services-grid" style={{ gap: "var(--space-6)", marginBottom: "var(--space-16)" }}>
            {FEATURES.map(([Ic, title, body]) => (
              <FeatureCard key={title} icon={Ic} title={title} body={body} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
