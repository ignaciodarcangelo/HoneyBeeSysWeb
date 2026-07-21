import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../../project/components/layout/Card.jsx";
import { HexIcon } from "../../../project/components/brand/HexIcon.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { IconHeadset, IconShield, IconCloud, IconServer, IconLock, IconActivity, IconArrow } from "./icons.jsx";

const SERVICES = [
  [IconHeadset, "Managed IT & helpdesk", "Unlimited support from real technicians. One flat monthly rate, no surprise invoices.", "managed-it"],
  [IconShield, "Cybersecurity", "Endpoint protection, email filtering, and threat monitoring that never sleeps.", "cybersecurity"],
  [IconCloud, "Cloud & backup", "Microsoft 365, cloud migration, and tested backups across every site.", "cloud-backup"],
  [IconServer, "Network & infrastructure", "Design, deploy, and maintain the hardware your business runs on.", "network-infrastructure"],
  [IconLock, "Compliance", "HIPAA, PCI, NIST, and SOC-ready controls with documentation your auditors will love.", "compliance"],
  [IconActivity, "Proactive monitoring", "24/7 automated monitoring means we fix issues before they reach you.", "proactive-monitoring"],
];

export function ServicesGrid() {
  return (
    <section id="services" style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "var(--ls-overline)",
              fontSize: "var(--fs-overline)",
              fontWeight: "var(--fw-bold)",
              color: "var(--hb-honey-700)",
            }}
          >
            What we do
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
            One hive for your entire IT stack
          </h2>
          <p style={{ margin: "var(--space-4) auto 0", maxWidth: 560, color: "var(--text-body)", fontSize: "var(--fs-body-lg)", fontWeight: "var(--fw-medium)" }}>
            Every service is delivered by the same coordinated team, so nothing falls between the cracks.
          </p>
        </Reveal>
        <div className="hb-services-grid" style={{ gap: "var(--space-6)" }}>
          {SERVICES.map(([Ic, title, body, slug], i) => (
            <Reveal key={i} delay={(i % 3) * 100} style={{ height: "100%" }}>
              <Link
                to={`/services#svc-${slug}`}
                className="hb-service-card"
                style={{ display: "block", height: "100%", textDecoration: "none", color: "inherit" }}
              >
                <Card variant="elevated" interactive style={{ height: "100%", minHeight: 260, display: "flex", flexDirection: "column" }}>
                  <HexIcon tone="honey" size={56} style={{ marginBottom: "var(--space-5)" }}>
                    <Ic />
                  </HexIcon>
                  <h3 style={{ margin: 0, fontSize: "var(--fs-h4)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</h3>
                  <p style={{ margin: "var(--space-2) 0 0", color: "var(--text-body)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)" }}>
                    {body}
                  </p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <Link
            to="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--hb-honey-700)",
              fontWeight: "var(--fw-bold)",
              fontSize: "var(--fs-body)",
              textDecoration: "none",
            }}
          >
            See all services
            <span style={{ width: 16, height: 16, display: "inline-flex" }}>
              <IconArrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
