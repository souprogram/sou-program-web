import { createFileRoute } from '@tanstack/react-router'
import SectionCompetitions from '@/components/home-page/SectionCompetitions'
import SectionContact from '@/components/home-page/SectionContact'
import SectionCTA from '@/components/home-page/SectionCTA'
import SectionHero from '@/components/home-page/SectionHero'
import SectionEvents from '@/components/home-page/SectionEvents'
import SectionSponsors from '@/components/home-page/SectionSponsors'
import SectionWhatWeDo from '@/components/home-page/SectionWhatWeDo'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionWhatWeDo />
      <SectionEvents />
      <SectionCompetitions />
      <SectionCTA />
      <SectionSponsors />
      <SectionContact />
    </>
  )
}
