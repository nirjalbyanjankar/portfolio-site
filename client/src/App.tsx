import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./components/NavBar";
import ScrollSection from "./components/ScrollSection";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={theme}
        initial={{ opacity: 0.9, scale: 0.998 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.9, scale: 0.998 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={`w-full min-h-screen ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} transition-colors duration-300 ease-in-out`}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <div className="w-full transition-colors duration-300 ease-in-out">
          <ScrollSection id="home">
            <Hero theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="about">
            <About theme={theme} />
          </ScrollSection>

          <ScrollSection id="experience">
            <Experience theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="skills">
            <Skills theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="projects">
            <Projects theme={theme} />
          </ScrollSection>
          
          <ScrollSection id="contact">
            <Contact theme={theme} />
          </ScrollSection>
        </div>
        
        <Footer theme={theme} />
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
