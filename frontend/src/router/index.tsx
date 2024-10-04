import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
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
                const { RoboticsEventPage } = await import(
                  '../pages/events/robotics/RoboticsEventPage'
                );
                return { Component: RoboticsEventPage };
              },
            },
            {
              path: '/events/devops',
              async lazy() {
                const { DevOpsEventPage } = await import('../pages/events/devops/DevOpsEventPage');
                return { Component: DevOpsEventPage };
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
