import React from 'react';

const Experience = ({ darkMode }) => {
  const experienceData = [
    {
      position: "Web Development Intern",
      company: "Company Name",
      duration: "June 2023 - August 2023",
      responsibilities: [
        "Developed responsive web pages using React.js and Tailwind CSS",
        "Collaborated with the design team to implement UI/UX improvements",
        "Participated in code reviews and team meetings"
      ]
    },
    {
      position: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2022 - Present",
      responsibilities: [
        "Built custom websites for small businesses",
        "Implemented modern frontend technologies",
        "Provided maintenance and support for existing projects"
      ]
    }
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">
        Experience
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>
        
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-2 top-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow hidden md:block"></div>
              
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">{exp.position}</h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</p>
                  </div>
                  <span className={`${darkMode ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-700'} px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap`}>
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className={`flex items-start gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="text-blue-600 mt-1">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
