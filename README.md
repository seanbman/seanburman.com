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

This project deploys from `main` via GitHub Actions.

**Site URL:** `https://seanburman.com` (custom domain)

Enable Pages in the repo settings:

1. **Settings → Pages**
2. Source: **GitHub Actions**
3. Custom domain: `seanburman.com` (CNAME is already in `public/CNAME`)

### DNS (move off Squarespace)

At your domain registrar, replace Squarespace records with:

**Apex (`seanburman.com`) — A records**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**`www` — CNAME**
- `seanbman.github.io`

Then in **Settings → Pages**, wait for DNS check + enable “Enforce HTTPS”.
