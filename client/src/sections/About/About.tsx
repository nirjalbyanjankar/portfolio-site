import React from 'react';
import { Code, Palette, Music, Gamepad2, Heart } from 'lucide-react';

interface AboutProps {
  theme: 'light' | 'dark';
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const skills = [
    "React", "TypeScript", "NodeJS", "NextJS", "NestJS", "MUI", "TailwindCSS", "PostgreSQL", "Figma"
  ];

  const interests = [
    { icon: Music, label: "Music Enthusiast", description: "Love progressive rock (King Crimson, Pink Floyd, Tool) and grunge (Pearl Jam, Alice in Chains)" },
    { icon: Gamepad2, label: "Gamer", description: "Enjoying titles like Counter-Strike 2 and Red Dead Redemption 2" },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'
      }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${theme === 'light'
              ? 'bg-blue-100 text-blue-600'
              : 'bg-blue-900/30 text-blue-400'
            }`}>
            Get to know me
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${theme === 'light' ? 'bg-gray-900' : 'bg-white'
            }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6 animate-fade-in-left">
            {/* Introduction Card */}
            <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${theme === 'light'
                ? 'bg-white border-gray-200 hover:shadow-lg'
                : 'bg-gray-800/50 border-gray-700 hover:shadow-2xl'
              }`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/30'
                  }`}>
                  <Code className={`w-6 h-6 ${theme === 'light' ? 'text-blue-600' : 'text-white'
                    }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                    Developer & Designer
                  </h3>
                  <p className={`leading-relaxed ${theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                    I'm a UI/UX Designer and Frontend Developer passionate about building modern, clean,
                    and efficient digital products. I bridge the gap between design and development,
                    creating seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${theme === 'light'
                ? 'bg-white border-gray-200 hover:shadow-lg'
                : 'bg-gray-800/50 border-gray-700 hover:shadow-2xl'
              }`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${theme === 'light' ? 'bg-purple-100' : 'bg-purple-900/30'
                  }`}>
                  <Palette className={`w-6 h-6 ${theme === 'light' ? 'text-purple-600' : 'text-white'
                    }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${theme === 'light'
                            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            : 'bg-gray-700/50 text-white hover:bg-gray-700'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interests & Fun Fact */}
          <div className="space-y-6 animate-fade-in-right h-full flex flex-col">
            <div className={`flex-1 p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${theme === 'light'
                ? 'bg-gradient-to-b from-white to-gray-50 border-gray-200'
                : 'bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700'
              }`}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-2xl ${theme === 'light' ? 'bg-red-100' : 'bg-red-900/30'}`}>
                  <Heart className={`w-6 h-6 ${theme === 'light' ? 'text-red-500' : 'text-red-400'}`} />
                </div>
                <h3 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                  When I'm Not Working
                </h3>
              </div>

              <div className="space-y-5">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-default group border ${theme === 'light'
                        ? 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-md'
                        : 'bg-gray-800/50 border-gray-700 hover:border-blue-800/50 hover:shadow-lg'
                      }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className={`p-3.5 rounded-xl transition-colors ${theme === 'light'
                          ? 'bg-gray-50 group-hover:bg-blue-50'
                          : 'bg-gray-900/50 group-hover:bg-blue-900/30'
                        }`}>
                        <interest.icon className={`w-6 h-6 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                          }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold mb-1.5 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                          }`}>
                          {interest.label}
                        </h4>
                        <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className={`p-6 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${theme === 'light'
                ? 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-blue-100'
                : 'bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-blue-800/30'
              }`}>
              <div className="flex items-center gap-4">
                <span className="text-3xl animate-bounce">💡</span>
                <p className={`font-medium italic leading-relaxed flex-1 ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'
                  }`}>
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }

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
      `}</style>
    </section>
  );
};

export default About;