"use client";
import React from "react";

const Education = ({ darkMode }) => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "University of the Cordilleras",
      year: "2020 - 2024",
      description: "Focused on web development, software engineering, and database management. GPA: 3.8/4.0",
      icon: "🎓"
    },
    {
      degree: "Senior High School - ICT Strand",
      school: "Santiago Catholic School",
      year: "2018 - 2020",
      description: "Specialized in Information and Communications Technology with focus on programming and IT fundamentals.",
      icon: "📚"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-3 rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden"
            >
              
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                {/* Header with icon and year */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex gap-4">
                    <span className="text-4xl">{edu.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg">
                        {edu.school}
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-400/30 rounded-lg text-sm font-bold whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
