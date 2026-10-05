import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const COLORS = ['#f7d99a', '#f2c879', '#e5b05a', '#fbeacb', '#9fb0e8', '#ffffff']

export function FinalCelebration() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const pieces = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const angle = (i / 30) * Math.PI * 2 + (i % 3) * 0.24
        const distance = 120 + ((i * 37) % 180)
        return {
          id: i,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance - 60,
          size: 3 + (i % 4),
          delay: (i % 9) * 0.07,
          duration: 1.9 + ((i * 13) % 90) / 100,
          color: COLORS[i % COLORS.length],
          rounded: i % 2 === 0,
        }
      }),
    []
  )

  return (
    <div ref={ref} className="pointer-events-none absolute left-1/2 top-4 h-0 w-0 -translate-x-1/2" aria-hidden="true">
      {!reduce && inView &&
        pieces.map((p) => (
          <motion.span
            key={p.id}
            className={p.rounded ? 'absolute rounded-full' : 'absolute rounded-[1px]'}
            style={{
              width: p.size,
              height: p.rounded ? p.size : p.size * 2.4,
              background: p.color,
              boxShadow: `0 0 8px ${p.color}66`,
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{ x: p.x, y: p.y, opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0.5], rotate: p.rounded ? 0 : 220 }}
            transition={{ duration: p.duration, delay: p.delay, ease: [0.16, 1, 0.3, 1], times: [0, 0.15, 0.7, 1] }}
          />
        ))}
    </div>
  )
}