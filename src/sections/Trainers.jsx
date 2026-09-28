import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { trainers } from '../data/site'

export default function Trainers() {
  return (
    <section id="trainers" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Team"
          title="Meet Our Trainers"
          subtitle="Certified professionals dedicated to guiding you every rep of the way."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group overflow-hidden hover:border-accent/50 hover:shadow-glow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/30 to-transparent" />
                {/* Social overlay */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-4 justify-center gap-2 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, idx) => (
                    <span
                      key={idx}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-accent"
                    >
                      <Icon size={14} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm text-accent-light">{t.role}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
