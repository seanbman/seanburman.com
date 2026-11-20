import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from './Icons'
import { projects } from '../pages/work/projects'

export default function Showcase() {
  const [active, setActive] = useState(0)
  const show = (n: number) => setActive((n + projects.length) % projects.length)
  const project = projects[active]

  return <section className="showcase neo-card" aria-label="Business software showcase">
    <div className="section-bar section-bar--showcase"><span>BUSINESS SOFTWARE IN ACTION</span></div>
    <div className="showcase__main">
      <button type="button" className="showcase__arrow" aria-label="Previous showcase slide" onClick={() => show(active - 1)}><ArrowIcon direction="left" /></button>
      <div className="showcase__viewport" role="group" aria-label={project.client + ' — ' + project.homeHeading} data-slide-index={active}>
        <div className="showcase__slide">
          <Link className="showcase__media" to={`/work/${project.slug}`}>
            <picture>
              {project.mobilePreview && <source media="(max-width: 650px)" srcSet={project.mobilePreview.src} />}
              <img src={project.preview.src} alt={project.preview.alt} width={project.preview.width} height={project.preview.height} />
            </picture>
          </Link>
          <div className="showcase__copy">
            <p className="showcase__project-type">{project.kind}</p>
            {project.statusLabel && <p className="showcase__status">{project.statusLabel}</p>}
            <h3>{project.homeHeading}</h3>
            <p>{project.homeCaption}</p>
            <Link className="showcase__link" to={`/work/${project.slug}`}>VIEW PROJECT <ArrowIcon direction="right" /></Link>
          </div>
        </div>
      </div>
      <button type="button" className="showcase__arrow" aria-label="Next showcase slide" onClick={() => show(active + 1)}><ArrowIcon direction="right" /></button>
    </div>
    <div className="showcase__pagination" aria-label="Choose showcase slide">{projects.map((item, index) => <button type="button" key={item.slug} aria-label={'Show ' + item.client + ' project'} aria-current={active === index ? 'true' : undefined} className={'showcase__dot' + (index === active ? ' showcase__dot--active' : '')} onClick={() => show(index)} />)}</div>
    <span className="sr-only" role="status">Slide {active + 1} of {projects.length}</span>
  </section>
}
