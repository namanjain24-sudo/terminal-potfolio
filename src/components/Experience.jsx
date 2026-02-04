import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Terminal, Cpu, Shield, Globe, Lock } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 'ID-8492',
            role: 'MERN STACK DEVELOPER',
            company: 'Klariti Learning',
            period: 'JUNE_2025 - AUG_2025',
            location: 'Remote ',
            description: "Built a full-stack LMS using MERN stack with role-based access, dynamic course management, REST APIs, and responsive React UI optimized for performance and scalability.",
            tech: ['React', 'Node.js', 'AWS','Mongodb','Next.js','Tailwind CSS'],
            stats: "Used by 100+ Users",
            accessLevel: 'Lvl. 5'
        },
        {
            id: 'ID-3321',
            role: "FREELANCE PROJECT'S",
            company: 'CONFIDENTIAL',
            period: 'AUG_2025 - PRESENT',
            location: 'Remote',
            description: "Core contributor to a production-grade web platform, delivering scalable features and integrating secure APIs with real-time communication. Focused on performance optimization, system reliability, and maintainable architecture.",
            tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'Shadcn UI', 'Prisma', 'Stripe', 'Auth.js', 'AWS', 'Node.js', 'MongoDB'],
            stats: "Used by 200+ Users",
            accessLevel: 'Lvl. 3'
        }
    ];

    return (
        <section id="experience" className="w-full py-24 bg-[#1a1a1d] text-stone-300 relative overflow-hidden font-mono snap-start border-t border-white/5">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 mb-3 text-emerald-500/80 text-xs tracking-[0.2em] uppercase font-bold border border-emerald-500/20 px-3 py-1 rounded bg-emerald-500/5"
                    >
                        <Shield size={12} />
                        <span>Clearance_Logs</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
                    >
                        PROFESSIONAL_DATA
                    </motion.h2>
                </div>

                {/* Secure Cards List */}
                <div className="max-w-2xl mx-auto space-y-8">
                    {experiences.map((exp, idx) => (
                        <SecureCard key={exp.id} data={exp} index={idx} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const SecureCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative"
        >
            {/* Holographic Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>

            <div className="relative bg-[#0f0f11] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10">

                {/* Scanner Light Effect */}
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-[1500ms] ease-in-out pointer-events-none"></div>

                {/* Card Header (Strip) */}
                <div className="bg-[#151517] border-b border-white/5 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] text-stone-500 font-bold tracking-wider uppercase">ID: {data.id}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-stone-600 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        <Lock size={10} />
                        <span>{data.accessLevel} ACCESS</span>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                {data.role}
                            </h3>
                            <div className="flex items-center gap-2 text-stone-400 font-medium">
                                <Briefcase size={14} className="text-emerald-500" />
                                <span>{data.company}</span>
                            </div>
                        </div>

                        <div className="text-right flex flex-col items-start md:items-end gap-1">
                            <span className="text-xs font-bold text-stone-300 bg-white/5 px-2 py-1 rounded">
                                {data.period}
                            </span>
                            <span className="text-[10px] text-stone-500 flex items-center gap-1">
                                <Globe size={10} />
                                {data.location}
                            </span>
                        </div>
                    </div>

                    <p className="text-sm text-stone-400 leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-emerald-500/50 transition-colors">
                        {data.description}
                    </p>

                    {data.stats && (
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                {data.stats}
                            </span>
                        </div>
                    )}

                    {/* Tech Footer */}
                    <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                        <span className="text-[10px] text-stone-600 font-bold uppercase tracking-wider">Stack:</span>
                        <div className="flex flex-wrap gap-2">
                            {data.tech.map((t, i) => (
                                <span key={i} className="px-2 py-1 text-[10px] bg-[#1a1a1d] border border-white/10 text-stone-400 rounded group-hover:border-emerald-500/20 group-hover:text-emerald-500/80 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Experience;
