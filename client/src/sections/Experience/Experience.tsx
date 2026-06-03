import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  theme: 'light' | 'dark';
}

const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "AR Forge Tech",
      location: "Kathmandu, Nepal",
      period: "March 2026 - Present",
      type: "Full-time",
      highlights: [
        "Promoted from Full Stack Developer Intern based on strong performance and contributions",
        "Leading development of scalable backend services and responsive user interfaces",
        "Collaborating closely with cross-functional teams to deliver high-quality web applications"
      ],
      color: "green",
      side: "left",
      connectDown: true
    },
    {
      role: "Full Stack Developer Intern",
      company: "AR Forge Tech",
      location: "Kathmandu, Nepal",
      period: "December 2025 - March 2026",
      type: "Internship",
      highlights: [
        "Developed scalable backend services using NestJS and PostgreSQL",
        "Built responsive and interactive UIs with Next.js and Material UI",
        "Collaborated on full-stack web application development"
      ],
      color: "green",
      side: "left"
    },
    {
      role: "UI/UX Design Intern",
      company: "SOFTECH Foundation PVT. LTD.",
      location: "Kathmandu, Nepal",
      period: "August 2024 - November 2024",
      type: "Internship",
      highlights: [
        "Designed website mockups and wireframes using Figma",
        "Created graphic designs for social media, banners, and logos",
        "Developed frontend pages with JavaScript, HTML, and CSS"
      ],
      color: "blue",
      side: "right"
    },
    {
      role: "UI/UX Designer",
      company: "Bond Welfare",
      location: "Remote",
      period: "July 2024 - August 2024",
      type: "Freelance",
      highlights: [
        "Designed user-friendly website for a welfare organization",
        "Created accessible and intuitive website pages",
        "Utilized Figma and stock resources for design assets"
      ],
      color: "purple",
      side: "left"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      green: {
        badgeLight: 'bg-green-100 text-green-700 border-green-200',
        badgeDark: 'bg-green-900/30 text-green-400 border-green-800/30',
        iconLight: 'bg-green-100 text-green-600',
        iconDark: 'bg-green-900/30 text-green-400',
        accentLight: 'bg-green-500',
        accentDark: 'bg-green-400'
      },
      blue: {
        badgeLight: 'bg-blue-100 text-blue-700 border-blue-200',
        badgeDark: 'bg-blue-900/30 text-blue-400 border-blue-800/30',
        iconLight: 'bg-blue-100 text-blue-600',
        iconDark: 'bg-blue-900/30 text-blue-400',
        accentLight: 'bg-blue-500',
        accentDark: 'bg-blue-400'
      },
      purple: {
        badgeLight: 'bg-purple-100 text-purple-700 border-purple-200',
        badgeDark: 'bg-purple-900/30 text-purple-400 border-purple-800/30',
        iconLight: 'bg-purple-100 text-purple-600',
        iconDark: 'bg-purple-900/30 text-purple-400',
        accentLight: 'bg-purple-500',
        accentDark: 'bg-purple-400'
      }
    };
    return colors[color];
  };

  return (
    <section
      id="experience"
      className={`py-20 md:py-24 transition-colors duration-300 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              theme === 'light' ? 'bg-green-100 text-green-600' : 'bg-green-900/30 text-green-400'
            }`}
          >
            My Journey
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Work Experience
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${theme === 'light' ? 'bg-gray-900' : 'bg-white'}`}></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 ${
              theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
            }`}
          ></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isLeft = exp.side === 'left';

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {isLeft && (
                    <div
                      className={`hidden md:block absolute right-1/2 top-1/2 h-0.5 ${
                        theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
                      }`}
                      style={{
                        width: '7rem',
                        marginRight: '3px'
                      }}
                    ></div>
                  )}

                  {!isLeft && (
                    <div
                      className={`hidden md:block absolute left-1/2 top-1/2 h-0.5 ${
                        theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
                      }`}
                      style={{
                        width: '7rem',
                        marginLeft: '3px'
                      }}
                    ></div>
                  )}

                  <div className="absolute left-8 md:left-1/2 w-6 h-6 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center ${
                        theme === 'light' ? colors.iconLight : colors.iconDark
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  <div className={`ml-10 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div
                      className={`relative p-4 rounded-xl border backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] ${
                        theme === 'light'
                          ? 'bg-white border-gray-200 hover:shadow-md'
                          : 'bg-gray-800/50 border-gray-700 hover:shadow-lg'
                      }`}
                    >
                      {exp.connectDown && (
                        <div
                          className={`hidden md:block absolute w-1 rounded-full z-0 ${theme === 'light' ? 'bg-green-300' : 'bg-green-700'}`}
                          style={{
                            top: '100%',
                            bottom: '-1.5rem',
                            left: '2.5rem'
                          }}
                        ></div>
                      )}

                      <div className="flex justify-between items-start mb-1">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded ${
                            theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-700/50 text-gray-300'
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{exp.period}</span>
                      </div>

                      <h3 className={`text-base font-bold mt-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        {exp.role}
                      </h3>

                      <p className={`text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        {exp.company}
                      </p>

                      <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{exp.location}</p>

                      <ul className="mt-2 space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className={`text-xs flex items-start gap-1.5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${
                                theme === 'light' ? colors.accentLight : colors.accentDark
                              }`}
                            ></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Experience;
