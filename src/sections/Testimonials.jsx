import { motion } from 'framer-motion'
import { FaStar, FaQuoteRight } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/site'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Success Stories"
          title="What Our Members Say"
          subtitle="Real results from real people who trusted the process."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
              className="card relative p-7 hover:border-accent/40"
            >
              <FaQuoteRight className="absolute right-6 top-6 text-4xl text-accent/15" />
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <FaStar key={s} />
                ))}
              </div>
              <blockquote className="text-gray-300">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/20 font-display font-bold text-accent-light">
                  {t.name.charAt(0)}
                </span>
                <span className="font-semibold text-white">{t.name}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
