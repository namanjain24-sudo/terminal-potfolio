import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-8 py-4">
                <div className="flex items-center gap-12 text-sm font-medium text-stone-400">
                    <a href="#projects" className="hover:text-stone-200 transition-colors">Projects</a>
                    <a href="#about" className="hover:text-stone-200 transition-colors">About</a>
                    <a href="#contact" className="hover:text-stone-200 transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
