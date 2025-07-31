# ZenWave 360º Website

Website for https://www.zenwave360.io/

# Development

```bash
npm install --legacy-peer-deps
```

```bash
npm run --workspace website dev
```

# Build

```bash
npm run --workspace website clean
npm run --workspace website build
```

# Verify build

```bash
npm run --workspace website clean && \
npm run --workspace website build && \
npm run --workspace website serve
```

# Deploy

```bash
npm run --workspace website clean
npm run --workspace website deploy
```
