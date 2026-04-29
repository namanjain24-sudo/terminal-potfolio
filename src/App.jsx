import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import CursorSpotlight from './components/CursorSpotlight';
import SocialSidebar from './components/SocialSidebar';
import Sidebar from './components/Sidebar';

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [scrollToSection, setScrollToSection] = useState(null);
  
  const panelRef = useRef(null);
  const sectionsRef = {
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    about: useRef(null),
    contact: useRef(null)
  };

  // Unified Scroll Handler
  useEffect(() => {
    if (isPanelOpen && scrollToSection && panelRef.current) {
      // Use a slightly longer timeout to ensure Framer Motion has finished the mount
      const scrollTimer = setTimeout(() => {
        const targetElement = sectionsRef[scrollToSection]?.current;
        const panel = panelRef.current;
        
        if (targetElement && panel) {
          const targetTop = targetElement.offsetTop;
          panel.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
          setScrollToSection(null);
        }
      }, 500);
      return () => clearTimeout(scrollTimer);
    }
  }, [isPanelOpen, scrollToSection]);

  const handleOpenPanel = (sectionId = null) => {
    setIsPanelOpen(true);
    if (sectionId) {
      setScrollToSection(sectionId);
    }
  };

  // Wheel Event Handler
  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();
      const panel = panelRef.current;

      // Forward scroll to panel if mouse is on Hero
      if (isPanelOpen && panel && !panel.contains(e.target)) {
        panel.scrollTop += e.deltaY;
        return;
      }

      if (now - lastScrollTime < 500) return;

      if (e.deltaY > 5 && !isPanelOpen) {
        setIsPanelOpen(true);
        setLastScrollTime(now);
      } else if (e.deltaY < -30 && isPanelOpen) {
        if (panel && panel.scrollTop === 0) {
          setIsPanelOpen(false);
          setLastScrollTime(now);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isPanelOpen, lastScrollTime]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative font-sans">
      <CursorSpotlight />

      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden flex flex-col">
        <Hero onOpenPanel={null} />
        <div className="bg-[#0a0a0a] relative z-20">
          <div id="skills"><Skills onClose={() => { }} /></div>
          <div id="projects"><Projects /></div>
          <div id="experience"><Experience /></div>
          <div id="about"><AboutMe /></div>
          <div id="contact"><Contact /></div>
          
          {/* Mobile Socials */}
          <div className="px-6 py-12 flex justify-center gap-6 border-t border-white/5">
                <a href="https://linkedin.com" target="_blank" className="text-stone-500 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" className="text-stone-500 hover:text-white transition-colors">GitHub</a>
                <a href="mailto:namanjainpy@gmail.com" className="text-stone-500 hover:text-white transition-colors">Email</a>
          </div>
        </div>
        <Sidebar />
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:block">
        <div className="fixed inset-0 z-0">
          <div className={`transition-all duration-700 w-full h-full ${isPanelOpen ? 'opacity-20' : 'opacity-100'}`}>
            <Hero onOpenPanel={handleOpenPanel} />
          </div>
        </div>

        {/* Close Panel Overlay */}
        {isPanelOpen && (
          <div
            onClick={() => setIsPanelOpen(false)}
            className="fixed top-0 right-0 bottom-0 w-1/2 z-10 hidden md:block cursor-pointer"
            aria-label="Close panel"
          />
        )}

        <AnimatePresence>
          {isPanelOpen && (
            <>
              <motion.div
                id="content-panel"
                ref={panelRef}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="fixed top-0 bottom-0 left-0 z-20 w-[60%] md:w-1/2 bg-[#0a0a0a]/95 backdrop-blur-xl border-r border-white/10 overflow-y-auto shadow-2xl no-scrollbar"
              >
                <div className="flex flex-col min-h-screen">
                  <div ref={sectionsRef.skills}><Skills onClose={() => setIsPanelOpen(false)} /></div>
                  <div ref={sectionsRef.projects}><Projects /></div>
                  <div ref={sectionsRef.experience}><Experience /></div>
                  <div ref={sectionsRef.about}><AboutMe /></div>
                  <div ref={sectionsRef.contact}><Contact /></div>
                </div>
              </motion.div>
              <SocialSidebar />
            </>
          )}
        </AnimatePresence>

        <Sidebar />
      </div>
    </div>
  );
}

export default App;
