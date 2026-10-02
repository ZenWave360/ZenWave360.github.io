# Website asset route replacement report

All paths below are relative to the previous repository root. Canonical files
now live in this folder and are served as `/zenwave-brand/<filename>`. Use the
**new website route** column with that `/zenwave-brand/` prefix when replacing
references in the website. Old source files are preserved under `bak/root`.

See `README.md` for current website consumers.

## Direct replacements

| Previous file route | New website route | Notes |
| --- | --- | --- |
| `/zenwave-sdk-hexagon.svg` | `/zenwave-sdk-icon.svg` | Blue SDK / `.zw` icon; SVG was colour-cleaned. |
| `/zenwave-sdk-hexagon.png` | `/zenwave-sdk-icon.png` | Blue SDK / `.zw` raster icon. |
| `/zenwave-sdk-hexagon-2.svg` | `/zenwave-sdk-icon.svg` | Duplicate SDK artwork. |
| `/zenwave-sdk-hexagon-2.png` | `/zenwave-sdk-icon.png` | Stale SDK export; replace with the canonical raster. |
| `/zenwave-sdk-hexagon-2-big.png` | `/zenwave-sdk-icon.png` | Alternate white-background export; replace with canonical transparent raster. |
| `/zenwave-sdk-hexagon-old.svg` | `/zenwave-sdk-icon.svg` | Legacy smaller-terminal SDK variation. |
| `/zenwave-sdk-hexagon-old.png` | `/zdl-file-icon.png` | This PNG is actually the orange/teal no-terminal mark. |
| `/zenwave-sdk-hexagon - Copy.svg` | `/zdl-file-icon.svg` | Orange/teal `.zdl` file icon. |
| `/zenwave-sdk-hexagon - Copy.png` | `/zdl-file-icon.png` | Orange/teal `.zdl` raster icon. |
| `/zdl-icon.png` | `/zdl-website-diagram-icon.png` | ZDL website diagram, not the file icon. |
| `/zfl-icon.png` | `/zfl-website-flow-icon.png` | ZFL website flow diagram, not the file icon. |
| `/zenwave-logo.svg` | `/zenwave-logo.svg` | Name intentionally unchanged. |
| `/favicon.svg` | `/zenwave-logo.svg` | Current favicon source was a duplicate of the ZenWave logo. Create a dedicated favicon later if browser-specific sizing is needed. |
| `/zenwave-logo.svg.png` | `/zenwave-logo.svg` | Prefer the canonical vector. |
| `/logo-manifest.png` | `/zenwave-logo.svg` | Prefer the canonical vector; regenerate a manifest PNG only if the manifest requires PNG. |
| `/logo-nav.svg` | `/zenwave-wordmark-nav.svg` | Navigation wordmark. |

## Copied-folder replacements

| Previous file route | New website route |
| --- | --- |
| `/platform/icons/zenwave-sdk-hexagon.svg` | `/zenwave-sdk-icon.svg` |
| `/platform/icons/zenwave-logo.svg` | `/zenwave-logo.svg` |
| `/platform/icons/zdl-icon.png` | `/zdl-website-diagram-icon.png` |
| `/platform/icons/zfl-icon.png` | `/zfl-website-flow-icon.png` |
| `/ivangsa.com/zenwave-sdk-hexagon.svg` | `/zenwave-sdk-icon.svg` |
| `/ivangsa.com/zenwave-sdk-hexagon.png` | `/zenwave-sdk-icon.png` |
| `/ivangsa.com/zenwave-logo.svg` | `/zenwave-logo.svg` |
| `/ivangsa.com/zdl-icon.png` | `/zdl-website-diagram-icon.png` |
| `/ivangsa.com/zfl-icon.png` | `/zfl-website-flow-icon.png` |
| `/hexagon-website/zenwave-sdk-hexagon.svg` | `/zdl-file-icon.svg` |
| `/hexagon-website/zenwave-sdk-hexagon.png` | `/zdl-file-icon.png` |

## Assets moved to backup with no canonical replacement

These are decorative or source assets, not part of the approved canonical logo
set. They were moved from the root to `bak/root` and should be reviewed before
reintroducing them into a website route.

| Previous route | Backup location |
| --- | --- |
| `/hero-background.png` | `bak/root/hero-background.png` |
| `/hero-background.svg` | `bak/root/hero-background.svg` |
| `/hero-background-stroke-and-fill.svg` | `bak/root/hero-background-stroke-and-fill.svg` |
| `/laptop-buddha.png` | `bak/root/laptop-buddha.png` |
| `/laptop-buddha-transparent.png` | `bak/root/laptop-buddha-transparent.png` |
| `/laptop-gears.svg` | `bak/root/laptop-gears.svg` |
| `/zenwave-discord.png` | `bak/root/zenwave-discord.png` |
| `/zenwave360.excalidraw.svg` | `bak/root/zenwave360.excalidraw.svg` |

`zenwave360.excalidraw.svg` is a source-like wordmark/design artifact. It has
no automatic route replacement; review it before using
`/zenwave-wordmark-nav.svg` in its place.
