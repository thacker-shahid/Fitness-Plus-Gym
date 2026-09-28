import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { contact, social, WEB3FORMS_ACCESS_KEY } from '../data/site'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New enquiry from Fitness Plus Gym website')
    formData.append('from_name', 'Fitness Plus Gym Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
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

  const info = [
    {
      icon: FaMapMarkerAlt,
      label: 'Visit Us',
      value: contact.address,
      href: contact.mapLink,
    },
    {
      icon: FaPhoneAlt,
      label: 'Call Us',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: contact.phone,
      href: social.whatsapp,
    },
    {
      icon: FaEnvelope,
      label: 'Email Us',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ]

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Have a Question?"
          subtitle="Send us a message and our team will get back to you as soon as possible."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {info.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card group flex items-start gap-4 p-5 hover:border-accent/40 hover:shadow-glow"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-xl text-accent-light transition group-hover:bg-accent group-hover:text-white">
                    <item.icon />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-gray-200">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
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
                  rows="4"
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
      </div>
    </section>
  )
}
