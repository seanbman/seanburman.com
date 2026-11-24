# Website copy and section placement

Draft for seanburman.com. Reviewed November 20, 2026.
This is a writing and placement plan. The Work index, project routes, homepage previews, Services topics, and Process sections are implemented separately; shorter Home, About, and Contact copy remains planned work.

[Previous: Documentation index](CONTENT_INDEX.md) | [Next: Screenshot and layout plan](SHOWCASE_AND_WORK_PLAN.md) | [Project evidence](WORK_CASE_STUDIES.md)

## Sections

1. [Writing rules](#writing-rules)
2. [Where everything goes](#where-everything-goes)
3. [Homepage](#homepage)
4. [Work index](#work-index)
5. [Fleet dispatch page](#fleet-dispatch-page)
6. [Plumbing Track console page](#plumbing-track-console-page)
7. [Plumbing Track website page](#plumbing-track-website-page)
8. [Services and general contracting](#services-and-general-contracting)
9. [Process, development and delivery](#process-development-and-delivery)
10. [About and contact](#about-and-contact)
11. [Implementation and review](#implementation-and-review)

## Writing rules

Use the project names, link labels and page roles in [the documentation index](CONTENT_INDEX.md#portfolio-direction). This document owns the draft wording. The screenshot plan owns layout and image treatment. Project evidence notes determine which factual claims can be published.


Write for a business owner who knows their trade and may have little interest in software. Explain what a person can do and why it helps. Keep paragraphs short. Use first person for Sean's service and plain descriptions for the projects.

Avoid terms such as capabilities, observability, orchestration, ecosystem, digital transformation and end-to-end solutions in public copy. Replace them with the actual work being discussed. For example, say “See which deliveries are still outstanding” rather than “Improve operational visibility”.

When the idea of capabilities matters, explain it as “what your team could do with better tools”. Show the connection: a receipt attached to a job can be found later; a recorded delay gives the office something specific to follow up on.

Use normal numbering beginning at 1 whenever numbering helps. Never add a leading zero. Do not use em dashes. Avoid slogans that sound impressive but explain little.

Keep these distinctions clear:

- Plumbing Track console and website are client work supported by existing project notes.
- Fleet is a working development demo with sample data.
- General contracting sections describe services Sean can build. They are not a claim that every feature already exists in Fleet or the contractor project.
- Development speed depends on the work. Do not promise a fixed delivery time without an agreed scope.
- Describe what the software supports. Do not claim measured savings, sales growth or fewer mistakes without evidence.

All text under “Draft copy” is intended for visitors. Placement, image and implementation notes are for the person building the site.

## Where everything goes

| Page | Position | Content | File |
| --- | --- | --- | --- |
| Home | Opening text beside the demo window | What Sean does and a clear first step | src/pages/Home.tsx |
| Home | Inside each showcase slide | One concrete example and a project link | src/components/Showcase.tsx |
| Home | Existing About summary | Short introduction to Sean's approach | src/pages/Home.tsx |
| Work | Intro and three cards | Console, Fleet demo and public website | src/pages/Work.tsx |
| Fleet project | Opening, then evidence-bound sections | Request, customer details, field updates and closure | src/pages/work/ProjectPage.tsx + projects.ts |
| Console project | Opening, then evidence-bound sections | Work structure, scheduling, room details, progress and records | src/pages/work/ProjectPage.tsx + projects.ts |
| Website project | Opening, then evidence-bound sections | Service explanation, method, previous work and assessment | src/pages/work/ProjectPage.tsx + projects.ts |
| Services | Existing three service cards | Custom systems, integrations and operations tools | src/pages/Services.tsx |
| Services | After service cards, before contact prompt | General contracting introduction and six supporting sections | src/pages/Services.tsx |
| Process | Existing introduction and four stages, then supporting sections | How the work moves from discussion to delivery | src/pages/Process.tsx |
| About | Opening and approach text | One person following the work through | src/pages/About.tsx |
| Contact | Beside the form | An approachable invitation and what to include | src/pages/Contact.tsx |

Implemented project routes are /work/fleet-platform, /work/plumbing-track-console and /work/plumbing-track-website. Shared rendering and typed project data live in `src/pages/work/ProjectPage.tsx` and `src/pages/work/projects.ts`.

## Homepage

### Opening

Placement: replace the current main heading and its paragraph with the draft below. Use sentence case and natural line breaks rather than a manually stacked headline.

Draft copy:

**Software built around your business.**

I build practical software around the way your business works, and the places where it could work better.

That could mean keeping job details together, making schedule changes easier, or connecting tools that currently need the same information entered twice.

Button: **Start a project**, linking to /contact.

Keep this opening short. Do not place the detailed contracting sections or full process explanation in the hero.

### Demo window

Placement: within the three slides specified in SHOWCASE_AND_WORK_PLAN.md. Keep one sentence and one project link per slide.

| Project label | Heading | Caption | Link |
| --- | --- | --- | --- |
| Plumbing Track console | Job details, down to the room. | Save wall measurements, cut details, and paint colours for each room. | View Plumbing Track |
| Fleet dispatch demo | From the schedule to the job. | See how dispatch, customer records, and updates from the field fit together. | Try Fleet Dispatch |
| Plumbing Track website | Explain the service. Show the work. | Building owners can learn how repiping works, see past projects, and request a building assessment. | View website project |

Do not add a separate “Development demo · Sample data” badge to the Fleet slide. The heading and caption are sufficient at the homepage level; keep the development-demo and sample-data context on the project page.

The homepage Fleet CTA opens the working demo at `https://apps.seanburman.com/fleet`; the portfolio case study remains available at `/work/fleet-platform`.

### Existing About summary

Placement: replace the paragraph inside the current About panel. Keep its heading and link to /about.

Draft copy:

I work with you from the first conversation through to delivery. We look at what is taking time, choose a useful place to start and build something your team can try.

Button: **About Sean**, linking to /about. Put the separate **How I work** link on project pages and in the closing Services section, linking to /process.

## Work index

Placement: replace the current Work introduction and move its two full case studies into separate project pages. Add a three-card index here, including Fleet. Keep full explanations on the individual pages.

Draft introduction:

**Work.**

A closer look at the software and websites I build, the work they support and the choices behind them.

| Card | Draft description |
| --- | --- |
| Plumbing Track console | A custom application for planning repipe work and keeping suite, room and installation details together. |
| Fleet dispatch demo | A development project exploring how requests, schedules and technician updates can connect around a job. |
| Plumbing Track website | A website helping property managers understand the repiping method, review projects and request an assessment. |

Do not add separate type labels to the Work cards. Use the project title and description, and do not describe the Fleet demo as a commissioned client deployment.

## Fleet dispatch page

### Opening

Placement: beneath the project title, before the first screenshot.

Draft copy:

**From the first request to the finished visit.**

The Fleet dispatch demo brings customer information, incoming work, scheduling and technician updates into one application.

It shows how the office and the person doing the job can use the same system with views suited to their work. The office can plan the day. A technician can open the job on a phone, record progress and report something that needs attention.

Keep the development-demo and sample-data caveat in the opening copy rather than as a separate status badge.

Opening image: 1600_dispatch.png from public/work/fleet-platform/.

### Give incoming work a place to go

Placement: first supporting section after the opening image. Pair with 1600_intake.png.

Draft copy:

A request is easier to follow up on when it has a record of its own. The intake view gives the office a place to review incoming work.

The office can look through the requests while deciding what needs attention. The scheduling view provides a separate place to plan visits.

Caption: **Incoming requests in the intake view.**

Implementation note: verify any specific conversion or assignment action before describing it. An intake screenshot alone does not prove that a request automatically becomes a scheduled job.

### Keep customer details close to the job

Placement: second supporting section. Pair with 1600_customers.png, with an optional link to the mobile customer image.

Draft copy:

Customer information is part of the work. A directory gives the office a place to find customer records while organizing requests and visits.

Customer views are available on desktop and phone, so the directory can be opened at a desk or while someone is away from the office.

Caption: **Customer records shown with sample information.**

Implementation note: do not promise a complete customer history, accounting sync or duplicate detection without checking those features.

### Plan at the desk, check on the phone

Placement: third section. Use the opening dispatch image as the main illustration rather than repeating it at full size. Add 430_schedule_modal.png only if the scheduling action needs a closer view.

Draft copy:

The dispatch view supports the office's planning work. The phone views make the same application available when someone is away from a desk.

Planning several visits needs room to compare information. Checking a job on a phone needs a focused view of the details. The desktop dispatch view and phone layouts support those different tasks.

Caption: **Desktop dispatch and a phone scheduling view.**

Implementation note: avoid route optimization, live vehicle tracking and map claims. The capture notes identify the Map control as unfinished.

### Make field updates straightforward

Placement: fourth section. Put 430_technician_work_order.png beside 430_technician_progress.png on wide screens; stack on phones.

Draft copy:

A technician needs the job details in front of them and a quick way to record what happened. The mobile work-order view keeps the visit accessible on a phone.

Progress can be saved during the visit. The technician can record an update while the work is still fresh.

Caption: **A mobile work order and saved visit progress.**

### Record what is holding up the work

Placement: fifth section, following field updates. Use 430_technician_blocker.png. Show 1280_wq009_closure.png below it only if space allows.

Draft copy:

A visit does not always go to plan. Something may need another person's attention before work can continue.

A technician can report what is holding up the visit and record follow-up information. The demo also includes a view for closing a work order, keeping completed visits and unfinished work part of the record.

Caption: **A reported problem with follow-up information.**

Closing paragraph:

The demo brings together office planning and updates from the field. A version for a particular business would use its own job types, staff responsibilities and scheduling rules.

Link: **Start a conversation**, to /contact.

## Plumbing Track console page

### Opening

Placement: before the first screenshot.

Draft copy:

**Built around the details of repipe work.**

An occupied-building repipe involves buildings, suites, rooms and several stages of work. Plumbing Track's console brings those details into an application built around its installation process.

The work includes stage-based scheduling, suite and room records, checklists, notes and photo documentation. It also includes tools for recording wall measurements, cut details and paint references.

Opening image: public/work/plumbing-track/wall-measurements.jpg.

### Keep the job's structure intact

Placement: first supporting section, directly after the opening.

Draft copy:

Repipe work is organized by building, suite and room. Measurements and installation details need to stay connected to the right location.

The console keeps that structure in the records. Information can stay attached to the part of the job it describes, giving someone a clear place to look when they return to it.

Presentation: use a short text section. No new diagram or screenshot is required.

### Schedule the stages of the work

Placement: second section, before the room detail sections.

Draft copy:

Repipe work moves through several stages. Those stages have their own timing and depend on the work around them.

The scheduling system supports working-day rules and changes that carry through to later stages. This allows the schedule to reflect the sequence of the installation work.

Presentation: pair this section with `public/work/plumbing-track/stage-schedule.png`. The capture shows the stage calendar, working dates, and unit groups without the project header or identifying customer context.

### Put measurements where they belong

Placement: third section. Use the wall-measurements image or a readable detail crop of the same approved capture.

Draft copy:

Wall lengths, cut details, cap sizes, angles and paint references are recorded together in the room editor.

These details are specific to the work Plumbing Track does. Keeping them with the room gives them a clear context and makes them available when that information is needed again.

Caption: **Wall measurements, cut details and paint references in the room editor.**

### Review progress room by room

Placement: fourth section. Pair with public/work/plumbing-track/room-progress.jpg.

Draft copy:

A room list gives a different view of the job. It shows progress along with the number of walls and photos recorded for each room.

That lets someone review the room records before opening the individual details. The overview and the detailed editor serve different parts of the same task.

Caption: **Room progress with wall and photo counts.**

### Keep supporting records with the work

Placement: fifth section, below the room progress image.

Draft copy:

Checklists, notes and photo documentation give the team places to record information as the job develops.

The aim is to keep useful records connected to the work they describe. Photos can be retained where they help explain a particular condition or piece of work.

Closing paragraph:

The console brings scheduling and installation records into a system built for Plumbing Track's process. Its room tools show the level of detail that can be included when the application is designed around a particular trade.

Related link: **See the Plumbing Track website project**, to /work/plumbing-track-website.

## Plumbing Track website page

### Opening

Draft copy:

**Helping people understand a specialized service.**

Plumbing Track's public website helps property managers understand its repiping approach, review previous projects and begin a building assessment.

The website and the operations console serve different people. One helps explain the service before an inquiry. The other supports the work behind it.

Placement: opening text followed by public/work/plumbing-track-website/home.jpg.

### Explain the method in plain terms

Draft copy:

A visitor may know there is a pipe problem without knowing how a repipe is carried out. The website organizes explanations of the installation process, the technology and common pipe issues.

The content gives readers a way to learn about the service in stages and find the subjects relevant to their building.

Placement: first supporting section, paired with how-it-works.jpg. Use technology.jpg as an optional second image.

### Give previous work a clear place

Draft copy:

Project references help visitors understand the kind of buildings and installation work involved. The portfolio brings those references and photographs together.

Visitors can look through previous projects while considering the service for their own building.

Placement: second supporting section, paired with project-portfolio.jpg.

### Make the next step easy to find

Draft copy:

Once someone is ready to ask about a building, the assessment page provides a clear next step.

The form asks for building information so a visitor can make an inquiry after reading about the service.

Placement: third supporting section, paired with assessment-form.jpg.

### Connect the public website with the wider business

Draft copy:

A website can be part of how a business handles incoming work. In this project, the public pages explain the service and provide an assessment inquiry path.

Further connections, such as sending inquiries into an internal job system, can be considered when the business needs them.

Placement: final text section. Treat the second paragraph as a possible future service, not a claim that an integration exists.

Links: **Visit Plumbing Track** to https://www.plumbingtrack.com/ and **See the operations console** to /work/plumbing-track-console.

## Services and general contracting

### Page introduction and service cards

Placement: replace the current Services introduction and card descriptions, retaining the three-card layout.

Draft introduction:

**Practical software for the work you do.**

I build tools for the parts of your business that need a better way to work. That can be a small job-tracking tool, a connection between existing services, or a larger application built in stages.

| Existing card | Replacement description |
| --- | --- |
| Custom systems | An application built around your jobs, people and working process. Start with the parts that need attention and add more as the business needs it. |
| Integrations | Connect the tools you already use so information can move between them. We look at what each service allows and where a connection would save repeated work. |
| Operations tools | Give everyday tasks a clear place: schedules, job records, crew hours, material requests or the information someone needs before starting work. |

### Contracting introduction

Placement: new section after the service cards, before the existing contact prompt. Anchor: /services#contracting.

Draft copy:

**Keep the moving parts of a job together.**

Contracting work involves crews, customers, materials, deliveries and other trades. A change in one place can affect the rest of the day.

I can build tools that give those details a shared place. We start with how your team already works and choose the parts where a practical change would help.

Use the following six sections beneath this introduction. Present them as examples of services available, not a list of completed features in a named application.

### Know what the job is waiting on

Placement: first contracting section.

Draft copy:

Materials can arrive on a truck, come from a supplier or be picked up on the way to the site. The team needs to know what is expected, what has arrived and what is still missing.

A material record can keep the item, quantity, supplier, expected delivery and current status with the job. When a delivery changes, there is a place to record the update and identify the work affected.

Start with a simple list the supervisor can update from a phone. Stock levels, purchasing approvals or supplier connections can be added if they become useful.

Supporting example: a roofing delivery is delayed. The supervisor records the new expected date and the work waiting on it. The office can review that information before planning the next visit.

Implementation note: write the example as an illustration. Do not name a real client or describe it as a documented result.

### Keep purchases attached to the job

Placement: second contracting section.

Draft copy:

A small supply run still creates information someone needs later: what was bought, who bought it, which job it belongs to and where the receipt went.

A phone form can collect the purchase details and a receipt photo together. The office can then review purchases by job and follow up when something is missing.

Approval and accounting steps can be added around the business's purchasing process.

Supporting example: a supervisor picks up fasteners and sealant, attaches the receipt and selects the job before leaving the store.

Implementation note: receipt capture is a service example. Automatic receipt reading, bank feeds and accounting exports need separate scoping.

### Make crew hours easier to collect

Placement: third contracting section. Keep it equal in weight to the others.

Draft copy:

Paper hours can work until someone has to collect, read and total them. Missing dates or unclear job names can create another round of questions.

A simple hours tool can let a supervisor record the crew's time against a job, review the week and send it to the office in a consistent format. Corrections can be recorded so there is a clear account of what changed.

The entry form can use the details the office needs for review, without making the supervisor repeat the same information for each crew member.

Supporting example: a supervisor enters the crew's hours at the end of the day and reviews them before the pay-period cutoff.

Implementation note: do not call an hours record a complete payroll system. Payroll rules, overtime calculations and external payroll connections require their own agreed scope.

### Keep customer and job history together

Placement: fourth contracting section.

Draft copy:

A customer may have several properties, several jobs and different people to contact for each one. Job information becomes harder to find when those details are spread across separate messages and files.

A shared record can keep the customer, site, contacts, active work and previous job notes connected. Someone opening a job can find the information that belongs to that visit.

The record should fit the work. A contractor might need site access instructions, a site contact, a material list and a record of previous repairs.

Supporting example: before returning to a property, a supervisor checks the site notes and previous work without asking someone to resend them.

Link beneath this section: **See customer and job views in the Fleet demo**, to /work/fleet-platform. Link wording must not imply every service example is implemented there.

### Coordinate changes before they disrupt the day

Placement: fifth contracting section.

Draft copy:

A crew's schedule depends on more than its own availability. Site access, crane bookings, material deliveries and other trades can all affect when work can happen.

A coordination tool can record those conditions with the job and make changes available to the people planning the work. The team can see what needs to be confirmed before committing to a visit.

We can start with shared updates and a clear status. Notifications or checks for conflicting bookings can follow if the working process calls for them.

Supporting example: another contractor needs the work area on the planned day. The restriction is recorded against the job so the next schedule review includes it.

Implementation note: automatic rescheduling is a separate requirement. Do not imply that recording a restriction automatically resolves every conflict.

### Leave a clear record for the next person

Placement: sixth contracting section.

Draft copy:

At the end of a visit, a short update can answer the questions that otherwise arrive later. What was completed? What is still open? What needs to happen before someone returns?

A job update can keep those notes, relevant photos and follow-up items together. The person returning to the site has a place to begin, and the office has information to use when speaking with the customer.

Keep the update short enough to complete during the day, asking for the information someone will use on the next visit.

Supporting example: a crew records the area completed and a missing item needed for the next visit. A photo is attached if it helps explain the situation.

### Find the next useful improvement

Placement: closing section after the contracting examples, immediately before the contact prompt.

Draft copy:

You do not need a complete software plan to begin. We can start with something that takes too much time, gets entered twice or regularly needs a follow-up call.

Once that part works better, we can look at what else becomes possible. A material request could connect to a delivery record. A job update could help prepare the next visit. A receipt could stay with the job it belongs to.

This is how the software can grow with the business: add something useful, try it with the team and decide what is worth doing next.

Button: **Start a conversation**, linking to /contact.

Secondary text link: **How I work**, linking to /process.

## Process, development and delivery

### Opening

Placement: replace the introduction beneath THE PROCESS.

Draft copy:

**From an idea to something your team can use.**

You can start with a problem, a rough idea or a task that keeps taking longer than it should. I help turn that into a clear first version, build it with you and prepare it for use.

### Existing four stage cards

Retain the four current cards, with these descriptions:

| Stage | Draft copy |
| --- | --- |
| 1. Discover | We talk through the work, look at the tools and records you use, and identify a useful place to start. |
| 2. Plan | We agree on the first version, what it needs to do and what can wait. You have a clear scope to review before the build begins. |
| 3. Build | I develop the software in stages so you can try it and give feedback while changes are still easy to make. |
| 4. Deliver | We check the agreed work, prepare it for use and walk through how to run it. Any ongoing support is agreed as part of the handoff. |

### Start with the work as it happens

Placement: first supporting section below the stage cards.

Draft copy:

A real example is a good starting point. Show me how a job is booked, where hours are written down or what happens when a delivery is late.

We look at who needs the information, where it comes from and what happens next. That helps us choose a useful change and avoid adding steps that make the work harder.

You do not need to know the technical answer. Your knowledge of the business is what helps shape the tool.

### Agree on a useful first version

Placement: second supporting section.

Draft copy:

The first version should do a clear piece of work. We choose the people who will use it, the tasks it needs to support and how we will tell whether those tasks work as agreed.

For example, a crew-hours tool might begin with entry, review and a simple export. Payroll integration can wait until the basic process has been tried.

A clear boundary helps keep the work manageable and gives you something specific to review.

### Try working software early

Placement: third supporting section. This is the main rapid-development write-up.

Draft copy:

A working screen is easier to discuss than a long description. You can try entering a job, checking a schedule or recording an update and point out what does not fit.

I build in focused stages and reuse common foundations where they suit the project. That leaves more time for the details that make the tool useful to your business.

The pace depends on the size of the work, any outside services involved and how quickly we can review decisions together. We agree on a realistic first milestone once the scope is clear.

Link: **See the Fleet dispatch demo**, to /work/fleet-platform. Do not attach an unverified build duration to it.

### Check the work your team will rely on

Placement: fourth supporting section.

Draft copy:

Before delivery, we check the tasks we agreed the software should handle. That includes ordinary use and the changes people need to make when something is entered incorrectly or a plan changes.

A phone tool needs to work at the size people will use it. A shared system needs to give the right people access. A connection to another service needs a clear way to handle a failed request.

The checks should match the project and the work people will depend on.

### Prepare it for use

Placement: fifth supporting section.

Draft copy:

Delivery includes the practical steps needed to use the software. Depending on the project, that can include hosting, account setup, moving existing records, connecting services and showing the team how it works.

We agree on these responsibilities in the scope, including any ongoing service costs. You should know what is being delivered and what you need to operate it.

Implementation note: these are items to agree per project. Do not promise data migration, training or hosting as free additions to every build.

### Keep improving it with real feedback

Placement: sixth supporting section, before the closing contact prompt.

Draft copy:

Trying the software during real work can reveal details that are hard to see in advance. A field may need a different label. A useful view may be missing. A repeated step may be ready for automation.

We can review those findings and decide what to change next. Small refinements and larger additions can be planned separately, with support arrangements agreed clearly.

Closing prompt:

**Have a task that could work better?**

Tell me how you handle it now and where it gets difficult.

Button: **Start a conversation**, linking to /contact.

## About and contact

### About

Placement: opening description on /about, followed by verified background already present on the page.

Draft copy:

**One person to work through it with you.**

I am Sean Burman, a software developer building practical tools for businesses. I work through the whole project, from understanding the problem and designing the screens to development, testing and delivery.

That gives you someone who knows why a feature was requested as well as how it was built. We can discuss the work in everyday terms and make technical decisions around what the business needs.

Keep technical background below this introduction. Do not add years of experience, employment dates or project outcomes without checking their current accuracy.

### Contact

Placement: beside the contact form. Keep the form itself short.

Draft copy:

**Tell me what needs to work better.**

You do not need a technical brief. Tell me what your business does, how you handle the task now and where it becomes difficult.

If you already have a clear idea, share that too. We can talk through a practical starting point.

Suggested project field label: **What would you like help with?**

Optional helper text: **A few sentences about the task or problem is enough to start.**

## Implementation and review

### Build order

1. Add the Work routes and project pages, then use the project copy above. **Implemented.**
2. Fill the three homepage slides and link them to those pages. **Implemented.**
3. Update Services and add the general contracting sections. **Implemented.**
4. Expand Process beneath its existing stage cards. **Implemented.**
5. Update the short Home, About and Contact passages. **Next.**
6. Review the whole site together for repeated copy and claims that need checking.

The homepage introduces the work. Project pages explain actual examples. Services describes what Sean can build. Process explains what working together involves. Use the combined build sequence in [the layout plan](SHOWCASE_AND_WORK_PLAN.md#7-delivery-sequence) when planning implementation.

### Reading and layout

Keep all six contracting examples and the detailed process text available in the page plan. Use quiet sections with short headings, reading-width paragraphs and light separators. These sections should feel like a clear explanation, not a grid of advertisements. Keep Services as a short continuous page; use a small contents list only on the longer Process page so readers can go straight to a topic. Do not add a contact button to every supporting section.

Use four primary screenshot groups on Fleet: dispatch, intake with customer records, mobile work order with progress, and a reported problem with closure. The five supporting text sections remain in order. A section may refer to the opening image without repeating it.


Use a short heading and two or three paragraphs for most supporting sections. Keep examples in small “For example” callouts where they help. Do not present a dense wall of feature cards or hide all the useful explanation in accordions.

Let Services, Process and project pages scroll. Keep the current compact homepage composition where it remains readable. Do not shrink text or clip content to preserve a fixed desktop height.

Place a screenshot with the section it explains. Technical notes and evidence checks belong in documentation, not in the visitor's reading flow. Fleet's development status remains visible because it tells visitors what they are looking at.

### Editorial checks

- Read every sentence as if explaining the work to a business owner in person.
- Replace vague benefits with a task, record or action the reader recognizes.
- Remove em dashes and leading-zero section numbers.
- Keep draft service examples distinct from delivered project features.
- Do not add invented results, testimonials or fixed delivery promises.
- Check that each button says where it leads.
- Use the evidence notes and capture README files when reviewing project claims.
- Run the existing build and relevant navigation checks when implementing the UI. This change is documentation only.

### Related documents

- [Documentation index](CONTENT_INDEX.md)
- [Screenshot and layout plan](SHOWCASE_AND_WORK_PLAN.md)
- [Project evidence and publication notes](WORK_CASE_STUDIES.md)
