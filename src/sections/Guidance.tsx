import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { GUIDANCE_POINTS } from '../data/content'

export function Guidance() {
  return (
    <section aria-labelledby="guidance-title" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gold-300/90">
                <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
                Your guidance
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <blockquote className="relative mt-7">
                <Quote className="absolute -left-1 -top-6 h-10 w-10 text-gold-400/15 sm:-left-4 sm:-top-8 sm:h-14 sm:w-14" aria-hidden="true" />
                <p id="guidance-title" className="relative font-display text-[clamp(1.6rem,6.4vw,3rem)] font-medium leading-[1.16] tracking-tightest text-mist-100">
                  Direction is often given long before it is <span className="text-gradient-gold">understood.</span>
                </p>
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.85] text-mist-300 sm:text-[16.5px]">
                Teachers rarely see the moment their words land. Yet the guidance given in a corridor, written in the margin of a page, or offered after a difficult result can stay with a student for years - quietly shaping the choices they make.
              </p>
            </ScrollReveal>
          </div>

          <ul className="space-y-3.5 sm:space-y-4">
            {GUIDANCE_POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 28, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="glass relative overflow-hidden rounded-2xl px-5 py-5 sm:px-6">
                  <div className="flex items-start gap-3.5">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400 shadow-[0_0_10px_2px_rgba(242,200,121,0.45)]" aria-hidden="true" />
                    <p className="text-[14.5px] leading-relaxed text-mist-200 sm:text-[15.5px]">{point}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}