import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from './Icons'
import CroppedImage from './CroppedImage'
import { projects } from '../pages/work/projects'

export default function Showcase() {
  const [active, setActive] = useState(0)
  const show = (n: number) => setActive((n + projects.length) % projects.length)
  const project = projects[active]
  const projectRoute = `/work/${project.slug}`
  const projectSource = project.homeLinkHref || project.website
  const projectSourceLabel = project.homeLinkHref ? project.homeLinkLabel : 'Visit live website'
  const projectLink = project.homeLinkHref
    ? <a className="showcase__link" href={project.homeLinkHref} target="_blank" rel="noopener noreferrer">{project.homeLinkLabel} <ArrowIcon direction="right" /></a>
    : <Link className="showcase__link" to={projectRoute}>{project.homeLinkLabel} <ArrowIcon direction="right" /></Link>
  return <section className="showcase neo-card" aria-label="Business software showcase">
    <div className="showcase__main">
      <div className="showcase__viewport" role="group" aria-label={project.client + ' — ' + project.homeHeading} data-slide-index={active}>
        <div className={'showcase__slide showcase__slide--' + project.slug}>
          {projectSource ? <a className="showcase__media" href={projectSource} target="_blank" rel="noopener noreferrer" aria-label={`Open ${projectSourceLabel}`}>
            <div className="showcase__crop showcase__crop--desktop"><CroppedImage image={project.preview} crop={project.showcase.desktopCrop} /></div>
            <div className="showcase__crop showcase__crop--mobile"><CroppedImage image={project.mobilePreview || project.preview} crop={project.showcase.mobileCrop} /></div>
          </a> : <Link className="showcase__media" to={projectRoute}>
            <div className="showcase__crop showcase__crop--desktop"><CroppedImage image={project.preview} crop={project.showcase.desktopCrop} /></div>
            <div className="showcase__crop showcase__crop--mobile"><CroppedImage image={project.mobilePreview || project.preview} crop={project.showcase.mobileCrop} /></div>
          </Link>}
          <div className={'showcase__footer showcase__footer--' + project.showcase.captionPlacement}>
            <div className={'showcase__copy showcase__copy--' + project.showcase.captionPlacement}>
              <h3>{project.homeHeading}</h3>
              <p>{project.homeCaption}</p>
            </div>
            <div className="showcase__footer-row">
              {projectLink}
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
