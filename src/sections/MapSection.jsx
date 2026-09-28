import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaDirections } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { contact } from '../data/site'

export default function MapSection() {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contact.mapEmbedQuery
  )}&output=embed`

  return (
    <section id="location" className="section-pad bg-base-900/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Find Us"
          title="Our Location"
          subtitle="Drop by and start your fitness journey with us in Kurla East, Mumbai."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Address / contact card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col justify-center gap-6 p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-xl text-accent-light">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Address
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-200">
                  {contact.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-xl text-accent-light">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Phone
                </p>
                <a
                  href={`tel:${contact.phone}`}
                  className="mt-1 block text-sm text-gray-200 hover:text-accent-light"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <a
              href={contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <FaDirections /> Get Directions
            </a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-2"
          >
            <iframe
              title="Fitness Plus Gym location"
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
