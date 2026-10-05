import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { QUALITIES } from '../data/content'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export function BeyondClassroom() {
  return (
    <section aria-labelledby="lessons-title" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          id="lessons-title"
          eyebrow="Beyond academics"
          title={<>Lessons beyond the <span className="text-gradient-gold">classroom</span></>}
          subtitle="The most lasting things a teacher passes on are rarely written on a board. They are qualities students carry into everything else they do."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {QUALITIES.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="glass relative flex h-full flex-col items-center gap-3.5 overflow-hidden rounded-2xl px-4 py-6 text-center transition-colors duration-500 hover:border-gold-400/25 sm:px-5 sm:py-7">
                <span className="relative grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-[18px] w-[18px] text-gold-300" aria-hidden="true" />
                </span>
                <span className="relative text-[12.5px] font-medium leading-snug tracking-tight text-mist-200 sm:text-[13.5px]">{label}</span>
              </div>
            </motion.li>
          ))}
        </ul>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[14.5px] leading-[1.85] text-mist-300 sm:mt-14 sm:text-[16px]">
            These are not taught in a single lecture. They are built slowly - through expectation, through correction, through patience, and through the example a teacher sets every day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}