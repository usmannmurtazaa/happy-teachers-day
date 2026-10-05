import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { NAV_ITEMS } from '../../data/content'

export function Nav() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50 pt-safe"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <a href="#home" className="hidden items-center gap-2.5 rounded-full px-1 py-1 sm:flex" aria-label="Happy Teacher’s Day - home">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gold-400/12 ring-1 ring-gold-400/25">
            <span className="font-display text-[15px] font-semibold text-gold-300">T</span>
            <span className="absolute inset-0 rounded-full bg-gold-400/20 blur-md" aria-hidden="true" />
          </span>
          <span className="font-display text-[15px] font-medium tracking-tight text-mist-200/90">
            Happy Teacher’s Day
          </span>
        </a>

        <div className={`mx-auto flex items-center gap-0.5 rounded-full p-1 transition-all duration-500 sm:mx-0 ${scrolled ? 'glass-strong shadow-card' : 'glass'}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-full px-3 py-2 text-[12.5px] font-medium tracking-tight transition-colors duration-300 sm:px-4 sm:text-[13.5px] ${
                  isActive ? 'text-ink-900' : 'text-mist-300 hover:text-mist-100'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-gold-300 to-gold-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </div>

        <div className="hidden w-[168px] sm:block" aria-hidden="true" />
      </nav>
    </motion.header>
  )
}