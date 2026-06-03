import React, { useState } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadResume = () => {
    const resumeUrl = '/Nirjal Byanjankar.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Nirjal_Byanjankar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center animate-slideDown">
      <div className={`rounded-full px-4 py-2 shadow-2xl backdrop-blur-sm hover:shadow-3xl transition-all duration-300 hover:scale-105 ${theme === 'light'
          ? 'bg-white border border-gray-300'
          : 'bg-black/30 border border-gray-500/60'
        }`}>
        <div className="flex items-center gap-4">
          {/* Left side - Profile Image */}
          <button
            onClick={() => {
              const heroSection = document.getElementById('home');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 flex-shrink-0 bg-gray-700 p-0 hover:scale-110 hover:rotate-12 active:scale-95 ${theme === 'light' ? 'border-gray-800 hover:border-gray-600' : 'border-white hover:border-gray-300'
              }`}
            aria-label="Home"
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <img
              src="/assets/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover block transition-transform duration-300 hover:scale-110"
              style={{ width: '40px', height: '40px' }}
              onError={(e) => {
                console.error('Image failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
          </button>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = item.toLowerCase();
                  const section = document.getElementById(sectionId);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-300 whitespace-nowrap relative group ${theme === 'light' ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'
                  }`}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  transform: hoveredItem === item ? 'translateY(-2px) scale(1.1)' : 'translateY(0) scale(1)',
                  cursor: 'pointer'
                }}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${theme === 'light' ? 'bg-gray-900' : 'bg-white'
                    }`}
                />
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border ${theme === 'light'
                ? 'border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400'
                : 'border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500'
              }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              // Moon icon for dark mode
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Right side - Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 hover:scale-110 hover:shadow-lg active:scale-95 border ${theme === 'light'
                ? 'border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400'
                : 'border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500'
              }`}
          >
            <svg
              className="w-4 h-4 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex-shrink-0 hover:scale-110 active:scale-95 transition-all duration-300 ${theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
            style={{
              animation: mobileMenuOpen ? 'menuTilt 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none'
            }}
          >
            <div className="relative w-6 h-6">
              <svg 
                className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-11/12 mt-2 rounded-2xl shadow-2xl backdrop-blur-sm z-40 ${theme === 'light'
          ? 'bg-white border border-gray-300'
          : 'bg-gray-900 border border-gray-700'
        }`}>
          <div className="px-6 py-4 flex flex-col gap-3">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all duration-300 text-left py-2 px-3 rounded-lg ${theme === 'light' 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-gray-800'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes menuTilt {
          0% {
            transform: rotateZ(0deg);
          }
          25% {
            transform: rotateZ(-8deg);
          }
          75% {
            transform: rotateZ(8deg);
          }
          100% {
            transform: rotateZ(0deg);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
