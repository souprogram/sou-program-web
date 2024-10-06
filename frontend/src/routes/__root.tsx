import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { QueryClient } from '@tanstack/react-query';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ScrollToTop from '../components/ScrollToTop';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});

function RootComponent() {
  return (
    <>
      <div className="relative flex min-h-dvh flex-col font-poppins">
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
