import React from "react";
import { Card } from "../../project/components/layout/Card.jsx";
import { HexIcon } from "../../project/components/brand/HexIcon.jsx";
import { Button } from "../../project/components/forms/Button.jsx";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { PageHero } from "../sections/PageHero.jsx";
import { CTASection } from "../sections/CTASection.jsx";
import { FaqItem } from "../components/FaqItem.jsx";
import { IconPhone, IconHeadset, IconActivity } from "../sections/icons.jsx";

const CHANNELS = [
  [IconHeadset, "Email support", "support@honeybeesys.com", "The best way to request assistance. Include a description of the issue, who it is affecting, and any screenshots or error messages that may help us investigate."],
  [IconPhone, "Call us", "(754) 264-1616", "For urgent issues, give us a call. Sending an email first creates a ticket and gives our team the information needed to begin troubleshooting."],
  [IconActivity, "Support hours", "Monday–Friday, 9:00 a.m.–6:00 p.m. ET", "Requests received outside normal business hours will be reviewed the next business day unless the issue is a business-critical emergency."],
];

const FAQS = [
  ["What are your support hours?", "Our standard support hours are Monday through Friday, from 9:00 a.m. to 6:00 p.m. Eastern Time. Requests submitted outside those hours will be reviewed the next business day unless the issue is an emergency."],
  ["Do you provide support after hours?", "After-hours assistance is available for emergencies that cannot reasonably wait until the next business day. Routine requests submitted after hours will be addressed during normal support hours."],
  ["Do you offer 24/7 support?", "We provide technical support during our regular business hours, with after-hours assistance reserved for emergencies. Our monitoring systems operate 24/7 to help identify potential issues around the clock."],
  ["How do I submit a support request?", "Email support@honeybeesys.com to create a support ticket automatically. Include a brief description of the issue, who it is affecting, and any screenshots or error messages that may help us investigate."],
  ["How are support requests prioritized?", "Requests are prioritized based on urgency and business impact. Security incidents, widespread outages, and issues preventing employees from working are addressed ahead of routine questions and non-urgent requests."],
  ["Do you support remote and hybrid teams?", "Yes. We support employees working from the office, from home, or while traveling. Most technical issues can be diagnosed and resolved remotely."],
];

export function SupportPage() {
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <>
      <Seo {...SEO.support} />
      <PageHero
        eyebrow="Client support"
        title="Need IT help? Start here."
        subtitle="Email us to create a support ticket automatically. Our standard support hours are Monday through Friday, from 9:00 a.m. to 6:00 p.m. Eastern Time. After-hours assistance is reserved for business-critical emergencies."
      />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto" }}>
          <div className="hb-services-grid" style={{ gap: "var(--space-6)", marginBottom: "var(--space-8)" }}>
            {CHANNELS.map(([Ic, title, value, body]) => (
              <div key={title} className="hb-service-card">
                <Card variant="elevated">
                  <HexIcon tone="honey" size={56} style={{ marginBottom: "var(--space-5)" }}>
                    <Ic />
                  </HexIcon>
                  <h3 style={{ margin: 0, fontSize: "var(--fs-h4)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</h3>
                  <div style={{ margin: "var(--space-2) 0 0", color: "var(--hb-honey-700)", fontSize: "var(--fs-body)", fontWeight: "var(--fw-bold)" }}>{value}</div>
                  <p style={{ margin: "var(--space-2) 0 0", color: "var(--text-body)", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)" }}>
                    {body}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <Card
            variant="elevated"
            style={{
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              background: "var(--hb-danger-soft)",
              border: "2px solid var(--hb-danger)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-5)", maxWidth: 700 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 64,
                    height: 64,
                    flexShrink: 0,
                    borderRadius: "var(--radius-pill)",
                    background: "var(--hb-danger)",
                    color: "var(--hb-white)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--fs-h3)",
                    fontWeight: "var(--fw-extrabold)",
                  }}
                >
                  !
                </span>
                <div>
                  <h3 className="hb-emergency-title" style={{ margin: 0, fontSize: "var(--fs-h3)", fontWeight: "var(--fw-extrabold)", color: "var(--text-strong)" }}>
                    Is your business unable to operate?
                  </h3>
                  <p style={{ margin: "var(--space-3) 0 0", color: "var(--text-body)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-normal)", fontWeight: "var(--fw-medium)" }}>
                    For widespread outages, suspected security incidents, or another business-critical emergency that
                    cannot wait until the next business day, call us now. Routine requests submitted after hours will
                    be addressed during normal support hours.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", flex: "1 1 auto" }}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ background: "var(--hb-danger)", borderColor: "var(--hb-danger)", flexShrink: 0 }}
                  iconLeft={
                    <span style={{ width: 20, height: 20, display: "inline-flex" }}>
                      <IconPhone />
                    </span>
                  }
                  onClick={() => {
                    window.location.href = "tel:+17542641616";
                  }}
                >
                  Call (754) 264-1616
                </Button>
              </div>
            </div>
          </Card>
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
              Common questions
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
              Support questions, answered.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {FAQS.map(([q, a], i) => (
              <FaqItem key={q} q={q} a={a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
