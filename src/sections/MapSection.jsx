import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaDirections, FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { contact, social } from '../data/site'

export default function MapSection() {
  // Use exact coordinates for an accurate pin on Fitness Plus Gym.
  const embedSrc = `https://www.google.com/maps?q=${contact.mapLat},${contact.mapLng}&z=17&output=embed`

  return (
    <section
      id="location"
      className="section-pad relative isolate overflow-hidden bg-base-950"
    >
      {/* Low-opacity gym image background. Positive z-index inside an
          isolated, solid-background section so it reliably paints. */}
      <img
        src="./images/gym-4.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-base-950/70 via-base-950/55 to-base-950/80" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Find Us"
          title="Our Location"
          subtitle="Drop by and start your fitness journey with us in Kurla East, Mumbai."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Address / contact card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col justify-center gap-6 p-7 lg:col-span-2"
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

            <div className="flex flex-col gap-3">
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full whitespace-nowrap"
              >
                <FaDirections /> Get Directions
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full whitespace-nowrap !border-green-500/40 hover:!border-green-500 hover:!text-green-400"
              >
                <FaWhatsapp className="text-green-400" /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-3"
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
