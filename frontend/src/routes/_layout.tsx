import { createFileRoute, Outlet } from '@tanstack/react-router';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ScrollToTop from '@/components/ScrollToTop';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="font-inter relative min-h-screen">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
