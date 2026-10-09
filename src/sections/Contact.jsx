import { useState } from 'react'
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import SectionBg from '../components/SectionBg'
import { WEB3FORMS_ACCESS_KEY } from '../data/site'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.target
    const name = form.name?.value?.trim() || ''
    const phone = form.phone?.value?.trim() || ''
    const email = form.email?.value?.trim() || ''
    const message = form.message?.value?.trim() || ''

    // Honeypot: if a bot filled the hidden field, silently stop.
    if (form.botcheck?.checked) {
      setStatus('idle')
      return
    }

    // Web3Forms (free plan) renders each field as a label/value row in its
    // own clean email template. So we send well-labeled fields (capitalised
    // keys => nicer labels) instead of raw HTML, which the free plan ignores.
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Enquiry from ${name || 'a Visitor'} — Fitness Plus Gym`,
      from_name: 'Fitness Plus Gym Website',
      replyto: email,
      Name: name,
      Phone: phone,
      Email: email,
      Message: message,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section
      id="contact"
      className="section-pad relative isolate overflow-hidden bg-base-950"
    >
      <SectionBg img="./images/gym-5.jpg" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Have a Question?"
          subtitle="Send us a message and our team will get back to you as soon as possible."
        />

        {/* Centered, full-width form */}
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
            {/* Honeypot spam trap */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-400">
                <FaCheckCircle /> Thanks! Your message has been sent. We'll be in
                touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <FaExclamationCircle /> {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
