import { FaDumbbell, FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { brand, contact, social, developer, navLinks } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-base-900">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="mb-4 flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white shadow-glow">
                <FaDumbbell />
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
                {brand.name}
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              Your journey to a stronger, healthier you starts here in {brand.location}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-gray-300 transition-all hover:border-accent hover:bg-accent hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-gray-300 transition-all hover:border-accent hover:bg-accent hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-gray-300 transition-all hover:border-accent hover:bg-accent hover:text-white"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-accent" />
                <a href={`tel:${contact.phone}`} className="hover:text-accent-light">
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-white">
              Opening Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex justify-between gap-4">
                <span>Mon – Sat</span>
                <span className="text-gray-300">6 AM – 12 AM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-gray-300">8 AM – 2 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-gray-500 md:flex-row md:text-left">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>
            Developed by{' '}
            <a
              href={developer.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-light transition-colors hover:text-accent"
            >
              {developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
