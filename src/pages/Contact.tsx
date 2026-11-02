import { useState, type FormEvent } from 'react'
export default function Contact(){
  const [name,setName]=useState(''),[email,setEmail]=useState(''),[message,setMessage]=useState('')
  function compose(e:FormEvent<HTMLFormElement>){e.preventDefault();const subject=encodeURIComponent('Project inquiry — '+name.trim());const body=encodeURIComponent('Name: '+name.trim()+'\nEmail: '+email.trim()+'\n\nProject:\n'+message.trim());window.location.href='mailto:info@seanburman.com?subject='+subject+'&body='+body}
  return <div className="container subpage"><div className="page-intro"><p className="eyebrow">GET IN TOUCH</p><h1>CONTACT.</h1><p>Have a project, an idea, or a problem worth solving? Let's talk.</p></div><div className="contact-layout"><section className="contact-copy"><h2>LET'S BUILD SOMETHING USEFUL.</h2><p>Tell me a little about the project and what you're trying to accomplish.</p><a className="contact-email" href="mailto:info@seanburman.com">info@seanburman.com ↗</a></section><form className="neo-card contact-form" onSubmit={compose}>
    <label htmlFor="contact-name">NAME *</label><input id="contact-name" required autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/>
    <label htmlFor="contact-email">EMAIL *</label><input id="contact-email" type="email" required autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com"/>
    <label htmlFor="contact-message">PROJECT / INQUIRY *</label><textarea id="contact-message" required rows={6} value={message} onChange={e=>setMessage(e.target.value)} placeholder="What would you like to build?"/>
    <button className="button button--orange" type="submit">COMPOSE MESSAGE ↗</button><p className="contact-form__note">Opens your email app with the message prepared. Nothing is sent automatically.</p>
  </form></div></div>
}
