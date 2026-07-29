import './Features.css'

const features = [
  {
    title: 'Custom Built',
    description: 'Software designed around your processes, not the other way around.',
    icon: 'code',
  },
  {
    title: 'Capability Discovery',
    description:
      'We identify bottlenecks, untapped capabilities, and opportunities most businesses overlook.',
    icon: 'search',
  },
  {
    title: 'Operational Efficiency',
    description:
      'Streamlined workflows and smarter systems that save time, reduce costs, and scale with you.',
    icon: 'bolt',
  },
] as const

function Features() {
  return (
    <section className="features" id="services">
      <div className="container features__grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature">
            <div className="feature__icon" aria-hidden="true">
              {feature.icon === 'code' && <CodeIcon />}
              {feature.icon === 'search' && <SearchIcon />}
              {feature.icon === 'bolt' && <BoltIcon />}
            </div>
            <h2 className="eyebrow">{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M9 8L5 12l4 4M15 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16 16l3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M13 3L6 13h5l-1 8 8-11h-5l0-7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Features
