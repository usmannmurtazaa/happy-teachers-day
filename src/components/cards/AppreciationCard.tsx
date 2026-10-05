import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export function AppreciationCard({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      tabIndex={0}
      role="group"
      aria-label={text}
      whileTap={reduce ? undefined : { scale: 0.975 }}
      whileHover={reduce ? undefined : { y: -5 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      className="glass group relative h-full cursor-default overflow-hidden rounded-3xl p-6 outline-none transition-colors duration-500 hover:border-gold-400/25 focus-visible:border-gold-400/40 sm:p-7"
    >
      <span className="relative mb-6 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] transition-colors duration-500 group-hover:border-gold-400/30">
        <Icon className="h-[19px] w-[19px] text-gold-300" aria-hidden="true" />
      </span>
      <p className="relative font-display text-[19px] font-medium leading-snug tracking-tight text-mist-100 sm:text-[20px]">{text}</p>
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent transition-transform duration-700 group-hover:scale-x-100 group-focus-visible:scale-x-100"
        aria-hidden="true"
      />
    </motion.div>
  )
}