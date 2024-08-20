import SectionHero from '../components/SectionHero';
import SectionRobotics from '../components/SectionRobotics';
import SectionWhatWeDo from '../components/SectionWhatWeDo';
import SectionSponsors from '../components/SectionSponsors';
import SectionCompetitions from '../components/SectionCompetitions';
import { SectionContact } from '../components/SectionContact';

function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionWhatWeDo />
      <SectionRobotics />
      <SectionCompetitions />
      <SectionSponsors />
      <SectionContact />
    </>
  );
}

export default HomePage;
