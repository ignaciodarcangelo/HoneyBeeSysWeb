import React from "react";

const SITE_URL = "https://honeybeesys.com";
const SITE_NAME = "HoneyBee Systems";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/* Updates document.title, meta description, canonical link, and Open
   Graph/Twitter tags per route. This runs client-side, so it's picked up
   by crawlers that execute JS (Googlebot) but not by non-JS link
   unfurlers (Slack, Facebook, etc.) — those fall back to the static
   defaults in index.html. There's no per-route static HTML without a
   prerender step, which this project doesn't have yet. */
export function Seo({ title, description, path = "/" }) {
  React.useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
  }, [title, description, path]);

  return null;
}
