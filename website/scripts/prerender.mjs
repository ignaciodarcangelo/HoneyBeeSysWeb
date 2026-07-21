// Runs automatically after `vite build` (npm's postbuild hook). Takes the
// built dist/index.html shell (already has hashed asset links) and writes
// one copy per route with that route's own <title>/description/canonical/
// OG tags baked in statically, at dist/<route>/index.html. Netlify serves
// a request for /services from dist/services/index.html directly, before
// the SPA catch-all in _redirects ever applies — so link unfurlers and any
// crawler that doesn't execute JS see the right preview per page, not just
// the homepage's. The React app then mounts as normal (createRoot, not
// hydrateRoot) and <Seo> re-applies the same values client-side, so there's
// no mismatch and no visible flicker.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SEO } from "../src/seoData.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const shellPath = path.join(distDir, "index.html");
const SITE_URL = "https://honeybeesys.com";
const SITE_NAME = "HoneyBee Systems";

if (!fs.existsSync(shellPath)) {
  console.error("prerender: dist/index.html not found, run `vite build` first.");
  process.exit(1);
}

const shell = fs.readFileSync(shellPath, "utf8");

function withRouteMeta(html, { path: routePath, title, description }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${routePath}`;

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${fullTitle}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${fullTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${fullTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);
}

let written = 0;
for (const route of Object.values(SEO)) {
  const html = withRouteMeta(shell, route);

  if (route.path === "/") {
    fs.writeFileSync(shellPath, html);
  } else {
    const outDir = path.join(distDir, route.path.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
  }
  written += 1;
}

console.log(`prerender: wrote per-route SEO meta for ${written} routes.`);
