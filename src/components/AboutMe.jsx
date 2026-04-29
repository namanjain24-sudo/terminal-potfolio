import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="w-full py-24 bg-[#1a1a1d] text-stone-300 relative overflow-hidden font-mono snap-start border-t border-white/5">

            {/* Background Texture - Minimal Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mb-2 text-emerald-500/80 text-xs tracking-widest"
                    >
                        <Terminal size={12} />
                        <span>sudo ./display_lifecycle.sh</span>
                    </motion.div>
                </div>

                {/* The Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden shadow-2xl relative"
                >
                    {/* Terminal Top Bar */}
                    <div className="bg-[#151517] border-b border-white/5 px-4 py-2 flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                        </div>
                        <div className="text-[10px] text-stone-500 font-mono tracking-wide">
                            naman@system:~/profile
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-8 font-mono text-sm leading-relaxed text-stone-300">

                        {/* Prompt */}
                        <div className="flex items-center gap-2 mb-6 text-emerald-500">
                            <span>➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-stone-300">node lifecycle.js --verbose</span>
                        </div>

                        {/* JSON / Log Content */}
                        <div className="space-y-1">

                            <div className="text-stone-500 text-xs mb-4">
                                // Loading user profile data...
                            </div>

                            <div className="pl-2 border-l border-white/10 space-y-4">

                                {/* Origin Block */}
                                <div>
                                    <span className="text-purple-400">const</span> <span className="text-yellow-400">origin</span> = <span className="text-stone-300">{'{'}</span>
                                    <div className="pl-4">
                                        <span className="text-blue-300">born</span>: <span className="text-orange-300">"21-Aug-2006"</span>, <span className="text-stone-500">// Initialize Date</span>
                                        <br />
                                        <span className="text-blue-300">location</span>: <span className="text-orange-300">"India"</span>,
                                        <br />
                                        <span className="text-blue-300">class</span>: <span className="text-orange-300">"Human"</span>
                                    </div>
                                    <span className="text-stone-300">{'}'};</span>
                                </div>

                                {/* Journey Array */}
                                <div>
                                    <span className="text-purple-400">const</span> <span className="text-yellow-400">journeyTimeline</span> = <span className="text-stone-300">[</span>
                                    <div className="pl-4 space-y-2 mt-1">

                                        {/* Step 1 */}
                                        <div className="hover:bg-white/5 p-1 -ml-1 rounded transition-colors">
                                            <span className="text-stone-300">{'{'}</span> <span className="text-blue-300">year</span>: <span className="text-emerald-500">2024</span>, <span className="text-blue-300">event</span>: <span className="text-orange-300">"Completed Schooling From "Delhi International Public School"</span>, <span className="text-stone-500 text-xs">// Wrote first line of code</span> <span className="text-stone-300">{'}'},</span>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="hover:bg-white/5 p-1 -ml-1 rounded transition-colors">
                                            <span className="text-stone-300">{'{'}</span> <span className="text-blue-300">year</span>: <span className="text-emerald-500">2024</span>, <span className="text-blue-300">event</span>: <span className="text-orange-300">"Admission In Newton School Of Technology(RU)"</span>, <span className="text-stone-500 text-xs">// Deep dive to buid successfull future</span> <span className="text-stone-300">{'}'},</span>
                                        </div>



                                        {/* Step 3 */}
                                        <div className="hover:bg-white/5 p-1 -ml-1 rounded transition-colors">
                                            <span className="text-stone-300">{'{'}</span> <span className="text-blue-300">year</span>: <span className="text-emerald-500">2025</span>, <span className="text-blue-300">event</span>: <span className="text-orange-300">"Got Offer Letter For First Intership"</span>, <span className="text-stone-500 text-xs">// MERN Stack mastery</span> <span className="text-stone-300">{'}'},</span>
                                        </div>

                                        {/* Step 4 */}
                                        <div className="hover:bg-white/5 p-1 -ml-1 rounded transition-colors">
                                            <span className="text-stone-300">{'{'}</span> <span className="text-blue-300">year</span>: <span className="text-emerald-500">2025</span>, <span className="text-blue-300">event</span>: <span className="text-orange-300">"Contributed To Open Source Projects"</span>, <span className="text-stone-500 text-xs"></span> <span className="text-stone-300">{'}'},</span>
                                        </div>

                                        {/* Step 2.5: Gen AI Training */}
                                        <div className="hover:bg-white/5 p-1 -ml-1 rounded transition-colors">
                                            <span className="text-stone-300">{'{'}</span> <span className="text-blue-300">year</span>: <span className="text-emerald-500">2026</span>, <span className="text-blue-300">event</span>: <span className="text-orange-300">"Freelance Gen AI Trainer"</span>, <span className="text-stone-500 text-xs">// Trained 20+ students in Gen AI</span> <span className="text-stone-300">{'}'},</span>
                                        </div>

                                        {/* Step 5 */}
                                        <div className="hover:bg-white/5 p-1 -ml-1 rounded transition-colors border-l-2 border-emerald-500 bg-emerald-500/5">
                                            <span className="text-stone-300">{'{'}</span> <span className="text-blue-300">year</span>: <span className="text-emerald-500">Current</span>, <span className="text-blue-300">status</span>: <span className="text-orange-300">"Building_Scale"</span>, <span className="text-stone-500 text-xs">// Architecting complex systems</span> <span className="text-stone-300">{'}'}</span>
                                        </div>

                                    </div>
                                    <span className="text-stone-300">];</span>
                                </div>

                                {/* Summary */}
                                <div className="pt-2">
                                    <span className="text-purple-400">return</span> <span className="text-orange-300">"Ready to collaborate."</span>;
                                </div>

                            </div>
                        </div>

                        {/* Blinking Cursor */}
                        <div className="mt-6 flex items-center gap-2">
                            <span className="text-emerald-500">➜</span>
                            <span className="w-2 h-4 bg-emerald-500/50 animate-pulse"></span>
                        </div>
                    </div>

                    {/* Top-Right Decorative "Compile" Status */}
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-1 opacity-50">
                        <div className="text-[10px] text-emerald-500 font-mono">COMPILED_SUCCESSFULLY</div>
                        <div className="text-[9px] text-stone-600 font-mono">42ms</div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default AboutMe;
