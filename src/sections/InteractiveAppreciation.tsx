import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { INTERACTIVE_MESSAGES } from '../data/content'

export function InteractiveAppreciation() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)

  const message = INTERACTIVE_MESSAGES[index]

  const next = useCallback(() => {
    setIndex((prev) => {
      let n = Math.floor(Math.random() * INTERACTIVE_MESSAGES.length)
      if (n === prev) n = (n + 1) % INTERACTIVE_MESSAGES.length
      return n
    })
    setCount((c) => c + 1)
  }, [])

  return (
    <section aria-labelledby="interactive-title" className="relative px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          id="interactive-title"
          eyebrow="A message for you"
          title={<>Tap to discover a message for <span className="text-gradient-gold">every teacher</span></>}
          subtitle="There is more than one thing to say. Each tap reveals another message - read as many as you like."
        />

        <ScrollReveal delay={0.16}>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-16">
            <div className="glass-strong relative overflow-hidden rounded-[28px] p-6 shadow-card sm:p-10">
              <span className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gold-400/12 blur-[90px]" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#4a63a8]/16 blur-[90px]" aria-hidden="true" />

              <div className="relative flex min-h-[9.5rem] items-center justify-center sm:min-h-[11rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={index}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    aria-live="polite"
                    className="px-1 text-center font-display text-[clamp(1.15rem,5.2vw,1.85rem)] font-medium leading-[1.35] tracking-tight text-mist-100"
                  >
                    {message}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="relative mt-8 flex flex-col items-center gap-5">
                <motion.button
                  type="button"
                  onClick={next}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-6 py-3.5 text-[14.5px] font-semibold tracking-tight text-gold-200 transition-colors duration-300 hover:bg-gold-400/18 hover:text-gold-100 sm:w-auto sm:px-8"
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span>{count === 0 ? 'Reveal a message' : 'Reveal another message'}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </motion.button>

                <div className="flex flex-wrap items-center justify-center gap-1.5" aria-hidden="true">
                  {INTERACTIVE_MESSAGES.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-5 bg-gold-400' : 'w-1 bg-white/15'}`}
                    />
                  ))}
                </div>

                <p className="text-[11.5px] tracking-wide text-mist-500">
                  {count === 0 ? `${INTERACTIVE_MESSAGES.length} messages waiting` : `${count} ${count === 1 ? 'message' : 'messages'} revealed`}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}