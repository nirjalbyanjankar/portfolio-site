import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface EducationProps {
  theme: 'light' | 'dark';
}

const Education: React.FC<EducationProps> = ({ theme }) => {
  const educationData = [
    {
      type: 'University',
      degree: "Bachelor's in BSc (Hons) Computing",
      institution: "London Metropolitan University",
      year: "2022 - 2025",
      description: "Data Structures, AI, Web Development, Databases",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      type: 'High School',
      degree: "Management",
      institution: "Ace Higher Secondary School",
      year: "2020 - 2022",
      description: "Marking and Business",
      icon: <School className="w-4 h-4" />
    },
    {
      type: 'School',
      degree: "SEE",
      institution: "Shuvatara School",
      year: "2010 - 2020",
      description: "Secondary Education",
      icon: <BookOpen className="w-4 h-4" />
    }
  ];

  const getIconBgColor = (type: string) => {
    switch(type) {
      case 'University':
        return theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-400';
      case 'High School':
        return theme === 'light' ? 'bg-purple-100 text-purple-600' : 'bg-purple-900/30 text-purple-400';
      case 'School':
        return theme === 'light' ? 'bg-green-100 text-green-600' : 'bg-green-900/30 text-green-400';
      default:
        return theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-700/30 text-gray-400';
    }
  };

  return (
    <section id="education" className={`py-24 transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'light' 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-blue-900/30 text-blue-400'
          }`}>
            Education timeline
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Education
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            theme === 'light' ? 'bg-gray-900' : 'bg-white'
          }`}></div>
        </div>

        <div className="relative">
          <div className={`absolute left-4 md:left-1/2 h-full w-0.5 transform -translate-x-1/2 ${
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
          }`}></div>
          
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`relative mb-6 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              <div className="absolute left-4 md:left-1/2 w-6 h-6 transform -translate-x-1/2 z-10">
                <div className={`w-full h-full rounded-full flex items-center justify-center ${getIconBgColor(edu.type)}`}>
                  {edu.icon}
                </div>
              </div>
              
              <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <div className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 hover:shadow-md'
                    : 'bg-gray-800/50 border-gray-700 hover:shadow-lg'
                }`}>
                  <div className="flex justify-between items-start">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-700/50 text-gray-300'
                    }`}>
                      {edu.type}
                    </span>
                    <span className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                      {edu.year}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold mt-1 ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-sm font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {edu.institution}
                  </p>
                  <p className={`text-xs mt-1 ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;