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

const WORK = [
  {
    title: 'Find the bottleneck',
    body: 'I look at how the work actually moves through your business — quoting, scheduling, job tracking, invoicing — and find where hours and money quietly disappear.',
  },
  {
    title: 'Build the fix',
    body: 'A small, practical tool or automation that removes that exact friction. Not a platform. Not another subscription that makes you change how you operate.',
  },
  {
    title: 'Make it fit',
    body: 'The software bends to your business, not the other way around. If your crew needs a training seminar to use it, I built the wrong thing.',
  },
]

const PAINS = [
  'The same job details typed into three different places.',
  'Quotes that take days because the numbers live in someone\u2019s head.',
  'Paper job sheets that die in the truck.',
  'Chasing invoices at the end of every month.',
  'A scheduling spreadsheet only one person understands.',
]

const STEPS = [
  {
    title: 'A conversation',
    body: 'You tell me how the work runs today. No pitch, no obligation.',
  },
  {
    title: 'A close look',
    body: 'I spend time understanding where things snag — on site or over the phone.',
  },
  {
    title: 'One small thing',
    body: 'We start with a single tool that pays for itself. If it earns its keep, we go further.',
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
              Custom software, engineered for the realities of your business.
            </h1>
            <p className="home__lede">
              I build practical software around the way your business works, and
              the places where it could work better.
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
            More than building software.
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
            Every one of these is a bottleneck. Every one of them is fixable.
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
            How it starts.
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
            Start the conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="home__footer">
        <div className="home__inner home__footer-inner">
          <p className="home__footer-copy">
            © {new Date().getFullYear()} Sean Burman
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
