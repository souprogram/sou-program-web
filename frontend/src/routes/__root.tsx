<<<<<<< Updated upstream
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import NoFoundComponent from '@/components/NoFoundComponent'
import ScrollToTop from '@/components/ScrollToTop'
import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NoFoundComponent,
})
=======
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ScrollToTop from '@/components/ScrollToTop';
import { TransparentLinkButton } from '@/components/ui/LinkButton';
import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { HiArrowLeft } from 'react-icons/hi';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div className="flex flex-col justify-center">
        <div className="relative bg-neutral-900 text-center text-gray-200">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <img src={SPLogoTransparent} alt="Sou program logo" className="h-[40rem] w-[40rem]" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
            <h3 className="font-brioni pb-4 text-3xl text-white">404 Not found.</h3>
            <div className="flex justify-center">
              <TransparentLinkButton
                to="/"
                icon={<HiArrowLeft />}
                label="Nazad na početnu stranicu"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
});
>>>>>>> Stashed changes

function RootComponent() {
  return (
    <>
<<<<<<< Updated upstream
      <div className="relative flex min-h-dvh flex-col font-inter text-gray-300">
=======
      <div className="font-poppins relative flex min-h-dvh flex-col">
>>>>>>> Stashed changes
        <ScrollToTop />
        <NavBar />

        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>

        <Footer />
      </div>
      {/* <ReactQueryDevtools buttonPosition="top-right" /> */}
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  )
}
