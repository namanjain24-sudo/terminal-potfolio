import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Terminal, Folder, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
    // Note: Video files are handled via Git LFS
    const projects = [
        {
            id: '01',
            title: 'verbatim',
            description: "Meeting intelligence for Hinglish calls. Cited minutes, decisions and action items where every claim carries a timestamped citation back to the transcript, and anything that cannot be grounded is dropped. 100% precision on the adversarial set, ~$0.08 per meeting-hour, self-hosted.",
            tech: ['Python', 'FastAPI', 'Whisper', 'Qdrant', 'Playwright'],
            link: 'https://github.com/namanjain24-sudo/verbatim',
            github: 'https://github.com/namanjain24-sudo/verbatim',
            status: 'open source',
            image: 'https://raw.githubusercontent.com/namanjain24-sudo/verbatim/main/web/assets/shot-dashboard.png'
        },
        {
            id: '02',
            title: 'Gauntlet',
            description: "Adversarial arena for prompt-injection defenses. Holds whole attack families out of training, evolves new attacks with a 21-operator mutation search, and checks the result against 662 real human-written injections. Five defenders benchmarked; plug your own in over HTTP. Runs on a laptop CPU, no API keys.",
            tech: ['Python', 'scikit-learn', 'PyTorch', 'pytest'],
            link: 'https://github.com/namanjain24-sudo/gauntlet',
            github: 'https://github.com/namanjain24-sudo/gauntlet',
            status: 'research',
            image: 'https://raw.githubusercontent.com/namanjain24-sudo/gauntlet/main/reports/preview.png'
        },
        {
            id: '03',
            title: 'ArchForge',
            description: "Type a product idea in plain English and get a verified 15-20 component system architecture with capacity math, per-component reasoning and a Well-Architected review. Three deterministic verification layers sit between the model and the canvas. Benchmarked at 98% recall against Uber, Instagram and Netflix.",
            tech: ['React', 'React Flow', 'Node.js', 'Express', 'LLM'],
            link: 'https://archforge.vercel.app/',
            github: 'https://github.com/namanjain24-sudo/archforge',
            status: 'live',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/ArchForge.mP4'
        },
        {
            id: '04',
            title: 'Hindsight',
            description: "Financial news intelligence that grades itself. Ingests 14 live sources, dedupes them into events, scores market impact with grounded LLM analysis, and seals every directional call before the outcome exists so accuracy is measured against real price moves rather than asserted.",
            tech: ['Python', 'FastAPI', 'Next.js', 'GitHub Actions'],
            link: 'https://github.com/namanjain24-sudo/hindsight',
            github: 'https://github.com/namanjain24-sudo/hindsight',
            status: 'open source',
            image: null
        },
        {
            id: '05',
            title: 'Nova',
            description: "A visual website builder for the browser. Drag blocks onto a canvas, style them in an inspector, and export a dependency-free site as HTML or React. 46 blocks, 24 templates, responsive breakpoints, undo/redo, a command palette and one-click publishing.",
            tech: ['React', 'TypeScript', 'Vite', 'Node.js'],
            link: 'https://github.com/namanjain24-sudo/nova',
            github: 'https://github.com/namanjain24-sudo/nova',
            status: 'open source',
            image: null
        },
        {
            id: '06',
            title: 'ClipStudio',
            description: "A timeline video editor that runs entirely in the browser. Multi-track editing, eased keyframes, chroma key, colour grading, transitions, captions transcribed locally with Whisper, and a real MP4 encoded on your machine through WebCodecs. Nothing is uploaded to render.",
            tech: ['Next.js', 'React', 'TypeScript', 'WebCodecs', 'Prisma'],
            link: 'https://github.com/namanjain24-sudo/clipstudio',
            github: 'https://github.com/namanjain24-sudo/clipstudio',
            status: 'open source',
            image: 'https://raw.githubusercontent.com/namanjain24-sudo/clipstudio/main/test-editor.png'
        },
        {
            id: '07',
            title: 'Witness',
            description: "Bug report in, verified reproduction out. Takes a vague human-written bug report and drives a real browser to reproduce it, claiming CONFIRMED only after deterministic checks trip on three clean re-runs. Precision is gated at 100% in the eval harness; recall is reported honestly.",
            tech: ['TypeScript', 'Playwright', 'Vite', 'Vitest'],
            link: 'https://github.com/namanjain24-sudo/witness',
            github: 'https://github.com/namanjain24-sudo/witness',
            status: 'in progress',
            image: null
        },
        {
            id: '08',
            title: 'easycron',
            description: "Cron that survives free-tier hosting. Takes a schedule in plain English, compiles it to cron, and wires up an external trigger through GitHub Actions, UptimeRobot or cron-job.org so the job fires even when Render or Railway puts the instance to sleep. Published on npm as easycron-cli.",
            tech: ['Node.js', 'npm', 'GitHub Actions'],
            link: 'https://www.npmjs.com/package/easycron-cli',
            github: 'https://github.com/namanjain24-sudo/easycron',
            status: 'live',
            image: 'https://raw.githubusercontent.com/namanjain24-sudo/easycron/main/demo.gif'
        },
        {
            id: '09',
            title: 'Talent-IQ',
            description: "Technical interview platform with a real-time collaborative code editor, video interviews and JWT auth, built for concurrent users.",
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
            link: 'https://talent-1k5h60cdg-namanjain24-sudos-projects.vercel.app?_vercel_share=IzZ13dafQ3iS8ilNELdaRVAB9oT5w6re',
            github: 'https://github.com/namanjain24-sudo/talent-IQ',
            status: 'live',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/talent-iq.mp4'
        },
        {
            id: '10',
            title: 'HomeScope360',
            description: "Real-estate browser with interactive 360° virtual tours, search by neighbourhood and amenities, and saved listings.",
            tech: ['React', 'Vite', 'Firebase', 'CSS3'],
            link: 'https://home-scope360-hpgl.vercel.app/',
            github: 'https://github.com/namanjain24-sudo/HomeScope360',
            status: 'live',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/homescape360.mp4'
        },
        {
            id: '11',
            title: 'CryptoVision',
            description: "Crypto analytics dashboard with a live market ticker, portfolio view and interactive charts fed by REST APIs.",
            tech: ['React', 'Tailwind', 'Chart.js', 'REST API'],
            link: 'https://crypto-vision-ecru.vercel.app/',
            github: 'https://github.com/namanjain24-sudo/CryptoVision',
            status: 'live',
            video: 'https://github.com/namanjain24-sudo/terminal-potfolio/raw/main/public/CryptoVision.mp4'
        }
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
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] text-stone-500 hover:text-white transition-colors">
                            <Github size={12} />
                            <span>view_source</span>
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] text-stone-500 hover:text-emerald-400 transition-colors ml-auto">
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
