import React from "react";
import {
  Code,
  MapPin,
  User,
  Layers,
  ArrowRight,
  ExternalLink,
  Mail,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiRedux,
  SiGit,
  SiGithub,
} from "react-icons/si";
import TypeIt from "typeit-react";

const About = () => {
  const techStack = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Redux toolkit", icon: <SiRedux /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Github", icon: <SiGithub /> },
  ];

  const techColors = {
    HTML: "bg-orange-900/30 text-orange-300 border-orange-700",
    CSS: "bg-blue-900/30 text-blue-300 border-blue-700",
    React: "bg-cyan-900/30 text-cyan-300 border-cyan-700",
    JavaScript: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
    "Redux toolkit": "bg-purple-900/30 text-purple-300 border-purple-700",
    Git: "bg-red-900/30 text-red-300 border-red-700",
    Github: "bg-gray-900/30 text-gray-300 border-gray-700",
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>

      {/* Main content */}
      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-6 md:p-8">
        {/* Terminal header */}
        <div className="flex items-center justify-between pb-4 mt-20 sm:mt-0 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-yellow-400 text-sm md:text-base">
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
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`flex items-center gap-2 px-2 py-1 rounded-md text-sm border ${
                        techColors[tech.name] ||
                        "bg-white/10 text-white border-white/20"
                      }`}
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
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
            <a
              href="#projects"
              className="group flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300"
            >
              <span>getProjects()</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center border border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 py-3 px-6 rounded-md font-medium transition-all duration-300"
            >
              <Mail className="mr-2 w-4 h-4" />
              <span>Contact()</span>
            </a>

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
