import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../project/components/brand/Logo.jsx";

/* Links point to real routes where a page exists; the rest stay inert
   text, matching the original prototype, until those pages are built. */
const COLUMNS = [
  [
    "Services",
    [
      ["Managed IT", "/services#svc-managed-it"],
      ["Cybersecurity", "/services#svc-cybersecurity"],
      ["Cloud & backup", "/services#svc-cloud-backup"],
      ["Compliance", "/services#svc-compliance"],
    ],
  ],
  [
    "Company",
    [
      ["Why HoneyBee", "/why-honeybee"],
      ["Careers", "/career"],
      ["Contact", "/support"],
    ],
  ],
  [
    "Custom Products",
    [
      ["HiveAI", "/custom-products/hiveai"],
      ["ConX1", "/custom-products/conx1"],
    ],
  ],
  [
    "Support",
    [
      ["Open a ticket", "/support"],
      ["(754) 264-1616", "tel:+17542641616"],
    ],
  ],
];

function FooterColumn({ heading, items }) {
  const itemStyle = {
    color: "var(--text-on-dark-muted)",
    fontSize: "var(--fs-body-sm)",
    fontWeight: "var(--fw-medium)",
    marginBottom: 10,
    display: "block",
    textDecoration: "none",
  };
  return (
    <div>
      <div
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontSize: "var(--fs-overline)",
          fontWeight: "var(--fw-bold)",
          color: "var(--hb-honey-400)",
          marginBottom: "var(--space-4)",
        }}
      >
        {heading}
      </div>
      {items.map(([label, href]) =>
        href ? (
          href.startsWith("tel:") ? (
            <a key={label} href={href} style={{ ...itemStyle, cursor: "pointer" }}>
              {label}
            </a>
          ) : (
            <Link key={label} to={href} style={{ ...itemStyle, cursor: "pointer" }}>
              {label}
            </Link>
          )
        ) : (
          <div key={label} style={itemStyle}>
            {label}
          </div>
        )
      )}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer id="support" style={{ background: "var(--hb-slate-900)", padding: "var(--space-16) var(--space-8) var(--space-8)" }}>
      <div className="hb-footer-grid" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", gap: "var(--space-12)" }}>
        <div>
          <Logo tone="onDark" size={44} />
          <p style={{ marginTop: "var(--space-4)", color: "var(--text-on-dark-muted)", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)", maxWidth: 320 }}>
            You don't know if your business technology is healthy until it breaks. We make health visible and fix what matters before it costs you money.
          </p>
          <p style={{ marginTop: "var(--space-3)", color: "var(--hb-honey-400)", fontSize: "var(--fs-caption)", fontWeight: "var(--fw-bold)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Brad Felder | Founder
          </p>
        </div>
        {COLUMNS.map(([heading, items]) => (
          <FooterColumn key={heading} heading={heading} items={items} />
        ))}
      </div>
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "var(--space-12) auto 0",
          paddingTop: "var(--space-6)",
          borderTop: "1px solid var(--border-on-dark)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--space-2)",
          color: "var(--text-on-dark-muted)",
          fontSize: "var(--fs-caption)",
          fontWeight: "var(--fw-medium)",
        }}
      >
        <span>© 2026 HoneyBee Systems. All rights reserved.</span>
        <span>Privacy · Terms · Miami, FL</span>
      </div>
    </footer>
  );
}
