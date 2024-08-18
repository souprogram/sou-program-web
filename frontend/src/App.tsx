import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SectionHero from './components/SectionHero';
import SectionJoin from './components/SectionJoin';
import SectionRobotics from './components/SectionRobotics';
import SectionWhatWeDo from './components/SectionWhatWeDo';
import SectionSponsors from './components/SectionSponsors';
import SplashScreen from './components/SplashScreen';
import SectionCompetitions from './components/SectionCompetitions';

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (sessionStorage.getItem('firstVisit') === null) {
      console.log('first visit');
      sessionStorage.setItem('firstVisit', 'true');
      setAnimate(true);
      timer = setTimeout(() => {
        setAnimate(false);
      }, 3000);
    } else {
      console.log('not first visit');
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`relative min-h-screen ${animate && 'overflow-hidden'}`}>
      {animate && <SplashScreen />}
      <NavBar />
      <SectionHero />
      <SectionWhatWeDo />
      <SectionRobotics />
      <SectionCompetitions />
      <SectionSponsors />
      <SectionJoin />
      <Footer />
    </div>
  );
}

export default App;
