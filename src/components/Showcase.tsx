import { useState } from 'react'
// Keep all three slide interiors empty until their real widgets are ready.
const slots=['Dispatch','Employee hours','Revenue'] as const
export default function Showcase(){
  const [active,setActive]=useState(0)
  const show=(n:number)=>setActive((n+slots.length)%slots.length)
  return <section className="showcase neo-card" aria-label="Business software showcase">
    <div className="section-bar section-bar--showcase"><span>BUSINESS SOFTWARE IN ACTION</span></div>
    <div className="showcase__main">
      <button type="button" className="showcase__arrow" aria-label="Previous showcase slide" onClick={()=>show(active-1)}>‹</button>
      <div className="showcase__viewport" role="group" aria-label={slots[active]+' — empty showcase slot'} data-slide-index={active}>{/* Deliberately blank slide */}</div>
      <button type="button" className="showcase__arrow" aria-label="Next showcase slide" onClick={()=>show(active+1)}>›</button>
    </div>
    <div className="showcase__pagination" aria-label="Choose showcase slide">{slots.map((slot,i)=><button type="button" key={slot} aria-label={'Show slide '+(i+1)} aria-current={active===i?'true':undefined} className={'showcase__dot'+(i===active?' showcase__dot--active':'')} onClick={()=>show(i)}/>)}</div>
    <span className="sr-only" role="status">Slide {active+1} of {slots.length}</span>
  </section>
}
