import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    X,
    MousePointer2,
    Scroll,
    Move,
    ArrowRight
} from 'lucide-react';

const Skills = ({ onClose }) => {
    // --- Skill Data ---
    const skills = [
        { name: 'HTML5', icon: 'assets/html.png' },
        { name: 'CSS3', icon: 'css' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'TypeScript', icon: 'ts' },
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express', icon: 'express' },
        { name: 'React Native', icon: 'react' }, // Using React icon as standard
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Python', icon: 'python' },
        { name: 'NumPy', icon: 'python', customUrl: '/assets/NumPy.png' }, // Custom SVG
        { name: 'Pandas', icon: 'pandas', customUrl: '/assets/pandas.svg' }, // Custom SVG
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgres' },
        { name: 'Prisma ORM', icon: 'prisma' },
        { name: 'Supabase', icon: 'supabase' },
        { name: 'Firebase', icon: 'firebase' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Figma', icon: 'figma' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Framer Motion', icon: '/assets/framer.png' }, // or 'motion' if framermotion doesn't exist, checking skillicons docs usually 'motion' works or 'framer'
        { name: 'Power BI', icon: '/assets/power.png' },
        { name: 'Generative AI', icon: '/assets/genai-logo.png' },
        { name: 'Prompt Engineering', icon: 'bots' },
        { name: 'Tableau', icon: '/assets/tableau-logo.png' },
    ];

    // Additional skills without direct icon match might need handling or excluded from the visual grid if they break layout.
    // "Data Structure" is abstract. 

    // Soft Skills for the Professional Card
    const softSkills = [
        'Communication Skills',
        'Critical Thinking',
        'Decision-Making',
        'Time Management',
        'Problem-Solving',
        'Teamwork & Collaboration',
        'Adaptability',
        'Leadership',
        'Conflict Resolution',
        'Creativity',
        'Active Listening',
        'Work Ethic',
        'Attention to Detail',
        'Presentation Skills',
        'Interpersonal Skills',
        'Accountability',
        'Self-Motivation'
    ];
    // Data Structure is tech but fits as a "Concept" if no icon. Or I can find a way to add it to grid.


    // --- State ---
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Helper for icons
    const iconUrl = (slug) => `https://skillicons.dev/icons?i=${slug}&theme=dark`;

    // Navigation Handler
    const handleNavClick = (e, item) => {
        e.preventDefault();

        // Close the local navigation menu
        setIsNavOpen(false);

        const targetId = item.toLowerCase();

        if (targetId === 'home' || targetId === 'about') {
            // "Home" and "About" essentially mean closing the panel to reveal the Hero
            if (onClose) onClose();
        } else {
            // For sections inside the panel (Skills, Projects, Experience) (using document as scrolling container is window-like inside panel)
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="skills" className="w-full min-h-screen py-20 bg-[#1a1a1d] relative overflow-hidden select-none snap-start">
            {/* Background Texture - Dots */}
            <div className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            {/* Background Texture - Diagonal Lines */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)', backgroundSize: '4px 4px' }}
            />

            <div className="flex flex-col items-center mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-2"
                >
                    <span className="h-[1px] w-8 bg-emerald-500/50"></span>
                    <span className="text-emerald-500 text-[10px] tracking-[0.2em] font-mono uppercase">System Capabilities</span>
                    <span className="h-[1px] w-8 bg-emerald-500/50"></span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    <span className="text-white/20 mr-2">{'{'}</span>
                    SKILL_SET
                    <span className="text-white/20 ml-2">{'}'}</span>
                </h1>
            </div>
            <div className="max-w-6xl mx-auto px-6">

                {/* 1. Technical Skills Grid - Compact & Sleek */}
                <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-1.5 mb-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.03, duration: 0.3 }} // Slower stagger
                            viewport={{ once: true }}
                            className="aspect-square bg-[#222] border border-white/5 rounded-lg flex items-center justify-center p-1 sm:p-1.5 md:p-2 group hover:bg-[#2a2a2a] transition-colors relative overflow-hidden shadow-sm cursor-pointer"
                        >
                            <img
                                src={skill.customUrl || (skill.icon.includes('/') || skill.icon.includes('.') ? skill.icon : iconUrl(skill.icon))}
                                alt={skill.name}
                                className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110" 
                                loading="lazy"
                            />

                            {/* Hover Name Tooltip - Slides up from bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-black/90 backdrop-blur-md flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                                <span className="text-[9px] font-bold text-white tracking-wider truncate px-1">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 2. Dashboard Bottom Section - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                    {/* Card 1: Problem Solving (Globe Image) - Span 4 */}


                    {/* Card 2: Professional Skills - Span 5 */}
                    <div className="col-span-1 md:col-span-12 bg-[#202022] border border-white/5 rounded-xl p-5 flex flex-col justify-between h-auto shadow-lg">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Professional Skills</h3>
                            <p className="text-stone-500 text-xs mb-4">
                                A showcase of essential soft skills.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {softSkills.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-[#2a2a2c] border border-white/5 rounded text-[10px] text-stone-400 hover:text-stone-200 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Navigation - Span 3 - Adapted from User Snippet */}
                    <div className="col-span-1 md:col-span-12 h-full min-h-[200px] relative hidden lg:block">
                        <div className={`w-full h-full bg-[#202022] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden shadow-lg flex flex-col relative`}>

                            {/* Closed State (Default) */}
                            <motion.div
                                className="absolute inset-0 z-20 cursor-pointer overflow-hidden"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: isNavOpen ? 0 : 1, pointerEvents: isNavOpen ? 'none' : 'auto' }}
                                onClick={() => setIsNavOpen(true)}
                            >
                                {/* CSS-based "DEVELOPER" Background (Replacing image) */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                                    <h1 className="text-[6rem] md:text-[8rem] font-bold text-white/[0.03] -rotate-90 md:rotate-0 tracking-tighter leading-none whitespace-nowrap absolute right-[-20%] md:right-[-25%] top-1/2 -translate-y-1/2 scale-y-150">
                                        DEVELOPER
                                    </h1>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#202022] via-transparent to-transparent"></div>
                                </div>

                                {/* Overlay for better text contrast */}
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col relative z-10">
                                    <div className="flex justify-end">
                                        <Menu size={24} className="text-white/80" strokeWidth={1.5} />
                                    </div>
                                    <div className="mt-auto">
                                        <h3 className="text-2xl font-bold text-white mb-2">Navigation</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Visually structure your pages and link to them with a few clicks.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Open State (Menu) - Logic from snippet */}
                            <AnimatePresence>
                                {isNavOpen && (
                                    /* Drawer - Removed backdrop as requested */
                                    <motion.div
                                        className="absolute top-0 right-0 bottom-0 z-30 flex flex-col bg-[#1a1a1d] border-l border-white/10 shadow-2xl"
                                        style={{ width: '60%' }}
                                        initial={{ x: '100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100%' }}
                                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                                    >
                                        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#202022]">
                                            <span className="text-xs font-bold text-stone-400 tracking-wider">MENU</span>
                                            <X
                                                size={18}
                                                className="text-stone-400 hover:text-white cursor-pointer transition-colors"
                                                onClick={() => setIsNavOpen(false)}
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col p-2 gap-0.5 overflow-y-auto">
                                            {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((item) => (
                                                <a
                                                    key={item}
                                                    href={`#${item.toLowerCase()}`}
                                                    className="px-4 py-3 rounded-lg hover:bg-[#252527] text-sm text-stone-400 hover:text-white flex items-center justify-between group transition-colors"
                                                    onClick={(e) => handleNavClick(e, item)}
                                                >
                                                    {item}
                                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
