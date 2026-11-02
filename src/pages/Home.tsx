import { Link } from 'react-router-dom'
import Showcase from '../components/Showcase'
import Icon from '../components/Icons'
const items=[{title:'CUSTOM SYSTEMS',icon:'systems' as const},{title:'INTEGRATIONS',icon:'integrations' as const},{title:'OPERATIONS TOOLS',icon:'operations' as const}]
export default function Home(){return <div className="container home-page">
  <section className="hero" aria-labelledby="hero-heading">
    <div className="hero__copy">
      <h1 id="hero-heading">SPECIALIZED<br/>SOFTWARE<br/>SYSTEMS BUILT<br/>FOR YOUR<br/>BUSINESS.</h1>
      <p>Custom software, operations tools, and integrations that streamline work, connect your systems, and drive results.</p>
      <Link className="button button--orange button--large" to="/contact">START A PROJECT <span aria-hidden="true">↗</span></Link>
      <div className="hero__stripes" aria-hidden="true"><i/><i/><i/></div>
    </div><Showcase/>
  </section>
  <section className="home-lower" aria-label="Services and about">
    <div className="neo-card summary-panel"><div className="section-bar"><h2>SERVICES</h2><span>CUSTOM BUSINESS SOFTWARE</span></div>
      <div className="summary-panel__grid">{items.map(item=><Link to="/services" className="summary-tile" key={item.title}><Icon name={item.icon}/><h3>{item.title}</h3></Link>)}</div>
    </div>
    <div className="neo-card about-panel"><div className="section-bar"><h2>ABOUT</h2><span>A PRACTICAL, BUSINESS-FOCUSED APPROACH</span></div>
      <div className="about-panel__body"><p>Software engineering with a practical, business-focused approach. I build reliable systems that solve real problems, improve operations, and fit the way your business works.</p>
        <Link className="button button--orange" to="/about">LEARN MORE <span aria-hidden="true">→</span></Link>
        <div className="about-panel__stripes" aria-hidden="true"><i/><i/><i/></div>
      </div>
    </div>
  </section>
</div>}
