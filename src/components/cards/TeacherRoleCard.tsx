import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { EASE_OUT } from '../../animations/variants'

export function TeacherRoleCard({ icon: Icon, title, text, delay = 0 }: { icon: LucideIcon; title: string; text: string; delay?: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.li
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.75, delay, ease: EASE_OUT }}
      className="group relative"
    >
      <motion.div
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="glass relative h-full overflow-hidden rounded-3xl p-6 shadow-card sm:p-7"
      >
        <span className="relative mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold-400/20 bg-gradient-to-br from-gold-400/15 to-transparent">
          <Icon className="h-[22px] w-[22px] text-gold-300" aria-hidden="true" />
        </span>
        <h3 className="relative font-display text-[21px] font-medium tracking-tight text-mist-100 sm:text-[23px]">{title}</h3>
        <p className="relative mt-3 text-[14.5px] leading-relaxed text-mist-300 sm:text-[15px]">{text}</p>
      </motion.div>
    </motion.li>
  )
}