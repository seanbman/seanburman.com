import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
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
        <section className="home__hero">
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
        </section>
      </main>
    </div>
  )
}

export default Home
