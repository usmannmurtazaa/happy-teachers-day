import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Introduction() {
  return (
    <section id="message" aria-labelledby="intro-title" className="relative px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-3xl text-center">
        <SectionHeading
          id="intro-title"
          eyebrow="A quiet truth"
          title={<>Some lessons stay with us <span className="text-gradient-gold">long after the classroom ends.</span></>}
        />
        <div className="mt-8 space-y-5 text-left sm:mt-10 sm:text-center">
          <ScrollReveal delay={0.16}>
            <p className="text-[15.5px] leading-[1.85] text-mist-200/90 sm:text-[17px]">
              Not the formulas, not the dates, not the definitions we memorised for a test - but the way someone spoke to us when we were struggling. The moment they waited a little longer for an answer. The time they said, without hesitation, that we were capable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="text-[15.5px] leading-[1.85] text-mist-300 sm:text-[17px]">
              Teaching is rarely only about a subject. It is knowledge shared patiently. It is guidance offered without being asked. It is encouragement given at exactly the moment it was needed. It is example, more than instruction.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <p className="text-[15.5px] leading-[1.85] text-mist-300 sm:text-[17px]">
              This page exists for every teacher - in every classroom, department, and discipline. Whatever you teach, wherever you teach, and whoever you teach: this is for you.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.34}>
          <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent sm:mt-12" />
        </ScrollReveal>
      </div>
    </section>
  )
}