import type { ReactNode } from 'react'
import { ScrollReveal } from './ScrollReveal'

export function SectionHeading({
  eyebrow, title, subtitle, id, align = 'center',
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  id?: string
  align?: 'center' | 'left'
}) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignCls}`}>
      {eyebrow && (
        <ScrollReveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gold-300/90">
            <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.06}>
        <h2 id={id} className="max-w-3xl font-display text-[clamp(1.75rem,7vw,3.25rem)] font-medium leading-[1.08] tracking-tightest text-mist-100">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-mist-300 sm:text-[16.5px]">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}