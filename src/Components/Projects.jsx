import React, { useState, useEffect } from "react";
import {
  Terminal,
  Code,
  Github,
  Globe,
  ChevronRight,
  Folder,
  ExternalLink,
  Cpu,
  Layers,
  ArrowRight,
  Star,
} from "lucide-react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [blinkVisible, setBlinkVisible] = useState(true);
  const [terminalLines, setTerminalLines] = useState([
    { text: "Loading project data...", color: "text-gray-400" },
    { text: "Project data loaded successfully!", color: "text-green-400" },
  ]);

  // Setup blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Update terminal when project changes
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject]);

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing. Built with a focus on performance and seamless user experience.",
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
      bgGradient: "from-blue-900/20 to-blue-800/5",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration. Features include drag-and-drop organization, task prioritization, and real-time updates.",
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
      bgGradient: "from-green-900/20 to-green-800/5",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "An interactive weather application providing real-time weather data, forecasts, and location-based information. Utilizes modern APIs and data visualization techniques.",
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
      bgGradient: "from-purple-900/20 to-purple-800/5",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-black px-4 py-16 relative"
    >
      {/* Subtle glow elements */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>

      {/* Main content */}
      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-6 md:p-8">
        {/* Terminal header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-yellow-400 text-sm md:text-base">
            // Featured Projects
          </div>
          <div className="text-gray-500 text-xs">akash@dev/projects ~</div>
        </div>

        {/* Projects content */}
        <div className="space-y-6">
          <div className="text-xl sm:text-2xl text-green-400 font-bold">
            const <span className="text-white">myProjects</span> = require(
            <span className="text-yellow-300">'./featured-work.js'</span>);
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project selector */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 md:p-6 col-span-1">
              <div className="text-lg text-emerald-400 mb-4">
                <span className="text-gray-400">import</span>{" "}
                <span className="text-white">
                  {"{"} ProjectList {"}"}
                </span>{" "}
                <span className="text-gray-400">from</span>{" "}
                <span className="text-yellow-300">'./projects'</span>;
              </div>

              <div className="space-y-3">
                {projectsData.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(index)}
                    className={`w-full text-left flex items-center p-3 rounded-md transition-all duration-300 ${
                      activeProject === index
                        ? `bg-gray-800/80 border ${project.color}`
                        : "bg-gray-800/30 border border-gray-700 hover:border-gray-600"
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
                      <ChevronRight
                        size={16}
                        className="ml-auto text-blue-400"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Terminal output */}
              <div className="mt-6 bg-gray-900/70 p-3 rounded-md border border-gray-800 text-sm">
                <div className="flex items-center text-gray-400 mb-2">
                  <Terminal size={14} className="mr-2" />
                  <span className="text-green-400">akash@dev</span>
                  <span>:</span>
                  <span className="text-blue-400">~/projects</span>
                  <span>$ </span>
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
            <div
              className={`bg-gradient-to-br ${projectsData[activeProject].bgGradient} border border-gray-800 rounded-lg p-6 col-span-1 md:col-span-2`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projectsData[activeProject].title}
                </h3>
                <p className="text-gray-300">
                  {projectsData[activeProject].description}
                </p>
              </div>

              {/* Project image */}
              <div className="mb-6 border border-gray-700 rounded-md overflow-hidden">
                <img
                  src={projectsData[activeProject].image}
                  alt={projectsData[activeProject].title}
                  className="w-full h-auto"
                />
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <div className="flex items-center text-gray-300 mb-2">
                  <Layers size={16} className="mr-2 text-blue-400" />
                  <span className="font-semibold">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectsData[activeProject].techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key features */}
              <div className="mb-6">
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

              {/* Project links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={projectsData[activeProject].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md transition-all duration-300"
                >
                  <Github size={16} className="mr-2" />
                  <span>View Source</span>
                  <ExternalLink size={14} className="ml-2 opacity-70" />
                </a>
                <a
                  href={projectsData[activeProject].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-500 rounded-md transition-all duration-300"
                >
                  <Globe size={16} className="mr-2" />
                  <span>Live Demo</span>
                  <ExternalLink size={14} className="ml-2 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-gray-500 text-sm flex items-center mt-6">
            <span className="text-green-400 mr-2">// </span>
            <span>
              More projects available on my{" "}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              . Custom projects available upon request.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
