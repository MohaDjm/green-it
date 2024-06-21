import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/accomodation/:id',
    element: <Accomodation />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
