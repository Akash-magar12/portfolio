import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiRedux,
  SiGit,
  SiGithub,
  SiTypescript,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

export const navItems = [
  { label: "getAboutMe()", link: "" },
  { label: "getProjects()", link: "projects" },
  { label: "getEducation()", link: "education" },
  { label: "getSkills()", link: "skills" },
  { label: "getInTouch()", link: "contact" },
];

export const techStack = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Redux toolkit", icon: SiRedux },
  { name: "Git", icon: SiGit },
  { name: "Github", icon: SiGithub },
];

export const learningStack = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

export const techColors = {
  HTML: "bg-orange-900/30 text-orange-300 border-orange-700",
  CSS: "bg-blue-900/30 text-blue-300 border-blue-700",
  React: "bg-cyan-900/30 text-cyan-300 border-cyan-700",
  JavaScript: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
  "Redux toolkit": "bg-purple-900/30 text-purple-300 border-purple-700",
  Git: "bg-red-900/30 text-red-300 border-red-700",
  Github: "bg-gray-900/30 text-gray-300 border-gray-700",
  TypeScript: "bg-blue-600/30 text-white border-blue-800",
  "Next.js": "bg-gray-900/30 text-white border-gray-700",
  "Framer Motion": "bg-cyan-600/30 text-white border-cyan-800",
  "Node.js": "bg-green-600/30 text-white border-green-800",
  Express: "bg-gray-700/30 text-white border-gray-800",
  MongoDB: "bg-green-700/30 text-white border-green-800",
};

export const educationData = [
  {
    id: 1,
    degree: "Full Stack Web Development Bootcamp",
    institution: "Brillica Services",
    location: "Dehradun, India",
    duration: "2024-2025",
    certificate: "Certificate of Completion",
    details: [
      "Secured 2nd position in a mini hackathon organized during the bootcamp",
      "Mastered full stack technologies using the MERN stack",
      "Built responsive web applications with HTML5, CSS3, Javascript and React",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Uttaranchal University",
    location: "Dehradun, India",
    duration: "2020 - 2023",
    details: [
      "Graduated with a CGPA of 8.83/10",
      "Studied business, marketing, and management principles",
    ],
  },
  {
    id: 3,
    degree: "Higher Secondary Education (12th)",
    institution: "Kendriya Vidyalaya Army Area (KV)",
    location: "Pune, India",
    duration: "2018 - 2019",
    details: [
      "Completed 12th grade in Commerce stream with a CGPA of 8.6/10",
      "Focused on subjects such as Accountancy, Business Studies, and Economics",
    ],
  },
  {
    id: 4,
    degree: "Secondary Education (10th)",
    institution: "Kendriya Vidyalaya Birpur (KV)",
    location: "Dehradun, India",
    duration: "2016 - 2017",
    details: [
      "Completed 10th grade with a perfect GPA of 10/10",
      "Achieved academic distinction across all subjects",
    ],
  },
];

export const skillsData = {
  frontend: [
    { name: "HTML", icon: SiHtml5, color: "text-orange-400" },
    { name: "CSS", icon: SiCss3, color: "text-blue-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Redux", icon: SiRedux, color: "text-purple-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  ],
};
