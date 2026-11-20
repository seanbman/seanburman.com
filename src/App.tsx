import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Process from './pages/Process'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectPage from './pages/work/ProjectPage'
import { ArrowIcon } from './components/Icons'
import './App.css'

const nav = [{path:'/services',name:'Services'},{path:'/work',name:'Work'},{path:'/process',name:'Process'},{path:'/about',name:'About'},{path:'/contact',name:'Contact'}]
function Shell() {
  const [open,setOpen]=useState(false)
  const {pathname}=useLocation()
  useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[pathname])
  useEffect(()=>{if(!open)return;const escape=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape)},[open])
  return <>
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="Sean Burman, Software Engineer — homepage"><span className="brand__name">SEAN BURMAN</span><span className="brand__rule" aria-hidden="true"/><span className="brand__title">SOFTWARE ENGINEER</span></Link>
        <button className="menu-toggle" type="button" aria-controls="site-nav" aria-expanded={open} aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
        <nav id="site-nav" aria-label="Main navigation" className={'site-nav'+(open?' site-nav--open':'')}>
          {nav.map(x=><NavLink key={x.path} className={({isActive})=>'site-nav__link'+(isActive?' site-nav__link--active':'')} to={x.path}>{x.name}</NavLink>)}
          <Link className="button button--orange site-nav__cta" to="/contact">START A PROJECT <ArrowIcon direction="up-right" /></Link>
        </nav>
      </div>
    </header>
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/work/:slug" element={<ProjectPage/>}/>
        <Route path="/process" element={<Process/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </main>
    <footer className="site-footer"><div className="container site-footer__inner"><div><Link className="site-footer__brand" to="/">SEAN BURMAN</Link><p>Specialized software systems built for your business.</p></div><div className="site-footer__right"><div className="site-footer__meta"><a href="mailto:info@seanburman.com">info@seanburman.com</a><span>© {new Date().getFullYear()} Sean Burman</span></div><div className="site-footer__socials" aria-label="Social links"><a className="site-footer__social" href="https://www.linkedin.com/in/seanburman" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a><a className="site-footer__social" href="https://github.com/seanbman" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a></div></div></div></footer>
  </>
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1 8h4.4v14H1V8Zm7 0h4.2v1.9h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.2V22H18v-6.4c0-1.5 0-3.5-2.2-3.5s-2.5 1.6-2.5 3.4V22H8V8Z"/></svg>
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.04 1.77 2.72 1.26 3.38.96.1-.75.41-1.26.74-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.19a10.98 10.98 0 0 1 5.76 0c2.2-1.5 3.16-1.19 3.16-1.19.62 1.59.23 2.77.11 3.06.73.81 1.18 1.85 1.18 3.11 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
}
export default function App(){return <BrowserRouter><Shell/></BrowserRouter>}
