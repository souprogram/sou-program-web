import SectionCompetitions from '../components/SectionCompetitions';
import SectionContact from '../components/SectionContact';
import SectionCTA from '../components/SectionCTA';
import SectionHero from '../components/SectionHero';
import SectionRobotics from '../components/SectionRobotics';
import SectionSponsors from '../components/SectionSponsors';
import SectionWhatWeDo from '../components/SectionWhatWeDo';

function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionWhatWeDo />
      <SectionRobotics />
      <SectionCompetitions />
      <SectionCTA />
      <SectionSponsors />
      <SectionContact />
    </>
  );
}

export default HomePage;
