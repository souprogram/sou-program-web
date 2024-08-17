import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SectionHero from './components/SectionHero';
import SectionJoin from './components/SectionJoin';
import SectionRobotics from './components/SectionRobotics';
import SectionWhatWeDo from './components/SectionWhatWeDo';

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
    <div className={`min-h-screen relative ${animate && 'overflow-hidden'}`}>
      {animate && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 min-h-screen bg-black opacity-50 text-white`}
        >
          Loading...
        </div>
      )}
      <NavBar />
      <SectionHero />
      <SectionWhatWeDo />
      <SectionRobotics />
      <SectionJoin />
      <Footer />
    </div>
  );
}

export default App;
