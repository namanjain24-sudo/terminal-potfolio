import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Terminal, ChevronRight, Minimize2, X, Maximize2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [copied, setCopied] = useState(false);
    const [phoneCopied, setPhoneCopied] = useState(false);
    const [focusedLine, setFocusedLine] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`System Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Origin: ${formData.name} <${formData.email}>\n\nPayload:\n${formData.message}`);
        window.location.href = `mailto:namanjainpy@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('namanjainpy@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('+91 8368063363');
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
    };

    return (
        <section id="contact" className="w-full pt-24 pb-8 bg-[#0a0a0a] text-stone-300 relative overflow-hidden font-mono snap-start flex items-center border-t border-white/5">

            {/* Matrix-like subtle background */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, #10b981 25%, #10b981 26%, transparent 27%, transparent 74%, #10b981 75%, #10b981 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #10b981 25%, #10b981 26%, transparent 27%, transparent 74%, #10b981 75%, #10b981 76%, transparent 77%, transparent)',
                    backgroundSize: '50px 50px'
                }}>
            </div>

            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 relative z-10">

                {/* Section Title as Command */}
                <div className="mb-12 flex items-center gap-2 text-emerald-500/50 text-xs md:text-sm">
                    <Terminal size={14} />
                    <span className="text-emerald-500 font-bold">root@portfolio:~/contact</span>
                    <span className="text-stone-500 hidden sm:inline">$ ./initiate_comm_link.sh</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: System Status / Info (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">

                        <div className="p-5 border border-white/10 bg-[#0f0f11] rounded shadow-2xl relative overflow-hidden">
                            {/* Decorative header */}
                            <div className="flex items-center gap-1.5 mb-5 border-b border-white/5 pb-3">
                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                <div className="ml-auto text-[9px] text-stone-600 tracking-wider">SYSTEM_INFO</div>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <div className="text-[9px] text-stone-500 mb-1 uppercase tracking-wider">Status Check</div>
                                    <div className="text-lg text-white font-bold flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                        ONLINE
                                    </div>
                                    <p className="text-[11px] text-stone-500 mt-2 leading-relaxed">
                                        System is active. Latency nominal. Ready for data transmission.
                                    </p>
                                </div>

                                <div className="h-px bg-white/5"></div>

                                <div className="space-y-3">
                                    <div className="group">
                                        <div className="text-[9px] text-emerald-500/70 mb-1 uppercase tracking-wider">Email Protocol</div>
                                        <div className="flex items-center justify-between p-2 bg-white/5 border border-white/5 rounded hover:border-emerald-500/30 transition-colors">
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <Mail size={14} className="text-stone-400 shrink-0" />
                                                <span className="text-xs text-stone-300 truncate">namanjainpy@gmail.com</span>
                                            </div>
                                            <button onClick={handleCopyEmail} className="text-stone-500 hover:text-white transition-colors shrink-0 ml-2">
                                                {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <div className="text-[9px] text-emerald-500/70 mb-1 uppercase tracking-wider">Voice Link</div>
                                        <div className="flex items-center justify-between p-2 bg-white/5 border border-white/5 rounded hover:border-emerald-500/30 transition-colors">
                                            <div className="flex items-center gap-2 text-stone-300">
                                                <Phone size={14} className="text-stone-400" />
                                                <span className="text-xs">+91 8368063363</span>
                                            </div>
                                            <button onClick={handleCopyPhone} className="text-stone-500 hover:text-white transition-colors shrink-0 ml-2">
                                                {phoneCopied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="group">
                                        <div className="text-[9px] text-emerald-500/70 mb-1 uppercase tracking-wider">Geo Coordinates</div>
                                        <div className="flex items-center justify-between p-2 bg-white/5 border border-white/5 rounded hover:border-emerald-500/30 transition-colors">
                                            <div className="flex items-center gap-2 text-stone-300">
                                                <MapPin size={14} className="text-stone-400" />
                                                <span className="text-xs">New Delhi, India</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ASCII Art or Decorative Block */}
                        <div className="text-[10px] text-stone-600 font-mono opacity-50 select-none hidden md:block pl-2">
                            {`
   __
 _(  )_( )_
