import { Heart } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-5 pb-safe pt-14 sm:px-8 sm:pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10">
          <div>
            <p className="font-display text-[22px] font-medium tracking-tight text-mist-100 sm:text-[26px]">
              Happy Teacher’s Day
            </p>
            <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-relaxed text-mist-400 sm:text-[14.5px]">
              Thank you for the knowledge you share, the patience you give, and the difference
              you make - often without ever seeing it.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[12px] text-mist-500">
            <Heart className="h-3.5 w-3.5 text-gold-400/70" aria-hidden="true" />
            <span>Made with appreciation for every teacher</span>
          </div>

          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col items-center gap-3 pb-10 text-[12px] text-mist-500 sm:flex-row sm:gap-6 sm:pb-12">
            <span>© {year} Happy Teacher’s Day</span>

            <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />

            <span>
              Designed &amp; built by{' '}
              <a
                href="https://usmanmurtaza.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-300 underline decoration-gold-400/30 underline-offset-4 transition-colors hover:text-gold-200"
              >
                Usman Murtaza
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}