import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SiteHeader } from "./sections/SiteHeader.jsx";
import { SiteFooter } from "./sections/SiteFooter.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ServicesPage } from "./pages/ServicesPage.jsx";
import { WhyHoneyBeePage } from "./pages/WhyHoneyBeePage.jsx";
import { SupportPage } from "./pages/SupportPage.jsx";
import { CareerPage } from "./pages/CareerPage.jsx";
import { EmergencySupportPage } from "./pages/EmergencySupportPage.jsx";
import { HiveAIPage } from "./pages/HiveAIPage.jsx";
import { Conx1Page } from "./pages/Conx1Page.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-honeybee" element={<WhyHoneyBeePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/emergency-support" element={<EmergencySupportPage />} />
        <Route path="/custom-products/hiveai" element={<HiveAIPage />} />
        <Route path="/custom-products/conx1" element={<Conx1Page />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
