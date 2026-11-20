import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from './Icons'
import { projects } from '../pages/work/projects'

export default function Showcase() {
  const [active, setActive] = useState(0)
  const show = (n: number) => setActive((n + projects.length) % projects.length)
  const project = projects[active]
  const showcaseStyle = {
    '--showcase-desktop-aspect': project.showcase.desktopAspectRatio,
    '--showcase-mobile-aspect': project.showcase.mobileAspectRatio,
    '--showcase-desktop-position': project.showcase.desktopObjectPosition,
    '--showcase-mobile-position': project.showcase.mobileObjectPosition,
  } as CSSProperties

  return <section className="showcase neo-card" aria-label="Business software showcase">
    <div className="section-bar section-bar--showcase"><span>BUSINESS SOFTWARE IN ACTION</span></div>
    <div className="showcase__main">
      <div className="showcase__viewport" role="group" aria-label={project.client + ' — ' + project.homeHeading} data-slide-index={active}>
        <div className={'showcase__slide showcase__slide--' + project.slug} style={showcaseStyle}>
          <Link className="showcase__media" to={`/work/${project.slug}`}>
            <picture>
              {project.mobilePreview && <source media="(max-width: 650px)" srcSet={project.mobilePreview.src} />}
              <img src={project.preview.src} alt={project.preview.alt} width={project.preview.width} height={project.preview.height} />
            </picture>
          </Link>
          <div className={'showcase__footer showcase__footer--' + project.showcase.captionPlacement}>
            <div className={'showcase__copy showcase__copy--' + project.showcase.captionPlacement}>
              <p className="showcase__project-type">{project.statusLabel || project.kind}</p>
              <h3>{project.homeHeading}</h3>
              <p>{project.homeCaption}</p>
            </div>
            <div className="showcase__footer-row">
              <Link className="showcase__link" to={`/work/${project.slug}`}>{project.homeLinkLabel} <ArrowIcon direction="right" /></Link>
              <div className="showcase__controls">
                <button type="button" className="showcase__arrow showcase__arrow--previous" aria-label="Previous showcase slide" onClick={() => show(active - 1)}><ArrowIcon direction="left" /></button>
                <div className="showcase__pagination" aria-label="Choose showcase slide">{projects.map((item, index) => <button type="button" key={item.slug} aria-label={'Show ' + item.client + ' project'} aria-current={active === index ? 'true' : undefined} className={'showcase__dot' + (index === active ? ' showcase__dot--active' : '')} onClick={() => show(index)} />)}</div>
                <button type="button" className="showcase__arrow showcase__arrow--next" aria-label="Next showcase slide" onClick={() => show(active + 1)}><ArrowIcon direction="right" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span className="sr-only" role="status">Slide {active + 1} of {projects.length}</span>
  </section>
}
