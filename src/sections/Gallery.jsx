import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { FaVideo, FaPlay } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { gallery } from '../data/site'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Space"
          title="Gallery"
          subtitle="Take a look inside Fitness Plus Gym — our facilities, equipment, and the energy that keeps our members coming back."
        />

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              onClick={() => setActive(item)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-base-950/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">{item.alt}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Videos — coming soon placeholder */}
        <div className="mt-14">
          <h3 className="mb-6 flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide text-white">
            <FaVideo className="text-accent" /> Gym Videos
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: n * 0.08 }}
                className="card group relative flex aspect-video items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-base-900" />
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/20 text-accent-light animate-pulse-glow">
                    <FaPlay />
                  </span>
                  <p className="font-semibold text-white">Coming Soon</p>
                  <p className="text-xs text-gray-400">Video tour in production</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <HiX size={22} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-glow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
