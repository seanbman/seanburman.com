# Screenshots in the homepage showcase and Work section

Status: proposed design and implementation plan. Reviewed November 20, 2026.

This document builds on [WORK_CASE_STUDIES.md](WORK_CASE_STUDIES.md), the screenshot inventories under `public/work/`, and the current React implementation. It specifies future presentation; it does not record completed UI changes or approve individual image crops.

[Documentation index](CONTENT_INDEX.md) | [Previous: Copy and placement](WEBSITE_COPY_AND_PLACEMENT.md) | [Next: Project evidence](WORK_CASE_STUDIES.md)

## Sections

1. [Purpose](#1-purpose)
2. [Current repository state](#2-current-repository-state)
3. [Homepage examples](#3-homepage-three-examples)
4. [Work index](#4-work-index)
5. [Project pages](#5-project-page-structure)
6. [Asset preparation](#6-asset-preparation-and-shared-content)
7. [Delivery sequence](#7-delivery-sequence)
8. [Acceptance criteria](#8-acceptance-criteria)
9. [Source references](#source-references)

## 1. Purpose

Use [the documentation index](CONTENT_INDEX.md#portfolio-direction) for the shared page roles, project names and link labels. The copy plan supplies the wording; this plan supplies presentation and image placement. Evidence notes set the limits on factual claims.


The homepage window should make the service tangible within a few seconds: here is a real piece of software, here is the work it supports, and here is where to see the details.

Work pages should explain the decisions behind that software. A screenshot belongs beside the requirement or workflow it demonstrates. The visitor should understand why the screen exists and what someone can do with it.

Use the current cream, black, orange, blue and teal shell, existing typography, squared controls and restrained button shadows. Preserve the visual identity of each captured application inside the frame. Avoid decorative laptop mockups, floating dashboards and extra ornamental chrome.

### Visual rules

Use the current palette: cream #F8F6F0, black #151515, orange #EA7847, steel blue #537D8D and teal #388697. Use orange for primary actions; keep blue and teal as supporting accents. Check text contrast rather than assuming every palette pairing is readable.

Use Barlow Condensed for headings, IBM Plex Sans for paragraphs and IBM Plex Mono for short labels. Package the font files with the site when implementing the update; the reviewed CSS currently imports them from Google Fonts. Keep body text around 17 to 19px, with line height around 1.5 and a reading width of 60 to 70 characters. On phones, keep body text at least 16px. Use sentence case for headings and buttons. Reserve uppercase for short category labels and the existing brand treatment.

Keep the existing header, footer, squared controls and card borders consistent. Use hard shadows sparingly on cards and buttons. Give each page one clear main heading. Keep screenshot captions close to their images and use the same width, spacing and label treatment across project pages.

Services, Process and project pages use normal scrolling. Keep a compact homepage where it remains readable, but allow scrolling on short screens. Do not add sticky section takeovers, parallax, decorative device frames or large abstract artwork from older references. Balance heading lines with CSS where possible; do not join every paragraph's last words with nonbreaking spaces at the expense of mobile wrapping.

## 2. Current repository state

| Area | Current state | Planned change |
| --- | --- | --- |
| `src/components/Showcase.tsx` | Three evidenced project previews with project links, responsive sources and stable carousel controls | Keep one compact carousel with a bounded image stage and a shared caption/control footer |
| `src/pages/Home.tsx` | Showcase sits beside the opening statement | Keep its role and position; expand the opening copy in the next content slice |
| `src/pages/Work.tsx` | Three-card index linking to project pages | Keep the index concise; add homepage previews separately |
| Project pages | Console, Fleet demo and public website routes are implemented with evidence-bound sections | Refine copy and imagery only where review identifies a factual or visual issue |
| `src/App.tsx` | `/work` plus `/work/:slug` project routing | Verify direct links and reload behavior on the hosting setup |
| `src/App.css` | Homepage showcase uses a bounded desktop stage, responsive crops and a compact footer | Keep the opening hero within the short desktop viewport and stack the hero columns at tablet widths |

The screenshot collections and case-study implementation are carried in the current branch. The homepage showcase uses the original captures with per-project crop, caption and mobile-source settings.

## 3. Homepage: three examples

Use one slide per project. Replace the placeholder Employee hours and Revenue labels; the current screenshot collection does not establish those demonstrations.

| Order | Project and headline | Primary source | Mobile source or treatment | Destination |
| --- | --- | --- | --- | --- |
| 1 | Plumbing Track console: “Job details, down to the room.” | `/work/plumbing-track/wall-measurements.jpg` | A separately prepared detail crop from the same approved image; preserve the cut diagram and relevant measurement inputs | `/work/plumbing-track-console` |
| 2 | Fleet dispatch demo: “From the schedule to the job.” | `/work/fleet-platform/1600_dispatch.png` | `/work/fleet-platform/430_dispatch.png`, using an intentional viewport crop focused on day headers and assigned jobs | `https://apps.seanburman.com/fleet` from the homepage; `/work/fleet-platform` for the case study |
| 3 | Plumbing Track website: “Explain the service. Show the work.” | `/work/plumbing-track-website/home.jpg` | An intentional detail crop with a useful visible heading; use a genuine mobile capture when available | `/work/plumbing-track-website` |

Use the exact slide captions in [the copy plan](WEBSITE_COPY_AND_PLACEMENT.md#demo-window). Keep wording in that document rather than maintaining competing drafts here.

The captions are grounded in the inventory and existing documentation. Confirm the exact visible content when selecting crops. If a crop loses the context needed to support its caption, change the crop or caption.

### Window composition

Each slide contains, in reading order:

1. Project name and a short type label.
2. One image as the dominant element.
3. A short heading and one sentence explaining the work.
4. A compact footer with the project link on the left and arrows plus slide indicators on the right.

Keep the existing “BUSINESS SOFTWARE IN ACTION” frame heading. Label Fleet visibly “Development demo · Sample data”. An image preview is static; its internal buttons must not appear to operate the application. Do not add drag handles, pretend input fields or simulated success messages.

Use the image and project link as separate elements. Add “Enlarge screenshot” only if enlargement is actually implemented. Keep carousel controls outside links and image enlargement targets.

### Image fitting

Desktop: use a bounded landscape media region with a neutral background and a stable height across slides. Clip each original image to a documented source-coordinate window and scale that window to the stage; never stretch the source or let a full-page capture determine the stage height. The crop windows keep the Room Editor's first wall, Fleet's schedule and job blocks, and the website service headline plus the beginning of its references visible.

If the complete application screen becomes illegible, use an explicitly selected detail crop. Preserve enough surrounding labels to explain the feature. Keep the original available on the project page.

Keep slide dimensions stable when moving between projects. Reserve one shallow caption/footer height for the longest caption, keep the project link and controls in the same row, and keep the total showcase around 460–540px at 1366 × 768. A screenshot must not force the homepage out of its intended desktop composition.

Mobile: move previous/next controls below the caption, beside the pagination. The existing 48px columns remove 96px from an already narrow window. Use the full available card width for the image, with roughly 12px internal padding. Preserve natural document scrolling.

Use a genuine mobile Fleet screen as a portrait detail within a bounded media area. Do not shrink a very tall full-page screenshot to fit its entire height. Crop a meaningful viewport and provide the complete image on the Work page. Website mobile crops remain crops of a desktop capture until a genuine mobile capture exists; never label them as mobile UI.

Project-page galleries use bounded previews for unusually tall captures while retaining the original image as the linked full-resolution view.

### Interaction and accessibility

- Start on the console slide. Change slides only through user action; no autoplay.
- Keep previous/next controls and direct slide selection. Swipe may supplement them.
- Use descriptive selector labels such as “Show Fleet dispatch example”; announce the selected project in the existing status region.
- Keep focus on the activated control when changing slides. Hidden slide links must not remain focusable.
- Provide visible keyboard focus, at least 44px touch targets, and sufficient contrast.
- Respect reduced motion. A short fade is optional; no panning or zooming is needed.
- Write alt text describing the visible interface. Keep business interpretation in the caption.
- If an image fails, retain the project heading, caption, navigation and project link.

## 4. Work index

Make `/work` a short introduction followed by three project cards. Use the same project names, representative images and destinations as the homepage.

| Entry | Type | What the card should communicate |
| --- | --- | --- |
| Plumbing Track console | Client operations software | Detailed workflows for occupied-building repipe work |
| Fleet dispatch demo | Development demo | Dispatch, job intake and technician workflows, shown with sample data |
| Plumbing Track website | Client website | Technical explanation, project references and assessment intake |

Each card needs one preview, one descriptive sentence, a clear project type and the project link specified above. Keep the console and website separate even though they share a client. Their requirements and delivered work differ.

Use a single column on phones; use a roomy grid or stacked image/text rows on larger screens. Avoid putting every screenshot or full case study onto the index. Normal scrolling is appropriate for this page.

## 5. Project page structure

Proposed routes are new implementation work; they do not exist in the reviewed main branch.

Each page should include:

1. “Back to Work”, project name, type/status and a short account of what was built.
2. A strong opening screenshot with a factual caption.
3. The working context: who uses the system and what they need to accomplish.
4. A visible link row after the opening overview for the working demo or live site, plus related project routes where useful.
5. The supporting sections in the copy plan, with relevant screenshots grouped beside the work they explain.
6. Scope and decisions: what Sean built and why the workflow required those choices.
7. Current state and supported results. Describe what was built; use measured outcomes only when evidence exists.
8. A compact technical note, related project where useful, and a contact link.

Allow long project pages to scroll. Scope the current desktop viewport-fitting styles so they cannot clip galleries or force compressed text. Use prose beside or above images, with a comfortable reading width around 60–70 characters. Alternate layouts only when they improve comprehension.

### Plumbing Track console

Opening: “Built around the details of repipe work.” Use the full draft in the copy plan.

Use `wall-measurements.jpg` for the feature that distinguishes this system from a generic CRM. Explain the relationship between room details, wall measurements, cut information and paint references.

Use `room-progress.jpg` beside a section about reviewing rooms and their attached documentation. Explain the visible progress and counts without inventing reporting or automation behavior.

Retain supported scheduling descriptions from WORK_CASE_STUDIES.md, but distinguish scheduling features supported by the project code from the room features actually shown. Additional calendar imagery is a capture task, not an existing deliverable. The approved console images exclude identifying context; do not recover or reintroduce that context in crops, captions or metadata.

End with a related link to the public website case: the same business required both internal operations software and a public explanation of its method.

### Fleet dispatch demo

Opening: “From the first request to the finished visit.” Use the full draft in the copy plan.

Clearly state that screenshots show a running Rails development application with synthetic fixtures. Confirm the current scope and Sean’s role from source before final publication.

| Story section | Source images | Editorial purpose |
| --- | --- | --- |
| Intake and coordination | `1600_intake.png`, `1280_dispatch.png` | Show intake and dispatch views; verify any claimed transition between them |
| Information around the job | `1600_customers.png`, `430_technician_work_order.png` | Explain the office and field perspectives |
| Progress and exceptions | `430_technician_progress.png`, `430_technician_blocker.png` | Show saved visit progress and a reported blocker/follow-up |
| Closure | `1280_wq009_closure.png` | Explain the visible closure workflow without implying unsupported billing behavior |

Use four image groups: dispatch, intake with customer records, mobile work order with progress, and a reported problem with closure. Keep extra captures optional. The copy plan's five supporting sections remain in order; do not repeat the opening image to illustrate every section. Place related mobile screens side by side on desktop and stack them on phones. Avoid a tall collage that reduces each screen to unreadable text.

Do not present the disabled Map control or unfinished navigation as delivered features. A sequence of screenshots supports an illustrated walkthrough; label any future interactive reconstruction separately as a demo.

### Plumbing Track website

Opening: “Helping people understand a specialized service.” Use the full draft in the copy plan.

| Section | Source images | Point to explain |
| --- | --- | --- |
| First impression | `home.jpg` | How the opening introduces the service |
| Understanding the method | `how-it-works.jpg`, optionally `technology.jpg` | How technical explanations are organized |
| Evaluating previous projects | `project-portfolio.jpg` | How visitors find project references |
| Making an inquiry | `assessment-form.jpg` | The structured assessment intake |

Use `home-full.jpg` only as an optional full-page overview or enlarged reference. It is 1348 × 3370 and will be too small if contained in the homepage demo window. Use three or four selected images for the primary page narrative.

Link to the live website. Captured testimonials and project figures belong to the client’s published content; they do not establish that the website increased sales, inquiries or search performance.

## 6. Asset preparation and shared content

Preserve current captures and their README provenance. Create separate web derivatives rather than overwriting originals. Proposed derivative location: `public/work/<project>/previews/`. Name crops by purpose, such as `wall-measurements-home.webp`; no proposed derivative exists until it is created and checked.

Prepare responsive image widths appropriate to display size and pixel density. Use WebP or AVIF where small UI text remains crisp. Aim for roughly 80–180KB per homepage preview; accept a larger file when needed for legibility. Provide a suitable fallback. Only the initially visible image should load eagerly; defer the other slides and lower-page galleries.

Record intrinsic width and height to prevent layout shifts. Keep screenshot filenames, source context and crop notes traceable. Do not apply brand color filters to captured interfaces.

Introduce shared project data, for example `src/content/work.ts`, so the homepage, index and detail pages reuse titles, status, links and image metadata. Useful fields:

| Field | Purpose |
| --- | --- |
| `slug`, `title`, `kind`, `statusLabel` | Consistent identity and accurate project classification |
| `summary`, `homeCaption` | Copy suited to each location |
| `previewDesktop`, `previewMobile` | Deliberate responsive media selection |
| `screenshots[]` | Source, dimensions, alt text, caption and optional full-size source |
| `sections[]` | Project narrative and its associated images |
| `evidenceNote`, `relatedSlugs` | Internal provenance reference and related work |

Keep implementation notes out of visitor-facing copy. Do not infer application features merely from asset filenames.

## 7. Delivery sequence

1. Review the actual captures and choose focal areas; confirm Fleet’s scope and project description.
2. Prepare derivatives and metadata while preserving originals.
3. Populate the homepage’s three slots and revise responsive controls.
4. Move the feature branch's two full case studies into their own pages, create the Fleet page and build the three-card Work index.
5. Reuse existing verified case-study copy and pair screenshots with the requirements they demonstrate.
6. Add the Services, Process, About and Contact copy at the positions listed in the copy plan.
7. Check responsive behavior, image quality, navigation, document links and factual wording before merging.

## 8. Acceptance criteria

- Every screenshot, caption and project link points to the correct project.
- Homepage examples remain legible at 360px, 390px, 430px, 768px, 1280px and 1440px widths, including a short desktop viewport.
- No horizontal page overflow, distorted images, clipped captions or layout jumps between slides.
- Mobile screenshots use available width; full-page captures are not crushed into thumbnails.
- All carousel controls work by keyboard; hidden content cannot receive focus.
- Fleet’s development status and sample-data context are visible.
- No unverified Revenue, Employee hours, Map, billing or business-result claims.
- Work pages have distinct URLs, survive direct navigation/reload on the hosting setup, and support browser Back.
- Enlarged images, if offered, work on mobile and have an obvious return or close path.
- Existing build and relevant navigation checks pass when the UI is implemented. This documentation-only change requires editorial and path review, not application test execution.

## Source references

- Current implementation: `src/pages/Home.tsx`, `src/components/Showcase.tsx`, `src/pages/Work.tsx`, `src/App.tsx`, `src/App.css`.
- Feature branch case-study notes: [WORK_CASE_STUDIES.md](WORK_CASE_STUDIES.md).
- Fleet capture provenance: [README](../public/work/fleet-platform/README.md).
- Public website capture inventory: [README](../public/work/plumbing-track-website/README.md).
- Approved console images: [wall measurements](../public/work/plumbing-track/wall-measurements.jpg), [room progress](../public/work/plumbing-track/room-progress.jpg).
