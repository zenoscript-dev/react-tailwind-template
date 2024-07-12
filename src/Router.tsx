import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App';
import NotFoundPage from './pages/NotFoundPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;