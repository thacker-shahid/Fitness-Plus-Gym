import { motion } from 'framer-motion'
import { FaCheck, FaCrown, FaDumbbell, FaExclamationTriangle } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import SectionBg from '../components/SectionBg'
import { pricing, personalTraining, pricingNotes } from '../data/site'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad relative isolate overflow-hidden bg-base-950"
    >
      <SectionBg img="./images/gym-3.jpg" />
      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Membership"
          title="Pricing Plans"
          subtitle="Flexible plans for every commitment level. No hidden fees — just results."
        />

        {/* Membership plans */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card relative flex flex-col p-7 ${
                plan.popular
                  ? 'border-accent/60 shadow-glow'
                  : 'hover:border-accent/40'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-glow">
                  <FaCrown className="text-yellow-300" /> Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{plan.period}</p>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-base font-semibold text-accent-light">Rs.</span>
                <span className="font-display text-4xl font-bold text-white">
                  {plan.price.toLocaleString('en-IN')}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
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
                className={`mt-7 ${plan.popular ? 'btn-primary' : 'btn-outline'} w-full`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* Personal training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="mb-7 flex items-center justify-center gap-3 text-center font-display text-2xl font-bold uppercase tracking-wide text-white">
            <FaDumbbell className="text-accent" /> Personal Training Fees
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personalTraining.map((pt, i) => (
              <motion.div
                key={pt.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card group p-6 text-center hover:border-accent/50 hover:shadow-glow"
              >
                <h4 className="font-display text-lg font-bold uppercase tracking-widest text-accent-light">
                  {pt.name}
                </h4>
                <p className="mt-1 text-sm text-gray-400">{pt.sessions} sessions</p>
                <div className="mt-4 flex items-end justify-center gap-1">
                  <span className="text-sm font-semibold text-accent-light">Rs.</span>
                  <span className="font-display text-3xl font-bold text-white">
                    {pt.price.toLocaleString('en-IN')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important notes */}
        {pricingNotes?.length > 0 && (
          <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-5">
            <FaExclamationTriangle className="mt-0.5 shrink-0 text-accent" />
            <ul className="space-y-1 text-sm text-gray-300">
              {pricingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
