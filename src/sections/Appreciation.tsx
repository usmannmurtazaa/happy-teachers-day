import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { AppreciationCard } from '../components/cards/AppreciationCard'
import { APPRECIATION_CARDS } from '../data/content'
import { staggerParent, cardChild } from '../animations/variants'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export function Appreciation() {
  return (
    <section id="appreciation" aria-labelledby="appreciation-title" className="relative px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          id="appreciation-title"
          eyebrow="From every student"
          title={<>Thank you, <span className="text-gradient-gold">Teacher</span></>}
          subtitle="Six simple things that students rarely say out loud - but almost always mean."
        />

        <motion.ul
          variants={staggerParent(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-70px' }}
          className="mt-12 grid grid-cols-1 gap-3.5 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
        >
          {APPRECIATION_CARDS.map(({ icon, text }) => (
            <motion.li key={text} variants={cardChild}>
              <AppreciationCard icon={icon} text={text} />
            </motion.li>
          ))}
        </motion.ul>

        <ScrollReveal delay={0.2}>
          <p className="mt-10 text-center text-[13px] leading-relaxed text-mist-400 sm:mt-12 sm:text-sm">
            And for everything you did that we never noticed at the time - thank you.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}