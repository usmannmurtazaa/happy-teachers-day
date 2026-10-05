import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  ariaLabel?: string
} & Omit<HTMLMotionProps<'button'>, 'children' | 'onClick'>

export function Button({ children, variant = 'primary', href, onClick, className = '', ariaLabel, ...rest }: Props) {
  const reduce = useReducedMotion()

  const base =
    'group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[15px] font-semibold tracking-tight transition-transform duration-300 active:scale-[0.975] sm:w-auto sm:px-9 sm:text-base'

  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-b from-gold-300 to-gold-500 text-ink-900 shadow-glow'
      : 'border border-gold-400/30 bg-gold-400/10 text-gold-200 hover:bg-gold-400/18 hover:text-gold-100'

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && !reduce && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        className={`${base} ${styles} ${className}`}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...rest}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </motion.button>
  )
}