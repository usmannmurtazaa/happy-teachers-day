import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  interactive?: boolean
  ariaLabel?: string
} & Omit<HTMLMotionProps<'div'>, 'children'>

export function GlassCard({ children, className = '', interactive = false, ariaLabel, ...rest }: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      {...rest}
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? 'group' : undefined}
      aria-label={ariaLabel}
      whileHover={interactive && !reduce ? { y: -4 } : undefined}
      whileTap={interactive && !reduce ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`glass group relative overflow-hidden rounded-3xl shadow-card transition-colors duration-500 hover:border-gold-400/25 focus-visible:border-gold-400/40 ${className}`}
    >
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />
      {children}
    </motion.div>
  )
}