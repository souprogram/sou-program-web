import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SectionHero from './components/SectionHero';
import SectionJoin from './components/SectionJoin';
import SectionRobotics from './components/SectionRobotics';
import SectionWhatWeDo from './components/SectionWhatWeDo';

function App() {
  return (
    <>
      <NavBar />
      <SectionHero />
      <SectionWhatWeDo />
      <SectionRobotics />
      <SectionJoin />
      <Footer />
    </>
  );
}

export default App;
