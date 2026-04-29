import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Terminal, Folder, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
    // Note: Video files are handled via Git LFS
    const projects = [
        {
            id: '01',
            title: 'Talent-IQ',
            description: "The ultimate platform for collaborative coding interviews and pair programming. Connect face-to-face, code in real-time, and ace your technical interviews.",
            tech: ['Next.js', 'Tailwind', 'JavaScript', 'Node.js'],
            link: 'https://talent-1k5h60cdg-namanjain24-sudos-projects.vercel.app?_vercel_share=IzZ13dafQ3iS8ilNELdaRVAB9oT5w6re',
            github: 'https://github.com/namanjain24-sudo/talent-IQ',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/talent-iq.mp4',
            image: null
        },
        {
            id: '02',
            title: 'HomeScope360',
            description: "Advanced property listing engine featuring interactive 360° virtual tours, live pricing synchronization, and high-precision home search protocols.",
            tech: ['React', 'HTML5', 'CSS3', 'JavaScript'],
            link: 'https://home-scope360-ptoo85afk-namanjain24-sudos-projects.vercel.app/',
            github: 'https://github.com/namanjain24-sudo/HomeScope360',
            status: 'active',
            type: 'widget',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/homescape360.mp4'
        },
        {
            id: '03',
            title: 'CryptoVision',
            description: "Real-time cryptocurrency analytics grid synchronizing live market tickers and interactive telemetry charts via high-frequency REST APIs.",
            tech: ['React', 'Tailwind', 'Chart.js', 'REST API'],
            link: 'https://crypto-vision-ecru.vercel.app/',
            github: 'https://github.com/namanjain24-sudo/CryptoVision',
            status: 'deployed',
            type: 'browser',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/CryptoVision.mp4'
        },
        {
            id: '04',
            title: 'ArchForge',
            description: "ArchForge is a concept-driven platform that explores innovative architectural ideas through digital design and visualization. It showcases creative problem-solving and modern design thinking, though it is a conceptual project and may not fully reflect real-world accuracy.",
            tech: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
            link: 'https://archforge.vercel.app/?_vercel_share=JDxYCZUkL8Jlinv2JTUq5TpgbNv7UcRK',
            github: 'https://github.com/namanjain24-sudo/archforge',
            status: 'prototype',
            type: 'terminal',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/ArchForge.mP4'
        },
        //     {
        //         id: '05',
        //         title: 'chat_protocol',
        //         description: "Real-time messaging grid ensuring instant communication via WebSocket secure tunnels.",
        //         tech: ['Socket.io', 'React', 'Node'],
        //         link: '#',
        //         github: '#',
        //         status: 'prototype',
        //         type: 'terminal',
        //         video: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-4611/1080p.mp4'
        //     },
        //     {
        //         id: '06',
        //         title: 'chat_protocol',
        //         description: "Real-time messaging grid ensuring instant communication via WebSocket secure tunnels.",
        //         tech: ['Socket.io', 'React', 'Node'],
        //         link: '#',
        //         github: '#',
        //         status: 'prototype',
        //         type: 'terminal',
        //         video: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-4611/1080p.mp4'
        //     }
    ];

    return (
        <section id="projects" className="w-full min-h-screen py-24 bg-[#1a1a1d] text-stone-300 relative overflow-hidden font-mono select-none snap-start">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 mb-2 text-emerald-500/80 text-xs tracking-widest"
                    >
                        <Terminal size={12} />
                        <span>sudo list_projects</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
                    >
                        ACTIVE_DIRECTORIES
                        <span className="text-emerald-500">.</span>
                    </motion.h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {projects.map((project, idx) => (
                        <TerminalCard key={project.id} project={project} index={idx} />
                    ))}
                </div>

                {/* View More Link */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="https://github.com/namanjain24-sudo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 bg-[#0f0f11] border border-white/10 rounded-full hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
                    >
                        <Terminal size={14} className="text-stone-500 group-hover:text-emerald-500 transition-colors" />
                        <span className="text-xs font-mono text-stone-400 group-hover:text-white transition-colors">
                            cd <span className="text-emerald-500">~/github</span> && view_all
                        </span>
                        <ArrowUpRight size={14} className="text-stone-600 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                </div>

            </div>
        </section>
    );
};

const TerminalCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f0f11] border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10"
        >
            {/* Terminal Header */}
            <div className="bg-[#151517] border-b border-white/5 p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500/80 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/80 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/80 transition-colors" />
                    </div>
                    <span className="ml-3 text-[10px] text-stone-500 font-mono flex items-center gap-1.5">
                        <Folder size={10} />
                        ~/projects/{project.title}
                    </span>
                </div>
                <div className="text-[10px] text-stone-600 font-mono">
                    bash
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 relative">
                {/* Subtle Grid in Card */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                />

                <div className="relative z-10 flex flex-col h-full">

                    {/* Project Preview Area (Iframe or Placeholder) */}
                    <div className="mb-4 rounded overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors relative h-40 bg-[#050505]">
                        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-10 transition-opacity z-20 pointer-events-none" />

                        {project.video && project.video !== '#' ? (
                            <div className="w-full h-full relative group/video">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* CRT Scanline Overlay */}
                                <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.15]"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                                        backgroundSize: '100% 2px, 3px 100%'
                                    }}
                                />
                                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-10 transition-opacity z-20 pointer-events-none" />
                            </div>
                        ) : project.image ? (
                            <div className="w-full h-full relative group/image overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[150%] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    animate={{
                                        y: ["0%", "-33%", "0%"]
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-10 transition-opacity z-10 pointer-events-none" />
                            </div>
                        ) : project.link !== '#' && project.status === 'live' ? (
                            <div className="w-full h-full relative group/iframe">
                                <div className="absolute inset-0 z-10 bg-black/40 group-hover/iframe:bg-transparent transition-colors duration-500" />
                                <iframe
                                    src={project.link}
                                    title={project.title}
                                    className="w-[300%] h-[300%] border-none origin-top-left scale-[0.333] grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                                    loading="lazy"
                                />
                                {/* Overlay to indicate live preview */}
                                <div className="absolute bottom-2 right-2 z-20 px-1.5 py-0.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded text-[8px] text-emerald-500 font-bold uppercase tracking-tighter">
                                    Live Preview
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-[#0d0d0f] relative overflow-hidden">
                                <Code size={40} className="text-stone-800 mb-2" />
                                <span className="text-[10px] text-stone-700 font-mono">ENCRYPTED_PREVIEW</span>

                                {/* Static "Glitch" Background for placeholders */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                    <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)', backgroundSize: '100% 3px' }} />
                                </div>

                                {project.video && project.video !== '#' && (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
                                    />
                                )}
                            </div>
                        )}
                    </div>

                    {/* Title & Status */}
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold text-stone-200 group-hover:text-emerald-400 transition-colors">
                            {project.title}
                        </h3>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase border ${project.status === 'live' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
                            'bg-blue-500/10 border-blue-500/20 text-blue-400'
                            }`}>
                            {project.status}
                        </span>
                    </div>

                    {/* Description styled as comment */}
                    <div className="mb-4 font-mono text-xs text-stone-500 leading-relaxed">
                        <span className="text-stone-600">/* </span>
                        {project.description}
                        <span className="text-stone-600"> */</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t, i) => (
                                <span key={i} className="flex items-center gap-1 px-2 py-0.5 bg-white/5 rounded border border-white/5 text-[10px] text-stone-400 group-hover:text-stone-200 group-hover:border-white/10 transition-all">
                                    <Code size={8} />
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/5">
                        <a href={project.github} className="flex items-center gap-2 text-[10px] text-stone-500 hover:text-white transition-colors">
                            <Github size={12} />
                            <span>view_source</span>
                        </a>
                        <a href={project.link} className="flex items-center gap-2 text-[10px] text-stone-500 hover:text-emerald-400 transition-colors ml-auto">
                            <span>execute_deployment</span>
                            <ArrowUpRight size={12} />
                        </a>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
