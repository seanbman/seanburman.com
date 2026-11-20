# Sean Burman | Software Engineer

Portfolio website for seanburman.com, built with React, TypeScript and Vite.

[Website documentation index](docs/CONTENT_INDEX.md)

## Sections

1. [Portfolio direction](#portfolio-direction)
2. [Current site and planned work](#current-site-and-planned-work)
3. [Design](#design)
4. [Local development](#local-development)
5. [Deployment](#deployment)
6. [Writing and evidence](#writing-and-evidence)

## Portfolio direction

The site introduces Sean's custom software work through familiar business tasks and real project examples. Home gives a brief introduction, Work explains the projects, Services describes what Sean can build, and Process explains how a project moves from discussion to delivery.

Use [the documentation index](docs/CONTENT_INDEX.md) for the agreed names, page roles and reading order.

## Current site and planned work

The homepage showcase now presents three screenshot previews with working navigation. Work has a three-card index and separate project pages for the Plumbing Track console, Fleet dispatch demo, and Plumbing Track website. Fleet is clearly identified as a development demo using sample data.

The next planned slice expands the supporting Services and Process copy. The preview carousel remains manual, with no auto-advance. A screenshot is not an interactive application.

## Design

Use cream #F8F6F0, black #151515, orange #EA7847, steel blue #537D8D and teal #388697. Barlow Condensed is for headings, IBM Plex Sans for reading text and IBM Plex Mono for short labels.

Keep rectangular shapes, clear spacing and restrained hard shadows. Screenshots provide the main imagery. The text brand links home, so the navigation does not need a separate Home item.

The older dark architectural layout and contact-card-only design are historical. See the [layout plan](docs/SHOWCASE_AND_WORK_PLAN.md) for the current direction.

## Local development

Run `npm ci`, then `npm run dev`. Run `npm test` and `npm run build` before publishing application changes.

## Deployment

The GitHub Pages workflow deploys commits from main. The custom domain is set in public/CNAME.

The contact form sends requests to the configured Google Mail relay URL. Set `GOOGLE_MAIL_API`, or the existing `VITE_GOOGLE_MAIL_API` / `VITE_GMAIL_API` variable, as a GitHub Actions variable or secret. It must be a public HTTPS endpoint accepting JSON `{ name, email, message, subject }`. Keep Gmail credentials in the relay.

Check direct navigation and reloads when adding project routes.

## Writing and evidence

Use clear, professional language about jobs, people, records and decisions. Do not use em dashes or leading zeros on section and item numbers. Keep technical filenames and identifiers unchanged.

Use the [copy plan](docs/WEBSITE_COPY_AND_PLACEMENT.md) for wording and placement, the [layout plan](docs/SHOWCASE_AND_WORK_PLAN.md) for presentation, and the [evidence notes](docs/WORK_CASE_STUDIES.md) for supported project claims. Fleet must remain identified as a development demo with sample data.

Historical research and generated graphs are background material. They do not override the current portfolio plans.
