import React from 'react';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const educationData = [
  {
    institution: 'Savitribai Phule Pune University',
    degree: 'B.E in Computer Engineering',
    period: '2022 – 2026',
    details: 'GPA: 8.40/10',
    icon: FiBookOpen,
  },
  {
    institution: 'PJN Junior College',
    degree: '12th PCMB',
    period: '2020 – 2022',
    details: 'Percentage: 86%',
    icon: FiAward,
  },
];

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Education
        </h2>
      </div>
      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="space-y-12 relative z-10">
          {educationData.map((edu, idx) => (
            <div key={edu.institution} className="flex items-start relative">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg z-20">
                <edu.icon className="w-6 h-6" />
              </div>
              <div className="ml-8 bg-white dark:bg-gray-900 glass-effect p-6 rounded-xl shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.degree}</p>
                <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 text-sm mb-2">
                  <span>{edu.period}</span>
                  <span>{edu.details}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education; 