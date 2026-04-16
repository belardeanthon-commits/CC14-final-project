"use client";
import React, { useState, useEffect } from "react";

const Skills = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillsData = [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 85, icon: "✨" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "HTML/CSS", level: 95, icon: "🏗️" },
    { name: "Next.js", level: 80, icon: "▶️" },
    { name: "Git/GitHub", level: 85, icon: "📦" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "SQL/Database", level: 70, icon: "🗄️" }
  ];

  const otherTechs = ["VS Code", "Figma", "REST APIs", "Responsive Design", "npm", "Vercel", "Firebase", "MongoDB"];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-3 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((skill, index) => (
            <div key={index} className="group">
              {/* Skill row with icon and percentage */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-white text-lg">{skill.name}</span>
                </div>
                <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
              </div>

              {/* Progress bar container */}
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden relative">
                {/* Animated progress bar */}
                <div
                  className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Technologies Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-6 text-white">Other Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {otherTechs.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-700/50 hover:bg-cyan-500/10 text-cyan-400 border border-slate-600 hover:border-cyan-400/50 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
