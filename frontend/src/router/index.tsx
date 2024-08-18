import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import JoinPage from '../pages/JoinPage';

export const MainRouter = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: '/', element: <HomePage /> },
        { path: '/join', element: <JoinPage /> },
      ])}
    />
  );
};
