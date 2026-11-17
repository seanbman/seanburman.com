# Screenshots in the homepage showcase and Work section

Status: proposed design and implementation plan. November 17, 2026.

This document builds on [WORK_CASE_STUDIES.md](WORK_CASE_STUDIES.md), the screenshot inventories under `public/work/`, and the current React implementation. It specifies future presentation; it does not record completed UI changes or approve individual image crops.

## 1. Purpose

The homepage window should make the service tangible within a few seconds: here is a real piece of software, here is the work it supports, and here is where to see the details.

Work pages should explain the decisions behind that software. A screenshot belongs beside the requirement or workflow it demonstrates. The visitor should understand why the screen exists and what someone can do with it.

Use the current cream, black, orange, blue and teal shell, existing typography, squared controls and restrained button shadows. Preserve the visual identity of each captured application inside the frame. Avoid decorative laptop mockups, floating dashboards and extra ornamental chrome.

## 2. Current repository state

| Area | Current state | Planned change |
| --- | --- | --- |
| `src/components/Showcase.tsx` | Three deliberately empty slots: Dispatch, Employee hours, Revenue | Replace slot data with three evidenced project previews |
| `src/pages/Home.tsx` | Showcase sits beside the opening statement | Keep its role and position; make each example understandable independently |
| `src/pages/Work.tsx` on main | Placeholder | Build a compact index linking to project pages |
| Work feature branch | Two Plumbing Track case studies; console images already embedded | Reuse verified copy, split into pages, add website imagery and a distinct Fleet entry |
| `src/App.tsx` | Only a single `/work` route | Add explicit project routes and direct-link support |
| `src/App.css` | Arrow columns consume screenshot width; desktop pages have viewport-fitting rules | Give media sufficient space and allow Work detail pages to scroll naturally |

The screenshot collections and existing case-study implementation are on `feat/work-case-studies-and-numbering`. This plan should be implemented there or carried forward with those changes. A recent repository push alone does not establish that these assets are merged into main.

## 3. Homepage: three examples

Use one slide per project. Replace the placeholder Employee hours and Revenue labels; the current screenshot collection does not establish those demonstrations.

| Order | Project and suggested headline | Primary source | Mobile source or treatment | Destination |
| --- | --- | --- | --- | --- |
| 1 | Plumbing Track console: “Job details, down to the room.” | `/work/plumbing-track/wall-measurements.jpg` | A separately prepared detail crop from the same approved image; preserve the cut diagram and relevant measurement inputs | `/work/plumbing-track-console` |
| 2 | Fleet: “From the schedule to the job.” | `/work/fleet-platform/1280_dispatch.png` | `/work/fleet-platform/430_technician_work_order.png`, using an intentional viewport crop if the capture is tall | `/work/fleet-platform` |
| 3 | Plumbing Track website: “A technical service, clearly explained.” | `/work/plumbing-track-website/home.jpg` | An intentional detail crop with a useful visible heading; use a genuine mobile capture when available | `/work/plumbing-track-website` |

Suggested slide captions:

- Console: “Room measurements, cut details and paint references kept together.”
- Fleet: “Dispatch and technician views from a working development app using sample data.”
- Website: “A public website connecting the repiping method, project references and assessment intake.”

These are draft editorial captions grounded in the inventory and existing documentation. Confirm the exact visible content when selecting crops. If a crop loses the context needed to support its caption, change the crop or caption.

### Window composition

Each slide contains, in reading order:

1. Project name and a short type label.
2. One image as the dominant element.
3. A short heading and one sentence explaining the work.
4. A normal link labeled “View project”.

Keep the existing “BUSINESS SOFTWARE IN ACTION” frame heading. Label Fleet visibly “Development app · Sample data”. An image preview is static; its internal buttons must not appear to operate the application. Do not add drag handles, pretend input fields or simulated success messages.

Use the image and project link as separate elements. Add “Enlarge screenshot” only if enlargement is actually implemented. Keep carousel controls outside links and image enlargement targets.

### Image fitting

Desktop: use a media region with a preferred 3:2 aspect ratio, neutral background and modest padding. Fit the original image with `object-fit: contain`; never stretch it. The console images are approximately 1.46:1, and website viewport images are approximately 1.46:1, so 3:2 leaves little unused space. Fleet dimensions must be read from the files before setting intrinsic sizes.

