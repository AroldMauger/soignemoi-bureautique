import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Login from './components/Login/Login.jsx';
import NotFound404 from './components/NotFound404/NotFound404.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import StayModal from './components/StayModal/StayModal.jsx';

const router = createBrowserRouter([
  {
    errorElement: <NotFound404/>, 
    children :[
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/dashboard/stays/:id",
        element: <StayModal/>
      },
    ],
  },
]);

// On entoure toute notre App avec le Provider de Redux.

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppProvider>
      <RouterProvider router={router} />
  </AppProvider>

)