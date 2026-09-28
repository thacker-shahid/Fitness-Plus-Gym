import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaUserTie, FaHeartbeat, FaDumbbell } from 'react-icons/fa'
import { counters } from '../data/site'

const icons = [FaUsers, FaUserTie, FaHeartbeat, FaDumbbell]

function CountUp({ target, suffix, run }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!run) return
    let raf
    const duration = 1800
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo for a punchy finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target])

  return (
    <span>
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default function Counters() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24">
      {/* Accent band background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent-dark via-accent to-accent-dark opacity-90" />
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.5), transparent 60%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.5), transparent 60%)',
        }}
      />

      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((c, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-black/20 text-3xl text-white backdrop-blur">
                  <Icon />
                </span>
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  <CountUp target={c.value} suffix={c.suffix} run={inView} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/80">
                  {c.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
