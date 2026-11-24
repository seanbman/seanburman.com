# Work page: evidence and publication notes

This file records why each public-facing case study is included. The Work page describes work actually represented in project code or on public websites; it must not claim performance metrics or client outcomes without evidence.

[Documentation index](CONTENT_INDEX.md) | [Previous: Screenshot and layout plan](SHOWCASE_AND_WORK_PLAN.md) | [Copy and placement](WEBSITE_COPY_AND_PLACEMENT.md)

## Sections

1. [Console evidence](#plumbing-track-operations-console)
2. [Fleet demo evidence](#fleet-dispatch-demo)
3. [Website evidence](#plumbing-track-public-website)
4. [Service examples](#service-examples)
5. [Publishing policy](#publishing-policy)
6. [Future cases](#future-cases)

## Plumbing Track operations console

**Implementation evidence:** `seanbman/bman-platform`: `README.md`, `internal/plumbingtrack/`, `internal/plumbingtrack/scheduling/`, `platform/`, and `public/js/workspace-calendar.js`.

Supported description:

- Multi-stage occupied-building repipe scheduling for jobs, buildings, suites, and work blocks
- Working-day rules and cascading rescheduling
- Checklists, room data, progress information, photo documentation, and calendar views
- Go/Echo, TypeScript, MongoDB

**Live UI evidence (November 24, 2026):** The authenticated application was inspected with the user's authorization. The user explicitly approved capturing private views to produce redacted case-study images. The Work page includes three direct browser captures:

- `public/work/plumbing-track/wall-measurements.jpg`: wall lengths, paint codes, cut diagrams, cap sizes, and angle inputs in the room editor.
- `public/work/plumbing-track/room-progress.jpg`: room progress plus wall and photo counts.
- `public/work/plumbing-track/stage-schedule.png`: a cropped schedule view showing staged suite-prep work, working dates, and unit groups without the project header.

The browser captures are cropped at capture time to exclude project and suite identifiers, resident names, and contact information. They are not generated mockups. Uncropped captures, authenticated URLs, and detailed unit-card views containing private information are not included in this repository. Images open at full size from the Work page and keep their original proportions on mobile.

**Limitations:** The live interface confirms the visible room and wall features, not uptime, usage counts, performance gains, or a particular deployment version. The page makes no claims about those outcomes. Any additional screenshots or identifying customer details require a separate privacy review and appropriate permission.

## Fleet dispatch demo

**Source record:** [Fleet capture README](../public/work/fleet-platform/README.md). Captures were made from the running Rails application using synthetic development records on November 17, 2026.

The README records the source repository, branch, commit, browser workflow and capture scripts. Preserve those identifiers for traceability.

Supported description:

- Intake request views and customer directory
- Desktop dispatch and schedule views
- Phone scheduling and technician work-order views
- Mobile work-order views and a work-order closure view
- A working development demo using sample data

**Limits:** These screenshots do not establish a production deployment, paying customer, live vehicle tracking, route optimization, payroll, billing integration or measured business savings. The Map control and some navigation destinations were unfinished at capture time. Check application behavior before claiming a particular action moves a record from one stage to another.

Use the public name “Fleet dispatch demo” even though its repository and asset folder use fleet-platform. Explain “blocker” as “what is holding up the work” in visitor copy. Technical filenames remain unchanged.

## Plumbing Track public website

**Implementation evidence:** `seanbman/plumbing-track-static`, `seanbman/pt-site-updates`; public site `https://www.plumbingtrack.com/`.

Supported description:
- Public explanations of installation process, pipe types, and technical method
- Completed-building reference portfolio with photography
- Responsive layouts and navigation
- Building-assessment intake flow
- HTML, CSS, JavaScript, content architecture

**Limitations:** The page does not claim conversions, search ranking improvements, more inquiries, or higher sales. Where the site contains client project numbers, they are claims by Plumbing Track rather than independent outcomes of this website implementation.

## Service examples

The contracting sections describe tools that could be built for a business. Materials, receipts, crew hours, customer and job records, site coordination and visit updates are service examples, not a claim that every feature is already implemented in Fleet or another project.

Keep the examples conditional and specific. State what a proposed tool could record or help someone do. A screenshot from one project must not imply that all the surrounding service examples exist in that project.

The rapid-development copy explains a staged approach. It does not promise an unverified build duration. Hosting, data migration, service connections, training and support must be agreed for each project.

## Publishing policy

- Display project evidence accurately; distinguish shipped features from work in progress.
- Do not show authenticated screens without removing tenant, customer, scheduling, personnel, and other private information and obtaining permission.
- Do not publish invented testimonials, precise business outcomes, or percentage improvements.
- Follow the current portfolio direction in CONTENT_INDEX.md and the visual rules in SHOWCASE_AND_WORK_PLAN.md. Older business-card and architectural design notes are historical.
- Use sentence case and familiar business language. Do not use em dashes in authored documentation or public copy.
- Never zero-pad a displayed sequence label: use 1, 2, 3 without leading zeros. Historical filenames and version identifiers are not UI labels.

## Future cases

Other potential portfolio entries should be verified for publication and supplemented with real screenshots or outcomes before adding them. The linked project repositories can be inspected to draft those entries, but unfinished demonstrations must not be described as live client work.
