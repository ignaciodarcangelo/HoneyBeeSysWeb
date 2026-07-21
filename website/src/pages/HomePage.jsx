import React from "react";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { Hero } from "../sections/Hero.jsx";
import { ServicesGrid } from "../sections/ServicesGrid.jsx";
import { CTASection } from "../sections/CTASection.jsx";

export function HomePage() {
  return (
    <>
      <Seo {...SEO.home} />
      <Hero />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
