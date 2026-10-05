import { motion, useReducedMotion } from 'framer-motion'
import { HeartHandshake } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { creator } from '../../data/creator'

export function CreatorCard() {
  const reduce = useReducedMotion()

  return (
    <section
      aria-labelledby="creator-card-title"
      className="relative px-5 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-8"
    >
      <div className="mx-auto w-full max-w-3xl">
        <ScrollReveal>
          <motion.article
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="glass-strong group relative overflow-hidden rounded-[28px] p-6 shadow-card sm:p-9"
          >
            {/* Ambient glows - matches existing visual system */}
            <span
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gold-400/12 blur-[90px] transition-opacity duration-700 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#4a63a8]/16 blur-[90px]"
              aria-hidden="true"
            />

            {/* Fine top hairline accent */}
            <span
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent sm:inset-x-10"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-7 sm:text-left">
              {/* Photo */}
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative shrink-0"
              >
                <span
                  className="absolute inset-0 -m-1.5 rounded-full bg-gradient-to-br from-gold-300/40 via-gold-400/10 to-transparent blur-md"
                  aria-hidden="true"
                />
                <img
                  src={creator.photoUrl}
                  alt={creator.photoAlt}
                  loading="lazy"
                  decoding="async"
                  width={112}
                  height={112}
                  className="relative h-[96px] w-[96px] rounded-full border border-gold-400/30 object-cover shadow-[0_0_40px_-12px_rgba(242,200,121,0.55)] ring-1 ring-white/10 sm:h-[112px] sm:w-[112px]"
                />
              </motion.div>

              {/* Text content */}
              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/[0.07] px-3.5 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-gold-300 sm:text-[11px]">
                  <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
                  {creator.eyebrow}
                </span>

                <h3
                  id="creator-card-title"
                  className="mt-4 font-display text-[clamp(1.15rem,5vw,1.6rem)] font-medium leading-snug tracking-tight text-mist-100"
                >
                  {creator.headline}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-mist-300 sm:text-[15px]">
                  {creator.message}
                </p>

                {/* Identity block */}
                <div className="mt-6 flex flex-col items-center gap-1 border-t border-white/8 pt-5 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-display text-[17px] font-medium tracking-tight text-gradient-gold sm:text-[18px]">
                    {creator.name}
                  </span>
                  <span
                    className="hidden h-3 w-px bg-white/15 sm:block"
                    aria-hidden="true"
                  />
                  <span className="text-[12.5px] font-medium tracking-tight text-mist-400 sm:text-[13px]">
                    {creator.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        </ScrollReveal>
      </div>
    </section>
  )
}