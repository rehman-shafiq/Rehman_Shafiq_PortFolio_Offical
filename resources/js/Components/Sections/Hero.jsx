import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';


const AIRobot = ({ mousePosition }) => {
    // Mouse movement calculations for subtle tracking
    const headX = mousePosition.x * 0.7;
    const headY = mousePosition.y * 0.7;
    const eyeX = mousePosition.x * 0.5;
    const eyeY = mousePosition.y * 0.5;

    return (
        <motion.div
            className="absolute right-0 bottom-0 w-72 h-3/4 md:w-96 md:h-full hidden lg:flex items-end justify-end pointer-events-none"
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <svg
                viewBox="0 0 300 400"
                className="w-full h-full"
                style={{
                    filter: 'drop-shadow(0 0 60px rgba(6, 182, 212, 0.4))',
                }}
            >
                <defs>
                    <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="eyeGlow">
                        <stop offset="0%" stopColor="#00ff88" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00ff88" stopOpacity="0.3" />
                    </radialGradient>
                </defs>

                {/* Animated Background Aura */}
                <motion.circle
                    cx="150" cy="120" r="120"
                    fill="url(#robotGradient)"
                    opacity="0.15"
                    animate={{ r: [120, 140, 120] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Head Container - Now Following Mouse */}
                <motion.g
                    animate={{
                        x: headX,
                        y: headY,
                        rotateZ: [0, 2, -2, 0],
                    }}
                    transition={{
                        x: { type: 'spring', damping: 20 },
                        y: { type: 'spring', damping: 20 },
                        rotateZ: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    style={{ transformOrigin: '150px 120px' }}
                >
                    <rect x="100" y="60" width="100" height="120" rx="15" fill="url(#robotGradient)" opacity="0.9" stroke="#06b6d4" strokeWidth="2" />
                    <rect x="105" y="65" width="90" height="110" rx="12" fill="#0f172a" opacity="0.8" stroke="#0ea5e9" strokeWidth="1" />

                    {/* Eyes - Tracking Mouse */}
                    <motion.g animate={{ x: eyeX, y: eyeY }} transition={{ type: 'spring', damping: 15 }}>
                        {/* Left Eye */}
                        <circle cx="130" cy="100" r="12" fill="url(#eyeGlow)" filter="url(#glow)" />
                        <circle cx="130" cy="100" r="8" fill="#00ff88" opacity="0.8" />

                        {/* Right Eye */}
                        <circle cx="170" cy="100" r="12" fill="url(#eyeGlow)" filter="url(#glow)" />
                        <circle cx="170" cy="100" r="8" fill="#00ff88" opacity="0.8" />
                    </motion.g>

                    {/* Mouth/Speaker */}
                    <motion.g animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                        {[0, 8, 16, 24].map((offset) => (
                            <line key={offset} x1={120 + offset} y1="135" x2={125 + offset} y2="135" stroke="#06b6d4" strokeWidth="2" />
                        ))}
                    </motion.g>
                </motion.g>

                {/* Body - Static or subtle movement */}
                <motion.g animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                    <rect x="95" y="200" width="110" height="140" rx="20" fill="url(#robotGradient)" opacity="0.85" stroke="#06b6d4" strokeWidth="2" />
                    <rect x="102" y="208" width="96" height="120" rx="15" fill="#0f172a" opacity="0.7" stroke="#0ea5e9" strokeWidth="1" />
                    {/* Chest lights code remains same... */}
                </motion.g>
            </svg>
        </motion.div>
    );
};

export default function HeroEnhanced() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Screen ke center se distance nikalne ke liye
            const x = (e.clientX - window.innerWidth / 2) / 25;
            const y = (e.clientY - window.innerHeight / 2) / 25;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // ... Rest of your variants (containerVariants, itemVariants, etc.)

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-start overflow-hidden bg-slate-950 px-6 sm:px-12 lg:px-24">
            {/* Background Grid & Particles remain the same... */}

            {/* AI Robot - Hidden on mobile, adjusted size for tablets */}
            <AIRobot mousePosition={mousePosition} />

            {/* Main Content - Text alignment fixed for mobile */}
            <motion.div
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-5xl text-center lg:text-left"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Intro Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-10">
                    <div className="h-[2px] w-8 md:w-12 bg-cyan-500" />
                    <span className="text-cyan-400 font-semibold tracking-widest text-xs md:text-sm uppercase">
                        Muhammad Rehman Shafique
                    </span>
                </div>

                {/* Heading - Responsive Font Sizes */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
                    Transforming <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Ideas Into</span> <br />
                    Digital Reality
                </h1>

                {/* Description - Max width for readability */}
                <p className="text-gray-400 text-sm md:text-lg lg:text-xl max-w-lg mb-10 mx-auto lg:mx-0 leading-relaxed">
                    Building <span className="text-cyan-400 font-medium">AI-powered</span> web experiences with Laravel & React. Specializing in high-end animations and digital innovation.
                </p>

                {/* Buttons - Stack on mobile, side-by-side on desktop */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    {/* Explore Projects Link */}
                    <Link
                        href="#projects" // Yahan apna sahi route path likhein
                        className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 text-center"
                    >
                        Explore Projects
                    </Link>

                    {/* My Story Link */}
                    <Link
                        href="#about" // Yahan apna sahi route path likhein
                        className="px-8 py-4 border border-cyan-500/30 text-white font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-center backdrop-blur-sm"
                    >
                        My Story
                    </Link>
                </div>

            </motion.div>
        </section>
    );
}