import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import { brand, contact } from '../data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background image with dark/red overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="./images/gym-2.jpg"
          alt="Fitness Plus Gym"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-base-950 via-base-950/90 to-base-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-transparent to-base-950/60" />
      </div>

      <div className="container-page">
        <div className="max-w-2xl">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light"
          >
            {brand.location}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Build Your Body,
            <br />
            <span className="text-gradient">{brand.tagline}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg text-gray-300"
          >
            Welcome to {brand.name} — where modern equipment, expert trainers,
            and an unstoppable community come together to help you reach your
            fitness goals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#pricing" className="btn-primary">
              Get Started <FaArrowRight />
            </a>
            <a href="#gallery" className="btn-outline">
              <FaPlay className="text-accent-light" /> Explore Gym
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { k: '2000+', v: 'Members' },
              { k: '5+', v: 'Trainers' },
              { k: '50+', v: 'Equipments' },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl font-bold text-white">{s.k}</p>
                <p className="text-sm text-gray-400">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  )
}
