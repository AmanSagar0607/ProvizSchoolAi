import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';  // Add this import
import AdminDashboard from './AdminDashboard';
import Contact from './Contact';
import LandingPage from './LandingPage';
import { Navigate } from 'react-router-dom';
import './index.css';
import About from './About';
import Programs from './Programs';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/programs',
      element: <Programs/>,
    },
    {
      path: '/admin',
      element: <AdminLogin />,
    },
    {
      path: '/signup',
      element: <AdminSignup />,
    },
    {
      path: '/admin/dashboard',
      element: <AdminDashboard />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
