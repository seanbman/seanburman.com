import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

type CaseStudy = {
  client: string
  category: string
  title: string
  summary: string
  challenge: string
  work: string[]
  stack: string[]
  result: string
  website?: string
  screenshots?: { src: string; alt: string; caption: string; width: number; height: number }[]
}

const caseStudies: CaseStudy[] = [
  {
    client: 'PLUMBING TRACK',
    category: 'OPERATIONS SOFTWARE',
    title: 'A scheduling console built around real job-site work.',
    summary: 'A custom operations application for organizing occupied-building repipe projects, from building-level planning to individual suites and work stages.',
    challenge: 'A multifamily repipe moves through overlapping trades, occupied suites, scheduled visits, and inspections. A conventional calendar does not represent the dependencies between those pieces of work.',
    work: [
      'Job and suite records with stage-by-stage progress tracking',
      'Multi-stage scheduling with working-day rules and cascading changes',
      'Room measurements, checklists, notes, and photo documentation',
      'Shared calendar views with access suited to different audiences'
    ],
    stack: ['Go', 'Echo', 'TypeScript', 'MongoDB', 'Scheduling engine'],
    result: 'A purpose-built workflow console connecting project schedules, suite information, and field documentation in one application.',
    screenshots: [
      {
        src: '/work/plumbing-track/wall-measurements.jpg',
        alt: 'Room editor with wall lengths, paint codes, left and right cut diagrams, cap sizes, and angles.',
        caption: 'Wall measurements, cut types, and paint references recorded together for the job.',
        width: 1094,
        height: 747
      },
      {
        src: '/work/plumbing-track/room-progress.jpg',
        alt: 'Room list showing progress, wall counts, and photo counts for each room.',
        caption: 'Room-by-room progress with the measurements and documentation attached to each space.',
        width: 1094,
        height: 751
      }
    ]
  },
  {
    client: 'PLUMBING TRACK',
    category: 'WEBSITE & CONTENT SYSTEMS',
    title: 'Explaining a specialized trade to the people buying it.',
    summary: 'A public-facing website for a multifamily repiping contractor, designed to explain a technical installation method and help property managers evaluate real project work.',
    challenge: 'Visitors need to understand an unfamiliar repiping approach, compare installation methods, and find relevant project references before they are ready to make an inquiry.',
    work: [
      'Content architecture for the installation process, technology, and common pipe problems',
      'Project portfolio pages with installation photographs and reference information',
      'Responsive navigation and layouts for desktop and mobile',
      'Structured building-assessment intake and inquiry pathways'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'Content architecture'],
    result: 'A live website that brings technical explanations, completed-project references, and project inquiries together.',
    website: 'https://www.plumbingtrack.com/'
  }
]

export default function Work() {
  return <div className="container subpage work-page">
    <header className="page-intro">
      <p className="eyebrow">SELECTED WORK</p>
      <h1>WORK.</h1>
      <p>Real projects with specific requirements, practical constraints, and software built to address them.</p>
    </header>
    <section className="work-studies" aria-label="Project case studies">
      {caseStudies.map((study) => <article className="neo-card work-study" key={study.title}>
        <div className="work-study__heading">
          <div>
            <p className="work-study__category">{study.category}</p>
            <p className="work-study__client">{study.client}</p>
          </div>
          <h2>{study.title}</h2>
          <p className="work-study__summary">{study.summary}</p>
        </div>
        <div className="work-study__body">
          <div className="work-study__problem">
            <h3>THE CHALLENGE</h3>
            <p>{study.challenge}</p>
            <h3>THE RESULT</h3>
            <p>{study.result}</p>
          </div>
          <div className="work-study__delivery">
            <h3>WHAT I BUILT</h3>
            <ul>{study.work.map(item => <li key={item}>{item}</li>)}</ul>
            <h3>TECHNOLOGY & METHODS</h3>
            <div className="work-study__tags">{study.stack.map(item => <span key={item}>{item}</span>)}</div>
            {study.website && <a className="work-study__external" href={study.website} target="_blank" rel="noopener noreferrer">VISIT WEBSITE <ArrowIcon direction="up-right" /></a>}
          </div>
        </div>
        {study.screenshots && <section className="work-study__screenshots" aria-label="Inside the operations console">
          <div className="work-study__screenshots-heading">
            <h3>INSIDE THE CONSOLE</h3>
            <p>Captured from the working application. Identifying details are excluded.</p>
          </div>
          <div className="work-study__gallery">
            {study.screenshots.map(screenshot => <figure key={screenshot.src}>
              <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={'View full screenshot: ' + screenshot.alt}>
                <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading="lazy" />
              </a>
              <figcaption>{screenshot.caption}</figcaption>
            </figure>)}
          </div>
        </section>}
      </article>)}
    </section>
    <div className="page-cta">
      <div><h2>HAVE A PROJECT IN MIND?</h2><p>Let's talk about what needs to work better.</p></div>
      <Link className="button button--orange" to="/contact">START A PROJECT <ArrowIcon direction="up-right" /></Link>
    </div>
  </div>
}
