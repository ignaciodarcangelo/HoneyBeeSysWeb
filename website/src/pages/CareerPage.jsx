import React from "react";
import { Button } from "../../project/components/forms/Button.jsx";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { PageHero } from "../sections/PageHero.jsx";
import { IconSend } from "../sections/icons.jsx";

export function CareerPage() {
  return (
    <>
      <Seo {...SEO.career} />
      <PageHero
        eyebrow="Careers"
        title="Are you a bee without a hive?"
        subtitle="Send your resume and LinkedIn link to careers@honeybeesys.com."
      />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) var(--space-8)" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", display: "flex", justifyContent: "center" }}>
          <Button
            variant="primary"
            size="lg"
            iconLeft={
              <span style={{ width: 18, height: 18, display: "inline-flex" }}>
                <IconSend />
              </span>
            }
            onClick={() => {
              window.location.href = "mailto:careers@honeybeesys.com?subject=Application";
            }}
          >
            Send
          </Button>
        </div>
      </section>
    </>
  );
}
