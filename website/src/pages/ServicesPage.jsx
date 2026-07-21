import React from "react";
import { Card } from "../../../project/components/layout/Card.jsx";
import { HexIcon } from "../../../project/components/brand/HexIcon.jsx";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { PageHero } from "../sections/PageHero.jsx";
import { CTASection } from "../sections/CTASection.jsx";
import { IconHeadset, IconShield, IconCloud, IconServer, IconLock, IconActivity, IconCheck } from "../sections/icons.jsx";

const SERVICES = [
  {
    slug: "managed-it",
    icon: IconHeadset,
    title: "Managed IT & helpdesk",
    body: "Your team gets unlimited support from real technicians who already know your setup, not a ticket queue that starts from zero every time. One flat monthly rate covers the whole colony, so there's never a surprise invoice for doing our job.",
    features: [
      "Unlimited remote support",
      "Real technicians, not a call center script",
      "New-hire onboarding & offboarding",
      "Same-day response on standard issues",
      "Plain-English reporting, not jargon",
    ],
  },
  {
    slug: "cybersecurity",
    icon: IconShield,
    title: "Cybersecurity",
    body: "Endpoint protection, email filtering, and threat monitoring that never sleeps, because attackers don't work business hours either. We watch every device in the hive so a single compromised laptop never becomes a company-wide incident.",
    features: [
      "Endpoint detection & response on every device",
      "Email phishing & spam filtering",
      "24/7 threat monitoring and response",
      "Security awareness training for staff",
      "Credential monitoring",
      "A documented incident response plan",
    ],
  },
  {
    slug: "cloud-backup",
    icon: IconCloud,
    title: "Cloud & backup",
    body: "Microsoft 365, cloud migration, and backups that are actually tested, not just scheduled and forgotten. If a laptop is stolen, a server fails, or someone fat-fingers a delete, your data comes back the same day.",
    features: [
      "Microsoft 365 setup, licensing & management",
      "Cloud migration planning & execution",
      "Automated backup and quarterly testing available",
      "Disaster recovery planning",
    ],
  },
  {
    slug: "network-infrastructure",
    icon: IconServer,
    title: "Network & infrastructure",
    body: "We design, deploy, and maintain the hardware your business actually runs on: routers, switches, Wi-Fi, servers, so the connection underneath everything else is one less thing to worry about.",
    features: [
      "Network design & deployment",
      "Firewall & VPN management",
      "Wi-Fi design and coverage optimization",
      "Server management & maintenance",
      "Infrastructure design",
      "Hardware lifecycle & replacement planning",
    ],
  },
  {
    slug: "compliance",
    icon: IconLock,
    title: "Compliance",
    body: "HIPAA, PCI, and SOC-ready controls with documentation your auditors will actually love. We build compliance into how things already run, instead of a scramble the week before an audit.",
    features: [
      "HIPAA / PCI / SOC 2 / NIST readiness assessments",
      "Policy & documentation support",
      "Access control & audit logging",
      "Annual compliance reviews",
      "Vendor risk management",
      "Incident documentation for auditors",
    ],
  },
  {
    slug: "proactive-monitoring",
    icon: IconActivity,
    title: "Proactive monitoring",
    body: "We detect and fix issues before they reach you: failing drives, low disk space, missed patches, unusual login activity. Most problems get resolved before you'd have known to open a ticket.",
    features: [
      "24/7 automated monitoring across every endpoint",
      "Predictive issue detection",
      "Patch management, handled on a schedule",
      "Ongoing performance optimization",
      "Priority alerting for critical systems",
    ],
  },
];

function ServiceRow({ service, index }) {
  const Icon = service.icon;
  const reversed = index % 2 === 1;
  return (
    <div className="hb-service-card hb-service-card--wide">
      <Card
        id={`svc-${service.slug}`}
        variant="elevated"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "var(--space-10)",
          alignItems: "center",
          scrollMarginTop: 90,
        }}
        className="hb-service-row"
      >
        <div style={{ order: reversed ? 2 : 1 }}>
          <HexIcon tone="honey" size={64} style={{ marginBottom: "var(--space-5)" }}>
            <Icon />
          </HexIcon>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-h3)",
              fontWeight: "var(--fw-extrabold)",
              letterSpacing: "var(--ls-tight)",
              color: "var(--text-strong)",
            }}
          >
            {service.title}
          </h2>
          <p
            style={{
              margin: "var(--space-4) 0 0",
              color: "var(--text-body)",
              fontSize: "var(--fs-body)",
              lineHeight: "var(--lh-relaxed)",
              fontWeight: "var(--fw-medium)",
            }}
          >
            {service.body}
          </p>
        </div>
        <div style={{ order: reversed ? 1 : 2 }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {service.features.map((f) => (
              <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-strong)", fontSize: "var(--fs-body)", fontWeight: "var(--fw-semibold)" }}>
                <span style={{ width: 20, height: 20, flexShrink: 0, color: "var(--hb-success)", marginTop: 2 }}>
                  <IconCheck />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

export function ServicesPage() {
  return (
    <>
      <Seo {...SEO.services} />
      <PageHero
        eyebrow="What we do"
        title="Everything your IT stack needs, one coordinated team."
        subtitle="No separate vendors for security, backups, and the network. The same hive handles all of it, so nothing falls between the cracks."
      />
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
