import React from "react";
import { Seo } from "../components/Seo.jsx";
import { SEO } from "../seoData.js";
import { Hero } from "../sections/Hero.jsx";
import { OurCustomers } from "../sections/OurCustomers.jsx";
import { OurPartners } from "../sections/OurPartners.jsx";
import { ServicesGrid } from "../sections/ServicesGrid.jsx";
import { Testimonials } from "../sections/Testimonials.jsx";
import { CTASection } from "../sections/CTASection.jsx";

export function HomePage() {
  return (
    <>
      <Seo {...SEO.home} />
      <Hero />
      <ServicesGrid />
      <OurCustomers />
      <Testimonials />
      <OurPartners />
      <CTASection />
    </>
  );
}
