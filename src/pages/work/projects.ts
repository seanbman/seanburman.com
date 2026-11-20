export type ProjectImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type ProjectSection = {
  heading: string
  paragraphs: string[]
  images?: ProjectImage[]
}

export type Project = {
  slug: string
  client: string
  kind: string
  statusLabel?: string
  title: string
  summary: string
  cardDescription: string
  preview: ProjectImage
  context: string
  result: string
  tags: string[]
  sections: ProjectSection[]
  website?: string
  relatedSlug?: string
}

const image = (src: string, alt: string, caption: string, width: number, height: number): ProjectImage => ({src, alt, caption, width, height})

const plumbingConsoleWall = image(
  '/work/plumbing-track/wall-measurements.jpg',
  'Room editor with wall lengths, paint codes, cut diagrams, cap sizes, and angles.',
  'Wall measurements, cut types, and paint references recorded together for the job.',
  1094,
  747,
)
const plumbingConsoleProgress = image(
  '/work/plumbing-track/room-progress.jpg',
  'Room list showing progress, wall counts, and photo counts for each room.',
  'Room-by-room progress with measurements and documentation attached to each space.',
  1094,
  751,
)

export const projects: Project[] = [
  {
    slug: 'plumbing-track-console',
    client: 'PLUMBING TRACK',
    kind: 'Client operations software',
    title: 'Built around the details of repipe work.',
    summary: 'A custom operations application for organizing occupied-building repipe projects, from building-level planning to individual suites and work stages.',
    cardDescription: 'A custom application for planning repipe work and keeping suite, room, and installation details together.',
    preview: plumbingConsoleWall,
    context: 'A multifamily repipe moves through overlapping trades, occupied suites, scheduled visits, and inspections. The system needs to keep that structure visible instead of reducing the work to a generic calendar.',
    result: 'A purpose-built workflow console connecting project schedules, suite information, and field documentation in one application.',
    tags: ['Go', 'Echo', 'TypeScript', 'MongoDB', 'Scheduling engine'],
    sections: [
      {
        heading: 'Keep the job’s structure intact',
        paragraphs: [
          'Repipe work is organized by building, suite, and room. Measurements and installation details need to stay connected to the right location.',
          'The console keeps that structure in the records, giving someone a clear place to look when they return to a particular part of the job.',
        ],
      },
      {
        heading: 'Put measurements where they belong',
        paragraphs: [
          'Room tools record the details that affect installation work, including wall measurements, cut information, paint references, cap sizes, and angles.',
          'These details are kept with the room rather than separated into notes that are difficult to find later.',
        ],
        images: [plumbingConsoleWall],
      },
      {
        heading: 'Review progress room by room',
        paragraphs: [
          'Progress views provide a way to review rooms alongside the wall and photo counts connected to them.',
          'The visible records show what has been documented without implying reporting or automation that is not established by the captured interface.',
        ],
        images: [plumbingConsoleProgress],
      },
      {
        heading: 'Schedule the stages of the work',
        paragraphs: [
          'The scheduling system supports working-day rules and changes that carry through to later stages, allowing the schedule to reflect the sequence of the installation work.',
          'The broader calendar and workflow behavior remains subject to the project evidence recorded in the source application.',
        ],
      },
    ],
    relatedSlug: 'plumbing-track-website',
  },
  {
    slug: 'fleet-platform',
    client: 'FLEET',
    kind: 'Development demo',
    statusLabel: 'Development demo · Sample data',
    title: 'From the first request to the finished visit.',
    summary: 'A working Rails development application exploring how requests, customer records, schedules, and technician updates can connect around a job.',
    cardDescription: 'A development project showing dispatch, job intake, customer records, and updates from the field using sample data.',
    preview: image('/work/fleet-platform/1600_dispatch.png', 'Fleet dispatch schedule showing visits arranged across the day.', 'Desktop dispatch and schedule view from the development demo.', 1600, 900),
    context: 'The captures come from a running Rails development application with synthetic records. They illustrate an operational workflow, not a production deployment or a commissioned client system.',
    result: 'A working development demo that brings intake, dispatch, customer information, field updates, and work-order closure into one illustrated workflow.',
    tags: ['Rails', 'Ruby', 'SQLite', 'Server-rendered UI', 'Sample data'],
    sections: [
      {
        heading: 'Give incoming work a place to go',
        paragraphs: [
          'Requests can be reviewed alongside the information needed to decide what should receive attention. The dispatch view provides a separate place to plan visits.',
          'The screenshots support an illustrated walkthrough; they do not prove that every transition between intake and scheduling is automatic.',
        ],
        images: [
          image('/work/fleet-platform/1600_intake.png', 'Fleet intake view showing a request and customer details.', 'An intake view for reviewing incoming work.', 1600, 900),
          image('/work/fleet-platform/1280_dispatch.png', 'Fleet dispatch view showing scheduled visits.', 'A desktop dispatch view for planning visits.', 1280, 900),
        ],
      },
      {
        heading: 'Keep customer details close to the job',
        paragraphs: [
          'The demo includes customer records and work-order views so office and field perspectives can refer to the same job information.',
          'The captures show the available screens without claiming a complete customer-history, accounting, or duplicate-detection system.',
        ],
        images: [
          image('/work/fleet-platform/1600_customers.png', 'Fleet customer directory showing customer records.', 'Customer records available to the office workflow.', 1600, 900),
          image('/work/fleet-platform/430_technician_work_order.png', 'Mobile technician work-order view showing job details.', 'A mobile work-order view for field use.', 430, 2501),
        ],
      },
      {
        heading: 'Make field updates straightforward',
        paragraphs: [
          'A technician needs the job details in front of them and a quick way to record what happened. The mobile work-order view keeps the visit accessible on a phone.',
          'Saved progress and reported problems remain part of the work record, with follow-up information available for the next person.',
        ],
        images: [
          image('/work/fleet-platform/430_technician_progress.png', 'Mobile technician view showing saved visit progress.', 'Saved visit progress from the mobile workflow.', 430, 2657),
          image('/work/fleet-platform/430_technician_blocker.png', 'Mobile technician view showing a reported problem and follow-up information.', 'A reported problem with follow-up information.', 430, 2961),
        ],
      },
      {
        heading: 'Keep closure part of the record',
        paragraphs: [
          'The demo includes a view for closing a work order, keeping completed visits and unfinished work part of the record.',
          'This does not establish billing, payroll, route optimization, live vehicle tracking, or a production deployment.',
        ],
        images: [image('/work/fleet-platform/1280_wq009_closure.png', 'Fleet work-order closure view showing the close-out record.', 'A work-order closure view from the development demo.', 1280, 900)],
      },
    ],
    relatedSlug: 'plumbing-track-console',
  },
  {
    slug: 'plumbing-track-website',
    client: 'PLUMBING TRACK',
    kind: 'Client website',
    title: 'Helping people understand a specialized service.',
    summary: 'A public-facing website for a multifamily repiping contractor, designed to explain a technical installation method and help property managers evaluate project work.',
    cardDescription: 'A website helping property managers understand the repiping method, review projects, and request an assessment.',
    preview: image('/work/plumbing-track-website/home.jpg', 'Plumbing Track website homepage introducing the repiping service.', 'The website homepage introduces the service and its audience.', 1348, 926),
    context: 'Visitors need to understand an unfamiliar repiping approach, compare installation methods, and find relevant project references before they are ready to make an inquiry.',
    result: 'A live website bringing technical explanations, completed-project references, and project inquiries together.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'Content architecture'],
    sections: [
      {
        heading: 'Explain the method in plain terms',
        paragraphs: [
          'The site gives readers a way to learn about the service in stages and find the subjects relevant to their building.',
          'Technical information is organized for property managers who need enough context to evaluate the work before making an inquiry.',
        ],
        images: [
          image('/work/plumbing-track-website/how-it-works.jpg', 'Plumbing Track website page explaining how the repiping method works.', 'A plain-language explanation of the installation method.', 1348, 926),
          image('/work/plumbing-track-website/technology.jpg', 'Plumbing Track website technology page.', 'Supporting technical information for the service.', 1348, 926),
        ],
      },
      {
        heading: 'Give previous work a clear place',
        paragraphs: [
          'Project references help visitors understand the kind of buildings and installation work involved.',
          'The portfolio gives the technical explanation a concrete companion: examples of the work described elsewhere on the site.',
        ],
        images: [image('/work/plumbing-track-website/project-portfolio.jpg', 'Plumbing Track website project portfolio page.', 'Project references that make the service concrete.', 1348, 926)],
      },
      {
        heading: 'Make the next step easy to find',
        paragraphs: [
          'Once someone is ready to ask about a building, the assessment page provides a clear next step.',
          'The form asks for building information so a visitor can make an inquiry after reading about the service.',
        ],
        images: [image('/work/plumbing-track-website/assessment-form.jpg', 'Plumbing Track website assessment form.', 'A structured assessment intake for a prospective project.', 1348, 926)],
      },
      {
        heading: 'Connect the public website with the wider business',
        paragraphs: [
          'The website and the operations console serve different people. One helps explain the service before an inquiry; the other supports the work behind it.',
          'Together they show how a business can need both a public explanation and internal software shaped around its process.',
        ],
      },
    ],
    website: 'https://www.plumbingtrack.com/',
    relatedSlug: 'plumbing-track-console',
  },
]

export function findProject(slug: string) {
  return projects.find(project => project.slug === slug)
}
