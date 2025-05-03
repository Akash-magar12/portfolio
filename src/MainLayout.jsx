import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-[#000] text-white">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
