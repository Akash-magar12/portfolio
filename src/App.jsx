import React from "react";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./Components/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/skills", element: <Skills /> },
        { path: "/education", element: <Education /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
