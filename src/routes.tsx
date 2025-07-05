import { Navigate } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import FaqPage from './pages/FaqPage';
import GetStartedPage from './pages/GetStartedPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/faq',
    element: <FaqPage />,
  },
  {
    path: '/get-started',
    element: <GetStartedPage />,
  },
  {
    path: '/not-found',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to="/not-found" />,
  },
]);

export default routes;