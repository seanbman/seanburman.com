import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

const stages = [
  ['DISCOVER', 'We talk through the work, look at the tools and records you use, and identify a useful place to start.'],
  ['PLAN', 'We agree on the first version, what it needs to do, and what can wait. You have a clear scope to review before the build begins.'],
  ['BUILD', 'I develop the software in stages so you can try it and give feedback while changes are still easy to make.'],
  ['DELIVER', 'We check the agreed work, prepare it for use, and walk through how to run it. Any ongoing support is agreed as part of the handoff.'],
]

const processSections = [
  {
    id: 'start-with-the-work',
    heading: 'Start with the work as it happens',
    paragraphs: [
      'A real example is a good starting point. Show me how a job is booked, where hours are written down, or what happens when a delivery is late.',
      'We look at who needs the information, where it comes from, and what happens next. That helps us choose a useful change and avoid adding steps that make the work harder.',
      'You do not need to know the technical answer. Your knowledge of the business is what helps shape the tool.',
    ],
  },
  {
    id: 'first-version',
    heading: 'Agree on a useful first version',
    paragraphs: [
      'The first version should do a clear piece of work. We choose the people who will use it, the tasks it needs to support, and how we will tell whether those tasks work as agreed.',
      'For example, a crew-hours tool might begin with entry, review, and a simple export. Payroll integration can wait until the basic process has been tried.',
      'A clear boundary helps keep the work manageable and gives you something specific to review.',
    ],
  },
  {
    id: 'working-software',
    heading: 'Try working software early',
    paragraphs: [
      'A working screen is easier to discuss than a long description. You can try entering a job, checking a schedule, or recording an update and point out what does not fit.',
      'I build in focused stages and reuse common foundations where they suit the project. That leaves more time for the details that make the tool useful to your business.',
      'The pace depends on the size of the work, any outside services involved, and how quickly we can review decisions together. We agree on a realistic first milestone once the scope is clear.',
    ],
    link: <Link to="/work/fleet-platform">See the Fleet dispatch demo <ArrowIcon direction="right" /></Link>,
  },
  {
    id: 'check-the-work',
    heading: 'Check the work your team will rely on',
    paragraphs: [
      'Before delivery, we check the tasks we agreed the software should handle. That includes ordinary use and the changes people need to make when something is entered incorrectly or a plan changes.',
      'A phone tool needs to work at the size people will use it. A shared system needs to give the right people access. A connection to another service needs a clear way to handle a failed request.',
      'The checks should match the project and the work people will depend on.',
    ],
  },
  {
    id: 'prepare-for-use',
    heading: 'Prepare it for use',
    paragraphs: [
      'Delivery includes the practical steps needed to use the software. Depending on the project, that can include hosting, account setup, moving existing records, connecting services, and showing the team how it works.',
      'We agree on these responsibilities in the scope, including any ongoing service costs. You should know what is being delivered and what you need to operate it.',
    ],
  },
  {
    id: 'real-feedback',
    heading: 'Keep improving it with real feedback',
    paragraphs: [
      'Trying the software during real work can reveal details that are hard to see in advance. A field may need a different label. A useful view may be missing. A repeated step may be ready for automation.',
      'We can review those findings and decide what to change next. Small refinements and larger additions can be planned separately, with support arrangements agreed clearly.',
    ],
  },
]

export default function Process() {
  return <div className="container subpage process-page">
    <div className="page-intro">
      <h1>THE PROCESS.</h1>
      <p>From an idea to something your team can use. You can start with a problem, a rough idea, or a task that keeps taking longer than it should.</p>
    </div>
    <ol className="process-grid">{stages.map(([title, description], index) => <li className="neo-card process-card" key={title}>
      <span className="process-card__number">{String(index + 1)}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>)}</ol>
    <div className="process-details">{processSections.map(section => <section className="content-section process-detail" id={section.id} key={section.heading}>
      <div><p className="content-section__number">{String(processSections.indexOf(section) + 1)}</p><h2>{section.heading}</h2></div>
      <div className="content-section__body">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.link && <p className="content-section__link">{section.link}</p>}</div>
    </section>)}</div>
    <div className="page-cta process-cta"><div><h2>Have a task that could work better?</h2><p>Tell me how you handle it now and where it gets difficult.</p></div><Link className="button button--orange" to="/contact">START A CONVERSATION <ArrowIcon direction="up-right" /></Link></div>
  </div>
}
