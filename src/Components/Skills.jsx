import React, { useState, useEffect } from "react";
import { Code, Terminal, Server, Zap } from "lucide-react";
import { skillsData } from "../utils/const";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Define skillsData directly within the component
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Code size={20} />,
      color: "text-blue-400",
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <Server size={20} />,
      color: "text-green-400",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-black sm:px-4 py-16 relative"
    >
      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-2 md:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="hidden md:block text-yellow-400 text-sm md:text-base">
            // Skills
          </div>
          <div className="text-gray-500 text-xs">akash@dev/skills ~</div>
        </div>

        <div className="space-y-6">
          <div className="text-xl sm:text-xl text-green-400 font-bold">
            let <span className="text-white">mySkills</span> = require(
            <span className="text-yellow-300">'./technical-skills.js'</span>);
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-black-800 border border-gray-700"
                    : "bg-black-900 border border-gray-700 opacity-70 hover:opacity-100"
                }`}
              >
                <span className={`mr-2 ${category.color}`}>
                  {category.icon}
                </span>
                <span
                  className={
                    activeCategory === category.id
                      ? category.color
                      : "text-gray-300"
                  }
                >
                  {category.title}
                  {activeCategory === category.id && (
                    <span
                      className={`ml-1 ${
                        blinkVisible ? "opacity-100" : "opacity-0"
                      } transition-opacity`}
                    >
                      |
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-6">
            <div className="mb-4 text-xl text-emerald-400">
              <span className="text-gray-400">import</span> {"{"}{" "}
              {skillCategories.find((c) => c.id === activeCategory)?.title}{" "}
              {" }"} <span className="text-gray-400">from</span>{" "}
              <span className="text-yellow-300">'./skills'</span>;
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsData[activeCategory].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group border border-gray-800 rounded-lg p-3 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/30"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`${skill.color}`}>
                        <Icon size={18} />
                      </span>
                      <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-gray-500 text-sm flex items-center">
            <span className="text-green-400 mr-2">// </span>
            <Zap size={16} className="mr-2" />
            <span>
              Updated skills as of April 2025. Continuous learning in
              progress...
            </span>
          </div>

          <div className="bg-black p-4 rounded-md border border-gray-800 mt-6">
            <div className="flex items-center text-gray-400 mb-2">
              <Terminal size={16} className="mr-2" />
              <span className="text-green-400">akash@dev</span>
              <span>:</span>
              <span className="text-blue-400">~/skills</span>
              <span>$ </span>
              <span className="ml-1">node show-expertise.js</span>
            </div>
            <div className="text-emerald-300">Skills loaded successfully!</div>
            <div className="text-gray-400 mt-2">
              Total Skills: {Object.values(skillsData).flat().length}
            </div>
            <div className="text-gray-400">
              Primary Focus:{" "}
              <span className="text-yellow-300">Frontend Development</span>
            </div>
            <div className="text-gray-400">
              Currently Learning:{" "}
              <span className="text-blue-300">
                TypeScript, Next.js, Framer Motion
              </span>
            </div>
            <div className="text-gray-400">
              Learning Queue:{" "}
              <span className="text-blue-300">
                MongoDB, Express, Node.js,Firebase
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
