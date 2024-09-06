import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import JoinPage from '../pages/JoinPage';
import RoboticsEventPage from '../pages/RoboticsEventPage';
import ThankYouPage from '../pages/ThankYouPage';

export const MainRouter = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <MainLayout />,
          children: [
            { index: true, element: <HomePage /> },
            { path: '/join', element: <JoinPage /> },
            { path: '/robotics-event', element: <RoboticsEventPage /> },
            { path: '/thank-you', element: <ThankYouPage />}
          ],
        },
      ])}
    />
  );
};
