import { MainLayout } from './layouts/MainLayout'
import { Hero } from './sections/Hero'
import { Introduction } from './sections/Introduction'
import { TeacherRoles } from './sections/TeacherRoles'
import { Guidance } from './sections/Guidance'
import { Support } from './sections/Support'
import { Appreciation } from './sections/Appreciation'
import { BeyondClassroom } from './sections/BeyondClassroom'
import { Impact } from './sections/Impact'
import { InteractiveAppreciation } from './sections/InteractiveAppreciation'
import { FinalMessage } from './sections/FinalMessage'

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Introduction />
      <TeacherRoles />
      <Guidance />
      <Support />
      <Appreciation />
      <BeyondClassroom />
      <Impact />
      <InteractiveAppreciation />
      <FinalMessage />
    </MainLayout>
  )
}