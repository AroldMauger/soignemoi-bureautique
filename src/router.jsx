import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Login from './components/Login/Login.jsx';
import NotFound404 from './components/NotFound404/NotFound404.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Guard from './components/Guard/Guard.jsx';

const router = createBrowserRouter([
  {
    errorElement: <NotFound404/>, 
    children :[
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/",
        children :[
          {
            path: "/dashboard",
            element: <Dashboard/>
          }
        ],
        element: <Guard/>  // permet de sécuriser les routes privées
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