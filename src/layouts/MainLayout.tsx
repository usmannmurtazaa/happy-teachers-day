import type { ReactNode } from 'react'
import { GlowBackground } from '../components/animations/GlowBackground'
import { Nav } from '../components/navigation/Nav'
import { Footer } from '../components/layout/Footer'
import { CreatorCard } from '../components/layout/CreatorCard'   // ← ADD

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#message"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900"
      >
        Skip to content
      </a>

      <GlowBackground />
      <Nav />

      <main id="top" className="relative z-10">
        {children}
        <CreatorCard />   {/* ← ADD */}
      </main>

      <Footer />
    </>
  )
}