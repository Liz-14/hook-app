import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css'
import { LoginPage, HomePage, AboutPage } from './09-useContext';
import { ErrorPage } from './errorPage/ErrorPage';
//import './08-useReducer/intro-reducer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HooksApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "aboutPage",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
