# Work page: evidence and publication notes

This file records why each public-facing case study is included. The Work page describes work actually represented in project code or on public websites; it must not claim performance metrics or client outcomes without evidence.

## Plumbing Track operations console

**Implementation evidence:** `seanbman/bman-platform` — `README.md`, `internal/plumbingtrack/`, `internal/plumbingtrack/scheduling/`, `platform/`, and `public/js/workspace-calendar.js`.

Supported description:
- Multi-stage occupied-building repipe scheduling for jobs, buildings, suites, and work blocks
- Working-day rules and cascading rescheduling
- Checklists, room data, progress information, photo documentation, and calendar views
- Go/Echo, TypeScript, MongoDB

**Live UI evidence (November 17, 2026):** The authenticated application was inspected with the user's authorization. The user explicitly approved capturing private views to produce redacted case-study images. The Work page includes two direct browser captures:

- `public/work/plumbing-track/wall-measurements.jpg`: wall lengths, paint codes, cut diagrams, cap sizes, and angle inputs in the room editor.
- `public/work/plumbing-track/room-progress.jpg`: room progress plus wall and photo counts.

The browser captures are cropped at capture time to exclude project and suite identifiers, resident names, contact information, and schedules. They are not generated mockups. Uncropped captures, authenticated URLs, and the calendar and unit-card views containing private information are not included in this repository. Images open at full size from the Work page and keep their original proportions on mobile.

**Limitations:** The live interface confirms the visible room and wall features, not uptime, usage counts, performance gains, or a particular deployment version. The page makes no claims about those outcomes. Any additional screenshots or identifying customer details require a separate privacy review and appropriate permission.

## Plumbing Track public website

**Implementation evidence:** `seanbman/plumbing-track-static`, `seanbman/pt-site-updates`; public site `https://www.plumbingtrack.com/`.

Supported description:
- Public explanations of installation process, pipe types, and technical method
- Completed-building reference portfolio with photography
- Responsive layouts and navigation
- Building-assessment intake flow
- HTML, CSS, JavaScript, content architecture

**Limitations:** The page does not claim conversions, search ranking improvements, more inquiries, or higher sales. Where the site contains client project numbers, they are claims by Plumbing Track rather than independent outcomes of this website implementation.

## Publishing policy

- Display project evidence accurately; distinguish shipped features from work in progress.
- Do not show authenticated screens without removing tenant, customer, scheduling, personnel, and other private information and obtaining permission.
- Do not publish invented testimonials, precise business outcomes, or percentage improvements.
- Keep the business-card positioning and existing brand system intact.
- Never zero-pad a displayed sequence label: use 1, 2, 3, not 01, 02, 03. Historical filenames and version identifiers are not UI labels.

## Future cases

Other potential portfolio entries should be verified for publication and supplemented with real screenshots or outcomes before adding them. The linked project repositories can be inspected to draft those entries, but unfinished demonstrations must not be described as live client work.
