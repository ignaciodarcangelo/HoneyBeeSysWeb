import React from "react";
import { LogoWall } from "./LogoWall.jsx";

const PARTNERS = [
  { name: "Microsoft", logoSrc: "/logos/microsoft-logo.webp" },
  { name: "3CX", logoSrc: "/logos/3cx-logo.webp" },
  { name: "Telarus", logoSrc: "/logos/telarus-logo.webp" },
  { name: "Huntress", logoSrc: "/logos/huntress-logo.webp" },
  { name: "Atera", logoSrc: "/logos/atera-logo.png" },
  { name: "Crayon", logoSrc: "/logos/crayon-logo.png", scale: 1.6 },
];

export function OurPartners() {
  return (
    <LogoWall
      eyebrow="Backed by"
      title="Our partners"
      items={PARTNERS}
      direction="right"
      background="var(--surface-sunken)"
    />
  );
}
