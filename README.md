# Sean Burman — Software Engineer

React + TypeScript + Vite website for seanburman.com.

## Design
Rectangular neo-brutalism: cream #F8F6F0, black #151515, orange #EA7847, steel blue #537D8D, teal #388697. Bold condensed headings, black borders, subtle hard black shadows on cards and buttons. The undecorated text logo/title links home; the navigation has no Home item.

## Showcase
The homepage includes three **intentionally blank** slide slots for future interactive widgets (dispatch, time tracking, revenue). Arrows and selector dots work; content and auto-advance will be added only when actual widgets are built. No "Rotating app Showcase" text.

## Local development
Run \`npm ci\`, then \`npm run dev\`. Run \`npm test\` and \`npm run build\` before publishing.

## Deployment
The existing GitHub Pages workflow deploys commits from main. The custom domain remains in public/CNAME (seanburman.com). The contact form POSTs to the configured Google Mail relay URL. Set `GOOGLE_MAIL_API` (or the existing `VITE_GOOGLE_MAIL_API` / `VITE_GMAIL_API` variable) as a GitHub Actions variable or secret. The value must be a public HTTPS endpoint that accepts JSON `{ name, email, message, subject }`; keep Gmail credentials in that relay, never in the static site.
