import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../utils/const";
import { Link } from "react-router";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("getAboutMe()");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full text-white shadow-lg z-50 py-4 px-2 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="sm:text-xl font-mono font-bold text-emerald-400">
              <span className="text-white">const</span> myPortfolio{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-yellow-400">&#123;</span>
              {"Akash"}
              <span className="text-yellow-400">&#125;</span>
            </div>

            {/* Desktop Nav Items */}
            <ul className="hidden lg:flex gap-2 items-center font-mono text-gray-300">
              <li className="text-yellow-400 font-bold">{"{"}</li>
              {navItems.map((item, index) => (
                <Link
                  to={`/${item.link}`}
                  key={item.label}
                  className={`cursor-pointer transition-all duration-300 hover:text-emerald-400 ${
                    activeItem === item.label
                      ? "text-emerald-400 font-bold"
                      : "text-gray-300"
                  }`}
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.label}
                  {index !== navItems.length - 1 && (
                    <span className="text-white">,</span>
                  )}
                </Link>
              ))}
              <li className="text-yellow-400 font-bold">{"}"}</li>
            </ul>

            {/* Mobile Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button
                ref={toggleButtonRef}
                className="text-white hover:text-emerald-400 z-50"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 md:w-80 bg-black z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-4 font-mono">
          {/* Terminal Header */}
          <div className="flex items-center mb-6 border-b border-gray-700 pb-4">
            <span className="text-green-400">~/</span>
            <span className="text-yellow-400 ml-1">navigation</span>
            <span className="text-gray-400 ml-1 animate-pulse">_</span>
          </div>

          {/* Mobile Nav Items */}
          <ul className="flex flex-col gap-6 text-gray-300">
            <li className="text-yellow-400 font-bold">{"{"}</li>
            {navItems.map((item, index) => (
              <Link
                to={`/${item.link}`}
                key={item.label}
                className={`cursor-pointer transition-all duration-300 hover:text-emerald-400 pl-4 ${
                  activeItem === item.label
                    ? "text-emerald-400 font-bold"
                    : "text-gray-300"
                }`}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsSidebarOpen(false);
                }}
              >
                {item.label}
                {index !== navItems.length - 1 && (
                  <span className="text-white">,</span>
                )}
              </Link>
            ))}
            <li className="text-yellow-400 font-bold">{"}"}</li>
          </ul>

          {/* Bottom comment */}
          <div className="mt-auto text-gray-600 text-xs">
            <span className="text-green-400">// </span>
            <span>Choose a section to navigate</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