If the complete application screen becomes illegible, use an explicitly selected detail crop. Preserve enough surrounding labels to explain the feature. Keep the original available on the project page.

Keep slide dimensions stable when moving between projects. Reserve space for captions and links, and use the tallest required caption to establish a shared minimum height. A screenshot must not force the homepage out of its intended desktop composition. On short desktop windows, reduce decorative space and permit normal page scrolling before compressing the preview into an unusable thumbnail.

Mobile: move previous/next controls below the image, beside the pagination. The existing 48px columns remove 96px from an already narrow window. Use the full available card width for the image, with roughly 12px internal padding. Preserve natural document scrolling.

Use a genuine mobile Fleet screen as a portrait detail within a bounded media area. Do not shrink a very tall full-page screenshot to fit its entire height. Crop a meaningful viewport and provide the complete image on the Work page. Website mobile crops remain crops of a desktop capture until a genuine mobile capture exists; never label them as mobile UI.

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
| Fleet platform | Development project | Dispatch, job intake and technician workflows, shown with sample data |
| Plumbing Track website | Client website | Technical explanation, project references and assessment intake |

Each card needs one preview, one descriptive sentence, a clear project type and “View project”. Keep the console and website separate even though they share a client. Their requirements and delivered work differ.

Use a single column on phones; use a roomy grid or stacked image/text rows on larger screens. Avoid putting every screenshot or full case study onto the index. Normal scrolling is appropriate for this page.

## 5. Project page structure

Proposed routes are new implementation work; they do not exist in the reviewed main branch.

Each page should include:

1. “Back to Work”, project name, type/status and a short account of what was built.
2. A strong opening screenshot with a factual caption.
3. The working context: who uses the system and what they need to accomplish.
4. Two to four focused sections pairing a requirement with its relevant screenshot.
5. Scope and decisions: what Sean built and why the workflow required those choices.
6. Current state and supported results. Describe delivered capabilities; use measured outcomes only when evidence exists.
7. A compact technical note, related project where useful, and a contact link.

Allow long project pages to scroll. Scope the current desktop viewport-fitting styles so they cannot clip galleries or force compressed text. Use prose beside or above images, with a comfortable reading width around 60–70 characters. Alternate layouts only when they improve comprehension.

### Plumbing Track console

Suggested opening: “A scheduling console built around real job-site work.”

Use `wall-measurements.jpg` for the feature that distinguishes this system from a generic CRM. Explain the relationship between room details, wall measurements, cut information and paint references.

Use `room-progress.jpg` beside a section about reviewing rooms and their attached documentation. Explain the visible progress and counts without inventing reporting or automation behavior.

Retain supported scheduling descriptions from WORK_CASE_STUDIES.md, but distinguish code-supported scheduling capabilities from the room features actually shown. Additional calendar imagery is a capture task, not an existing deliverable. The approved console images exclude identifying context; do not recover or reintroduce that context in crops, captions or metadata.

End with a related link to the public website case: the same business required both internal operations software and a public explanation of its method.

### Fleet platform

Suggested opening: “Connecting dispatch with the work in the field.”

Clearly state that screenshots show a running Rails development application with synthetic fixtures. Confirm the current scope and Sean’s role from source before final publication.

| Story section | Source images | Editorial purpose |
| --- | --- | --- |
| Intake and coordination | `1600_intake.png`, `1280_dispatch.png` | Show intake and dispatch views; verify any claimed transition between them |
| Information around the job | `1600_customers.png`, `430_technician_work_order.png` | Explain the office and field perspectives |
| Progress and exceptions | `430_technician_progress.png`, `430_technician_blocker.png` | Show saved visit progress and a reported blocker/follow-up |
| Closure | `1280_wq009_closure.png` | Explain the visible closure workflow without implying unsupported billing behavior |

Choose about four images for the main narrative; keep additional captures optional. Place related mobile screens side by side on desktop and stack them on phones. Avoid a tall collage that reduces each screen to unreadable text.

Do not present the disabled Map control or unfinished navigation as delivered features. A sequence of screenshots supports an illustrated walkthrough; label any future interactive reconstruction separately as a demo.

### Plumbing Track website

Suggested opening: “Explaining a specialized trade to the people buying it.”

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
4. Replace the Work placeholder with the index and add the three explicit detail routes.
5. Reuse existing verified case-study copy and pair screenshots with the requirements they demonstrate.
6. Check responsive behavior, image quality, navigation and factual wording before merging.

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
