import './App.css'

function App() {
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
        <a className="home__brand" href="/">
          Sean Burman
        </a>
        <nav className="home__nav" aria-label="Primary">
          <span className="home__meta">Calgary, AB</span>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="home__main">
        <section className="home__hero">
          <h1 className="home__title">
            Custom software, engineered for the realities of your business.
          </h1>
          <p className="home__lede">
            I design and build focused operational systems that reduce friction,
            reveal new capabilities, and fit the organizations they serve.
          </p>
          <a className="home__cta" href="#contact">
            Begin <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
