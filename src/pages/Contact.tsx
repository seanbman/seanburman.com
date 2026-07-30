import { Link } from 'react-router-dom'
import './Contact.css'

const PHONE_DISPLAY = '+1 368 997 4329'
const PHONE_TEL = '+13689974329'
const EMAIL = 'info@seanburman.com'
const LINKEDIN = 'https://www.linkedin.com/in/seanburman'
const SITE = 'https://seanburman.com'
const VCF = `${import.meta.env.BASE_URL}sean-burman.vcf`
const QR = `${import.meta.env.BASE_URL}contact-qr.svg`

function Contact() {
  return (
    <div className="contact">
      <div className="contact__media" aria-hidden="true">
        <img
          className="contact__image"
          src={`${import.meta.env.BASE_URL}hero-architecture.jpg`}
          alt=""
        />
        <div className="contact__veil" />
      </div>

      <header className="contact__top">
        <Link className="contact__back" to="/">
          ← Back to introduction
        </Link>
      </header>

      <main className="contact__main">
        <div className="contact__layout">
          <article className="contact__card">
            <div className="contact__card-edge" aria-hidden="true" />

            <h1 className="contact__name">Sean Burman</h1>
            <p className="contact__role">
              Custom Business Software&nbsp;&amp;&nbsp;Automation
            </p>

            <div className="contact__details">
              <a className="contact__detail" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              <a className="contact__detail" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>

            <a
              className="contact__save contact__mobile-only"
              href={VCF}
              download="sean-burman.vcf"
            >
              Add to Contacts
            </a>

            <div className="contact__actions" aria-label="Quick actions">
              <a
                className="contact__action contact__mobile-only"
                href={`tel:${PHONE_TEL}`}
              >
                <PhoneIcon />
                <span>Call</span>
              </a>
              <a className="contact__action" href={`mailto:${EMAIL}`}>
                <MailIcon />
                <span>Email</span>
              </a>
              <a
                className="contact__action"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="contact__footer">
              <p className="contact__byline">
                I build practical software around the way your business works,
                and the places where it could work better.
              </p>
              <a className="contact__site" href={SITE}>
                seanburman.com
              </a>
            </div>
          </article>

          <aside className="contact__qr" aria-label="Scan to open on your phone">
            <div className="contact__qr-frame">
              <img src={QR} alt="QR code linking to this contact page" />
            </div>
            <p>Scan to open on your phone</p>
          </aside>
        </div>
      </main>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 4.5h2.2l1.1 3.2-1.4 1.1a12.5 12.5 0 0 0 5.8 5.8l1.1-1.4 3.2 1.1v2.2a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 3.5 6a1.5 1.5 0 0 1 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4.5 7.5 12 12.5l7.5-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8 10.5V16M8 7.8v.2M12 16v-3.2a1.8 1.8 0 1 1 3.6 0V16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Contact
