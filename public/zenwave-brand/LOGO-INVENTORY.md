# ZenWave logo inventory and naming proposal

Audit scope: the brand marks and file icons in this folder, plus a read-only
comparison with `zenwave-platform-vscode/packages/extension/resources`.
Decorative illustrations and screenshots are intentionally out of scope.

## Recommended canonical set

| Logical asset / use | Canonical source to keep | Proposed canonical name | Notes |
| --- | --- | --- | --- |
| ZenWave SDK; `.zw` file icon in the platform | `zenwave-sdk-hexagon.svg` | `zenwave-sdk-icon.svg` | Blue hexagon with terminal. Use this for the SDK mark and `.zw`; it has the larger, clearer terminal. Export PNGs from this SVG as needed. |
| ZDL; `.zdl` file icon in the platform | `zenwave-sdk-hexagon - Copy.svg` | `zdl-file-icon.svg` | Orange/teal hexagon without terminal. This is the only current orange/teal hex source. Its present name is misleading. |
| ZenWave Platform and `.zfl` file icon | `zenwave-logo.svg` | `zenwave-logo.svg` | Orange/teal rounded wave mark. Keep the established filename; use one master for both Platform and `.zfl`. |
| ZDL web illustration | `zdl-icon.png` | `zdl-website-diagram-icon.png` | Diagram, not the `.zdl` file icon. The `platform/icons` folder is web-site source, as noted. |
| ZFL web illustration | `zfl-icon.png` | `zfl-website-flow-icon.png` | Diagram, not the `.zfl` file/Platform mark. |
| Navigation wordmark | `logo-nav.svg` | `zenwave-wordmark-nav.svg` | Distinct horizontal navigation artwork. |

The `.zdl` and `.zfl` platform filenames above describe their use, even though
the supplied orange/teal marks are not separate colour families. If the
extension needs a square icon, export the canonical SVG into that target shape
instead of maintaining an unrelated hand-edited copy.

## Files to rename, retain, or retire

| Current file(s) | Proposed name / action | Duplicate or condition |
| --- | --- | --- |
| `zenwave-sdk-hexagon.svg`; `ivangsa.com/zenwave-sdk-hexagon.svg`; `platform/icons/zenwave-sdk-hexagon.svg` | Keep one as `zenwave-sdk-icon.svg`; remove the two copies from the brand source after consumers are updated. | Same rendered artwork; the `ivangsa.com` and `platform/icons` files are byte-identical to each other, and logically identical to the root source. |
| `zenwave-sdk-hexagon.png`; `ivangsa.com/zenwave-sdk-hexagon.png` | Keep/regenerate one as `zenwave-sdk-icon.png`. | Exact binary duplicate. |
| `zenwave-sdk-hexagon-2.svg` | Retire. | Same artwork as the canonical SDK SVG; only embedded Inkscape document/export names differ. |
| `zenwave-sdk-hexagon-2.png` | Retire and re-export from the canonical SDK SVG if needed. | Stale export: its terminal is smaller than the paired SVG and than the canonical PNG. |
| `zenwave-sdk-hexagon-2-big.png` | Retire. | White-background, cropped/alternate export; unsuitable as a transparent file icon master. |
| `zenwave-sdk-hexagon-old.svg` | Archive as `archive/zenwave-sdk-icon-small-terminal.svg` only if its smaller terminal is intentionally needed; otherwise retire. | Legacy blue-terminal composition with reversed blue layer order and smaller terminal. |
| `zenwave-sdk-hexagon-old.png`; `zenwave-sdk-hexagon - Copy.png`; `hexagon-website/zenwave-sdk-hexagon.png` | Keep one export as `zdl-file-icon.png`; remove/replace copies after references change. | Exact binary duplicates of the orange/teal no-terminal mark. The `old.png` name does **not** match `old.svg`. |
| `zenwave-sdk-hexagon - Copy.svg`; `hexagon-website/zenwave-sdk-hexagon.svg` | Keep one as `zdl-file-icon.svg`; remove/replace copies after references change. | Same rendered artwork; names/line endings account for their different file hashes. |
| `zdl-icon.png`; `ivangsa.com/zdl-icon.png`; `platform/icons/zdl-icon.png` | Keep one as `zdl-website-diagram-icon.png`; treat the other two as copies. | Exact binary duplicates. |
| `zfl-icon.png`; `ivangsa.com/zfl-icon.png`; `platform/icons/zfl-icon.png` | Keep one as `zfl-website-flow-icon.png`; treat the other two as copies. | Exact binary duplicates. |
| `zenwave-logo.svg`; `favicon.svg`; `ivangsa.com/zenwave-logo.svg`; `platform/icons/zenwave-logo.svg` | Keep one source as `zenwave-logo.svg`. Generate a true favicon separately from it. | All four are exact binary duplicates. `favicon.svg` is a misleading duplicate name, not a size-specific favicon asset. |
| `zenwave-logo.svg.png` | Re-export as a size-specific `zenwave-logo-1008.png` only if still required. | Raster export of the Platform mark. |
| `logo-manifest.png` | Rename to `zenwave-logo-756.png` only if the manifest still consumes it; otherwise regenerate at the manifest's required dimensions. | Same logo artwork, but not a byte/pixel duplicate because it has different dimensions/rendering. |
| `zenwave360.excalidraw.svg` | Archive as `source/zenwave-wordmark.excalidraw.svg` or remove if `logo-nav.svg` is the approved final. | Editable/source-like wordmark asset, not a product/file icon. |

## Important source-quality fix

The blue-terminal SVGs have obsolete orange/teal `fill` attributes
(`#e6a82a`, `#25a8b4`) underneath CSS `style` fills that make them render
blue (`#2196f3`, `#0d47a1`). This was almost certainly a string-replacement
colour refactor. Before treating `zenwave-sdk-icon.svg` as the master, remove
the overridden attributes and retain one unambiguous colour declaration per
path. This prevents later scripts or SVG consumers from accidentally restoring
the old colours.

## VS Code extension comparison (read-only)

`C:\Users\ivangsa\workspace\zenwave\zenwave-platform-vscode\packages\extension\resources`
contains `zdl-file-icon.svg` and `.png`, but it is a **blue no-terminal hexagon**.
It is not a byte duplicate of the orange/teal ZDL proposal above. The extension
also has `zenwave-logo.png`, which is an exact copy of `zenwave-logo.svg.png`.
Its preview SVGs are unrelated UI preview icons.

This means the extension will need an intentional asset update if the desired
ZDL identity is the orange/teal hexagon described above; it is not simply a
copy-cleanup operation.

## Applied organization

The audited source files are preserved under `bak/root` (including their
original `platform/icons`, `ivangsa.com`, and `hexagon-website` subpaths). The
canonical set is now at this folder's root. No unrelated screenshots or
decorative illustrations were moved.
