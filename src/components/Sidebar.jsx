import React, { useState, useEffect } from 'react';
import { Home, User, Lightbulb, Briefcase, Mail, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll spy & visibility
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Show sidebar after passing Hero section (approx 50vh or 400px)
            setIsVisible(scrollY > 400);

            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'skills', icon: Cpu, label: 'Skills' },
        { id: 'projects', icon: Briefcase, label: 'Projects' },
        { id: 'contact', icon: Mail, label: 'Contact' },
    ];

    return (
        <>
            {/* Desktop Sidebar - Right Aligned & Sleek */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed right-0 top-0 h-screen w-16 md:w-20 z-50 flex flex-col items-center justify-center hidden md:flex"
                    >
                        {/* Background with Curved Edge (Flipped) */}
                        <div className="absolute inset-y-0 right-0 w-full bg-[#1a1a1d]/80 backdrop-blur-lg shadow-2xl border-l border-white/5">
                            {/* The Curve SVG Overlay - now on the LEFT */}
                            <svg
                                className="absolute top-0 left-[-40px] h-full w-[40px] pointer-events-none"
                                viewBox="0 0 40 100"
                                preserveAspectRatio="none"
                            >
                                {/* Curve pointing LEFT into the content: Starts Top-Right, Curves Left, Ends Bottom-Right */}
                                <path d="M40,0 Q0,50 40,100" fill="rgba(26, 26, 29, 0.8)" />

                                {/* Highlight stroke */}
                                <path d="M40,0 Q0,50 40,100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                {/* An extra glow line for effect */}
                                {/* <path d="M0,20 Q35,50 0,80" fill="none" stroke="url(#sidebar-glow)" strokeWidth="2" strokeOpacity="0.5" /> */}

                                {/* <defs>
                                    <linearGradient id="sidebar-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="50%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs> */}
                            </svg>
                        </div>

                        {/* Navigation Items */}
                        <nav className="relative z-10 flex flex-col gap-8 w-full items-center">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`relative group flex flex-col items-center gap-1 p-2 transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-50 hover:opacity-100 hover:scale-105'}`}
                                        onClick={() => setActiveSection(item.id)}
                                    >
                                        {/* Active Indicator Dot - Right side now? Or Left? Let's put it on the Left (inner side) */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav"
                                                className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-l-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                            />
                                        )}

                                        <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/10 text-emerald-400' : 'text-stone-400 group-hover:text-white'}`}>
                                            <item.icon size={18} strokeWidth={1.5} />
                                        </div>
                                        <span className={`text-[8px] font-mono tracking-wider transition-colors ${isActive ? 'text-emerald-400 font-bold' : 'text-stone-500 group-hover:text-stone-300'}`}>
                                            {item.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Bottom Nav (Simple fallback for small screens) */}
            <div className="md:hidden fixed bottom-4 inset-x-4 bg-[#1a1a1d]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 z-50 flex justify-between items-center shadow-2xl">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActiveSection(item.id)}
                            className={`flex flex-col items-center gap-1 ${isActive ? 'text-emerald-400' : 'text-stone-500'}`}
                        >
                            <item.icon size={18} />
                            <span className="text-[9px]">{item.label}</span>
                        </a>
                    )
                })}
            </div>
        </>
    );
};

export default Sidebar;
