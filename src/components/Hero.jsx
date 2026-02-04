import React, { useState, useEffect } from 'react';


const Hero = ({ onOpenPanel }) => {
    const [time, setTime] = useState('');
    const [greeting, setGreeting] = useState('Greetings');
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleLightMode = () => setIsLightMode(!isLightMode);

    const greetings = [
        "Greetings",
        // "Hello",
        // "Namaste",
        // "Bonjour",
        // "Hola",
        // "Konnichiwa"
    ];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Asia/Kolkata'
            });
            setTime(`${timeString} IST`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % greetings.length;
            setGreeting(greetings[currentIndex]);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    // Handler to prevent default anchor and open panel
    // Handler to prevent default anchor and open panel
    const handleNavClick = (e, targetId) => {
        // If mobile (check width), allow default scrolling behavior
        if (window.innerWidth < 768) {
            return;
        }

        e.preventDefault();
        if (onOpenPanel) onOpenPanel(targetId);
        // Optional: Smooth scroll to target inside panel if needed, 
        // but for now just opening panel is the request.
    };

    return (
        <section className="relative w-full min-h-screen lg:h-screen flex flex-col items-center justify-start overflow-x-hidden bg-[#1a1a1d] text-stone-300 font-mono snap-start">
            {/* Light Mode Overlay (Bulb Effect) */}
            <div className={`fixed inset-0 pointer-events-none transition-opacity duration-700 z-[1] ${isLightMode ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-overlay"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/20 blur-[150px] rounded-full"></div>
            </div>

            {/* Grid Background Image */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-80"
                style={{
                    backgroundImage: 'url(/grid-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />



            {/* Top Bar / Header */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-[#0f0f11] border-b border-white/5 flex items-center px-4 md:px-6 justify-between z-40 text-[11px] md:text-[13px] tracking-wide text-stone-500">
                <div className="flex items-center gap-2 min-w-[140px] md:min-w-[200px]">
                    <span className="text-stone-400 font-bold">ECHO</span>
                    <span className="text-stone-600">→</span>
                    <span className="truncate max-w-[80px] md:max-w-none">/home/naman</span>
                </div>

                {/* Navigation Removed - Replaced by Sidebar */}
                <div className="flex flex-1 items-center justify-center gap-8">
                </div>

                <div className="flex items-center gap-3 min-w-[100px] md:min-w-[200px] justify-end">
                    <span>{time}</span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[90%] 2xl:scale-110 2xl:origin-top mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-20 md:mt-28 mb-20 md:mb-0 transition-all duration-500">

                {/* Left Side - System Status */}
                <div className="lg:col-span-3 order-3 lg:order-1">
                    <div className="bg-[#0f0f11]/40 border border-white/10 p-5 rounded">
                        <h3 className="text-stone-400 text-xs font-bold tracking-wider mb-5 uppercase">System Status</h3>

                        <div className="space-y-3 text-xs">
                            <div className="flex items-start gap-2">
                                <span className="text-stone-600">•</span>
                                <div className="flex-1">
                                    <span className="text-stone-600">Status:</span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        <span className="text-green-400">Online</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-stone-600">•</span>
                                <div className="flex-1">
                                    <span className="text-stone-600">Location:</span>
                                    <div className="text-stone-300 mt-1">India</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-stone-600">•</span>
                                <div className="flex-1">
                                    <span className="text-stone-600">Mode:</span>
                                    <div className="text-stone-300 mt-1">Building</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-stone-600">•</span>
                                <div className="flex-1">
                                    <span className="text-stone-600">Focus:</span>
                                    <div className="text-stone-300 mt-1">Web Solutions / DX</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 pt-3 border-t border-white/5">
                                <span className="text-stone-600">•</span>
                                <div className="flex-1">
                                    <span className="text-stone-600">Last Commit Message:</span>
                                    <div className="text-stone-400 mt-1">"Updated README.md"</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Socials / Connect Box */}
                    <div className="bg-[#0f0f11]/40 border border-white/10 p-5 rounded mt-4">
                        <h3 className="text-stone-400 text-xs font-bold tracking-wider mb-4 uppercase">Connect</h3>
                        <div className="space-y-3">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-stone-400 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-sm">
                                <div className="w-2 h-2 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                                <span>LinkedIn</span>
                                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-stone-400 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-sm">
                                <div className="w-2 h-2 rounded-full bg-stone-500/50 group-hover:bg-white transition-colors"></div>
                                <span>GitHub</span>
                                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-stone-400 hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-sm">
                                <div className="w-2 h-2 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors"></div>
                                <span>LeetCode</span>
                                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                            <a href="/resume.pdf" download className="flex items-center gap-3 text-xs text-stone-400 hover:text-emerald-400 transition-colors group p-2 hover:bg-emerald-500/5 rounded-sm border border-transparent hover:border-emerald-500/20 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Center - Main Greeting */}
                <div className="lg:col-span-5 lg:pl-8 order-1 lg:order-2">
                    <div className="mb-3">
                        <span className="text-stone-400 text-3xl transition-all duration-500 ease-in-out inline-block min-w-[120px]">
                            {greeting},
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-normal text-stone-200 mb-5 leading-tight">
                        I'm Naman Jain.
                    </h1>
                    <div className="space-y-3">
                        <p className="text-stone-400 text-2xl">Full Stack Engineer.</p>
                        <p className="text-stone-500 text-xl">“Building scalable systems that last.”</p>
                    </div>
                </div>

                {/* Right Side - Profile Card */}
                <div className="lg:col-span-4 order-2 lg:order-3">
                    <div className="bg-[#0f0f11]/60 border border-white/10 p-4 rounded shadow-xl transform rotate-1">
                        {/* Profile Image */}
                        <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded bg-[#0a0a0a]">
                            <img
                                src="/image.png"
                                alt="Naman Jain"
                                className="w-full h-full object-cover grayscale"
                            />
                            {/* Gradient overlay on image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                        </div>

                        {/* Profile Info */}
                        <div className="mb-4">
                            <h3 className="text-stone-200 font-semibold text-base mb-1">Naman Jain</h3>
                            <p className="text-stone-500 text-xs mb-3">Full-Stack Developer</p>

                            <div className="flex items-center gap-2 text-xs mb-3">
                                <span className="text-emerald-500">---Currently open to work---</span>
                            </div>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {['* Open Source Contributor', "* Freelancer",].map(tag => (
                                    <span key={tag} className="px-2 py-0.5 text-[10px] bg-stone-800/50 border border-white/5 text-stone-400 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-2 text-xs mb-3">

                                <div className="flex items-center gap-1">
                                    <span className="text-stone-600">•</span>
                                    <span className="text-stone-500">147 commits</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-stone-600">•</span>
                                    <span className="text-stone-500">+764 followers</span>
                                </div>
                                {/* <a href="/resume.pdf" download className="flex items-center gap-3 text-xs text-stone-400 hover:text-emerald-400 transition-colors group p-2 hover:bg-emerald-500/5 rounded-sm border border-transparent hover:border-emerald-500/20 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span>Download Resume</span>
                                </a>     */}
                            </div>

                            {/* Location */}
                            <div className="flex flex-col gap-2 text-xs text-stone-600">
                                <div className="flex items-center gap-2">
                                    <span>Location</span>
                                    <span className="text-stone-500">🇮🇳 India</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Contact</span>
                                    <span className="text-stone-500">+91 8368063363</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Email</span>
                                    <span className="text-stone-500">namanjainpy@gmail.com</span>
                                </div>
                                <a href="/resume.pdf" download className="flex items-center gap-3 text-xs text-stone-400 hover:text-emerald-400 transition-colors group p-1 hover:bg-emerald-300/5 rounded-sm border border-transparent hover:border-emerald-500/20 w-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span>↓ Download Resume</span>
                                </a>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                            <span className="text-stone-600">CDU //India</span>
                            <div className="flex gap-2">
                                <span className="text-stone-600">⚙</span>
                                <span className="text-stone-600">in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CMD Bar */}
            <div className="hidden md:block absolute bottom-5 left-0 right-0 max-w-6xl mx-auto px-4 z-40">
                <div className="bg-[#0f0f11]/90 backdrop-blur-md border border-white/10 rounded flex items-center justify-between px-4 md:px-6 py-3 shadow-2xl">
                    <div className="flex items-center gap-3 md:gap-6 min-w-fit">
                        <span className="text-stone-500 text-[10px] md:text-xs font-mono font-bold tracking-wider whitespace-nowrap">&lt; CMD INPUT</span>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6 text-xs font-mono overflow-x-auto no-scrollbar scroll-smooth">
                        <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2 whitespace-nowrap cursror-pointer">
                            <span className="text-emerald-500/50">&gt;</span>
                            <span>/skills</span>
                        </a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2 whitespace-nowrap cursror-pointer">
                            <span className="text-emerald-500/50">&gt;</span>
                            <span>/projects</span>
                        </a>

                        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2 whitespace-nowrap">
                            <span className="text-emerald-500/50">&gt;</span>
                            <span>/experience</span>
                        </a>
                        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2 whitespace-nowrap">
                            <span className="text-emerald-500/50">&gt;</span>
                            <span>/about</span>
                        </a>
                        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-2 whitespace-nowrap">
                            <span className="text-emerald-500/50">&gt;</span>
                            <span>/contact</span>
                        </a>
                    </div>
                </div>
            </div>


        </section>
    );
};


export default Hero;
