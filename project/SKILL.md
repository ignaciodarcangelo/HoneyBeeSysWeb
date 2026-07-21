---
name: honeybee-design
description: Use this skill to generate well-branded interfaces and assets for HoneyBee Systems, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** HoneyBee Systems — a Managed Service Provider (MSP) in Florida serving clients statewide and across the USA. Voice: friendly but expert; a beehive working in sync to solve IT problems.

**Colors (hierarchy matters — not 50/50):**
- Slate `#232B33` — BASE, dominant. Dark surfaces, primary text, authority.
- Honey Gold `#F2B518` — the color the brand OWNS. Symbol, accents, active states. (Gradient `#F7C43A → #E09A0F` for "premium" depth; flat gold is master.)
- Amber `#EBA91C` — ACTION. CTAs only.
- Cream `#F5EFE0` — air / light backgrounds.
- Text on gold is always dark slate, never white.

**Type:** Montserrat only. Headings ExtraBold + tight tracking; body Regular/Medium at 1.5. Brand labels UPPERCASE, tracked 0.18em. Sentence case elsewhere. No emoji.

**Motifs:** honeycomb hexagon (see `HexIcon`), the bee mark, subtle honeycomb-dot textures on dark sections, soft slate-tinted shadows, 14px card radius, brisk no-bounce motion, honey focus ring.

## Files
- `styles.css` — link this one file to get all tokens + Montserrat.
- `tokens/` — color / type / spacing / effects / font CSS custom properties.
- `assets/` — `bee-mark.svg`, logo PNGs, `brand-sheet.svg`, `fonts/Montserrat-*.ttf`.
- `components/` — React primitives (forms, layout, feedback, navigation, brand). Each has `.jsx`, `.d.ts`, `.prompt.md`, and a `@dsCard` demo. Read the `.prompt.md` files for usage.
- `ui_kits/marketing/` and `ui_kits/portal/` — full-screen product recreations (homepage; client support dashboard) that compose the components.
- `guidelines/` — foundation specimen cards.
- `README.md` — full brand, content, and visual guide.

## Using components
Components export on `window.HoneyBeeSystemsDesignSystem_48ceb3` after loading the compiled bundle. In an HTML file: link `styles.css`, load React + Babel + `_ds_bundle.js`, then `const { Button, Card, HexIcon } = window.HoneyBeeSystemsDesignSystem_48ceb3;`. See any `ui_kits/*/index.html` or `components/**/*.card.html` for the exact pattern.

## Notes
- Icons: Lucide-style inline strokes are used as a substitute — no official icon set was provided. Swap in the real set if one exists.
- The bee mark was reconstructed from the provided brand-sheet SVG and recolored with the master gold gradient.
- `--font-mono` targets JetBrains Mono with a system fallback; no mono font file is bundled.
