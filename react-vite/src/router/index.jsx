import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import MuseumsPage from '../components/MuseumsPage';
import MuseumDetailsPage from '../components/MuseumDetailsPage';
import CreateMuseumPage from '../components/CreateMuseumPage';
import UpdateMuseumPage from '../components/UpdateMuseumPage';
import LandingPage from '../components/LandingPage';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "museums",
        element: <MuseumsPage />
      },
      {
        path: "museums/:museumId",
        element: <MuseumDetailsPage />
      },
      {
        path: "museums/new",
        element: <CreateMuseumPage />
      },
      {
        path: "museums/:museumId/edit",
        element: <UpdateMuseumPage />
      }
    ],
  },
]);
