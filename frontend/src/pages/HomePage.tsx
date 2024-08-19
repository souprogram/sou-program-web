import SectionHero from '../components/SectionHero';
import SectionRobotics from '../components/SectionRobotics';
import SectionWhatWeDo from '../components/SectionWhatWeDo';
import SectionSponsors from '../components/SectionSponsors';
import SectionCompetitions from '../components/SectionCompetitions';

function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionWhatWeDo />
      <SectionRobotics />
      <SectionCompetitions />
      <SectionSponsors />
    </>
  );
}

export default HomePage;
