import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/rehman-shafiq' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'Instagram', href: '#' },
    ];

    const quickLinks = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-[#080808] pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Branding Text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.01] pointer-events-none select-none whitespace-nowrap">
                REHMAN SHAFIQ
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    
                    {/* Col 1: Brand Intro */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="group flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                                <span className="text-black font-black text-xs">RS</span>
                            </div>
                            <span className="text-white font-bold tracking-tighter text-xl uppercase">
                                Rehman<span className="text-cyan-500">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
                            Full-Stack Developer building high-end digital experiences with Laravel & React. Focused on performance, animations, and scalable solutions.
                        </p>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-500 hover:text-cyan-500 transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Socials */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Social</h4>
                        <ul className="space-y-4">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600 text-[10px] font-mono tracking-[0.2em] uppercase">
                        © {currentYear} ALL RIGHTS RESERVED — MUHAMMAD REHMAN SHAFIQUE
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-2"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                            Available for new projects
                        </span>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}