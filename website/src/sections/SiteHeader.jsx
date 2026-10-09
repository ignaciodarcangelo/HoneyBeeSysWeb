import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../project/components/brand/Logo.jsx";
import { Button } from "../../project/components/forms/Button.jsx";
import { IconMenu, IconX, IconChevronDown } from "./icons.jsx";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Why HoneyBee", href: "/why-honeybee" },
  {
    label: "Custom Products",
    children: [
      { label: "HiveAI", href: "/custom-products/hiveai" },
      { label: "ConX1", href: "/custom-products/conx1" },
    ],
  },
  { label: "Support", href: "/support" },
];

export function SiteHeader() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);
  const link = {
    color: "var(--text-on-dark)",
    textDecoration: "none",
    fontWeight: "var(--fw-semibold)",
    fontSize: "var(--fs-body-sm)",
    opacity: 0.82,
    cursor: "pointer",
  };

  return (
    <header style={{ background: "var(--hb-slate)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "0 var(--space-8)",
          height: 74,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "inline-flex", textDecoration: "none" }}>
          <Logo tone="onDark" size={52} />
        </Link>

        <nav className="site-header__nav" style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div key={item.label} className="hb-nav-dropdown">
                <span className="hb-nav-dropdown__trigger" style={link}>
                  {item.label}
                  <span className="hb-nav-dropdown__chevron">
                    <IconChevronDown />
                  </span>
                </span>
                <div className="hb-nav-dropdown__bridge" aria-hidden="true" />
                <div className="hb-nav-dropdown__panel">
                  {item.children.map((child) => (
                    <Link key={child.label} to={child.href} className="hb-nav-dropdown__link">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} to={item.href} style={link}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="site-header__actions" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <Button variant="ghost" size="sm" className="hb-header-support-btn" onClick={() => navigate("/emergency-support")}>
            Get support
          </Button>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            color: "var(--text-on-dark)",
            cursor: "pointer",
          }}
        >
          <span style={{ width: 22, height: 22 }}>{menuOpen ? <IconX /> : <IconMenu />}</span>
        </button>
      </div>

      {menuOpen ? (
        <div
          className="site-header__mobile-menu"
          style={{
            borderTop: "1px solid var(--border-on-dark)",
            padding: "var(--space-4) var(--space-8) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setProductsOpen((v) => !v)}
                  style={{
                    ...link,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                  }}
                >
                  {item.label}
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      display: "inline-flex",
                      transform: productsOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <IconChevronDown />
                  </span>
                </button>
                {productsOpen ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-3)", paddingLeft: "var(--space-4)" }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setProductsOpen(false);
                        }}
                        style={{ ...link, fontSize: "var(--fs-caption)", opacity: 0.72 }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} style={link}>
                {item.label}
              </Link>
            )
          )}
          <Button
            variant="ghost"
            size="sm"
            className="hb-header-support-btn"
            style={{ marginTop: "var(--space-2)" }}
            onClick={() => {
              setMenuOpen(false);
              navigate("/emergency-support");
            }}
          >
            Get support
          </Button>
        </div>
      ) : null}
    </header>
  );
}
