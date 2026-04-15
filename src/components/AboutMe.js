import React from 'react';

const AboutMe = ({ darkMode }) => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 border-b-2 border-blue-600 pb-2">
        About Me
      </h2>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8 transition-colors`}>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-lg">
            AB
          </div>
          <div className="flex-1">
            <p className="text-lg leading-relaxed mb-4">
              Hi! I'm <strong>Anthon Rovic Belarde</strong>, a passionate web developer with a focus on building efficient, user-friendly, and visually appealing applications.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you can find me exploring new technologies and continuously improving my skills.
            </p>
            <div className="flex gap-4 mt-6">
              <span className={`px-4 py-2 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} text-blue-600 rounded-full text-sm font-medium`}>
                React.js
              </span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} text-blue-600 rounded-full text-sm font-medium`}>
                Tailwind CSS
              </span>
              <span className={`px-4 py-2 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} text-blue-600 rounded-full text-sm font-medium`}>
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
