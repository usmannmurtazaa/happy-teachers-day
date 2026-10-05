import { motion } from 'framer-motion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TeacherRoleCard } from '../components/cards/TeacherRoleCard'
import { MORE_THAN_TEACHER } from '../data/content'
import { staggerParent } from '../animations/variants'
import { ScrollReveal } from '../components/ui/ScrollReveal'

export function TeacherRoles() {
  return (
    <section aria-labelledby="more-title" className="relative px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          id="more-title"
          eyebrow="Beyond the syllabus"
          title={<>More than a <span className="text-gradient-gold">teacher</span></>}
          subtitle="Teaching extends far beyond delivering a lesson. It shows up in the ways a teacher guides, mentors, supports, and inspires - often without ever knowing it."
        />

        <motion.ul
          variants={staggerParent(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-70px' }}
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {MORE_THAN_TEACHER.map(({ icon, title, text }, i) => (
            <TeacherRoleCard key={title} icon={icon} title={title} text={text} delay={i * 0.05} />
          ))}
        </motion.ul>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center text-[13.5px] leading-relaxed text-mist-400 sm:mt-12 sm:text-sm">
            Every one of these roles is played quietly, often without recognition - and often for years after a student has left the classroom.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}