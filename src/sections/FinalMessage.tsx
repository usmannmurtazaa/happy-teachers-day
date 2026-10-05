import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { FinalCelebration } from '../components/animations/FinalCelebration'
import { FINAL_AFFIRMATIONS } from '../data/content'

export function FinalMessage() {
  return (
    <section aria-labelledby="final-title" className="relative px-5 pb-28 pt-16 sm:px-8 sm:pb-36 sm:pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative mx-auto max-w-3xl text-center">
          <FinalCelebration />

          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/[0.07] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-300">
              <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-gold-400" aria-hidden="true" />
              With gratitude
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 id="final-title" className="mt-7 font-display text-[clamp(1.9rem,8.4vw,3.9rem)] font-semibold leading-[1.06] tracking-tightest text-mist-100">
              Today, We <span className="text-gradient-gold">Celebrate You.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-[15.5px] leading-[1.9] text-mist-200/90 sm:text-[17.5px]">
              To every teacher who teaches with patience, guides with purpose, supports with kindness, and inspires through their example - thank you.
            </p>
          </ScrollReveal>

          <ul className="mt-10 grid grid-cols-1 gap-2.5 sm:mt-14 sm:grid-cols-2 sm:gap-3">
            {FINAL_AFFIRMATIONS.map((line, i) => (
              <motion.li
                key={line}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-2xl px-5 py-4 text-[14.5px] font-medium tracking-tight text-mist-100 sm:text-[15.5px]"
              >
                {line}
              </motion.li>
            ))}
          </ul>

          <ScrollReveal delay={0.24}>
            <div className="mx-auto mt-14 h-px w-32 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent sm:mt-20" />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-12 font-display text-[clamp(2rem,10vw,4.5rem)] font-semibold leading-none tracking-tightest sm:mt-16">
              <span className="text-gradient-gold">Happy Teacher’s Day</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.36}>
            <p className="mt-6 text-[13px] leading-relaxed text-mist-400 sm:text-sm">
              Wherever you teach, and whoever you teach - this was made for you.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}