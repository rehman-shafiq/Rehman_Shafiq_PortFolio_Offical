import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const AIRobot = ({ scrollPercent, mousePosition }) => {
    // Advanced Scroll Dynamics for Whole Machine body
    const robotX = (scrollPercent / 100) * -80; 
    const robotY = (scrollPercent / 100) * 20;

    // Organic micro-delays for tracking physics
    const headX = (mousePosition?.x ?? 0) * 0.6;
    const headY = (mousePosition?.y ?? 0) * 0.6;
    const eyeX = (mousePosition?.x ?? 0) * 0.4;
    const eyeY = (mousePosition?.y ?? 0) * 0.4;

    // Arms dynamically sway slightly with mouse/scroll movement for extra realism
    const leftArmSway = (mousePosition?.x ?? 0) * 0.2;
    const rightArmSway = (mousePosition?.y ?? 0) * 0.15;

    return (
        <motion.div
            /* 🔴 FIXED: Global 'hidden lg:block' remove kiya taake mobile par show ho. Max heights optimize ki hain mobile limits ke liye */
            className="w-full max-w-[260px] h-[340px] sm:max-w-[320px] sm:h-[420px] md:max-w-[400px] md:h-[520px] lg:absolute lg:right-0 lg:bottom-0 lg:w-[480px] lg:h-[680px] z-50 pointer-events-none mx-auto lg:mx-0"
            style={{
                filter: 'drop-shadow(0 0 45px rgba(6, 182, 212, 0.35)) drop-shadow(0 0 25px rgba(139, 92, 246, 0.1))',
            }}
            animate={{
                x: robotX,
                y: [robotY, robotY - 10, robotY],
            }}
            transition={{
                x: { type: 'spring', damping: 30, stiffness: 65 },
                y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' }
            }}
        >
            <svg viewBox="0 0 400 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="exoCarbon" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#334155" />
                        <stop offset="60%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#090d16" />
                    </linearGradient>
                    <linearGradient id="neonLaser" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="jointChrome" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#64748b" />
                        <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <filter id="coreGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* 1. LOWER BODY & LEGS BASE */}
                <g id="RobotLegs" opacity="0.9">
                    <path d="M140,460 L260,460 L240,495 L160,495 Z" fill="url(#jointChrome)" stroke="#1e293b" strokeWidth="2" />
                    <circle cx="200" cy="478" r="8" fill="#1e293b" stroke="#06b6d4" />
                    <path d="M125,495 L160,495 L145,580 L110,580 Z" fill="url(#exoCarbon)" stroke="#475569" strokeWidth="1.5" />
                    <line x1="135" y1="510" x2="128" y2="570" stroke="#00ff88" strokeWidth="3" filter="url(#coreGlow)" opacity="0.8" />
                    <path d="M240,495 L275,495 L290,580 L255,580 Z" fill="url(#exoCarbon)" stroke="#475569" strokeWidth="1.5" />
                    <line x1="265" y1="510" x2="272" y2="570" stroke="#00ff88" strokeWidth="3" filter="url(#coreGlow)" opacity="0.8" />
                    <polygon points="190,495 210,495 205,525 195,525" fill="#a855f7" opacity="0.5" filter="url(#coreGlow)" />
                </g>

                {/* 2. CORE TORSO & CHEST ENGINE */}
                <g id="RobotTorso">
                    <line x1="180" y1="210" x2="180" y2="250" stroke="#64748b" strokeWidth="5" />
                    <line x1="220" y1="210" x2="220" y2="250" stroke="#64748b" strokeWidth="5" />
                    <path d="M110,250 L290,250 L320,320 L270,460 L130,460 L80,320 Z" fill="url(#exoCarbon)" stroke="#475569" strokeWidth="2.5" />
                    <rect x="130" y="270" width="40" height="45" rx="3" fill="#0f172a" stroke="#1e293b" />
                    <rect x="230" y="270" width="40" height="45" rx="3" fill="#0f172a" stroke="#1e293b" />
                    <line x1="135" y1="280" x2="165" y2="280" stroke="#334155" strokeWidth="2" />
                    <line x1="135" y1="292" x2="165" y2="292" stroke="#334155" strokeWidth="2" />
                    <line x1="235" y1="280" x2="265" y2="280" stroke="#334155" strokeWidth="2" />
                    <line x1="235" y1="292" x2="265" y2="292" stroke="#334155" strokeWidth="2" />
                    <circle cx="200" cy="355" r="32" fill="#020617" stroke="#334155" strokeWidth="3" />
                    <motion.polygon 
                        points="200,335 222,368 178,368" 
                        fill="none" stroke="url(#neonLaser)" strokeWidth="3.5" filter="url(#coreGlow)"
                        animate={{ rotate: [0, 360], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "200px 355px" }}
                    />
                    <circle cx="200" cy="355" r="6" fill="#00ff88" filter="url(#coreGlow)" />
                    <path d="M200,387 L200,440" stroke="#06b6d4" strokeWidth="2" filter="url(#coreGlow)" />
                    <path d="M150,315 L180,345" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M250,315 L220,345" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                </g>

                {/* 3. MECHANICAL ARMS */}
                <motion.g id="LeftArm" animate={{ x: leftArmSway, y: -leftArmSway }} transition={{ type: "spring", damping: 20 }}>
                    <circle cx="90" cy="265" r="16" fill="url(#jointChrome)" stroke="#06b6d4" strokeWidth="1.5" />
                    <path d="M75,275 L60,370 L80,370 L95,275 Z" fill="url(#exoCarbon)" stroke="#475569" />
                    <circle cx="70" cy="375" r="10" fill="#1e293b" stroke="#00ff88" strokeWidth="1" />
                    <path d="M60,385 L45,465 L65,465 L78,385 Z" fill="url(#jointChrome)" stroke="#334155" />
                    <rect x="45" y="465" width="20" height="12" rx="2" fill="#0f172a" stroke="#06b6d4" />
                    <path d="M47,477 L40,500 L36,495" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                    <path d="M55,477 L52,505 L48,500" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" filter="url(#coreGlow)" />
                    <path d="M63,477 L63,500 L59,495" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                <motion.g id="RightArm" animate={{ x: rightArmSway, y: leftArmSway }} transition={{ type: "spring", damping: 20 }}>
                    <circle cx="310" cy="265" r="16" fill="url(#jointChrome)" stroke="#06b6d4" strokeWidth="1.5" />
                    <path d="M305,275 L320,370 L340,370 L325,275 Z" fill="url(#exoCarbon)" stroke="#475569" />
                    <circle cx="330" cy="375" r="10" fill="#1e293b" stroke="#00ff88" strokeWidth="1" />
                    <path d="M322,385 L335,465 L355,465 L340,385 Z" fill="url(#jointChrome)" stroke="#334155" />
                    <rect x="335" y="465" width="20" height="12" rx="2" fill="#0f172a" stroke="#06b6d4" />
                    <path d="M337,477 L337,500 L341,495" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                    <path d="M345,477 L348,505 L352,500" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" filter="url(#coreGlow)" />
                    <path d="M353,477 L360,500 L364,495" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                {/* 4. MACHINE HEAD ENGINE */}
                <motion.g id="MachineHead" animate={{ x: headX, y: headY }} transition={{ type: 'spring', damping: 24, stiffness: 110 }} style={{ transformOrigin: '200px 150px' }}>
                    <polygon points="120,110 280,110 305,165 260,220 140,220 95,165" fill="url(#exoCarbon)" stroke="#475569" strokeWidth="2.5" />
                    <path d="M140,125 L260,125 L245,195 L155,195 Z" fill="url(#jointChrome)" />
                    <circle cx="132" cy="120" r="2" fill="#94a3b8" />
                    <circle cx="268" cy="120" r="2" fill="#94a3b8" />
                    <circle cx="150" cy="210" r="1.5" fill="#06b6d4" />
                    <circle cx="250" cy="210" r="1.5" fill="#06b6d4" />
                    <rect x="150" y="140" width="42" height="26" rx="5" fill="#020617" stroke="#0ea5e9" strokeWidth="2" />
                    <motion.g animate={{ x: eyeX, y: eyeY }}>
                        <circle cx="171" cy="153" r="9" stroke="#6366f1" strokeWidth="1.5" fill="none" />
                        <circle cx="171" cy="153" r="5" fill="#22d3ee" filter="url(#coreGlow)" />
                        <circle cx="169" cy="150" r="1.5" fill="#fff" />
                    </motion.g>
                    <circle cx="235" cy="153" r="15" fill="#020617" stroke="#a855f7" strokeWidth="1.5" />
                    <motion.g animate={{ x: eyeX * 1.1, y: eyeY * 1.1 }}>
                        <circle cx="230" cy="148" r="2.5" fill="#00ff88" filter="url(#coreGlow)" />
                        <circle cx="240" cy="148" r="2.5" fill="#00ff88" filter="url(#coreGlow)" />
                        <circle cx="230" cy="158" r="2.5" fill="#00ff88" filter="url(#coreGlow)" />
                        <circle cx="240" cy="158" r="2.5" fill="#00ff88" filter="url(#coreGlow)" />
                    </motion.g>
                    <line x1="305" y1="140" x2="335" y2="110" stroke="#64748b" strokeWidth="2" />
                    <circle cx="335" cy="110" r="3" fill="#ff0055" filter="url(#coreGlow)" />
                </motion.g>
            </svg>
        </motion.div>
    );
};

export default function HeroEnhanced() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX - window.innerWidth / 2) / 30;
            const y = (e.clientY - window.innerHeight / 2) / 30;
            setMousePosition({ x, y });
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollPercent(scrolled);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-between bg-slate-950 px-6 sm:px-12 lg:px-24 py-12 overflow-hidden">
            
            {/* Main Content Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-3xl text-center lg:text-left flex flex-col justify-center"
            >
                {/* Intro Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-10">
                    <div className="h-[2px] w-8 md:w-12 bg-cyan-500" />
                    <span className="text-cyan-400 font-semibold tracking-widest text-xs md:text-sm uppercase">
                        Muhammad Rehman Shafique
                    </span>
                </div>

                {/* ⚡ RESPONSIVE FLUID HEADING STRUCTURE */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
                    <span>Transforming <br className="hidden sm:inline" /> Ideas Into</span>

                    {/* 🤖 MOBILE RENDER SLOT: Yeh div sirf mobile aur tabs pr center mein show hoga */}
                    <div className="block lg:hidden my-6 w-full flex justify-center">
                        <AIRobot scrollPercent={scrollPercent} mousePosition={mousePosition} />
                    </div>

                    <span className="block lg:inline bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent sm:mt-0"> 
                        Digital Reality
                    </span>
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-lg mb-10 mx-auto lg:mx-0 leading-relaxed">
                    Building <span className="text-cyan-400 font-medium">AI-powered</span> web experiences with Laravel & React. Specializing in high-end animations and digital innovation.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                        href="#projects"
                        className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 text-center"
                    >
                        Explore Projects
                    </Link>

                    <Link
                        href="#about"
                        className="px-8 py-4 border border-cyan-500/30 text-white font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-center backdrop-blur-sm"
                    >
                        My Story
                    </Link>
                </div>
            </motion.div>

            {/* 🤖 DESKTOP RENDER SLOT: Large screens par right side par standalone container mein fixed rahega */}
            <div className="relative w-1/3 h-[500px] hidden lg:block z-10">
                <AIRobot scrollPercent={scrollPercent} mousePosition={mousePosition} />
            </div>

        </section>
    );
}