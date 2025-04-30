import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-[#000] text-white">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
