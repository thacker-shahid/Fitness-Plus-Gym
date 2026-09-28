import { motion } from 'framer-motion'
import { FaCheck, FaCrown } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { pricing } from '../data/site'

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-base-900/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Membership"
          title="Pricing Plans"
          subtitle="Flexible plans for every commitment level. No hidden fees — just results."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`card relative flex flex-col p-8 ${
                plan.popular
                  ? 'border-accent/60 shadow-glow lg:-translate-y-4 lg:scale-105'
                  : 'hover:border-accent/40'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-glow">
                  <FaCrown className="text-yellow-300" /> Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-400">Billed {plan.period}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-lg font-semibold text-accent-light">Rs.</span>
                <span className="font-display text-5xl font-bold text-white">
                  {plan.price.toLocaleString('en-IN')}
                </span>
              </div>

              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-[10px] text-accent-light">
                      <FaCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 ${plan.popular ? 'btn-primary' : 'btn-outline'} w-full`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
