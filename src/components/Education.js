import React from 'react';

const Education = ({ darkMode }) => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "University of the Cordilleras",
      year: "2020 - 2024",
      description: "Focused on web development, software engineering, and database management."
    },
    {
      degree: "Senior High School - ICT Strand",
      school: "Santiago Catholic School",
      year: "2018 - 2020",
      description: "Specialized in Information and Communications Technology."
    }
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">
        Education
      </h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg p-6 border-l-4 border-l-blue-600 hover:shadow-xl transition-shadow`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl font-bold text-blue-600">{edu.degree}</h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.school}</p>
              </div>
              <span className={`${darkMode ? 'bg-blue-900' : 'bg-blue-100'} text-blue-600 px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap`}>
                {edu.year}
              </span>
            </div>
            <p className={`mt-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
