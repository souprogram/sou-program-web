import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SectionHero from './components/SectionHero';
import SectionJoin from './components/SectionJoin';
import SectionRobotics from './components/SectionRobotics';
import SectionWhatWeDo from './components/SectionWhatWeDo';
import SectionSponsors from './components/SectionSponsors';

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
      {animate && (
        <div
          className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black text-white opacity-50`}
        >
          Loading...
        </div>
      )}
      <NavBar />
      <SectionHero />
      <SectionWhatWeDo />
      <SectionRobotics />
      <SectionSponsors />
      <SectionJoin />
      <Footer />
    </div>
  );
}

export default App;
