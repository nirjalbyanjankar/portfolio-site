import React, { useEffect, useState } from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Nirjal';
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section
      id="hero"
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${
        theme === 'light' ? 'bg-white' : 'bg-gray-900'
      }`}
    >
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pb-24 pt-32 sm:px-8 lg:px-10">
        <div className="relative flex w-full flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
            <div className="absolute left-[36%] top-[59%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2">
              <div
                className={`h-full w-full rounded-full animate-orbit-left ${
                  theme === 'light' ? 'bg-blue-200/80' : 'bg-blue-500/28'
                }`}
              ></div>
            </div>
            <div className="absolute left-[58%] top-[63%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2">
              <div
                className={`h-full w-full rounded-full animate-orbit-right ${
                  theme === 'light' ? 'bg-violet-200/62' : 'bg-violet-500/24'
                }`}
              ></div>
            </div>
          </div>
          <div className="relative z-10 w-full max-w-2xl flex-1 text-center lg:text-left">
            <h1
              className={`mb-4 text-4xl font-bold leading-[0.95] animate-fade-in sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                {displayText}
                <span className="animate-blink">|</span>
              </span>{' '}
              <span className="inline-block animate-wave">👋</span>
            </h1>

            <p
              className={`mx-auto mb-6 max-w-2xl text-base animate-fade-in-delay sm:mb-8 sm:text-lg md:text-xl ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              } lg:mx-0`}
            >
              Crafting beautiful digital experiences as a{' '}
              <span className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                Full Stack Developer
              </span>
            </p>

            <div className="flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className={`group relative overflow-hidden rounded-full px-8 py-4 font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  theme === 'light' ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="View my work"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100 ${
                    theme === 'light' ? 'from-blue-600 to-purple-600' : 'from-blue-400 to-purple-400'
                  }`}
                ></div>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`rounded-full border px-8 py-4 font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                  theme === 'light'
                    ? 'border-gray-300 text-gray-900 hover:bg-gray-100'
                    : 'border-gray-600 text-white hover:bg-gray-800'
                }`}
                aria-label="Get in touch"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <Mail className="h-5 w-5" />
                </span>
              </button>
            </div>

            <div className="mt-12 flex justify-center gap-6 animate-fade-in-up-delay lg:justify-start">
              <a
                href="https://github.com/nirjaley"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
                  theme === 'light'
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    : 'border-gray-700 text-gray-300 hover:bg-gray-800'
                }`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nirjal-byan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
                  theme === 'light'
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    : 'border-gray-700 text-gray-300 hover:bg-gray-800'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/nirjal.13"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
                  theme === 'light'
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    : 'border-gray-700 text-gray-300 hover:bg-gray-800'
                }`}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative z-10 flex w-full flex-shrink-0 justify-center lg:w-auto lg:justify-end">
            <div className="relative group animate-fade-in-right">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200 opacity-70 blur-md transition-all duration-300 group-hover:opacity-100"></div>

              <div
                className={`relative h-64 w-64 overflow-hidden rounded-full border-4 shadow-xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 ${
                  theme === 'light' ? 'border-white' : 'border-gray-900'
                }`}
              >
                <img
                  src="/assets/images/profile.jpg"
                  alt="Nirjal"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
              </div>

              <div
                className={`absolute -right-2 top-2 flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur-sm animate-float sm:-right-4 sm:top-0 sm:h-20 sm:w-20 ${
                  theme === 'light' ? 'border-gray-200 bg-white/85' : 'border-gray-700 bg-gray-800/85'
                }`}
              >
                <span className="text-2xl sm:text-3xl">🎵</span>
              </div>
              <div
                className={`absolute -bottom-3 left-0 flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur-sm animate-float-delay sm:-bottom-4 sm:left-2 sm:h-20 sm:w-20 ${
                  theme === 'light' ? 'border-gray-200 bg-white/85' : 'border-gray-700 bg-gray-800/85'
                }`}
              >
                <span className="text-2xl sm:text-3xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className={`flex h-10 w-6 items-start justify-center rounded-full border-2 p-2 ${
            theme === 'light' ? 'border-gray-400' : 'border-gray-600'
          }`}
        >
          <div className={`h-1.5 w-1.5 rounded-full animate-scroll ${theme === 'light' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
        </div>
      </div>

      <style>{`
        @keyframes orbit-left {
          0%, 100% {
            transform: translate3d(0, -50%, 0) scale(1);
          }
          50% {
            transform: translate3d(22px, -62%, 0) scale(1.03);
          }
        }

        @keyframes orbit-right {
          0%, 100% {
            transform: translate3d(0, -50%, 0) scale(1);
          }
          50% {
            transform: translate3d(-18px, -40%, 0) scale(1.04);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up-delay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 3.5s ease-in-out infinite;
        }

        .animate-orbit-left {
          animation: orbit-left 10s ease-in-out infinite;
        }

        .animate-orbit-right {
          animation: orbit-right 12s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.2s both;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up-delay 1.2s ease-out both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.4s both;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
