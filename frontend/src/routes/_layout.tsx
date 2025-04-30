import { createFileRoute, Outlet } from '@tanstack/react-router'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ScrollToTop from '@/components/ScrollToTop'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
<<<<<<< Updated upstream
    <div className="relative min-h-screen font-inter">
=======
    <div className="font-poppins relative min-h-screen">
>>>>>>> Stashed changes
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
