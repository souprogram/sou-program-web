import SectionCompetitions from '../components/SectionCompetitions';
import SectionContact from '../components/SectionContact';
import SectionCTA from '../components/SectionCTA';
import SectionHero from '../components/SectionHero';
import SectionRobotics from '../components/SectionRobotics';
import SectionSponsors from '../components/SectionSponsors';
import SectionWhatWeDo from '../components/SectionWhatWeDo';

export const HomePage = () => {
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
