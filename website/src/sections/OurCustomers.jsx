import React from "react";
import { LogoWall } from "./LogoWall.jsx";

const CUSTOMERS = [
  { name: "RAI", logoSrc: "/logos/rai-logo.png" },
  { name: "MRS", logoSrc: "/logos/mrs-logo.png" },
  { name: "W Aviation", logoSrc: "/logos/w-aviation-logo.webp", scale: 1.6 },
  { name: "Gervis", logoSrc: "/logos/gervis-logo.webp" },
  { name: "NIPS", logoSrc: "/logos/nips-logo.png" },
  { name: "MG Law", logoSrc: "/logos/mg-law-logo.png" },
  { name: "ECS", logoSrc: "/logos/ecs-logo.png" },
  { name: "FKA", logoSrc: "/logos/fka-logo.png", scale: 1.6 },
];

export function OurCustomers() {
  return (
    <LogoWall
      eyebrow="Trusted by"
      title="Our customers"
      items={CUSTOMERS}
      direction="left"
      background="var(--surface-page)"
    />
  );
}
