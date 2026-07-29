# Sean Burman

Personal site for custom software consulting.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This project deploys from `master` via GitHub Actions to:

`https://seanbman.github.io/seanburman.com/`

Enable Pages in the repo settings:

1. **Settings → Pages**
2. Source: **GitHub Actions**

If you attach a custom domain (`seanburman.com`), set `base: '/'` in `vite.config.ts` and add a `CNAME` file under `public/`.
