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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/yourusername" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { icon: <Twitter size={18} />, label: "Twitter", href: "https://twitter.com/yourusername" },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black text-white font-mono border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Terminal header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-green-400 text-sm md:text-base">
            // Footer.jsx
          </div>
          <div className="text-gray-500 text-xs">akash@dev ~</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Social links */}
          <div>
            <h3 className="text-emerald-400 text-lg mb-4 flex items-center">
              <Terminal size={18} className="mr-2" />
              <span>connect()</span>
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span>{link.label}</span>
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle column - Navigation */}
          <div>
            <h3 className="text-emerald-400 text-lg mb-4 flex items-center">
              <Code size={18} className="mr-2" />
              <span>navigate()</span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    &#123; <span className="text-yellow-400">{link.name}</span> &#125;
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Copyright */}
          <div>
            <h3 className="text-emerald-400 text-lg mb-4 flex items-center">
              <Coffee size={18} className="mr-2" />
              <span>info()</span>
            </h3>
            <div className="text-gray-400 space-y-3">
              <p className="flex items-center">
                <span className="text-emerald-400 mr-2">const</span> 
                <span className="text-yellow-400 mr-2">year</span> = {currentYear};
              </p>
              <div className="flex items-center">
                <span>built with</span>
                <Heart size={14} className="mx-2 text-red-400 fill-red-400" />
                <span>by Akash Budha</span>
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