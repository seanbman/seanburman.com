import './Header.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">
          Sean Burman
        </a>

        <nav className="header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="glow-button header__cta" href="#contact">
          Book a call
          <ArrowIcon />
        </a>
      </div>
    </header>
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

export default Header
