import React, { useState, useEffect } from "react";
import { Code, Terminal, Server, Zap } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiApollographql,
  SiPostgresql,
  SiTypescript,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
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

  const skillsData = {
    frontend: [
      {
        name: "HTML5",
        proficiency: 90,
        color: "bg-orange-500",
        icon: <SiHtml5 />,
      },
      { name: "CSS3", proficiency: 85, color: "bg-blue-500", icon: <SiCss3 /> },
      {
        name: "JavaScript",
        proficiency: 85,
        color: "bg-yellow-500",
        icon: <SiJavascript />,
      },
      {
        name: "React.js",
        proficiency: 80,
        color: "bg-cyan-500",
        icon: <SiReact />,
      },
      {
        name: "Redux",
        proficiency: 75,
        color: "bg-purple-500",
        icon: <SiRedux />,
      },
      {
        name: "Tailwind CSS",
        proficiency: 85,
        color: "bg-teal-500",
        icon: <SiTailwindcss />,
      },
      {
        name: "Bootstrap",
        proficiency: 80,
        color: "bg-indigo-500",
        icon: <SiBootstrap />,
      },
      {
        name: "Responsive Design",
        proficiency: 90,
        color: "bg-pink-500",
        icon: <SiReact />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        proficiency: 70,
        color: "bg-green-500",
        icon: <SiNodedotjs />,
      },
      {
        name: "Express.js",
        proficiency: 65,
        color: "bg-gray-500",
        icon: <SiExpress />,
      },
      {
        name: "RESTful APIs",
        proficiency: 75,
        color: "bg-blue-600",
        icon: <SiApollographql />,
      },
      {
        name: "MongoDB",
        proficiency: 60,
        color: "bg-green-700",
        icon: <SiMongodb />,
      },
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-black px-4 py-16 relative"
    >
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-emerald-500 rounded-full filter blur-3xl opacity-5"></div>

      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-6 md:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-yellow-400 text-sm md:text-base">// Skills</div>
          <div className="text-gray-500 text-xs">akash@dev/skills ~</div>
        </div>

        <div className="space-y-6">
          <div className="text-xl sm:text-2xl text-green-400 font-bold">
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
            <div className="mb-4 text-lg text-emerald-400">
              <span className="text-gray-400">import</span> {"{"}{" "}
              {skillCategories.find((c) => c.id === activeCategory)?.title}{" "}
              {" }"} <span className="text-gray-400">from</span>{" "}
              <span className="text-yellow-300">'./skills'</span>;
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData[activeCategory].map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-200  group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                      <span className={`${skill.color}`}>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-gray-400 text-sm">{`${skill.proficiency}%`}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
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
              Learning Queue:{" "}
              <span className="text-blue-300">
                TypeScript, Next.js, GraphQL, MongoDB, PostgreSQL, Docker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
