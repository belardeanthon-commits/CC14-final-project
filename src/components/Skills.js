import React from 'react';

const Skills = ({ darkMode }) => {
  const skillsData = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 70 },
    { name: "Git/GitHub", level: 75 },
    { name: "Python", level: 65 },
    { name: "SQL/Database", level: 70 }
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">
        Skills
      </h2>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-600 font-semibold">{skill.level}%</span>
              </div>
              <div className={`h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills tags */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold mb-4">Other Technologies:</h3>
          <div className="flex flex-wrap gap-3">
            {["VS Code", "Figma", "REST APIs", "Responsive Design", "Bootstrap", "npm", "Vercel", "Firebase"].map((tech, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg text-sm font-medium transition-colors cursor-default`}
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
