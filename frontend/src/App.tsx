import { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Footer from './components/Footer';
import { MainRouter } from './router';

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
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
