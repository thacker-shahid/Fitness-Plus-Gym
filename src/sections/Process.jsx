import { motion } from 'framer-motion'
import { FaClipboardCheck, FaDumbbell, FaChartLine, FaTrophy } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import SectionBg from '../components/SectionBg'
import { process } from '../data/site'

const icons = [FaClipboardCheck, FaDumbbell, FaChartLine, FaTrophy]

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad relative isolate overflow-hidden bg-base-950"
    >
      <SectionBg img="./images/gym-8.jpg" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="How It Works"
          title="Our Process"
          subtitle="A simple, proven path from your first visit to your best self."
        />

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card group relative p-7 hover:border-accent/50 hover:shadow-glow"
              >
                <span className="absolute right-5 top-4 font-display text-5xl font-bold text-white/5 transition-colors group-hover:text-accent/20">
                  {item.step}
                </span>
                <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-2xl text-accent-light transition-all group-hover:bg-accent group-hover:text-white">
                  <Icon />
                </span>
                <h3 className="mb-2 font-display text-lg font-bold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
