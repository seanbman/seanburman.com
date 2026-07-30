import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

/**
 * Panels taller than the viewport would pin at top: 0 with their tail
 * unreadable before the next panel covers it. Give each panel a measured
 * negative offset so it pins only once its bottom edge reaches the bottom
 * of the screen.
 */
function useStackedPanels() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const panels = Array.from(
      root.querySelectorAll<HTMLElement>('.home__section'),
    )

    const update = () => {
      for (const panel of panels) {
        const overflow = panel.offsetHeight - window.innerHeight
        panel.style.setProperty(
          '--stick-top',
          overflow > 0 ? `${-overflow}px` : '0px',
        )
      }
    }

    update()
    window.addEventListener('resize', update)
    const observer = new ResizeObserver(update)
    panels.forEach((panel) => observer.observe(panel))
    return () => {
      window.removeEventListener('resize', update)
      observer.disconnect()
    }
  }, [])

  return rootRef
}

/* \u00a0 joins final word pairs so no sentence ends with an orphan word. */
const WORK = [
  {
    title: 'Find the\u00a0bottleneck',
    body: 'I look at how the work actually moves through your business — crews, materials, and equipment as much as quotes, schedules, and invoices — and find where hours and money quietly\u00a0disappear.',
  },
  {
    title: 'Build the\u00a0fix',
    body: 'Software that removes that exact friction — sometimes a single automation, sometimes the system your whole operation runs on. Never an off-the-shelf subscription that makes you change how you\u00a0operate.',
  },
  {
    title: 'Make it\u00a0fit',
    body: 'The software bends to your business — in the office, in the truck, on the job site — not the other way around. If your crew needs a training seminar to use it, I built the wrong\u00a0thing.',
  },
]

const PAINS = [
  'The same job details typed into three different\u00a0places.',
  'Quotes that take days because the numbers live in someone\u2019s\u00a0head.',
  'Paper job sheets that die in the\u00a0truck.',
  'Crews standing around because nobody told them the plan\u00a0changed.',
  'Chasing invoices at the end of every\u00a0month.',
  'A scheduling spreadsheet only one person\u00a0understands.',
]

const STEPS = [
  {
    title: 'A\u00a0conversation',
    body: 'You tell me how the work runs today. No pitch, no\u00a0obligation.',
  },
  {
    title: 'A close\u00a0look',
    body: 'I spend time understanding where things snag — on site or over the\u00a0phone.',
  },
  {
    title: 'One small\u00a0thing',
    body: 'We start with a single tool that pays for itself. If it earns its keep, we go\u00a0further.',
  },
]

function Home() {
  const rootRef = useStackedPanels()

  return (
    <div className="home" ref={rootRef}>
      <section className="home__stage">
        <div className="home__media" aria-hidden="true">
          <img
            className="home__image"
            src={`${import.meta.env.BASE_URL}hero-architecture.jpg`}
            alt=""
          />
          <div className="home__veil" />
        </div>

        <header className="home__header">
          <Link className="home__brand" to="/">
            Sean Burman
          </Link>
          <nav className="home__nav" aria-label="Primary">
            <span className="home__meta">Calgary, AB</span>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="home__main">
          <div className="home__hero">
            <h1 className="home__title">
              Custom software, engineered for the realities of
              your{'\u00a0'}business.
            </h1>
            <p className="home__lede">
              I build practical software around the way your business works, and
              the places where it could work{'\u00a0'}better.
            </p>
            <Link className="home__cta" to="/contact">
              Begin <span aria-hidden="true">→</span>
            </Link>
          </div>
        </main>
      </section>

      <section
        className="home__section home__section--black"
        aria-labelledby="work-heading"
      >
        <div className="home__inner">
          <p className="home__kicker">The work</p>
          <h2 id="work-heading" className="home__heading">
            More than building{'\u00a0'}software.
          </h2>
          <div className="home__columns">
            {WORK.map((item) => (
              <article className="home__col" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home__section home__section--white"
        aria-labelledby="familiar-heading"
      >
        <div className="home__inner">
          <p className="home__kicker">Where the time goes</p>
          <h2 id="familiar-heading" className="home__heading">
            Sound familiar?
          </h2>
          <ul className="home__pains">
            {PAINS.map((pain) => (
              <li key={pain}>{pain}</li>
            ))}
          </ul>
          <p className="home__note">
            Every one of these is a bottleneck. Every one of them
            is{'\u00a0'}fixable.
          </p>
        </div>
      </section>

      <section
        className="home__section home__section--charcoal"
        aria-labelledby="start-heading"
      >
        <div className="home__inner">
          <p className="home__kicker">Working together</p>
          <h2 id="start-heading" className="home__heading">
            How it{'\u00a0'}starts.
          </h2>
          <ol className="home__steps">
            {STEPS.map((step, i) => (
              <li className="home__step" key={step.title}>
                <span className="home__step-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <Link className="home__cta" to="/contact">
            Start the{'\u00a0'}conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="home__footer">
        <div className="home__inner home__footer-inner">
          <p className="home__footer-copy">
            © {new Date().getFullYear()} Sean{'\u00a0'}Burman
          </p>
          <nav className="home__footer-nav" aria-label="Footer">
            <a
              href="https://www.linkedin.com/in/seanburman"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/seanbman"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Home
