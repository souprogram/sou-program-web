import { useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ScrollToTop from '../components/ScrollToTop';
import SplashScreen from '../components/SplashScreen';

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
      }, 2000);
    } else {
      console.log('not first visit');
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`relative min-h-screen ${animate && 'overflow-hidden'}`}
      style={{
        fontFamily:
          'ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Apple Color Emoji,Arial,sans-serif,Segoe UI Emoji,Segoe UI Symbol',
      }}
    >
      <ScrollToTop />
      {animate && <SplashScreen />}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
