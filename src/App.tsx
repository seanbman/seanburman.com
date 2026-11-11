import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Process from './pages/Process'
import About from './pages/About'
import Contact from './pages/Contact'
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
        <Route path="/process" element={<Process/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </main>
    <footer className="site-footer"><div className="container site-footer__inner"><div><Link className="site-footer__brand" to="/">SEAN BURMAN</Link><p>Specialized software systems built for your business.</p></div><div className="site-footer__right"><a href="mailto:info@seanburman.com">info@seanburman.com</a><span>© {new Date().getFullYear()} Sean Burman</span></div></div></footer>
  </>
}
export default function App(){return <BrowserRouter><Shell/></BrowserRouter>}
