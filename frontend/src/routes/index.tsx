import SectionCompetitions from '@/components/home-page/SectionCompetitions';
import SectionCTA from '@/components/home-page/SectionCTA';
import SectionEvents from '@/components/home-page/SectionEvents';
import SectionHero from '@/components/home-page/SectionHero';
import SectionWhatWeDo from '@/components/home-page/SectionWhatWeDo';
import SectionContact from '@/components/SectionContact';
import SectionSponsors from '@/components/SectionSponsors';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

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
  );
}
