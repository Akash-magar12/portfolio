import React, { useEffect } from "react";
import {
  Code,
  MapPin,
  User,
  Layers,
  ArrowRight,
  ExternalLink,
  Mail,
} from "lucide-react";

import TypeIt from "typeit-react";
import { learningStack, techColors, techStack } from "../utils/const";
import { Link } from "react-router";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="min-h-screen flex items-center sm:pt-20 justify-center bg-black sm:px-4 relative overflow-hidden">
      {/* Main content */}
      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-2 md:p-8">
        {/* Terminal header */}
        <div className="flex items-center justify-between pb-4 mt-20 sm:mt-0 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="hidden md:block text-yellow-400 text-sm md:text-base">
            // Frontend Developer
          </div>
          <div className="text-gray-500 text-xs">akash@dev/ ~</div>
        </div>

        {/* Terminal code content */}
        <div className="space-y-4">
          <div className="text-xl sm:text-2xl text-yellow-400 font-bold">
            const <span className="text-white">aboutMe</span> = {"{"}
          </div>

          <div className="ml-4 space-y-4">
            <div className="flex items-center">
              <User className="text-gray-500 mr-3" size={20} />
              <span className="text-base sm:text-lg">
                name: <span className="text-emerald-400">"Akash Budha"</span>,
              </span>
            </div>

            <div className="flex items-center">
              <Code className="text-gray-500 mr-3" size={20} />
              <span className="text-base sm:text-lg">
                role:{" "}
                <span className="text-emerald-400">"Frontend Developer"</span>,
              </span>
            </div>

            <div className="flex items-center">
              <MapPin className="text-gray-500 mr-3" size={20} />
              <span className="text-base sm:text-lg">
                location: <span className="text-emerald-400">"Dehradun"</span>,
              </span>
            </div>

            <div className="flex">
              <Layers className="text-gray-500 mr-3 mt-1" size={20} />
              <div className="text-base sm:text-lg">
                stack: [
                <div className="flex flex-wrap gap-2 mt-1 mb-1">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                      <span
                        key={index}
                        className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm border ${
                          techColors[tech.name] ||
                          "bg-white/10 text-white border-white/20"
                        }`}
                      >
                        <Icon />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
                ],
              </div>
            </div>

            {/* Learning Stack */}
            <div className="flex">
              <Layers className="text-gray-500 mr-3 mt-1" size={20} />
              <div className="text-base sm:text-lg">
                learning: [
                <div className="flex flex-wrap gap-2 mt-1 mb-1">
                  {learningStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={index}
                        className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm border ${
                          techColors[tech.name] ||
                          "bg-white/10 text-white border-white/20"
                        }`}
                      >
                        <Icon />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
                ],
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-base sm:text-lg">
                focus:{" "}
                <span className="text-emerald-400">
                  "
                  <TypeIt
                    options={{
                      strings: [
                        "Creating efficient and user-friendly web solutions",
                      ],
                      speed: 100,
                      cursor: true,
                      loop: true,
                      waitUntilVisible: true,
                    }}
                  />
                  "
                </span>
              </span>
            </div>
          </div>

          <div className="text-xl sm:text-2xl text-yellow-400 font-bold mt-2">
            {"}"}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              to={`/projects`}
              className="group flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300"
            >
              <span>getProjects()</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>

            <Link
              to={`/contact`}
              className="flex items-center justify-center border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 py-3 px-6 rounded-md font-medium transition-all duration-300"
            >
              <Mail className="mr-2 w-4 h-4" />
              <span>Contact()</span>
            </Link>

            <a
              href="/Akash_Budha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 py-3 px-6 rounded-md font-medium transition-all duration-300"
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              <span>Resume()</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
