import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./businessLogic/authGlobalHook";
import Layout from './Layout';
import Dashboard from './Dashboard';
import ProjectDetails from './ProjectPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: "projects/:projectId",
          element: <ProjectDetails />
        }
      ]
    }
  ])

  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
