import { FloatingParticles } from './FloatingParticles'

export function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink-900" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, rgba(64,84,140,0.30) 0%, rgba(7,9,16,0) 60%), radial-gradient(90% 60% at 100% 110%, rgba(120,84,40,0.20) 0%, rgba(7,9,16,0) 65%)',
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-70" />

      <div className="absolute -left-24 top-[6%] h-[22rem] w-[22rem] rounded-full bg-[#3d5a9e]/25 blur-[110px] animate-drift" />
      <div className="absolute -right-28 top-[38%] h-[26rem] w-[26rem] rounded-full bg-gold-600/14 blur-[130px] animate-drift" style={{ animationDelay: '-6s' }} />
      <div className="absolute bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-[#6d4fa3]/18 blur-[120px] animate-drift" style={{ animationDelay: '-12s' }} />

      <FloatingParticles count={12} />

      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(140% 100% at 50% 50%, rgba(0,0,0,0) 40%, rgba(3,4,8,0.75) 100%)' }}
      />
    </div>
  )
}