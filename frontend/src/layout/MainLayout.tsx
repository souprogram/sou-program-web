import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';
import { useLayoutEffect, useState } from 'react';

export default function MainLayout() {
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
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
    <div
      className={`relative min-h-screen font-poppins ${animate && 'overflow-hidden'}`}
    >
      {animate && <SplashScreen />}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
