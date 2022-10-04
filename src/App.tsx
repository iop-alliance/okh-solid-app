import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./businessLogic/authGlobalHook";
import Layout from './Layout';
import Dashboard from './Dashboard';
import ProjectDetails from './ProjectPage';
import { projectLoader } from './businessLogic/projects';

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
