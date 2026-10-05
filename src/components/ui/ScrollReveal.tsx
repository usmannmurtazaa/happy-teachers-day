import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { EASE_OUT } from '../../animations/variants'

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}

export function ScrollReveal({ children, delay = 0, y = 26, className, as = 'div' }: Props) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.75, delay, ease: EASE_OUT }}
    >
      {children}
    </Comp>
  )
}