"use client";
import React from "react";

const Experience = ({ darkMode }) => {
  const experienceData = [
    {
      position: "Web Development Intern",
      company: "Company Name",
      duration: "June 2023 - August 2023",
      type: "Internship",
      responsibilities: [
        "Developed responsive web pages using React.js and Tailwind CSS",
        "Collaborated with design team to implement UI/UX improvements",
        "Participated in code reviews and team meetings"
      ]
    },
    {
      position: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2022 - Present",
      type: "Freelance",
      responsibilities: [
        "Built custom websites for small businesses and startups",
        "Implemented modern frontend technologies and best practices",
        "Provided maintenance and ongoing support for projects"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-3 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative md:pl-24">
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-16 h-16 hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-400/50"></div>
                </div>

                {/* Experience Card */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group">
                  
                  {/* Header with position and type badge */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 rounded-lg text-sm font-medium whitespace-nowrap">
                        {exp.duration}
                      </span>
                      <span className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-400/30 rounded-lg text-sm font-medium whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-cyan-400 font-bold mt-1 flex-shrink-0">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
