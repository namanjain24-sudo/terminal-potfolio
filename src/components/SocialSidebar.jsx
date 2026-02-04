import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Code } from 'lucide-react';

const SocialSidebar = () => {
    const socials = [
        { icon: <Linkedin size={20} strokeWidth={2.5} />, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-500" },
        { icon: <Github size={20} strokeWidth={2.5} />, href: "https://github.com", label: "GitHub", color: "hover:text-white" },
        { icon: <Code size={20} strokeWidth={2.5} />, href: "https://leetcode.com", label: "LeetCode", color: "hover:text-orange-500" },
        { icon: <Mail size={20} strokeWidth={2.5} />, href: "mailto:your.email@example.com", label: "Email", color: "hover:text-emerald-500" },
        { icon: <FileText size={20} strokeWidth={2.5} />, href: "/resume.pdf", label: "Resume", color: "hover:text-purple-500", download: true },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="fixed top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-6 items-center right-6 md:right-auto md:left-1/2 md:ml-4"
        >
            {/* Top Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-[1px] bg-gradient-to-b from-transparent via-white/20 to-white/20"
            />

            {/* Social Icons */}
            <div className="flex flex-col gap-6">
                {socials.map((social, idx) => (
                    <motion.a
                        key={idx}
                        href={social.href}
                        target={social.download ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        download={social.download}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (idx * 0.1) }}
                        className={`text-stone-300 ${social.color} transition-colors p-2 hover:bg-white/5 rounded-full relative group`}
                        title={social.label}
                    >
                        {social.icon}

                        {/* Tooltip Label */}
                        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 text-[10px] text-stone-300 font-mono opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                            {social.label}
                        </span>
                    </motion.a>
                ))}
            </div>

            {/* Bottom Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-[1px] bg-gradient-to-t from-transparent via-white/20 to-white/20"
            />
        </motion.div>
    );
};

export default SocialSidebar;
