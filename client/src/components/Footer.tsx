import React from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme = 'light' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 transition-colors duration-300 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`border-t pt-5 ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}>
          <div className={`flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            <p>&copy; {currentYear} Nirjal Byanjankar &middot; Last updated 06/03/2026</p>
            <p>12:57 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
