import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth Scroll Function
    const handleScrollTo = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                // Agar Lenis use ho raha hai to ye automatically smooth hoga, 
                // warna hum standard behavior use karenge
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
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
        <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className={`
                    pointer-events-auto flex items-center justify-between px-8 py-3 
                    rounded-full border transition-all duration-500 ease-in-out
                    ${scrolled 
                        ? 'w-[60%] bg-black/40 border-white/10 backdrop-blur-xl shadow-2xl' 
                        : 'w-[90%] bg-transparent border-transparent'
                    }
                `}
            >
                {/* Logo Section */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                        <span className="text-black font-black text-xs">RS</span>
                    </div>
                    <span className="text-white font-bold tracking-tighter text-xl">
                        REHMAN<span className="text-cyan-500">.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link, i) => (
                        <Link 
                            key={i} 
                            href={link.href}
                            // Yahan function call ho raha hai smooth scroll ke liye
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <motion.div 
                                className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                layoutId="nav-hover"
                            />
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <Link 
                        href="/contact"
                        className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                        Let's Talk
                    </Link>
                </div>
            </motion.nav>
        </header>
    );
}