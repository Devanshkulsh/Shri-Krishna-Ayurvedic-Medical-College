# Shri Krishna Ayurvedic Medical College

This project is a Vite + React + TypeScript site for Shri Krishna Ayurvedic Medical College.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build output is generated in `dist/`.

## Vercel deployment

This repo now includes `vercel.json` for Vercel deployment.

- Framework: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

The Vercel config also includes a rewrite to `index.html` so React Router routes like `/hospital` or `/gallery` work correctly when opened directly.
