import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ScrollToTop from '../components/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen font-poppins">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
