import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export function Impact() {
  const reduce = useReducedMotion()

  return (
    <section id="impact" aria-labelledby="impact-title" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 flex justify-center lg:order-1">
            <div className="relative aspect-square w-full max-w-[22rem] sm:max-w-[26rem]">
              <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id="impactGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f2c879" stopOpacity="0.22" />
                    <stop offset="70%" stopColor="#f2c879" stopOpacity="0.03" />
                    <stop offset="100%" stopColor="#f2c879" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="rippleStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f2c879" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#8ea3e0" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="190" fill="url(#impactGlow)" />
                {[60, 96, 132, 168, 190].map((r, i) => (
                  <motion.circle
                    key={r} cx="200" cy="200" r={r} stroke="url(#rippleStroke)"
                    strokeWidth={i === 0 ? 1.2 : 0.7} strokeOpacity={1 - i * 0.16}
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: '200px 200px' }}
                  />
                ))}
                {!reduce && [96, 132, 168].map((r, i) => (
                  <motion.circle
                    key={`dot-${r}`} r="2.6" fill="#f2c879"
                    initial={{ rotate: i * 90 }} animate={{ rotate: i * 90 + 360 }}
                    transition={{ duration: 16 + i * 6, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '200px 200px' }}
                    cx={200 + r} cy={200} opacity={0.75 - i * 0.15}
                  />
                ))}
                <motion.circle
                  cx="200" cy="200" r="30" fill="#f2c879" fillOpacity="0.09" stroke="#f2c879" strokeOpacity="0.4" strokeWidth="0.9"
                  initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: '200px 200px' }}
                />
                <motion.circle
                  cx="200" cy="200" r="10" fill="#f7d99a"
                  animate={reduce ? {} : { opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              id="impact-title"
              align="left"
              eyebrow="The impact"
              title={<>A teacher may never see the <span className="text-gradient-gold">full impact</span> of their work.</>}
            />
            <div className="mt-7 space-y-5">
              <ScrollReveal delay={0.14}>
                <p className="text-[15px] leading-[1.85] text-mist-200/90 sm:text-[16.5px]">
                  Students move on. They change cities, change fields, change lives. The lesson continues somewhere a teacher cannot see it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[15px] leading-[1.85] text-mist-300 sm:text-[16.5px]">
                  A sentence spoken years ago becomes a decision made today. A standard once insisted upon becomes a habit. A belief someone planted becomes confidence carried into a room full of strangers.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.26}>
                <p className="text-[15px] leading-[1.85] text-mist-300 sm:text-[16.5px]">
                  That is the quiet mathematics of teaching: the results arrive later, in places you will never be credited for - and they last far longer than any exam result.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}