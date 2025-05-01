import React, { useState, useEffect } from "react";
import {
  Terminal,
  Folder,
  ChevronRight,
  Layers,
  Star,
  ArrowRight,
  Github,
  ExternalLink,
} from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [blinkVisible, setBlinkVisible] = useState(true);
  const [terminalLines, setTerminalLines] = useState([
    { text: "Loading project data...", color: "text-gray-400" },
    { text: "Project data loaded successfully!", color: "text-green-400" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const selectedProject = projectsData[activeProject];
    setTerminalLines([
      { text: "Loading project data...", color: "text-gray-400" },
      { text: "Project data loaded successfully!", color: "text-green-400" },
      {
        text: `Selected project: ${selectedProject.title}`,
        color: "text-blue-400",
      },
      {
        text: `Tech stack: ${selectedProject.techStack.join(", ")}`,
        color: "text-yellow-300",
      },
    ]);
  }, [activeProject]);

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      features: [
        "User authentication and profiles",
        "Product search and filtering",
        "Shopping cart and checkout",
        "Payment processing",
        "Order history and tracking",
      ],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-project.example.com",
      color: "border-blue-500",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration with drag-and-drop and real-time updates.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
      features: [
        "Task creation and assignment",
        "Project organization",
        "Drag-and-drop interface",
        "Real-time collaboration",
        "Progress tracking and analytics",
      ],
      githubUrl: "https://github.com/yourusername/task-management",
      liveUrl: "https://task-app.example.com",
      color: "border-green-500",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "An interactive weather application providing real-time weather data, forecasts, and location-based info using modern APIs.",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Chart.js", "WeatherAPI", "Tailwind CSS"],
      features: [
        "Real-time weather updates",
        "5-day forecast",
        "Interactive maps",
        "Location search",
        "Weather alerts and notifications",
      ],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-app.example.com",
      color: "border-purple-500",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-4 py-16 relative"
    >
      {/* Background glows */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto font-mono z-10 relative">
        {/* Terminal header */}
        <div className="bg-black border border-gray-800 rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-gray-700 mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-yellow-400 text-sm">// Projects</div>
            <div className="text-gray-500 text-xs">akash@dev/projects ~</div>
          </div>

          {/* Terminal line */}
          <div className="text-xl sm:text-2xl text-green-400 font-bold mb-6">
            const <span className="text-white">myProjects</span> = require(
            <span className="text-yellow-300">'./featured-work.js'</span>);
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sidebar with project buttons */}
            <div className="space-y-4">
              <div className="text-lg text-emerald-400 mb-2">
                <span className="text-gray-400">import</span>{" "}
                <span className="text-white">{`{ ProjectList }`}</span>{" "}
                <span className="text-gray-400">from</span>{" "}
                <span className="text-yellow-300">'./projects'</span>;
              </div>
              {projectsData.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`w-full flex items-center p-3 rounded-md transition ${
                    activeProject === index
                      ? `bg-black/80 border ${project.color}`
                      : "bg-black/30 border border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <Folder
                    size={18}
                    className={`mr-3 ${
                      activeProject === index
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`${
                      activeProject === index ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {project.title}
                  </span>
                  {activeProject === index && (
                    <ChevronRight size={16} className="ml-auto text-blue-400" />
                  )}
                </button>
              ))}

              {/* Terminal output */}
              <div className="mt-6 bg-black p-3 rounded-md border border-gray-800 text-sm">
                <div className="flex items-center text-gray-400 mb-2">
                  <Terminal size={14} className="mr-2" />
                  <span className="text-green-400">akash@dev</span>
                  <span>:~/projects$</span>
                </div>
                <div className="space-y-1 max-h-36 overflow-y-auto">
                  {terminalLines.map((line, index) => (
                    <div key={index} className={line.color}>
                      {line.text}
                    </div>
                  ))}
                  <div className="text-green-400 flex">
                    <span className="mr-2">$</span>
                    <span className="text-white">
                      _
                      <span
                        className={`ml-1 ${
                          blinkVisible ? "opacity-100" : "opacity-0"
                        } transition-opacity`}
                      >
                        |
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projectsData[activeProject].title}
                </h3>
                <p className="text-gray-300">
                  {projectsData[activeProject].description}
                </p>
              </div>

              <img
                src={projectsData[activeProject].image}
                alt={projectsData[activeProject].title}
                className="rounded-md border border-gray-700 w-full"
              />

              {/* Tech Stack */}
              <div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Layers size={16} className="mr-2 text-blue-400" />
                  <span className="font-semibold">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectsData[activeProject].techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Star size={16} className="mr-2 text-yellow-400" />
                  <span className="font-semibold">Key Features</span>
                </div>
                <ul className="space-y-1">
                  {projectsData[activeProject].features.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-300"
                      >
                        <ArrowRight
                          size={14}
                          className="mr-2 mt-1 text-green-400"
                        />
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={projectsData[activeProject].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-gray-800"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={projectsData[activeProject].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-gray-800"
                >
                  <ExternalLink size={16} />
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
