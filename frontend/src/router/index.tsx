import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

export const MainRouter = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <MainLayout />,
          children: [
            {
              path: '/',
              async lazy() {
                const { HomePage } = await import('../pages/HomePage');
                return { Component: HomePage };
              },
            },
            {
              path: '/join',
              async lazy() {
                const { JoinPage } = await import('../pages/JoinPage');
                return { Component: JoinPage };
              },
            },
            {
              path: '/events/robotics',
              async lazy() {
                const { RoboticsEventPage } = await import('../pages/RoboticsEventPage');
                return { Component: RoboticsEventPage };
              },
            },
          ],
        },
        {
          path: '/thank-you',
          async lazy() {
            const { ThankYouPage } = await import('../layout/ThankYouPage');
            return { Component: ThankYouPage };
          },
        },
      ] as const satisfies RouteObject[])}
    />
  );
};
