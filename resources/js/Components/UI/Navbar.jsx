import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            setIsOpen(false);
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`pointer-events-auto flex items-center justify-between px-6 md:px-8 py-3 rounded-full border transition-all duration-500 
                ${scrolled ? 'w-full md:w-[60%] bg-black/60 border-white/10 backdrop-blur-xl' : 'w-full md:w-[95%] bg-transparent border-transparent'}`}
            >
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2 relative z-[110]">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                        <span className="text-black font-black text-xs">RS</span>
                    </div>
                    <span className="text-white font-bold tracking-tighter text-xl">REHMAN SHAFIQ<span className="text-cyan-500">.</span></span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link, i) => (
                        <Link key={i} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group">
                            <span className="relative z-10">{link.name}</span>
                            <motion.div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" layoutId="nav-hover" />
                        </Link>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button onClick={() => setIsOpen(true)} className="p-2 md:hidden flex flex-col gap-1.5 z-[110]">
                    <span className="w-6 h-0.5 bg-white block rounded-full" />
                    <span className="w-4 h-0.5 bg-cyan-500 block self-end rounded-full" />
                </button>
            </motion.nav>

            {/* --- SIDE MENU OVERLAY --- */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Dark Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[120] pointer-events-auto"
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-slate-950 border-l border-white/10 z-[130] pointer-events-auto p-12 flex flex-col justify-between shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                            >
                                Close <span className="text-2xl text-cyan-500">×</span>
                            </button>

                            {/* Links Container */}
                            <div className="mt-20 flex flex-col gap-6">
                                <span className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">Navigation</span>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className="text-4xl font-black text-white uppercase tracking-tighter hover:text-cyan-400 transition-colors block py-2"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Info */}
                            <div className="border-t border-white/5 pt-10">
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Socials</p>
                                <div className="flex gap-6">
                                    <a href="https://github.com/rehman-shafiq" className="text-xs text-white hover:text-cyan-500 transition-colors">GH</a>
                                    <a href="https://www.linkedin.com/in/muhammad-rehman-shafiq-241336322/" className="text-xs text-white hover:text-cyan-500 transition-colors">LI</a>
                                    <a href="https://www.instagram.com/rehman_shafiq/" className="text-xs text-white hover:text-cyan-500 transition-colors">IN</a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}