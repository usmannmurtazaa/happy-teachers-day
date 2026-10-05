import { useMemo } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function FloatingParticles({ count = 12 }: { count?: number }) {
  const reduce = useReducedMotion()

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const seed = (i * 137) % 100
        return {
          left: `${(seed * 0.9 + 4) % 96}%`,
          top: `${((i * 53) % 88) + 6}%`,
          size: 2 + (i % 3),
          delay: `${-(i * 0.7)}s`,
          duration: `${7 + (i % 5)}s`,
          opacity: 0.22 + ((i * 11) % 30) / 100,
        }
      }),
    [count]
  )

  if (reduce) return null

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold-300/60 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
            boxShadow: '0 0 8px 1px rgba(242,200,121,0.35)',
          }}
        />
      ))}
    </div>
  )
}