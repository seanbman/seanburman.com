import { Link } from 'react-router-dom'
import Icon, { ArrowIcon } from '../components/Icons'

const services = [
  {title: 'CUSTOM SYSTEMS', icon: 'systems' as const, description: 'An application built around your jobs, people, and working process. Start with the parts that need attention and add more as the business needs it.', examples: 'Client portals · Scheduling · Internal tools'},
  {title: 'INTEGRATIONS', icon: 'integrations' as const, description: 'Connect the tools you already use so information can move between them. We look at what each service allows and where a connection would save repeated work.', examples: 'APIs · Connected services · Automation'},
  {title: 'OPERATIONS TOOLS', icon: 'operations' as const, description: 'Give everyday tasks a clear place: schedules, job records, crew hours, material requests, or the information someone needs before starting work.', examples: 'Dashboards · Time tracking · Reporting'},
]

const contractingSections = [
  {
    id: 'materials',
    heading: 'Know what the job is waiting on',
    paragraphs: [
      'Materials can arrive on a truck, come from a supplier, or be picked up on the way to the site. The team needs to know what is expected, what has arrived, and what is still missing.',
      'A material record can keep the item, quantity, supplier, expected delivery, and current status with the job. When a delivery changes, there is a place to record the update and identify the work affected.',
      'Start with a simple list the supervisor can update from a phone. Stock levels, purchasing approvals, or supplier connections can be added if they become useful.',
    ],
    example: 'A roofing delivery is delayed. The supervisor records the new expected date and the work waiting on it.',
  },
  {
    id: 'purchases',
    heading: 'Keep purchases attached to the job',
    paragraphs: [
      'A small supply run still creates information someone needs later: what was bought, who bought it, which job it belongs to, and where the receipt went.',
      'A phone form can collect the purchase details and a receipt photo together. The office can then review purchases by job and follow up when something is missing.',
      'Approval and accounting steps can be added around the business’s purchasing process.',
    ],
    example: 'A supervisor picks up fasteners and sealant, attaches the receipt, and selects the job before leaving the store.',
  },
  {
    id: 'hours',
    heading: 'Make crew hours easier to collect',
    paragraphs: [
      'Paper hours can work until someone has to collect, read, and total them. Missing dates or unclear job names can create another round of questions.',
      'A simple hours tool can let a supervisor record the crew’s time against a job, review the week, and send it to the office in a consistent format. Corrections can be recorded so there is a clear account of what changed.',
      'The entry form can use the details the office needs for review, without making the supervisor repeat the same information for each crew member.',
    ],
    example: 'A supervisor enters the crew’s hours at the end of the day and reviews them before the pay-period cutoff.',
  },
  {
    id: 'history',
    heading: 'Keep customer and job history together',
    paragraphs: [
      'A customer may have several properties, several jobs, and different people to contact for each one. Job information becomes harder to find when those details are spread across separate messages and files.',
      'A shared record can keep the customer, site, contacts, active work, and previous job notes connected. Someone opening a job can find the information that belongs to that visit.',
      'The record should fit the work. A contractor might need site access instructions, a site contact, a material list, and a record of previous repairs.',
    ],
    example: 'Before returning to a property, a supervisor checks the site notes and previous work without asking someone to resend them.',
    link: <Link to="/work/fleet-platform">See customer and job views in the Fleet demo <ArrowIcon direction="right" /></Link>,
  },
  {
    id: 'coordination',
    heading: 'Coordinate changes before they disrupt the day',
    paragraphs: [
      'A crew’s schedule depends on more than its own availability. Site access, crane bookings, material deliveries, and other trades can all affect when work can happen.',
      'A coordination tool can record those conditions with the job and make changes available to the people planning the work. The team can see what needs to be confirmed before committing to a visit.',
      'We can start with shared updates and a clear status. Notifications or checks for conflicting bookings can follow if the working process calls for them.',
    ],
    example: 'Another contractor needs the work area on the planned day. The restriction is recorded against the job so the next schedule review includes it.',
  },
  {
    id: 'updates',
    heading: 'Leave a clear record for the next person',
    paragraphs: [
      'At the end of a visit, a short update can answer the questions that otherwise arrive later. What was completed? What is still open? What needs to happen before someone returns?',
      'A job update can keep those notes, relevant photos, and follow-up items together. The person returning to the site has a place to begin, and the office has information to use when speaking with the customer.',
      'Keep the update short enough to complete during the day, asking for the information someone will use on the next visit.',
    ],
    example: 'A crew records the area completed and a missing item needed for the next visit. A photo is attached if it helps explain the situation.',
  },
]

export default function Services() {
  return <div className="container subpage services-page">
    <div className="page-intro">
      <h1>SERVICES.</h1>
      <p>Practical software for the work you do. I build tools for the parts of your business that need a better way to work.</p>
    </div>
    <div className="service-list">{services.map(item => <article className="neo-card service-detail" key={item.title}>
      <div className="service-detail__heading"><span className="service-detail__symbol"><Icon name={item.icon} /></span><h2>{item.title}</h2></div>
      <p>{item.description}</p>
      <span className="service-detail__examples">{item.examples}</span>
    </article>)}</div>
    <section className="contracting-section" id="contracting" aria-labelledby="contracting-heading">
      <header className="content-section__intro">
        <h2 id="contracting-heading">Keep the moving parts of a job together.</h2>
        <p>Contracting work involves crews, customers, materials, deliveries, and other trades. A change in one place can affect the rest of the day.</p>
        <p>I can build tools that give those details a shared place. We start with how your team already works and choose the parts where a practical change would help.</p>
      </header>
      <nav className="page-contents" aria-label="Contracting topics">
        <span>CONTENTS</span>
        {contractingSections.map(section => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}
      </nav>
      <div className="content-section__list">{contractingSections.map(section => <article className="content-section" id={section.id} key={section.id}>
        <div><p className="content-section__number">{String(contractingSections.indexOf(section) + 1)}</p><h3>{section.heading}</h3></div>
        <div className="content-section__body">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className="content-section__example"><strong>For example</strong> {section.example}</p>{section.link && <p className="content-section__link">{section.link}</p>}</div>
      </article>)}</div>
    </section>
    <section className="service-next" aria-labelledby="service-next-heading">
      <h2 id="service-next-heading">Find the next useful improvement.</h2>
      <p>You do not need a complete software plan to begin. We can start with something that takes too much time, gets entered twice, or regularly needs a follow-up call.</p>
      <p>Once that part works better, we can look at what else becomes possible. This is how the software can grow with the business: add something useful, try it with the team, and decide what is worth doing next.</p>
      <div className="service-next__links"><Link className="button button--orange" to="/contact">START A CONVERSATION <ArrowIcon direction="up-right" /></Link><Link className="text-link" to="/process">HOW I WORK <ArrowIcon direction="right" /></Link></div>
    </section>
  </div>
}
