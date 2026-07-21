import React from "react";
import { Card } from "../../../project/components/layout/Card.jsx";
import { Input } from "../../../project/components/forms/Input.jsx";
import { Textarea } from "../../../project/components/forms/Textarea.jsx";
import { Button } from "../../../project/components/forms/Button.jsx";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { HexIcon } from "../../../project/components/brand/HexIcon.jsx";
import { PageHero } from "../sections/PageHero.jsx";
import { IconSend, IconPhone, IconActivity } from "../sections/icons.jsx";

const CHANNELS = [
  [IconPhone, "Call us", "(754) 264-1616"],
  [IconActivity, "Support hours", "Monday–Friday, 9:00 a.m.–6:00 p.m. ET"],
];

export function EmergencySupportPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSend = () => {
    const subject = "Emergency support request";
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:support@honeybeesys.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Seo {...SEO.emergencySupport} />
      <PageHero
        eyebrow="Emergency support"
        title="Need emergency support?"
        subtitle="Let our team know. Please include specific details about the issues you are experiencing."
      />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-sm)", margin: "0 auto" }}>
          <span
            style={{
              display: "block",
              textTransform: "uppercase",
              letterSpacing: "var(--ls-overline)",
              fontSize: "var(--fs-overline)",
              fontWeight: "var(--fw-bold)",
              color: "var(--hb-honey-700)",
              marginBottom: "var(--space-4)",
              textAlign: "center",
            }}
          >
            Email us directly
          </span>
          <Card variant="elevated">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <Input
                label="First and Last Name"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Your Email"
                type="email"
                placeholder="jane@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                label="Message"
                placeholder="Describe the issue you're experiencing..."
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                variant="primary"
                size="lg"
                fullWidth
                iconLeft={
                  <span style={{ width: 18, height: 18, display: "inline-flex" }}>
                    <IconSend />
                  </span>
                }
                disabled={!name || !email || !message}
                onClick={handleSend}
              >
                Send
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section style={{ background: "var(--surface-card)", padding: "var(--space-16) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-md)", margin: "0 auto" }}>
          <Card
            variant="honey"
            style={{ padding: "var(--space-12)", textAlign: "center", boxShadow: "var(--shadow-lg)" }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-h2)",
                fontWeight: "var(--fw-extrabold)",
                letterSpacing: "var(--ls-tight)",
                color: "var(--text-strong)",
              }}
            >
              Looking for long term support?
            </h2>
            <p
              style={{
                margin: "var(--space-4) auto 0",
                maxWidth: 480,
                color: "var(--text-body)",
                fontSize: "var(--fs-body-lg)",
                fontWeight: "var(--fw-medium)",
              }}
            >
              Use our contact form instead, so we can learn about your business environment.
            </p>
            <Button
              variant="primary"
              size="lg"
              style={{ marginTop: "var(--space-8)" }}
              onClick={() => {
                window.open(
                  "https://forms.office.com/pages/responsepage.aspx?id=RRsaxMJrwU2EaUt0_bGyY-ZcwsfS_WNPrnny-VPkU25UNjBVV1RKSUxGVVNUMlM5QVE2RlZQVE9aMS4u&route=shorturl",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Tell us about your business environment
            </Button>
          </Card>
        </div>
      </section>

      <section style={{ background: "var(--surface-page)", padding: "var(--space-16) var(--space-8)" }}>
        <div
          style={{
            maxWidth: "var(--container-sm)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "wrap",
            gap: "var(--space-6)",
          }}
        >
          {CHANNELS.map(([Ic, title, value]) => (
            <div key={title} className="hb-service-card" style={{ width: 240, display: "flex" }}>
              <Card variant="elevated" padding="md" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <HexIcon tone="honey" size={48} style={{ marginBottom: "var(--space-4)" }}>
                  <Ic />
                </HexIcon>
                <h3 style={{ margin: 0, fontSize: "var(--fs-h5)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</h3>
                <div style={{ margin: "var(--space-2) 0 0", color: "var(--hb-honey-700)", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)" }}>{value}</div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
