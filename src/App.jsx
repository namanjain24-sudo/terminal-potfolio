import React, { useEffect, useState } from 'react';
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

  // Handle Scroll to Section when Panel Opens
  useEffect(() => {
    if (isPanelOpen && scrollToSection) {
      // Small timeout to ensure DOM is rendered (Framer Motion mount)
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setScrollToSection(null); // Reset after scroll command
      }, 500); // 500ms delay to allow slide animation to start/content to mount
      return () => clearTimeout(timer);
    }
  }, [isPanelOpen, scrollToSection]);

  const handleOpenPanel = (sectionId = null) => {
    setIsPanelOpen(true);
    if (sectionId) {
      setScrollToSection(sectionId);
    }
  };

  // Wheel Event Handler for "Slide" Navigation
  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();
      const panel = document.getElementById('content-panel');

      // 1. Scroll Forwarding: If panel is open and mouse is OUTSIDE the panel (e.g. on Hero),
      // forward the scroll event to the panel so the user can scroll content from anywhere.
      if (isPanelOpen && panel && !panel.contains(e.target)) {
        panel.scrollTop += e.deltaY;
      }

      // 2. State Toggling (Open/Close): Throttled to prevent double-firing
      if (now - lastScrollTime < 500) return;

      // Scroll Down -> Open Panel
      if (e.deltaY > 10 && !isPanelOpen) {
        setIsPanelOpen(true);
        setLastScrollTime(now);
      }
      // Scroll Up (at top of panel) -> Close Panel
      else if (e.deltaY < -40 && isPanelOpen) {
        // Only close if panel is at the very top
        if (panel && panel.scrollTop === 0) {
          setIsPanelOpen(false);
          setLastScrollTime(now);
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isPanelOpen, lastScrollTime]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative font-sans">
      <CursorSpotlight />

      {/* --- MOBILE LAYOUT (Vertical Scroll) < md --- */}
      <div className="md:hidden flex flex-col">
        <Hero onOpenPanel={null} />
        {/* Sections rendered normally below Hero */}
        <div className="bg-[#0a0a0a] relative z-20">
          <Skills onClose={() => { }} />
          <Projects />
          <Experience />
          <AboutMe />
          <Contact />
          <div className="pb-24"></div> {/* Bottom padding for mobile nav */}
        </div>

        {/* Mobile Navigation Bar */}
        <Sidebar />
      </div>


      {/* --- DESKTOP LAYOUT (Fixed Hero + Sliding Panel) >= md --- */}
      <div className="hidden md:block">
        {/* Layer 0: Fixed Hero Section (Background) */}
        <div className="fixed inset-0 z-0">
          <div className={`transition-all duration-700 w-full h-full ${isPanelOpen ? 'opacity-20 md:opacity-100' : 'opacity-100'}`}>
            <Hero onOpenPanel={handleOpenPanel} />
          </div>
        </div>

        {/* Layer 1: Sliding Content Panel (Skills + Projects) */}
        <AnimatePresence>
          {isPanelOpen && (
            <>
              <motion.div
                id="content-panel"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="fixed top-0 bottom-0 left-0 z-20 w-[60%] md:w-1/2 bg-[#0a0a0a]/95 backdrop-blur-xl border-r border-white/10 overflow-y-auto shadow-2xl"
              >
                <div className="flex flex-col min-h-screen">
                  <Skills onClose={() => setIsPanelOpen(false)} />
                  <Projects />
                  <Experience />
                  <AboutMe />
                  <Contact />

                </div>
              </motion.div>

              {/* Vertical Social Sidebar */}
              <SocialSidebar />
            </>
          )}
        </AnimatePresence>

        {/* Hint / UI Control */}
        {!isPanelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-stone-500 uppercase tracking-widest animate-pulse">Scroll to Explore</span>
            {/* <div className="w-[1px] h-12 bg-stone-700"></div> */}
          </motion.div>
        )}

        {/* Close Panel Overlay - Click on Hero to Close */}
        {isPanelOpen && (
          <div
            onClick={() => setIsPanelOpen(false)}
            className="fixed top-0 right-0 bottom-0 w-1/2 z-10 hidden md:block cursor-pointer"
            aria-label="Close panel"
            title="Click to close"
          />
        )}

        <Sidebar />
      </div>

    </div>
  );
}

export default App;

