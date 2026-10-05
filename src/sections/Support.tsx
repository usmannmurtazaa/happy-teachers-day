import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SUPPORT_POINTS } from '../data/content'

export function Support() {
  return (
    <section aria-labelledby="support-title" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#3d5a9e]/14 blur-[130px]" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gold-300/90">
              <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
              Your support
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 id="support-title" className="mt-7 font-display text-[clamp(1.65rem,6.6vw,3.1rem)] font-medium leading-[1.14] tracking-tightest text-mist-100">
              Behind many students who kept trying was a teacher who reminded them that they <span className="text-gradient-gold">could.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.85] text-mist-300 sm:text-[16.5px]">
              Support is not always loud. Sometimes it is a second explanation. Sometimes it is patience through a difficult term. Sometimes it is simply being present when things were not going well.
            </p>
          </ScrollReveal>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4">
          {SUPPORT_POINTS.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.075, ease: [0.16, 1, 0.3, 1] }}
              className="glass group flex items-start gap-3.5 rounded-2xl px-5 py-4 transition-colors duration-500 hover:border-gold-400/25"
            >
              <span className="mt-[9px] h-px w-4 shrink-0 bg-gold-400/60 transition-all duration-500 group-hover:w-6 group-hover:bg-gold-400" aria-hidden="true" />
              <span className="text-[14.5px] leading-relaxed text-mist-200 sm:text-[15px]">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}