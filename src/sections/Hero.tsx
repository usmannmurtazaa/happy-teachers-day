import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { HERO_WORDS, ROLE_WORDS } from '../data/content'
import { EASE_OUT } from '../animations/variants'

export function Hero() {
  const reduce = useReducedMotion()

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }
  const word = {
    hidden: { opacity: 0, y: 34, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT } },
  }

  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-dvh flex-col items-center justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      {/* Decorative SVG rings */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden="true">
        <svg viewBox="0 0 600 600" className="h-[min(92vw,42rem)] w-[min(92vw,42rem)] opacity-[0.45]" fill="none">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f2c879" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#7b8fd6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f2c879" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="150" stroke="url(#ringGrad)" strokeWidth="0.75" />
          <circle cx="300" cy="300" r="215" stroke="url(#ringGrad)" strokeWidth="0.5" opacity="0.6" />
          <circle cx="300" cy="300" r="278" stroke="url(#ringGrad)" strokeWidth="0.4" opacity="0.35" />
          <motion.circle
            cx="300" cy="300" r="150" stroke="#f2c879" strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="40 902"
            initial={{ rotate: 0 }} animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '300px 300px' }}
          />
          <motion.circle
            cx="300" cy="300" r="215" stroke="#9fb0e8" strokeOpacity="0.5" strokeWidth="0.9" strokeLinecap="round" strokeDasharray="70 1281"
            initial={{ rotate: 360 }} animate={reduce ? {} : { rotate: 0 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '300px 300px' }}
          />
        </svg>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <motion.span
          variants={word}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/[0.07] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-300 sm:text-[12px]"
        >
          <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-gold-400" aria-hidden="true" />
          A tribute to every teacher
        </motion.span>

        <h1 id="hero-title" className="font-display text-[clamp(2.6rem,13.5vw,6.5rem)] font-semibold leading-[0.96] tracking-tightest">
          {HERO_WORDS.map((w, i) => (
            <motion.span
              key={w}
              variants={word}
              className={`mr-[0.24em] inline-block last:mr-0 ${i === 1 ? 'text-gradient-gold' : 'text-mist-100'}`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={word} className="mt-6 max-w-xl text-[15px] leading-relaxed text-mist-300 sm:mt-7 sm:text-[17.5px]">
          Dedicated to every teacher who teaches, guides, supports, and inspires.
        </motion.p>

        <motion.div variants={word} className="mt-9 flex w-full flex-col items-center gap-3 sm:mt-11 sm:w-auto sm:flex-row">
          <Button href="#message" ariaLabel="Celebrate every teacher - scroll to message">
            Celebrate Every Teacher
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#appreciation" variant="ghost" ariaLabel="Explore the message">
            Explore the Message
          </Button>
        </motion.div>

        <motion.div variants={word} className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-16">
          {ROLE_WORDS.slice(0, 6).map((w) => (
            <span key={w} className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-mist-500 sm:text-[11px]">{w}</span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <span className="block h-9 w-[1px] bg-gradient-to-b from-transparent via-gold-400/60 to-transparent" />
      </motion.div>
    </section>
  )
}