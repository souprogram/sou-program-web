import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import NoFoundComponent from '@/components/NoFoundComponent';
import ScrollToTop from '@/components/ScrollToTop';
import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NoFoundComponent,
});

function RootComponent() {
  return (
    <>
      <div className="font-poppins relative flex min-h-dvh flex-col text-gray-300">
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
  );
}
