import DashboardPreview from './DashboardPreview'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">Custom software. Real results.</p>
          <h1 className="hero__title">
            Custom software for the way your business actually works.
          </h1>
          <p className="hero__lede">
            I help businesses build tailored operational tools while uncovering
            bottlenecks, hidden capabilities, and efficiencies—then turn them
            into systems that drive real impact.
          </p>
          <a className="glow-button glow-button--lg hero__cta" href="#contact">
            Book a call
            <ArrowIcon />
          </a>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Hero
