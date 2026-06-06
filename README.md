# ZenWave360 Astro/Starlight Prototype

This is a migration prototype for the old Smooth Docs/Gatsby site.

## What this proves

- Starlight can keep old documentation permalinks using `slug` frontmatter.
- Old redirects can be tracked in `src/redirects.json`; the prototype also generates static meta-refresh pages for static hosting.
- `zdl` and `zfl` syntax highlighting uses the TextMate grammars copied from `ivangsa.github.io`.
- `RemoteCode` and `CodeGeneration` can render from cached snapshots in `src/remote-code-cache.json`.
- `/llms.txt` and `/plain/...txt` expose LLM-friendly plain text routes for selected docs.

## Run locally

```bash
npm install
npm run content:migrate
npm run sync:remote-code
npm run dev
```

Then open `http://localhost:4322/`.

## Useful checks

```bash
npm run build
npm run routes:old
npm run routes:compare
```

`npm run routes:old` writes an inventory of old Smooth Docs routes to `old-routes.json`.
`npm run routes:compare` compares old explicit slugs against migrated Starlight pages and redirect entries.
`npm run content:migrate` re-runs the mechanical migration from the old Smooth Docs source.
