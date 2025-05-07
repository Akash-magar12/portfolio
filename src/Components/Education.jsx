import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ChevronRight,
} from "lucide-react";
import { educationData } from "../utils/const";

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);
  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-black sm:px-4 py-16 relative"
    >
      {/* Main content */}
      <div className="max-w-6xl w-full text-left text-white font-mono z-10 bg-black rounded-xl border border-gray-800 shadow-xl p-2 md:p-8">
        {/* Terminal header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="hidden md:block text-yellow-400 text-sm md:text-base">
            // Education
          </div>
          <div className="text-gray-500 text-xs">akash@dev/education ~</div>
        </div>

        {/* Education content */}
        <div className="space-y-6">
          <div className="text-xl sm:text-2xl text-yellow-400 font-bold">
            const <span className="text-white">education</span> = [
          </div>

          <div className="space-y-6 ml-4">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                  onClick={() => toggleDetails(edu.id)}
                >
                  <div className="flex items-start space-x-3">
                    <GraduationCap
                      className="text-emerald-400 mt-1 flex-shrink-0"
                      size={22}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center mt-2 md:mt-0">
                    <div className="flex items-center mr-4">
                      <Calendar size={16} className="text-gray-500 mr-1" />
                      <span className="text-gray-400 text-sm">
                        {edu.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-gray-500 mr-1" />
                      <span className="text-gray-400 text-sm">
                        {edu.location}
                      </span>
                    </div>
                    <ChevronRight
                      size={18}
                      className={`ml-2 text-gray-400 transition-transform duration-300 ${
                        expandedId === edu.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expandable details */}
                {expandedId === edu.id && (
                  <div className="mt-4 pl-9 border-t border-gray-800 pt-3 animate-fadeIn">
                    {edu.gpa && (
                      <div className="flex items-center mb-2">
                        <Award size={16} className="text-yellow-500 mr-2" />
                        <span className="text-yellow-300 text-sm">
                          GPA/Score: {edu.gpa}
                        </span>
                      </div>
                    )}
                    {edu.certificate && (
                      <div className="flex items-center mb-2">
                        <Award size={16} className="text-yellow-500 mr-2" />
                        <span className="text-yellow-300 text-sm">
                          {edu.certificate}
                        </span>
                      </div>
                    )}
                    <div className="mt-2">
                      <div className="text-gray-400 font-mono text-sm mb-2">
                        {"{"}
                      </div>
                      <ul className="ml-4 space-y-1">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="flex">
                            <span className="text-gray-500 mr-2">•</span>
                            <span className="text-gray-300 text-sm">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-gray-400 font-mono text-sm mt-2">
                        {"}"}
                        {index < educationData.length - 1 ? "," : ""}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-xl sm:text-2xl text-yellow-400 font-bold">
            ];
          </div>

          <div className="flex items-center text-sm text-gray-400 mt-4 pt-4 border-t border-gray-800">
            <span className="text-green-400 mr-2">// </span>
            <span>Click on any education entry to expand details</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
