import { useEffect, useLayoutEffect, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { flushSync } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navbar from './components/NavBar';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const [isAboutPage, setIsAboutPage] = useState(() => window.location.hash === '#/about');
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 0.75,
      smoothTouch: 0,
      effects: false,
    });

    return () => smoother.kill();
  }, []);
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      setIsAboutPage(hash === '#/about');
      if (hash === '#/about' || hash === '#/') {
        const smoother = ScrollSmoother.get();
        if (smoother) smoother.scrollTo(0, false);
        else window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);
  useEffect(() => {
    document.title = isAboutPage ? 'About — Nirjal Byanjankar' : 'Nirjal Byanjankar — Developer & Designer';
  }, [isAboutPage]);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try { return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage is optional. */ }
  }, [theme]);
  useEffect(() => {
    const lockHome = !isAboutPage && !projectsExpanded;
    document.body.classList.toggle('home-page', !isAboutPage);
    document.body.classList.toggle('home-projects-collapsed', lockHome);
    return () => {
      document.body.classList.remove('home-page');
      document.body.classList.remove('home-projects-collapsed');
    };
  }, [isAboutPage, projectsExpanded]);
  useEffect(() => {
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 650);
    return () => window.clearTimeout(refresh);
  }, [isAboutPage, projectsExpanded]);
  const handleThemeToggle = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    };

    if (!transitionDocument.startViewTransition || reduceMotion) {
      setTheme(nextTheme);
      return;
    }

    const { clientX: x, clientY: y } = event;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = transitionDocument.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 650,
          easing: 'cubic-bezier(.16, 1, .3, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    }).catch(() => undefined);
  };
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="portfolio">
          <a className="skip-link" href="#main">Skip to content</a>
          <Navbar theme={theme} toggleTheme={handleThemeToggle} isAboutPage={isAboutPage} />
          <main key={isAboutPage ? 'about' : 'home'} id="main" className={`${isAboutPage ? 'about-main' : 'home-main'} page-enter`}>
            {isAboutPage ? <AboutPage /> : <><Hero /><Projects expanded={projectsExpanded} onExpandedChange={setProjectsExpanded} /></>}
          </main>
          <Footer showThanks={isAboutPage} />
        </div>
      </div>
    </div>
  );
}
