import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Heart,
  Coffee,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
      href: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <Twitter size={18} />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
    },
  ];

  const navLinks = [
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
    { name: "Education", href: "education" },
  ];

  return (
    <footer className="bg-black text-white font-mono py-8 px-4">
      <div className="max-w-6xl mx-auto bg- border border-gray-700 rounded-lg shadow-md overflow-hidden p-6">
        {/* Terminal header */}
        <div className="flex items-center justify-between w-full pb-4 border-b border-gray-700 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="hidden md:block text-yellow-400 text-sm md:text-base">
            // Footer.jsx
          </div>
          <div className="text-gray-500 text-xs text-right">akash@dev ~</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Social links */}
          <div>
            <h3 className="text-md sm:text-xl text-yellow-400 font-bold mb-4 flex items-center">
              <Terminal size={18} className="mr-2" />
              <span className="text-white">connect</span>()
            </h3>
            <ul className="space-y-3 ml-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <span className="mr-2 text-gray-500">{link.icon}</span>
                    <span>{link.label}</span>
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle column - Navigation */}
          <div>
            <h3 className="text-md sm:text-xl text-yellow-400 font-bold mb-4 flex items-center">
              <Code size={18} className="mr-2" />
              <span className="text-white">navigate</span>()
            </h3>
            <ul className="space-y-3 ml-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={`/${link.href}`}
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {`{ `}
                    <span className="text-emerald-400">{`"${link.name}"`}</span>
                    {` }`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Info */}
          <div>
            <h3 className="text-md sm:text-xl text-yellow-400 font-bold mb-4 flex items-center">
              <Coffee size={18} className="mr-2" />
              <span className="text-white">info</span>()
            </h3>
            <div className="text-gray-400 space-y-3 ml-4">
              <p className="flex items-center">
                <span className="text-yellow-400 mr-2">const</span>
                <span className="text-white mr-2">year</span> =
                <span className="text-emerald-400 ml-2">{currentYear}</span>;
              </p>
              <div className="flex items-center">
                <span>built with</span>
                <Heart size={14} className="mx-2 text-red-400 fill-red-400" />
                <span>
                  by <span className="text-emerald-400">Akash Budha</span>
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                // All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
