import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'
import { projects } from './work/projects'

export default function Work() {
  return <div className="container subpage work-page">
    <header className="page-intro">
      <h1>WORK.</h1>
      <p>A closer look at the software and websites I build, the work they support, and the choices behind them.</p>
    </header>
    <section className="work-index" aria-label="Project index">
      {projects.map(project => <article className="neo-card work-card" key={project.slug}>
        <Link className="work-card__image" to={`/work/${project.slug}`}>
          <img src={project.preview.src} alt={project.preview.alt} width={project.preview.width} height={project.preview.height} />
        </Link>
        <div className="work-card__body">
          <p className="work-study__category">{project.kind.toUpperCase()}</p>
          <p className="work-study__client">{project.client}</p>
          {project.statusLabel && <p className="work-card__status">{project.statusLabel}</p>}
          <h2>{project.title}</h2>
          <p>{project.cardDescription}</p>
          <Link className="work-card__link" to={`/work/${project.slug}`}>VIEW PROJECT <ArrowIcon direction="right" /></Link>
        </div>
      </article>)}
    </section>
    <div className="page-cta">
      <div><h2>HAVE A PROJECT IN MIND?</h2><p>Let's talk about what needs to work better.</p></div>
      <Link className="button button--orange" to="/contact">START A PROJECT <ArrowIcon direction="up-right" /></Link>
    </div>
  </div>
}
