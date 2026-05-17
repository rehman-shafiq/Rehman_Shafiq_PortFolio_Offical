import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/rehman-shafiq' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-rehman-shafiq-241336322/' },
        { name: 'Instagram', href: 'https://www.instagram.com/rehman_shafiq00/' },
    ];

    const quickLinks = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        /* Updated Background Color to match image_775d39.png */
        <footer className="bg-[#030712] pt-28 pb-10 px-6 relative overflow-hidden">
            
            {/* 1. CINEMATIC GRADIENTS */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
            <div className="pointer-events-none absolute -top-24 -left-20 w-96 h-96 bg-cyan-500/[0.03] blur-[120px] rounded-full"></div>
            <div className="pointer-events-none absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/[0.03] blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    
                    {/* Brand Identity */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="group flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                <span className="text-black font-black text-sm">RS</span>
                            </div>
                            <span className="text-white font-bold tracking-tighter text-2xl uppercase italic">
                                Rehman<span className="text-cyan-500 inline-block ml-1">.</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm leading-relaxed text-base font-medium opacity-70">
                            Crafting high-performance digital solutions with a focus on cinematic aesthetics and scalable architecture. 
                        </p>
                    </div>

                    {/* Navigation - Terminal Style */}
                    <div>
                        <h4 className="text-cyan-500/50 font-mono text-[10px] uppercase tracking-[0.5em] mb-10">/Navigation</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-slate-500 hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-widest flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-cyan-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials - Glass Style */}
                    <div>
                        <h4 className="text-cyan-500/50 font-mono text-[10px] uppercase tracking-[0.5em] mb-10">/Connect</h4>
                        <ul className="space-y-4">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-cyan-400 transition-all duration-300 text-sm font-bold uppercase tracking-widest flex items-center gap-3 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-cyan-500 transition-colors"></div>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 2. PREMIUM BOTTOM BAR (Glass Card Effect) */}
                <div className="pt-10 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8 bg-white/[0.01] backdrop-blur-sm rounded-t-3xl p-8">
                    <div className="text-slate-400 text-[10px] font-mono tracking-[0.3em] uppercase">
                        © {currentYear} — REHMAN SHAFIQ
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-4 border border-white/[0.05] px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-xl shadow-inner"
                    >
                        <div className="relative flex items-center justify-center">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping absolute"></span>
                            <span className="w-2 h-2 bg-cyan-500 rounded-full relative"></span>
                        </div>
                        <span className="text-slate-400 text-[9px] font-mono uppercase tracking-[0.2em] font-bold">
                            System Status: <span className="text-cyan-400">Ready for hire</span>
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Background Big Branding Text */}
            <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.01] pointer-events-none select-none whitespace-nowrap tracking-tighter uppercase italic">
                REHMAN SHAFIQ
            </div>
        </footer>
    );
}