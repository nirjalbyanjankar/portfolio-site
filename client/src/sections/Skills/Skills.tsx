import React from 'react';
import { Code2, Database, Wrench, Layout, } from 'lucide-react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "blue",
      skills: ["TypeScript", "JavaScript", "Java", "Python", "C#"]
    },
    {
      title: "Web Technologies",
      icon: Layout,
      color: "purple",
      skills: ["React.js", "Node.js", "Express", "Next.js", "NestJS", "MUI", ".NET"]
    },
    {
      title: "Database",
      icon: Database,
      color: "green",
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      color: "orange",
      skills: ["Git", "GitHub", "Figma", "VS Code", "Canva", "Framer Motion"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        iconLight: 'bg-blue-100 text-blue-600',
        iconDark: 'bg-blue-900/30 text-blue-400',
        badgeLight: 'bg-blue-50 text-blue-900 border-blue-200',
        badgeDark: 'bg-blue-900/20 text-blue-300 border-blue-800/30'
      },
      purple: {
        iconLight: 'bg-purple-100 text-purple-600',
        iconDark: 'bg-purple-900/30 text-purple-400',
        badgeLight: 'bg-purple-50 text-purple-900 border-purple-200',
        badgeDark: 'bg-purple-900/20 text-purple-300 border-purple-800/30'
      },
      green: {
        iconLight: 'bg-green-100 text-green-600',
        iconDark: 'bg-green-900/30 text-green-400',
        badgeLight: 'bg-green-50 text-green-900 border-green-200',
        badgeDark: 'bg-green-900/20 text-green-300 border-green-800/30'
      },
      orange: {
        iconLight: 'bg-orange-100 text-orange-600',
        iconDark: 'bg-orange-900/30 text-orange-400',
        badgeLight: 'bg-orange-50 text-orange-900 border-orange-200',
        badgeDark: 'bg-orange-900/20 text-orange-300 border-orange-800/30'
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className={`py-20 md:py-24 transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50' : 'bg-gray-950'
      }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${theme === 'light'
              ? 'bg-purple-100 text-purple-600'
              : 'bg-purple-900/30 text-purple-400'
            }`}>
            Technical Expertise
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
            Skills & Technologies
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${theme === 'light' ? 'bg-gray-900' : 'bg-white'
            }`}></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] animate-fade-in-up ${theme === 'light'
                    ? 'bg-white border-gray-200 hover:shadow-lg'
                    : 'bg-gray-800/50 border-gray-700 hover:shadow-2xl'
                  }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 rounded-xl ${theme === 'light' ? colors.iconLight : colors.iconDark
                    }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${theme === 'light' ? colors.badgeLight : colors.badgeDark
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Exploring Section */}
        <div className={`mt-8 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] ${theme === 'light'
            ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
            : 'bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-800/50'
          }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl animate-pulse">🚀</span>
            <h3 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
              Currently Exploring
            </h3>
          </div>
          <p className={`text-center text-sm mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'
            }`}>
            Always learning and staying curious about emerging technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Full Stack Development"].map((tech, idx) => (
              <span
                key={idx}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-110 ${theme === 'light'
                    ? 'bg-white text-orange-900 border-orange-300 hover:border-orange-400'
                    : 'bg-gray-800/50 text-orange-300 border-orange-700/50 hover:border-orange-600'
                  }`}
              >
                {tech}
              </span>
            ))}
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

export default Skills;
