import { useState, type FormEvent } from 'react'
import { ArrowIcon } from '../components/Icons'

const CONTACT_API_URL = (
  import.meta.env.VITE_GOOGLE_MAIL_API ||
  import.meta.env.VITE_GMAIL_API ||
  import.meta.env.VITE_GMAIL_API_URL ||
  ''
).trim()

type SubmissionState =
  | { kind: 'idle'; message: string }
  | { kind: 'sending'; message: string }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string }

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submission, setSubmission] = useState<SubmissionState>({
    kind: 'idle',
    message: 'Your message will be sent directly to Sean.',
  })

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!CONTACT_API_URL) {
      setSubmission({
        kind: 'error',
        message: 'The contact form is not configured yet. Please email info@seanburman.com directly.',
      })
      return
    }

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    setSubmission({ kind: 'sending', message: 'SENDING MESSAGE...' })

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          subject: `Project inquiry — ${trimmedName}`,
        }),
      })

      if (!response.ok) {
        throw new Error(`Contact API returned ${response.status}`)
      }

      setName('')
      setEmail('')
      setMessage('')
      setSubmission({
        kind: 'success',
        message: 'Message sent. Thanks for reaching out.',
      })
    } catch {
      setSubmission({
        kind: 'error',
        message: 'That did not go through. Please email info@seanburman.com directly.',
      })
    }
  }

  return (
    <div className="container subpage">
      <div className="page-intro">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>CONTACT.</h1>
        <p>Have a project, an idea, or a problem worth solving? Let&apos;s talk.</p>
      </div>
      <div className="contact-layout">
        <section className="contact-copy">
          <h2>LET&apos;S BUILD SOMETHING USEFUL.</h2>
          <p>Tell me a little about the project and what you need accomplished.</p>
          <a className="contact-email" href="mailto:info@seanburman.com">
            info@seanburman.com <ArrowIcon direction="up-right" />
          </a>
        </section>
        <form className="neo-card contact-form" onSubmit={submit}>
          <label htmlFor="contact-name">NAME *</label>
          <input
            id="contact-name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            disabled={submission.kind === 'sending'}
          />
          <label htmlFor="contact-email">EMAIL *</label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            disabled={submission.kind === 'sending'}
          />
          <label htmlFor="contact-message">PROJECT / INQUIRY *</label>
          <textarea
            id="contact-message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What would you like to build?"
            disabled={submission.kind === 'sending'}
          />
          <button className="button button--orange" type="submit" disabled={submission.kind === 'sending'}>
            {submission.kind === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
            {submission.kind !== 'sending' && <ArrowIcon direction="up-right" />}
          </button>
          <p className={`contact-form__note contact-form__note--${submission.kind}`} role="status" aria-live="polite">
            {submission.message}
          </p>
        </form>
      </div>
    </div>
  )
}
