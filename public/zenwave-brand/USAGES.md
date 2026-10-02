# ZenWave brand assets

Canonical brand marks and file icons for the website. Public URLs are
`/zenwave-brand/<filename>`.

Do not copy these files elsewhere under `public/`. Point every consumer at this
folder. Decorative illustrations, screenshots, and third-party logos stay in
`public/images/`, `public/logos/`, and `src/assets/`.

See `LOGO-INVENTORY.md` for why each file exists, and
`FILE-RENAME-REPORT.md` for the old-to-new mapping.

## Files and current website use

- `/zenwave-brand/zenwave-logo.svg`
  - Header (`src/components/ZenHeader.astro`)
  - Footer (`src/components/ZenFooter.astro`)
  - Starlight logo (`astro.config.mjs` `logo.src`)
  - Starlight favicon (`astro.config.mjs` `favicon`)
  - Blog favicon (`src/layouts/BlogLayout.astro`)
  - Homepage IDE & MCP capability card (`src/pages/index.astro`)
- `/zenwave-brand/zdl-website-diagram-icon.png`
  - Homepage ZDL capability card (`src/pages/index.astro`)
  - Shape stage in `src/components/ArchitectureLifecycleBand.astro`
- `/zenwave-brand/zfl-website-flow-icon.png`
  - Homepage ZFL capability card (`src/pages/index.astro`)
  - Shape stage in `src/components/ArchitectureLifecycleBand.astro`
- `/zenwave-brand/zdl-file-icon.svg`
  - Unused on the website. Canonical `.zdl` file-type mark (orange/teal hexagon, no terminal).
- `/zenwave-brand/zdl-file-icon.png`
  - Unused on the website. Raster of `zdl-file-icon.svg`.
- `/zenwave-brand/zenwave-sdk-icon.svg`
  - Unused on the website. Canonical SDK / `.zw` mark (blue hexagon with terminal).
- `/zenwave-brand/zenwave-sdk-icon.png`
  - Unused on the website. Raster of `zenwave-sdk-icon.svg`.
- `/zenwave-brand/zenwave-wordmark-nav.svg`
  - Unused on the website. Horizontal navigation wordmark. The live header uses `zenwave-logo.svg` plus the “ZenWave Platform” text.

`zdl-website-diagram-icon.png` and `zfl-website-flow-icon.png` are website
illustrations. They are not the `.zdl` / `.zfl` file icons.

## Favicon

The site favicon is the canonical `zenwave-logo.svg`. There is no separate
`public/favicon.svg`. Browsers receive `/zenwave-brand/zenwave-logo.svg` from
Starlight and from `BlogLayout.astro`.