(_   _    _)
  (_) (__)
                            `}
                        </div>
                    </div>

                    {/* Right Column: Terminal Input Form (7 Cols) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0f0f11] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                        >
                            {/* Terminal Window Header */}
                            <div className="bg-[#1a1a1d] px-3 py-2 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-stone-500 text-[10px]">
                                    <Terminal size={10} />
                                    <span>bash — input_stream</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-stone-700/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-stone-700/50"></div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-5 font-mono text-sm">

                                <div className="text-stone-600 text-xs mb-4">
                                    # Initialize connection parameters below.<br />
                                </div>

                                <div className="space-y-3">
                                    {/* Name Input Line */}
                                    <div className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 transition-opacity ${focusedLine === 'name' ? 'opacity-100' : 'opacity-70'}`}>
                                        <div className="flex items-center gap-2 min-w-[100px] text-emerald-500 text-xs sm:text-sm">
                                            <span className="text-purple-400">const</span>
                                            <label htmlFor="name" className="text-blue-400">user</label>
                                            <span className="text-stone-500">=</span>
                                        </div>
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                onFocus={() => setFocusedLine('name')}
                                                onBlur={() => setFocusedLine(null)}
                                                onChange={handleChange}
                                                className="w-full bg-[#151518] border-none rounded px-3 py-2 text-yellow-300 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 placeholder:text-stone-700 text-xs sm:text-sm"
                                                placeholder='"Enter Name";'
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input Line */}
                                    <div className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 transition-opacity ${focusedLine === 'email' ? 'opacity-100' : 'opacity-70'}`}>
                                        <div className="flex items-center gap-2 min-w-[100px] text-emerald-500 text-xs sm:text-sm">
                                            <span className="text-purple-400">let</span>
                                            <label htmlFor="email" className="text-blue-400">email</label>
                                            <span className="text-stone-500">=</span>
                                        </div>
                                        <div className="flex-1 relative">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                onFocus={() => setFocusedLine('email')}
                                                onBlur={() => setFocusedLine(null)}
                                                onChange={handleChange}
                                                className="w-full bg-[#151518] border-none rounded px-3 py-2 text-yellow-300 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 placeholder:text-stone-700 text-xs sm:text-sm"
                                                placeholder='"Enter Email";'
                                            />
                                        </div>
                                    </div>

                                    {/* Message Input Block */}
                                    <div className={`flex flex-col gap-2 transition-opacity ${focusedLine === 'message' ? 'opacity-100' : 'opacity-70'} pt-2`}>
                                        <div className="flex items-center gap-2 text-emerald-500 text-xs sm:text-sm">
                                            <span className="text-purple-400">func</span>
                                            <label htmlFor="message" className="text-yellow-400">sendMsg</label>
                                            <span className="text-stone-300">() {'{'}</span>
                                        </div>
                                        <div className="pl-4 sm:pl-8 relative">
                                            <div className="absolute left-0 top-3 text-stone-700 flex flex-col gap-4 select-none text-[10px] w-6 text-right border-r border-stone-800 pr-1 h-full">
                                                <span>1</span>
                                                <span>2</span>
                                                <span>3</span>
                                            </div>
                                            <textarea
                                                name="message"
                                                id="message"
                                                required
                                                rows={4}
                                                onFocus={() => setFocusedLine('message')}
                                                onBlur={() => setFocusedLine(null)}
                                                onChange={handleChange}
                                                className="w-full bg-[#151518] border-none rounded px-4 py-3 text-stone-300 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 placeholder:text-stone-700 leading-relaxed resize-none block text-xs sm:text-sm"
                                                placeholder="// Type your message payload..."
                                            />
                                        </div>
                                        <div className="text-stone-300 text-xs sm:text-sm">{'}'}</div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                                    <div className="text-[10px] text-stone-500 font-mono hidden sm:block">
                                        Ready to compile...
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/50 hover:border-emerald-500 px-6 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group"
                                    >
                                        <span>Run Packet</span>
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                            </form>
                        </motion.div>
                    </div>

                </div>

                {/* System Footer */}
                <div className="mt-6 border-t border-white/5 pt-1 flex flex-col md:flex-row items-center justify-between text-[10px] text-stone-600 font-mono">
                    <div className="mb-2 md:mb-0">
                        PID: 8302 | MEM: 12MB
                    </div>
                    <div className="flex gap-6">
                        <span>STATUS: <span className="text-emerald-500">STABLE</span></span>
                        <span>UPTIME: 99.9%</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
