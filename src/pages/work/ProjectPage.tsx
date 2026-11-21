import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowIcon } from '../../components/Icons'
import { findProject } from './projects'

export default function ProjectPage() {
  const { slug } = useParams<{slug: string}>()
  const project = slug ? findProject(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const relatedProject = project.relatedSlug ? findProject(project.relatedSlug) : undefined
  const showRelatedProject = relatedProject && !project.homeLinkHref

  return <div className="container subpage project-page">
    <Link className="project-page__back" to="/work"><ArrowIcon direction="left" /> BACK TO WORK</Link>
    <header className="project-hero">
      <div className="project-hero__copy">
        <p className="project-page__kind">{project.kind}</p>
        <p className="work-study__client">{project.client}</p>
        {project.statusLabel && <p className="project-page__status">{project.statusLabel}</p>}
        <h1>{project.title}</h1>
        <p className="project-hero__summary">{project.summary}</p>
      </div>
      <figure className="project-hero__image">
        <a href={project.preview.src} target="_blank" rel="noopener noreferrer" aria-label={`View full screenshot: ${project.preview.alt}`}>
          <img src={project.preview.src} alt={project.preview.alt} width={project.preview.width} height={project.preview.height} />
        </a>
        <figcaption>{project.preview.caption}</figcaption>
      </figure>
    </header>
    <section className="project-overview" aria-label="Project overview">
      <div><h2>THE WORKING CONTEXT</h2><p>{project.context}</p></div>
      <div><h2>WHAT WAS BUILT</h2><p>{project.result}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
    </section>
    <nav className="project-page__quick-links" aria-label="Explore this work">
      <h2>Explore this work</h2>
      <div className="project-page__quick-link-list">
        {project.homeLinkHref && <a className="project-page__quick-link" href={project.homeLinkHref} target="_blank" rel="noopener noreferrer">{project.homeLinkLabel} <ArrowIcon direction="up-right" /></a>}
        {project.website && <a className="project-page__quick-link" href={project.website} target="_blank" rel="noopener noreferrer">Visit live website <ArrowIcon direction="up-right" /></a>}
        {showRelatedProject && <Link className="project-page__quick-link" to={`/work/${relatedProject.slug}`}>See related work <ArrowIcon direction="right" /></Link>}
      </div>
    </nav>
    <div className="project-sections">
      {project.sections.map(section => <section className="project-section" key={section.heading}>
        <div className="project-section__copy">
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {section.images && <div className="project-gallery">
          {section.images.map(screenshot => {
            const tallPreview = screenshot.height / screenshot.width > 2
            return <figure className={tallPreview ? 'project-gallery__figure--tall' : undefined} key={screenshot.src}>
              <a className={tallPreview ? 'project-gallery__frame--tall' : undefined} href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`View full screenshot: ${screenshot.alt}`}>
                <img src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading="lazy" />
              </a>
              <figcaption>{screenshot.caption}</figcaption>
            </figure>
          })}
        </div>}
      </section>)}
    </div>
    <div className="project-page__footer">
      <div>
        <h2>Have a similar problem to solve?</h2>
        <p>Start with the work that needs to become clearer, faster, or easier to manage.</p>
      </div>
      <div className="project-page__links">
        {project.homeLinkHref && <a className="project-page__related" href={project.homeLinkHref} target="_blank" rel="noopener noreferrer">{project.homeLinkLabel} <ArrowIcon direction="up-right" /></a>}
        {showRelatedProject && <Link className="project-page__related" to={`/work/${relatedProject.slug}`}>SEE {relatedProject.client} <ArrowIcon direction="right" /></Link>}
        {project.website && <a className="project-page__related" href={project.website} target="_blank" rel="noopener noreferrer">VISIT WEBSITE <ArrowIcon direction="up-right" /></a>}
        <Link className="button button--orange" to="/contact">START A CONVERSATION <ArrowIcon direction="up-right" /></Link>
      </div>
    </div>
  </div>
}
