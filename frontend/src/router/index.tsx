import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import JoinPage from '../pages/JoinPage';
import MainLayout from '../layout/MainLayout';

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
          ],
        },
      ])}
    />
  );
};
